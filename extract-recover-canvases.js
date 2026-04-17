const fs = require('fs');
const path = require('path');

function resolveExportPath() {
  const cwd = process.cwd();
  const candidates = [
    process.env.CHATGPT_EXPORT_PATH,
    path.join(cwd, 'conversations.json'),
    path.join(cwd, 'chatgpt-export-2026-02-16', 'conversations.json'),
    '/home/elos/chatgpt-export-2026-02-16/conversations.json',
  ].filter(Boolean);
  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) return path.resolve(candidate);
  }
  throw new Error(`Could not find conversations.json. Checked: ${candidates.join(' | ')}`);
}

const EXPORT_PATH = resolveExportPath();
const OUT_DIR = path.resolve(process.env.CANVAS_RECOVERY_OUT_DIR || process.cwd());
const RAW_DIR = path.join(OUT_DIR, 'raw');
const META_DIR = path.join(OUT_DIR, 'meta');
const OPS_DIR = path.join(OUT_DIR, 'ops');
const VARIANTS_DIR = path.join(OUT_DIR, 'variants');
const previousSummaryPath = path.join(OUT_DIR, 'summary.json');
const previousSummary = fs.existsSync(previousSummaryPath) ? JSON.parse(fs.readFileSync(previousSummaryPath, 'utf8')) : null;

for (const dir of [OUT_DIR, RAW_DIR, META_DIR, OPS_DIR, VARIANTS_DIR]) fs.mkdirSync(dir, { recursive: true });

const data = JSON.parse(fs.readFileSync(EXPORT_PATH, 'utf8'));
const idRegex = /\b[A-Z]{2,6}(?:-[A-Z]{2,6})?\.\d{3}(?:\.[A-Z0-9-]{1,24})+\b/g;

function walk(node, visit) {
  if (!node || typeof node !== 'object') return;
  visit(node);
  if (Array.isArray(node)) for (const v of node) walk(v, visit);
  else for (const v of Object.values(node)) walk(v, visit);
}

function slugify(s) {
  return String(s || '')
    .normalize('NFKD')
    .replace(/[^\w\-. ]+/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^[-.]+|[-.]+$/g, '')
    .slice(0, 160) || 'unnamed';
}

function asText(value) {
  if (value == null) return '';
  if (typeof value === 'string') return value;
  if (Array.isArray(value)) return value.map(asText).join('\n');
  if (typeof value === 'object') return JSON.stringify(value, null, 2);
  return String(value);
}

function normalizeBodyForCompare(text) {
  return asText(text).replace(/\r\n/g, '\n');
}

function getPartsText(content) {
  if (!content || !Array.isArray(content.parts)) return '';
  return content.parts.join('');
}

function extractCanvasId(text) {
  const s = asText(text);
  if (!s) return null;
  const headerMatch = s.match(/\*\*Canvas ID:\*\*\s*([^\n\r]+)/i);
  if (headerMatch) return headerMatch[1].trim().replace(/\s{2,}$/, '');
  const matches = s.match(idRegex);
  return matches ? matches[0] : null;
}

function extractTitle(text) {
  const s = asText(text);
  if (!s) return null;
  const titleMatch = s.match(/\*\*Title:\*\*\s*([^\n\r]+)/i);
  if (titleMatch) return titleMatch[1].trim().replace(/\s{2,}$/, '');
  const canvasTitleMatch = s.match(/\*\*Canvas Title:\*\*\s*([^\n\r]+)/i);
  if (canvasTitleMatch) return canvasTitleMatch[1].trim().replace(/\s{2,}$/, '');
  return null;
}

function deriveArtifactKey({ name, body, fallbackUuid }) {
  const fromBody = extractCanvasId(body);
  if (fromBody) return fromBody;
  const fromName = extractCanvasId(name);
  if (fromName) return fromName;
  if (name) return `NAME.${slugify(name)}`;
  return `UUID.${fallbackUuid}`;
}

function scanIdentifiers(convo) {
  const ids = new Set();
  walk(convo, node => {
    if (!node || typeof node !== 'object') return;
    const s = JSON.stringify(node);
    const matches = s.match(idRegex) || [];
    for (const m of matches) ids.add(m);
  });
  return [...ids];
}

function jsonTry(text) {
  try {
    return { ok: true, value: JSON.parse(text), mode: 'json-parse' };
  } catch (error) {
    return { ok: false, error };
  }
}

function escapeControlCharsInJson(text) {
  let out = '';
  let inString = false;
  let escaping = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (inString) {
      if (escaping) {
        out += ch;
        escaping = false;
        continue;
      }
      if (ch === '\\') {
        out += ch;
        escaping = true;
        continue;
      }
      if (ch === '"') {
        out += ch;
        inString = false;
        continue;
      }
      if (ch === '\n') {
        out += '\\n';
        continue;
      }
      if (ch === '\r') {
        out += '\\r';
        continue;
      }
      if (ch === '\t') {
        out += '\\t';
        continue;
      }
      const code = ch.charCodeAt(0);
      if (code < 0x20) {
        out += `\\u${code.toString(16).padStart(4, '0')}`;
        continue;
      }
      out += ch;
      continue;
    }
    out += ch;
    if (ch === '"') inString = true;
  }
  return out;
}

function unescapeJsonishString(text) {
  if (text == null) return null;
  let out = '';
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (ch !== '\\') {
      out += ch;
      continue;
    }
    const next = text[++i];
    if (next == null) break;
    switch (next) {
      case 'n': out += '\n'; break;
      case 'r': out += '\r'; break;
      case 't': out += '\t'; break;
      case 'b': out += '\b'; break;
      case 'f': out += '\f'; break;
      case '"': out += '"'; break;
      case '\\': out += '\\'; break;
      case '/': out += '/'; break;
      case 'u': {
        const hex = text.slice(i + 1, i + 5);
        if (/^[0-9a-fA-F]{4}$/.test(hex)) {
          out += String.fromCharCode(parseInt(hex, 16));
          i += 4;
        } else {
          out += 'u';
        }
        break;
      }
      default:
        out += next;
        break;
    }
  }
  return out;
}

function salvageCreatePayload(raw) {
  if (!raw) return null;
  const nameMatch = raw.match(/"name"\s*:\s*"([\s\S]*?)"\s*,\s*"type"/);
  const typeMatch = raw.match(/"type"\s*:\s*"([\s\S]*?)"\s*,\s*"content"/);
  let contentMatch = raw.match(/"content"\s*:\s*"([\s\S]*?)"\s*}\s*$/);
  let partial = false;
  if (!contentMatch) {
    contentMatch = raw.match(/"content"\s*:\s*"([\s\S]*)$/);
    partial = true;
  }
  if (!nameMatch && !contentMatch) return null;
  return {
    value: {
      name: unescapeJsonishString(nameMatch ? nameMatch[1] : ''),
      type: unescapeJsonishString(typeMatch ? typeMatch[1] : 'document'),
      content: unescapeJsonishString(contentMatch ? contentMatch[1] : ''),
    },
    mode: partial ? 'regex-create-partial' : 'regex-create',
    partial,
  };
}

function findQuotedField(raw, fieldName, startAt = 0) {
  const fieldIdx = raw.indexOf(`"${fieldName}"`, startAt);
  if (fieldIdx < 0) return null;
  const colonIdx = raw.indexOf(':', fieldIdx);
  if (colonIdx < 0) return null;
  const firstQuote = raw.indexOf('"', colonIdx + 1);
  if (firstQuote < 0) return null;
  let out = '';
  let escaping = false;
  for (let i = firstQuote + 1; i < raw.length; i++) {
    const ch = raw[i];
    if (escaping) {
      out += '\\' + ch;
      escaping = false;
      continue;
    }
    if (ch === '\\') {
      escaping = true;
      continue;
    }
    if (ch === '"') return { value: unescapeJsonishString(out), end: i };
    out += ch;
  }
  return { value: unescapeJsonishString(out), end: raw.length, partial: true };
}

function salvageUpdatePayload(raw) {
  if (!raw) return null;
  const updates = [];
  let cursor = 0;
  while (cursor < raw.length) {
    const patternField = findQuotedField(raw, 'pattern', cursor);
    if (!patternField) break;
    const multipleMatch = raw.slice(patternField.end).match(/"multiple"\s*:\s*(true|false)/);
    const replacementField = findQuotedField(raw, 'replacement', patternField.end);
    updates.push({
      pattern: patternField.value,
      multiple: multipleMatch ? multipleMatch[1] === 'true' : false,
      replacement: replacementField ? replacementField.value : null,
      __partial: !!(patternField.partial || (replacementField && replacementField.partial)),
    });
    cursor = replacementField ? replacementField.end + 1 : patternField.end + 1;
  }
  if (!updates.length) return null;
  return {
    value: { updates },
    mode: updates.some(x => x.__partial) ? 'regex-update-partial' : 'regex-update',
    partial: updates.some(x => x.__partial),
  };
}

function parseToolPayload(raw, recipient) {
  const first = jsonTry(raw);
  if (first.ok) return { ok: true, value: first.value, mode: 'json-parse', partial: false };

  const normalized = escapeControlCharsInJson(raw);
  const second = jsonTry(normalized);
  if (second.ok) return { ok: true, value: second.value, mode: 'escaped-control-chars', partial: false };

  const salvaged = recipient === 'canmore.create_textdoc'
    ? salvageCreatePayload(raw)
    : recipient === 'canmore.update_textdoc'
      ? salvageUpdatePayload(raw)
      : null;
  if (salvaged) return { ok: true, value: salvaged.value, mode: salvaged.mode, partial: !!salvaged.partial };

  return {
    ok: false,
    error: String(second.error || first.error),
    modesTried: ['json-parse', 'escaped-control-chars', recipient === 'canmore.create_textdoc' ? 'regex-create' : 'regex-update'],
  };
}

function parseGenericPayload(raw) {
  const first = jsonTry(raw);
  if (first.ok) return { ok: true, value: first.value, mode: 'json-parse', partial: false };

  const normalized = escapeControlCharsInJson(raw);
  const second = jsonTry(normalized);
  if (second.ok) return { ok: true, value: second.value, mode: 'escaped-control-chars', partial: false };

  return {
    ok: false,
    error: String(second.error || first.error),
    modesTried: ['json-parse', 'escaped-control-chars'],
  };
}

function escapeRegex(text) {
  return String(text).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function deriveLiteralCandidate(pattern) {
  if (typeof pattern !== 'string' || !pattern) return null;
  let out = '';
  let whitespace = false;
  for (let i = 0; i < pattern.length; i++) {
    const ch = pattern[i];
    if (ch === '\\') {
      const next = pattern[++i];
      if (next == null) return null;
      if (next === 'n') {
        out += '\n';
        whitespace = true;
        continue;
      }
      if (next === 'r') {
        out += '\r';
        whitespace = true;
        continue;
      }
      if (next === 't') {
        out += '\t';
        whitespace = true;
        continue;
      }
      if (next === 's') {
        out += ' ';
        whitespace = true;
        continue;
      }
      if (/^[\\.^$|?*+()[\]{}\/-]$/.test(next)) {
        out += next;
        continue;
      }
      return null;
    }
    if (/[\[\]{}|^$]/.test(ch)) return null;
    if (ch === '(' || ch === ')' || ch === '?' || ch === '+' || ch === '*') return null;
    out += ch;
    if (/\s/.test(ch)) whitespace = true;
  }
  if (out.trim().length < 12) return null;
  return { literal: out, whitespace };
}

function applyFallbackReplacement(body, pattern, replacement, multiple) {
  const candidate = deriveLiteralCandidate(pattern);
  if (!candidate) return null;

  if (body.includes(candidate.literal)) {
    const exact = new RegExp(escapeRegex(candidate.literal), multiple ? 'g' : '');
    return {
      body: body.replace(exact, replacement),
      mode: 'literal-exact',
    };
  }

  if (!candidate.whitespace) return null;

  const tolerantSource = candidate.literal
    .split(/(\s+)/)
    .map(part => (/^\s+$/.test(part) ? '\\s+' : escapeRegex(part)))
    .join('');
  const tolerant = new RegExp(tolerantSource, multiple ? 'g' : '');
  if (!tolerant.test(body)) return null;
  tolerant.lastIndex = 0;
  return {
    body: body.replace(tolerant, replacement),
    mode: 'literal-whitespace',
  };
}

function summarizeCommentPayload(payload) {
  if (Array.isArray(payload)) return payload.map(summarizeCommentPayload);
  if (!payload || typeof payload !== 'object') return payload;
  const summary = {};
  for (const [key, value] of Object.entries(payload)) {
    if (key === 'comments' && Array.isArray(value)) {
      summary.comments = value.map(comment => {
        if (!comment || typeof comment !== 'object') return comment;
        return {
          comment: comment.comment || comment.text || null,
          author: comment.author || comment.user || null,
          range: comment.range || comment.selection || null,
          id: comment.id || null,
        };
      });
      continue;
    }
    if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean' || value == null) {
      summary[key] = value;
    }
  }
  return summary;
}

function deriveCommentArtifactKey(payload, fallbackArtifactKey, fallbackUuid) {
  const bodyHint = asText(
    payload.textdoc_content ||
    payload.content ||
    payload.document ||
    payload.textdoc ||
    payload.canvas ||
    ''
  );
  const nameHint = payload.textdoc_name || payload.name || payload.title || null;
  if (!nameHint && !extractCanvasId(bodyHint) && fallbackArtifactKey) return fallbackArtifactKey;
  return deriveArtifactKey({
    name: nameHint,
    body: bodyHint,
    fallbackUuid,
  });
}

function createArtifactEntry(artifactKey) {
  return {
    artifactKey,
    recovered: false,
    latestBody: null,
    latestBodyComplete: false,
    latestTime: null,
    latestSource: null,
    names: new Set(),
    titles: new Set(),
    conversations: new Set(),
    operations: [],
    completeBodyOps: 0,
    partialBodyOps: 0,
    appliedPartialOps: 0,
    unresolvedPartialOps: 0,
    commentOps: [],
    variants: [],
    extractedLatestVariantId: null,
    extractedLatestPath: null,
    rawWriteStatus: 'not-written',
  };
}

function createVariantFromFullBody(item, op) {
  const variantId = item.variants.length + 1;
  return {
    variantId,
    seedMessageId: op.messageId,
    seedConversation: op.conversation,
    seedTime: op.createTime,
    seedParseMode: op.parseMode,
    seedHeuristic: op.heuristic,
    latestTime: op.createTime,
    body: op.body,
    bodyComplete: !!op.bodyComplete,
    appliedPartials: 0,
    lineage: [
      {
        opType: op.opType,
        createTime: op.createTime,
        messageId: op.messageId,
        conversation: op.conversation,
        parseMode: op.parseMode,
        heuristic: op.heuristic,
        applyMode: 'full-body',
        pattern: null,
        ambiguousMatchCount: 0,
      },
    ],
  };
}

function tryApplyUpdateToBody(body, pattern, replacement, multiple) {
  try {
    const flags = multiple ? 'g' : '';
    const regex = new RegExp(pattern, flags);
    const nextBody = body.replace(regex, replacement);
    if (nextBody !== body) return { matched: true, body: nextBody, applyMode: 'regex' };
    const fallback = applyFallbackReplacement(body, pattern, replacement, multiple);
    if (fallback && fallback.body !== body) {
      return { matched: true, body: fallback.body, applyMode: fallback.mode };
    }
    return { matched: false };
  } catch (error) {
    return { matched: false, error };
  }
}

function compareVariantRecency(a, b) {
  return (b.latestTime || 0) - (a.latestTime || 0) || b.variantId - a.variantId;
}

const operations = [];
const commentOperations = [];
const allIdentifiers = new Map();
const parseFailures = [];

for (const convo of data) {
  const convoTitle = convo.title || convo.id || 'untitled';
  const convoIdentifiers = scanIdentifiers(convo);
  for (const id of convoIdentifiers) {
    if (!allIdentifiers.has(id)) allIdentifiers.set(id, { id, conversations: new Set(), hits: 0 });
    const item = allIdentifiers.get(id);
    item.conversations.add(convoTitle);
    item.hits += 1;
  }

  const convoOps = [];
  walk(convo, node => {
    if (!node || typeof node !== 'object' || !node.recipient) return;
    if (node.recipient !== 'canmore.create_textdoc' && node.recipient !== 'canmore.update_textdoc' && node.recipient !== 'canmore.comment_textdoc') return;
    convoOps.push(node);
  });
  convoOps.sort((a, b) => (a.create_time || 0) - (b.create_time || 0));

  let lastArtifactKey = null;
  for (const node of convoOps) {
    const payloadText = getPartsText(node.content);
    const parsed = node.recipient === 'canmore.comment_textdoc'
      ? parseGenericPayload(payloadText)
      : parseToolPayload(payloadText, node.recipient);
    if (!parsed.ok) {
      parseFailures.push({
        conversation: convoTitle,
        messageId: node.id,
        recipient: node.recipient,
        error: parsed.error,
        payloadLength: payloadText.length,
        payloadSnippet: payloadText.slice(0, 1200),
        modesTried: parsed.modesTried,
      });
      continue;
    }

    if (node.recipient === 'canmore.comment_textdoc') {
      const payload = parsed.value || {};
      const artifactKey = deriveCommentArtifactKey(payload, lastArtifactKey, node.id);
      commentOperations.push({
        opType: 'comment_textdoc',
        messageId: node.id,
        createTime: node.create_time || null,
        conversation: convoTitle,
        artifactKey,
        parseMode: parsed.mode,
        sourceRecipient: node.recipient,
        payloadSummary: summarizeCommentPayload(payload),
        payloadSnippet: payloadText.slice(0, 1200),
      });
      continue;
    }

    if (node.recipient === 'canmore.create_textdoc') {
      const payload = parsed.value || {};
      const name = payload.name || null;
      const body = asText(payload.content || '');
      const artifactKey = deriveArtifactKey({ name, body, fallbackUuid: node.id });
      lastArtifactKey = artifactKey;
      operations.push({
        opType: 'create_textdoc',
        messageId: node.id,
        createTime: node.create_time || null,
        conversation: convoTitle,
        artifactKey,
        name,
        title: extractTitle(body) || name,
        body,
        bodyLength: body.length,
        fullBody: true,
        bodyComplete: !parsed.partial,
        pattern: null,
        multiple: false,
        heuristic: 'create-payload',
        parseMode: parsed.mode,
        sourceRecipient: node.recipient,
      });
      continue;
    }

    const payload = parsed.value || {};
    const updates = Array.isArray(payload.updates) ? payload.updates : [];
    if (!updates.length) {
      operations.push({
        opType: 'update_textdoc',
        messageId: node.id,
        createTime: node.create_time || null,
        conversation: convoTitle,
        artifactKey: lastArtifactKey || `UUID.${node.id}`,
        name: null,
        title: null,
        body: null,
        bodyLength: 0,
        fullBody: false,
        bodyComplete: false,
        pattern: null,
        multiple: false,
        heuristic: lastArtifactKey ? 'conversation-last-artifact' : 'fallback-uuid',
        parseMode: parsed.mode,
        sourceRecipient: node.recipient,
        unresolvedReason: 'empty-updates-array',
      });
      continue;
    }

    for (let i = 0; i < updates.length; i++) {
      const upd = updates[i] || {};
      const replacement = upd.replacement == null ? null : asText(upd.replacement);
      const pattern = typeof upd.pattern === 'string' ? upd.pattern : null;
      const fullBody = !!replacement && pattern === '.*';
      const provisionalKey = deriveArtifactKey({ name: null, body: replacement || '', fallbackUuid: `${node.id}-${i}` });
      const resolvedKey = extractCanvasId(replacement || '') ? provisionalKey : (lastArtifactKey || provisionalKey);
      if (fullBody) lastArtifactKey = resolvedKey;
      operations.push({
        opType: 'update_textdoc',
        messageId: node.id,
        createTime: node.create_time || null,
        conversation: convoTitle,
        artifactKey: resolvedKey,
        name: null,
        title: extractTitle(replacement || ''),
        body: replacement,
        bodyLength: replacement ? replacement.length : 0,
        fullBody,
        bodyComplete: !parsed.partial && !(upd.__partial),
        pattern,
        multiple: !!upd.multiple,
        heuristic: extractCanvasId(replacement || '') ? 'id-from-replacement' : (lastArtifactKey ? 'conversation-last-artifact' : 'fallback-uuid'),
        parseMode: parsed.mode,
        sourceRecipient: node.recipient,
      });
    }
  }
}

operations.sort((a, b) => (a.createTime || 0) - (b.createTime || 0));
commentOperations.sort((a, b) => (a.createTime || 0) - (b.createTime || 0));

const artifacts = new Map();
const unresolvedPartials = [];
const appliedPartialOps = [];
const regexErrors = [];

for (const op of operations) {
  if (!artifacts.has(op.artifactKey)) artifacts.set(op.artifactKey, createArtifactEntry(op.artifactKey));
  const item = artifacts.get(op.artifactKey);
  if (op.name) item.names.add(op.name);
  if (op.title) item.titles.add(op.title);
  item.conversations.add(op.conversation);
  item.operations.push({
    opType: op.opType,
    createTime: op.createTime,
    messageId: op.messageId,
    conversation: op.conversation,
    fullBody: op.fullBody,
    bodyComplete: op.bodyComplete,
    bodyLength: op.bodyLength,
    heuristic: op.heuristic,
    parseMode: op.parseMode,
    pattern: op.pattern || null,
  });

  if (op.fullBody && typeof op.body === 'string') {
    item.recovered = true;
    if (op.bodyComplete) item.completeBodyOps += 1;
    else item.partialBodyOps += 1;
    item.latestTime = op.createTime || item.latestTime;
    item.latestBody = op.body;
    item.latestBodyComplete = !!op.bodyComplete;
    item.latestSource = {
      opType: op.opType,
      conversation: op.conversation,
      createTime: op.createTime,
      messageId: op.messageId,
      heuristic: op.heuristic,
      parseMode: op.parseMode,
    };
    item.variants.push(createVariantFromFullBody(item, op));
    continue;
  }

  const hasReplacement = typeof op.body === 'string';
  if (!op.pattern || !hasReplacement) {
    item.unresolvedPartialOps += 1;
    unresolvedPartials.push({
      artifactKey: op.artifactKey,
      conversation: op.conversation,
      messageId: op.messageId,
      reason: op.unresolvedReason || (!op.pattern ? 'missing-pattern' : 'missing-replacement'),
      parseMode: op.parseMode,
    });
    continue;
  }

  if (typeof item.latestBody !== 'string') {
    item.unresolvedPartialOps += 1;
    unresolvedPartials.push({
      artifactKey: op.artifactKey,
      conversation: op.conversation,
      messageId: op.messageId,
      reason: 'no-current-body-for-partial-update',
      pattern: op.pattern,
      replacementSnippet: op.body.slice(0, 300),
      parseMode: op.parseMode,
    });
    continue;
  }

  const variantMatches = [];
  let regexError = null;
  for (const variant of item.variants) {
    const attempt = tryApplyUpdateToBody(variant.body, op.pattern, op.body, op.multiple);
    if (attempt.error) {
      regexError = attempt.error;
      break;
    }
    if (attempt.matched) {
      variantMatches.push({
        variant,
        body: attempt.body,
        applyMode: attempt.applyMode,
      });
    }
  }

  if (regexError) {
    item.unresolvedPartialOps += 1;
    regexErrors.push({
      artifactKey: op.artifactKey,
      conversation: op.conversation,
      messageId: op.messageId,
      pattern: op.pattern,
      error: String(regexError),
      parseMode: op.parseMode,
    });
    continue;
  }

  if (!variantMatches.length) {
    item.unresolvedPartialOps += 1;
    unresolvedPartials.push({
      artifactKey: op.artifactKey,
      conversation: op.conversation,
      messageId: op.messageId,
      reason: 'regex-no-match',
      pattern: op.pattern,
      replacementSnippet: op.body.slice(0, 300),
      parseMode: op.parseMode,
    });
    continue;
  }

  variantMatches.sort((a, b) => compareVariantRecency(a.variant, b.variant));
  const chosen = variantMatches[0];
  chosen.variant.body = chosen.body;
  chosen.variant.latestTime = op.createTime || chosen.variant.latestTime;
  chosen.variant.bodyComplete = chosen.variant.bodyComplete && !!op.bodyComplete;
  chosen.variant.appliedPartials += 1;
  chosen.variant.lineage.push({
    opType: op.opType,
    createTime: op.createTime,
    messageId: op.messageId,
    conversation: op.conversation,
    parseMode: op.parseMode,
    heuristic: op.heuristic,
    applyMode: chosen.applyMode,
    pattern: op.pattern,
    ambiguousMatchCount: Math.max(0, variantMatches.length - 1),
  });
  item.latestBody = chosen.variant.body;
  item.latestTime = chosen.variant.latestTime;
  item.latestBodyComplete = chosen.variant.bodyComplete;
  item.appliedPartialOps += 1;
  appliedPartialOps.push({
    artifactKey: op.artifactKey,
    conversation: op.conversation,
    messageId: op.messageId,
    pattern: op.pattern,
    parseMode: op.parseMode,
    applyMode: chosen.applyMode,
    targetVariantId: chosen.variant.variantId,
    matchedVariantIds: variantMatches.map(match => match.variant.variantId),
  });
}

for (const op of commentOperations) {
  if (!artifacts.has(op.artifactKey)) artifacts.set(op.artifactKey, createArtifactEntry(op.artifactKey));
  const item = artifacts.get(op.artifactKey);
  item.conversations.add(op.conversation);
  item.commentOps.push({
    opType: op.opType,
    createTime: op.createTime,
    messageId: op.messageId,
    conversation: op.conversation,
    parseMode: op.parseMode,
    payloadSummary: op.payloadSummary,
    payloadSnippet: op.payloadSnippet,
  });
}

for (const item of artifacts.values()) {
  if (!item.variants.length) continue;
  item.variants.sort((a, b) => a.variantId - b.variantId);
  const latestVariant = [...item.variants].sort(compareVariantRecency)[0];
  item.latestBody = latestVariant.body;
  item.latestTime = latestVariant.latestTime;
  item.latestBodyComplete = latestVariant.bodyComplete;
  item.extractedLatestVariantId = latestVariant.variantId;
}

for (const item of artifacts.values()) {
  if (!item.recovered || !item.latestBody) continue;
  const base = slugify(item.artifactKey);
  const rawPath = path.join(RAW_DIR, `${base}.md`);
  const extractedVariantPath = path.join(VARIANTS_DIR, `${base}--latest-extracted.md`);
  if (!fs.existsSync(rawPath)) {
    item.rawWriteStatus = 'created';
    item.extractedLatestPath = path.relative(OUT_DIR, rawPath).replace(/\\/g, '/');
    continue;
  }
  const existingRaw = fs.readFileSync(rawPath, 'utf8');
  if (normalizeBodyForCompare(existingRaw) === normalizeBodyForCompare(item.latestBody)) {
    item.rawWriteStatus = 'preserved-existing-same';
    item.extractedLatestPath = path.relative(OUT_DIR, rawPath).replace(/\\/g, '/');
    continue;
  }
  item.rawWriteStatus = 'preserved-existing-different';
  item.extractedLatestPath = path.relative(OUT_DIR, extractedVariantPath).replace(/\\/g, '/');
}

const artifactSummaries = [...artifacts.values()].map(item => ({
  artifactKey: item.artifactKey,
  names: [...item.names],
  titles: [...item.titles],
  conversations: [...item.conversations],
  recovered: item.recovered,
  latestTime: item.latestTime,
  latestBodyComplete: item.latestBodyComplete,
  completeBodyOps: item.completeBodyOps,
  partialBodyOps: item.partialBodyOps,
  appliedPartialOps: item.appliedPartialOps,
  unresolvedPartialOps: item.unresolvedPartialOps,
  commentOps: item.commentOps.length,
  variantCount: item.variants.length,
  extractedLatestVariantId: item.extractedLatestVariantId,
  rawWriteStatus: item.rawWriteStatus,
  latestBodyLength: item.latestBody ? item.latestBody.length : 0,
  latestSource: item.latestSource || null,
})).sort((a, b) => a.artifactKey.localeCompare(b.artifactKey));

const conflicts = [];
for (const item of artifacts.values()) {
  const names = [...item.names];
  const titles = [...item.titles];
  if (names.length > 1 || titles.length > 1) {
    conflicts.push({
      artifactKey: item.artifactKey,
      names,
      titles,
      conversations: [...item.conversations],
      operations: item.operations.length,
      latestBodyComplete: item.latestBodyComplete,
      note: 'multiple names/titles observed across recovered operations',
    });
  }
}
conflicts.sort((a, b) => a.artifactKey.localeCompare(b.artifactKey));

const recoveredIds = new Set();
for (const item of artifactSummaries) {
  if (!item.recovered) continue;
  const id = extractCanvasId(item.artifactKey) || (item.artifactKey.startsWith('NAME.') || item.artifactKey.startsWith('UUID.') ? null : item.artifactKey);
  if (id) recoveredIds.add(id);
}

const allIdentifierList = [...allIdentifiers.values()]
  .map(x => ({ id: x.id, conversations: [...x.conversations], hits: x.hits }))
  .sort((a, b) => a.id.localeCompare(b.id));

const missingIdentifiers = allIdentifierList.filter(x => !recoveredIds.has(x.id));

function taxonomyInsert(root, id, recovered) {
  const parts = id.split('.');
  let node = root;
  let currentPath = '';
  for (const part of parts) {
    currentPath = currentPath ? `${currentPath}.${part}` : part;
    if (!node.children[part]) node.children[part] = { name: part, path: currentPath, children: {}, terminal: false, recovered: false, count: 0 };
    node = node.children[part];
    node.count += 1;
  }
  node.terminal = true;
  node.recovered = !!recovered;
}

const taxonomyRoot = { name: 'ROOT', path: '', children: {}, terminal: false, recovered: false, count: 0 };
for (const item of allIdentifierList) taxonomyInsert(taxonomyRoot, item.id, recoveredIds.has(item.id));

function writeTaxonomy(node, depth, lines) {
  const entries = Object.values(node.children).sort((a, b) => a.name.localeCompare(b.name, 'en'));
  for (const entry of entries) {
    const prefix = '  '.repeat(depth);
    const marker = entry.terminal ? (entry.recovered ? '✅' : '◻️') : '📁';
    lines.push(`${prefix}- ${marker} \`${entry.path}\``);
    writeTaxonomy(entry, depth + 1, lines);
  }
}

for (const item of artifacts.values()) {
  if (!item.recovered || !item.latestBody) continue;
  const base = slugify(item.artifactKey);
  const rawPath = path.join(RAW_DIR, `${base}.md`);
  const variantFilePaths = [];
  if (item.variants.length > 1) {
    for (const variant of item.variants) {
      const variantPath = path.join(VARIANTS_DIR, `${base}--v${String(variant.variantId).padStart(2, '0')}.md`);
      fs.writeFileSync(variantPath, variant.body);
      variantFilePaths.push(path.relative(OUT_DIR, variantPath).replace(/\\/g, '/'));
    }
  }

  if (item.rawWriteStatus === 'created') {
    fs.writeFileSync(rawPath, item.latestBody);
  } else if (item.rawWriteStatus === 'preserved-existing-different') {
    fs.writeFileSync(path.join(OUT_DIR, item.extractedLatestPath), item.latestBody);
  }

  fs.writeFileSync(path.join(META_DIR, `${base}.json`), JSON.stringify({
    artifactKey: item.artifactKey,
    names: [...item.names],
    titles: [...item.titles],
    conversations: [...item.conversations],
    latestTime: item.latestTime,
    latestBodyComplete: item.latestBodyComplete,
    latestSource: item.latestSource || null,
    completeBodyOps: item.completeBodyOps,
    partialBodyOps: item.partialBodyOps,
    appliedPartialOps: item.appliedPartialOps,
    unresolvedPartialOps: item.unresolvedPartialOps,
    commentOps: item.commentOps.length,
    variantCount: item.variants.length,
    extractedLatestVariantId: item.extractedLatestVariantId,
    rawWriteStatus: item.rawWriteStatus,
    extractedLatestPath: item.extractedLatestPath,
    variants: item.variants.map(variant => ({
      variantId: variant.variantId,
      seedMessageId: variant.seedMessageId,
      seedConversation: variant.seedConversation,
      seedTime: variant.seedTime,
      seedParseMode: variant.seedParseMode,
      seedHeuristic: variant.seedHeuristic,
      latestTime: variant.latestTime,
      bodyComplete: variant.bodyComplete,
      bodyLength: variant.body.length,
      appliedPartials: variant.appliedPartials,
      lineageLength: variant.lineage.length,
      variantPath: item.variants.length > 1 ? `variants/${base}--v${String(variant.variantId).padStart(2, '0')}.md` : null,
    })),
    variantPaths: variantFilePaths,
    operations: item.operations,
  }, null, 2));
  if (item.variants.length > 1) {
    fs.writeFileSync(path.join(META_DIR, `${base}.variants.json`), JSON.stringify({
      artifactKey: item.artifactKey,
      rawWriteStatus: item.rawWriteStatus,
      extractedLatestPath: item.extractedLatestPath,
      variants: item.variants.map(variant => ({
        variantId: variant.variantId,
        seedMessageId: variant.seedMessageId,
        seedConversation: variant.seedConversation,
        seedTime: variant.seedTime,
        latestTime: variant.latestTime,
        bodyComplete: variant.bodyComplete,
        bodyLength: variant.body.length,
        appliedPartials: variant.appliedPartials,
        lineage: variant.lineage,
        variantPath: `variants/${base}--v${String(variant.variantId).padStart(2, '0')}.md`,
      })),
    }, null, 2));
  }
  if (item.commentOps.length) {
    fs.writeFileSync(path.join(META_DIR, `${base}.comments.json`), JSON.stringify({
      artifactKey: item.artifactKey,
      commentOps: item.commentOps,
    }, null, 2));
  }
}

for (const item of artifacts.values()) {
  if (!item.commentOps.length || item.recovered) continue;
  const base = slugify(item.artifactKey);
  fs.writeFileSync(path.join(META_DIR, `${base}.comments.json`), JSON.stringify({
    artifactKey: item.artifactKey,
    commentOps: item.commentOps,
  }, null, 2));
}

fs.writeFileSync(path.join(OPS_DIR, 'textdoc-operations.json'), JSON.stringify(operations, null, 2));
fs.writeFileSync(path.join(OPS_DIR, 'comment-operations.json'), JSON.stringify(commentOperations, null, 2));
fs.writeFileSync(path.join(OPS_DIR, 'parse-failures.json'), JSON.stringify(parseFailures, null, 2));
fs.writeFileSync(path.join(OPS_DIR, 'unresolved-partials.json'), JSON.stringify(unresolvedPartials, null, 2));
fs.writeFileSync(path.join(OPS_DIR, 'applied-partials.json'), JSON.stringify(appliedPartialOps, null, 2));
fs.writeFileSync(path.join(OPS_DIR, 'regex-errors.json'), JSON.stringify(regexErrors, null, 2));
fs.writeFileSync(path.join(OUT_DIR, 'artifact-summary.json'), JSON.stringify(artifactSummaries, null, 2));

const canonicalIndex = [];
canonicalIndex.push('# Recovered Canvas Canonical Index');
canonicalIndex.push('');
canonicalIndex.push(`- export scanned: \`${EXPORT_PATH}\``);
canonicalIndex.push(`- total recovered artifacts: ${artifactSummaries.filter(x => x.recovered).length}`);
canonicalIndex.push(`- complete latest bodies: ${artifactSummaries.filter(x => x.recovered && x.latestBodyComplete).length}`);
canonicalIndex.push(`- partial latest bodies: ${artifactSummaries.filter(x => x.recovered && !x.latestBodyComplete).length}`);
canonicalIndex.push(`- identifiers seen in corpus: ${allIdentifierList.length}`);
canonicalIndex.push(`- identifiers not yet reconstructed: ${missingIdentifiers.length}`);
canonicalIndex.push(`- preserved comment operations: ${commentOperations.length}`);
canonicalIndex.push(`- multi-variant artifacts: ${artifactSummaries.filter(x => x.variantCount > 1).length}`);
canonicalIndex.push('');
canonicalIndex.push('## Recovered Artifacts');
canonicalIndex.push('');
for (const item of artifactSummaries.filter(x => x.recovered)) {
  const title = item.titles[0] || item.names[0] || '';
  const status = item.latestBodyComplete ? 'complete' : 'partial';
  canonicalIndex.push(`- \`${item.artifactKey}\`${title ? ` - ${title}` : ''}`);
  canonicalIndex.push(`  - status: ${status}`);
  canonicalIndex.push(`  - raw: \`raw/${slugify(item.artifactKey)}.md\``);
  if (item.variantCount > 1) canonicalIndex.push(`  - variants: ${item.variantCount} (see \`meta/${slugify(item.artifactKey)}.variants.json\`)`);
  if (item.extractedLatestVariantId) canonicalIndex.push(`  - extracted latest variant: v${String(item.extractedLatestVariantId).padStart(2, '0')}`);
  canonicalIndex.push(`  - meta: \`meta/${slugify(item.artifactKey)}.json\``);
  canonicalIndex.push(`  - ops: complete=${item.completeBodyOps}, partialBodies=${item.partialBodyOps}, appliedPartials=${item.appliedPartialOps}, unresolvedPartials=${item.unresolvedPartialOps}, comments=${item.commentOps}`);
}
fs.writeFileSync(path.join(OUT_DIR, 'canonical-index.md'), canonicalIndex.join('\n'));

const taxonomyLines = [];
taxonomyLines.push('# Dewey Taxonomy Reconstruction');
taxonomyLines.push('');
taxonomyLines.push('- ✅ = identifier has a recovered raw body');
taxonomyLines.push('- ◻️ = identifier observed in corpus but not yet reconstructed');
taxonomyLines.push('- 📁 = namespace branch');
taxonomyLines.push('');
writeTaxonomy(taxonomyRoot, 0, taxonomyLines);
fs.writeFileSync(path.join(OUT_DIR, 'dewey-taxonomy.md'), taxonomyLines.join('\n'));

const missingLines = [];
missingLines.push('# Missing or Not Yet Reconstructed Artifacts');
missingLines.push('');
missingLines.push(`Total identifiers observed without reconstructed body: ${missingIdentifiers.length}`);
missingLines.push('');
for (const item of missingIdentifiers) {
  missingLines.push(`- \`${item.id}\` (${item.conversations.slice(0, 5).join(' | ')})`);
}
fs.writeFileSync(path.join(OUT_DIR, 'missing-artifacts.md'), missingLines.join('\n'));

const partialLines = [];
partialLines.push('# Partial Artifact Recovery');
partialLines.push('');
partialLines.push(`Artifacts with partial latest bodies: ${artifactSummaries.filter(x => x.recovered && !x.latestBodyComplete).length}`);
partialLines.push(`Applied partial regex updates: ${appliedPartialOps.length}`);
partialLines.push(`Unresolved partial operations: ${unresolvedPartials.length}`);
partialLines.push(`Regex errors: ${regexErrors.length}`);
partialLines.push(`Preserved comment operations: ${commentOperations.length}`);
partialLines.push(`Artifacts with multiple full-body variants: ${artifactSummaries.filter(x => x.variantCount > 1).length}`);
partialLines.push('');
for (const item of artifactSummaries.filter(x => x.recovered && !x.latestBodyComplete)) {
  partialLines.push(`- \`${item.artifactKey}\` latest body is partial`);
}
if (unresolvedPartials.length) {
  partialLines.push('');
  partialLines.push('## Unresolved Partial Operations');
  for (const item of unresolvedPartials.slice(0, 500)) {
    partialLines.push(`- message \`${item.messageId}\` artifact \`${item.artifactKey}\` reason=${item.reason}`);
  }
  if (unresolvedPartials.length > 500) partialLines.push(`- ... truncated ${unresolvedPartials.length - 500} additional unresolved entries in \`ops/unresolved-partials.json\``);
}
fs.writeFileSync(path.join(OUT_DIR, 'partial-artifacts.md'), partialLines.join('\n'));

const variantLines = [];
variantLines.push('# Variant Artifact Recovery');
variantLines.push('');
variantLines.push(`Artifacts with multiple full-body variants: ${artifactSummaries.filter(x => x.variantCount > 1).length}`);
variantLines.push(`Artifacts whose existing raw file was preserved against a different extracted latest body: ${artifactSummaries.filter(x => x.rawWriteStatus === 'preserved-existing-different').length}`);
variantLines.push('');
for (const item of artifactSummaries.filter(x => x.variantCount > 1)) {
  variantLines.push(`- \`${item.artifactKey}\``);
  variantLines.push(`  - variants: ${item.variantCount}`);
  variantLines.push(`  - latest extracted variant: v${String(item.extractedLatestVariantId || 0).padStart(2, '0')}`);
  variantLines.push(`  - meta: \`meta/${slugify(item.artifactKey)}.variants.json\``);
}
fs.writeFileSync(path.join(OUT_DIR, 'variant-artifacts.md'), variantLines.join('\n'));

const conflictLines = [];
conflictLines.push('# Conflicting Artifact Signals');
conflictLines.push('');
conflictLines.push(`Total artifacts with multiple names/titles: ${conflicts.length}`);
conflictLines.push('');
for (const item of conflicts) {
  conflictLines.push(`- \`${item.artifactKey}\``);
  if (item.names.length) conflictLines.push(`  - names: ${item.names.join(' | ')}`);
  if (item.titles.length) conflictLines.push(`  - titles: ${item.titles.join(' | ')}`);
  conflictLines.push(`  - latest body: ${item.latestBodyComplete ? 'complete' : 'partial'}`);
  conflictLines.push(`  - conversations: ${item.conversations.slice(0, 6).join(' | ')}`);
}
fs.writeFileSync(path.join(OUT_DIR, 'conflicting-artifacts.md'), conflictLines.join('\n'));

function familyKeyForArtifact(artifactKey) {
  const id = extractCanvasId(artifactKey) || artifactKey;
  const parts = id.split('.');
  return parts.length >= 2 ? `${parts[0]}.${parts[1]}` : parts[0];
}

const familyMap = new Map();
for (const item of artifactSummaries) {
  const family = familyKeyForArtifact(item.artifactKey);
  if (!familyMap.has(family)) familyMap.set(family, { family, recovered: 0, complete: 0, partial: 0, conflicts: 0, variantArtifacts: 0, items: [] });
  const entry = familyMap.get(family);
  if (item.recovered) {
    entry.recovered += 1;
    if (item.latestBodyComplete) entry.complete += 1;
    else entry.partial += 1;
  }
  if (item.variantCount > 1) entry.variantArtifacts += 1;
  if (conflicts.find(x => x.artifactKey === item.artifactKey)) entry.conflicts += 1;
  entry.items.push(item);
}

const librarianLines = [];
librarianLines.push('# Librarian Master Index');
librarianLines.push('');
librarianLines.push('Purpose: first-class recovery registry for the reconstructed canvas corpus.');
librarianLines.push('');
librarianLines.push('## Summary');
librarianLines.push('');
librarianLines.push(`- recovered artifacts: ${artifactSummaries.filter(x => x.recovered).length}`);
librarianLines.push(`- complete latest bodies: ${artifactSummaries.filter(x => x.recovered && x.latestBodyComplete).length}`);
librarianLines.push(`- partial latest bodies: ${artifactSummaries.filter(x => x.recovered && !x.latestBodyComplete).length}`);
librarianLines.push(`- missing identifiers: ${missingIdentifiers.length}`);
librarianLines.push(`- preserved comment operations: ${commentOperations.length}`);
librarianLines.push(`- conflicting artifacts: ${conflicts.length}`);
librarianLines.push(`- multi-variant artifacts: ${artifactSummaries.filter(x => x.variantCount > 1).length}`);
librarianLines.push('');
librarianLines.push('## Families');
librarianLines.push('');
for (const family of [...familyMap.values()].sort((a, b) => a.family.localeCompare(b.family))) {
  librarianLines.push(`### \`${family.family}\``);
  librarianLines.push(`- recovered: ${family.recovered}`);
  librarianLines.push(`- complete: ${family.complete}`);
  librarianLines.push(`- partial: ${family.partial}`);
  librarianLines.push(`- conflicts: ${family.conflicts}`);
  librarianLines.push(`- variants: ${family.variantArtifacts}`);
  for (const item of family.items.filter(x => x.recovered).sort((a, b) => a.artifactKey.localeCompare(b.artifactKey)).slice(0, 40)) {
    const label = item.titles[0] || item.names[0] || '';
    librarianLines.push(`  - \`${item.artifactKey}\`${label ? ` - ${label}` : ''} [${item.latestBodyComplete ? 'complete' : 'partial'}${item.variantCount > 1 ? `, variants=${item.variantCount}` : ''}]`);
  }
  if (family.items.filter(x => x.recovered).length > 40) librarianLines.push(`  - ... ${family.items.filter(x => x.recovered).length - 40} more recovered items in this family`);
  librarianLines.push('');
}
fs.writeFileSync(path.join(OUT_DIR, 'librarian-master-index.md'), librarianLines.join('\n'));

const textdocParseFailures = parseFailures.filter(x => x.recipient !== 'canmore.comment_textdoc');
const commentParseFailures = parseFailures.filter(x => x.recipient === 'canmore.comment_textdoc');

const summary = {
  exportPath: EXPORT_PATH,
  recoveredArtifacts: artifactSummaries.filter(x => x.recovered).length,
  completeLatestBodies: artifactSummaries.filter(x => x.recovered && x.latestBodyComplete).length,
  partialLatestBodies: artifactSummaries.filter(x => x.recovered && !x.latestBodyComplete).length,
  artifactKeysObserved: artifactSummaries.length,
  totalOperations: operations.length,
  commentOperations: commentOperations.length,
  multiVariantArtifacts: artifactSummaries.filter(x => x.variantCount > 1).length,
  fullBodyOperations: operations.filter(x => x.fullBody).length,
  completeBodyOperations: operations.filter(x => x.fullBody && x.bodyComplete).length,
  partialBodyOperations: operations.filter(x => x.fullBody && !x.bodyComplete).length,
  appliedPartialOperations: appliedPartialOps.length,
  unresolvedPartialOperations: unresolvedPartials.length,
  regexErrors: regexErrors.length,
  parseFailures: textdocParseFailures.length,
  totalParseFailures: parseFailures.length,
  commentParseFailures: commentParseFailures.length,
  identifiersSeen: allIdentifierList.length,
  missingIdentifiers: missingIdentifiers.length,
  conflictingArtifacts: conflicts.length,
  preservedRawDivergences: artifactSummaries.filter(x => x.rawWriteStatus === 'preserved-existing-different').length,
  previousSummary,
};
fs.writeFileSync(path.join(OUT_DIR, 'summary.json'), JSON.stringify(summary, null, 2));

if (previousSummary) {
  fs.writeFileSync(path.join(OUT_DIR, 'pass-comparison.json'), JSON.stringify({
    previousSummary,
    currentSummary: summary,
    delta: {
      recoveredArtifacts: summary.recoveredArtifacts - (previousSummary.recoveredArtifacts || 0),
      parseFailures: summary.parseFailures - (previousSummary.parseFailures || 0),
      missingIdentifiers: summary.missingIdentifiers - (previousSummary.missingIdentifiers || 0),
      conflictingArtifacts: summary.conflictingArtifacts - (previousSummary.conflictingArtifacts || 0),
    }
  }, null, 2));
}

console.log(JSON.stringify(summary, null, 2));

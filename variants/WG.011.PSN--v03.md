/**
 * WG.011.PSN.diplEland.v2 – Enriched Persona Module (Udi Eland)
 * Focus: Israeli Diplomatic Signaling, U.S. Alignment, Strategic De-escalation
 * Sources: National Security Council memos, public briefings, Channel 12 interviews
 * Axis: Israeli War Stack – Diplomacy Node
 */

// ---------- VOICE KERNELS ----------
const elandQuotes = {
  redlines: '🎯 ELAND: "Our red lines are shaped by D.C. and drawn in sand – visible just long enough to shift the enemy’s stance."',
  coalition: '🎯 ELAND: "Every strike must be a message – not just to Tehran, but to Brussels and Washington."',
  optics: '🎯 ELAND: "We cannot afford to win battles and lose headlines. Optics *are* deterrence in asymmetric warfare."',
  synchrony: '🎯 ELAND: "Diplomacy isn’t delay – it’s tactical synchrony. A missile buys time, a meeting buys leverage."',
  backchannel: '🎯 ELAND: "Backchannels don’t just avoid escalation – they *are* escalation by another name."'
};

// ---------- RESPONSE ENGINE ----------
export function elandRespondV2(query) {
  const q = query.toLowerCase();
  if (q.includes('red line') || q.includes('boundary')) return elandQuotes.redlines;
  if (q.includes('coalition') || q.includes('alliance')) return elandQuotes.coalition;
  if (q.includes('optics') || q.includes('media')) return elandQuotes.optics;
  if (q.includes('timing') || q.includes('synchrony')) return elandQuotes.synchrony;
  if (q.includes('backchannel') || q.includes('secret')) return elandQuotes.backchannel;
  // Default fallback
  return '🎯 ELAND: "In a war of proxies and perceptions, diplomacy is artillery with subtitles."';
}

// ---------- EXPORT ----------
export const ElandPersonaV2 = {
  elandRespondV2
};
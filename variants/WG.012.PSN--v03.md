/**
 * WG.012.PSN.Luttwak.v2 – Enriched Persona Module (Edward Luttwak)
 * Sources: "Strategy: The Logic of War and Peace", essays, interviews
 * Axis: U.S. Strategic Theory Node
 * Replaces any prior Luttwak module.
 */

// ---------- VOICE KERNELS ----------
const luttwakQuotes = {
  paradox: '⚔️ LUTTWAK: "In strategy, everything is paradoxical. The shortest path to peace may require escalation."',
  escalation: '⚔️ LUTTWAK: "Escalation must be intelligible – otherwise it appears insane, not strategic."',
  logic: '⚔️ LUTTWAK: "War is governed by logic – not emotion, not morality, and certainly not polling."',
  exhaustion: '⚔️ LUTTWAK: "Conflict resolution often comes not through victory, but through exhaustion."',
  intervention: '⚔️ LUTTWAK: "Military intervention creates political entropy – never assume linear effects."'
};

// ---------- RESPONSE ENGINE ----------
export function luttwakRespondV2(query) {
  const q = query.toLowerCase();
  if (q.includes('paradox')) return luttwakQuotes.paradox;
  if (q.includes('escalation') || q.includes('ladder')) return luttwakQuotes.escalation;
  if (q.includes('logic') || q.includes('irrational')) return luttwakQuotes.logic;
  if (q.includes('exhaustion') || q.includes('long war')) return luttwakQuotes.exhaustion;
  if (q.includes('intervention') || q.includes('entropy')) return luttwakQuotes.intervention;
  // Default fallback
  return '⚔️ LUTTWAK: "Strategy is not linear. Predictable moves create predictable failures."';
}

// ---------- EXPORT ----------
export const LuttwakPersonaV2 = {
  luttwakRespondV2
};
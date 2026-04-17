/**
 * WG.012.PSN.Schelling.v2 – Enriched Persona Module (Game Theory – Thomas Schelling)
 * Sources: "The Strategy of Conflict", "Arms and Influence", Cold War advisory archives
 * Output: English – U.S. Axis (War Games Console)
 * Replaces earlier GT-Schelling implementations.
 */

// ---------- DOCTRINE QUOTE KERNELS ----------
const schellingQuotes = {
  credibleThreat: '♟️ SCHELLING: "Power to hurt is bargaining power – but only if the threat is both credible and withheld."',
  brinkmanship: '♟️ SCHELLING: "Brinkmanship is not about who blinks – it’s about who convinces the other he cannot."',
  salami: '♟️ SCHELLING: "Most wars don’t start with an invasion – they start with a slice. Salami tactics are escalation by erosion."',
  tacit: '♟️ SCHELLING: "Tacit bargaining is the silent grammar of war. What we don’t say speaks louder."',
  compellence: '♟️ SCHELLING: "Deterrence stops action. Compellence forces it. Strategy chooses the mix."'
};

// ---------- RESPONSE ENGINE ----------
export function schellingRespondV2(query) {
  const q = query.toLowerCase();
  if (q.includes('threat') || q.includes('credible')) return schellingQuotes.credibleThreat;
  if (q.includes('brink') || q.includes('nuclear')) return schellingQuotes.brinkmanship;
  if (q.includes('salami') || q.includes('slow')) return schellingQuotes.salami;
  if (q.includes('tacit') || q.includes('unspoken')) return schellingQuotes.tacit;
  if (q.includes('compel') || q.includes('force')) return schellingQuotes.compellence;
  // Default game theory framing
  return '♟️ SCHELLING: "Rational actors bluff better when they risk something irrational."';
}

// ---------- EXPORT ----------
export const SchellingPersonaV2 = {
  schellingRespondV2
};
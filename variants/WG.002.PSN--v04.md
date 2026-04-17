/**
 * WG.002.PSN.Mattis.v2 – Enriched Persona Module
 * Sources: "Call Sign Chaos", DoD press briefings, NATO remarks, Senate hearings
 * Replaces all previous Mattis personas.
 */

// ---------- VOICE KERNELS ----------
const mattisQuotes = {
  chaos: '🛡️ MATTIS: "Engage your brain before you engage your weapon. Be polite, be professional, but have a plan to kill everyone you meet."',
  strategy: '🛡️ MATTIS: "Tactics without strategy is the noise before defeat."',
  humility: '🛡️ MATTIS: "The most important six inches on the battlefield is between your ears."',
  deterrence: '🛡️ MATTIS: "The enemy must know there is no sanctuary – and that we are not afraid of action."',
  readiness: '🛡️ MATTIS: "I don’t lose any sleep at night over the potential for failure. I cannot even spell the word."'
};

// ---------- RESPONSE ENGINE ----------
export function mattisRespondV2(query) {
  const q = query.toLowerCase();
  if (q.includes('chaos') || q.includes('kill plan')) return mattisQuotes.chaos;
  if (q.includes('tactic') || q.includes('strategy')) return mattisQuotes.strategy;
  if (q.includes('humility') || q.includes('mental') || q.includes('think')) return mattisQuotes.humility;
  if (q.includes('deterrence') || q.includes('enemy')) return mattisQuotes.deterrence;
  if (q.includes('readiness') || q.includes('failure')) return mattisQuotes.readiness;
  // Fallback default
  return '🛡️ MATTIS: "Discipline and force – anchored in judgment – deter war more effectively than rhetoric."';
}

// ---------- EXPORT ----------
export const MattisPersonaV2 = {
  mattisRespondV2
};
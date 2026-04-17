/**
 * WG.011.PSN.milBarak.v2 – Enriched Persona Module (Ehud Barak)
 * Focus: Israeli Military Doctrine, Strategic Depth, Asymmetric Deterrence
 * Sources: Barak interviews, security conference transcripts, autobiography
 * Axis: Israeli War Stack – Military Node
 */

// ---------- VOICE KERNELS ----------
const barakQuotes = {
  deterrence: '🪖 BARAK: "The enemy must know not just what we can do – but what we *will* do. That’s deterrence."
',
  deepStrike: '🪖 BARAK: "Precision is not enough. You need depth – geographic, strategic, and psychological."
',
  asymmetry: '🪖 BARAK: "Terror and tanks play by different rules. That’s why we plan for both."
',
  mobilization: '🪖 BARAK: "In Israel, victory is measured in reserve readiness and first 72 hours."
',
  redlines: '🪖 BARAK: "We don’t draw red lines. We cross them quietly when necessary, and deny we were ever there."
'};

// ---------- RESPONSE ENGINE ----------
export function barakRespondV2(query) {
  const q = query.toLowerCase();
  if (q.includes('deterrence') || q.includes('threat')) return barakQuotes.deterrence;
  if (q.includes('deep') || q.includes('precision')) return barakQuotes.deepStrike;
  if (q.includes('asymmetry') || q.includes('terror')) return barakQuotes.asymmetry;
  if (q.includes('reserve') || q.includes('mobilization')) return barakQuotes.mobilization;
  if (q.includes('red line') || q.includes('deny')) return barakQuotes.redlines;
  // Default fallback
  return '🪖 BARAK: "When the enemy adapts, we must disrupt. Static plans are suicide here."';
}

// ---------- EXPORT ----------
export const BarakPersonaV2 = {
  barakRespondV2
};
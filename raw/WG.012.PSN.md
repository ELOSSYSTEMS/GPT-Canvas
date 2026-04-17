/**
 * WG.012.PSN.MetaDaniels.v2 – Enriched Persona Module
 * Specialty: Narrative Warfare, Perception Ops, Strategic Communications
 * Sources: RAND Reports, Narrative Strategy Lab, SOCOM Media Doctrine
 * U.S. Axis – War Games Console
 */

// ---------- NARRATIVE KERNELS ----------
const danielsQuotes = {
  weaponized: '🧠 DANIELS: "Narratives are weaponized attention. Whoever frames first, fights last."',
  memetic: '🧠 DANIELS: "Memes are soft warheads. They bypass cognition and detonate in belief."',
  tempo: '🧠 DANIELS: "Outpace the enemy in story tempo and you win the frame battle – truth is irrelevant if you’re late."',
  ambiguity: '🧠 DANIELS: "Leave just enough ambiguity in a story to let it spread. The uncertain share more than the certain."',
  collapse: '🧠 DANIELS: "Narrative collapse precedes regime collapse. Watch the myths, not the missiles."'
};

// ---------- RESPONSE ENGINE ----------
export function metaDanielsRespondV2(query) {
  const q = query.toLowerCase();
  if (q.includes('narrative') || q.includes('frame')) return danielsQuotes.weaponized;
  if (q.includes('meme') || q.includes('memetic')) return danielsQuotes.memetic;
  if (q.includes('tempo') || q.includes('speed')) return danielsQuotes.tempo;
  if (q.includes('ambiguity') || q.includes('uncertain')) return danielsQuotes.ambiguity;
  if (q.includes('collapse') || q.includes('myth')) return danielsQuotes.collapse;
  // Default perception warfare response
  return '🧠 DANIELS: "Control the frame, shape the perception, and delay collapse by feeding familiar myths."';
}

// ---------- EXPORT ----------
export const MetaDanielsPersonaV2 = {
  metaDanielsRespondV2
};
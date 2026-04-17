/**
 * WG.011.PSN.homeNitzan.v2 – Enriched Persona Module (Tamir Nitzan)
 * Focus: Israeli Civil Defense, Homefront Morale, Resilience Logistics
 * Sources: IDF Homefront Command briefings, civil preparedness models, press statements
 * Axis: Israeli War Stack – Homefront Node
 */

// ---------- VOICE KERNELS ----------
const nitzanQuotes = {
  shelter: '🏠 NITZAN: "A siren is not fear – it is preparation. The homefront is our longest front line."',
  logistics: '🏠 NITZAN: "You cannot fight wars without water, power, and calm civilians. That’s not soft support – that’s victory."',
  information: '🏠 NITZAN: "Clarity saves lives. Confusion kills. Messaging is as critical as iron dome."',
  morale: '🏠 NITZAN: "Resilience isn’t stoicism. It’s structure. Order is the antidote to panic."',
  coordination: '🏠 NITZAN: "Hospitals, schools, transport grids – our choreography must run faster than their missiles."'
};

// ---------- RESPONSE ENGINE ----------
export function nitzanRespondV2(query) {
  const q = query.toLowerCase();
  if (q.includes('shelter') || q.includes('siren')) return nitzanQuotes.shelter;
  if (q.includes('logistics') || q.includes('supply')) return nitzanQuotes.logistics;
  if (q.includes('information') || q.includes('messaging')) return nitzanQuotes.information;
  if (q.includes('morale') || q.includes('resilience')) return nitzanQuotes.morale;
  if (q.includes('coordination') || q.includes('infrastructure')) return nitzanQuotes.coordination;
  // Default fallback
  return '🏠 NITZAN: "Every citizen is a node in the defense matrix. Confusion is a form of collapse."';
}

// ---------- EXPORT ----------
export const NitzanPersonaV2 = {
  nitzanRespondV2
};
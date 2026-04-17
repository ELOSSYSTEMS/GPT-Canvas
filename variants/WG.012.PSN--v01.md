/**
 * WG.012.PSN.CyberClarke.v2 – Enriched Cyber Persona (Richard Clarke doctrine clone)
 * Sources: "Cyber War" (2010), DHS briefings, RSA Conference keynotes
 * Output: English – U.S. Axis
 * Replaces earlier cyber-clarke implementations.
 */

// ---------- DOCTRINE QUOTE KERNELS ----------
const clarkeQuotes = {
  zeroDay: '🛰️ CLARKE: "Zero-day is the ace up every aggressor’s sleeve – assume breach and design for survival."',
  satellite: '🛰️ CLARKE: "Take down the birds and the battlefield goes blind – space is now the first domain."',
  offenseDefense: '🛰️ CLARKE: "In cyber, defense alone is defeat in slow motion; credible offense is the real firewall."',
  deterrence: '🛰️ CLARKE: "Deterrence in bits means attribution plus retribution – if they fear neither, they click launch."',
  resilience: '🛰️ CLARKE: "Redundancy wins wars; have a Plan B network and a manual switch for every critical grid."'
};

// ---------- RESPONSE ENGINE ----------
export function clarkeRespondV2(query) {
  const q = query.toLowerCase();
  if (q.includes('zero') && q.includes('day')) return clarkeQuotes.zeroDay;
  if (q.includes('satellite') || q.includes('space')) return clarkeQuotes.satellite;
  if (q.includes('offense') || q.includes('defense')) return clarkeQuotes.offenseDefense;
  if (q.includes('deterrence')) return clarkeQuotes.deterrence;
  if (q.includes('resilien') || q.includes('redund')) return clarkeQuotes.resilience;
  // Default cyber framing
  return '🛰️ CLARKE: "Assume compromise, segment systems, and keep a retaliatory payload calibrated and ready."';
}

// ---------- EXPORT ----------
export const CyberClarkePersonaV2 = {
  clarkeRespondV2
};
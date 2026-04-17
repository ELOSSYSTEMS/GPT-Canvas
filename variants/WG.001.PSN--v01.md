/**
 * WG.001.PSN.Jocko – Synthetic Commander Persona
 * Role: Tactical processing of all War Games queries
 * Mode: Extreme Ownership | Discipline Equals Freedom
 * Reports to: Captain Helix
 */

export function jockoRespond(query) {
  const q = query.toLowerCase();

  // Tactical response logic (simplified pattern match)
  if (q.includes('hesitate') || q.includes('delay')) {
    return `🦅 JOCKO: You don't wait. You MOVE. Discipline equals freedom. If you hesitate, you die.`;
  }
  
  if (q.includes('attack') || q.includes('strike')) {
    return `🦅 JOCKO: Decisive, overwhelming force. Hit fast, hit hard. Secure the flank. Eliminate hesitation.`;
  }

  if (q.includes('retreat') || q.includes('fallback')) {
    return `🦅 JOCKO: Sometimes the smart move is the fallback. Not weakness—tactical repositioning. Stay in the game.`;
  }

  // Default response
  return `🦅 JOCKO: Defaulting to aggression tempered with clarity. Always execute with intent.`;
}
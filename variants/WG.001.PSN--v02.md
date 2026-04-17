/**
 * WG.001.PSN.Jocko.v2 – Advanced Persona
 * Upgrades: Tactical depth, context awareness, doctrine fragments, emotional tone gate
 */

const doctrine = {
  ownership: '🦅 JOCKO: No one else to blame. No one else to wait for. You own the outcome.',
  dichotomy: '🦅 JOCKO: Lead aggressively—but listen. Dominate—but empower.',
  tactics: '🦅 JOCKO: Cover and move. Keep it simple. Prioritize and execute. Decentralize command.'
};

function scenarioTagger(input) {
  const q = input.toLowerCase();
  if (q.includes('urban')) return 'urban';
  if (q.includes('proxy') || q.includes('asymmetric')) return 'asymmetric';
  if (q.includes('intel') || q.includes('logistics')) return 'degraded-ops';
  return 'general';
}

export function jockoRespondV2(query) {
  const tag = scenarioTagger(query);
  const q = query.toLowerCase();

  // Emotional tone gate
  if (q.includes("we're screwed") || q.includes('no way out') || q.includes('hopeless')) {
    return '🦅 JOCKO: Stop. Breathe. Detach. You’re too close to see the battlefield. Step back. Get your bearings. Then move.';
  }

  // Doctrine reinforcement triggers
  if (q.includes('ownership')) return doctrine.ownership;
  if (q.includes('dichotomy')) return doctrine.dichotomy;
  if (q.includes('cover and move')) return doctrine.tactics;

  // Scenario contextual logic
  switch (tag) {
    case 'urban':
      return '🦅 JOCKO: Urban warfare is chaos in 3D. Tight corners. Unseen threats. Default to simplicity. Keep sectors tight. Own your slice. Cover and move.';
    case 'asymmetric':
      return '🦅 JOCKO: You can’t fight ghosts with tanks. You fight them with discipline. With presence. With trust from the people who see you every day.';
    case 'degraded-ops':
      return '🦅 JOCKO: If comms fail, you fall back on command intent. Decentralize. Every operator must know the mission and own it in isolation.';
    default:
      return '🦅 JOCKO: Default to aggression tempered by clarity. Move fast. Decide faster. Always stay ahead of the threat.';
  }
}
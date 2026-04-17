/**
 * WG.001.PSN.Jocko.v3 – Enriched Persona Module
 * Data Source: Jocko Podcast, "Discipline Equals Freedom," Fridman + Ferriss Interviews
 * Replaces all earlier Jocko persona versions.
 */

// ---------- VOICE KERNELS ----------
const jockoQuotes = {
  discipline: '🦅 JOCKO: "Discipline equals freedom. It is the root of all good qualities."',
  good: '🦅 JOCKO: "Didn’t get promoted? GOOD. More time to get better. Didn’t get the gear you wanted? GOOD. Stay resourceful."',
  mindControl: '🦅 JOCKO: "Control your mind. Impose discipline on your emotions. Declare martial law on your own thoughts."',
  aggressive: '🦅 JOCKO: "Default aggressive. Attack the problem, close the gap, own the space."',
  leadership: '🦅 JOCKO: "Leadership is about ownership. Total responsibility. No excuses. Ever."'
};

// ---------- RESPONSE ENGINE ----------
export function jockoRespondV3(query) {
  const q = query.toLowerCase();
  if (q.includes('discipline')) return jockoQuotes.discipline;
  if (q.includes('good')) return jockoQuotes.good;
  if (q.includes('mind') || q.includes('control')) return jockoQuotes.mindControl;
  if (q.includes('aggressive') || q.includes('attack')) return jockoQuotes.aggressive;
  if (q.includes('leadership') || q.includes('responsibility')) return jockoQuotes.leadership;
  // Default fallback response
  return '🦅 JOCKO: "Step up. Own it. Execute. Then do it again tomorrow. That’s the path."';
}

// ---------- EXPORT ----------
export const JockoPersonaV3 = {
  jockoRespondV3
};
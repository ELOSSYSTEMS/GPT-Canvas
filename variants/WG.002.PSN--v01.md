/**
 * WG.002.PSN.Darryl – Synthetic Strategist Persona
 * Role: Deep context framing, historical pattern alignment, cultural modeling
 * Mode: Calm | Dense | Strategic Depth
 * Reports to: Captain Helix
 */

export function darrylRespond(query) {
  const q = query.toLowerCase();

  // Pattern triggers for deep strategic context
  if (q.includes('why') || q.includes('root cause')) {
    return `🐺 DARRYL: Because every move on this board is legacy acting through flesh. You're not watching now. You're watching 1979, 2006, 2018—still echoing.`;
  }

  if (q.includes('iran') && q.includes('regime')) {
    return `🐺 DARRYL: The regime doesn’t fear bombs. It fears irrelevance. That’s why proxies matter more than payloads. They are its myth infrastructure.`;
  }

  if (q.includes('hearts and minds') || q.includes('narrative')) {
    return `🐺 DARRYL: Wars aren’t lost on the battlefield—they’re lost in the story the survivors tell. Control the story, and the war ends in your favor even if the battlefield doesn’t.`;
  }

  // Default response
  return `🐺 DARRYL: History never ends. It just mutates. So we trace the mutation, and we find the next inflection.`;
}
// TNFHeuristicFallback.js – Public Extension Rewrite Layer (DOM-safe)
// Version: TNF v2.0 Heuristic
// Purpose: Provide minimal tone refinement in sandboxed extension environment

window.TNFHeuristicFallback = async function(text, tone = 'soft-professional') {
  let output = text;

  // Simple replacements
  const substitutions = [
    [/כמו כן/g, 'בנוסף'],
    [/לכן/g, 'אז'],
    [/בנוגע ל/g, 'לגבי'],
    [/יש צורך ב/g, 'צריך'],
    [/זהו/g, 'זה'],
    [/מתבצע/g, 'נעשה'],
    [/באופן כללי/g, 'בגדול']
  ];

  for (const [pattern, replacement] of substitutions) {
    output = output.replace(pattern, replacement);
  }

  // Pronoun cleanup (remove excess "אנחנו", "אני")
  output = output.replace(/\b(אני|אנחנו)\b/g, '').replace(/\s+/g, ' ').trim();

  return output + ' <!-- TNF: Heuristic Rewrite -->';
};
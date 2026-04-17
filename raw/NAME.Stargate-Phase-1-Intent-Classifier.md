// /elos/stargate/phase1.intentClassifier.js

export function classifyIntent(input) {
  const text = input.trim().toLowerCase();

  let intent = 'general';
  let diagnostics = [];

  if (/translate|rewrite|reword/.test(text)) {
    intent = 'translation';
    diagnostics.push('Detected translation-related keywords.');
  } else if (/summarize|tl;dr/.test(text)) {
    intent = 'summarization';
    diagnostics.push('Detected summarization-related keywords.');
  } else if (/generate|write|compose/.test(text)) {
    intent = 'generation';
    diagnostics.push('Detected generation-related keywords.');
  } else if (/debug|fix|repair/.test(text)) {
    intent = 'debugging';
    diagnostics.push('Detected debugging-related keywords.');
  } else {
    diagnostics.push('No specific keywords matched. Defaulting to general intent.');
  }

  return {
    intent,
    diagnostics,
  };
}
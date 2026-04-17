// /elos/stargate/phase2.rewriteEngine.js

export function rewritePrompt(input, { intent }) {
  const base = input.trim();

  // Simple rules per intent
  switch (intent) {
    case 'translation':
      return `Please translate the following text to clear, modern Hebrew:

${base}`;

    case 'summarization':
      return `Summarize the key points of the following content in bullet form:

${base}`;

    case 'generation':
      return `Write original content based on the following brief. Focus on clarity, engagement, and purpose:

${base}`;

    case 'debugging':
      return `Review the following prompt/code and identify issues or improvements:

${base}`;

    default:
      return `Rewrite the following for clarity, tone, and purpose:

${base}`;
  }
}
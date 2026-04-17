export function patchInput(input) {
  if (!input || input.trim().length === 0) return "[EMPTY INPUT FIXED]";
  if (!/[.!?]$/.test(input)) input += ".";
  if (!/[a-zA-Z\u0590-\u05FF]/.test(input)) return "[UNRECOGNIZED LANGUAGE INPUT]";
  return input.trim();
}
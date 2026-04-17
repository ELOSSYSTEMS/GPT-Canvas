export function checkConstraints(output, maxLength = 1000) {
  if (output.length > maxLength) return false;
  if (!output.includes("✅ ELos Prompt Protocol Complete")) return false;
  return true;
}
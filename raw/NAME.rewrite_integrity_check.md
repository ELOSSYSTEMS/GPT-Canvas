export function verifyRewrite(original, rewritten) {
  if (!rewritten || rewritten.length < 5) return false;
  if (original.toLowerCase() === rewritten.toLowerCase()) return false;
  return true;
}
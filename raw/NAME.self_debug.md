export function selfDebug(original, rewritten, passesCheck) {
  if (!passesCheck) {
    return "[Stargate Error Detected]: Protocol constraint failed. Rewriting...";
  }
  return rewritten;
}
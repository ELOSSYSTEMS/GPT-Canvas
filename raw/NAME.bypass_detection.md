export function isBypass(input) {
  return input.trim().startsWith("!raw");
}
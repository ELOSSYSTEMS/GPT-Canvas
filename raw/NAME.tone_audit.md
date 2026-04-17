export function auditTone(output, expectedTone = "neutral") {
  const toneMarkers = {
    neutral: ["clearly", "in summary", "note that"],
    formal: ["therefore", "hence", "as such"],
    casual: ["basically", "you know", "so yeah"]
  };
  const matches = toneMarkers[expectedTone].some(marker => output.includes(marker));
  return matches ? "PASS" : "CAUTION";
}
// Canvas: EL.420.HBX – Extension Integration Variant
// Function: Native tone rewrite module embedded inside local Chrome extensions (e.g., TranslateOS)

const extensionHebrewRewriter = (inputText) => {
  let output = inputText;

  // Enforce tone simplification
  output = output.replace(/אנא/g, "בבקשה");
  output = output.replace(/לידיעתך/g, "רק שתדע");

  // Convert to
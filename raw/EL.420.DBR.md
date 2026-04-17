// EL.420.DBR – Dabroo Intent Engine for ELOS Translate 2.0
// This module acts as a pre-Stargate middleware layer to clarify and scaffold Hebrew prompts.

/**
 * Expand vague or underspecified prompts into structured, useful inputs.
 */
export function expandIntent(input) {
  const trimmed = input.trim();
  if (trimmed === "" || trimmed.length < 6) {
    return "נא להזין בקשה מלאה וברורה בעברית";
  }

  // Example heuristic: vague patterns
  const vague = ["תכתוב", "תכין", "משהו יפה", "משפט", "תן לי רעיון"];
  if (vague.some(fragment => trimmed.includes(fragment))) {
    return `אנא נסח מחדש את הבקשה עם מטרה ברורה ודוגמה. לדוגמה: "${trimmed}" → "תכתוב לי משפט שיווקי לזר פרחים בעיצוב טבעי בעברית מושכת"`;
  }

  return trimmed;
}

/**
 * Adds tone/style based on implicit audience or persona context.
 */
export function enrichPersona(input, personaTag) {
  const personas = {
    "business": "הפנייה צריכה להיות רשמית וממוקדת.",
    "gift": "הפנייה צריכה להיות חמה, אישית ומלאת רגש.",
    "home-decor": "השתמש בשפה עיצובית ואסתטית שמתאימה לעיצוב פנים."
  };

  if (personaTag && personas[personaTag]) {
    return `${personas[personaTag]} ${input}`;
  }
  return input;
}

/**
 * Wraps broken input in a scaffolded prompt to give it structure.
 */
export function autoScaffold(input) {
  return `בהתבסס על הבקשה הבאה, נסח אותה מחדש בצורה טבעית, ברורה ומתאימה לשיחה בעברית: "${input}"`;
}

/**
 * Executes full Dabroo logic stack and returns structured prompt.
 */
export function dabrooTransform(input, persona = null) {
  let processed = expandIntent(input);
  processed = enrichPersona(processed, persona);
  return autoScaffold(processed);
}

// Usage:
// const finalInput = dabrooTransform("תכתוב משהו לחברה", "gift");
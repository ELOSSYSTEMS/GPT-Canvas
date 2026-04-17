**▧ DA.700.TSK – Dabroo AI / Ops / Build Timeline & Launch Checklist**

---

## 🛠️ DABROO FREE EXTENSION – BUILD PLAN v1

### Objective:
Ship a lightweight, standalone Chrome extension that:
- Visually transforms ChatGPT into “Dabroo Mode”
- Adds a second “Dabroo” button with a speech bubble icon
- On click, rewrites the current user prompt using the Eden Prompt
- Sends the rewritten prompt through the ChatGPT interface as if typed by the user
- Leaves no trace (uninstall = clean exit)

---

## 🧩 PHASE 1: ARCHITECTURE & SCOPE

### 🔧 Extension Structure (Manifest V3)
- `manifest.json`: Permissions, content scripts, UI injection
- `content.js`: Inject UI changes + Eden button
- `eden.js`: Injects prompt logic (the Eden Prompt wrapper)
- `popup.html` *(optional for pro tier later)*: Not used in free version
- `styles.css`: For Dabroo theme and icon styling
- `icons/`: Includes favicon replacements and chat bubble icon

---

## 🖼️ PHASE 2: VISUAL THEMING (Dabroo UI)

### 🎨 Color/Style Injection (via `content.js`)
- Override background, sidebar, and button colors using CSS injection
- Add subtle “Dabroo is active” visual element (e.g., corner ribbon, overlay, favicon swap)

### 🔄 UI Modifications
- Insert second button next to ChatGPT's "send" button:
  - 🗨️ Icon: Blue chat bubble
  - Tooltip: "שלח עם דַּבּרוּ"
  - On click: capture user input → run Eden prompt logic → submit updated prompt
- Hide Eden logic from user unless they upgrade (Pro logic stubbed)

---

## 🧠 PHASE 3: PROMPT INJECTION (Eden)

### ✅ Flow (on button click)
1. Grab user’s input from the chat textarea
2. Run it through Eden Prompt (stored locally in the extension)
3. Replace the user prompt in the UI with the updated one
4. Simulate "Enter" keypress to submit it via ChatGPT

### 🧼 No Persistence
- No localStorage
- No cookies
- No Chrome sync or backend
- Eden logic only lives inside the button’s click event

---

## 🚨 PHASE 4: CLEAN EXIT DESIGN
- User uninstalls extension → everything reverts to normal
- No trace of injected styles, prompts, or persistent behavior
- Confirmed via:
  - No persistent mutation of `window` or `document`
  - All injected elements removed on uninstall

---

## 🗓️ BUILD TIMELINE FOR LAUNCH DAY

| Time | Task |
|------|------|
| 09:00–10:00 | Create folder structure, write `manifest.json`, install base injection |
| 10:00–12:00 | Implement and test UI skinning (colors, logos, favicon swap) |
| 12:00–14:00 | Inject second button + test click capture |
| 14:00–16:00 | Add Eden prompt logic, test prompt transformation |
| 16:00–17:00 | Polish styles, add hover tooltips, confirm clean exit |
| 17:00–18:00 | Final manual QA, zip extension, test in Incognito, package for Web Store submission |

---

## 🧪 FUTURE-PROOFING (Post-launch Tiering Logic – Stub Only)
```js
if (userIsPro) {
   showPromptLogic();
} else {
   hidePromptDetails();
}
```

Allows upgrade path to Pro with minimal refactor.
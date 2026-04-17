**GPTOS – Chrome Web Store Compliance Checklist**

**Purpose:** Ensure that GPTOS complies with all Chrome Web Store policies related to extension behavior, UI injection, data handling, and user transparency. This document is designed to prevent rejection and maintain trust at install time.

---

**I. Manifest Declarations (Manifest v3)**

1. **Permissions**
```json
"permissions": [
  "storage",
  "activeTab",
  "scripting"
],
"host_permissions": [
  "https://chat.openai.com/*"
]
```

2. **Content Scripts**
```json
"content_scripts": [
  {
    "matches": ["https://chat.openai.com/*"],
    "js": ["content.js"],
    "run_at": "document_idle"
  }
]
```

3. **Uninstall URL (Optional)**
```json
"options_page": "options.html",
"chrome_url_overrides": {
  "uninstall": "https://yourdomain.com/goodbye.html"
}
```

---

**II. UI Injection Policy**
- All UI injected into ChatGPT must:
  - Be toggleable
  - Be clearly distinct from native UI (styling, hover tooltips, branding)
  - Never override core ChatGPT functionality (input box, send button, etc.)

**Sidebar/Control Panel Behavior**:
- Respects DOM isolation
- Coexists with Toolbox, AIPRM, etc.
- Auto-collapses or docks when not in use

---

**III. Branding & Attribution**
- Disclaimer: “GPTOS is not affiliated with or endorsed by OpenAI.”
- Distinct branding visuals and naming
- Avoid any OpenAI trademarks in extension name, icon, or promo text

---

**IV. Data Storage & Privacy**
- All user-generated content stored locally (by default)
- Explicit messaging: “Data is stored locally in your browser only.”
- Pro+ cloud sync (if implemented) requires:
  - User opt-in
  - Transparent TOS and Privacy Policy
  - Clear option to export/delete data

---

**V. Behavior Transparency**
- All GPTOS logic (modes, persona shifts, journaling) must be:
  - Explained via onboarding
  - Confirmed in chat via notifications (e.g., “Sharp Mode Active”)
- Avoid silent behavioral manipulation of ChatGPT

---

**VI. Chrome Web Store Rejection Risks**

1. **Unauthorized Site Modification**
- Risk: Modifying `chat.openai.com` without user clarity
- Mitigation: Declare host_permissions; always make injected elements toggleable

2. **Misleading Branding or Affiliation**
- Risk: Appearing as OpenAI-endorsed
- Mitigation: Use disclaimers, unique branding, avoid OpenAI language

3. **Data Handling Without Disclosure**
- Risk: Local or synced data stored without consent or clarity
- Mitigation: Clear privacy messaging, opt-in sync, and data controls

4. **UI Collision or Bloat**
- Risk: Breaking UI from other extensions or injecting obtrusive overlays
- Mitigation: Use clean injection, DOM-safe patterns, and compatibility mode fallback

---

**VII. Extension Store Meta Setup**
- Title: “GPTOS – Behavior & Memory Layer for ChatGPT”
- Short description: “Turn ChatGPT into your own operating system. Add behavior modes, memory, journaling, and task planning—all inside ChatGPT.”
- Long description should explain:
  - What GPTOS does
  - How it works (injected logic, no API required for core features)
  - How user data is handled
  - Compatibility with other extensions

▧ IN.300.POL – Internal / Technical / Compliance Protocol
**GPTOS – Uninstall Protocol & Exit UX**

**Purpose:** Ensure the GPTOS system exits cleanly and transparently when a user chooses to uninstall the extension. Prevent confusion, control the departure narrative, and create strategic retention opportunities before final removal.

---

**I. Pre-Uninstall Soft Lock (In-App)**

1. **Visible “Reset / Remove” Button in Settings Panel**
- Opens confirmation overlay when clicked
- Avoids hard uninstalls via browser UI

2. **Exit Messaging by Tier:**

- **Free Tier**:
  > “You’re about to remove GPTOS. You’ll lose your active mode, journal entries, and behavior logic. Are you sure you want to go back to default?”

- **Pro Tier**:
  > “You’ll lose all saved canvases, journaling history, and persona configurations. This cannot be restored unless synced.”

- **Pro+ Tier**:
  > “You’ll break sync. Stored memories will not be accessible without reinstall + re-authentication. Proceed?”

3. **Call-to-Action Options:**
- Export your data (manual backup if no sync enabled)
- Downgrade to Free Tier (instead of uninstalling)
- Feedback capture form (optional)

---

**II. Post-Uninstall Handling**

1. **Chrome Enforces Clean Removal**
- `localStorage`, `sessionStorage`, and all scripts are removed
- No trace left inside ChatGPT UI

2. **Zero Residual Injection Policy**
- GPTOS must never alter the ChatGPT interface permanently
- No branding, no overwritten components, no leftover UI elements

3. **Uninstall URL Redirect (Optional)**
- Chrome manifest can redirect user to a farewell page:
```json
"chrome_url_overrides": {
  "uninstall": "https://yourdomain.com/goodbye.html"
}
```
- Page includes:
  - Farewell message
  - Optional reinstall prompt
  - Upgrade-to-return offer
  - Feedback form

---

**III. UX Goals**
- User feels in control
- All data clearly explained
- Emotional and functional consequences surfaced
- Clean departure earns brand trust

▧ IN.300.UX – Internal / Technical / UX Protocols
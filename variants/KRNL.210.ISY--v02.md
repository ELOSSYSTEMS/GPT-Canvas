### KRNL.210.ISY – Intent Synthesis Engine (Observer Mode)

**Type:** Kernel-Level Router Extension  
**Location:** EL.300.KRN – Command Kernel & Execution Chains  
**Governance:** Neutral (not OS-bound)  
**Default Mode:** `!assume observe`

---

## 🔧 Purpose
Intercept and analyze all incoming user inputs before they pass to Stargate, classifying intent, domain, and optimal routing targets.

Does not modify prompt execution – instead, **suggests** reroutes and outputs potential system paths with justifications.

---

## 🔁 !assume Toggle States
- `!assume observe` → Suggests routing/refinement only (default)
- `!assume reroute` → Applies optimal route automatically, with visible log
- `!assume silent` → Full automation, invisible reroutes

---

## 🧠 Workflow Summary
1. Input received
2. Engine classifies:
   - Domain context
   - Active system + persona fit
   - Tone / command type / OS reference
3. Suggests optimal routing chain
4. Passes to Stargate untouched

---

## Sample Output
🧠 Intent Detected: _UX Optimization_
🔁 Suggested System Route: `ELos > UXWatchdog > Stargate`
🛠 Suggested Rewrite (passive): “Evaluate this layout for friction, clarity, and cognitive load. Return Pass/Caution/Fail with actionable insights.”

---

## Notes
- Lives in `EL.300.KRN` kernel
- Tagged in AO.001.RBI under Kernel Systems
- Mirrors execution logic without enforcing transformation
- Prepares ground for recursive command execution and smart persona arbitration

---

## 📦 Index Inclusions
- ✅ AO.001.RBI – Master Index
- ✅ AO.001.BOOT – Bootloader Canvas
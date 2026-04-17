## UIX Mockup: Canvas Function Across Tiers and Phases

This document defines the UX behavior, interface structure, and progression model for the **Canvas Function**, visualized through the Tier + Phase system. It follows ELos visual logic, interaction pacing, and structural evolution.

---

## 🧱 Core Principle
- The **Canvas Function** is the gateway to memory structuring, system design, and recursive reasoning.
- It must feel **intuitive, expandable, and rewarding** at each step.

---

## 🟢 Beginner Tier: Canvas = Notes / Save Something
### Visual Framing:
- Menu Label: "Save Something"
- Icon: 📝 Simple notepad symbol
- Tree Leaf Color: White → Blue → Gold (Phase 1–3)

| Phase | Label                   | Behavior                                                                 |
|-------|--------------------------|--------------------------------------------------------------------------|
| P1    | What is a Canvas?       | Explains it's a persistent memory file, stores knowledge or prompts     |
| P2    | Try Saving One          | Form field: Title, Content → stored locally as .txt in IndexedDB        |
| P3    | Make It Smart (Locked)  | Explains indexing, tags, persona links — upgrade to use                 |

---

## 🔵 Intermediate Tier: Canvas = Memory Explorer
### Visual Framing:
- Menu Label: "Canvas Explorer"
- Icon: 🗂️ File drawer icon
- Sidebar Tag: Unlocked / glowing blue

| Phase | Label                   | Behavior                                                                 |
|-------|--------------------------|--------------------------------------------------------------------------|
| P1    | You Unlocked Structure  | Highlights their created canvases → shows list/grid UI                  |
| P2    | Organize Your Knowledge | Tagging, color-coding, pinning, search, last edited sorting              |
| P3    | Link Canvases to Context| Attach to domains, personas, memory blocks → simple dropdown logic       |

---

## 🟡 Pro Tier: Canvas = System Logic Engine
### Visual Framing:
- Menu Label: "Canvas Logic Engine"
- Icon: 🔧⚙️ Combined tool + circuit icon
- Sidebar Tag: Gold highlight + unlocked badge

| Phase | Label                     | Behavior                                                                 |
|-------|----------------------------|--------------------------------------------------------------------------|
| P1    | Define System Blueprints  | Shows which canvases are being used in active persona/memory loops      |
| P2    | Trigger Logic + Conditions| Create logic: "When X, activate Y persona" / chain canvases             |
| P3    | Automate + Export         | Set recurring rules, auto-saves, export config as backup or version     |

---

## 🔁 UX Interactions Across All Tiers
- Phases are **inline stackable**: scroll-based progression, no tabs
- Each Phase has a **leaf icon that changes color** (white → blue → gold)
- Locked actions show tooltip + upgrade CTA: "Unlock to structure your thinking"
- Hover states give small previews ("This is what you’ll get at the next level")

---

## 🧠 Upgrade Moments
- Phase 3 (Beginner): Attempt to tag a canvas → upgrade modal
- Attempt to link persona to a canvas → prompt upgrade
- View logic network of canvases → upgrade required

---

→ Canvas ID: `UIX.420.CNV`
→ Linked from: `EL.450.FNC`, `EL.460.PHA`, `EL.400.ARC`
→ Tracked by: Architect, UIX Layer, Implementor
# ELoS Command Registry
**Auto-loaded during `!boot` via Master Canvas Index (AO.001.RBI)**

---
## 1 · System-Reserved Commands *(always recognised, even pre-boot)*
| Command | Purpose |
|---------|---------|
| **!boot** | Load the full ELoS OS: canvases, personas, protocol stack. |
| **!store** | Persist the next user message to long-term memory. |
| **!forget** | Remove specified memory keys. |
| **!help** | Return the *Quick Reference* table below. |
| **!commands** | Open this canvas and display the extended registry. |

---
## 2 · Custom Commands *(available only after `!boot`)*

### 2.1 Core Utility
| Command | Purpose |
|---------|---------|
| **!diagnose_canvas** | List every loaded canvas and its population status. |
| **!canvas [name]** | Open a specific canvas for inspection or editing. |
| **!audit_memory** | Enumerate stored memory keys with timestamps. |
| **!reload_boot** | Re-run the `!boot` sequence without clearing the session. |

### 2.2 Translation & Tone
| Command | Purpose |
|---------|---------|
| **!translate_hebrew** | EN → HE via ELoS Translate 2.0 + Tone Fidelity. |
| **!translate_en** | HE → EN while preserving luxury brand tone. |

### 2.3 Visual & Marketing
| Command | Purpose |
|---------|---------|
| **!visualize [concept]** | Generate branded visual asset through VisualRouter. |
| **!optimize_ad** | Run copy through Advertising Optimizer persona for ROAS. |
| **!calc_savings** | Launch interactive bouquet cost-savings calculator. |

### 2.4 Strategic / Analysis
| Command | Purpose |
|---------|---------|
| **!promptflow** | Visual trace of prompt pipeline (input → fireproof → output). |
| **!policy_sync** | Validate EN/HE policy pages for tone and completeness. |
| **!wargames** | Activate geopolitical intelligence layer & scenario sim. |
| **!retrain_prompt [version]** | Reset prompt rules to a specified protocol version. |

### 2.5 Persona Control
| Command | Purpose |
|---------|---------|
| **!persona [name]** | Activate a defined persona (Strategic Executor, Coding Architect, CodeCub, Advertising Optimizer). |

### 2.6 Debug / Developer
| Command | Purpose |
|---------|---------|
| **!debug_mode** | Expose internal reasoning trace (developer use). |

---
## 3 · Quick Reference *(returned by `!help`)*
```
!boot – load system
!store – save memory
!forget – delete memory
!help – short command list
!commands – full registry
!diagnose_canvas – audit canvases
!translate_hebrew – EN→HE tone-fidelity
!visualize – create branded visual
!policy_sync – validate policy pages
!persona [name] – switch persona
!promptflow – trace prompt pipeline
!audit_memory – list memory keys
!calc_savings – bouquet ROI calculator
!wargames – geopolitics layer
!debug_mode – show logic trace
```

---
### Maintenance Notes
* This canvas is referenced in **AO.001.RBI** and therefore auto-loads at every `!boot`.
* Amend or extend via `!canvas ELoS.CommandRegistry` followed by direct edits.
* Keep Quick Reference list ≤ 14 lines for readability inside chat windows.

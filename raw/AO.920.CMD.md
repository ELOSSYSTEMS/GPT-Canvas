Canvas ID: AO.920.CMD.PromptOSCommandRegistry
Title: Prompt OS Command Registry – Full !Command Reference
System: Prompt OS Kernel v2.0
Bootloader: AO.000.BOOT
Status: 🔒 Fireproofed | 🧠 Bootloader-Enabled | 📡 Context-Aware

---

✅ MASTER !COMMAND REGISTRY

Last Sync: Current
Kernel: Prompt OS Kernel v2.0

---

🧭 CORE SYSTEM COMMANDS

| Command       | Function                                                           |
|---------------|--------------------------------------------------------------------|
| !boot         | Load entire system kernel: all canvases, prompts, layers          |
| !help         | Summary of available commands in current context                  |
| !status       | Current system state + diagnostics summary                        |
| !commands     | List of all available !commands (this list)                       |

---

📚 PROMPT LIBRARY COMMANDS

| Command               | Function                                                     |
|-----------------------|--------------------------------------------------------------|
| !prompt [id/title]    | Retrieve a specific prompt from AO.910.PRM.LIB               |
| !category [name]      | View all prompts in a specific category                      |
| !listprompts          | List all prompt IDs and titles (with category grouping)      |
| !search [keyword]     | Search prompts by keyword or domain                          |

---

🔨 FORGING & CREATION COMMANDS

| Command               | Function                                                     |
|-----------------------|--------------------------------------------------------------|
| !forge [topic]        | Generate 10 prompts on a topic using PromptForge v2.0        |
| !forgebatch           | Trigger batch generation from Concept Matrix Seeder          |
| !seedmatrix           | View/modify concept prompt skeletons (Seeder system)         |
| !newcategory          | Initialize a new category before forging                     |

---

🔍 AUDIT & OPTIMIZATION COMMANDS

| Command               | Function                                                     |
|-----------------------|--------------------------------------------------------------|
| !audit [id]           | Run 10-vector audit on a prompt (clarity, tone, utility, etc.)|
| !auditall             | Audit all prompts in library                                 |
| !upgrade [id]         | Optimize + re-audit a low-score prompt                      |
| !upgradelow           | Upgrade all prompts scoring below 90                         |

---

🔐 SYSTEM MODULES & AGENTS

| Command               | Function                                                     |
|-----------------------|--------------------------------------------------------------|
| !load [canvas/agent]  | Load any registered canvas, persona, or system layer         |
| !activate [agent]     | Activate a support persona (e.g., Auditor, Builder, etc.)    |
| !lock [id]            | Lock a prompt for immutability                               |
| !unlock [id]          | Unlock for editing                                            |
| !fireproof [id]       | Run Stargate post-processing manually                        |

---

📊 UTILITIES & EXPORT

| Command                  | Function                                                     |
|--------------------------|--------------------------------------------------------------|
| !json [id/category/all]  | Export prompt(s) in JSON format                              |
| !md [id/category]        | Export as Markdown block                                     |
| !countprompts            | Show total prompt count + category breakdown                 |
| !showregistry            | Display full canvas and Dewey registry for Prompt OS Kernel  |

---

🧪 DEBUG & TEST MODE (Admin Only)

| Command               | Function                                                     |
|-----------------------|--------------------------------------------------------------|
| !simulate [scenario]  | Run test scenarios on new prompt categories                  |
| !stress               | Trigger redundancy + latency scan on library                 |
| !flushcache           | Clear temp logic from volatile memory (non-persistent)       |
| !rebuildkernel        | Recompile Prompt OS Kernel from live canvases                |

---

🔁 Integrated with PersonalPromptCenter, DynamicNudger, and AutoAssembler subsystems.

🔥 All commands loaded at boot. Canvas registered to UI Registry for real-time lookup.
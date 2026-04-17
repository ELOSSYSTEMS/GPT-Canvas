## AllonOS Command Canvas

### Core Commands
- `boot` – Initializes AllonOS, loads all modules, and activates Stargate Protocol
- `run [module]` – Executes a specific subsystem or function (e.g., CRM, Dabroo, ELos)
- `view [canvas/module name]` – Loads a visual or code document
- `show [persona/system]` – Displays detailed view of a persona or system
- `!raw` / `!bypass` – Skips Stargate protocol for raw input
- `!debug` – Enables debug mode to inspect internal mechanics

### Proposed Custom Commands
- `!view` – (To be defined)

### Notes
- All commands are routed through Stargate v3.1 unless explicitly bypassed.
- Command syntax is case-insensitive but should follow structure.
- Canvases and modules should follow naming conventions (e.g., AO.###.TAG).

### To-Do
- [ ] Define behavior and binding for `!view`
- [ ] Register any new modules requested during session
- [ ] Update canvas with session-specific macros or shortcuts
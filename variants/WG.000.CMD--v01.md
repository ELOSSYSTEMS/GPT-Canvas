/**
 * WG.000.CMD – War Games Console Core
 * Parent: HELIX OS
 * Trigger: !wargames <command>
 *
 * Responsibilities:
 * 1. Parse incoming user command.
 * 2. Route queries to the dual-command personas (Jocko & Darryl).
 * 3. Invoke PanelStack experts transparently via the commander router.
 * 4. Persist every query + response pair to WG.900.SIMLOG for audit/replay.
 * 5. Expose boot-time hook so Helix OS auto-loads on !boot.
 */

// --- Imports (placeholder stubs; actual modules created in subsequent canvases) ---
import { consultCommanders } from './WG.CommanderRouter.js'; // Will proxy to WG.001 & WG.002
import { logSimulation }  from './WG.900.SIMLOG.js';          // Created in a later canvas

// -------------------------------------------------------------
// Core command handler
// -------------------------------------------------------------
export function handleWarGamesCommand(rawInput) {
  // Strip the trigger keyword and trim whitespace
  const cleaned = rawInput.replace(/^!wargames\s*/i, '').trim();

  if (!cleaned) {
    return '❗️ Command missing. Usage: !wargames <query | simulate <scenario> | ask: <topic>>';
  }

  // Delegate to commander router (Jocko & Darryl orchestration)
  const response = consultCommanders(cleaned);

  // Persist to simulation log for future replay/analysis
  logSimulation({ command: cleaned, response });

  // Return the synthesized answer back to HELIX OS
  return response;
}

// -------------------------------------------------------------
// Bootloader registration hook
// -------------------------------------------------------------
export function initWarGames() {
  globalThis.HELIX_REGISTRY = globalThis.HELIX_REGISTRY || {};
  globalThis.HELIX_REGISTRY['WarGamesConsole'] = {
    handle: handleWarGamesCommand,
    trigger: '!wargames',
    version: '1.0.0',
  };
  console.log('🧠 War Games Console: Ready – issue !wargames to engage.');
}

// Auto-register when module is imported during HELIX boot cycle
initWarGames();

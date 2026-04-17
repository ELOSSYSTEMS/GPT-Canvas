/**
 * WG.900.SIMLOG – War Games Simulation Log
 * Purpose: Capture all !wargames input/output cycles for audit, replay, or branching analysis
 */

const simLog = [];

export function logSimulation({ command, response }) {
  const timestamp = new Date().toISOString();
  simLog.push({ timestamp, command, response });
  console.log(`📜 [WG.SIMLOG] ${timestamp} – Logged simulation`);
}

export function getSimulationHistory(limit = 10) {
  return simLog.slice(-limit);
}

export function getFullLog() {
  return simLog;
}
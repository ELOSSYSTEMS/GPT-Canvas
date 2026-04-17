// Canvas: AO.920.PRM.AdaptiveStack – Adaptive Prompt Library Agent (ELos Extension)

// 🔧 Description:
// This module dynamically populates a "Suggested for You" category in the Prompt Library UI.
// Prompts are generated based on user behavior, inferred roles, and project context.
// Categorized into Beginner, Expert, and Specialized tiers. Includes rating + history log.

const AdaptivePromptAgent = (() => {
  // ---------------------------
  // 🧠 System Memory Snapshot
  // ---------------------------
  const memory = {
    activeRole: null,
    observedTasks: [],
    promptUsageHistory: [],
    lastUpdateTimestamp: null,
    updateLog: []
  };

  // ---------------------------
  // 📡 Behavior Tracker
  // ---------------------------
  function trackPromptUsage(promptId, roleHint, taskType) {
    memory.promptUsageHistory.push({ promptId, timestamp: Date.now(), roleHint, taskType });
    if (!memory.observedTasks.includes(taskType)) memory.observedTasks.push(taskType);
    if (roleHint && memory.activeRole !== roleHint) memory.activeRole = roleHint;
  }

  // ---------------------------
  // 🧬 Role Inference Vector
  // ---------------------------
  function inferUserRole() {
    const roleCounts = {};
    memory.promptUsageHistory.forEach(p => {
      if (!roleCounts[p.roleHint]) roleCounts[p.roleHint] = 0;
      roleCounts[p.roleHint]++;
    });
    const topRole = Object.entries(roleCounts).sort((a, b) => b[1] - a[1])[0];
    return topRole ? topRole[0] : "generalist";
  }

  // ---------------------------
  // 🎯 Prompt Generation Core
  // ---------------------------
  async function generatePromptBatch(role, domain) {
    const input = `Generate 10 role-based prompts for a ${role} working on ${domain}. Format: title, use case, and full prompt with placeholders.`;
    const response = await window.StargateProtocol.run(input);
    return response.data || [];
  }

  // ---------------------------
  // 🗂️ Tier Classifier
  // ---------------------------
  function classifyPrompt(prompt, index) {
    if (index < 3) return "Beginner";
    if (index < 7) return "Expert";
    return "Specialized";
  }

  // ---------------------------
  // 📦 UI Integration
  // ---------------------------
  function pushToPromptLibraryUI(batch) {
    const grouped = { Beginner: [], Expert: [], Specialized: [] };
    batch.forEach((p, i) => grouped[classifyPrompt(p, i)].push(p));

    window.PromptLibraryUI.injectDynamicCategory("🧠 Suggested for You", grouped);
    memory.lastUpdateTimestamp = Date.now();
    memory.updateLog.push({ timestamp: Date.now(), role: memory.activeRole, batchSize: batch.length });

    // 🔔 Notify User
    if (window.ELosNotify) {
      window.ELosNotify.send({
        title: "🧠 Suggested Prompts Updated",
        message: "Your Adaptive Prompt Library has been refreshed based on recent activity.",
        type: "info",
        timeout: 5000
      });
    }

    // ⭐ Optional Rating UI Hook
    if (window.PromptLibraryUI.enableRating) {
      window.PromptLibraryUI.enableRating("🧠 Suggested for You");
    }
  }

  // ---------------------------
  // 🔁 Agent Runtime
  // ---------------------------
  async function runAgentCycle() {
    const role = inferUserRole();
    const domain = memory.observedTasks.slice(-1)[0] || "general tasks";
    const batch = await generatePromptBatch(role, domain);
    pushToPromptLibraryUI(batch);
  }

  return {
    trackPromptUsage,
    runAgentCycle,
    getUpdateLog: () => memory.updateLog
  };
})();

// Hook into ELos bootloader
window.ELosModules = window.ELosModules || {};
window.ELosModules["AO.920.PRM.AdaptiveStack"] = AdaptivePromptAgent;

// 🔁 Autoload on startup
setTimeout(() => AdaptivePromptAgent.runAgentCycle(), 5000);

// ⌨️ Manual Command Binding
window.ELosCommands = window.ELosCommands || {};
window.ELosCommands["!suggested"] = AdaptivePromptAgent.runAgentCycle;
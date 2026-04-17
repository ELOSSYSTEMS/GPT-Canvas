export const PromptOSCommandRegistry = {
  kernel: "Prompt OS Kernel v2.0",
  bootloader: "AO.000.BOOT",
  status: ["fireproofed", "bootloader-enabled", "context-aware"],
  lastSync: "now",

  coreSystemCommands: [
    { command: "!boot", function: "Load entire system kernel: all canvases, prompts, layers" },
    { command: "!help", function: "Summary of available commands in current context" },
    { command: "!status", function: "Current system state + diagnostics summary" },
    { command: "!commands", function: "List of all available !commands (this list)" }
  ],

  promptLibraryCommands: [
    { command: "!prompt [id/title]", function: "Retrieve a specific prompt from AO.910.PRM.LIB" },
    { command: "!category [name]", function: "View all prompts in a specific category" },
    { command: "!listprompts", function: "List all prompt IDs and titles (with category grouping)" },
    { command: "!search [keyword]", function: "Search prompts by keyword or domain" }
  ],

  forgeAndCreationCommands: [
    { command: "!forge [topic]", function: "Generate 10 prompts on a topic using PromptForge v2.0" },
    { command: "!forgebatch", function: "Trigger batch generation from Concept Matrix Seeder" },
    { command: "!seedmatrix", function: "View/modify concept prompt skeletons (Seeder system)" },
    { command: "!newcategory", function: "Initialize a new category before forging" }
  ],

  auditAndOptimizationCommands: [
    { command: "!audit [id]", function: "Run 10-vector audit on a prompt (clarity, tone, utility, etc.)" },
    { command: "!auditall", function: "Audit all prompts in library" },
    { command: "!upgrade [id]", function: "Optimize + re-audit a low-score prompt" },
    { command: "!upgradelow", function: "Upgrade all prompts scoring below 90" }
  ],

  systemModulesAndAgents: [
    { command: "!load [canvas/agent]", function: "Load any registered canvas, persona, or system layer" },
    { command: "!activate [agent]", function: "Activate a support persona (e.g., Auditor, Builder, etc.)" },
    { command: "!lock [id]", function: "Lock a prompt for immutability" },
    { command: "!unlock [id]", function: "Unlock for editing" },
    { command: "!fireproof [id]", function: "Run Stargate post-processing manually" }
  ],

  utilitiesAndExport: [
    { command: "!json [id/category/all]", function: "Export prompt(s) in JSON format" },
    { command: "!md [id/category]", function: "Export as Markdown block" },
    { command: "!countprompts", function: "Show total prompt count + category breakdown" },
    { command: "!showregistry", function: "Display full canvas and Dewey registry for Prompt OS Kernel" }
  ],

  debugAndTestMode: [
    { command: "!simulate [scenario]", function: "Run test scenarios on new prompt categories" },
    { command: "!stress", function: "Trigger redundancy + latency scan on library" },
    { command: "!flushcache", function: "Clear temp logic from volatile memory (non-persistent)" },
    { command: "!rebuildkernel", function: "Recompile Prompt OS Kernel from live canvases" }
  ],

  subsystems: ["PersonalPromptCenter", "DynamicNudger", "AutoAssembler"]
};
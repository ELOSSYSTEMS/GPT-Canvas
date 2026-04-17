// Forever Flowers OS Kernel v1.0

// This OS structure defines the operational brain of Forever Flowers
// All modules must conform to this architecture and be loaded through the OS

const ForeverFlowersOS = {
  version: "1.0",
  modules: {},

  registerModule(name, module) {
    if (!name || !module) throw new Error("Module name and implementation required");
    this.modules[name] = module;
    console.log(`✅ Module '${name}' registered.`);
  },

  runModule(name, ...args) {
    const module = this.modules[name];
    if (!module) throw new Error(`❌ Module '${name}' not found.`);
    if (typeof module.run !== 'function') throw new Error(`❌ Module '${name}' must have a 'run' method.`);
    return module.run(...args);
  },

  listModules() {
    return Object.keys(this.modules);
  }
};

// Sample module scaffold
const SampleModule = {
  run(input) {
    return `Processed: ${input}`;
  }
};

// Register core sample module for diagnostics
ForeverFlowersOS.registerModule("sample", SampleModule);

// Export OS to global scope if needed (e.g., browser)
if (typeof window !== 'undefined') {
  window.ForeverFlowersOS = ForeverFlowersOS;
}

// 🔹 Log boot status
console.log("🌸 Forever Flowers OS Booted v1.0");
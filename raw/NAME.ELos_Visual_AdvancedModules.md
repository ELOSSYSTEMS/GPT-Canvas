// 📦 ELOS.VISUAL.OS – Advanced Modules Initialization

// 1. 🔁 Scene Memory Chains
const SceneMemoryChains = {
  currentSceneContext: {},
  memoryStack: [],
  registerScene(prompt, context) {
    this.memoryStack.push({ prompt, context });
    this.currentSceneContext = context;
  },
  getLastContext() {
    return this.memoryStack[this.memoryStack.length - 1]?.context || {};
  },
  applyContextToNewPrompt(newPrompt) {
    return { ...newPrompt, ...this.getLastContext() };
  },
};

// 2. 🎛️ UX Layer Overrides
const UXLayerOverrides = {
  settings: {
    autoSocratic: true,
    forcePlatform: null,
    lockedPersona: null,
  },
  overrideSetting(key, value) {
    if (this.settings.hasOwnProperty(key)) {
      this.settings[key] = value;
    }
  },
  getSetting(key) {
    return this.settings[key];
  },
  applyOverridesToPrompt(prompt) {
    if (this.settings.forcePlatform) {
      prompt.platform = this.settings.forcePlatform;
    }
    if (this.settings.lockedPersona) {
      prompt.persona = this.settings.lockedPersona;
    }
    if (!this.settings.autoSocratic) {
      prompt.skipQuestions = true;
    }
    return prompt;
  },
};

// 3. 🧠 Real-Time User Correction Mode
const RealTimeCorrectionMode = {
  active: true,
  getFeedbackTags() {
    return ["Too bright", "Not realistic", "Wrong angle", "Too cartoonish", "Missing detail"];
  },
  correctPrompt(basePrompt, userFeedback) {
    const corrections = {
      "Too bright": "use soft natural lighting",
      "Not realistic": "make photorealistic",
      "Wrong angle": "adjust perspective to eye-level",
      "Too cartoonish": "remove illustrated style",
      "Missing detail": "increase object clarity and shadow realism",
    };
    return `${basePrompt}, ${corrections[userFeedback] || "enhance based on feedback"}`;
  },
};

// 🔒 Fireproofed registration into ELOS.VISUAL.OS
const ELOSVisualOS = {
  modules: {
    SceneMemoryChains,
    UXLayerOverrides,
    RealTimeCorrectionMode,
  },
  boot() {
    console.log("✅ ELOS Visual OS Advanced Modules Loaded");
  },
};

ELOSVisualOS.boot();
// ELos UI: Advanced Settings Panel + Tier-Based Components

// 1. Advanced User Toggle Setting UI
const settingsHTML = `
  <div id="elos-settings-panel" class="elos-settings">
    <h3>Interface Settings</h3>
    <label>
      <input type="checkbox" id="toggle-magic-bar" />
      Enable Magic Bar (Visual Commands)
    </label>
    <label>
      <select id="elos-tier-select">
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="pro">Pro</option>
      </select>
      Assistant Tier
    </label>
  </div>
`;

function injectSettingsPanel() {
  const target = document.querySelector("body");
  if (!document.getElementById("elos-settings-panel")) {
    const container = document.createElement("div");
    container.innerHTML = settingsHTML;
    target.appendChild(container);

    // Load from localStorage
    document.getElementById("toggle-magic-bar").checked = localStorage.getItem("elos_magic_bar") === "true";
    document.getElementById("elos-tier-select").value = localStorage.getItem("elos_tier") || "beginner";

    // Listeners
    document.getElementById("toggle-magic-bar").addEventListener("change", e => {
      localStorage.setItem("elos_magic_bar", e.target.checked);
    });

    document.getElementById("elos-tier-select").addEventListener("change", e => {
      localStorage.setItem("elos_tier", e.target.value);
      location.reload();
    });
  }
}

// 2. Tier-Based UI Control Logic
function applyTierUI() {
  const tier = localStorage.getItem("elos_tier") || "beginner";

  if (tier === "beginner") {
    injectMagicBar();
  } else if (tier === "intermediate") {
    injectMagicBarMinimal(); // Mini menu on !
    injectCheatSheetShortcut();
  } else if (tier === "pro") {
    injectRawCommandZone(); // No UI, full syntax support
    injectDebugTools();
  }
}

// Placeholder for intermediate/pro tier logic
function injectMagicBarMinimal() {
  // Injects mini !command suggestion bar
}

function injectCheatSheetShortcut() {
  // Binds `!cheatsheet` to open side panel
}

function injectRawCommandZone() {
  // Enables silent `!command` parsing and chaining
}

function injectDebugTools() {
  // Adds optional developer-style logs and state visibility
}

// Call everything
injectSettingsPanel();
applyTierUI();
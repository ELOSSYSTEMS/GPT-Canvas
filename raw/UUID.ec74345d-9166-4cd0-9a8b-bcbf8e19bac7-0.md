// ELos UI Component: Magic Bar for Beginners

// HTML Structure (injected into DOM near chat input)
const magicBarHTML = `
  <div id="elos-magic-bar" class="elos-magic-bar">
    <button id="elos-magic-toggle" class="elos-icon-button" title="Assistant Tools">
      <span class="wand-icon">✨</span>
    </button>
    <div id="elos-command-menu" class="elos-command-menu hidden">
      <div class="command-section">
        <div class="command-item" data-command="!help">
          <strong>Get Help</strong>
          <p>Understand what ELos can do</p>
        </div>
        <div class="command-item" data-command="!mode menu">
          <strong>Change Assistant Tone</strong>
          <p>Make the assistant warmer, stricter, etc.</p>
        </div>
        <div class="command-item" data-command="!plan day">
          <strong>Plan My Day</strong>
          <p>Set goals and schedule for today</p>
        </div>
        <div class="command-item" data-command="!canvas list">
          <strong>Open Memory</strong>
          <p>View saved canvases and past work</p>
        </div>
        <div class="command-item" data-command="!journal entry">
          <strong>Start a Journal Entry</strong>
          <p>Write thoughts privately</p>
        </div>
        <div class="command-item" data-command="!voice default">
          <strong>Talk Like Me</strong>
          <p>Make the assistant speak your style</p>
        </div>
      </div>
    </div>
  </div>
`;

// Inject HTML into the chat UI
function injectMagicBar() {
  const inputBar = document.querySelector("form");
  if (inputBar && !document.getElementById("elos-magic-bar")) {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = magicBarHTML;
    inputBar.parentNode.insertBefore(wrapper, inputBar);

    // Add event listeners
    const toggle = document.getElementById("elos-magic-toggle");
    const menu = document.getElementById("elos-command-menu");
    toggle.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });

    // Command click handler
    document.querySelectorAll(".command-item").forEach((item) => {
      item.addEventListener("click", () => {
        const command = item.dataset.command;
        const input = document.querySelector("textarea");
        if (input) {
          input.value = command;
          input.dispatchEvent(new Event("input", { bubbles: true }));
        }
        menu.classList.add("hidden");
      });
    });
  }
}

// Run injection on load + mutation observer
const observer = new MutationObserver(() => {
  injectMagicBar();
});

observer.observe(document.body, { childList: true, subtree: true });

// Styles (assume appended via stylesheet or injected separately)
/*
.elos-magic-bar {
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 4px;
}
.elos-icon-button {
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 18px;
}
.elos-command-menu {
  position: absolute;
  bottom: 40px;
  left: 0;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.1);
  z-index: 9999;
  padding: 12px;
  width: 280px;
}
.command-item {
  padding: 8px 6px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
}
.command-item:last-child {
  border-bottom: none;
}
.command-item:hover {
  background-color: #f9f9f9;
}
.hidden {
  display: none;
}
*/
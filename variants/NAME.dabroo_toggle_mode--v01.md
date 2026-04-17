// ============================
// Dabroo AI Extension (Toggle Mode Edition)
// ============================

console.log("Dabroo script loaded ✅");

function wrapWithDabroo(input) {
  return `Dabroo AI 🧠\n\n${input}`;
}

function getEditableDivText(div) {
  return div.innerText.trim();
}

function createDabrooToggle() {
  const existing = document.querySelector("#dabroo-toggle");
  if (existing) return;

  const toggleContainer = document.createElement("div");
  toggleContainer.id = "dabroo-toggle-container";
  toggleContainer.style.position = "absolute";
  toggleContainer.style.bottom = "16px";
  toggleContainer.style.right = "80px"; // to the left of mic
  toggleContainer.style.zIndex = "10000";

  const toggle = document.createElement("label");
  toggle.id = "dabroo-toggle";
  toggle.className = "dabroo-switch";

  toggle.innerHTML = `
    <input type="checkbox" id="dabroo-toggle-input">
    <span class="slider"></span>
  `;

  toggleContainer.appendChild(toggle);
  document.body.appendChild(toggleContainer);

  const checkbox = toggle.querySelector("#dabroo-toggle-input");
  checkbox.checked = sessionStorage.getItem("dabrooActive") === "true";
  checkbox.onchange = () => {
    sessionStorage.setItem("dabrooActive", checkbox.checked);
    console.log("Dabroo toggle:", checkbox.checked ? "ON" : "OFF");
  };
}

function handleKeydownWrap() {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      const active = sessionStorage.getItem("dabrooActive") === "true";
      if (!active) return;

      const editor = document.querySelector("div.ProseMirror[contenteditable='true']");
      if (!editor) return;

      const original = getEditableDivText(editor);
      const wrapped = wrapWithDabroo(original);
      editor.innerText = wrapped;
      editor.dispatchEvent(new Event("input", { bubbles: true }));
    }
  });
}

function injectDabrooUX() {
  const editor = document.querySelector("div.ProseMirror[contenteditable='true']");
  if (!editor) {
    console.log("Dabroo: ProseMirror not found");
    return false;
  }

  createDabrooToggle();
  handleKeydownWrap();
  console.log("Dabroo: toggle injected + listener attached");
  return true;
}

const interval = setInterval(() => {
  const injected = injectDabrooUX();
  if (injected) clearInterval(interval);
}, 500);

// ============================
// STYLES (Insert into styles/styles.css)
// ============================

/* Paste this CSS into your styles.css file */
/* Toggle Switch Style */

.dabroo-switch {
  position: relative;
  display: inline-block;
  width: 36px;
  height: 20px;
}

.dabroo-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 14px;
  width: 14px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}

.dabroo-switch input:checked + .slider {
  background-color: #3b82f6; /* Tailwind blue */
}

.dabroo-switch input:checked + .slider:before {
  transform: translateX(16px);
}
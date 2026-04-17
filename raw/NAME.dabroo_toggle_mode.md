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
  const existing = document.querySelector("#dabroo-toggle-wrapper");
  if (existing) return;

  const editorToolbar = document.querySelector("form div.relative");
  if (!editorToolbar) {
    console.warn("Dabroo: failed to locate toolbar for toggle injection");
    return;
  }

  const wrapper = document.createElement("div");
  wrapper.className = "dabroo-toggle-wrapper";
  wrapper.id = "dabroo-toggle-wrapper";

  wrapper.innerHTML = `
    <span id="dabroo-toggle-label">\u05d3\u05d1\u05e8\u05d5 \u05dc\u05d0 \u05e4\u05e2\u05d9\u05dc</span>
    <label id="dabroo-toggle" class="dabroo-switch">
      <input type="checkbox" id="dabroo-toggle-input">
      <span class="slider"></span>
    </label>
  `;

  editorToolbar.appendChild(wrapper);

  const checkbox = wrapper.querySelector("#dabroo-toggle-input");
  const label = wrapper.querySelector("#dabroo-toggle-label");

  function updateLabelState(active) {
    label.textContent = active ? "\u05d3\u05d1\u05e8\u05d5 \u05e4\u05e2\u05d9\u05dc" : "\u05d3\u05d1\u05e8\u05d5 \u05dc\u05d0 \u05e4\u05e2\u05d9\u05dc";
    if (active) {
      wrapper.classList.add("active");
    } else {
      wrapper.classList.remove("active");
    }
  }

  checkbox.checked = sessionStorage.getItem("dabrooActive") === "true";
  updateLabelState(checkbox.checked);

  checkbox.onchange = () => {
    sessionStorage.setItem("dabrooActive", checkbox.checked);
    updateLabelState(checkbox.checked);
    console.log("Dabroo toggle:", checkbox.checked ? "ON" : "OFF");
  };
}

function handleKeydownWrap() {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      const active = sessionStorage.getItem("dabrooActive") === "true";
      if (!active) return;

      const editor = document.querySelector(
        "div.ProseMirror[contenteditable='true']"
      );
      if (!editor) return;

      const original = getEditableDivText(editor);
      const wrapped = wrapWithDabroo(original);
      editor.innerText = wrapped;
      editor.dispatchEvent(new Event("input", { bubbles: true }));
    }
  });
}

function injectDabrooUX() {
  const editor = document.querySelector(
    "div.ProseMirror[contenteditable='true']"
  );
  if (!editor) {
    console.log("Dabroo: ProseMirror not found");
    return false;
  }

  createDabrooToggle();
  handleKeydownWrap();
  console.log("Dabroo: toggle injected + listener attached");
  return true;
}

const observer = new MutationObserver(() => {
  injectDabrooUX();
});

observer.observe(document.body, { childList: true, subtree: true });
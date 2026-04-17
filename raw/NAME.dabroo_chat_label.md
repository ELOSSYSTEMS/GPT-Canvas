// ============================
// Dabroo AI Extension – Smart Label Edition
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
    <span id="dabroo-toggle-label">דברו לא פעיל</span>
    <label id="dabroo-toggle" class="dabroo-switch">
      <input type="checkbox" id="dabroo-toggle-input">
      <span class="slider"></span>
    </label>
  `;

  editorToolbar.appendChild(wrapper);

  const checkbox = wrapper.querySelector("#dabroo-toggle-input");
  const label = wrapper.querySelector("#dabroo-toggle-label");

  function updateLabelState(active) {
    label.textContent = active ? "דברו פעיל" : "דברו לא פעיל";
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

function observeAndLabelReplies() {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (
          node.nodeType === 1 &&
          node.matches("div.markdown") &&
          sessionStorage.getItem("dabrooActive") === "true"
        ) {
          const header = document.createElement("div");
          header.textContent = "Dabroo AI 🧠";
          header.style.fontWeight = "600";
          header.style.fontSize = "13px";
          header.style.color = "#3b82f6";
          header.style.marginBottom = "4px";

          node.insertBefore(header, node.firstChild);
        }
      });
    });
  });

  const target = document.querySelector("main");
  if (target) {
    observer.observe(target, {
      childList: true,
      subtree: true,
    });
    console.log("Dabroo: reply observer active");
  }
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
  console.log("Dabroo: toggle + keydown attached");
  return true;
}

const interval = setInterval(() => {
  const injected = injectDabrooUX();
  if (injected) {
    observeAndLabelReplies();
    clearInterval(interval);
  }
}, 500);
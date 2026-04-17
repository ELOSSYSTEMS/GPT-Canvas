console.log("✅ AutoPromptWriter v1.0.2 hybrid loaded");

const promptModules = [
  { key: "persona", label: "Meta Persona Generator", output: "You are a cutting-edge AI persona designer." },
  { key: "god", label: "God of Prompts v2", output: "Refactor this prompt using the Prompt Surgeon protocol." },
  { key: "coach", label: "Business Coach and Mentor", output: "Act as a business coach. Help the user strategize growth." },
  { key: "insight", label: "Self-Insight", output: "Guide the user to reflect on their habits and mindset." }
];

const extraModules = [
  { label: "Add Output Format", append: "Format your output as markdown." },
  { label: "Add Persona Context", append: "Act as a subject-matter expert in this domain." },
  { label: "Add Constraints", append: "Be concise, use bullet points, avoid fluff." },
  { label: "Add Examples", append: "For example: [...]." }
];

let menu;
let selectedIndex = 0;

function applyStargateLayers(prompt) {
  if (!prompt.includes("you are")) prompt = `You are an expert.\n${prompt}`;
  if (!/format/i.test(prompt)) prompt += `\nFormat your output clearly.`;
  if (prompt.includes("✍️")) prompt += `\nNow rewrite it with clarity and punch.`;
  if (prompt.includes("🔐")) prompt += `\nThis persona role is locked.`;
  return prompt;
}

function createMenu(matches, inputBox) {
  if (menu) menu.remove();
  document.querySelectorAll(".auto-submenu").forEach(el => el.remove());
  selectedIndex = 0;

  menu = document.createElement("div");
  const rect = inputBox.getBoundingClientRect();

  menu.style.position = "absolute";
  menu.style.left = `${rect.left}px`;
  menu.style.top = `${rect.top - 8}px`;
  menu.style.width = `${rect.width}px`;
  menu.style.transform = "translateY(-100%)";
  menu.style.zIndex = "9999";
  menu.style.background = "#212121";
  menu.style.border = "1px solid #333";
  menu.style.color = "#fff";
  menu.style.borderRadius = "12px";
  menu.style.boxShadow = "0 8px 20px rgba(0,0,0,0.4)";
  menu.style.fontFamily = "system-ui, sans-serif";
  menu.style.fontSize = "14px";
  menu.style.boxSizing = "border-box";
  menu.style.overflow = "hidden";

  matches.forEach((m, index) => {
    const item = document.createElement("div");
    item.textContent = m.label;
    item.style.padding = "12px 16px";
    item.style.cursor = "pointer";
    item.style.borderBottom = "1px solid #2d2d2d";
    item.dataset.index = index;
    item.classList.add("menu-item");

    item.onmouseover = () => {
      document.querySelectorAll(".menu-item").forEach(el => el.style.background = "none");
      item.style.background = "#333";
      selectedIndex = index;
    };

    item.onmouseout = () => (item.style.background = "none");
    item.onclick = () => selectMenuItem(matches, inputBox, index);

    menu.appendChild(item);
  });

  document.body.appendChild(menu);
  highlightSelectedItem();
}

function highlightSelectedItem() {
  const items = document.querySelectorAll(".menu-item");
  items.forEach(el => el.style.background = "none");
  const selected = items[selectedIndex];
  if (selected) selected.style.background = "#333";
}

function selectMenuItem(matches, inputBox, index) {
  const basePrompt = applyStargateLayers(matches[index].output);
  const event = new InputEvent("input", { bubbles: true });
  inputBox.textContent = basePrompt;
  inputBox.dispatchEvent(event);
  inputBox.focus();
  if (menu) menu.remove();
  createChainingMenu(basePrompt, inputBox);
}

function createChainingMenu(currentPrompt, inputBox) {
  document.querySelectorAll(".auto-submenu").forEach(el => el.remove());
  const subMenu = document.createElement("div");
  const rect = inputBox.getBoundingClientRect();

  subMenu.classList.add("auto-submenu");
  subMenu.style.position = "absolute";
  subMenu.style.top = `${rect.top - 8}px`;
  subMenu.style.left = `${rect.left}px`;
  subMenu.style.width = `${rect.width}px`;
  subMenu.style.transform = "translateY(-100%)";
  subMenu.style.zIndex = 9999;
  subMenu.style.background = "#212121";
  subMenu.style.border = "1px solid #333";
  subMenu.style.borderRadius = "12px";
  subMenu.style.boxShadow = "0 8px 20px rgba(0,0,0,0.4)";
  subMenu.style.fontFamily = "system-ui, sans-serif";
  subMenu.style.fontSize = "14px";
  subMenu.style.color = "#fff";
  subMenu.style.overflow = "hidden";

  extraModules.forEach(mod => {
    const item = document.createElement("div");
    item.textContent = mod.label;
    item.style.padding = "12px 16px";
    item.style.cursor = "pointer";
    item.style.borderBottom = "1px solid #2d2d2d";
    item.onmouseover = () => (item.style.background = "#333");
    item.onmouseout = () => (item.style.background = "none");
    item.onclick = () => {
      const updated = `${currentPrompt}\n${mod.append}`;
      const event = new InputEvent("input", { bubbles: true });
      inputBox.textContent = updated;
      inputBox.dispatchEvent(event);
      subMenu.remove();
    };
    subMenu.appendChild(item);
  });

  document.body.appendChild(subMenu);
}

function setupForProseMirror() {
  const inputBox = document.querySelector("#prompt-textarea");
  if (!inputBox || inputBox.dataset.listenerAttached) return;

  inputBox.addEventListener("keydown", (e) => {
    setTimeout(() => {
      const value = inputBox.textContent.trim();
      const match = value.match(/!([a-z]*)/i);
      if (!match) {
        if (menu) menu.remove();
        return;
      }

      const query = match[1];
      const results = promptModules.filter(p => p.key.includes(query));
      if (results.length > 0) {
        createMenu(results, inputBox);
      } else if (menu) {
        menu.remove();
      }
    }, 10);

    if (menu) {
      if (e.key === "ArrowDown") {
        selectedIndex = (selectedIndex + 1) % menu.children.length;
        highlightSelectedItem();
      } else if (e.key === "ArrowUp") {
        selectedIndex = (selectedIndex - 1 + menu.children.length) % menu.children.length;
        highlightSelectedItem();
      } else if (e.key === "Enter") {
        const value = inputBox.textContent.trim();
        const match = value.match(/!([a-z]*)/i);
        if (match) {
          const query = match[1];
          const results = promptModules.filter(p => p.key.includes(query));
          if (results.length > 0) {
            selectMenuItem(results, inputBox, selectedIndex);
            e.preventDefault();
          }
        }
      }
    }
  });

  inputBox.dataset.listenerAttached = "true";
}

const observer = new MutationObserver(() => {
  setupForProseMirror();
});
observer.observe(document.body, { childList: true, subtree: true });
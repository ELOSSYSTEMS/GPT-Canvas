console.log("✅ AutoPromptWriter v0.9.3 loaded");

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

  matches.forEach((m) => {
    const item = document.createElement("div");
    item.textContent = m.label;
    item.style.padding = "12px 16px";
    item.style.cursor = "pointer";
    item.style.borderBottom = "1px solid #2d2d2d";
    item.onmouseover = () => (item.style.background = "#333");
    item.onmouseout = () => (item.style.background = "none");
    item.onclick = () => {
      const basePrompt = applyStargateLayers(m.output);
      inputBox.innerText = basePrompt;
      inputBox.focus();
      menu.remove();
      createChainingMenu(basePrompt, inputBox);
    };
    menu.appendChild(item);
  });

  document.body.appendChild(menu);
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
  subMenu.style.background = "#101010";
  subMenu.style.border = "1px solid #444";
  subMenu.style.borderRadius = "10px";
  subMenu.style.fontSize = "13px";
  subMenu.style.color = "#eee";
  subMenu.style.overflow = "hidden";

  extraModules.forEach(mod => {
    const item = document.createElement("div");
    item.textContent = mod.label;
    item.style.padding = "8px 12px";
    item.style.cursor = "pointer";
    item.onmouseover = () => (item.style.background = "#333");
    item.onmouseout = () => (item.style.background = "none");
    item.onclick = () => {
      const updated = `${currentPrompt}\n${mod.append}`;
      inputBox.innerText = updated;
      subMenu.remove();
    };
    subMenu.appendChild(item);
  });

  document.body.appendChild(subMenu);
}

function setupForProseMirror() {
  const inputBox = document.querySelector("#prompt-textarea");
  if (!inputBox || inputBox.dataset.listenerAttached) return;

  inputBox.addEventListener("keydown", () => {
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
  });

  inputBox.dataset.listenerAttached = "true";
}

const observer = new MutationObserver(() => {
  setupForProseMirror();
});
observer.observe(document.body, { childList: true, subtree: true });
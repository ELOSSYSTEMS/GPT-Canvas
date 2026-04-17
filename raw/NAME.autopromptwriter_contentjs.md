console.log("✅ AutoPromptWriter v1.1 with ELos injector loaded");

// Inject ELos Icon Button next to the microphone
function injectElosButton() {
  const micWrapper = document.querySelector('[data-testid="send-button"]')?.parentElement;
  if (!micWrapper || document.getElementById("elos-injector")) return;

  const elosBtn = document.createElement("button");
  elosBtn.id = "elos-injector";
  elosBtn.innerText = "⚡"; // Replace with your ELos icon if needed
  elosBtn.title = "Run with Stargate Protocol";

  Object.assign(elosBtn.style, {
    marginRight: "8px",
    fontSize: "18px",
    background: "transparent",
    border: "none",
    color: "#ccc",
    cursor: "pointer"
  });

  elosBtn.onclick = () => {
    const inputBox = document.querySelector("#prompt-textarea");
    if (!inputBox) return;
    const raw = inputBox.textContent.trim();
    if (!raw) return;

    const optimized = applyStargateLayers(raw);
    const event = new InputEvent("input", { bubbles: true });
    inputBox.textContent = optimized;
    inputBox.dispatchEvent(event);

    const sendBtn = document.querySelector('[data-testid="send-button"]');
    if (sendBtn) sendBtn.click();
  };

  micWrapper.insertBefore(elosBtn, micWrapper.firstChild);
}

function applyStargateLayers(prompt) {
  let p = prompt.trim();
  if (!p.toLowerCase().includes("you are")) p = `You are an expert. ${p}`;
  if (!/format/i.test(p)) p += `\nFormat your response clearly using bullet points.`;
  if (!/[.!?]$/.test(p)) p += ".";
  return p;
}

const observer = new MutationObserver(() => {
  injectElosButton();
});
observer.observe(document.body, { childList: true, subtree: true });
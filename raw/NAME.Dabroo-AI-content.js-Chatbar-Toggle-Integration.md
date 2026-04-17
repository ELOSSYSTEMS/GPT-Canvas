(function () {
  const TOGGLE_ID = "dabroo-toggle";
  const DABROO_ACTIVE_KEY = "dabroo_active";
  const PROCESSING_CLASS = "dabroo-processing";
  const REPLACE_CLASS = "dabroo-replace-msg";
  const CHAT_SELECTOR = "form textarea";
  const CHAT_CONTAINER = "form";
  const DABROO_HEADER = "Dabroo AI 🧠";

  const EDEN_PROMPTS = {
    "gpt-4o":
      "Act as Eden. Rewrite the prompt in fluent, persuasive Israeli Hebrew that sounds like a native wrote it. Maintain original intent.",
    "gpt-4.5":
      "Act as Eden. Sharpen the user’s prompt while preserving its intent. Prioritize modern, emotionally intelligent Hebrew phrasing.",
    "gpt-4.1":
      "Act as Eden. Translate and optimize the prompt in native, concise Israeli Hebrew. Make it sound natural and confident.",
    "gpt-4.1-mini":
      "Act as Eden. Quickly improve the prompt’s clarity and fluency in modern Hebrew, without changing its meaning.",
    o3: "Act as Eden. Reword the prompt with intelligent phrasing in modern Hebrew, suitable for creative and nuanced use cases.",
    "o4-mini":
      "Act as Eden. Translate and simplify the prompt into clear, everyday Hebrew, keeping the tone natural and punchy.",
    "o4-mini-high":
      "Act as Eden. Enhance the prompt for high-speed comprehension in native-sounding Hebrew, keeping it sharp and elegant.",
    default:
      "Act as Eden. Improve the prompt in fluent Israeli Hebrew. Maintain original intent and make it feel native.",
  };

  const getModel = () => {
    const el =
      document.querySelector("[data-testid='model-picker']") ||
      document.body.innerHTML;
    const text = el.textContent || "";

    if (text.includes("4o")) return "gpt-4o";
    if (text.includes("4.5")) return "gpt-4.5";
    if (text.includes("4.1-mini")) return "gpt-4.1-mini";
    if (text.includes("4.1")) return "gpt-4.1";
    if (text.includes("o3")) return "o3";
    if (text.includes("o4-mini-high")) return "o4-mini-high";
    if (text.includes("o4-mini")) return "o4-mini";

    return "default";
  };

  const isDabrooActive = () =>
    sessionStorage.getItem(DABROO_ACTIVE_KEY) === "true";
  const setDabrooState = (state) =>
    sessionStorage.setItem(DABROO_ACTIVE_KEY, state);

  // Inject toggle into the chat input bar, before the send button
  function injectToggle() {
    if (document.getElementById(TOGGLE_ID)) return;
    const form = document.querySelector(CHAT_CONTAINER);
    if (!form) return;

    const sendBtn = form.querySelector('button[type="submit"]');
    if (!sendBtn || !sendBtn.parentElement) return;

    const btn = document.createElement("button");
    btn.id = TOGGLE_ID;
    btn.className = "dabroo-toggle";
    btn.type = "button";
    btn.style.margin = "0 8px 0 0";
    btn.textContent = isDabrooActive() ? "דברו פעיל" : "דברו כבוי";
    btn.addEventListener("click", () => {
      const newState = !isDabrooActive();
      setDabrooState(newState);
      btn.textContent = newState ? "דברו פעיל" : "דברו כבוי";
    });

    sendBtn.parentElement.insertBefore(btn, sendBtn);
  }

  function interceptPromptSubmission() {
    const form = document.querySelector(CHAT_CONTAINER);
    if (!form) return;

    form.addEventListener(
      "submit",
      (e) => {
        const textarea = form.querySelector(CHAT_SELECTOR);
        if (!textarea || !isDabrooActive()) return;

        const model = getModel();
        const original = textarea.value;
        const rewritten = `${DABROO_HEADER}\n${EDEN_PROMPTS[model]}\nUser prompt: ${original}`;

        textarea.value = rewritten;
      },
      true
    );
  }

  function observeMutations() {
    const observer = new MutationObserver(() => {
      injectToggle();
      injectFloatingLogo();
    });

    observer.observe(document.body, { childList: true, subtree: true });
  }

  function injectFloatingLogo() {
    const existing = document.getElementById("dabroo-logo-float");
    if (existing) return;

    const logo = document.createElement("img");
    logo.id = "dabroo-logo-float";
    logo.src = chrome.runtime.getURL("icons/logo-white-cropped-48.png");
    logo.alt = "Dabroo AI";
    logo.style.position = "fixed";
    logo.style.bottom = "16px";
    logo.style.right = "16px";
    logo.style.width = "40px";
    logo.style.height = "40px";
    logo.style.opacity = "0.85";
    logo.style.zIndex = "9999";
    logo.style.cursor = "pointer";

    document.body.appendChild(logo);
  }

  function init() {
    injectToggle();
    interceptPromptSubmission();
    observeMutations();
    injectFloatingLogo();
  }

  window.addEventListener("load", init);
})();
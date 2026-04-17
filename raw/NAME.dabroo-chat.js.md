// dabroo-chat.js

document.addEventListener('DOMContentLoaded', () => {
  const chatContainer = document.getElementById('chat');
  const sendBtn = document.getElementById('sendBtn');
  const chatInput = document.getElementById('chatInput');
  const sendHint = document.getElementById('sendHint');
  const charCounter = document.getElementById('charWordCounter');
  const starterContainer = document.getElementById('conversationStarters');

  const settings = window.dabrooSettings || {
    title: 'ברוכים הבאים לדרבו AI',
    starters: [],
    messages: []
  };

  let current = 0;
  let waiting = false;
  let typingUser = false;

  function updateCounter() {
    const value = chatInput.value.trim();
    const charCount = value.length;
    const wordCount = value === '' ? 0 : value.split(/\s+/).length;
    charCounter.textContent = `${charCount} תווים / ${wordCount} מילים`;
  }

  function autoResizeTextarea() {
    chatInput.style.height = 'auto';
    chatInput.style.height = chatInput.scrollHeight + 'px';
  }

  function scrollToBottom(el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }

  function createMessageElement(role, text) {
    const msg = document.createElement('div');
    msg.classList.add('message', role, 'visible');
    msg.textContent = text;
    chatContainer.appendChild(msg);
    scrollToBottom(msg);
  }

  function showTyping(callback) {
    const dots = document.createElement('div');
    dots.classList.add('message', 'system');
    dots.innerHTML = '<span class="typing-indicator">...</span>';
    chatContainer.appendChild(dots);
    dots.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      chatContainer.removeChild(dots);
      callback();
    }, 800);
  }

  function loadNextMessage() {
    if (waiting || current >= settings.messages.length) return;
    const msg = settings.messages[current];

    if (msg.role === 'user') {
      typeIntoInput(msg.text);
    } else if (msg.role === 'system') {
      waiting = true;
      showTyping(() => {
        createMessageElement('system', msg.text);
        waiting = false;
        current++;
        setTimeout(loadNextMessage, 400);
      });
    } else if (msg.role === 'email') {
      createEmailInputMessage();
    }
  }

  function typeIntoInput(text) {
    chatInput.value = text;
    autoResizeTextarea();
    updateCounter();
  }

  function handleUserSend() {
    if (chatInput.value.trim() === '' || waiting || typingUser) return;
    const userInput = chatInput.value.trim();
    createMessageElement('user', userInput);
    chatInput.value = '';
    chatInput.style.height = 'auto';
    updateCounter();
    sendHint?.classList.remove('visible');
    current++;
    loadNextMessage();
  }

  function createEmailInputMessage() {
    const wrapper = document.createElement('div');
    wrapper.classList.add('message', 'user');
    wrapper.style.width = '100%';

    const form = document.createElement('form');
    form.style.display = 'flex';
    form.style.gap = '12px';
    form.style.background = '#303030';
    form.style.padding = '12px 16px';
    form.style.borderRadius = '12px';
    form.style.maxWidth = '500px';
    form.style.margin = '10px auto 0';

    const input = document.createElement('input');
    input.type = 'email';
    input.placeholder = 'הכנס/י את כתובת המייל שלך';
    input.required = true;
    input.style.flex = '1';
    input.style.padding = '8px';
    input.style.borderRadius = '8px';
    input.style.border = 'none';
    input.style.fontSize = '1rem';
    input.style.direction = 'rtl';

    const button = document.createElement('button');
    button.type = 'submit';
    button.textContent = 'שלח';
    button.style.padding = '8px 16px';
    button.style.borderRadius = '8px';
    button.style.border = 'none';
    button.style.background = '#fff';
    button.style.color = '#000';
    button.style.fontWeight = 'bold';
    button.style.cursor = 'pointer';

    form.appendChild(input);
    form.appendChild(button);
    wrapper.appendChild(form);
    chatContainer.appendChild(wrapper);
    scrollToBottom(wrapper);

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = input.value.trim();
      if (!email) return;
      createMessageElement('user', `📩 מייל התקבל: ${email}`);
      wrapper.remove();
    });
  }

  function renderConversationStarters() {
    const title = document.createElement('div');
    title.className = 'chat-title';
    title.textContent = settings.title;
    chatContainer.appendChild(title);

    const starters = document.createElement('div');
    starters.className = 'starter-bubbles';

    settings.starters.forEach((text) => {
      const btn = document.createElement('button');
      btn.className = 'starter-btn';
      btn.textContent = text;
      btn.onclick = () => {
        chatContainer.innerHTML = '';
        typeIntoInput(text);
        scrollToBottom(chatInput);
      };
      starters.appendChild(btn);
    });

    chatContainer.appendChild(starters);
  }

  // INIT
  chatInput.addEventListener('input', updateCounter);
  sendBtn.addEventListener('click', handleUserSend);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleUserSend();
  });

  renderConversationStarters();
});
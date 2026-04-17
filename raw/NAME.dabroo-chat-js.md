// dabroo-chat.js

const messages = [];
let currentIndex = 0;
let waiting = false;

function renderStarterButtons(starters) {
  const container = document.createElement('div');
  container.className = 'conversation-starters';
  starters.forEach(text => {
    const btn = document.createElement('button');
    btn.className = 'starter-btn';
    btn.textContent = text;
    btn.onclick = () => handleStarterClick(text);
    container.appendChild(btn);
  });
  return container;
}

function handleStarterClick(text) {
  document.querySelector('.conversation-starters')?.remove();
  chatInput.value = text;
  sendBtn.click();
}

function appendMessage(role, text) {
  const msg = document.createElement('div');
  msg.className = `message ${role}`;
  msg.textContent = text;
  document.getElementById('chat').appendChild(msg);
  msg.scrollIntoView({ behavior: 'smooth' });
}

function sendMessage() {
  if (waiting) return;
  const text = chatInput.value.trim();
  if (!text) return;
  appendMessage('user', text);
  chatInput.value = '';
  waiting = true;
  setTimeout(() => {
    const response = messages[currentIndex]?.text || "זו תגובה לדוגמה...";
    appendMessage('system', response);
    currentIndex++;
    waiting = false;
  }, 600);
}

document.addEventListener('DOMContentLoaded', () => {
  const chat = document.getElementById('chat');
  const starterText = window.conversationStarters || [];
  const starters = renderStarterButtons(starterText);
  chat.appendChild(starters);
});

const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');
sendBtn.addEventListener('click', sendMessage);
chatInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') sendMessage();
});
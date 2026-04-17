{% layout none %}
<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Dabroo AI</title>
  <style>
    html, body {
      margin: 0;
      padding: 0;
      height: 100%;
      overflow: hidden;
      background-color: #212121 !important;
      font-family: "Segoe UI", "Noto Sans Hebrew", "Inter", sans-serif;
      color: #ececec;
      direction: rtl;
    }
    .dabroo-app {
      position: fixed;
      inset: 0;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      background-color: #212121;
    }
    header, .site-header, .announcement-bar,
    .shopify-section-header, .main-content, .page-width {
      display: none !important;
    }
    .sidebar {
      width: 280px;
      height: 100vh;
      background-color: #1e1e1e;
      position: fixed;
      right: -280px;
      top: 0;
      transition: right 0.3s ease;
      z-index: 1000;
      padding: 16px;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
    }
    .sidebar.open {
      right: 0;
    }
    .sidebar-toggle {
      position: absolute;
      top: 12px;
      right: 12px;
      background: none;
      border: none;
      cursor: pointer;
      z-index: 1100;
    }
    .sidebar-toggle img {
      width: 24px;
      height: 24px;
    }
    .sidebar-overlay {
      display: none;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 900;
      background: rgba(0, 0, 0, 0.4);
    }
    .sidebar.open + .sidebar-overlay {
      display: block;
    }
  </style>
</head>
<body>
<div class="dabroo-app">
  <button class="sidebar-toggle" onclick="toggleSidebar()">
    <img src="https://cdn.shopify.com/s/files/1/0658/9595/6615/files/sidebar.png?v=1747034371" alt="Sidebar" />
  </button>
  <aside class="sidebar" id="sidebar">
    <div class="sidebar-header">
      <img src="https://via.placeholder.com/24" alt="logo" class="sidebar-logo" />
    </div>
    <!-- Add your sidebar links here -->
  </aside>
  <div class="sidebar-overlay" onclick="toggleSidebar()"></div>
  <div class="chat-wrapper">
    <div class="chat-top-bar">
      <div class="chat-title-wrapper">
        <span class="chat-title">Dabroo AI</span>
      </div>
    </div>
    <div class="chat-container" id="chat"></div>
    <div class="chat-input-bar">
      <div class="input-shell">
        <div class="input-row">
          <textarea id="chatInput" placeholder="..." disabled rows="1"></textarea>
          <button id="sendBtn" class="send-btn">
            <svg viewBox="0 0 24 24">
              <path d="M7 11h9.17l-3.59-3.59L14 6l6 6-6 6-1.41-1.41L16.17 13H7v-2z"/>
            </svg>
          </button>
        </div>
        <div class="chat-action-bar">
          <button><span class="icon">🎨</span><span class="btn-text">Create image</span></button>
          <button><span class="icon">🚀</span><span class="btn-text">Deep research</span></button>
          <button><span class="icon">🌐</span><span class="btn-text">Search</span></button>
        </div>
      </div>
    </div>
    <div class="input-meta">
      <div class="input-counter" id="charWordCounter">0 characters / 0 words</div>
      <div class="input-disclaimer">Dabroo can make mistakes. Check important info.</div>
    </div>
  </div>
</div>
<script>
const sidebar = document.getElementById('sidebar');
const overlay = document.querySelector('.sidebar-overlay');
function toggleSidebar() {
  sidebar.classList.toggle('open');
  overlay.classList.toggle('open');
}
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && sidebar.classList.contains('open')) {
    toggleSidebar();
  }
});

const chat = document.getElementById('chat');
const sendBtn = document.getElementById('sendBtn');
const chatInput = document.getElementById('chatInput');
let typingUser = false;
let current = 0;
let waiting = false;

const messages = [
  { role: 'user', text: "שמע, אני משתגע. כל פעם שאני מנסה לכתוב משהו בעברית בצ׳אטג׳יפיטי — זה נשמע מתורגם, יבש, מנותק לגמרי. כאילו זה לא מבין עברית באמת." },
  { role: 'system', text: "אני שומע אותך. זה תסכול אמיתי — במיוחד כשאתה משקיע בניסוח וזה עדיין מרגיש כאילו משהו 'לא עובר'. רוצה שננסה להבין יחד איפה זה נופל?" },
  { role: 'user', text: "אני מנסה לכתוב פוסטים לעסק שלי, לפעמים מודעות או אפילו תיאור מוצר… וזה פשוט יוצא מוזר. כאילו תרגום מילולי מאנגלית. אני כל פעם עורך הכל מחדש." },
  { role: 'system', text: "מוכר מאוד. רוב המודלים אומנו בעיקר באנגלית, אז בעברית לפעמים חסר להם את הקצב, הסאבטקסט, או פשוט את הטון הנכון." },
  { role: 'user', text: "בדיוק. זה כאילו הוא לא קולט את הראש הישראלי, לא משנה כמה אני מחדד את ההנחיה." },
  { role: 'system', text: "במילים אחרות — אתה מחפש שותף ש *מבין את הזרימה* של עברית, לא רק מתרגם אותה. שם בדיוק נכנס Dabroo." },
  { role: 'user', text: "מה זה בדיוק עושה שונה?" },
  { role: 'system', text: "זה לא קסם — זו התאמה. Dabroo נבנה במיוחד לכתיבה שיווקית בעברית חיה. הוא לא מחפש 'תרגום טוב' אלא ניסוח שמרגיש נכון ללקוח שלך. כולל סגנון, מבנה, ואפילו ההקשרים התרבותיים." },
  { role: 'user', text: "נשמע מעניין, אבל אני חייב לבדוק שזה באמת שווה משהו." },
  { role: 'system', text: "ברור. בגלל זה בנינו Starter Pack קצר — בחינם. תוכל לראות בעיניים איך Dabroo כותב, מתרגם ומדייק, בלי מחויבות." },
  { role: 'system', text: "רוצה לנסות? 🔽 תכניס מייל כאן ונשלח לך את הערכה." },
  { role: 'email', text: "" }
];

function createMessage(text, role) {
  const msg = document.createElement('div');
  msg.classList.add('message', role, 'visible');
  msg.textContent = text;
  chat.appendChild(msg);
  msg.scrollIntoView({ behavior: 'smooth' });
}

function showTyping(callback) {
  const dots = document.createElement('div');
  dots.classList.add('message', 'system');
  dots.innerHTML = '<span class="typing-indicator">...</span>';
  chat.appendChild(dots);
  dots.scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => {
    chat.removeChild(dots);
    callback();
  }, 1000);
}

function typeMessage(text, role, callback, speed = 15) {
  const msgEl = document.createElement('div');
  msgEl.classList.add('message', role, 'visible');
  chat.appendChild(msgEl);
  let i = 0;
  const interval = setInterval(() => {
    const visibleText = text.slice(0, i);
    msgEl.innerHTML = `${visibleText}<span class="blinking-cursor">|</span>`;
    i++;
    if (i > text.length) {
      clearInterval(interval);
      msgEl.textContent = text;
      msgEl.scrollIntoView({ behavior: 'smooth' });
      if (callback) callback();
    }
  }, speed);
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
  form.style.margin = '10px auto';
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
  chat.appendChild(wrapper);
  wrapper.scrollIntoView({ behavior: 'smooth' });
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = input.value.trim();
    if (!email) return;
    createMessage(`📩 מייל התקבל: ${email}`, 'user');
    wrapper.remove();
  });
}

function loadNextMessage() {
  if (waiting || current >= messages.length) return;
  const msg = messages[current];
  if (msg.role === 'user') {
    typeIntoInput(msg.text);
  } else if (msg.role === 'system') {
    waiting = true;
    showTyping(() => {
      typeMessage(msg.text, 'system', () => {
        waiting = false;
        current++;
        setTimeout(loadNextMessage, 500);
      });
    });
  } else if (msg.role === 'email') {
    setTimeout(() => createEmailInputMessage(), 600);
  }
}

function typeIntoInput(text) {
  chatInput.value = '';
  chatInput.disabled = true;
  typingUser = true;
  sendBtn.classList.add('disabled');
  let i = 0;
  function typeNext() {
    if (i > text.length) {
      chatInput.disabled = false;
      typingUser = false;
      sendBtn.classList.remove('disabled');
      updateCounter();
      createMessage(text, 'user'); // Inject user message to chat
      current++;
      loadNextMessage(); // Continue conversation
      return;
    }
    chatInput.value = text.slice(0, i);
    autoResizeTextarea();
    updateCounter();
    i++;
    setTimeout(typeNext, 40);
  }
  typeNext();
  }
  typeNext();
}

function updateCounter() {
  const value = chatInput.value.trim();
  const charCount = value.length;
  const wordCount = value === '' ? 0 : value.split(/\s+/).length;
  document.getElementById('charWordCounter').textContent = `${charCount} characters / ${wordCount} words`;
}

function handleUserSend() {
  if (chatInput.value.trim() === '' || waiting || typingUser) return;
  const userInput = chatInput.value;
  chatInput.value = '';
  chatInput.style.height = 'auto';
  createMessage(userInput, 'user');
  current++;
  loadNextMessage();
}

function autoResizeTextarea() {
  chatInput.style.height = 'auto';
  chatInput.style.height = chatInput.scrollHeight + 'px';
}

chatInput.addEventListener('input', updateCounter);
sendBtn.addEventListener('click', handleUserSend);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') handleUserSend();
});

setTimeout(() => {
  loadNextMessage();
}, 400);
</script>
</body>
</html>
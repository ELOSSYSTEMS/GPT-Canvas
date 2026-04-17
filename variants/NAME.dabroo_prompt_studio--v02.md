{% layout none %}
<html dir="rtl">
<!-- Meta + Mobile Viewport -->
<script>
  const vp = document.createElement('meta');
  vp.name = "viewport";
  vp.content = "width=device-width, initial-scale=1.0";
  document.head.appendChild(vp);
</script>
{% schema %}
{
  "name": "Prompt Studio",
  "settings": []
}
{% endschema %}

<!-- Reuse all styling and layout from homepage -->
<!-- Begin Chat UI wrapper -->
<div class="chat-wrapper">
  <div class="chat-top-bar">
    <button class="menu-btn" aria-label="Open sidebar" style="margin-right: 12px; background: none; border: none; cursor: pointer;">
      <img src="https://cdn.shopify.com/s/files/1/0658/9595/6615/files/sidebar.png?v=1747034371" alt="תפריט" width="32" style="filter: brightness(0) invert(1);" />
    </button>
    <div class="chat-title-wrapper" style="margin-left: auto;">
      <span class="chat-title">Prompt Studio – Dabroo</span>
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
    </div>
  </div>
  <div class="input-meta">
    <div class="input-counter" id="charWordCounter">0 characters / 0 words</div>
    <div class="input-disclaimer">Dabroo מציג הדמיה של תוצאות לצורכי הדגמה בלבד</div>
  </div>
</div>

<script>
const messages = [
  { role: 'system', text: "בוא נבדוק את ההבדל בין GPT רגיל לדברו." },
  { role: 'compare', prompt: "כתוב פוסט על יום העצמאות לעסק קטן", gpt: "יום העצמאות הגיע! חג שמח לכל לקוחותינו. אנו גאים להיות עסק כחול-לבן.", dabroo: "עצמאות זה לא רק דגלים – זו בחירה יומיומית להיות אנחנו. תודה שאתם חלק מהדרך שלנו. 🇮🇱" },
  { role: 'compare', prompt: "תכתוב תיאור מוצר לזר אביבי", gpt: "זר אביבי הכולל פרחים יבשים. מתאים למתנה או לבית.", dabroo: "זר אביבי קליל ונושם, עם נגיעות של שמש ורגש. נשמר לעונה שלמה ומוסיף נשמה לכל פינה." },
  { role: 'compare', prompt: "תכתוב פתיח למייל שמציע הנחה", gpt: "לקוחות יקרים, אנו שמחים להציע לכם הנחה מיוחדת.", dabroo: "הפעם אנחנו מפנקים באמת – כי מגיע לכם יותר מרק פרחים." },
  { role: 'system', text: "מרגיש את ההבדל? זה לא רק ניסוח. זו כוונה, רגש, וטון שנשמע באמת." },
  { role: 'system', text: "הכלי המלא כולל עוד עשרות טמפלטים, התאמה לקהל, ולמידה מהתגובות שלך." },
  { role: 'system', text: "רוצה לראות איך זה עובד על התוכן שלך? תכניס מייל ונשלח לך גישה מתקדמת." },
  { role: 'email', text: "" }
];

let current = 0;
let waiting = false;
let typingUser = false;

const chat = document.getElementById('chat');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');

function updateCounter() {
  const value = chatInput.value.trim();
  const charCount = value.length;
  const wordCount = value === '' ? 0 : value.split(/\s+/).length;
  document.getElementById('charWordCounter').textContent = `${charCount} characters / ${wordCount} words`;
}

function scrollToBottom(el) {
  el.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

function typeMessage(text, role, callback, speed = 15) {
  const msg = document.createElement('div');
  msg.classList.add('message', role, 'visible');
  chat.appendChild(msg);
  scrollToBottom(msg);

  const wrapper = document.createElement('span');
  msg.appendChild(wrapper);

  const cursor = document.createElement('span');
  cursor.className = 'blinking-cursor';
  cursor.textContent = '|';
  msg.appendChild(cursor);

  const words = text.split(' ');
  let i = 0;

  function typeNextWord() {
    if (i >= words.length) {
      cursor.remove();
      wrapper.textContent = text;
      if (callback) callback();
      return;
    }

    wrapper.textContent += (i > 0 ? ' ' : '') + words[i];
    i++;
    setTimeout(typeNextWord, speed);
  }
  typeNextWord();
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

function showComparison(prompt, gpt, dabroo) {
  const wrapper = document.createElement('div');
  wrapper.classList.add('message', 'system', 'visible');
  wrapper.innerHTML = `
    <div style="font-weight: bold; margin-bottom: 4px;">שאלה:</div>
    <div style="margin-bottom: 12px;">${prompt}</div>
    <div style="margin-bottom: 6px; font-size: 0.85rem; opacity: 0.7;">🎛️ GPT רגיל:</div>
    <div style="background: #2e2e2e; padding: 12px 16px; border-radius: 12px; margin-bottom: 12px;">${gpt}</div>
    <div style="margin-bottom: 6px; font-size: 0.85rem; opacity: 0.7;">🌿 Dabroo:</div>
    <div style="background: #0a7aff33; padding: 12px 16px; border-radius: 12px;">${dabroo}</div>
  `;
  chat.appendChild(wrapper);
  scrollToBottom(wrapper);
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
    const conf = document.createElement('div');
    conf.classList.add('message', 'user', 'visible');
    conf.textContent = `📩 מייל התקבל: ${email}`;
    chat.appendChild(conf);
    wrapper.remove();
  });
}

function loadNextMessage() {
  if (waiting || current >= messages.length) return;
  const msg = messages[current];

  if (msg.role === 'system') {
    waiting = true;
    showTyping(() => {
      typeMessage(msg.text, 'system', () => {
        waiting = false;
        current++;
        setTimeout(loadNextMessage, 500);
      });
    });
  } else if (msg.role === 'compare') {
    waiting = true;
    showTyping(() => {
      showComparison(msg.prompt, msg.gpt, msg.dabroo);
      waiting = false;
      current++;
      setTimeout(loadNextMessage, 1000);
    });
  } else if (msg.role === 'email') {
    setTimeout(() => createEmailInputMessage(), 600);
  }
}

chatInput.addEventListener('input', updateCounter);

setTimeout(() => {
  loadNextMessage();
}, 400);
</script>
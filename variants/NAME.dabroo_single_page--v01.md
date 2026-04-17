<!-- page.dabroo-chat.liquid (Unified Version) -->
<html dir="rtl" lang="he">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    /* ========== Global Styles ========== */
    html, body {
      margin: 0;
      padding: 0;
      height: 100%;
      background-color: #1a1a1a;
      font-family: "Segoe UI", "Noto Sans Hebrew", "Inter", sans-serif;
      color: #f2f4f8;
      direction: rtl;
      overflow: hidden;
    }

    .chat-wrapper {
      display: flex;
      flex-direction: column;
      height: 100vh;
      width: 100vw;
    }

    .chat-title {
      text-align: center;
      font-size: 1.6rem;
      font-weight: 600;
      margin: 16px auto;
    }

    .chat-container {
      flex: 1;
      overflow-y: auto;
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 12px;
      box-sizing: border-box;
      scroll-padding-bottom: 120px;
    }

    .message {
      max-width: 90%;
      background-color: #2e2e2e;
      padding: 14px 20px;
      border-radius: 14px;
      line-height: 1.7;
      font-size: 1rem;
      align-self: flex-start;
      white-space: pre-wrap;
    }

    .message.system {
      align-self: flex-end;
      background-color: #0a7aff33;
    }

    .input-bar {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 12px;
      background: #1a1a1a;
      box-shadow: 0 -2px 4px rgba(0,0,0,0.3);
    }

    .input-bar textarea {
      flex: 1;
      padding: 10px;
      border-radius: 10px;
      font-size: 1rem;
      resize: none;
      border: none;
      outline: none;
      background: #2a2a2a;
      color: #fff;
      margin-left: 10px;
    }

    .input-bar button {
      background-color: #0a7aff;
      border: none;
      border-radius: 50%;
      width: 38px;
      height: 38px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: #fff;
      font-size: 1.2rem;
    }

    .option-button-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 12px;
      margin: 20px auto;
      max-width: 800px;
    }

    .option-button {
      background-color: #2a2a2a;
      color: #f2f4f8;
      border: 1px solid #3a3a3a;
      border-radius: 12px;
      padding: 12px 20px;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.25s ease, transform 0.2s ease;
    }

    .option-button:hover {
      background-color: #0a7aff;
      color: #fff;
      transform: translateY(-2px);
    }
  </style>
</head>
<body>
  <div class="chat-wrapper">
    <div class="chat-title">Dabroo AI</div>
    <div class="chat-container" id="chat"></div>
    <div class="input-bar">
      <textarea id="chatInput" placeholder="הקלד משהו..." rows="1"></textarea>
      <button id="sendBtn">⬆️</button>
    </div>
  </div>

  <script>
    const __dabrooUser = JSON.parse(localStorage.getItem('__dabrooUser') || '{}');

    const updateUserData = (key, value) => {
      __dabrooUser[key] = value;
      localStorage.setItem('__dabrooUser', JSON.stringify(__dabrooUser));
    };

    const interpolateVars = text => text.replace(/{{(.*?)}}/g, (_, key) => __dabrooUser[key] || '');

    const injectMessage = (role, text) => {
      const msg = document.createElement('div');
      msg.className = `message ${role}`;
      msg.innerText = text;
      document.getElementById('chat').appendChild(msg);
      msg.scrollIntoView({ behavior: 'smooth' });
    };

    const renderOptions = (options) => {
      const wrapper = document.createElement('div');
      wrapper.className = 'option-button-container';
      options.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'option-button';
        btn.innerText = option.label;
        btn.onclick = () => handleOptionSelect(option);
        wrapper.appendChild(btn);
      });
      document.getElementById('chat').appendChild(wrapper);
      wrapper.scrollIntoView({ behavior: 'smooth' });
    };

    const handleOptionSelect = (option) => {
      document.getElementById('chatInput').value = option.label;
      handleUserSend(option.trigger);
    };

    const askUserInput = (id, callback) => {
      const wrapper = document.createElement('div');
      wrapper.className = 'message user';
      const input = document.createElement('input');
      input.placeholder = '...';
      input.className = 'input-dynamic';
      input.onkeydown = e => {
        if (e.key === 'Enter') {
          updateUserData(id, input.value.trim());
          wrapper.remove();
          injectMessage('user', input.value);
          callback();
        }
      };
      wrapper.appendChild(input);
      document.getElementById('chat').appendChild(wrapper);
      input.focus();
    };

    const runBranch = (branch) => {
      let step = 0;
      function next() {
        if (step >= branch.length) return;
        const part = branch[step++];
        if (part.role === 'system' && part.options) {
          injectMessage('system', part.text);
          renderOptions(part.options);
        } else if (part.role === 'system') {
          injectMessage('system', interpolateVars(part.text));
          setTimeout(next, 1000);
        } else if (part.role === 'input') {
          askUserInput(part.id, next);
        } else {
          next();
        }
      }
      next();
    };

    const branches = {
      WHAT_IS_DABROO: [
        { role: 'system', text: 'Dabroo הוא עוזר אישי בעברית שנבנה במיוחד לעסקים ויוצרים ישראליים.' },
        { role: 'system', text: 'המטרה שלו היא לעזור לך לנסח, לדייק, ולתקשר בצורה הרבה יותר טבעית — בלי להרגיש כמו תרגום רובוטי.' },
        { role: 'system', text: 'רוצה לראות איך זה עובד?' },
        { role: 'system', text: 'מה תרצה לעשות עכשיו?', options: [
          { label: 'לכתוב פוסט שיווקי', trigger: 'WRITE_POST' },
          { label: 'ללמוד איך לנסח פרומפט', trigger: 'LEARN_PROMPT' }
        ] }
      ],
      WRITE_POST: [
        { role: 'system', text: 'על איזה נושא אתה רוצה לכתוב?' },
        { role: 'input', id: 'topic' },
        { role: 'system', text: 'מה הסגנון של הפוסט?' },
        { role: 'input', id: 'tone' },
        { role: 'system', text: 'ולמי הפוסט מיועד?' },
        { role: 'input', id: 'audience' },
        { role: 'system', text: 'הנה טיוטה לפוסט שלך:

נושא: {{topic}}
סגנון: {{tone}}
קהל: {{audience}}

[כאן יבוא הפוסט].' }
      ],
      LEARN_PROMPT: [
        { role: 'system', text: 'פרומפט טוב = מטרה + קהל + הקשר.' },
        { role: 'system', text: 'מה אתה רוצה שהצ׳אט יעשה עבורך?' },
        { role: 'input', id: 'goal' },
        { role: 'system', text: 'למי זה מיועד?' },
        { role: 'input', id: 'audience' },
        { role: 'system', text: 'יש הקשר מסוים?' },
        { role: 'input', id: 'context' },
        { role: 'system', text: 'הפרומפט שלך:
Write a {{goal}} for {{audience}}. Context: {{context}}.' }
      ]
    };

    const handleUserSend = (trigger = null) => {
      const input = document.getElementById('chatInput');
      const text = input.value.trim();
      if (!text) return;
      injectMessage('user', text);
      input.value = '';
      if (trigger && branches[trigger]) runBranch(branches[trigger]);
    };

    window.addEventListener('DOMContentLoaded', () => {
      const titleDiv = document.createElement('div');
      titleDiv.className = 'chat-title';
      titleDiv.innerText = 'Dabroo AI';
      document.getElementById('chat').appendChild(titleDiv);
      runBranch(branches['WHAT_IS_DABROO']);
    });
  </script>
</body>
</html>
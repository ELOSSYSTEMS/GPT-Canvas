// ✅ dabroo-chat.js — Modular + Branching + User Data Capture

window.__dabrooUser = {};
window.__dabrooBranches = {
  ABOUT: [
    { role: 'system', text: 'Dabroo הוא עוזר אישי בעברית שנבנה במיוחד לעסקים ויוצרים ישראליים.' },
    { role: 'system', text: 'המטרה שלו היא לעזור לך לנסח, לדייק, ולתקשר בצורה הרבה יותר טבעית — בלי להרגיש כמו תרגום רובוטי.' },
    { role: 'system', text: 'רוצה לראות איך זה עובד? 🔽 תבחר אחד מהשלבים הבאים:' },
    {
      role: 'system',
      text: 'מה תרצה לעשות עכשיו?',
      options: [
        { label: 'לכתוב פוסט שיווקי', trigger: 'WRITE_POST' },
        { label: 'ללמוד איך לנסח פרומפט', trigger: 'LEARN_PROMPT' }
      ]
    }
  ],
  WRITE_POST: [
    { role: 'system', text: 'בשמחה. נתחיל בקטן — על איזה נושא אתה רוצה לכתוב?' },
    { role: 'input', id: 'post_topic' },
    { role: 'system', text: 'מה הסגנון של הפוסט? מצחיק? מרגש? ענייני?' },
    { role: 'input', id: 'post_tone' },
    { role: 'system', text: 'ולאיזה קהל זה מיועד?' },
    { role: 'input', id: 'post_audience' },
    { role: 'system', text: 'הבנתי. הנה טיוטת הפוסט שלך — מותאמת ל{{post_audience}}, בסגנון {{post_tone}}:' },
    { role: 'system', text: '🌸 נושא: {{post_topic}} \n\n[כאן יבוא הפוסט השיווקי].' },
    {
      role: 'system',
      text: 'רוצה לנסות משהו אחר?',
      options: [
        { label: 'לכתוב פוסט נוסף', trigger: 'WRITE_POST' },
        { label: 'ללמוד איך לנסח פרומפט', trigger: 'LEARN_PROMPT' }
      ]
    }
  ],
  LEARN_PROMPT: [
    { role: 'system', text: 'לנסח פרומפט טוב זה כמו לתת הוראה מדויקת לחבר חכם. נתחיל?' },
    { role: 'system', text: 'שלושת העקרונות לפרומפט מוצלח הם: מטרה, קהל, והקשר.' },
    { role: 'system', text: 'אז בוא נבנה אחד יחד. מה אתה רוצה שהצ׳אט יעשה עבורך?' },
    { role: 'input', id: 'goal' },
    { role: 'system', text: 'למי זה מיועד? תאר לי את הקהל שלך בקצרה.' },
    { role: 'input', id: 'audience' },
    { role: 'system', text: 'יש הקשר שכדאי לי לדעת עליו? (למשל, חג, מבצע, קמפיין מסוים?)' },
    { role: 'input', id: 'context' },
    { role: 'system', text: 'פרפקט. הפרומפט שלך באנגלית המושלמת ייראה כך:' },
    { role: 'system', text: 'Write a {{goal}} for {{audience}}. The context is: {{context}}.' },
    {
      role: 'system',
      text: 'רוצה להמשיך ללמוד?',
      options: [
        { label: 'לכתוב פוסט', trigger: 'WRITE_POST' },
        { label: 'להתחיל מחדש', trigger: 'ABOUT' }
      ]
    }
  ]
};

function injectMessage(role, text) {
  const msg = document.createElement('div');
  msg.className = `message ${role} visible`;
  msg.innerText = text;
  document.getElementById('chat').appendChild(msg);
  msg.scrollIntoView({ behavior: 'smooth' });
}

function renderOptions(options) {
  const wrapper = document.createElement('div');
  wrapper.className = 'message system visible';

  options.forEach(option => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerText = option.label;
    btn.onclick = () => handleOptionSelect(option);
    wrapper.appendChild(btn);
  });

  document.getElementById('chat').appendChild(wrapper);
  wrapper.scrollIntoView({ behavior: 'smooth' });
}

function handleOptionSelect(option) {
  const input = document.getElementById('chatInput');
  input.value = option.label;
  handleUserSend(option.trigger);
}

function handleUserSend(trigger = null) {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if (!text) return;

  injectMessage('user', text);
  input.value = '';

  if (trigger && window.__dabrooBranches[trigger]) {
    runBranch(window.__dabrooBranches[trigger]);
  } else {
    injectMessage('system', 'אין תגובה מוכנה.');
  }
}

function runBranch(branch) {
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
}

function interpolateVars(text) {
  return text.replace(/{{(.*?)}}/g, (_, key) => window.__dabrooUser[key] || '');
}

function askUserInput(id, callback) {
  const wrapper = document.createElement('div');
  wrapper.className = 'message user';

  const input = document.createElement('input');
  input.placeholder = '...';
  input.className = 'input-dynamic';
  input.onkeydown = e => {
    if (e.key === 'Enter') {
      window.__dabrooUser[id] = input.value.trim();
      wrapper.remove();
      injectMessage('user', input.value);
      callback();
    }
  };

  wrapper.appendChild(input);
  document.getElementById('chat').appendChild(wrapper);
  input.focus();
  wrapper.scrollIntoView({ behavior: 'smooth' });
}

window.addEventListener('DOMContentLoaded', () => {
  const title = window.__dabrooChatConfig?.title || 'Dabroo AI';
  const starters = window.__dabrooChatConfig?.starters || [];

  injectMessage('system', title);

  const wrapper = document.createElement('div');
  wrapper.className = 'message system visible';

  starters.forEach(starter => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerText = starter;
    btn.onclick = () => {
      document.getElementById('chatInput').value = starter;
    };
    wrapper.appendChild(btn);
  });

  document.getElementById('chat').appendChild(wrapper);
});
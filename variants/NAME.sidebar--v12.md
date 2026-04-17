// ✅ dabroo-chat.js — Modular + Branching + User Data Capture + Product CTA + Memory

window.__dabrooUser = JSON.parse(localStorage.getItem('__dabrooUser') || '{}');

function updateUserData(key, value) {
  window.__dabrooUser[key] = value;
  localStorage.setItem('__dabrooUser', JSON.stringify(window.__dabrooUser));
}

function hasUserData(key) {
  return window.__dabrooUser && window.__dabrooUser[key];
}

function interpolateVars(text) {
  return text.replace(/{{(.*?)}}/g, (_, key) => window.__dabrooUser[key] || '');
}

function injectMessage(role, text) {
  const msg = document.createElement('div');
  msg.className = `message ${role} visible`;
  msg.innerText = text;
  document.getElementById('chat').appendChild(msg);
  msg.scrollIntoView({ behavior: 'smooth' });
}

function renderOptions(options) {
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
}

function handleOptionSelect(option) {
  const input = document.getElementById('chatInput');
  input.value = option.label;
  handleUserSend(option.trigger);
}

function askUserInput(id, callback) {
  if (hasUserData(id)) {
    injectMessage('user', window.__dabrooUser[id]);
    callback();
    return;
  }

  const wrapper = document.createElement('div');
  wrapper.className = 'message user';

  const input = document.createElement('input');
  input.placeholder = '...';
  input.className = 'input-dynamic';
  input.onkeydown = e => {
    if (e.key === 'Enter') {
      const val = input.value.trim();
      updateUserData(id, val);
      wrapper.remove();
      injectMessage('user', val);
      callback();
    }
  };

  wrapper.appendChild(input);
  document.getElementById('chat').appendChild(wrapper);
  input.focus();
  wrapper.scrollIntoView({ behavior: 'smooth' });
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

window.addEventListener('DOMContentLoaded', () => {
  const title = window.__dabrooChatConfig?.title || 'Dabroo AI';
  const starters = window.__dabrooChatConfig?.starters || [];
  const startBranch = window.__dabrooChatConfig?.startBranch;

  if (!document.querySelector('.chat-title')) {
    const titleDiv = document.createElement('div');
    titleDiv.className = 'chat-title';
    titleDiv.innerText = title;
    document.getElementById('chat').appendChild(titleDiv);
  }

  if (startBranch && window.__dabrooBranches[startBranch]) {
    runBranch(window.__dabrooBranches[startBranch]);
    return;
  }

  if (starters.length > 0) {
    const starterWrapper = document.createElement('div');
    starterWrapper.className = 'option-button-container';

    starters.forEach(starter => {
      const btn = document.createElement('button');
      btn.className = 'option-button starter';
      btn.innerText = starter;
      btn.onclick = () => {
        document.getElementById('chatInput').value = starter;
        document.getElementById('chat').removeChild(starterWrapper);
      };
      starterWrapper.appendChild(btn);
    });

    document.getElementById('chat').appendChild(starterWrapper);
  } else {
    injectMessage('system', 'מה תרצה לעשות?');
  }
});
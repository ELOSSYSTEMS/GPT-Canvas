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

function askUserInput(id, callback) {
  const wrapper = document.createElement('div');
  wrapper.className = 'message user';
  const input = document.createElement('input');
  input.placeholder = '...';
  input.className = 'input-dynamic';
  input.onkeydown = e => {
    if (e.key === 'Enter') {
      window.__dabrooUser[id] = input.value.trim();
      updateUserData(id, input.value.trim());
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
      if (hasUserData(part.id)) {
        injectMessage('user', window.__dabrooUser[part.id]);
        next();
      } else {
        askUserInput(part.id, next);
      }
    } else {
      next();
    }
  }
  next();
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

window.addEventListener('DOMContentLoaded', () => {
  const title = window.__dabrooChatConfig?.title || 'Dabroo AI';
  const starters = window.__dabrooChatConfig?.starters || [];
  const startBranch = window.__dabrooChatConfig?.startBranch;
  injectMessage('system', title);
  if (startBranch && window.__dabrooBranches[startBranch]) {
    runBranch(window.__dabrooBranches[startBranch]);
  } else {
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
  }
});
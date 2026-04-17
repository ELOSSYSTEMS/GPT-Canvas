/* dabroo-chat.css */
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

.chat-top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background-color: #000;
  color: #fff;
  font-size: 1.25rem;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0,0,0,0.3);
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
}

.chat-title {
  text-align: center;
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 12px;
}

.conversation-starters {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.starter-btn {
  background-color: #2a2a2a;
  border: none;
  border-radius: 12px;
  padding: 12px 18px;
  color: #f2f4f8;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-align: center;
  max-width: 280px;
}

.starter-btn:hover {
  background-color: #0a7aff33;
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
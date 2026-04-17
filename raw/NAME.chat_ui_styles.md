html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: #212121;
  font-family: "Segoe UI", "Noto Sans Hebrew", "Inter", sans-serif;
  color: #ececec;
  direction: rtl;
  overflow: hidden;
}

.chat-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
}

.chat-container {
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 680px;
  width: 100%;
  padding: 20px 20px 100px;
  box-sizing: border-box;
  margin: 0 auto;
  scrollbar-width: none;
  scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
}

.chat-container:hover {
  scrollbar-width: thin;
}

.chat-container::-webkit-scrollbar {
  width: 8px;
}

.chat-container::-webkit-scrollbar-track {
  background: transparent;
}

.chat-container::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.chat-container:hover::-webkit-scrollbar-thumb {
  opacity: 1;
}

body::-webkit-scrollbar {
  width: 8px;
}

body::-webkit-scrollbar-track {
  background: transparent;
}

body::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

body:hover::-webkit-scrollbar-thumb {
  opacity: 1;
}

.chat-input-bar {
  position: sticky;
  bottom: 0;
  background: #212121;
  padding: 12px 0;
  box-shadow: 0 -2px 8px rgba(0,0,0,0.3);
  z-index: 10;
  min-height: 80px;
}

.input-shell {
  background-color: #303030;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 12px 16px;
  max-width: 680px;
  width: 90%;
  margin: 0 auto;
  box-shadow: 0 0 0 1px #4e4f60;
}

.input-row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.input-row textarea {
  background: none;
  border: none;
  flex: 1;
  color: #dcdcdc;
  font-size: 1rem;
  font-family: inherit;
  direction: rtl;
  resize: none;
  overflow: hidden;
  min-height: 24px;
  line-height: 1.5;
  padding: 0;
  margin: 0;
  white-space: pre-wrap;
  word-break: break-word;
}

.input-row textarea::placeholder {
  color: #dcdcdc;
}

.send-btn {
  background-color: #fff;
  border-radius: 50%;
  border: none;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
}

.send-btn svg {
  transform: rotate(-90deg);
  width: 18px;
  height: 18px;
  fill: #000;
}

.send-btn.disabled {
  opacity: 0.5;
  pointer-events: none;
}

.chat-action-bar {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 8px;
}

.chat-action-bar button {
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  padding: 4px 10px;
  font-size: 0.8rem;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.chat-action-bar button:hover {
  background-color: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.3);
}

.message {
  width: fit-content;
  max-width: 90%;
  padding: 16px 24px;
  border-radius: 16px;
  white-space: pre-wrap;
  word-break: break-word;
  line-height: 1.8;
  font-size: 1.05rem;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  box-sizing: border-box;
  margin: 0;
}

.message + .message {
  margin-top: 8px;
}

.message.user {
  background-color: #2e2e2e;
  align-self: flex-end;
}

.message.system {
  background-color: #444;
  align-self: flex-start;
}

.visible {
  opacity: 1;
}

.typing-indicator {
  font-size: 1.3rem;
  color: #ccc;
  padding-left: 8px;
  animation: blink 1.5s infinite;
}

.scroll-anchor {
  height: 20px;
}

#chatInput {
  caret-color: #ffffff;
  animation: blink-caret 1s step-end infinite;
}

.blinking-cursor {
  display: inline-block;
  margin-right: 1px;
  color: #fff;
  animation: blink 1s step-start infinite;
}

@keyframes blink {
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
}

@keyframes blink-caret {
  0%, 100% { caret-color: transparent; }
  50% { caret-color: #ffffff; }
}
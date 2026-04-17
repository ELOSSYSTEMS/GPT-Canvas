<style>
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
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
  scrollbar-gutter: stable both-edges;
  direction: ltr;
  text-align: right;
}

.chat-container::-webkit-scrollbar,
body::-webkit-scrollbar,
.sidebar::-webkit-scrollbar {
  width: 8px;
}

.chat-container::-webkit-scrollbar-track,
body::-webkit-scrollbar-track,
.sidebar::-webkit-scrollbar-track {
  background: transparent;
}

.chat-container::-webkit-scrollbar-thumb,
body::-webkit-scrollbar-thumb,
.sidebar::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
}

.chat-container:hover::-webkit-scrollbar-thumb,
body:hover::-webkit-scrollbar-thumb {
  opacity: 1;
}

.chat-input-bar {
  position: sticky;
  bottom: 0;
  background: #1a1a1a;
  padding: 12px 0;
  box-shadow: 0 -2px 8px rgba(0,0,0,0.3);
  z-index: 10;
  min-height: 80px;
}

.input-shell {
  background-color: #222;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 12px 16px;
  max-width: 680px;
  width: 90%;
  margin: 0 auto;
  box-shadow: 0 0 0 1px #333;
}

.input-row textarea {
  background: none;
  border: none;
  flex: 1;
  color: #f2f4f8;
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
  color: #9aa5b1;
}

.send-btn {
  background-color: #0a7aff;
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
  fill: #fff;
}

.chat-action-bar button.active {
  background-color: #0a7aff;
  border-color: #0a7aff;
  color: white;
}

.chat-action-bar button:hover {
  background-color: rgba(10, 122, 255, 0.1);
  border-color: #0a7aff;
}

.message.user {
  background-color: #2e2e2e;
}

.message.system {
  color: #9aa5b1;
}

.input-meta {
  color: #9aa5b1;
}

.chat-top-bar {
  background-color: #1a1a1a;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}

.sidebar {
  background-color: #111;
}

.sidebar-links li {
  color: #f2f4f8;
}

.sidebar-links li:hover {
  background-color: rgba(10, 122, 255, 0.1);
}

.sidebar-links li img {
  filter: brightness(0) invert(1);
}

.chat-title-wrapper,
.sidebar-header {
  color: #f2f4f8;
}
</style>
/* 🌟 Conversation Starter + Option Buttons */
.option-button {
  background-color: #2a2a2a;
  color: #f2f4f8;
  border: 1px solid #3a3a3a;
  border-radius: 12px;
  padding: 12px 20px;
  font-size: 1rem;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.25s ease, border-color 0.25s ease, transform 0.2s ease;
  max-width: 100%;
  flex: 1 1 48%;
  margin: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  direction: rtl;
  white-space: normal;
  word-break: break-word;
}

.option-button:hover {
  background-color: #0a7aff;
  border-color: #0a7aff;
  color: #fff;
  transform: translateY(-2px);
}

.option-button-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin: 20px auto;
  max-width: 800px;
  direction: rtl;
}

/* 📱 Mobile Swipe for Starters */
@media (max-width: 600px) {
  .option-button-container {
    overflow-x: auto;
    display: flex;
    flex-wrap: nowrap;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
  }

  .option-button {
    flex: 0 0 auto;
    scroll-snap-align: center;
    min-width: 70%;
    max-width: 80%;
  }
}
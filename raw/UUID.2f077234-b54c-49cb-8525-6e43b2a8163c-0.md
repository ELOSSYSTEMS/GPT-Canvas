<style>
  .important-note {
    direction: rtl;
    text-align: right;
    padding: 0;
    background-color: #ffffff;
    font-family: inherit;
    max-width: 800px;
    margin: 0 auto 3rem auto;
  }

  .important-note details.section-wrapper {
    border-top: 1px solid #eaeaea;
  }

  .important-note summary.section-title {
    font-size: 1.6rem;
    font-weight: 500;
    color: #1a1a1a;
    text-align: center;
    cursor: pointer;
    list-style: none;
    padding: 2rem 1rem 1rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    background-color: #fff;
  }

  .important-note summary.section-title .chevron-circle {
    width: 42px;
    height: 42px;
    background-color: #f0f0f0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    color: #666;
    transition: transform 0.3s ease;
  }

  .important-note details[open] summary.section-title .chevron-circle {
    transform: rotate(180deg);
  }

  .important-note details:not(.section-wrapper) {
    border-top: 1px solid #e4e4e4;
    padding: 1.5rem 1rem 0;
    margin-bottom: 1.5rem;
    position: relative;
  }

  .important-note summary {
    cursor: pointer;
    font-weight: 600;
    font-size: 1.05rem;
    color: #111;
    list-style: none;
    position: relative;
    padding-right: 1rem;
  }

  .important-note summary::marker {
    display: none;
  }

  .important-note summary::after {
    content: "＋";
    position: absolute;
    left: 0;
    font-size: 1.2rem;
    color: #999;
    transition: transform 0.3s ease;
  }

  .important-note details[open] summary::after {
    content: "−";
    transform: rotate(0deg);
  }

  .important-note p {
    margin-top: 1rem;
    font-size: 1rem;
    color: #444;
    line-height: 1.6;
    padding-right: 1rem;

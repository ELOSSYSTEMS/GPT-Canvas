<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ELos Extension – Translate Smarter, Visualize Faster</title>
  <script src="https://cdn.paddle.com/paddle/paddle.js"></script>
  <script>
    Paddle.Setup({ vendor: YOUR_VENDOR_ID });
    function openCheckout(productId) {
      Paddle.Checkout.open({ product: productId });
    }
  </script>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f9f9f9;
      color: #111;
      margin: 0;
      padding: 0;
    }
    header {
      background: #000;
      color: white;
      padding: 2rem;
      text-align: center;
    }
    .section {
      max-width: 800px;
      margin: 2rem auto;
      padding: 0 1rem;
    }
    h1, h2 {
      margin-bottom: 1rem;
    }
    .btn {
      background-color: #0070f3;
      color: white;
      padding: 0.8rem 1.5rem;
      border: none;
      border-radius: 5px;
      font-size: 1rem;
      cursor: pointer;
    }
    .pricing {
      display: flex;
      justify-content: space-around;
      margin-top: 2rem;
    }
    .card {
      background: white;
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      width: 30%;
      text-align: center;
    }
  </style>
</head>
<body>
  <header>
    <h1>ELos Extension</h1>
    <p>Translate and Optimize Prompts – in Your Language</p>
    <button class="btn" onclick="document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });">View Pricing</button>
  </header>

  <div class="section">
    <h2>Why ELos?</h2>
    <p>ELos gives ChatGPT a native-language brain. No more clunky translations. Our TranslateOS uses real linguistic fidelity to convert, rewrite, and fireproof your prompts natively. VisualOS lets you generate perfect scenes in Midjourney and DALL·E without prompt engineering.</p>
  </div>

  <div class="section" id="pricing">
    <h2>Choose Your Plan</h2>
    <div class="pricing">
      <div class="card">
        <h3>TranslateOS</h3>
        <p>Hebrew prompt conversion + output control</p>
        <p><strong>$49</strong></p>
        <button class="btn" onclick="openCheckout(TRANSLATE_PRODUCT_ID)">Buy Now</button>
      </div>
      <div class="card">
        <h3>Translate + VisualOS</h3>
        <p>Includes Midjourney + DALL·E prompt modules</p>
        <p><strong>$149</strong></p>
        <button class="btn" onclick="openCheckout(COMBO_PRODUCT_ID)">Buy Now</button>
      </div>
      <div class="card">
        <h3>Full Lifetime Access</h3>
        <p>All modules now + future releases forever</p>
        <p><strong>$299</strong></p>
        <button class="btn" onclick="openCheckout(FULL_PRODUCT_ID)">Buy Now</button>
      </div>
    </div>
  </div>

  <div class="section">
    <h2>How It Works</h2>
    <ul>
      <li>Install from Chrome Web Store</li>
      <li>Activate your module with Paddle purchase</li>
      <li>Start translating, visualizing, and optimizing your prompts instantly</li>
    </ul>
  </div>

  <div class="section">
    <h2>FAQ</h2>
    <p><strong>Does this work with free ChatGPT?</strong><br>Yes. But it shines with GPT-4.</p>
    <p><strong>Is this extension safe?</strong><br>All logic is local. No API keys required. No data leaves your browser.</p>
  </div>
</body>
</html>
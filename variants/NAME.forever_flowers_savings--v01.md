<div id="ff-savings-tool">
  <label for="ff-bouquet-price">כמה את/ה בדרך כלל משלם/ת על זר?</label><br>
  <input type="number" id="ff-bouquet-price" placeholder="לדוגמה: 180" min="0" step="10" /> ₪

  <label for="ff-frequency">באיזו תדירות את/ה נוהג/ת לרכוש פרחים?</label><br>
  <select id="ff-frequency">
    <option value="4">פעם בשבוע</option>
    <option value="2">פעמיים בחודש</option>
    <option value="1">פעם בחודש</option>
  </select>

  <div class="ff-results">
    <p>עלות מצטברת של פרחים טריים ל-3 חודשים: <strong><span id="ff-fresh-cost">0</span> ₪</strong></p>
    <p>עלות זר Forever Flowers: <strong><span id="ff-forever-price">{{ product.price | money_without_currency }}</span> ₪</strong></p>
    <p class="ff-savings-highlight">חיסכון מוערך: <strong><span id="ff-savings">0</span> ₪</strong></p>
  </div>
</div>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    const foreverPrice = {{ product.price | money_without_currency }};
    const priceInput = document.getElementById("ff-bouquet-price");
    const frequencySelector = document.getElementById("ff-frequency");
    const freshCostEl = document.getElementById("ff-fresh-cost");
    const savingsEl = document.getElementById("ff-savings");

    function updateSavings() {
      const bouquetPrice = parseFloat(priceInput.value);
      const freqPerMonth = parseInt(frequencySelector.value);
      if (isNaN(bouquetPrice)) return;

      const totalFresh = bouquetPrice * freqPerMonth * 3; // 3 months
      const savings = totalFresh - foreverPrice;

      freshCostEl.textContent = totalFresh.toLocaleString();
      savingsEl.textContent = savings > 0 ? savings.toLocaleString() : 0;
    }

    priceInput.addEventListener("input", updateSavings);
    frequencySelector.addEventListener("change", updateSavings);
  });
</script>

<style>
  #ff-savings-tool {
    border: 1px solid #d6d3cd;
    background: #f8f6f2;
    padding: 2rem;
    margin: 2rem 0;
    border-radius: 1rem;
    max-width: 500px;
    font-family: inherit;
    font-size: 1rem;
    color: #101935;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.05);
  }

  #ff-savings-tool input,
  #ff-savings-tool select {
    margin: 0.5rem 0 1rem 0;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
  }

  .ff-results {
    margin-top: 1.5rem;
    border-top: 1px solid #ccc;
    padding-top: 1rem;
  }

  .ff-savings-highlight {
    font-size: 1.1rem;
    color: #27446b;
    font-weight: 600;
    margin-top: 1rem;
  }
</style>
<!-- Forever Flowers Savings Calculator  -->
<div id="ff-savings-tool" class="{% if request.locale.iso_code == 'he' %}rtl{% endif %}">
  <label for="ff-bouquet-price">
    {% if request.locale.iso_code == 'he' %}
      כמה את/ה בדרך כלל משלם/ת על זר?
    {% else %}
      How much do you usually spend on a bouquet?
    {% endif %}
  </label>
  <input type="number" id="ff-bouquet-price" placeholder="200" min="0" step="10"/>

  <label for="ff-frequency">
    {% if request.locale.iso_code == 'he' %}
      באיזו תדירות את/ה רוכש/ת פרחים?
    {% else %}
      How often do you buy fresh flowers?
    {% endif %}
  </label>
  <select id="ff-frequency">
    <option value="4">{% if request.locale.iso_code == 'he' %}פעם בשבוע{% else %}Weekly{% endif %}</option>
    <option value="2" selected>{% if request.locale.iso_code == 'he' %}פעמיים בחודש{% else %}Every two weeks{% endif %}</option>
    <option value="1">{% if request.locale.iso_code == 'he' %}פעם בחודש{% else %}Monthly{% endif %}</option>
  </select>

  <div class="ff-results">
    <p>
      {% if request.locale.iso_code == 'he' %}
        עלות מצטברת של פרחים טריים ל-3 חודשים:
      {% else %}
        Cumulative fresh-flower cost over 3 months:
      {% endif %}
      <strong><span id="ff-fresh-cost">0</span>&nbsp;₪</strong>
    </p>
    <p>
      {% if request.locale.iso_code == 'he' %}
        עלות זר {{ product.title }}:
      {% else %}
        Cost of {{ product.title }} bouquet:
      {% endif %}
      <strong><span id="ff-forever-price">{{ product.price | money_without_currency }}</span>&nbsp;₪</strong>
    </p>
    <p class="ff-savings-highlight">
      {% if request.locale.iso_code == 'he' %}
        חיסכון משוער:
      {% else %}
        Estimated savings:
      {% endif %}
      <strong><span id="ff-savings">0</span>&nbsp;₪</strong>
    </p>
  </div>
</div>

<script>
  document.addEventListener("DOMContentLoaded", function() {
    const foreverPrice = {{ product.price | money_without_currency }};
    const priceInput = document.getElementById('ff-bouquet-price');
    const freqSelect = document.getElementById('ff-frequency');
    const freshCostEl = document.getElementById('ff-fresh-cost');
    const savingsEl   = document.getElementById('ff-savings');

    function formatNIS(num){return num.toLocaleString('he-IL');}

    function updateSavings(){
      const bouquetPrice = parseFloat(priceInput.value || 0);
      const freqPerMonth = parseInt(freqSelect.value);
      const freshTotal = bouquetPrice * freqPerMonth * 3; // 3-month horizon
      const savings = Math.max(freshTotal - foreverPrice, 0);

      freshCostEl.textContent = formatNIS(freshTotal);
      savingsEl.textContent   = formatNIS(savings);
    }

    priceInput.addEventListener('input', updateSavings);
    freqSelect.addEventListener('change', updateSavings);
    updateSavings();
  });
</script>

<style>
  #ff-savings-tool{border:1px solid #d6d3cd;background:#f8f6f2;padding:1.5rem;margin:2rem 0;border-radius:1rem;max-width:500px;font-size:1rem;color:#101935;box-shadow:0 6px 18px rgba(0,0,0,0.05);}
  #ff-savings-tool.rtl{direction:rtl;text-align:right;}
  #ff-savings-tool input,#ff-savings-tool select{margin:0.5rem 0 1rem 0;padding:0.55rem 1rem;font-size:1rem;border:1px solid #ccc;border-radius:8px;width:100%;}
  #ff-savings-tool label{font-weight:500;display:block;margin-top:0.5rem;}
  .ff-results{margin-top:1rem;border-top:1px solid #ccc;padding-top:1rem;line-height:1.6;}
  .ff-savings-highlight{font-size:1.1rem;color:#27446b;font-weight:600;margin-top:0.5rem;}
</style>
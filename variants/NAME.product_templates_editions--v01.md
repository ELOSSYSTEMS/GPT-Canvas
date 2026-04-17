<!-- TEMPLATE: FLAGSHIP EDITION -->
<!-- File: product.flagship.liquid -->

{% comment %} Start: Edition Badge {% endcomment %}
<div class="edition-badge flagship">
  <span>Flagship Edition</span>
</div>

{% comment %} Product Title {% endcomment %}
<h1 class="product-title">{{ product.title }}</h1>

{% comment %} Delivery Line {% endcomment %}
<p class="delivery-info">White Glove Delivery — 2 business days</p>

{% comment %} Intro Paragraph {% endcomment %}
<div class="product-intro">
  <p>Not just flowers — a feeling, delivered.</p>
  <p>A defining composition from our Flagship Edition, {{ product.title }} brings clarity and lift to any interior. Soft pastels are arranged with intention — evoking calm, warmth, and timeless elegance.</p>
  <p>Perfect on the kitchen island, dining table, or sideboard — bringing warmth and clarity to your daily space.</p>
</div>

{% comment %} Main Content Blocks {% endcomment %}
<div class="product-details">
  {{ product.description }}
</div>

{% comment %} Buy Button Block {% endcomment %}
<div class="buy-button">
  <a href="{{ product.url }}" class="btn">Browse Product</a>
</div>

{% comment %} Bottom CTA Section {% endcomment %}
<div class="edition-cta">
  <h2>Why choose the Flagship Edition?</h2>
  <ul>
    <li>Refined design for daily elegance</li>
    <li>Ships fast – perfect for last-minute gifts</li>
    <li>Low-maintenance, long-lasting presence</li>
  </ul>
</div>
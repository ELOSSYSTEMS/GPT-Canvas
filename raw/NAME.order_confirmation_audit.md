{% comment %} Refactored Shopify order confirmation template — duplicate logic removed, edition logic centralized {% endcomment %}

{% assign preserved_tags = 'Seasonal Edition,Devotion Edition,Art Edition,Bespoke Bouquet' | split: ',' %}
{% assign all_tags = order.line_items | map: 'product' | map: 'tags' | join: ',' %}
{% assign has_flagship = all_tags contains 'Flagship Edition' %}
{% assign has_preserved = false %}
{% for tag in preserved_tags %}
  {% if all_tags contains tag %}
    {% assign has_preserved = true %}
  {% endif %}
{% endfor %}

{% capture email_title %}
  {% if has_flagship and has_preserved %}
    Your order is confirmed — multiple bouquets, one refined delivery
  {% elsif has_flagship and not has_preserved %}
    Your floral experience begins now
  {% elsif has_preserved and not has_flagship %}
    Your bouquet is entering its preservation process
  {% else %}
    Your order is confirmed
  {% endif %}
{% endcapture %}

{% capture email_body %}
  {% if has_flagship and has_preserved %}
    Your order includes both flagship and special-edition bouquets.  
    While some are available for immediate composition, others require time for careful preservation.  
    All bouquets will be delivered together, once every element is complete.  
    We’ll update you as soon as the final bouquet enters its design phase.
  {% elsif has_flagship and not has_preserved %}
    We’ve received your order and it’s now being composed by hand in our Tel Aviv studio.  
    Each stem is drawn from our curated botanical inventory and placed with care — no automation, no shortcuts.  
    Your bouquet is scheduled for completion within 24–48 hours. You’ll receive another update once it is handed to our delivery specialist.
  {% elsif has_preserved and not has_flagship %}
    We’ve received your order and have begun the preservation phase — a meticulous drying and preparation process designed to extend the life and beauty of your blooms.  
    This stage typically takes 7 to 10 business days, depending on the edition.  
    You’ll be updated again when your bouquet enters the design phase.
  {% else %}
    {% comment %} This block should not render under normal conditions. Add alert logic here if needed. {% endcomment %}
    Thank you — your order has been received and is now in process.
  {% endif %}
{% endcapture %}

<!-- All other layout, subtotal, and summary logic remains unchanged for audit clarity -->
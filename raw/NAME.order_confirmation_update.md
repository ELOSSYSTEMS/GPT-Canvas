{% comment %}
  Segment product tags into two categories:
  - Flagship Edition (2-day delivery)
  - Preservation-based Editions (7–21 day delivery)
{% endcomment %}

{% assign preserved_tags = 'Seasonal Edition,Devotion Edition,Art Edition,Bespoke Bouquet' | split: ',' %}
{% assign all_tags_raw = order.line_items | map: 'product' | map: 'tags' | join: ',' %}
{% assign all_tags = all_tags_raw | split: ',' | uniq %}

{% assign has_flagship = all_tags contains 'Flagship Edition' %}
{% assign has_preserved = false %}

{% for tag in preserved_tags %}
  {% if all_tags contains tag %}
    {% assign has_preserved = true %}
  {% endif %}
{% endfor %}

{% capture email_title %}
  {% if has_flagship and has_preserved %}
    Order {{ name }} confirmed — multiple bouquets, one refined delivery
  {% elsif has_flagship and not has_preserved %}
    Order {{ name }} confirmed — your floral experience begins now
  {% elsif has_preserved and not has_flagship %}
    Order {{ name }} confirmed — preservation process initiated
  {% else %}
    Order {{ name }} confirmed
  {% endif %}
{% endcapture %}

{% capture email_body %}
  {% if has_flagship and has_preserved %}
    Your order includes both flagship and preservation-based bouquets.  
    While some are available for immediate composition, others require time for meticulous drying and treatment.  
    All bouquets will be delivered together — once every element is complete.  
    You will be updated as soon as the final bouquet enters the design phase.

  {% elsif has_flagship and not has_preserved %}
    We’ve received your order and it is now being composed by hand in our Tel Aviv studio.  
    Each stem is selected from our curated inventory and arranged with care — no automation, no shortcuts.  
    Your bouquet is scheduled for completion within 24–48 hours.  
    You will receive an update once it is transferred to our delivery specialist.

  {% elsif has_preserved and not has_flagship %}
    We’ve received your order and have initiated the preservation phase —  
    a detailed process of drying and treatment to extend the life and aesthetic of your flowers.  
    This phase typically takes 7 to 10 business days, depending on the edition.  
    You will receive another update once your bouquet enters the design stage.

  {% else %}
    {% comment %} Fallback: in case of an untagged product or logic failure {% endcomment %}
    Thank you — your order has been received and is now in process.
  {% endif %}
{% endcapture %}
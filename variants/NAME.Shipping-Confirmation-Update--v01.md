{% comment %}
  Shipping Confirmation Template — Forever Flowers
  Sent when an order is marked as fulfilled
  Logic respects product tag segmentation:
  - Flagship Edition (immediate delivery)
  - Preservation Editions (longer lead time)
{% endcomment %}

{% assign preserved_tags = 'Seasonal Edition,Devotion Edition,Art Edition,Bespoke Bouquet' | split: ',' %}
{% assign all_tags_raw = fulfillment.line_items | map: 'product' | map: 'tags' | join: ',' %}
{% assign all_tags = all_tags_raw | split: ',' | uniq %}

{% assign has_flagship = all_tags contains 'Flagship Edition' %}
{% assign has_preserved = false %}
{% for tag in preserved_tags %}
  {% if all_tags contains tag %}
    {% assign has_preserved = true %}
  {% endif %}
{% endfor %}

{% capture email_title %}
  {% if has_flagship == true and has_preserved == true %}
    Your bouquets are on their way — final stage complete
  {% elsif has_flagship == true and has_preserved == false %}
    Your bouquet has shipped — it will arrive shortly
  {% elsif has_preserved == true and has_flagship == false %}
    Your preserved bouquet has shipped
  {% else %}
    Your order is on its way
  {% endif %}
{% endcapture %}

{% capture email_body %}
  {% if has_flagship == true and has_preserved == true %}
    Your order, including both flagship and preserved bouquets, has completed its design and assembly phase.  
    All items have now been transferred to our delivery specialist and are en route to their destination.

  {% elsif has_flagship == true and has_preserved == false %}
    Your flagship bouquet is complete and on its way.  
    Designed by hand in our Tel Aviv studio and composed to order, it is now with our delivery specialist and will arrive shortly.

  {% elsif has_preserved == true and has_flagship == false %}
    Your preserved bouquet has exited the final design stage and has now been dispatched.  
    Thank you for your patience — we trust the result will speak for itself.

  {% else %}
    Thank you — your order has shipped.
  {% endif %}
{% endcapture %}
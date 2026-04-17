{% comment %}
  Section: Collection by Tag Filter
  Description: Custom collection section that filters products by tag (defined in Theme Editor)
{% endcomment %}

{% if collection and collection.products_count > 0 %}
  {% assign tag_filter = section.settings.tag | downcase %}
  {% assign filtered_products = collection.products | where: "tags", tag_filter %}

  {% if filtered_products.size > 0 %}
    <div class="filtered-collection">
      <div class="grid grid--uniform">
        {% for product in filtered_products %}
          <div class="grid__item">
            {% render 'product-card', product: product %}
          </div>
        {% endfor %}
      </div>
    </div>
  {% else %}
    <p>{{ 'collections.general.no_matches' | t }}</p>
  {% endif %}

{% else %}
  <p>{{ 'collections.general.no_matches' | t }}</p>
{% endif %}

{% schema %}
{
  "name": "Collection – Filtered by Tag",
  "tag": "section",
  "class": "section-filtered-collection",
  "settings": [
    {
      "type": "text",
      "id": "tag",
      "label": "Filter by tag",
      "default": "Flagship Edition"
    }
  ],
  "presets": [
    {
      "name": "Collection – Filtered by Tag",
      "category": "Collection"
    }
  ]
}
{% endschema %}
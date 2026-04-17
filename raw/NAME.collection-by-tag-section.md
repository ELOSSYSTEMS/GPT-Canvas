{% comment %}
  Section: Collection by Tag
  Purpose: Clone of main-collection.liquid with one filter — only show products that contain a specific tag.
  Usage: Add to custom template, then select tag in Theme Editor.
{% endcomment %}

{% liquid
  assign tag_filter = section.settings.tag_filter
  assign filtered_products = collection.products | where: "tags", tag_filter

  assign active_values_count = 0
  for filter in collection.filters
    if filter.type == 'price_range'
      if filter.max_value.value != blank or filter.min_value.value != blank
        assign active_values_count = active_values_count | plus: 1
      endif
    else
      assign active_values_count = active_values_count | plus: filter.active_values.size
    endif
  endfor
  assign show_filters = section.settings.show_filters and collection.filters.size > 0
%}

<div class="color-scheme color-scheme--{{ section.settings.color_scheme.id }}">
  <div class="container">
    <div class="v-stack gap-6 sm:gap-12">
      {% if filtered_products.size == 0 %}
        <div class="empty-state">
          <div class="prose">
            <h1 class="h4">{{ collection.title }}</h1>
            <p>{{ 'collection.general.empty_collection' | t }}</p>
            {% assign button_content = 'collection.general.continue_shopping' | t %}
            {% render 'button', href: routes.all_products_collection_url, size: 'xl', content: button_content %}
          </div>
        </div>
      {% else %}
        <div class="collection__main">
          <product-list class="product-list">
            {% for product in filtered_products %}
              {% render 'product-card', product: product, reveal: settings.stagger_products_apparition, position: forloop.index, hide_product_information: section.settings.hide_product_information, stacked: true %}
            {% endfor %}
          </product-list>
        </div>
      {% endif %}
    </div>
  </div>
</div>

{% schema %}
{
  "name": "Filtered Collection by Tag",
  "tag": "section",
  "settings": [
    {
      "type": "text",
      "id": "tag_filter",
      "label": "Product tag to filter by",
      "default": "Flagship Edition"
    },
    {
      "type": "checkbox",
      "id": "hide_product_information",
      "label": "Hide product information",
      "default": false
    },
    {
      "type": "checkbox",
      "id": "show_filters",
      "label": "Enable sidebar filters (optional, ignored if disabled globally)",
      "default": false
    },
    {
      "type": "color_scheme",
      "id": "color_scheme",
      "label": "Color Scheme",
      "default": "scheme-1"
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
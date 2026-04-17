{% comment %}
  Discount Bar – Prestige-native sticky section with announcement bar styling
{% endcomment %}

{% if section.settings.enabled %}
  {%- liquid
    assign show_bar = true
    unless section.settings.show_to_logged_in
      if customer
        assign show_bar = false
      endif
    endunless
  -%}
  {% if show_bar %}
    <div class="announcement-bar discount-bar color-scheme color-scheme--{{ section.settings.color_scheme }}"
         data-code="{{ section.settings.discount_code | escape }}"
         data-autoredirect="{{ section.settings.auto_redirect }}">
      <div class="page-width text-center">
        <p class="prose heading announcement-bar__message">
          {{ section.settings.message_text }}
          <span class="discount-bar__label">{{ section.settings.button_label }}</span>
          <strong class="discount-bar__code">{{ section.settings.discount_code }}</strong>
          {% if section.settings.secondary_button_text and section.settings.secondary_button_link %}
            <a class="discount-bar__link-button" href="{{ section.settings.secondary_button_link }}">
              {{ section.settings.secondary_button_text }}
            </a>
          {% endif %}
        </p>
      </div>
    </div>
  {% endif %}
{% endif %}

<style>
  :root {
    --discount-bar-is-sticky: {% if section.settings.enable_sticky %}1{% else %}0{% endif %};
  }

  {%- if section.settings.enable_sticky -%}
    #shopify-section-{{ section.id }} {
      position: sticky;
      top: 0;
      z-index: 5;
    }

    .shopify-section--header ~ #shopify-section-{{ section.id }} {
      top: calc(var(--header-is-sticky, 0) * var(--header-height, 0px));
      z-index: 4;
    }
  {%- endif -%}

  #shopify-section-{{ section.id }} {
    --announcement-bar-font-size: {{ section.settings.mobile_font_size | divided_by: 16.0 }}rem;
  }

  @media screen and (min-width: 999px) {
    #shopify-section-{{ section.id }} {
      --announcement-bar-font-size: {{ section.settings.desktop_font_size | divided_by: 16.0 }}rem;
    }
  }

  .discount-bar__label {
    margin-left: 12px;
    font-weight: 500;
  }

  .discount-bar__code {
    font-weight: 600;
    margin-left: 6px;
  }

  .discount-bar__link-button {
    display: inline-block;
    margin-left: 12px;
    padding: 4px 10px;
    font-size: inherit;
    border: 1px solid currentColor;
    text-decoration: none;
    transition: opacity 0.25s ease;
  }

  .discount-bar__link-button:hover {
    opacity: 0.7;
  }
</style>

{% javascript %}
// No JS needed since this is static markup now
{% endjavascript %}

{% schema %}
{
  "name": "Discount bar",
  "class": "shopify-section--discount-bar",
  "settings": [
    {
      "type": "checkbox",
      "id": "enabled",
      "label": "Enable discount bar",
      "default": true
    },
    {
      "type": "select",
      "id": "color_scheme",
      "label": "Color scheme",
      "options": [
        { "value": "scheme-1", "label": "Scheme 1" },
        { "value": "scheme-2", "label": "Scheme 2" },
        { "value": "scheme-3", "label": "Scheme 3" },
        { "value": "scheme-4", "label": "Scheme 4" },
        { "value": "scheme-5", "label": "Scheme 5" }
      ],
      "default": "scheme-4"
    },
    {
      "type": "checkbox",
      "id": "enable_sticky",
      "label": "Enable sticky bar",
      "default": false
    },
    {
      "type": "range",
      "id": "desktop_font_size",
      "min": 9,
      "max": 15,
      "unit": "px",
      "label": "Desktop text size",
      "default": 11
    },
    {
      "type": "range",
      "id": "mobile_font_size",
      "min": 9,
      "max": 15,
      "unit": "px",
      "label": "Mobile text size",
      "default": 10
    },
    {
      "type": "text",
      "id": "message_text",
      "label": "Message text",
      "default": "Welcome to Forever Flowers — Enjoy 15% off your first order"
    },
    {
      "type": "text",
      "id": "button_label",
      "label": "Coupon label text",
      "default": "Coupon code:"
    },
    {
      "type": "text",
      "id": "discount_code",
      "label": "Discount code",
      "default": "FOREVER15"
    },
    {
      "type": "text",
      "id": "secondary_button_text",
      "label": "Secondary button text",
      "default": "Apply Now"
    },
    {
      "type": "url",
      "id": "secondary_button_link",
      "label": "Secondary button link"
    },
    {
      "type": "checkbox",
      "id": "auto_redirect",
      "label": "Auto-redirect after reveal",
      "default": true
    },
    {
      "type": "checkbox",
      "id": "show_to_logged_in",
      "label": "Show to logged-in customers",
      "default": false
    }
  ],
  "presets": [
    {
      "name": "Discount bar"
    }
  ]
}
{% endschema %}
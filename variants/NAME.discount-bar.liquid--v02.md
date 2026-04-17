{% comment %}
  Discount Bar – sits directly under the native Prestige announcement bar.
  Purpose: show a welcome message + 15 % code for first-time visitors in a refined, non-intrusive banner.
  All copy, behaviour, and visibility rules are controlled in Theme Editor.
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
  <div class="custom-discount-bar" 
       data-code="{{ section.settings.discount_code | escape }}"
       data-autoredirect="{{ section.settings.auto_redirect }}">
    <div class="page-width text-center">
      <span class="discount-bar__message">{{ section.settings.message_text }}</span>
      <button type="button" class="discount-bar__button">{{ section.settings.button_label }}</button>
      <span class="discount-bar__code" style="display:none;">{{ section.settings.discount_code }}</span>
    </div>
  </div>
  {% endif %}
{% endif %}

{% stylesheet %}
.custom-discount-bar {
  background-color: #f5f5f3;
  border-bottom: 1px solid #e0e0e0;
  padding: 8px 0;
  font-family: var(--font-body-family);
  font-size: 14px;
  line-height: 1.4;
}
.discount-bar__button {
  margin-left: 12px;
  padding: 4px 12px;
  background: transparent;
  border: 1px solid currentColor;
  font-size: 13px;
  letter-spacing: 0.02em;
  cursor: pointer;
  transition: opacity .25s ease;
}
.discount-bar__button:hover { opacity: 0.7; }
.discount-bar__code {
  font-weight: 600;
  margin-left: 8px;
}
{% endstylesheet %}

{% javascript %}
(function() {
  var bar = document.querySelector('.custom-discount-bar');
  if (!bar) return;

  var btn = bar.querySelector('.discount-bar__button');
  var codeEl = bar.querySelector('.discount-bar__code');
  if (!btn || !codeEl) return;

  btn.addEventListener('click', function() {
    codeEl.style.display = 'inline';

    var code = bar.dataset.code;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(code);
    }

    if (bar.dataset.autoredirect === 'true') {
      var redirectUrl = '/discount/' + encodeURIComponent(code);
      window.location.href = redirectUrl;
    }
  });
})();
{% endjavascript %}

{% schema %}
{
  "name": "Discount bar",
  "class": "section-discount-bar",
  "settings": [
    {
      "type": "checkbox",
      "id": "enabled",
      "label": "Enable discount bar",
      "default": true
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
      "label": "Button label",
      "default": "Reveal code"
    },
    {
      "type": "text",
      "id": "discount_code",
      "label": "Discount code",
      "default": "FOREVER15"
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
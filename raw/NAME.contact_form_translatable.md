{%- assign color_scheme_hash = section.settings.color_scheme.settings.background_gradient | default: section.settings.color_scheme.settings.background | md5 -%}

<div class="section-spacing color-scheme color-scheme--{{ section.settings.color_scheme.id }} color-scheme--bg-{{ color_scheme_hash }} {% if section.settings.separate_section_with_border %}bordered-section{% endif %}">
  <div class="container container--xs">
    <div class="section-stack text-center">
      {%- render 'section-header',
          subheading: section.settings.subheading,
          heading: section.settings.title,
          content: section.settings.content,
          text_alignment: 'center' -%}

      {%- form 'contact', class: 'form contact-form' -%}
        {%- if form.posted_successfully? -%}
          {%- assign content = 'contact.form.success_message' | t -%}
          {%- render 'banner', status: 'success', content: content -%}
        {%- endif -%}

        {%- if form.errors -%}
          {%- capture content -%}{{ form.errors.translated_fields[form.errors.first] | capitalize }} {{ form.errors.messages[form.errors.first] }}{%- endcapture -%}
          {%- render 'banner', status: 'error', content: content -%}
        {%- endif -%}

        <div class="fieldset">
          <div class="fieldset-row">
            {%- assign label = 'contact.label_name' | t -%}
            {%- render 'input',
                type: 'text',
                name: 'contact[name]',
                label: label,
                required: true,
                autocomplete: 'name' -%}

            {%- assign label = 'contact.label_email' | t -%}
            {%- render 'input',
                type: 'email',
                name: 'contact[email]',
                label: label,
                required: true,
                autocomplete: 'email' -%}
          </div>

          <div class="fieldset-row">
            {%- assign label = 'contact.label_phone' | t -%}
            {%- render 'input',
                type: 'tel',
                name: 'contact[Phone Number]',
                label: label,
                autocomplete: 'tel' -%}

            {%- assign label = 'contact.label_reason' | t -%}
            {%- assign contact_reasons = 'General inquiry|Order status|Collaboration|Custom bouquet|Other' | split: '|' -%}
            {%- render 'select',
                name: 'contact[Reason for Contact]',
                label: label,
                option_values: contact_reasons,
                show_empty_value: true,
                required: true -%}
          </div>

          {%- assign label = 'contact.label_message' | t -%}
          {%- render 'input',
              name: 'contact[body]',
              label: label,
              multiline: 4,
              required: true -%}
        </div>

        {%- assign button_content = 'contact.label_submit' | t -%}
        {%- render 'button', content: button_content, type: 'submit' -%}

        {% if request.locale.iso_code == 'he' %}
          <p><strong>טלפון:</strong> <a href="tel:+97236957860">03-6957860</a></p>
          <p><strong>ווטסאפ:</strong> <a href="https://wa.me/97236957860" target="_blank">שלחו לנו הודעה</a></p>
          <div class="contact-email">או שלחו מייל ישירות ל‏<a href="mailto:info@foreverflowers.co.il">info@foreverflowers.co.il</a></div>
        {% else %}
          <p><strong>Phone:</strong> <a href="tel:+97236957860">03-6957860</a></p>
          <p><strong>WhatsApp:</strong> <a href="https://wa.me/97236957860" target="_blank">Send us a message</a></p>
          <div class="contact-email">Or email us directly at <a href="mailto:info@foreverflowers.co.il">info@foreverflowers.co.il</a></div>
        {% endif %}
      {%- endform -%}
    </div>
  </div>
</div>

{% schema %}
{
  "name": "Contact Form",
  "tag": "section",
  "class": "shopify-section--contact",
  "settings": [
    {
      "type": "inline_richtext",
      "id": "subheading",
      "label": "Subheading",
      "default": "Let's talk"
    },
    {
      "type": "inline_richtext",
      "id": "title",
      "label": "Heading",
      "default": "Contact Us"
    },
    {
      "type": "richtext",
      "id": "content",
      "label": "Supporting Content",
      "default": "<p>Questions? Requests? Drop us a message and we'll respond as soon as possible.</p>"
    },
    {
      "type": "color_scheme",
      "id": "color_scheme",
      "label": "Color Scheme",
      "default": "scheme-1"
    },
    {
      "type": "text",
      "id": "contact_reasons",
      "label": "Dropdown Options – Reason for Contact",
      "default": "General inquiry|Order status|Collaboration|Custom bouquet|Other",
      "info": "Separate values with a vertical bar (|)"
    },
    {
      "type": "checkbox",
      "id": "separate_section_with_border",
      "label": "Add border below section",
      "default": true
    }
  ],
  "presets": [
    {
      "name": "Contact"
    }
  ]
}
{% endschema %}
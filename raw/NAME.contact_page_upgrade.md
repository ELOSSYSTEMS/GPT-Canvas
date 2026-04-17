{%- assign color_scheme_hash = section.settings.color_scheme.settings.background_gradient | default: section.settings.color_scheme.settings.background | md5 -%}

<div class="section-spacing color-scheme color-scheme--{{ section.settings.color_scheme.id }} color-scheme--bg-{{ color_scheme_hash }} {% if section.settings.separate_section_with_border %}bordered-section{% endif %}">
  <div class="container container--xs">
    <div class="section-stack text-center">
      {%- render 'section-header', subheading: section.settings.subheading, heading: section.settings.title, content: section.settings.content, text_alignment: 'center' -%}

      <div class="contact-details">
        <p><strong>Phone:</strong> <a href="tel:+97236957860">03-6957860</a></p>
        <p><strong>Email:</strong> <a href="mailto:hello@foreverflowers.co.il">hello@foreverflowers.co.il</a></p>
        <p><strong>WhatsApp:</strong> <a href="https://wa.me/97236957860" target="_blank">Send us a message</a></p>
        <p><strong>Address:</strong> Moshav Mazor, Israel</p>
      </div>

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
            {%- render 'input', type: 'text', name: 'contact[name]', label: 'Full Name', value: customer.name, required: true, autocomplete: 'name' -%}
            {%- render 'input', type: 'email', name: 'contact[email]', label: 'Email', value: customer.email, required: true, autocomplete: 'email' -%}
          </div>

          <div class="fieldset-row">
            {%- render 'input', type: 'tel', name: 'contact[phone]', label: 'Phone Number', required: false, autocomplete: 'tel' -%}
            {%- render 'select', name: 'contact[subject]', label: 'Reason for Contact', required: true, option_values: 'General inquiry, Order status, Collaboration, Custom bouquet, Other' | split: ', ' -%}
          </div>

          {%- render 'input', name: 'contact[body]', label: 'Message', multiline: 5, required: true -%}
        </div>

        {%- render 'button', content: 'Send Message', type: 'submit' -%}
      {%- endform -%}
    </div>
  </div>
</div>
{% comment %}
  Contact Us Section Template
  This Liquid file creates a contact us section for a Shopify theme.
{% endcomment %}

<section id="contact-us" class="contact-us-section">
  <div class="container">
    <div class="section-header">
      <h2>{{ 'contact_us.title' | t }}</h2>
      <p>{{ 'contact_us.description' | t }}</p>
    </div>

    <div class="contact-form-wrapper">
      <form method="post" action="/contact" class="contact-form">
        <div class="form-group">
          <label for="contact-name">{{ 'contact_us.name_label' | t }}</label>
          <input type="text" id="contact-name" name="contact[name]" placeholder="{{ 'contact_us.name_placeholder' | t }}" required>
        </div>

        <div class="form-group">
          <label for="contact-email">{{ 'contact_us.email_label' | t }}</label>
          <input type="email" id="contact-email" name="contact[email]" placeholder="{{ 'contact_us.email_placeholder' | t }}" required>
        </div>

        <div class="form-group">
          <label for="contact-phone">{{ 'contact_us.phone_label' | t }}</label>
          <input type="tel" id="contact-phone" name="contact[phone]" placeholder="{{ 'contact_us.phone_placeholder' | t }}">
        </div>

        <div class="form-group">
          <label for="contact-message">{{ 'contact_us.message_label' | t }}</label>
          <textarea id="contact-message" name="contact[body]" rows="5" placeholder="{{ 'contact_us.message_placeholder' | t }}" required></textarea>
        </div>

        <div class="form-group">
          <button type="submit" class="btn btn-primary">{{ 'contact_us.submit_button' | t }}</button>
        </div>
      </form>
    </div>

    <div class="contact-info">
      <h3>{{ 'contact_us.info_title' | t }}</h3>
      <p>{{ 'contact_us.address' | t }}</p>
      <p>{{ 'contact_us.phone' | t }}</p>
      <p>{{ 'contact_us.email' | t }}</p>
    </div>
  </div>
</section>

<style>
  #contact-us {
    padding: 50px 0;
    background-color: #f9f9f9;
  }
  .contact-us-section .section-header h2 {
    font-size: 32px;
    margin-bottom: 10px;
  }
  .contact-us-section .section-header p {
    font-size: 18px;
    color: #666;
  }
  .contact-form-wrapper {
    margin-top: 20px;
  }
  .form-group {
    margin-bottom: 15px;
  }
  .form-group label {
    display: block;
    margin-bottom: 5px;
  }
  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .form-group button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .contact-info h3 {
    margin-top: 30px;
    font-size: 24px;
  }
</style>
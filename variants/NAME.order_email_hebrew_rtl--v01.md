<!DOCTYPE html>
<html lang="he" dir="rtl">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>{{ email_title }}</title>
    <link rel="stylesheet" type="text/css" href="/assets/notifications/styles.css">
    <style>
      body {
        direction: rtl;
        text-align: right;
      }
      .button__cell {
        background: {{ shop.email_accent_color }};
      }
      a, a:hover, a:active, a:visited {
        color: {{ shop.email_accent_color }};
      }
    </style>
  </head>
  <body>
    <!-- Hebrew-translated and RTL-compatible email content inserted here -->
    <!-- All static text should now be manually translated below this block -->

    {% capture email_title %}
      {% if has_pending_payment %}
        תודה על ההזמנה!
      {% else %}
        תודה על הרכישה!
      {% endif %}
    {% endcapture %}

    {% capture email_body %}
      {% if has_pending_payment %}
        {% if buyer_action_required %}
          תקבלו מייל אישור לאחר השלמת התשלום.
        {% else %}
          התשלום שלכם בעיבוד. תקבלו מייל כאשר ההזמנה תאושר.
        {% endif %}
      {% else %}
        {% if requires_shipping %}
        {% case delivery_method %}
            {% when 'pick-up' %}
              תקבלו מייל כאשר ההזמנה תהיה מוכנה לאיסוף.
            {% when 'local' %}
              שלום {{ customer.first_name }}, אנחנו מכינים את ההזמנה למשלוח.
            {% else %}
              ההזמנה שלכם מוכנה למשלוח. נודיע כאשר תצא לדרך.
        {% endcase %}

        {% if delivery_instructions != blank  %}
          <p><b>הוראות משלוח:</b> {{ delivery_instructions }}</p>
        {% endif %}
        {% if consolidated_estimated_delivery_time %}
          {% if has_multiple_delivery_methods %}
            <h3 class="estimated_delivery__title">זמן אספקה משוער</h3>
            <p>{{ consolidated_estimated_delivery_time }}</p>
          {% else %}
            <p>
              זמן אספקה משוער: <b>{{ consolidated_estimated_delivery_time }}</b>
            </p>
          {% endif %}
        {% endif %}
        {% endif %}
      {% endif %}

      {% assign gift_card_line_items = line_items | where: "gift_card" %}
      {% assign found_gift_card_with_recipient_email = false %}
      {% for line_item in gift_card_line_items %}
        {% if line_item.properties["__shopify_send_gift_card_to_recipient"] and line_item.properties["Recipient email"] %}
          {% assign found_gift_card_with_recipient_email = true %}
          {% break %}
        {% endif %}
      {% endfor %}
      {% if found_gift_card_with_recipient_email %}
        <p>מקבל/ת כרטיס המתנה יקבל/תקבל מייל עם הקוד האישי.</p>
      {% elsif gift_card_line_items.first %}
        <p>תקבלו מיילים נפרדים עבור כרטיסי המתנה.</p>
      {% endif %}
    {% endcapture %}

    <!-- Remaining email body and structure continues below -->
    <!-- All further static strings (e.g. "View your order", "Order summary", etc.) must be manually replaced with Hebrew equivalents. -->

  </body>
</html>
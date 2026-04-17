{% if fulfillment.item_count == item_count %} 
  {% capture email_title %}ההזמנה שלך בדרך לשליחה{% endcapture %}
  {% capture email_body %}ההזמנה שלך בדרך לשליחה. אפשר/י את המשלוח לבדיקה עבר המשלוח.{% endcapture %}
{% elsif fulfillment.item_count > 1 %} 
  {% if fulfillment_status == 'fulfilled' %}
    {% capture email_title %}הפריטים האחרונים בהזמנה שלך בדרך לשליחה{% endcapture %}
    {% capture email_body %}הפריטים האחרונים בהזמנה שלך בדרך לשליחה. אפשר/י את המשלוח לבדיקה עבר המשלוח.{% endcapture %}
  {% else %}
    {% capture email_title %}חלק פריטים בהזמנה שלך בדרך לשליחה{% endcapture %}
    {% capture email_body %}חלק פריטים בהזמנה שלך בדרך לשליחה. אפשר/י את המשלוח לבדיקה עבר המשלוח.{% endcapture %}
  {% endif %}
{% else %} 
  {% if fulfillment_status == 'fulfilled' %}
    {% capture email_title %}הפריט האחרון בהזמנה שלך בדרך לשליחה{% endcapture %}
    {% capture email_body %}הפריט האחרון בהזמנה שלך בדרך לשליחה. אפשר/י את המשלוח לבדיקה עבר המשלוח.{% endcapture %}
  {% else %}
    {% capture email_title %}פריט אחד בהזמנה שלך בדרך לשליחה{% endcapture %}
    {% capture email_body %}פריט אחד בהזמנה שלך בדרך לשליחה. אפשר/י את המשלוח לבדיקה עבר המשלוח.{% endcapture %}
  {% endif %}
{% endif %}

{% capture email_emphasis %}תאריך משוער משוער: <strong>{{fulfillment.estimated_delivery_at | date: format: 'date'}}</strong>{% endcapture %}
**Forever Flowers Automation Map (Side Hustle Adaptation)**

---

### **Main Objectives**
1. Centralize task and order tracking across B2C and B2B (Arcaffe).
2. Automate repetitive actions (reminders, follow-ups, delivery schedules).
3. Enable delegation and clarity across roles (Allon/Shiran).
4. Improve visibility and insights for decisions (sales, feedback, ops).

---

### **System Layers & Tool Stack**

#### **1. Central Operations Hub**
- **Notion**: Weekly planner, bouquet production dashboard, SOPs
- **Baserow / NocoDB**: Product database (SKUs, flowers, vases, costs, photos)
- **Trello**: Simple kanban view for task management, e.g. "To Make / In Progress / Done"

#### **2. Automation & Logic Layer**
- **Make.com**:
  - Trigger WhatsApp reminders for unpaid invoices
  - Auto-update delivery calendar from Shopify orders
- **Shopify Flow**:
  - Auto-tag orders for delivery
  - Trigger feedback requests 10 days post-delivery
- **Pipedream**:
  - Calculate dynamic delivery dates
  - Run scripts for handling custom delivery logic (e.g. zone-based)

#### **3. Communication & CRM**
- **WhatsApp Business + Callbell / 360dialog**:
  - Central inbox for client messages
  - Templates for B2B follow-ups, bouquet readiness, etc.
- **Zoho TeamInbox**:
  - Shared customer service email platform
- **Bitrix24 CRM** (Free):
  - Track B2B leads (Arcaffe, hotels, events)
  - Forms intake, WhatsApp tracking

#### **4. Forms & Feedback**
- **Tally.so / Jotform**:
  - B2B bouquet request forms
  - Feedback forms for סט רענון
- **Google Forms**:
  - Internal tracking (bouquet production checklist, delivery notes)

#### **5. Marketing + Content**
- **Canva Pro**:
  - Instagram/Facebook post design
  - Packaging and label templates
- **Publer or Later.com**:
  - Schedule posts + plan content calendar
- **Looker Studio (Google)**:
  - Visual analytics dashboard (connect to Shopify, GA)

#### **6. Financial + Inventory**
- **Google Sheets**:
  - Track bouquet profitability per order
  - Inventory count per SKU (flowers, vases)
- **Alerts via Make.com**:
  - Notify on low stock
  - Auto-create restock task in Trello or Notion

---

### **Flowchart Overview**

**Customer Order (Shopify)**
 ↓  
**Shopify Flow Tags Order + Sends to Delivery Board (Notion / Google Calendar)**
 ↓
**Make.com Checks Delivery Zone + Sends Reminders + Tracks Inventory**
 ↓
**After 10 Business Days → Jotform Feedback Request Sent**
 ↓
**Feedback Collected → Added to CRM (Bitrix24) for Loyalty Offer (סט רענון)**

---

Let me know if you want a visual PDF/Notion version of this map or if we should start building from one branch (e.g. Arcaffe ops or feedback automation).
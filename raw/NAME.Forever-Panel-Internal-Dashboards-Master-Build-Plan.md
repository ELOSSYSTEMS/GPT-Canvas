# Forever Panel – Internal Dashboards System (FP-IDS)

## Status
Draft v1.0
Owner: Allon
Scope: Private internal dashboards for Forever Flowers
Environment: Antigravity IDE

---

## 1. Objective

Build a private, modular, internal dashboard system for Forever Flowers that consolidates:
- Sales
- Operations
- Marketing
- Finance
- Support
- Executive Overview

Into a single internal web app with controlled access and consistent metrics.

Primary Goal: Decision clarity, operational control, and financial visibility.

---

## 2. System Philosophy

1. Truth > Beauty
2. One Metric = One Definition
3. Read-Only First, Actions Later
4. Fail-Closed on Uncertain Data
5. Modular by Default

---

## 3. Scope Levels

### Tier A – Manual + CSV (Phase 1)
- Manual inputs
- CSV imports
- Static KPIs
- No external APIs

### Tier B – Automated Sync (Phase 2)
- Shopify API
- Meta Ads API
- Scheduled ingestion
- Normalization layer

### Tier C – Operational Control (Phase 3)
- Task triggers
- Exception handling
- Workflow actions
- Audit logs

---

## 4. Module Map

| Module | Code | Purpose |
|--------|------|---------|
| Sales | FP.SLS | Revenue + Pipeline |
| Operations | FP.OPS | Systems + Fulfillment |
| Marketing | FP.MKT | Acquisition + Ads |
| Finance | FP.FIN | Profit + Cashflow |
| Support | FP.SUP | CX + Tickets |
| Executive | FP.EXE | Strategy + KPIs |

---

## 5. Core Data Sources

### Phase 1
- Shopify CSV Export
- Meta CSV Export
- Bank CSV
- Manual Inputs

### Phase 2
- Shopify Admin API
- Meta Marketing API
- Google Analytics 4
- Helpdesk API

---

## 6. Canonical KPI Registry

All KPIs must be defined here before implementation.

### Sales
- Gross Revenue = Sum(order_total - refunds)
- Net Revenue = Gross - Discounts - Refunds
- AOV = Net Revenue / Orders
- Conversion Rate = Orders / Sessions

### Marketing
- CAC = Ad Spend / New Customers
- ROAS = Revenue / Ad Spend
- CTR = Clicks / Impressions

### Finance
- Gross Margin = (Revenue - COGS) / Revenue
- Contribution Margin = Revenue - Variable Costs
- Burn Rate = Monthly Fixed Costs

### Support
- Avg Response Time
- Resolution Rate
- Ticket Recurrence %

---

## 7. Data Architecture

### Ingestion Layer
- CSV Parser
- API Connectors
- Validation Rules

### Normalization Layer
- Unified Order Model
- Unified Customer Model
- Unified Campaign Model

### Storage Layer
- PostgreSQL (Primary)
- S3-Compatible Backup

### Analytics Layer
- Aggregation Engine
- KPI Calculator
- Forecast Module

---

## 8. Database Core Models

### Order
- id
- shopify_id
- customer_id
- gross_amount
- net_amount
- tax
- shipping
- discount
- refund_amount
- created_at

### Customer
- id
- email
- lifetime_value
- first_order
- last_order

### Campaign
- id
- platform
- spend
- clicks
- conversions
- revenue

### Ticket
- id
- category
- priority
- status
- opened_at
- closed_at

---

## 9. Frontend Architecture

Framework: Next.js (App Router)
Styling: Tailwind
Charts: Recharts / ECharts
Auth: Clerk / Auth.js (single-user initially)

Pages:
- /dashboard/sales
- /dashboard/ops
- /dashboard/marketing
- /dashboard/finance
- /dashboard/support
- /dashboard/executive

---

## 10. UI Layout Standard

Each dashboard must follow:

1. KPI Strip (Top)
2. Trend Zone (Middle)
3. Detail Zone (Bottom)

No deviations without approval.

---

## 11. Security Model

Phase 1:
- Single-owner login
- IP-restricted admin

Phase 2:
- Role-based access
- Read vs Action separation

All writes logged.

---

## 12. Sync & Scheduling

Phase 1: Manual Upload
Phase 2:
- Hourly Shopify Sync
- Daily Meta Sync
- Nightly Reconciliation

Retry Policy: Exponential backoff

---

## 13. Validation & Reconciliation

Every metric must pass:

1. Source match
2. Cross-source match
3. Historical trend sanity

If mismatch >3% → Flag

---

## 14. Roadmap

### Phase 1 – Foundation (4–6 weeks)
- UI
- CSV ingestion
- KPI engine

### Phase 2 – Automation (6–10 weeks)
- APIs
- Sync
- Attribution

### Phase 3 – Control (Ongoing)
- Ops actions
- Workflow engine
- Notifications

---

## 15. Development Rules

1. No silent schema changes
2. All KPIs versioned
3. All migrations reversible
4. Feature flags mandatory
5. Staging before prod

---

## 16. Audit & Governance

Quarterly review:
- Metric validity
- Data drift
- UX friction
- Security gaps

All changes logged in /docs/change-log.md

---

## 17. Success Criteria

Phase 1 Complete When:
- All 6 dashboards live
- CSV imports stable
- KPI registry enforced

Phase 2 Complete When:
- Auto-sync stable
- <2% reconciliation drift

---

## 18. Open Decisions

- Attribution model
- Accounting integration
- Support platform
- Forecast methodology

Must be resolved before Phase 2.

---

## Appendix A – Repo Structure

/apps/dashboard
  /frontend
  /backend
  /workers
  /migrations
/docs
  /kpi-registry.md
  /data-model.md
  /change-log.md

---

## Appendix B – Naming Convention

FP-IDS = Forever Panel Internal Dashboard System
FP.[MODULE].[SUBSYSTEM]

Example: FP.FIN.RECON

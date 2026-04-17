# Forever Panel – Internal Dashboards
## Implementation Playbook (FP-IDS-IMP)

Version: v1.0
Status: Active Build Spec
Owner: Allon
Environment: Antigravity IDE

---

## 1. Purpose

This document translates the FP-IDS Master Plan into concrete, executable implementation steps.

Goal: Enable phased, low-risk development of internal dashboards with verifiable data accuracy.

---

## 2. Build Strategy

### Guiding Principles

1. Build reporting before automation
2. Lock schemas before UI polish
3. Verify numbers before adding features
4. Fail closed on missing data
5. Ship in vertical slices

---

## 3. Phase Breakdown

| Phase | Name | Objective | Exit Criteria |
|-------|------|-----------|---------------|
| P0 | Foundation | Repo + Infra | App boots, auth works |
| P1 | Reporting | Dashboards + CSV | KPIs correct |
| P2 | Sync | API ingestion | <2% drift |
| P3 | Control | Workflows | Safe ops |

---

## 4. Phase 0 – Foundation Setup

### 4.1 Repository Structure

/apps/fp-ids
  /frontend
  /backend
  /workers
  /db
  /docs

---

### 4.2 Stack Selection

Frontend: Next.js 14 (App Router)
Backend: Node.js (API routes)
DB: PostgreSQL
ORM: Prisma
Queue: BullMQ / Redis
Hosting: Vercel + Railway/Supabase

---

### 4.3 Authentication

Phase 0:
- Auth.js
- Single-owner account
- Email magic link

Phase 1+:
- RBAC roles

---

## 5. Phase 1 – Reporting Layer (Tier A)

### 5.1 CSV Ingestion System

Supported Inputs:
- Shopify Orders Export
- Meta Spend Export
- Bank Statements
- Support Tickets

Pipeline:
Upload → Validate → Parse → Normalize → Store

---

### 5.2 CSV Validation Rules

| Field | Rule |
|-------|------|
| Date | ISO-8601 |
| Amount | Numeric |
| Currency | ILS/USD |
| Order ID | Unique |
| Email | RFC5322 |

Invalid rows → quarantine table

---

### 5.3 Normalization Engine

Create unified schemas:

Orders_Normalized
Customers_Normalized
Campaigns_Normalized
Transactions_Normalized
Tickets_Normalized

All dashboards read only from normalized tables.

---

### 5.4 KPI Computation Engine

Location:
/backend/kpi-engine

Functions:
- computeRevenue()
- computeProfit()
- computeCAC()
- computeROAS()
- computeLTV()
- computeAOV()

All functions:
- Pure
- Versioned
- Tested

---

### 5.5 Dashboard Pages

Route Map:

/dashboard/sales
/dashboard/ops
/dashboard/marketing
/dashboard/finance
/dashboard/support
/dashboard/executive

Each page:
- KPI Strip
- Trend Charts
- Detail Table

---

## 6. Phase 2 – Automated Sync (Tier B)

### 6.1 Shopify Integration

API: Admin REST + GraphQL
Scopes: read_orders, read_customers, read_products

Sync Jobs:
- Orders (hourly)
- Refunds (hourly)
- Products (daily)

---

### 6.2 Meta Ads Integration

API: Marketing API
Permissions: ads_read, business_management

Sync:
- Spend (daily)
- Campaigns (daily)
- Conversions (daily)

---

### 6.3 GA4 Integration

Method: Data API
Scope: read_only

Metrics:
- Sessions
- Source/Medium
- Conversions

---

### 6.4 Scheduler

System: BullMQ
Jobs:
- shopify_sync
- meta_sync
- ga_sync
- reconcile_nightly

All jobs:
- Idempotent
- Retriable
- Logged

---

## 7. Phase 3 – Control Layer (Tier C)

### 7.1 Action Engine

Supported Actions:
- Flag order
- Trigger refund
- Assign delivery
- Create task
- Send WhatsApp

All actions require:
- Double confirmation
- Audit record
- Rollback plan

---

### 7.2 Workflow System

Model: State Machine

States:
New → Processing → Exception → Resolved → Closed

Config stored in DB.

---

## 8. Data Integrity Framework

### 8.1 Reconciliation Engine

Nightly job:
Compare:
- Shopify vs DB
- Meta vs Revenue
- Bank vs Orders

Tolerance: ±2%

---

### 8.2 Drift Detection

If drift >2%:
- Freeze metrics
- Alert admin
- Open incident

---

## 9. Frontend Implementation Standards

### 9.1 Component Library

/ui
  KPIBlock.tsx
  TrendChart.tsx
  DataTable.tsx
  FilterBar.tsx
  ExportButton.tsx

---

### 9.2 Chart Standards

Library: Recharts

Rules:
- No stacked distortion
- Baselines visible
- Units labeled

---

### 9.3 Performance

Targets:
- TTFB < 500ms
- LCP < 2.5s
- CSR < 30%

---

## 10. Security Implementation

### 10.1 Secrets Management

- Vercel Env
- Railway Vault
- Rotated quarterly

---

### 10.2 Access Control

RBAC:
- Owner
- Manager
- Viewer

Row-level filtering enabled.

---

## 11. Testing Framework

### 11.1 Unit Tests

Target: KPI + parsers
Tool: Vitest
Coverage: >80%

---

### 11.2 Integration Tests

Test:
- CSV pipelines
- API sync
- Reconciliation

---

## 12. Deployment Pipeline

### 12.1 Environments

- Local
- Staging
- Production

---

### 12.2 CI/CD

Tool: GitHub Actions

Stages:
Lint → Test → Build → Migrate → Deploy

---

## 13. Observability

Logging: Pino
Metrics: Prometheus
Errors: Sentry

---

## 14. Migration Strategy

All schema changes:
- Versioned
- Reversible
- Tested on staging

---

## 15. Documentation Policy

All modules must have:
- README
- API spec
- Data lineage map

---

## 16. Delivery Timeline (Realistic)

| Phase | Duration |
|-------|----------|
| P0 | 1 week |
| P1 | 4–6 weeks |
| P2 | 6–8 weeks |
| P3 | Ongoing |

---

## 17. Risk Register

| Risk | Impact | Mitigation |
|------|--------|------------|
| API Changes | High | Abstraction layer |
| Data Drift | High | Reconciliation |
| Scope Creep | Medium | Phase gates |
| Burnout | Medium | Freeze windows |

---

## 18. Definition of Done

Phase 1 DoD:
- All dashboards live
- CSV stable
- KPIs audited

Phase 2 DoD:
- Sync reliable
- Drift <2%

Phase 3 DoD:
- Actions safe
- No critical incidents 30d

---

## 19. Appendices

### A. Key Folders

/backend/sync
/backend/reconcile
/backend/kpi
/frontend/dashboard
/frontend/components

### B. Naming

fp_ids_*
fp_kpi_*
fp_sync_*

---

## 20. Change Control

All changes require:
- Impact analysis
- Version bump
- Changelog entry

/docs/change-log.md

# ELoS Extension Prompt Perfector – Master Implementation Playbook v2

---

## Phase 0 – Foundations

### Canonical Specification
- Adopt **Gold Standard EPP-2 Spec v1.0** (no parallel schema definitions).
- Required blocks: [Persona], [Goal], [Context], [Tasks], [Output], [Checks], [Language].
- Add **[Platform]** field to Context to capture platform-specific needs (e.g., Instagram, Ads, Blog).
- Enforce block order, 3–5 tasks, 3–5 checks.
- Tone and Language fidelity mandatory via ELoS Translate 2.0 + TNF.

### Success Gates
- Schema validator operational.
- 100% EPP-2 compliance in templates.
- Automated validation with strict format checker.

---

## Phase 1 – Input Normalization & Ambiguity Resolution

### Objectives
- Stop echoing garbage input.
- Handle ambiguity up-front.

### Deliverables
1. **Normalizer module** (`normalizer.ts`):
   - `sanitizeInput()`: remove filler words (hey, idk, pls, etc.).
   - `extractIntent()`: isolate core request.
   - `parseContext()`: length, tone, language, platform.
2. **Ambiguity Resolver** (`ambiguity-resolver.ts`):
   - Detect unclear requirements.
   - Auto-resolve common ambiguities (emoji → both variants).
   - Generate clarifier prompts when ambiguity exceeds threshold.

### Success Gates
- Input normalization accuracy >95%.
- Ambiguity detection + resolution success >90%.
- Clarification layer triggered on ≥80% of vague cases.

---

## Phase 2 – Language Routing & Tone Enforcement

### Objectives
- Correct language output.
- Preserve luxury tone.

### Deliverables
1. **Language Router** (`language-router.ts`):
   - `detectTargetLanguage()` from user input.
   - `routeToLanguage()` with fallback to input language.
   - `translateWithToneFidelity()` integrated with TNF.
2. **Tone Enforcer** (`tone-enforcer.ts`):
   - Detect tone intent.
   - Enforce elegant, refined tone.
   - Handle emoji policy: tasteful only, option for none.

### Success Gates
- Language fidelity ≥98%.
- Tone fidelity ≥95% (evaluated via rubric).
- Hebrew requests never default to English.

---

## Phase 3 – Evaluation & Scoring

### Objectives
- Build automated quality assurance.

### Deliverables
1. **Evaluation Rubric** (`rubric.ts`) with revised weights:
   - Structural: 20%
   - Language: 20%
   - Tone: 20%
   - Ambiguity: 20%
   - Compression: 15%
   - Platform Alignment: 5%
2. **Quality Thresholds**:
   - Production: ≥90 overall, no category <70.
   - Beta: 80–89.
   - Needs Rework: <80.
3. **Evaluator Functions**: structural, language fidelity, tone, ambiguity, compression, platform optimization.

### Success Gates
- Automated evaluation pipeline passes 95% of gold test cases.
- Regression detection in CI.

---

## Phase 4 – Test Suite Expansion

### Objectives
- Validate against realistic + adversarial prompts.

### Deliverables
1. **Test Cases (`test-cases.yml`)**:
   - ≥15 messy inputs → perfected outputs.
   - 5 Hebrew cases.
   - 3 technical/debug cases.
   - 2 adversarial noise/contradictory inputs.
   - Emoji ambiguity cases.
2. **Automated Runner (`test-runner.ts`)**.
3. **Performance Tests**: ensure <500 ms latency, <10MB memory overhead.

### Success Gates
- ≥90% test pass rate.
- Stress tests confirm resilience to malformed input.

---

## Phase 5 – Deployment & Risk Management

### Objectives
- Controlled rollout, avoid regressions.

### Deliverables
1. **Deployment Plan**:
   - Feature flags (`EPP_GS` toggle).
   - Gradual rollout (10% → 50% → 100%).
   - Rollback procedures in <1h.
2. **Risk Register Integration**:
   - Critical Risks: Input normalization, Language routing, Data loss.
   - High Risks: Performance, Quality regression, Deployment.
   - Each risk mapped to test gates.
3. **Monitoring**:
   - Real-time evaluation scores.
   - Alerts for degradation.
   - Weekly risk reviews.

### Success Gates
- System uptime ≥99.5%.
- Processing <500 ms for 95% inputs.
- Error rate <1%.
- User satisfaction ≥4.5/5.

---

## Timeline

- **Week 1**: Phase 0–1 (Schema + Normalization + Ambiguity).
- **Week 2**: Phase 2 (Language + Tone).
- **Week 3**: Phase 3–4 (Evaluation + Test expansion).
- **Week 4**: Phase 5 (Deployment + Monitoring).

---

## Consolidated Recommendations
- Ambiguity handling elevated to Phase 1.
- Platform detection added to Context block.
- Rubric weights recalibrated.
- Plan success metrics aligned with rubric thresholds.
- Test set broadened beyond social/marketing.
- Change plan, spec, rubric, and risks unified in one playbook.

---

# End of Playbook v2
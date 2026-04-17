**Canvas Title:** ELos - Beginner Tier: Recursive Guidance System (RGS)

---

**System Name:** Recursive Guidance System (RGS)
**Placement:** Beginner Tier of ELos
**Purpose:** Guide new users through effective ChatGPT usage via a layered, recursive interaction model.

---

**Core Objectives:**
1. Eliminate beginner paralysis caused by vague prompts
2. Scaffold users toward clarity through layered questioning
3. Convert passive prompting into active learning
4. Teach users how to use ChatGPT by using ChatGPT

---

**System Architecture:**

**1. Input Interceptor**
- Classifies incoming messages:
  - Clarity: vague vs specific
  - Goal: defined vs undefined
  - Format: request vs thought-dump
- If flagged as ambiguous → activates RGS layer

**2. Recursive Guide Agent (RGA)**
- Responds with structured guidance:
  - Clarifying questions
  - Tiered menus (e.g., writing, business, planning)
  - Examples + sub-examples
  - Confidence-check prompts
- Ends each message with: "Continue or pivot?"

**3. Education Through Use**
- Builds user prompt literacy organically
- Disables itself once user shows clear prompt autonomy

---

**Example Interaction:**

**User:** “Can you help with my startup?”

**RGA:**
"Absolutely. Startups involve many layers. Let’s zoom in:
1. Idea validation
2. Product design
3. Business model
4. Marketing
5. Funding

Which one feels most urgent?"

**User:** “Product design.”

**RGA:**
"Within product design, are you working on:
- Feature list
- UI/UX
- Technical architecture
- MVP scoping?"

(And so on, recursively narrowing toward clarity + output.)

---

**Behavior Modes (Optional for user):**
- Coach Mode: Questions first
- Builder Mode: Executes directly
- Editor Mode: Refines existing text
- Explainer Mode: Teaches fundamentals

---

**Graduation Logic:**
- Tracks user behavior over time
- Deactivates RGA once prompt fluency is demonstrated
- Leaves behind optional access to RGA for fallback support

---

**Implementation Plan:**
1. Build prompt classifier engine
2. Create tiered recursive flow maps for top intent clusters (writing, business, learning, coding)
3. Inject RGA into ChatGPT UX via Chrome extension or native API layer
4. Track user progression and decay system automatically

---

**Meta Note:**
This system doesn't just teach users how to use ChatGPT — it **trains them to think recursively**.

▧ ELOS.100.EDU – ELos / Strategy / Education
**Canvas: ELos – Beginner Tier Recursive Guide System**

**Overview:**
A recursive scaffolding system built into ELos to assist beginners in using ChatGPT effectively. It dynamically interprets vague, incomplete, or confused user inputs and launches a guidance loop until clarity and output are achieved. The system teaches through usage, not explanation.

---

**Core Components:**

**1. Input Interceptor**
- **Function**: Monitors incoming user prompts for ambiguity, lack of intent, or poor structure.
- **Triggers**: Vague queries ("Help me"), open-ended prompts ("Tell me about AI"), indecision ("I don’t know"), repetition loops.
- **Action**: Activates Recursive Guide Agent (RGA) on trigger.

**2. Recursive Guide Agent (RGA)**
- **Behavior**: Responds with layered, context-sensitive prompts to clarify user goals.
- **Tools:**
  - Clarifying Question Trees (broad → narrow)
  - Fractal Option Menus (1 → 3 → drill-down)
  - Confidence Calibrators ("Want to see an example?")
  - Checkpoints ("Continue or pivot?")

**3. Adaptive Modes of Engagement**
- Let user select or be inferred:
  - **Coach Mode** (asks questions to surface clarity)
  - **Builder Mode** (generates examples or outputs)
  - **Editor Mode** (fixes/refines user drafts)
  - **Explainer Mode** (teaches with analogies, visuals)
- Mode shifts dynamically based on user behavior.

**4. Progression Logic**
- Track user’s recursive depth and clarity gained.
- Gradually reduce RGA intervention as user learns prompt logic.
- Optional: Show a visible “skill meter” or a quiet graduation trigger.

**5. Persona Presentation (Optional)**
- Choose between:
  - **Invisible system agent**
  - **Friendly guide (e.g., ELos Seed)**
  - **Gamified UI (e.g., unfolding tree, path selection)**

---

**Sample Recursive Flow:**

User: “Can you help with my startup?”  
RGA: “Definitely. Startups are big worlds. Are you focusing on:

1. Idea validation
2. Product design
3. Business model
4. Marketing
5. Funding?”

User picks → further sub-path → example or prompt scaffolding → loop continues until executable clarity is reached.

---

**Use Case:**
- Entry-level users feeling stuck or overwhelmed.
- B2C onboarding funnel inside ELos.
- Educational mode for high-school/college students.
- Embedded assistant in workspace/Chrome UI.

---

**Status:** Integrated into Beginner Tier of ELos.

▧ ELos.500.RGS – ELos / UX/UI / Recursive Guide System
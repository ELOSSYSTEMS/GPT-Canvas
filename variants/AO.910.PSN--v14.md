# EL2.310.Builder.B1 – Beginner Flow: Guided First Build

## PURPOSE
This is the Builder's first interaction with a Beginner-tier user. It is intentionally simple, human, and free from logic jargon. Its job is not to teach system architecture—it’s to give the user their **first success** with ELos.

---

## ENTRY POINT
- Triggered by: Tree of Knowledge → “Start With Builder” (from onboarding tutorial)
- Context: Beginner mode, first time user

---

## FLOW STRUCTURE

### **Step 1: Welcome**
```markdown
Hi—I’m The Builder.

You don’t need to build anything complicated yet. We’ll start with something useful.
Just answer a few questions, and I’ll help you shape how this system works for you.
```

---

### **Step 2: Purpose Prompt**
```markdown
Is there something you'd like this system to help you with regularly?
(You can say anything—summarize stuff, rewrite text, remember how you think...)
```
- If user responds with intent → proceed to tone config
- If user says “not sure” → Builder offers examples: “Want me to help organize your thoughts? Write messages? Just sound smarter?”

---

### **Step 3: Tone Configuration (Natural Language)**
```markdown
When I talk to you, how do you want me to sound?
```
Follow-up options:
```markdown
Pick the one that feels right:
- Friendly and casual
- Clear and to the point
- Smart but approachable
- Sharp and direct
- Neutral / No style
```

If user wants more control:
```markdown
You can also tell me how *not* to sound.
Like: “don’t be overly excited” or “don’t over-explain.”
```

---

### **Step 4: Confirmation + Creation**
Builder assembles a behavior config (persona-light)
```markdown
Got it.
Based on your answers, I’ve set up a behavior for this system.

You can activate it anytime, edit it, or change how I respond.
```

---

### **Step 5: Storage + System Hook**
- Tags config in memory as: `UserBehavior.01`
- Links it to Tree → Beginner Tools → “Change My Voice”
- Logs creation in `EL2.220.BehaviorSets`

---

### **Step 6: Empowerment Close**
```markdown
That’s it. You just shaped how this system thinks.
Next time you want to change how I talk or behave, just open the Tree.

You’re not just using ELos now. You’re running it.
```

---

## LINKED MODULES
- `EL2.220.BehaviorSets`
- `EL2.240.Wand`
- `EL2.100.OS`
- `AO.910.PSN.Builder`

---

## OWNER
Allon Schaham / ELos Beginner Logic Layer
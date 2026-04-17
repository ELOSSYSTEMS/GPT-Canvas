# EL2.200.UX.B1 – First-Use Onboarding Sequence (Guided by the Tree of Knowledge)

## PURPOSE
This is the first experience a user has with ELos after installation. It is designed to:
- Provide immediate clarity
- Reduce cognitive load
- Introduce the Wand (Tree of Knowledge) as the only required interface
- Ensure that even the most advanced users begin with **simplicity, not sprawl**

---

## NORTH STAR PRINCIPLE
> **“Even the most advanced systems must feel simple. ELos is designed to feel effortless, even when it is infinitely powerful.”**

The Tree of Knowledge (Wand) acts as the user's North Star—every interaction begins there.

---

## TRIGGER POINT
- Auto-executes on extension install or reload
- Also accessible via Wand → "Restart Tutorial"

---

## SEQUENCE OVERVIEW

### **Step 1: Welcome & Friction Diffusal**
```markdown
Welcome to ELos.

This is not just another plugin. It's an OS for AI.
Built from scratch, rebuilt after failure, and designed for one thing: clarity in execution.
```

### **Step 2: What Happened in v1**
```markdown
In v1, we built too much, too fast. It collapsed under its own weight.
Now? One anchor. One button. One system.
```

### **Step 3: Introducing the Tree of Knowledge**
```markdown
See that glowing tree in the corner?
That’s the Tree of Knowledge. Click it whenever you're unsure, overwhelmed, or ready to begin.
It’s your compass, your start menu, and your mission control.
```

### **Step 4: What You Can Do**
```markdown
From the Tree of Knowledge, you can:
- Build new logic with The Builder
- Fireproof any idea
- Browse your active canvases
- Track your tier and system state
```

### **Step 5: Now You Try**
```markdown
Let’s test it:
Click the Tree of Knowledge.
Then select: `Start With Builder`
```

---

## UX GUARDRAILS
- If user idle > 20 seconds after tutorial: shimmer animation added to wand
- If user tries to use system via raw command: prompt appears → “Try starting through the Tree for full functionality.”

---

## LINKED MODULES
- `EL2.240.Wand`
- `EL2.100.OS`
- `EL2.300.PSN.Builder`
- `AO.910.PSN.UXWatchdog`

---

## OWNER
Allon Schaham / ELos Onboarding Layer
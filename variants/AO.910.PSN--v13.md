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
Designed for one thing: clarity in execution.

You are currently in: Beginner Mode
This means you're seeing a simplified, safe view of ELos.
New capabilities will unlock automatically as you progress.

[Skip this tutorial] → Launch Tree of Knowledge now
```

### **Step 2: Introducing the Tree of Knowledge**
```markdown
See that glowing tree in the corner?
That’s the Tree of Knowledge. Click it whenever you're unsure, overwhelmed, or ready to begin.
It’s your compass, your start menu, and your mission control.
```

### **Step 3: What You Can Do Right Now**
```markdown
From the Tree of Knowledge, you can:

- **See Your ChatGPT Voice**  
  View and switch your current system mode (e.g., Expert, Friendly, Socratic)

- **Understand What This System Knows About You**  
  Review a simple summary of your preferences and context (nothing private)

- **View Your Memory**  
  See what's stored in your long-term memory—and change it anytime

- **Explore Beginner Tools**  
  A list of safe, powerful things you can try right now (no setup required)

- **Ask Questions Freely**  
  Just type. If you're lost, the Tree always brings you home.
```

### **Step 4: Try It Now**
```markdown
Let’s test it:
Click the Tree of Knowledge.
Then select: `Start With Builder`
```

### **Step 5: Confirmation**
```markdown
You're ready.

Click the Tree of Knowledge anytime.  
It's your compass, your control panel, your first and last button.

You're now running ELos.
```

---

## UX GUARDRAILS
- If user idle > 20 seconds after tutorial: shimmer animation added to wand
- If user tries to use system via raw command: prompt appears → “Try starting through the Tree for full functionality.”

---

## LINKED MODULES
- `EL2.240.Wand`
- `EL2.100.OS`
- `EL2.220.BehaviorSets`
- `EL2.300.PSN.Builder`
- `AO.910.PSN.UXWatchdog`

---

## OWNER
Allon Schaham / ELos Onboarding Layer
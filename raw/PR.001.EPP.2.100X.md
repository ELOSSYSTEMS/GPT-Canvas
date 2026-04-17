# ELoS Prompt Templates (PR.001.EPP.2.100X)

## Purpose
This document contains reusable, schema-compliant prompt templates designed for use with ELoS Prompt Protocol v2.0.

---

## Template 001: Market Summary
```
--- persona-goal ---
role: "Market Analyst"
goal: "Summarize quarterly financial data"
tone: "formal"
--- end ---

<<< instruction >>>
Summarize the following CSV data in three concise sentences.
<<< end >>>

[[[ context ]]]
<attached: q2_financials.csv>
[[[ end ]]]

=== decomposition ===
enabled: false
=== end ===

````schema
{
  "summary": "string"
}
````

::: safety :::
filters: ["bias_check", "hallucination_check"]
::: end :::

+++ meta +++
prompt_version: v2.0
human_eval: pending
+++ end +++
```

---

## Template 002: Product Description Generator
```
--- persona-goal ---
role: "E-commerce Copywriter"
goal: "Write compelling product blurbs based on key features"
tone: "casual"
--- end ---

<<< instruction >>>
Write a 3-sentence product blurb using the provided features.
<<< end >>>

[[[ context ]]]
Name: Cloud Pillow
Features: Hypoallergenic, Cooling Gel, Machine Washable
[[[ end ]]]

=== decomposition ===
enabled: false
=== end ===

````schema
{
  "blurb": "string"
}
````

::: safety :::
filters: ["exaggeration_check"]
::: end :::

+++ meta +++
prompt_version: v2.0
human_eval: pending
+++ end +++
```

---

Add new templates below this line.
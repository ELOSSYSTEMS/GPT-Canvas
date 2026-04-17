// Canvas: EL.500.OBG.TIP.promoteInsight
// Purpose: Onboarding Tooltip – Promote Simulated Insights
// Registry: ELos Bootloader Tutorial Registry (Advanced Tips)

import React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export default function PromoteInsightTutorialBubble({ children }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent className="max-w-sm p-4 text-sm">
        <div className="font-semibold mb-1">⭐ Promote to Real Insight</div>
        <p className="mb-2">
          Promoting a simulated entry tells the system it matters. It becomes part of your learning model — affecting suggestions, analytics,
          and prompt evolution. Ideal for onboarding insights you want to keep.
        </p>
        <p className="text-xs text-muted-foreground">You will only see this tip once unless re-enabled in settings.</p>
      </TooltipContent>
    </Tooltip>
  );
}

// Usage Example:
// <PromoteInsightTutorialBubble>
//   <Button variant="outline">⭐ Promote to Real Insight</Button>
// </PromoteInsightTutorialBubble>

// Bootloader Registration
if (!window.ELosTutorialRegistry) window.ELosTutorialRegistry = {};
window.ELosTutorialRegistry["EL.500.OBG.TIP.promoteInsight"] = PromoteInsightTutorialBubble;
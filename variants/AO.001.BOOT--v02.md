// 🔌 AO.001.BOOT – Allon OS Bootloader (Recursive Version)
// Executes a recursive load sequence for all canvases declared in the AO.001.RBI boot index

const AllonOSBootloader = async () => {
  const topLevelCanvases = [
    "AO.001.RBI",              // Master Index
    "EL2.110.TriggerMap",     // Trigger Registry
    "EL.002.STG",             // Stargate Protocol v3.1
    "EL.300.KRN",             // Kernel Execution Chains
    "AO.100.PSN",             // Persona Master Index
    "FF.100.POS",             // Forever Flowers OS Root
    "FF.200.HOM",             // Forever Flowers Homepage & Copy
    "FF.700.OPS",             // Forever Flowers Ops System
    "DB.100.CORE",            // Dabroo Core
    "AO.500.CMD"              // Command QuickMenu UI
  ];

  const loaded = new Set();

  const loadCanvasRecursive = async (canvas) => {
    if (loaded.has(canvas)) return;
    await loadCanvas(canvas);
    loaded.add(canvas);
    console.log(`✅ Loaded: ${canvas}`);

    // Extract referenced canvases if it's the RBI
    if (canvas === "AO.001.RBI") {
      const rbiContent = getCanvasContent(canvas);
      const canvasMatches = [...rbiContent.matchAll(/"([A-Z]{2,}\.\d{3}\.[A-Z0-9]{2,})"/g)];
      const linkedCanvases = canvasMatches.map(match => match[1]);
      for (const sub of linkedCanvases) {
        await loadCanvasRecursive(sub);
      }
    }
  };

  for (const canvas of topLevelCanvases) {
    await loadCanvasRecursive(canvas);
  }

  console.log("🧠 Allon OS Recursive Boot Sequence Complete");
};

// Execute boot
AllonOSBootloader();
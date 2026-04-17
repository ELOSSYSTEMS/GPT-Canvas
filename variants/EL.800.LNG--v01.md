{
  "name": "StarfleetLanguagePack",
  "version": "v1.0",
  "status": "soft-persistent",
  "activationCommand": "!enable federationMode",
  "bootloaderCompatible": true,
  "bootloaderProfile": {
    "load": [
      "EL.800.LNG.StarfleetLanguagePack"
    ],
    "preferences": {
      "languageOverlay": "Starfleet"
    }
  },
  "mapping": {
    "ELos OS": "Federation Command Core",
    "Canvas": "Tactical Directive",
    "Canvas Stack": "Mission Briefing Deck",
    "Bootloader": "Systems Initialization Sequence",
    "Profile": "Command Configuration",
    "Prompt": "Verbal Directive",
    "Output": "Computational Response",
    "Extension UI": "Command Deck Console",

    "Stargate Protocol": "Primary Operating Protocol",
    "Command Kernel": "Command Logic Core",
    "Personas": "Crew Assignment Matrix",
    "Prompt Library": "Directive Archive",
    "Tone Fidelity Engine": "Communications Harmonizer",
    "Hebrew Rewrite Engine": "Linguistics Subsystem – Sector 420",
    "Visual Prompt Engine": "Holodeck Input Matrix",
    "Consistency Auditor": "System Integrity Monitor",
    "Builder Mode": "Command Schematic Constructor",
    "Journal Engine": "Personal Log Recorder",

    "AO.001.RBI": "Federation Registry Console",
    "EL.002.STG": "Primary Operating Protocol",
    "EL.300.KRN": "Command Logic Core",
    "AO.910.PRM.LIB": "Directive Archive",
    "EL.420.HBR": "Linguistic Subsystem – Sector HBR",
    "AO.600.JRN": "Personal Log Recorder",

    "+ New Canvas": "Create Tactical Directive",
    "Edit Canvas": "Modify Directive",
    "Add to Bootloader": "Deploy to Systems Sequence",
    "Run in Sandbox": "Simulate Command Execution",
    "Load Profile": "Activate Command Configuration",
    "Update Protocols": "Sync with Starbase",
    "Prompt Output": "Computational Response",
    "Toggle Module": "Enable/Disable Subsystem",

    "Unlocked": "Open Access",
    "Locked": "Restricted – Level 5",
    "Encrypted": "Classified – Level 7",
    "System": "Starfleet Command – Level 9"
  },
  "notes": "This overlay remaps all user-facing and internal terminology to a Star Trek: TNG-compatible structure. It is now soft-persistent via bootloader profile. All functional mappings retain their Dewey IDs and execution logic; only linguistic surface layer is modified."
}
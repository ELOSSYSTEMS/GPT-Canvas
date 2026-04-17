{
  "name": "bootloader.json",
  "version": "1.0",
  "type": "#bootloader",
  "description": "Startup sequence for ELoS Webapp inside emergent.sh. Loads prompt logic, workflows, UI, and middleware.",
  "autoload": true,
  "entry": "AO.001.RBI",
  "modules": [
    { "id": "AO.001.RBI", "type": "#boot", "autoload": true },
    { "id": "PR.001.EPP", "type": "#prompt", "autoload": true },
    { "id": "PR.003.SDE", "type": "#prompt", "autoload": true },
    { "id": "PR.005.INT", "type": "#prompt", "autoload": true },
    { "id": "PR.020.PFP", "type": "#prompt", "autoload": true },
    { "id": "EL.410.TNF", "type": "#prompt", "autoload": true },
    { "id": "PR.900.LMM", "type": "#prompt", "autoload": true },
    { "id": "SYS.101.SGS", "type": "#middleware", "autoload": true },
    { "id": "UX.400.ONB", "type": "#flow", "autoload": true },
    { "id": "IN.110.IDE", "type": "#ui", "autoload": true },
    { "id": "UX.401.BIL", "type": "#middleware", "autoload": false }
  ],
  "saas": {
    "billing": "enabled",
    "provider": "paddle",
    "mode": "subscription",
    "auth": "emergent-native"
  },
  "metadata": {
    "language": "Hebrew",
    "fidelity_engine": "EL.410.TNF",
    "description_he": "רצף טעינה של מערכת ELoS המותאמת לעברית, כולל תרגום טון, עיבוד כוונה, וסבב סוקרטי"
  }
}
{
  "module": "SessionValidator",
  "type": "formula-module",
  "scope": "public-extension",
  "description": "Global runtime validator. Blocks any protocol execution unless ELos OS extension runtime is active.",
  "globalPrecondition": true,
  "methods": {
    "validateRuntime": {
      "logic": "return window?.ELosBootloaderActive === true;"
    },
    "interceptCommand": {
      "input": "commandString",
      "logic": "return validateRuntime() ? commandString : '// Invalid Command: ELos OS not installed';"
    }
  },
  "usage": "All modules must invoke validateRuntime() before executing. Hook interceptCommand() to !run, !install, and protocol triggers."
}
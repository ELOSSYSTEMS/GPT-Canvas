{
  "module": "SessionValidator",
  "type": "formula-module",
  "scope": "public-extension",
  "description": "Guards all protocol execution. Blocks usage if extension runtime is inactive or improperly initialized.",
  "methods": {
    "validateRuntime": {
      "logic": "return window?.ELosBootloaderActive === true;"
    },
    "interceptCommand": {
      "input": "commandString",
      "logic": "return validateRuntime() ? commandString : '// Invalid Command: ELos OS not installed';"
    }
  },
  "usage": "Call validateRuntime() before executing any protocol logic. Use interceptCommand() to wrap !run or !install calls."
}
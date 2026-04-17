# Recovery Ceiling Report

## Current ceiling

- parse failures remaining: 54
- empty-payload failures: 50
- non-empty failures: 4
- unresolved partial operations: 96

## Why recovery stops here for now

- Most remaining parse failures are zero-length payloads. There is no recoverable body text left in the export for those tool calls.
- Most remaining unresolved partials are regex-no-match or no-current-body cases. Auto-applying them further would risk corrupt reconstruction.
- A small residue remains as alias/conflict families where the same ID appears to have been reused or repurposed across chats. Those need judgment, not blind automation.

## Unresolved partial reasons

- regex-no-match: 78
- no-current-body-for-partial-update: 16
- missing-replacement: 2

## Best future improvements

- targeted manual review of the highest-value conflict families (`AO.001.RBI`, `AO.910.PRM.LIB`, `AO.910.PSN`, `EL.410.TNF`)
- manual reconstruction from adjacent assistant prose for zero-length tool calls only when the surrounding conversation clearly contains the missing body
- human-guided alias policy for reused IDs versus true replacements

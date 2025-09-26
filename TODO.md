# Task: Properly Call WithdrawSection Component

## Overview
Update Dashboard.jsx to pass all required props to the WithdrawSection component for proper functionality.

## Steps to Complete

### 1. [x] Locate and Update the WithdrawSection Component Call
- File: src/pages/Dashboard.jsx
- Find the line: `<WithdrawSection/>`
- Replace with: `<WithdrawSection wallet={wallet} chainId={chainId} mlmData={mlmData} stakingInteractions={stakingInteractions} fetchMlmData={fetchMlmData} config={config} USDT_ABI={USDT_ABI} USDT_ADDRESS={USDT_ADDRESS} />`
- Ensure all props are correctly passed without introducing errors.

### 2. [ ] Verify the Update
- Check for any syntax errors or missing imports (none expected).
- Optionally, run the app to test, but since no execute_command yet, mark as complete after edit.

### 3. [ ] Update TODO.md
- Mark step 1 as complete after editing the file.
- Proceed to attempt_completion if all done.

## Dependent Files
- src/pages/Dashboard.jsx (primary)
- src/components/WithdrawSection.jsx (reference, no changes)

## Follow-up Steps
- Test the withdrawal functionality in the browser.
- If issues, debug using console logs or browser_action tool.

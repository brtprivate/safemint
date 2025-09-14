# BuyToken Fix Summary

## Problem
The `buyToken` function was failing with "Invalid Amount" error because it was passing a wei amount (e.g., `10000000000000000000` for 10 USDT) to the contract, but the contract expects a plain USDT amount (e.g., `10` for 10 USDT).

## Root Cause
Looking at the error message and reference implementation:
- Error: `ContractFunctionExecutionError: The contract function "buyToken" reverted with the following reason: Invalid Amount`
- Args passed: `(10000000000000000000)` - this is 10 USDT in wei format
- Reference code shows: `MainContract.methods.buyToken(usdAmount).send()` where `usdAmount` is plain amount

## Solution Applied

### 1. Updated `handleBuyToken` in MLMDashboard.jsx
- Changed to pass plain amount instead of wei amount to `stakingInteractions.buyToken()`
- Still convert to wei for approval process (which is correct)
- Added clear logging to distinguish between wei (for approval) and plain amount (for buyToken)

### 2. Updated `buyToken` function in selfmintStakingService.ts
- Changed parameter type from `bigint` to `string | number` 
- Updated function to accept plain USDT amount (e.g., "10" for 10 USDT)
- Convert to wei only for allowance verification
- Pass plain amount to contract's buyToken function
- Updated documentation to reflect the change

## Key Changes

**Before:**
```javascript
// MLMDashboard.jsx
const amountInWei = parseUnits(buyTokenAmount, Number(decimals));
const txHash = await stakingInteractions.buyToken(amountInWei, wallet.account);

// selfmintStakingService.ts
async buyToken(usdAmount: bigint, account: Address): Promise<string> {
  // ... 
  args: [usdAmount], // This was wei amount
}
```

**After:**
```javascript
// MLMDashboard.jsx
const amountInWei = parseUnits(buyTokenAmount, Number(decimals)); // Only for approval
const txHash = await stakingInteractions.buyToken(buyTokenAmount, wallet.account); // Plain amount

// selfmintStakingService.ts
async buyToken(usdAmount: string | number, account: Address): Promise<string> {
  const plainAmount = typeof usdAmount === 'string' ? parseFloat(usdAmount) : usdAmount;
  // ...
  args: [plainAmount], // This is now plain amount
}
```

## Expected Result
- BuyToken function should now work correctly
- No more "Invalid Amount" errors
- Contract will receive plain USDT amount as expected (e.g., 10 for 10 USDT)
- Approval process still works correctly with wei amounts

## Testing
To test the fix:
1. Connect wallet to BSC Mainnet
2. Enter a USDT amount (e.g., 10)
3. Click "Buy Token" button
4. Should successfully execute without "Invalid Amount" error

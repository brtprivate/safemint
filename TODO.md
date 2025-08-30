# INOUT_STAKING Contract Implementation Plan

## Information Gathered

1. **Current State**: 
   - `src/services/selfmintStakingService.ts` already implements most contract functions
   - `src/pages/Home.jsx` uses these functions extensively
   - The ABI in the service file is comprehensive and matches the Solidity contract

2. **Functions Used in Home.jsx**:
   - `getUserInfo()` - ✅ Implemented
   - `getBonusInfo()` - ✅ Implemented  
   - `getRankQualify()` - ✅ Implemented
   - `getDirectUser()` - ✅ Implemented
   - `getMatureOrder()` - ✅ Implemented
   - `getUnStakePotential()` - ✅ Implemented
   - `findLeaderUser()` - ✅ Implemented
   - `activeUser()` - ✅ Implemented
   - `getPrice()` - ✅ Implemented
   - `userStakeView()` - ✅ Implemented
   - `getTotalRemainTPR()` - ✅ Implemented
   - `approveUSDT()` - ✅ Implemented
   - `regUser()` - ✅ Implemented
   - `makeStake()` - ✅ Implemented
   - `makeUnstake()` - ✅ Implemented
   - `userSelfUpdate()` - ✅ Implemented

3. **Potential Missing Functions**:
   - `stakeGrowth()` - View function for individual stake growth
   - `teamGrowthTime()` - View function for team growth time
   - `userLiveStatus()` - View function for user live status
   - `levelDist()` - Pure function for level distribution
   - `avUnStake()` - View function for available unstake amount

## Plan

### 1. Verify and Implement Missing Functions
- [ ] Check if `stakeGrowth()` function is needed and implement if missing
- [ ] Check if `teamGrowthTime()` function is needed and implement if missing  
- [ ] Check if `userLiveStatus()` function is needed and implement if missing
- [ ] Check if `levelDist()` function is needed and implement if missing
- [ ] Check if `avUnStake()` function is needed and implement if missing

### 2. Test Integration
- [ ] Verify all functions work correctly with Home.jsx
- [ ] Test contract interactions in the browser

### 3. Documentation
- [ ] Add proper JSDoc comments for all functions
- [ ] Ensure error handling is consistent

## Dependent Files
- `src/services/selfmintStakingService.ts` - Main implementation file
- `src/pages/Home.jsx` - Primary consumer of the service

## Followup Steps
- Run the application to test functionality
- Verify all contract calls work as expected
- Handle any missing or incomplete implementations

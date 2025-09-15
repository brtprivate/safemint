import { readContract } from '@wagmi/core';
import { config } from '../config/web3modal';
import { formatUnits } from 'viem';
import type { Address } from 'viem';
import safeMintTokenService from '../services/safeMintTokenService';
import { stakingInteractions } from '../services/selfmintStakingService';

/**
 * Test unstake functionality
 */
export async function testUnstakeFunctionality(userAddress: Address) {
  console.log("🧪 [UNSTAKE TEST] Starting unstake functionality test...");
  console.log("🧪 [UNSTAKE TEST] User Address:", userAddress);

  try {
    // 1. Test SafeMint token balance
    console.log("🔍 [UNSTAKE TEST] Checking SafeMint token balance...");
    const tokenBalance = await safeMintTokenService.getBalance(userAddress);
    const formattedBalance = formatUnits(tokenBalance, 18);
    console.log("✅ [UNSTAKE TEST] SafeMint Balance:", formattedBalance, "SMT");

    // 2. Test token price
    console.log("🔍 [UNSTAKE TEST] Checking token price...");
    const tokenInfo = await safeMintTokenService.getTokenInfo();
    const tokenPrice = formatUnits(tokenInfo.rateInUSDT, 18);
    console.log("✅ [UNSTAKE TEST] Token Price:", tokenPrice, "USDT per SMT");

    // 3. Test user registration status
    console.log("🔍 [UNSTAKE TEST] Checking user registration...");
    try {
      const userInfo = await stakingInteractions.getUserInfo(userAddress);
      console.log("✅ [UNSTAKE TEST] User Registration Status:", userInfo.joined ? "Registered" : "Not Registered");
    } catch (regError) {
      console.warn("⚠️ [UNSTAKE TEST] Could not check registration status:", regError);
    }

    // 4. Calculate potential unstake value
    if (parseFloat(formattedBalance) > 0) {
      const potentialUSDT = parseFloat(formattedBalance) * parseFloat(tokenPrice);
      console.log("💰 [UNSTAKE TEST] Potential USDT from unstaking all tokens:", potentialUSDT.toFixed(6), "USDT");
    }

    // 5. Test contract addresses
    console.log("🔍 [UNSTAKE TEST] Contract Information:");
    console.log("   - SafeMint Token:", safeMintTokenService.SAFEMINT_TOKEN_ADDRESS);
    console.log("   - Staking Contract:", stakingInteractions.STAKING_CONTRACT_ADDRESS);

    console.log("✅ [UNSTAKE TEST] All tests completed successfully!");
    
    return {
      success: true,
      tokenBalance: formattedBalance,
      tokenPrice: tokenPrice,
      potentialUSDT: parseFloat(formattedBalance) * parseFloat(tokenPrice),
    };

  } catch (error) {
    console.error("❌ [UNSTAKE TEST] Test failed:", error);
    return {
      success: false,
      error: error.message || "Unknown error",
    };
  }
}

/**
 * Test contract connectivity
 */
export async function testContractConnectivity() {
  console.log("🧪 [CONTRACT TEST] Testing contract connectivity...");

  try {
    // Test SafeMint token contract
    const tokenInfo = await safeMintTokenService.getTokenInfo();
    console.log("✅ [CONTRACT TEST] SafeMint Token Contract:", {
      name: tokenInfo.name,
      symbol: tokenInfo.symbol,
      decimals: tokenInfo.decimals,
      totalSupply: formatUnits(tokenInfo.totalSupply, tokenInfo.decimals),
      rateInUSDT: formatUnits(tokenInfo.rateInUSDT, 18),
    });

    // Test reserves
    const reserves = await safeMintTokenService.getReserves();
    console.log("✅ [CONTRACT TEST] Token Reserves:", {
      tokenSupply: formatUnits(reserves.tokenSupply, 18),
      usdtBalance: formatUnits(reserves.usdtBalance, 18),
      lastUpdate: new Date(Number(reserves.blockTimestampLast) * 1000).toLocaleString(),
    });

    console.log("✅ [CONTRACT TEST] All contracts are accessible!");
    return { success: true };

  } catch (error) {
    console.error("❌ [CONTRACT TEST] Contract connectivity test failed:", error);
    return { success: false, error: error.message || "Unknown error" };
  }
}

/**
 * Run comprehensive unstake tests
 */
export async function runUnstakeTests(userAddress?: Address) {
  console.log("🚀 [UNSTAKE TESTS] Starting comprehensive unstake tests...");
  
  // Test contract connectivity first
  const contractTest = await testContractConnectivity();
  if (!contractTest.success) {
    console.error("❌ [UNSTAKE TESTS] Contract connectivity failed, aborting tests");
    return contractTest;
  }

  // Test unstake functionality if user address provided
  if (userAddress) {
    const unstakeTest = await testUnstakeFunctionality(userAddress);
    return unstakeTest;
  }

  console.log("✅ [UNSTAKE TESTS] Basic tests completed successfully!");
  return { success: true, message: "Contract connectivity verified" };
}

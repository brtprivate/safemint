import { readContract } from '@wagmi/core';
import { config } from '../config/web3modal';
import { formatEther } from 'viem';
import type { Address } from 'viem';

// SafeMint Token Configuration
export const SAFEMINT_TOKEN_ADDRESS = "0xC0746bd0380190B899440bC33C647cE2426C8cCb" as Address;
export const BSC_MAINNET_CHAIN_ID = 56;

// SafeMint Token ABI - minimal ABI for price fetching
export const SAFEMINT_TOKEN_ABI = [
  {
    "inputs": [],
    "name": "rateInUSDT",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getReserves",
    "outputs": [
      {"internalType": "uint256", "name": "_reserve0", "type": "uint256"},
      {"internalType": "uint256", "name": "_reserve1", "type": "uint256"},
      {"internalType": "uint256", "name": "_blockTimestampLast", "type": "uint256"}
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{"internalType": "address", "name": "account", "type": "address"}],
    "name": "balanceOf",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "decimals",
    "outputs": [{"internalType": "uint8", "name": "", "type": "uint8"}],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [{"internalType": "string", "name": "", "type": "string"}],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [{"internalType": "string", "name": "", "type": "string"}],
    "stateMutability": "pure",
    "type": "function"
  }
] as const;

// Interface for token reserves
export interface SafeMintReserves {
  tokenSupply: bigint;
  usdtBalance: bigint;
  blockTimestampLast: bigint;
}

// Interface for token info
export interface SafeMintTokenInfo {
  name: string;
  symbol: string;
  decimals: number;
  totalSupply: bigint;
  rateInUSDT: bigint;
  reserves: SafeMintReserves;
}

/**
 * SafeMint Token Service
 * Provides functions to interact with the SafeMint token contract
 */
export const safeMintTokenService = {
  /**
   * Get SafeMint token rate in USDT
   * @returns Rate in wei (18 decimals)
   */
  async getRateInUSDT(): Promise<bigint> {
    try {
      console.log("🔄 [SafeMintTokenService] Fetching SafeMint token rate in USDT...");
      const rate = await readContract(config, {
        abi: SAFEMINT_TOKEN_ABI,
        address: SAFEMINT_TOKEN_ADDRESS,
        functionName: "rateInUSDT",
        chainId: BSC_MAINNET_CHAIN_ID,
      }) as bigint;
      
      console.log(`✅ [SafeMintTokenService] SafeMint rate in USDT: ${formatEther(rate)}`);
      return rate;
    } catch (error: any) {
      console.error(`❌ [SafeMintTokenService] Error fetching SafeMint rate:`, error);
      throw new Error(
        `Failed to fetch SafeMint rate: ${error.message || "Unknown error"}`
      );
    }
  },

  /**
   * Get SafeMint token reserves
   * @returns Reserves object with token supply, USDT balance, and timestamp
   */
  async getReserves(): Promise<SafeMintReserves> {
    try {
      console.log("🔄 [SafeMintTokenService] Fetching SafeMint token reserves...");
      const [reserve0, reserve1, blockTimestampLast] = await readContract(config, {
        abi: SAFEMINT_TOKEN_ABI,
        address: SAFEMINT_TOKEN_ADDRESS,
        functionName: "getReserves",
        chainId: BSC_MAINNET_CHAIN_ID,
      }) as [bigint, bigint, bigint];
      
      const reserves = {
        tokenSupply: reserve0,
        usdtBalance: reserve1,
        blockTimestampLast,
      };
      
      console.log(`✅ [SafeMintTokenService] SafeMint Reserves:`, {
        tokenSupply: formatEther(reserve0),
        usdtBalance: formatEther(reserve1),
        blockTimestampLast: blockTimestampLast.toString(),
      });
      
      return reserves;
    } catch (error: any) {
      console.error(`❌ [SafeMintTokenService] Error fetching SafeMint reserves:`, error);
      throw new Error(
        `Failed to fetch SafeMint reserves: ${error.message || "Unknown error"}`
      );
    }
  },

  /**
   * Get SafeMint token balance for an address
   * @param account - Wallet address
   * @returns Token balance in wei
   */
  async getBalance(account: Address): Promise<bigint> {
    try {
      console.log(`🔄 [SafeMintTokenService] Fetching SafeMint balance for ${account}...`);
      const balance = await readContract(config, {
        abi: SAFEMINT_TOKEN_ABI,
        address: SAFEMINT_TOKEN_ADDRESS,
        functionName: "balanceOf",
        args: [account],
        chainId: BSC_MAINNET_CHAIN_ID,
      }) as bigint;
      
      console.log(`✅ [SafeMintTokenService] SafeMint balance for ${account}: ${formatEther(balance)} SELFMINT`);
      return balance;
    } catch (error: any) {
      console.error(`❌ [SafeMintTokenService] Error fetching SafeMint balance:`, error);
      throw new Error(
        `Failed to fetch SafeMint balance: ${error.message || "Unknown error"}`
      );
    }
  },

  /**
   * Get SafeMint token total supply
   * @returns Total supply in wei
   */
  async getTotalSupply(): Promise<bigint> {
    try {
      console.log("🔄 [SafeMintTokenService] Fetching SafeMint total supply...");
      const totalSupply = await readContract(config, {
        abi: SAFEMINT_TOKEN_ABI,
        address: SAFEMINT_TOKEN_ADDRESS,
        functionName: "totalSupply",
        chainId: BSC_MAINNET_CHAIN_ID,
      }) as bigint;
      
      console.log(`✅ [SafeMintTokenService] SafeMint total supply: ${formatEther(totalSupply)} SELFMINT`);
      return totalSupply;
    } catch (error: any) {
      console.error(`❌ [SafeMintTokenService] Error fetching SafeMint total supply:`, error);
      throw new Error(
        `Failed to fetch SafeMint total supply: ${error.message || "Unknown error"}`
      );
    }
  },

  /**
   * Get complete SafeMint token information
   * @returns Complete token info object
   */
  async getTokenInfo(): Promise<SafeMintTokenInfo> {
    try {
      console.log("🔄 [SafeMintTokenService] Fetching complete SafeMint token info...");
      
      // Fetch all token data in parallel
      const [name, symbol, decimals, totalSupply, rateInUSDT, reserves] = await Promise.all([
        readContract(config, {
          abi: SAFEMINT_TOKEN_ABI,
          address: SAFEMINT_TOKEN_ADDRESS,
          functionName: "name",
          chainId: BSC_MAINNET_CHAIN_ID,
        }) as Promise<string>,
        readContract(config, {
          abi: SAFEMINT_TOKEN_ABI,
          address: SAFEMINT_TOKEN_ADDRESS,
          functionName: "symbol",
          chainId: BSC_MAINNET_CHAIN_ID,
        }) as Promise<string>,
        readContract(config, {
          abi: SAFEMINT_TOKEN_ABI,
          address: SAFEMINT_TOKEN_ADDRESS,
          functionName: "decimals",
          chainId: BSC_MAINNET_CHAIN_ID,
        }) as Promise<number>,
        this.getTotalSupply(),
        this.getRateInUSDT(),
        this.getReserves(),
      ]);

      const tokenInfo: SafeMintTokenInfo = {
        name,
        symbol,
        decimals,
        totalSupply,
        rateInUSDT,
        reserves,
      };

      console.log("✅ [SafeMintTokenService] Complete token info fetched:", {
        name,
        symbol,
        decimals,
        totalSupply: formatEther(totalSupply),
        rateInUSDT: formatEther(rateInUSDT),
        reserves: {
          tokenSupply: formatEther(reserves.tokenSupply),
          usdtBalance: formatEther(reserves.usdtBalance),
          blockTimestampLast: reserves.blockTimestampLast.toString(),
        },
      });

      return tokenInfo;
    } catch (error: any) {
      console.error(`❌ [SafeMintTokenService] Error fetching complete token info:`, error);
      throw new Error(
        `Failed to fetch complete token info: ${error.message || "Unknown error"}`
      );
    }
  },

  /**
   * Format token rate for display
   * @param rate - Rate in wei
   * @returns Formatted rate string
   */
  formatRate(rate: bigint): string {
    const rateNumber = parseFloat(formatEther(rate));
    return rateNumber.toFixed(6);
  },

  /**
   * Format token balance for display
   * @param balance - Balance in wei
   * @returns Formatted balance string
   */
  formatBalance(balance: bigint): string {
    const balanceNumber = parseFloat(formatEther(balance));
    return balanceNumber.toLocaleString(undefined, { 
      minimumFractionDigits: 2, 
      maximumFractionDigits: 6 
    });
  },
};

export default safeMintTokenService;

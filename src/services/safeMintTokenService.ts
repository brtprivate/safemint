import { readContract, writeContract } from "@wagmi/core";
import { config } from "../config/web3modal";
import { formatEther, formatUnits, parseUnits } from "viem";
import { bsc } from "viem/chains";
import type { Address } from "viem";

// SafeMint Token Configuration
export const SAFEMINT_TOKEN_ADDRESS =
  "0xC0746bd0380190B899440bC33C647cE2426C8cCb" as Address;
export const BSC_MAINNET_CHAIN_ID = 56;

// SafeMint Token ABI - minimal ABI for price fetching
export const SAFEMINT_TOKEN_ABI = [
  {
    inputs: [
      { internalType: "address", name: "_owner", type: "address" },
      { internalType: "address", name: "_usdtToken", type: "address" },
      { internalType: "address", name: "_safeMint", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [{ internalType: "address", name: "owner", type: "address" }],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  { inputs: [], name: "ReentrancyGuardReentrantCall", type: "error" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "user", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "selfMintAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "usdReceived",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "selfMintPrice",
        type: "uint256",
      },
    ],
    name: "Burned",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "user", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "usdAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "selfMintReceived",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "selfMintPrice",
        type: "uint256",
      },
    ],
    name: "Minted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newRate",
        type: "uint256",
      },
    ],
    name: "RateAdjusted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "InitialRate",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "spender", type: "address" },
    ],
    name: "allowance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "burnSlippage",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "usdAmount", type: "uint256" }],
    name: "buySelfMint",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "usdAmount", type: "uint256" },
      { internalType: "address", name: "toAddress", type: "address" },
    ],
    name: "buySelfMint",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getReserves",
    outputs: [
      { internalType: "uint256", name: "_reserve0", type: "uint256" },
      { internalType: "uint256", name: "_reserve1", type: "uint256" },
      { internalType: "uint256", name: "_blockTimestampLast", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isBuyOn",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isBuyOn_Off",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rateInUSDT",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenAmount", type: "uint256" }],
    name: "sellSelfMint",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "tokenAmount", type: "uint256" },
      { internalType: "address", name: "toAddress", type: "address" },
    ],
    name: "sellSelfMint",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "newaddress", type: "address" },
      { internalType: "bool", name: "flag", type: "bool" },
    ],
    name: "whiteList",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "whiteLists",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
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
      console.log(
        "🔄 [SafeMintTokenService] Fetching SafeMint token rate in USDT..."
      );
      const rate = (await readContract(config, {
        abi: SAFEMINT_TOKEN_ABI,
        address: SAFEMINT_TOKEN_ADDRESS,
        functionName: "rateInUSDT",
        chainId: BSC_MAINNET_CHAIN_ID,
      })) as bigint;

      console.log(
        `✅ [SafeMintTokenService] SafeMint rate in USDT: ${formatEther(rate)}`
      );
      return rate;
    } catch (error: any) {
      console.error(
        `❌ [SafeMintTokenService] Error fetching SafeMint rate:`,
        error
      );
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
      console.log(
        "🔄 [SafeMintTokenService] Fetching SafeMint token reserves..."
      );
      const [reserve0, reserve1, blockTimestampLast] = (await readContract(
        config,
        {
          abi: SAFEMINT_TOKEN_ABI,
          address: SAFEMINT_TOKEN_ADDRESS,
          functionName: "getReserves",
          chainId: BSC_MAINNET_CHAIN_ID,
        }
      )) as [bigint, bigint, bigint];

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
      console.error(
        `❌ [SafeMintTokenService] Error fetching SafeMint reserves:`,
        error
      );
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
      console.log(
        `🔄 [SafeMintTokenService] Fetching SafeMint balance for ${account}...`
      );
      const balance = (await readContract(config, {
        abi: SAFEMINT_TOKEN_ABI,
        address: SAFEMINT_TOKEN_ADDRESS,
        functionName: "balanceOf",
        args: [account],
        chainId: BSC_MAINNET_CHAIN_ID,
      })) as bigint;

      console.log(
        `✅ [SafeMintTokenService] SafeMint balance for ${account}: ${formatEther(
          balance
        )} SELFMINT`
      );
      return balance;
    } catch (error: any) {
      console.error(
        `❌ [SafeMintTokenService] Error fetching SafeMint balance:`,
        error
      );
      throw new Error(
        `Failed to fetch SafeMint balance: ${error.message || "Unknown error"}`
      );
    }
  },

  /**
   * Get SafeMint token allowance for a spender
   * @param owner - Token owner address
   * @param spender - Spender address (usually the staking contract)
   * @returns Allowance amount in wei
   */
  async getAllowance(owner: Address, spender: Address): Promise<bigint> {
    try {
      console.log(
        `🔄 [SafeMintTokenService] Fetching allowance for ${owner} → ${spender}...`
      );
      const allowance = (await readContract(config, {
        abi: SAFEMINT_TOKEN_ABI,
        address: SAFEMINT_TOKEN_ADDRESS,
        functionName: "allowance",
        args: [owner, spender],
        chainId: BSC_MAINNET_CHAIN_ID,
      })) as bigint;

      console.log(
        `✅ [SafeMintTokenService] Allowance: ${formatEther(allowance)} SMT`
      );
      return allowance;
    } catch (error: any) {
      console.error(
        `❌ [SafeMintTokenService] Error fetching allowance:`,
        error
      );
      throw new Error(
        `Failed to fetch allowance: ${error.message || "Unknown error"}`
      );
    }
  },

  /**
   * Approve SafeMint token spending for a spender
   * @param spender - Spender address (usually the staking contract)
   * @param amount - Amount to approve (in wei)
   * @param account - Wallet address to send the transaction from
   * @returns Transaction hash
   */
  async approve(
    spender: Address,
    amount: bigint,
    account: Address
  ): Promise<string> {
    try {
      console.log(
        `🔄 [SafeMintTokenService] Approving ${formatEther(
          amount
        )} SMT for ${spender}...`
      );

      const txHash = await writeContract(config, {
        abi: SAFEMINT_TOKEN_ABI,
        address: SAFEMINT_TOKEN_ADDRESS,
        functionName: "approve",
        args: [spender, amount],
        chain: bsc,
        account: account,
      });

      console.log(
        `✅ [SafeMintTokenService] Approval transaction successful: ${txHash}`
      );
      return txHash;
    } catch (error: any) {
      console.error(`❌ [SafeMintTokenService] Error approving tokens:`, error);
      throw new Error(
        `Failed to approve SafeMint tokens: ${error.message || "Unknown error"}`
      );
    }
  },

  /**
   * Get SafeMint token total supply
   * @returns Total supply in wei
   */
  async getTotalSupply(): Promise<bigint> {
    try {
      console.log(
        "🔄 [SafeMintTokenService] Fetching SafeMint total supply..."
      );
      const totalSupply = (await readContract(config, {
        abi: SAFEMINT_TOKEN_ABI,
        address: SAFEMINT_TOKEN_ADDRESS,
        functionName: "totalSupply",
        chainId: BSC_MAINNET_CHAIN_ID,
      })) as bigint;

      console.log(
        `✅ [SafeMintTokenService] SafeMint total supply: ${formatEther(
          totalSupply
        )} SELFMINT`
      );
      return totalSupply;
    } catch (error: any) {
      console.error(
        `❌ [SafeMintTokenService] Error fetching SafeMint total supply:`,
        error
      );
      throw new Error(
        `Failed to fetch SafeMint total supply: ${
          error.message || "Unknown error"
        }`
      );
    }
  },

  /**
   * Get complete SafeMint token information
   * @returns Complete token info object
   */
  async getTokenInfo(): Promise<SafeMintTokenInfo> {
    try {
      console.log(
        "🔄 [SafeMintTokenService] Fetching complete SafeMint token info..."
      );

      // Fetch all token data in parallel
      const [name, symbol, decimals, totalSupply, rateInUSDT, reserves] =
        await Promise.all([
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
      console.error(
        `❌ [SafeMintTokenService] Error fetching complete token info:`,
        error
      );
      throw new Error(
        `Failed to fetch complete token info: ${
          error.message || "Unknown error"
        }`
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
  async sellSelfMint(tokenAmount: string, account: Address): Promise<string> {
    try {
      console.log(
        `🔄 [SafeMintTokenService] Selling ${tokenAmount} SMT (plain amount) for USDT...`
      );

      // Get SafeMint token decimals
      const decimals = await readContract(config, {
        abi: SAFEMINT_TOKEN_ABI,
        address: SAFEMINT_TOKEN_ADDRESS,
        functionName: "decimals",
        chainId: BSC_MAINNET_CHAIN_ID,
      });
      console.log("🔍 [SafeMintTokenService] SafeMint Token Decimals:", decimals);

      // Round the token amount to the token's decimal places
      const roundedTokenAmount = parseFloat(tokenAmount).toFixed(Number(decimals));
      console.log("🔍 [SafeMintTokenService] Rounded token amount:", roundedTokenAmount);

      // Convert to wei
      const tokenAmountInWei = parseUnits(roundedTokenAmount, Number(decimals));
      console.log("🔍 [SafeMintTokenService] Token amount in wei:", tokenAmountInWei.toString());

      // Check allowance for the SafeMint token contract to spend tokens
      const allowance = await this.getAllowance(account, SAFEMINT_TOKEN_ADDRESS);
      console.log(
        `🔍 [SafeMintTokenService] Current allowance: ${formatUnits(allowance, Number(decimals))} SMT`
      );

      // Approve tokens if allowance is insufficient
      // if (allowance < tokenAmountInWei) {
      //   console.log(
      //     `🔄 [SafeMintTokenService] Approving ${roundedTokenAmount} SMT for ${SAFEMINT_TOKEN_ADDRESS}...`
      //   );
      //   const approvalTxHash = await this.approve(
      //     SAFEMINT_TOKEN_ADDRESS,
      //     roundedTokenAmount,
      //     account
      //   );
      //   console.log(
      //     `✅ [SafeMintTokenService] Approval transaction successful: ${approvalTxHash}`
      //   );

        // Wait for approval confirmation
      //   await new Promise(resolve => setTimeout(resolve, 2000));
      // } else {
      //   console.log("✅ [SafeMintTokenService] Sufficient allowance, no approval needed.");
      // }

      // Execute sellSelfMint transaction
      const txHash = await writeContract(config, {
        abi: SAFEMINT_TOKEN_ABI,
        address: SAFEMINT_TOKEN_ADDRESS,
        functionName: "sellSelfMint",
        args: [tokenAmountInWei],
        chain: bsc,
        account: account,
        gas: BigInt(500000), // Manual gas limit to avoid estimation issues
      });

      console.log(
        `✅ [SafeMintTokenService] SellSelfMint transaction successful: ${txHash}`
      );
      return txHash;
    } catch (error: any) {
      console.error(`❌ [SafeMintTokenService] Error selling SelfMint tokens:`, error);
      throw new Error(
        `Failed to sell SelfMint tokens: ${error.message || "Unknown error"}`
      );
    }
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
      maximumFractionDigits: 6,
    });
  },
};

export default safeMintTokenService;

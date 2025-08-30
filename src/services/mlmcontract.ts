import { readContract, writeContract } from '@wagmi/core';
import { config } from '../config/web3modal';
import { polygon } from 'wagmi/chains';
import type { Address } from 'viem';

// MLM Contract configuration - Polygon
export const MLM_CONTRACT_ADDRESS = '0x8F70b18Ea189ff5E05C6862481EdB4949a487513' as Address;
export const SELFMINT_CONTRACT_ADDRESS = '0x9e187342c4234c9ee38de9df3b730bf0be8e8f4f' as Address;
export const POLYGON_CHAIN_ID = 137;

// USDT Contract configuration (Polygon)
export const USDT_CONTRACT_ADDRESS = '0xc2132D05D31c914a87C6611C10748AEb04B58e8F' as Address;

// USDT Contract ABI (minimal for approval and balance)
export const USDT_ABI = [
  {
    constant: false,
    inputs: [
      { name: "_spender", type: "address" },
      { name: "_value", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ name: "", type: "bool" }],
    type: "function",
  },
  {
    constant: true,
    inputs: [{ name: "_owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "balance", type: "uint256" }],
    type: "function",
  },
] as const;

// INOUT_TOKEN Contract ABI
export const INOUT_TOKEN_ABI = [
  {
    "inputs": [{"internalType": "address", "name": "_usdtToken", "type": "address"}],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [{"internalType": "address", "name": "owner", "type": "address"}],
    "name": "OwnableInvalidOwner",
    "type": "error"
  },
  {
    "inputs": [{"internalType": "address", "name": "account", "type": "address"}],
    "name": "OwnableUnauthorizedAccount",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ReentrancyGuardReentrantCall",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {"indexed": true, "internalType": "address", "name": "owner", "type": "address"},
      {"indexed": true, "internalType": "address", "name": "spender", "type": "address"},
      {"indexed": false, "internalType": "uint256", "name": "value", "type": "uint256"}
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {"indexed": true, "internalType": "address", "name": "user", "type": "address"},
      {"indexed": false, "internalType": "uint256", "name": "inOutAmount", "type": "uint256"},
      {"indexed": false, "internalType": "uint256", "name": "usdReceived", "type": "uint256"},
      {"indexed": false, "internalType": "uint256", "name": "inOutPrice", "type": "uint256"}
    ],
    "name": "Burned",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {"indexed": true, "internalType": "address", "name": "user", "type": "address"},
      {"indexed": false, "internalType": "uint256", "name": "usdAmount", "type": "uint256"},
      {"indexed": false, "internalType": "uint256", "name": "inOutReceived", "type": "uint256"},
      {"indexed": false, "internalType": "uint256", "name": "inOutPrice", "type": "uint256"}
    ],
    "name": "Minted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {"indexed": true, "internalType": "address", "name": "previousOwner", "type": "address"},
      {"indexed": true, "internalType": "address", "name": "newOwner", "type": "address"}
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [{"indexed": false, "internalType": "uint256", "name": "newRate", "type": "uint256"}],
    "name": "RateAdjusted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {"indexed": true, "internalType": "address", "name": "from", "type": "address"},
      {"indexed": true, "internalType": "address", "name": "to", "type": "address"},
      {"indexed": false, "internalType": "uint256", "name": "value", "type": "uint256"}
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "InitialRate",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {"internalType": "address", "name": "owner", "type": "address"},
      {"internalType": "address", "name": "spender", "type": "address"}
    ],
    "name": "allowance",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {"internalType": "address", "name": "spender", "type": "address"},
      {"internalType": "uint256", "name": "amount", "type": "uint256"}
    ],
    "name": "approve",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "nonpayable",
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
    "name": "burnSlippage",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{"internalType": "uint256", "name": "usdAmount", "type": "uint256"}],
    "name": "buyInout",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {"internalType": "uint256", "name": "usdAmount", "type": "uint256"},
      {"internalType": "address", "name": "toAddress", "type": "address"}
    ],
    "name": "buyInout",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "nonpayable",
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
    "name": "isBuyOn",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "isBuyOn_Off",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "nonpayable",
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
    "name": "owner",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "rateInUSDT",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{"internalType": "uint256", "name": "tokenAmount", "type": "uint256"}],
    "name": "sellInout",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {"internalType": "uint256", "name": "tokenAmount", "type": "uint256"},
      {"internalType": "address", "name": "toAddress", "type": "address"}
    ],
    "name": "sellInout",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [{"internalType": "string", "name": "", "type": "string"}],
    "stateMutability": "pure",
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
    "inputs": [
      {"internalType": "address", "name": "recipient", "type": "address"},
      {"internalType": "uint256", "name": "amount", "type": "uint256"}
    ],
    "name": "transfer",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {"internalType": "address", "name": "sender", "type": "address"},
      {"internalType": "address", "name": "recipient", "type": "address"},
      {"internalType": "uint256", "name": "amount", "type": "uint256"}
    ],
    "name": "transferFrom",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{"internalType": "address", "name": "newOwner", "type": "address"}],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {"internalType": "address", "name": "newaddress", "type": "address"},
      {"internalType": "bool", "name": "flag", "type": "bool"}
    ],
    "name": "whiteList",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{"internalType": "address", "name": "", "type": "address"}],
    "name": "whiteLists",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
  }
] as const;

// Contract interaction functions
export const mlmContractInteractions = {
  /**
   * Approve USDT spending for the MLM contract
   * @param amount - Amount to approve (in wei)
   * @param account - Wallet address to send the transaction from
   * @returns Transaction hash
   */
  async approveUSDT(amount: bigint, account: Address): Promise<string> {
    try {
      console.log(`Approving ${amount} USDT for MLM contract ${MLM_CONTRACT_ADDRESS}`);
      
      const txHash = await writeContract(config, {
        abi: USDT_ABI,
        address: USDT_CONTRACT_ADDRESS,
        functionName: 'approve',
        args: [MLM_CONTRACT_ADDRESS, amount],
        chain: polygon,
        account: account,
      });
      
      console.log('USDT approval transaction hash:', txHash);
      return txHash;
    } catch (error: any) {
      console.error(`Error approving USDT: ${error.message || error}`);
      throw new Error(`Failed to approve USDT: ${error.message || 'Unknown error'}`);
    }
  },

  /**
   * Get USDT balance for an address
   * @param account - Wallet address
   * @returns USDT balance in wei
   */
  async getUSDTBalance(account: Address): Promise<bigint> {
    try {
      return await readContract(config, {
        abi: USDT_ABI,
        address: USDT_CONTRACT_ADDRESS,
        functionName: 'balanceOf',
        args: [account],
        chainId: POLYGON_CHAIN_ID,
      }) as bigint;
    } catch (error: any) {
      console.error(`Error fetching USDT balance: ${error.message || error}`);
      throw new Error(`Failed to fetch USDT balance: ${error.message || 'Unknown error'}`);
    }
  },

  /**
   * Buy INOUT tokens
   * @param usdAmount - Amount of USDT to spend
   * @param account - Wallet address to send the transaction from
   * @param toAddress - Optional address to receive tokens
   * @returns Transaction hash
   */
  async buyInout(usdAmount: bigint, account: Address, toAddress?: Address): Promise<string> {
    try {
      console.log(`Buying INOUT with ${usdAmount} USDT`);
      
      const txHash = await writeContract(config, {
        abi: INOUT_TOKEN_ABI,
        address: MLM_CONTRACT_ADDRESS,
        functionName: 'buyInout',
        args: toAddress ? [usdAmount, toAddress] : [usdAmount],
        chain: polygon,
        account: account,
      });
      
      console.log('Buy INOUT transaction hash:', txHash);
      return txHash;
    } catch (error: any) {
      console.error(`Error buying INOUT: ${error.message || error}`);
      throw new Error(`Failed to buy INOUT: ${error.message || 'Unknown error'}`);
    }
  },

  /**
   * Sell INOUT tokens
   * @param tokenAmount - Amount of INOUT tokens to sell
   * @param account - Wallet address to send the transaction from
   * @param toAddress - Optional address to receive USDT
   * @returns Transaction hash
   */
  async sellInout(tokenAmount: bigint, account: Address, toAddress?: Address): Promise<string> {
    try {
      console.log(`Selling ${tokenAmount} INOUT tokens`);
      
      const txHash = await writeContract(config, {
        abi: INOUT_TOKEN_ABI,
        address: MLM_CONTRACT_ADDRESS,
        functionName: 'sellInout',
        args: toAddress ? [tokenAmount, toAddress] : [tokenAmount],
        chain: polygon,
        account: account,
      });
      
      console.log('Sell INOUT transaction hash:', txHash);
      return txHash;
    } catch (error: any) {
      console.error(`Error selling INOUT: ${error.message || error}`);
      throw new Error(`Failed to sell INOUT: ${error.message || 'Unknown error'}`);
    }
  },

  /**
   * Get INOUT token balance
   * @param account - Wallet address
   * @returns INOUT token balance in wei
   */
  async getInoutBalance(account: Address): Promise<bigint> {
    try {
      return await readContract(config, {
        abi: INOUT_TOKEN_ABI,
        address: MLM_CONTRACT_ADDRESS,
        functionName: 'balanceOf',
        args: [account],
        chainId: POLYGON_CHAIN_ID,
      }) as bigint;
    } catch (error: any) {
      console.error(`Error fetching INOUT balance: ${error.message || error}`);
      throw new Error(`Failed to fetch INOUT balance: ${error.message || 'Unknown error'}`);
    }
  },

  /**
   * Get current INOUT rate in USDT
   * @returns Current rate
   */
  async getRateInUSDT(): Promise<bigint> {
    try {
      return await readContract(config, {
        abi: INOUT_TOKEN_ABI,
        address: MLM_CONTRACT_ADDRESS,
        functionName: 'rateInUSDT',
        chainId: POLYGON_CHAIN_ID,
      }) as bigint;
    } catch (error: any) {
      console.error(`Error fetching rate: ${error.message || error}`);
      throw new Error(`Failed to fetch rate: ${error.message || 'Unknown error'}`);
    }
  },

  /**
   * Get contract reserves
   * @returns Object containing reserve0, reserve1, and blockTimestampLast
   */
  async getReserves(): Promise<{ reserve0: bigint; reserve1: bigint; blockTimestampLast: bigint }> {
    try {
      const [reserve0, reserve1, blockTimestampLast] = await readContract(config, {
        abi: INOUT_TOKEN_ABI,
        address: MLM_CONTRACT_ADDRESS,
        functionName: 'getReserves',
        chainId: POLYGON_CHAIN_ID,
      }) as [bigint, bigint, bigint];
      
      return { reserve0, reserve1, blockTimestampLast };
    } catch (error: any) {
      console.error(`Error fetching reserves: ${error.message || error}`);
      throw new Error(`Failed to fetch reserves: ${error.message || 'Unknown error'}`);
    }
  },

  /**
   * Check if buy is enabled
   * @returns Buy status
   */
  async isBuyOn(): Promise<boolean> {
    try {
      return await readContract(config, {
        abi: INOUT_TOKEN_ABI,
        address: MLM_CONTRACT_ADDRESS,
        functionName: 'isBuyOn',
        chainId: POLYGON_CHAIN_ID,
      }) as boolean;
    } catch (error: any) {
      console.error(`Error checking buy status: ${error.message || error}`);
      throw new Error(`Failed to check buy status: ${error.message || 'Unknown error'}`);
    }
  },

  /**
   * Check if address is whitelisted
   * @param address - Address to check
   * @returns Whitelist status
   */
  async isWhitelisted(address: Address): Promise<boolean> {
    try {
      return await readContract(config, {
        abi: INOUT_TOKEN_ABI,
        address: MLM_CONTRACT_ADDRESS,
        functionName: 'whiteLists',
        args: [address],
        chainId: POLYGON_CHAIN_ID,
      }) as boolean;
    } catch (error: any) {
      console.error(`Error checking whitelist status: ${error.message || error}`);
      throw new Error(`Failed to check whitelist status: ${error.message || 'Unknown error'}`);
    }
  }
};

// Export individual functions for convenience
export const {
  approveUSDT,
  getUSDTBalance,
  buyInout,
  sellInout,
  getInoutBalance,
  getRateInUSDT,
  getReserves,
  isBuyOn,
  isWhitelisted,
} = mlmContractInteractions;

// Export as contractInteractions for backward compatibility with Home.jsx
export const contractInteractions = {
  approveUSDT: mlmContractInteractions.approveUSDT,
  getUSDTBalance: mlmContractInteractions.getUSDTBalance,
  getBalance: mlmContractInteractions.getInoutBalance, // Alias for getInoutBalance
  getRateInUSDT: mlmContractInteractions.getRateInUSDT,
  isBuyEnabled: mlmContractInteractions.isBuyOn, // Alias for isBuyOn
  getReserves: mlmContractInteractions.getReserves,
  isWhitelisted: mlmContractInteractions.isWhitelisted,
  buySelfMint: mlmContractInteractions.buyInout, // Alias for buyInout
  sellSelfMint: mlmContractInteractions.sellInout, // Alias for sellInout
};

import { readContract, writeContract } from '@wagmi/core';
import { config } from '../config/web3modal';
import { polygon } from 'wagmi/chains';
import type { Address } from 'viem';

// Staking Contract configuration - Polygon Mainnet
export const STAKING_CONTRACT_ADDRESS = '0xFc6d1717F6173508FA97549C13B4bF58FDBCfC39' as Address;
export const POLYGON_CHAIN_ID = 137;

// Token addresses on Polygon
export const TOKEN_ADDRESS = '0x8F70b18Ea189ff5E05C6862481EdB4949a487513' as Address; // INOUT token
export const USD_ADDRESS = '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063' as Address; // USDT on Polygon
export const SHARE_ADDRESS = '0xA53645620F3F055496E14f7AA081F0ca1d6Ce267' as Address;

// Staking Contract ABI
export const STAKING_ABI = [
  {
    "inputs": [{ "internalType": "address", "name": "_owner", "type": "address" }],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": false, "internalType": "uint256", "name": "stacke_Id", "type": "uint256" },
      { "indexed": false, "internalType": "address", "name": "user", "type": "address" },
      { "indexed": false, "internalType": "uint256", "name": "growthRate", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "timeStamp", "type": "uint256" }
    ],
    "name": "deposit_Satke",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [{ "indexed": false, "internalType": "uint256", "name": "stacke_Id", "type": "uint256" }],
    "name": "forfeit_Ev",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": false, "internalType": "address", "name": "from_user", "type": "address" },
      { "indexed": false, "internalType": "address", "name": "to_user", "type": "address" },
      { "indexed": false, "internalType": "uint256", "name": "level", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "payAmount", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "types", "type": "uint256" }
    ],
    "name": "income_Ev",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": false, "internalType": "address", "name": "_user", "type": "address" },
      { "indexed": false, "internalType": "address", "name": "referralAddress", "type": "address" }
    ],
    "name": "regUserEv",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": false, "internalType": "address", "name": "_user", "type": "address" },
      { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }
    ],
    "name": "withdrwal_Stacking",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "DAO_Count",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "DAO_TotalApprovals",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "DAO_VoteIsOn",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "DAO_Voting",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "VotingIsOn",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "_user", "type": "address" }],
    "name": "activeUser",
    "outputs": [{ "internalType": "bool", "name": "active", "type": "bool" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "allStake",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "user", "type": "address" }],
    "name": "avUnStake",
    "outputs": [{ "internalType": "uint256", "name": "avGh", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "name": "bonusInfos",
    "outputs": [
      { "internalType": "uint256", "name": "referralGains", "type": "uint256" },
      { "internalType": "uint256", "name": "levelGains", "type": "uint256" },
      { "internalType": "uint256", "name": "growthGains", "type": "uint256" },
      { "internalType": "uint256", "name": "teamGrowthGains", "type": "uint256" },
      { "internalType": "uint256", "name": "leaderGains", "type": "uint256" },
      { "internalType": "uint256", "name": "developmentGains", "type": "uint256" },
      { "internalType": "uint256", "name": "teamLevelStake", "type": "uint256" },
      { "internalType": "uint256", "name": "lapsTeamStake", "type": "uint256" },
      { "internalType": "uint256", "name": "totalStake", "type": "uint256" },
      { "internalType": "uint256", "name": "totalUnStake", "type": "uint256" },
      { "internalType": "uint256", "name": "totalWithdrwan", "type": "uint256" },
      { "internalType": "uint256", "name": "inOutBuy", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "boostLevel",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "uint256", "name": "usdAmount", "type": "uint256" }],
    "name": "buyToken",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "userAddress", "type": "address" }],
    "name": "directUser",
    "outputs": [{ "internalType": "address[]", "name": "referrals", "type": "address[]" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "contractAdd", "type": "address" },
      { "internalType": "uint256", "name": "runTime", "type": "uint256" },
      { "internalType": "bool", "name": "looprun", "type": "bool" }
    ],
    "name": "fetchOldData",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "userAddress", "type": "address" }],
    "name": "findLeaderUser",
    "outputs": [
      { "internalType": "address[6]", "name": "ledAdd", "type": "address[6]" },
      { "internalType": "address[3]", "name": "devAdd", "type": "address[3]" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }],
    "name": "getPrice",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "levelDist",
    "outputs": [{ "internalType": "uint8[21]", "name": "levelPer", "type": "uint8[21]" }],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "userAddress", "type": "address" },
      { "internalType": "uint256", "name": "Level", "type": "uint256" }
    ],
    "name": "makeLeader",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "amount", "type": "uint256" },
      { "internalType": "address", "name": "userAddress", "type": "address" }
    ],
    "name": "makeStake",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }],
    "name": "makeUnstake",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "_user", "type": "address" }],
    "name": "matureOrder",
    "outputs": [
      { "internalType": "uint256", "name": "activeOrder", "type": "uint256" },
      { "internalType": "uint256", "name": "lastOrder", "type": "uint256" },
      { "internalType": "uint256", "name": "unlock_Order", "type": "uint256" },
      { "internalType": "uint256", "name": "mature_Order", "type": "uint256" },
      { "internalType": "uint256", "name": "activeLimit", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "user", "type": "address" }],
    "name": "rankQualify",
    "outputs": [
      { "internalType": "uint256", "name": "directs", "type": "uint256" },
      { "internalType": "uint256", "name": "level", "type": "uint256" },
      { "internalType": "uint256", "name": "strongTeam", "type": "uint256" },
      { "internalType": "uint256", "name": "totalTeam", "type": "uint256" },
      { "internalType": "uint256", "name": "fLevel", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "redeemRate",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "referral", "type": "address" }],
    "name": "regUser",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "releaseContract",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "uint256[2]", "name": "_growthRate", "type": "uint256[2]" }],
    "name": "setGrowths",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "uint256[]", "name": "_levelSatke", "type": "uint256[]" }],
    "name": "setLevelStakes",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_teamDepth", "type": "uint256" },
      { "internalType": "uint256", "name": "_redeemRate", "type": "uint256" },
      { "internalType": "bool", "name": "_boostLevel", "type": "bool" }
    ],
    "name": "setPrams",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "_shareAddress", "type": "address" }],
    "name": "setShareAddress",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "shareAddress",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "uint256", "name": "stake_Order", "type": "uint256" }],
    "name": "stakeGrowth",
    "outputs": [{ "internalType": "uint256", "name": "orderGrowth", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "name": "stakeInfos",
    "outputs": [
      { "internalType": "address", "name": "ownerAddress", "type": "address" },
      { "internalType": "uint256", "name": "orderValue", "type": "uint256" },
      { "internalType": "uint256", "name": "orderGrowth", "type": "uint256" },
      { "internalType": "uint256", "name": "orderID", "type": "uint256" },
      { "internalType": "uint256", "name": "orderTime", "type": "uint256" },
      { "internalType": "uint256", "name": "isMature", "type": "uint256" },
      { "internalType": "bool", "name": "isComplete", "type": "bool" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "teamDepth",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "user", "type": "address" },
      { "internalType": "uint256", "name": "totalTPR", "type": "uint256" }
    ],
    "name": "teamGrowthTime",
    "outputs": [{ "internalType": "uint256", "name": "growthTime", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "tokenAddress",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "_user", "type": "address" }],
    "name": "totalGains",
    "outputs": [{ "internalType": "uint256", "name": "total", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalReg",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "userAddress", "type": "address" },
      { "internalType": "bool", "name": "isMatureOrd", "type": "bool" }
    ],
    "name": "totalRemainTPR",
    "outputs": [
      { "internalType": "uint256", "name": "totalTPR", "type": "uint256" },
      { "internalType": "uint256", "name": "growthTPR", "type": "uint256" },
      { "internalType": "uint256", "name": "forfietOrder", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "_user", "type": "address" }],
    "name": "unStakePotential",
    "outputs": [
      { "internalType": "uint256", "name": "remainLimit", "type": "uint256" },
      { "internalType": "uint256", "name": "growthLimit", "type": "uint256" },
      { "internalType": "uint256", "name": "active_Order", "type": "uint256" },
      { "internalType": "uint256", "name": "lastOrder", "type": "uint256" },
      { "internalType": "uint256", "name": "unlock_Order", "type": "uint256" },
      { "internalType": "uint256", "name": "mature_Order", "type": "uint256" },
      { "internalType": "uint256", "name": "totGain", "type": "uint256" },
      { "internalType": "uint256", "name": "OrderValue", "type": "uint256" },
      { "internalType": "uint256", "name": "orderGrowth", "type": "uint256" },
      { "internalType": "uint256", "name": "teamGrowth", "type": "uint256" },
      { "internalType": "uint256", "name": "teamLaps", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "usdAddress",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "name": "userInfos",
    "outputs": [
      { "internalType": "address", "name": "referral", "type": "address" },
      { "internalType": "uint256", "name": "totalTeam", "type": "uint256" },
      { "internalType": "uint256", "name": "strongTeam", "type": "uint256" },
      { "internalType": "uint256", "name": "userLevel", "type": "uint256" },
      { "internalType": "uint256", "name": "lastStake", "type": "uint256" },
      { "internalType": "uint256", "name": "forfeitStake", "type": "uint256" },
      { "internalType": "uint256", "name": "harvestTime", "type": "uint256" },
      { "internalType": "bool", "name": "isNewStake", "type": "bool" },
      { "internalType": "bool", "name": "isDAO", "type": "bool" },
      { "internalType": "bool", "name": "joined", "type": "bool" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "user", "type": "address" }],
    "name": "userLiveStatus",
    "outputs": [
      { "internalType": "uint256", "name": "directs", "type": "uint256" },
      { "internalType": "uint256", "name": "level", "type": "uint256" },
      { "internalType": "uint256", "name": "strongLeg", "type": "uint256" },
      { "internalType": "uint256", "name": "totalTeam", "type": "uint256" },
      { "internalType": "uint256", "name": "growthVol", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "user", "type": "address" }],
    "name": "userSelfUpdate",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "user", "type": "address" },
      { "internalType": "uint256", "name": "stakeCount", "type": "uint256" }
    ],
    "name": "userStakeView",
    "outputs": [
      { "internalType": "uint256", "name": "totalCount", "type": "uint256" },
      {
        "components": [
          { "internalType": "address", "name": "ownerAddress", "type": "address" },
          { "internalType": "uint256", "name": "orderValue", "type": "uint256" },
          { "internalType": "uint256", "name": "orderGrowth", "type": "uint256" },
          { "internalType": "uint256", "name": "orderID", "type": "uint256" },
          { "internalType": "uint256", "name": "orderTime", "type": "uint256" },
          { "internalType": "uint256", "name": "isMature", "type": "uint256" },
          { "internalType": "bool", "name": "isComplete", "type": "bool" }
        ],
        "internalType": "struct SELFMINT_STAKING.order",
        "name": "stakeInfo",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
] as const;

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

// Interfaces for complex return types
interface BonusInfo {
  referralGains: bigint;
  levelGains: bigint;
  growthGains: bigint;
  teamGrowthGains: bigint;
  leaderGains: bigint;
  developmentGains: bigint;
  teamLevelStake: bigint;
  lapsTeamStake: bigint;
  totalStake: bigint;
  totalUnStake: bigint;
  totalWithdrawn: bigint;
  inOutBuy: bigint;
}

interface UserInfo {
  referral: Address;
  totalTeam: bigint;
  strongTeam: bigint;
  userLevel: bigint;
  lastStake: bigint;
  forfeitStake: bigint;
  harvestTime: bigint;
  isNewStake: boolean;
  isDAO: boolean;
  joined: boolean;
}

interface StakeInfo {
  ownerAddress: Address;
  orderValue: bigint;
  orderGrowth: bigint;
  orderID: bigint;
  orderTime: bigint;
  isMature: bigint;
  isComplete: boolean;
}

interface UserStakeView {
  totalCount: bigint;
  stakeInfo: StakeInfo;
}

interface MatureOrder {
  activeOrder: bigint;
  lastOrder: bigint;
  unlock_Order: bigint;
  mature_Order: bigint;
  activeLimit: bigint;
}

interface RankQualify {
  directs: bigint;
  level: bigint;
  strongTeam: bigint;
  totalTeam: bigint;
  fLevel: bigint;
}

interface UnStakePotential {
  remainLimit: bigint;
  growthLimit: bigint;
  active_Order: bigint;
  lastOrder: bigint;
  unlock_Order: bigint;
  mature_Order: bigint;
  totGain: bigint;
  OrderValue: bigint;
  orderGrowth: bigint;
  teamGrowth: bigint;
  teamLaps: bigint;
}

interface TotalRemainTPR {
  totalTPR: bigint;
  growthTPR: bigint;
  forfietOrder: bigint;
}

interface FindLeaderUser {
  ledAdd: [Address, Address, Address, Address, Address, Address];
  devAdd: [Address, Address, Address];
}

// Staking contract interaction functions
export const stakingInteractions = {
  /**
   * Approve USDT spending for the staking contract
   * @param amount - Amount to approve (in wei)
   * @param account - Wallet address to send the transaction from
   * @returns Transaction hash
   */
  async approveUSDT(amount: bigint, account: Address): Promise<string> {
    try {
      console.log(`Approving ${amount} USDT for staking contract ${STAKING_CONTRACT_ADDRESS}`);
      
      const txHash = await writeContract(config, {
        abi: USDT_ABI,
        address: USD_ADDRESS,
        functionName: 'approve',
        args: [STAKING_CONTRACT_ADDRESS, amount],
        chain: polygon,
        account: account,
        // Add gas estimation to prevent "Cannot destructure property 'gasLimit'" error
        gas: undefined, // Let viem handle gas estimation
      });
      
      console.log('USDT approval transaction hash:', txHash);
      return txHash;
    } catch (error: any) {
      console.error(`Error approving USDT:`, error);
      
      // Handle specific viem/wagmi errors
      if (error.message?.includes('gasLimit') || error.message?.includes('Cannot destructure')) {
        console.error('Gas estimation error detected. This may be due to network issues or contract configuration.');
        throw new Error('Network configuration error. Please ensure you are connected to Polygon and try again.');
      }
      
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
        address: USD_ADDRESS,
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
   * Register a user with a referral
   * @param referral - Referral address
   * @returns Transaction hash
   */
  async regUser(referral: Address): Promise<string> {
    try {
      const txHash = await writeContract(config, {
        abi: STAKING_ABI,
        address: STAKING_CONTRACT_ADDRESS,
        functionName: 'regUser',
        args: [referral],
        chain: polygon,
        account: referral,
      });
      return txHash;
    } catch (error: any) {
      console.error(`Error registering user: ${error.message || error}`);
      throw new Error(`Failed to register user: ${error.message || 'Unknown error'}`);
    }
  },

  /**
   * Buy tokens using USDT
   * @param usdAmount - Amount of USDT to spend (in wei)
   * @param account - Wallet address to send the transaction from
   * @returns Transaction hash
   */
  async buyToken(usdAmount: bigint, account: Address): Promise<string> {
    try {
      const txHash = await writeContract(config, {
        abi: STAKING_ABI,
        address: STAKING_CONTRACT_ADDRESS,
        functionName: 'buyToken',
        args: [usdAmount],
        chain: polygon,
        account: account,
      });
      return txHash;
    } catch (error: any) {
      console.error(`Error buying tokens: ${error.message || error}`);
      throw new Error(`Failed to buy tokens: ${error.message || 'Unknown error'}`);
    }
  },

  /**
   * Stake tokens
   * @param amount - Amount to stake (in wei)
   * @param userAddress - Address to stake for
   * @returns Transaction hash
   */
  async makeStake(amount: bigint, userAddress: Address): Promise<string> {
    try {
      const txHash = await writeContract(config, {
        abi: STAKING_ABI,
        address: STAKING_CONTRACT_ADDRESS,
        functionName: 'makeStake',
        args: [amount, userAddress],
        chain: polygon,
        account: userAddress,
      });
      return txHash;
    } catch (error: any) {
      console.error(`Error staking tokens: ${error.message || error}`);
      throw new Error(`Failed to stake tokens: ${error.message || 'Unknown error'}`);
    }
  },

  /**
   * Unstake tokens
   * @param amount - Amount to unstake (in wei)
   * @param account - Wallet address
   * @returns Transaction hash
   */
  async makeUnstake(amount: bigint, account: Address): Promise<string> {
    try {
      const txHash = await writeContract(config, {
        abi: STAKING_ABI,
        address: STAKING_CONTRACT_ADDRESS,
        functionName: 'makeUnstake',
        args: [amount],
        chain: polygon,
        account: account,
      });
      return txHash;
    } catch (error: any) {
      console.error(`Error unstaking tokens: ${error.message || error}`);
      throw new Error(`Failed to unstake tokens: ${error.message || 'Unknown error'}`);
    }
  },

  /**
   * Get user stake information
   * @param user - User address
   * @param stakeCount - Stake index to view
   * @returns Total count and stake info
   */
  async userStakeView(user: Address, stakeCount: bigint): Promise<UserStakeView> {
    try {
      const [totalCount, stakeInfo] = await readContract(config, {
        abi: STAKING_ABI,
        address: STAKING_CONTRACT_ADDRESS,
        functionName: 'userStakeView',
        args: [user, stakeCount],
        chainId: POLYGON_CHAIN_ID,
      }) as readonly [bigint, StakeInfo];
      
      return {
        totalCount,
        stakeInfo,
      };
    } catch (error: any) {
      console.error(`Error fetching stake info: ${error.message || error}`);
      throw new Error(`Failed to fetch stake info: ${error.message || 'Unknown error'}`);
    }
  },

  /**
   * Get bonus information for a user
   * @param user - User address
   * @returns Bonus information
   */
  async getBonusInfo(user: Address): Promise<BonusInfo> {
    try {
      const result = await readContract(config, {
        abi: STAKING_ABI,
        address: STAKING_CONTRACT_ADDRESS,
        functionName: 'bonusInfos',
        args: [user],
        chainId: POLYGON_CHAIN_ID,
      }) as [bigint, bigint, bigint, bigint, bigint, bigint, bigint, bigint, bigint, bigint, bigint, bigint];
      
      return {
        referralGains: result[0],
        levelGains: result[1],
        growthGains: result[2],
        teamGrowthGains: result[3],
        leaderGains: result[4],
        developmentGains: result[5],
        teamLevelStake: result[6],
        lapsTeamStake: result[7],
        totalStake: result[8],
        totalUnStake: result[9],
        totalWithdrawn: result[10],
        inOutBuy: result[11],
      };
    } catch (error: any) {
      console.error(`Error fetching bonus info: ${error.message || error}`);
      throw new Error(`Failed to fetch bonus info: ${error.message || 'Unknown error'}`);
    }
  },

  /**
   * Get user information
   * @param user - User address
   * @returns User information
   */
  async getUserInfo(user: Address): Promise<UserInfo> {
    try {
      const result = await readContract(config, {
        abi: STAKING_ABI,
        address: STAKING_CONTRACT_ADDRESS,
        functionName: 'userInfos',
        args: [user],
        chainId: POLYGON_CHAIN_ID,
      }) as [Address, bigint, bigint, bigint, bigint, bigint, bigint, boolean, boolean, boolean];
      
      return {
        referral: result[0],
        totalTeam: result[1],
        strongTeam: result[2],
        userLevel: result[3],
        lastStake: result[4],
        forfeitStake: result[5],
        harvestTime: result[6],
        isNewStake: result[7],
        isDAO: result[8],
        joined: result[9],
      };
    } catch (error: any) {
      console.error(`Error fetching user info: ${error.message || error}`);
      throw new Error(`Failed to fetch user info: ${error.message || 'Unknown error'}`);
    }
  },

  /**
   * Get mature order information
   * @param user - User address
   * @returns Mature order details
   */
  async getMatureOrder(user: Address): Promise<MatureOrder> {
    try {
      const [activeOrder, lastOrder, unlock_Order, mature_Order, activeLimit] = await readContract(config, {
        abi: STAKING_ABI,
        address: STAKING_CONTRACT_ADDRESS,
        functionName: 'matureOrder',
        args: [user],
        chainId: POLYGON_CHAIN_ID,
      }) as [bigint, bigint, bigint, bigint, bigint];
      
      return { activeOrder, lastOrder, unlock_Order, mature_Order, activeLimit };
    } catch (error: any) {
      console.error(`Error fetching mature order: ${error.message || error}`);
      throw new Error(`Failed to fetch mature order: ${error.message || 'Unknown error'}`);
    }
  },

  /**
   * Get rank qualification details
   * @param user - User address
   * @returns Rank qualification details
   */
  async getRankQualify(user: Address): Promise<RankQualify> {
    try {
      const [directs, level, strongTeam, totalTeam, fLevel] = await readContract(config, {
        abi: STAKING_ABI,
        address: STAKING_CONTRACT_ADDRESS,
        functionName: 'rankQualify',
        args: [user],
        chainId: POLYGON_CHAIN_ID,
      }) as [bigint, bigint, bigint, bigint, bigint];
      
      return { directs, level, strongTeam, totalTeam, fLevel };
    } catch (error: any) {
      console.error(`Error fetching rank qualification: ${error.message || error}`);
      throw new Error(`Failed to fetch rank qualification: ${error.message || 'Unknown error'}`);
    }
  },

  /**
   * Get unstake potential
   * @param user - User address
   * @returns Unstake potential details
   */
  async getUnStakePotential(user: Address): Promise<UnStakePotential> {
    try {
      const result = await readContract(config, {
        abi: STAKING_ABI,
        address: STAKING_CONTRACT_ADDRESS,
        functionName: 'unStakePotential',
        args: [user],
        chainId: POLYGON_CHAIN_ID,
      }) as [bigint, bigint, bigint, bigint, bigint, bigint, bigint, bigint, bigint, bigint, bigint];
      
      return {
        remainLimit: result[0],
        growthLimit: result[1],
        active_Order: result[2],
        lastOrder: result[3],
        unlock_Order: result[4],
        mature_Order: result[5],
        totGain: result[6],
        OrderValue: result[7],
        orderGrowth: result[8],
        teamGrowth: result[9],
        teamLaps: result[10],
      };
    } catch (error: any) {
      console.error(`Error fetching unstake potential: ${error.message || error}`);
      throw new Error(`Failed to fetch unstake potential: ${error.message || 'Unknown error'}`);
    }
  },

  /**
   * Get total remaining TPR
   * @param userAddress - User address
   * @param isMatureOrd - Whether to consider mature orders
   * @returns Total remaining TPR details
   */
  async getTotalRemainTPR(userAddress: Address, isMatureOrd: boolean): Promise<TotalRemainTPR> {
    try {
      const [totalTPR, growthTPR, forfietOrder] = await readContract(config, {
        abi: STAKING_ABI,
        address: STAKING_CONTRACT_ADDRESS,
        functionName: 'totalRemainTPR',
        args: [userAddress, isMatureOrd],
        chainId: POLYGON_CHAIN_ID,
      }) as [bigint, bigint, bigint];
      
      return { totalTPR, growthTPR, forfietOrder };
    } catch (error: any) {
      console.error(`Error fetching total remaining TPR: ${error.message || error}`);
      throw new Error(`Failed to fetch total remaining TPR: ${error.message || 'Unknown error'}`);
    }
  },

  /**
   * Get token price for a given amount
   * @param amount - Amount in wei
   * @returns Price in wei
   */
  async getPrice(amount: bigint): Promise<bigint> {
    try {
      return await readContract(config, {
        abi: STAKING_ABI,
        address: STAKING_CONTRACT_ADDRESS,
        functionName: 'getPrice',
        args: [amount],
        chainId: POLYGON_CHAIN_ID,
      }) as bigint;
    } catch (error: any) {
      console.error(`Error fetching price: ${error.message || error}`);
      throw new Error(`Failed to fetch price: ${error.message || 'Unknown error'}`);
    }
  },

  /**
   * Check if a user is active
   * @param user - User address
   * @returns Active status
   */
  async activeUser(user: Address): Promise<boolean> {
    try {
      return await readContract(config, {
        abi: STAKING_ABI,
        address: STAKING_CONTRACT_ADDRESS,
        functionName: 'activeUser',
        args: [user],
        chainId: POLYGON_CHAIN_ID,
      }) as boolean;
    } catch (error: any) {
      console.error(`Error checking active user: ${error.message || error}`);
      throw new Error(`Failed to check active user: ${error.message || 'Unknown error'}`);
    }
  },

  /**
   * Update user status
   * @param user - User address
   * @returns Transaction hash
   */
  async userSelfUpdate(user: Address): Promise<string> {
    try {
      const txHash = await writeContract(config, {
        abi: STAKING_ABI,
        address: STAKING_CONTRACT_ADDRESS,
        functionName: 'userSelfUpdate',
        args: [user],
        chain: polygon,
        account: user,
      });
      return txHash;
    } catch (error: any) {
      console.error(`Error updating user status: ${error.message || error}`);
      throw new Error(`Failed to update user status: ${error.message || 'Unknown error'}`);
    }
  },

  /**
   * Get direct referrals for a user
   * @param userAddress - User address
   * @returns Array of referral addresses
   */
  async getDirectUser(userAddress: Address): Promise<Address[]> {
    try {
      return await readContract(config, {
        abi: STAKING_ABI,
        address: STAKING_CONTRACT_ADDRESS,
        functionName: 'directUser',
        args: [userAddress],
        chainId: POLYGON_CHAIN_ID,
      }) as Address[];
    } catch (error: any) {
      console.error(`Error fetching direct referrals: ${error.message || error}`);
      throw new Error(`Failed to fetch direct referrals: ${error.message || 'Unknown error'}`);
    }
  },

  /**
   * Find leader and developer addresses
   * @param userAddress - User address
   * @returns Leader and developer addresses
   */
  async findLeaderUser(userAddress: Address): Promise<FindLeaderUser> {
    try {
      const [ledAdd, devAdd] = await readContract(config, {
        abi: STAKING_ABI,
        address: STAKING_CONTRACT_ADDRESS,
        functionName: 'findLeaderUser',
        args: [userAddress],
        chainId: POLYGON_CHAIN_ID,
      }) as [[Address, Address, Address, Address, Address, Address], [Address, Address, Address]];
      
      return { ledAdd, devAdd };
    } catch (error: any) {
      console.error(`Error fetching leader user: ${error.message || error}`);
      throw new Error(`Failed to fetch leader user: ${error.message || 'Unknown error'}`);
    }
  }
};
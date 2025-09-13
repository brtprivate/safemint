
import { readContract, writeContract } from '@wagmi/core';
import { config } from '../config/web3modal';
import { bscTestnet } from 'wagmi/chains';
import type { Address } from 'viem';
import { parseEther, formatEther } from 'viem';

// Contract configuration - BSC Testnet
export const SELFMINT_TOKEN_CONTRACT_ADDRESS = '0xb30D4239A3E29Cd29D5C6fff47137d08a5CC05FA' as Address;
export const SELFMINT_STAKING_CONTRACT_ADDRESS = '0xb54B2B0Bc772Dedb586DE2685C8941751bebb084' as Address;
export const BSC_TESTNET_CHAIN_ID = 56;

// Polygon Mainnet Chain ID
export const POLYGON_CHAIN_ID = 137;

// MLM Contract Address (using staking contract for MLM functionality)
export const MLM_CONTRACT_ADDRESS = '0xb54B2B0Bc772Dedb586DE2685C8941751bebb084' as Address;

// Token addresses on BSC Testnet
export const DAI_CONTRACT_ADDRESS = '0xEC5dCb5Dbf4B114C9d0F65BcCAb49EC54F6A0867' as Address; // DAI on BSC Testnet
export const INOUT_TOKEN_ADDRESS = '0x337610d27c682E347C9cD60BD4b3b107C9d34dDd' as Address; // Placeholder for INOUT token, replace with actual
export const SHARE_ADDRESS = '0xD8b5a05538bfB72221a75Ed6b5570d5E7d858228' as Address; // Placeholder for share token, replace with actual

// DAI Contract ABI (minimal for approval, balance, and allowance - BEP-20 compatible)
export const DAI_ABI = [
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
  {
    constant: true,
    inputs: [
      { name: "_owner", type: "address" },
      { name: "_spender", type: "address" },
    ],
    name: "allowance",
    outputs: [{ name: "", type: "uint256" }],
    type: "function",
  },
] as const;

// SELFMINT_TOKEN Contract ABI (from https://testnet.bscscan.com/address/0xb30D4239A3E29Cd29D5C6fff47137d08a5CC05FA#code)
export const SELFMINT_TOKEN_ABI = [{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_usdtToken","type":"address"},{"internalType":"address","name":"_safeMint","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"inputs":[],"name":"ReentrancyGuardReentrantCall","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"selfMintAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"usdReceived","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"selfMintPrice","type":"uint256"}],"name":"Burned","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"usdAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"selfMintReceived","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"selfMintPrice","type":"uint256"}],"name":"Minted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newRate","type":"uint256"}],"name":"RateAdjusted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"InitialRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"burnSlippage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"usdAmount","type":"uint256"}],"name":"buySelfMint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"usdAmount","type":"uint256"},{"internalType":"address","name":"toAddress","type":"address"}],"name":"buySelfMint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint256","name":"_reserve0","type":"uint256"},{"internalType":"uint256","name":"_reserve1","type":"uint256"},{"internalType":"uint256","name":"_blockTimestampLast","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isBuyOn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isBuyOn_Off","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rateInUSDT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenAmount","type":"uint256"}],"name":"sellSelfMint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenAmount","type":"uint256"},{"internalType":"address","name":"toAddress","type":"address"}],"name":"sellSelfMint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newaddress","type":"address"},{"internalType":"bool","name":"flag","type":"bool"}],"name":"whiteList","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whiteLists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}] as const;

// SELFMINT_STAKING Contract ABI (from https://testnet.bscscan.com/address/0xb54B2B0Bc772Dedb586DE2685C8941751bebb084#code)
export const STAKING_ABI = [
  {
    inputs: [{ internalType: "address", name: "_owner", type: "address" }],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "uint256", name: "stacke_Id", type: "uint256" },
      { indexed: false, internalType: "address", name: "user", type: "address" },
      { indexed: false, internalType: "uint256", name: "growthRate", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "timeStamp", type: "uint256" },
    ],
    name: "deposit_Satke",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: "uint256", name: "stacke_Id", type: "uint256" }],
    name: "forfeit_Ev",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "address", name: "from_user", type: "address" },
      { indexed: false, internalType: "address", name: "to_user", type: "address" },
      { indexed: false, internalType: "uint256", name: "level", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "payAmount", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "types", type: "uint256" },
    ],
    name: "income_Ev",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "address", name: "_user", type: "address" },
      { indexed: false, internalType: "address", name: "referralAddress", type: "address" },
    ],
    name: "regUserEv",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "address", name: "_user", type: "address" },
      { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "withdrwal_Stacking",
    type: "event",
  },
  {
    inputs: [],
    name: "DAO_Count",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DAO_TotalApprovals",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DAO_VoteIsOn",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DAO_Voting",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "VotingIsOn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_user", type: "address" }],
    name: "activeUser",
    outputs: [{ internalType: "bool", name: "active", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "allStake",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "user", type: "address" }],
    name: "avUnStake",
    outputs: [{ internalType: "uint256", name: "avGh", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "bonusInfos",
    outputs: [
      { internalType: "uint256", name: "referralGains", type: "uint256" },
      { internalType: "uint256", name: "levelGains", type: "uint256" },
      { internalType: "uint256", name: "growthGains", type: "uint256" },
      { internalType: "uint256", name: "teamGrowthGains", type: "uint256" },
      { internalType: "uint256", name: "leaderGains", type: "uint256" },
      { internalType: "uint256", name: "developmentGains", type: "uint256" },
      { internalType: "uint256", name: "teamLevelStake", type: "uint256" },
      { internalType: "uint256", name: "lapsTeamStake", type: "uint256" },
      { internalType: "uint256", name: "totalStake", type: "uint256" },
      { internalType: "uint256", name: "totalUnStake", type: "uint256" },
      { internalType: "uint256", name: "totalWithdrwan", type: "uint256" },
      { internalType: "uint256", name: "inOutBuy", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "boostLevel",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "usdAmount", type: "uint256" }],
    name: "buyToken",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "userAddress", type: "address" }],
    name: "directUser",
    outputs: [{ internalType: "address[]", name: "referrals", type: "address[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "distShare",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "contractAdd", type: "address" },
      { internalType: "uint256", name: "runTime", type: "uint256" },
      { internalType: "bool", name: "looprun", type: "bool" },
    ],
    name: "fetchOldData",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "userAddress", type: "address" }],
    name: "findLeaderUser",
    outputs: [
      { internalType: "address[6]", name: "ledAdd", type: "address[6]" },
      { internalType: "address[3]", name: "devAdd", type: "address[3]" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_amount", type: "uint256" }],
    name: "getPrice",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "levelDist",
    outputs: [{ internalType: "uint8[21]", name: "levelPer", type: "uint8[21]" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "userAddress", type: "address" },
      { internalType: "uint256", name: "Level", type: "uint256" },
    ],
    name: "makeLeader",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "address", name: "userAddress", type: "address" },
    ],
    name: "makeStake",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
    name: "makeUnstake",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_user", type: "address" }],
    name: "matureOrder",
    outputs: [
      { internalType: "uint256", name: "activeOrder", type: "uint256" },
      { internalType: "uint256", name: "lastOrder", type: "uint256" },
      { internalType: "uint256", name: "unlock_Order", type: "uint256" },
      { internalType: "uint256", name: "mature_Order", type: "uint256" },
      { internalType: "uint256", name: "activeLimit", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "user", type: "address" }],
    name: "rankQualify",
    outputs: [
      { internalType: "uint256", name: "directs", type: "uint256" },
      { internalType: "uint256", name: "level", type: "uint256" },
      { internalType: "uint256", name: "strongTeam", type: "uint256" },
      { internalType: "uint256", name: "totalTeam", type: "uint256" },
      { internalType: "uint256", name: "fLevel", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "redeemRate",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "referral", type: "address" }],
    name: "regUser",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "releaseContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256[2]", name: "_growthRate", type: "uint256[2]" }],
    name: "setGrowths",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256[]", name: "_levelSatke", type: "uint256[]" }],
    name: "setLevelStakes",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_teamDepth", type: "uint256" },
      { internalType: "uint256", name: "_redeemRate", type: "uint256" },
      { internalType: "bool", name: "_boostLevel", type: "bool" },
    ],
    name: "setPrams",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_shareAddress", type: "address" }],
    name: "setShareAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "shareAddress",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "stake_Order", type: "uint256" }],
    name: "stakeGrowth",
    outputs: [{ internalType: "uint256", name: "orderGrowth", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "stakeInfos",
    outputs: [
      { internalType: "address", name: "ownerAddress", type: "address" },
      { internalType: "uint256", name: "orderValue", type: "uint256" },
      { internalType: "uint256", name: "orderGrowth", type: "uint256" },
      { internalType: "uint256", name: "orderID", type: "uint256" },
      { internalType: "uint256", name: "orderTime", type: "uint256" },
      { internalType: "uint256", name: "isMature", type: "uint256" },
      { internalType: "bool", name: "isComplete", type: "bool" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "teamDepth",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "user", type: "address" },
      { internalType: "uint256", name: "totalTPR", type: "uint256" },
    ],
    name: "teamGrowthTime",
    outputs: [{ internalType: "uint256", name: "growthTime", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenAddress",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_user", type: "address" }],
    name: "totalGains",
    outputs: [{ internalType: "uint256", name: "total", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalReg",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "userAddress", type: "address" },
      { internalType: "bool", name: "isMatureOrd", type: "bool" },
    ],
    name: "totalRemainTPR",
    outputs: [
      { internalType: "uint256", name: "totalTPR", type: "uint256" },
      { internalType: "uint256", name: "growthTPR", type: "uint256" },
      { internalType: "uint256", name: "forfietOrder", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_user", type: "address" }],
    name: "unStakePotential",
    outputs: [
      { internalType: "uint256", name: "remainLimit", type: "uint256" },
      { internalType: "uint256", name: "growthLimit", type: "uint256" },
      { internalType: "uint256", name: "active_Order", type: "uint256" },
      { internalType: "uint256", name: "lastOrder", type: "uint256" },
      { internalType: "uint256", name: "unlock_Order", type: "uint256" },
      { internalType: "uint256", name: "mature_Order", type: "uint256" },
      { internalType: "uint256", name: "totGain", type: "uint256" },
      { internalType: "uint256", name: "OrderValue", type: "uint256" },
      { internalType: "uint256", name: "orderGrowth", type: "uint256" },
      { internalType: "uint256", name: "teamGrowth", type: "uint256" },
      { internalType: "uint256", name: "teamLaps", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "usdAddress",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "userInfos",
    outputs: [
      { internalType: "address", name: "referral", type: "address" },
      { internalType: "uint256", name: "totalTeam", type: "uint256" },
      { internalType: "uint256", name: "strongTeam", type: "uint256" },
      { internalType: "uint256", name: "userLevel", type: "uint256" },
      { internalType: "uint256", name: "lastStake", type: "uint256" },
      { internalType: "uint256", name: "forfeitStake", type: "uint256" },
      { internalType: "uint256", name: "harvestTime", type: "uint256" },
      { internalType: "bool", name: "isNewStake", type: "bool" },
      { internalType: "bool", name: "isDAO", type: "bool" },
      { internalType: "bool", name: "joined", type: "bool" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "user", type: "address" }],
    name: "userLiveStatus",
    outputs: [
      { internalType: "uint256", name: "directs", type: "uint256" },
      { internalType: "uint256", name: "level", type: "uint256" },
      { internalType: "uint256", name: "strongLeg", type: "uint256" },
      { internalType: "uint256", name: "totalTeam", type: "uint256" },
      { internalType: "uint256", name: "growthVol", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "user", type: "address" }],
    name: "userSelfUpdate",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "user", type: "address" },
      { internalType: "uint256", name: "stakeCount", type: "uint256" },
    ],
    name: "userStakeView",
    outputs: [
      { internalType: "uint256", name: "totalCount", type: "uint256" },
      {
        components: [
          { internalType: "address", name: "ownerAddress", type: "address" },
          { internalType: "uint256", name: "orderValue", type: "uint256" },
          { internalType: "uint256", name: "orderGrowth", type: "uint256" },
          { internalType: "uint256", name: "orderID", type: "uint256" },
          { internalType: "uint256", name: "orderTime", type: "uint256" },
          { internalType: "uint256", name: "isMature", type: "uint256" },
          { internalType: "bool", name: "isComplete", type: "bool" },
        ],
        internalType: "struct SELFMINT_STAKING.order",
        name: "stakeInfo",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

// Interfaces for complex return types (for staking contract)
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
  totalWithdrwan: bigint;
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

// Interface for contractInteractions
interface ContractInteractions {
  approveDAI: (amount: bigint, account: Address) => Promise<string>;
  approveDAIForStaking: (amount: bigint, account: Address) => Promise<string>;
  getDAIBalance: (account: Address) => Promise<bigint>;
  getBalance: (account: Address) => Promise<bigint>;
  buySelfMint: (usdAmount: bigint, account: Address, toAddress?: Address) => Promise<string>;
  sellSelfMint: (tokenAmount: bigint, account: Address, toAddress?: Address) => Promise<string>;
  getRateInDAI: () => Promise<bigint>;
  getReserves: () => Promise<{ reserve0: bigint; reserve1: bigint; blockTimestampLast: bigint }>;
  isBuyEnabled: () => Promise<boolean>;
  isWhitelisted: (address: Address) => Promise<boolean>;
  setWhitelist: (address: Address, flag: boolean, account: Address) => Promise<string>;
  regUser: (referral: Address, account: Address) => Promise<string>;
  buyToken: (usdAmount: bigint, account: Address) => Promise<string>;
  makeStake: (amount: bigint, userAddress: Address, account: Address) => Promise<string>;
  makeUnstake: (amount: bigint, account: Address) => Promise<string>;
  userStakeView: (user: Address, stakeCount: bigint) => Promise<UserStakeView>;
  getBonusInfo: (user: Address) => Promise<BonusInfo>;
  getUserInfo: (user: Address) => Promise<UserInfo>;
  getMatureOrder: (user: Address) => Promise<MatureOrder>;
  getRankQualify: (user: Address) => Promise<RankQualify>;
  getUnStakePotential: (user: Address) => Promise<UnStakePotential>;
  getTotalRemainTPR: (userAddress: Address, isMatureOrd: boolean) => Promise<TotalRemainTPR>;
  getPrice: (amount: bigint) => Promise<bigint>;
  activeUser: (user: Address) => Promise<boolean>;
  userSelfUpdate: (user: Address, account: Address) => Promise<string>;
  getDirectUser: (userAddress: Address) => Promise<Address[]>;
  findLeaderUser: (userAddress: Address) => Promise<FindLeaderUser>;
  getUSDAddress: () => Promise<Address>;
  getTokenAddress: () => Promise<Address>;
  getShareAddress: () => Promise<Address>;
  getTotalReg: () => Promise<bigint>;
  getAllStake: () => Promise<bigint>;
}

// Interface for mlmContractInteractions
interface MLMContractInteractions {
  approveDAI: (amount: bigint, account: Address) => Promise<string>;
  getDAIBalance: (account: Address) => Promise<bigint>;
  buyInout: (usdAmount: bigint, account: Address, toAddress?: Address) => Promise<string>;
  sellInout: (tokenAmount: bigint, account: Address, toAddress?: Address) => Promise<string>;
  getInoutBalance: (account: Address) => Promise<bigint>;
  getRateInDAI: () => Promise<bigint>;
  getReserves: () => Promise<{ reserve0: bigint; reserve1: bigint; blockTimestampLast: bigint }>;
  isBuyOn: () => Promise<boolean>;
  isWhitelisted: (address: Address) => Promise<boolean>;
  setWhitelist: (address: Address, flag: boolean, account: Address) => Promise<string>;
}

// Contract interaction functions for SELFMINT_TOKEN and SELFMINT_STAKING
export const contractInteractions: ContractInteractions = {
  async approveDAI(amount: bigint, account: Address): Promise<string> {
    try {
      console.log(`Approving ${formatEther(amount)} DAI for SELFMINT_TOKEN contract ${SELFMINT_TOKEN_CONTRACT_ADDRESS}`);
      const txHash = await writeContract(config, {
        abi: DAI_ABI,
        address: DAI_CONTRACT_ADDRESS,
        functionName: 'approve',
        args: [SELFMINT_TOKEN_CONTRACT_ADDRESS, amount],
        chain: bscTestnet,
        account: account,
        gas: undefined,
      });
      console.log(`DAI approval transaction hash: ${txHash}`);
      return txHash;
    } catch (error: any) {
      console.error(`Error approving DAI: ${error.message || error}`);
      throw new Error(`Failed to approve DAI on BSC Testnet: ${error.message || 'Unknown error'}`);
    }
  },

  async approveDAIForStaking(amount: bigint, account: Address): Promise<string> {
    try {
      console.log(`Approving ${formatEther(amount)} DAI for SELFMINT_STAKING contract ${SELFMINT_STAKING_CONTRACT_ADDRESS}`);
      const txHash = await writeContract(config, {
        abi: DAI_ABI,
        address: DAI_CONTRACT_ADDRESS,
        functionName: 'approve',
        args: [SELFMINT_STAKING_CONTRACT_ADDRESS, amount],
        chain: bscTestnet,
        account: account,
        gas: undefined,
      });
      console.log(`DAI approval for staking transaction hash: ${txHash}`);
      return txHash;
    } catch (error: any) {
      console.error(`Error approving DAI for staking: ${error.message || error}`);
      throw new Error(`Failed to approve DAI for staking on BSC Testnet: ${error.message || 'Unknown error'}`);
    }
  },

  async getDAIBalance(account: Address): Promise<bigint> {
    try {
      const balance = await readContract(config, {
        abi: DAI_ABI,
        address: DAI_CONTRACT_ADDRESS,
        functionName: 'balanceOf',
        args: [account],
        chainId: BSC_TESTNET_CHAIN_ID,
      }) as bigint;
      console.log(`DAI balance for ${account}: ${formatEther(balance)} DAI`);
      return balance;
    } catch (error: any) {
      console.error(`Error fetching DAI balance: ${error.message || error}`);
      throw new Error(`Failed to fetch DAI balance on BSC Testnet: ${error.message || 'Unknown error'}`);
    }
  },

  async getBalance(account: Address): Promise<bigint> {
    try {
      const balance = await readContract(config, {
        abi: SELFMINT_TOKEN_ABI,
        address: SELFMINT_TOKEN_CONTRACT_ADDRESS,
        functionName: 'balanceOf',
        args: [account],
        chainId: BSC_TESTNET_CHAIN_ID,
      }) as bigint;
      console.log(`SELFMINT balance for ${account}: ${formatEther(balance)} SELFMINT`);
      return balance;
    } catch (error: any) {
      console.error(`Error fetching SELFMINT balance: ${error.message || error}`);
      throw new Error(`Failed to fetch SELFMINT balance on BSC Testnet: ${error.message || 'Unknown error'}`);
    }
  },

  async buySelfMint(usdAmount: bigint, account: Address, toAddress?: Address): Promise<string> {
    try {
      console.log(`Buying SELFMINT with ${formatEther(usdAmount)} DAI`);
      const allowance = await readContract(config, {
        abi: DAI_ABI,
        address: DAI_CONTRACT_ADDRESS,
        functionName: 'allowance',
        args: [account, SELFMINT_TOKEN_CONTRACT_ADDRESS],
        chainId: BSC_TESTNET_CHAIN_ID,
      }) as bigint;
      if (allowance < usdAmount) {
        throw new Error(`Insufficient allowance. Approved: ${formatEther(allowance)} DAI, Required: ${formatEther(usdAmount)} DAI`);
      }
      const txHash = await writeContract(config, {
        abi: SELFMINT_TOKEN_ABI,
        address: SELFMINT_TOKEN_CONTRACT_ADDRESS,
        functionName: 'buySelfMint',
        args: toAddress ? [usdAmount, toAddress] : [usdAmount],
        chain: bscTestnet,
        account: account,
        gas: undefined,
      });
      console.log(`Buy SELFMINT transaction hash: ${txHash}`);
      return txHash;
    } catch (error: any) {
      console.error(`Error buying SELFMINT: ${error.message || error}`);
      throw new Error(`Failed to buy SELFMINT on BSC Testnet: ${error.message || 'Unknown error'}`);
    }
  },

  async sellSelfMint(tokenAmount: bigint, account: Address, toAddress?: Address): Promise<string> {
    try {
      console.log(`Selling ${formatEther(tokenAmount)} SELFMINT tokens`);
      const txHash = await writeContract(config, {
        abi: SELFMINT_TOKEN_ABI,
        address: SELFMINT_TOKEN_CONTRACT_ADDRESS,
        functionName: 'sellSelfMint',
        args: toAddress ? [tokenAmount, toAddress] : [tokenAmount],
        chain: bscTestnet,
        account: account,
        gas: undefined,
      });
      console.log(`Sell SELFMINT transaction hash: ${txHash}`);
      return txHash;
    } catch (error: any) {
      console.error(`Error selling SELFMINT: ${error.message || error}`);
      throw new Error(`Failed to sell SELFMINT on BSC Testnet: ${error.message || 'Unknown error'}`);
    }
  },

  async getRateInDAI(): Promise<bigint> {
    try {
      const rate = await readContract(config, {
        abi: SELFMINT_TOKEN_ABI,
        address: SELFMINT_TOKEN_CONTRACT_ADDRESS,
        functionName: 'rateInUSDT',
        chainId: BSC_TESTNET_CHAIN_ID,
      }) as bigint;
      console.log(`SELFMINT rate in DAI: ${formatEther(rate)}`);
      return rate;
    } catch (error: any) {
      console.error(`Error fetching rate: ${error.message || error}`);
      throw new Error(`Failed to fetch SELFMINT rate on BSC Testnet: ${error.message || 'Unknown error'}`);
    }
  },

  async getReserves(): Promise<{ reserve0: bigint; reserve1: bigint; blockTimestampLast: bigint }> {
    try {
      const [reserve0, reserve1, blockTimestampLast] = await readContract(config, {
        abi: SELFMINT_TOKEN_ABI,
        address: SELFMINT_TOKEN_CONTRACT_ADDRESS,
        functionName: 'getReserves',
        chainId: BSC_TESTNET_CHAIN_ID,
      }) as [bigint, bigint, bigint];
      console.log(`Reserves: SELFMINT=${formatEther(reserve0)}, DAI=${formatEther(reserve1)}, Timestamp=${blockTimestampLast}`);
      return { reserve0, reserve1, blockTimestampLast };
    } catch (error: any) {
      console.error(`Error fetching reserves: ${error.message || error}`);
      throw new Error(`Failed to fetch reserves on BSC Testnet: ${error.message || 'Unknown error'}`);
    }
  },

  async isBuyEnabled(): Promise<boolean> {
    try {
      const isBuyOn = await readContract(config, {
        abi: SELFMINT_TOKEN_ABI,
        address: SELFMINT_TOKEN_CONTRACT_ADDRESS,
        functionName: 'isBuyOn',
        chainId: BSC_TESTNET_CHAIN_ID,
      }) as boolean;
      console.log(`Buy enabled: ${isBuyOn}`);
      return isBuyOn;
    } catch (error: any) {
      console.error(`Error checking buy status: ${error.message || error}`);
      throw new Error(`Failed to check buy status on BSC Testnet: ${error.message || 'Unknown error'}`);
    }
  },

  async isWhitelisted(address: Address): Promise<boolean> {
    try {
      const isWhitelisted = await readContract(config, {
        abi: SELFMINT_TOKEN_ABI,
        address: SELFMINT_TOKEN_CONTRACT_ADDRESS,
        functionName: 'whiteLists',
        args: [address],
        chainId: BSC_TESTNET_CHAIN_ID,
      }) as boolean;
      console.log(`Whitelist status for ${address}: ${isWhitelisted}`);
      return isWhitelisted;
    } catch (error: any) {
      console.error(`Error checking whitelist status: ${error.message || error}`);
      throw new Error(`Failed to check whitelist status on BSC Testnet: ${error.message || 'Unknown error'}`);
    }
  },

  async setWhitelist(address: Address, flag: boolean, account: Address): Promise<string> {
    try {
      console.log(`${flag ? 'Adding' : 'Removing'} ${address} ${flag ? 'to' : 'from'} whitelist`);
      const txHash = await writeContract(config, {
        abi: SELFMINT_TOKEN_ABI,
        address: SELFMINT_TOKEN_CONTRACT_ADDRESS,
        functionName: 'whiteList',
        args: [address, flag],
        chain: bscTestnet,
        account: account,
        gas: undefined,
      });
      console.log(`Whitelist transaction hash: ${txHash}`);
      return txHash;
    } catch (error: any) {
      console.error(`Error modifying whitelist: ${error.message || error}`);
      throw new Error(`Failed to modify whitelist on BSC Testnet: ${error.message || 'Unknown error'}`);
    }
  },

  async regUser(referral: Address, account: Address): Promise<string> {
    try {
      console.log(`Attempting to register user with referrer: ${referral}`);
      if (referral === '0x0000000000000000000000000000000000000000') {
        throw new Error('Invalid referrer address: zero address is not allowed');
      }
      const ethAddressRegex = /^0x[a-fA-F0-9]{40}$/;
      if (!ethAddressRegex.test(referral)) {
        throw new Error('Invalid referrer address format');
      }
      const txHash = await writeContract(config, {
        abi: STAKING_ABI,
        address: SELFMINT_STAKING_CONTRACT_ADDRESS,
        functionName: 'regUser',
        args: [referral],
        chain: bscTestnet,
        account: account,
        gas: undefined,
      });
      console.log(`Registration transaction submitted successfully. Hash: ${txHash}`);
      return txHash;
    } catch (error: any) {
      console.error('Error registering user:', error);
      if (error.message?.includes('user rejected')) {
        throw new Error('Transaction rejected by user');
      } else if (error.message?.includes('insufficient funds')) {
        throw new Error('Insufficient funds for gas fees');
      } else if (error.message?.includes('already registered') || error.message?.includes('already exists')) {
        throw new Error('Address is already registered');
      } else if (error.message?.includes('invalid address')) {
        throw new Error('Invalid referrer address');
      } else if (error.message?.includes('gas')) {
        throw new Error('Network congestion. Please try again later');
      } else {
        throw new Error(`Registration failed on BSC Testnet: ${error.message || 'Unknown error occurred'}`);
      }
    }
  },

  async buyToken(usdAmount: bigint, account: Address): Promise<string> {
    try {
      console.log(`Buying tokens with ${formatEther(usdAmount)} DAI via staking contract`);
      const allowance = await readContract(config, {
        abi: DAI_ABI,
        address: DAI_CONTRACT_ADDRESS,
        functionName: 'allowance',
        args: [account, SELFMINT_STAKING_CONTRACT_ADDRESS],
        chainId: BSC_TESTNET_CHAIN_ID,
      }) as bigint;
      if (allowance < usdAmount) {
        throw new Error(`Insufficient allowance. Approved: ${formatEther(allowance)} DAI, Required: ${formatEther(usdAmount)} DAI`);
      }
      const txHash = await writeContract(config, {
        abi: STAKING_ABI,
        address: SELFMINT_STAKING_CONTRACT_ADDRESS,
        functionName: 'buyToken',
        args: [usdAmount],
        chain: bscTestnet,
        account: account,
        gas: undefined,
      });
      console.log(`Buy token transaction successful: ${txHash}`);
      return txHash;
    } catch (error: any) {
      console.error(`Error buying tokens:`, error);
      throw new Error(`Failed to buy tokens on BSC Testnet: ${error.message || 'Unknown error'}`);
    }
  },

  async makeStake(amount: bigint, userAddress: Address, account: Address): Promise<string> {
    try {
      console.log(`Staking ${formatEther(amount)} DAI for ${userAddress}`);
      const allowance = await readContract(config, {
        abi: DAI_ABI,
        address: DAI_CONTRACT_ADDRESS,
        functionName: 'allowance',
        args: [account, SELFMINT_STAKING_CONTRACT_ADDRESS],
        chainId: BSC_TESTNET_CHAIN_ID,
      }) as bigint;
      if (allowance < amount) {
        throw new Error(`Insufficient allowance. Approved: ${formatEther(allowance)} DAI, Required: ${formatEther(amount)} DAI`);
      }
      const txHash = await writeContract(config, {
        abi: STAKING_ABI,
        address: SELFMINT_STAKING_CONTRACT_ADDRESS,
        functionName: 'makeStake',
        args: [amount, userAddress],
        chain: bscTestnet,
        account: account,
        gas: undefined,
      });
      console.log(`Stake transaction successful: ${txHash}`);
      return txHash;
    } catch (error: any) {
      console.error(`Error staking tokens:`, error);
      throw new Error(`Failed to stake tokens on BSC Testnet: ${error.message || 'Unknown error'}`);
    }
  },

  async makeUnstake(amount: bigint, account: Address): Promise<string> {
    try {
      console.log(`Unstaking ${formatEther(amount)} DAI for ${account}`);
      const txHash = await writeContract(config, {
        abi: STAKING_ABI,
        address: SELFMINT_STAKING_CONTRACT_ADDRESS,
        functionName: 'makeUnstake',
        args: [amount],
        chain: bscTestnet,
        account: account,
        gas: undefined,
      });
      console.log(`Unstake transaction successful: ${txHash}`);
      return txHash;
    } catch (error: any) {
      console.error(`Error unstaking tokens:`, error);
      throw new Error(`Failed to unstake tokens on BSC Testnet: ${error.message || 'Unknown error'}`);
    }
  },

  async userStakeView(user: Address, stakeCount: bigint): Promise<UserStakeView> {
    try {
      const [totalCount, stakeInfo] = await readContract(config, {
        abi: STAKING_ABI,
        address: SELFMINT_STAKING_CONTRACT_ADDRESS,
        functionName: 'userStakeView',
        args: [user, stakeCount],
        chainId: BSC_TESTNET_CHAIN_ID,
      }) as readonly [bigint, StakeInfo];
      console.log(`Stake info for ${user} at index ${stakeCount}:`, { totalCount, stakeInfo });
      return {
        totalCount,
        stakeInfo,
      };
    } catch (error: any) {
      console.error(`Error fetching stake info: ${error.message || error}`);
      throw new Error(`Failed to fetch stake info on BSC Testnet: ${error.message || 'Unknown error'}`);
    }
  },

  async getBonusInfo(user: Address): Promise<BonusInfo> {
    try {
      const result = await readContract(config, {
        abi: STAKING_ABI,
        address: SELFMINT_STAKING_CONTRACT_ADDRESS,
        functionName: 'bonusInfos',
        args: [user],
        chainId: BSC_TESTNET_CHAIN_ID,
      }) as [bigint, bigint, bigint, bigint, bigint, bigint, bigint, bigint, bigint, bigint, bigint, bigint];
      console.log(`Bonus info for ${user}:`, result);
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
        totalWithdrwan: result[10],
        inOutBuy: result[11],
      };
    } catch (error: any) {
      console.error(`Error fetching bonus info: ${error.message || error}`);
      throw new Error(`Failed to fetch bonus info on BSC Testnet: ${error.message || 'Unknown error'}`);
    }
  },

  async getUserInfo(user: Address): Promise<UserInfo> {
    try {
      const result = await readContract(config, {
        abi: STAKING_ABI,
        address: SELFMINT_STAKING_CONTRACT_ADDRESS,
        functionName: 'userInfos',
        args: [user],
        chainId: BSC_TESTNET_CHAIN_ID,
      }) as [Address, bigint, bigint, bigint, bigint, bigint, bigint, boolean, boolean, boolean];
      console.log(`User info for ${user}:`, result);
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
      throw new Error(`Failed to fetch user info on BSC Testnet: ${error.message || 'Unknown error'}`);
    }
  },

  async getMatureOrder(user: Address): Promise<MatureOrder> {
    try {
      const [activeOrder, lastOrder, unlock_Order, mature_Order, activeLimit] = await readContract(config, {
        abi: STAKING_ABI,
        address: SELFMINT_STAKING_CONTRACT_ADDRESS,
        functionName: 'matureOrder',
        args: [user],
        chainId: BSC_TESTNET_CHAIN_ID,
      }) as [bigint, bigint, bigint, bigint, bigint];
      console.log(`Mature order for ${user}:`, { activeOrder, lastOrder, unlock_Order, mature_Order, activeLimit });
      return { activeOrder, lastOrder, unlock_Order, mature_Order, activeLimit };
    } catch (error: any) {
      console.error(`Error fetching mature order: ${error.message || error}`);
      throw new Error(`Failed to fetch mature order on BSC Testnet: ${error.message || 'Unknown error'}`);
    }
  },

  async getRankQualify(user: Address): Promise<RankQualify> {
    try {
      const [directs, level, strongTeam, totalTeam, fLevel] = await readContract(config, {
        abi: STAKING_ABI,
        address: SELFMINT_STAKING_CONTRACT_ADDRESS,
        functionName: 'rankQualify',
        args: [user],
        chainId: BSC_TESTNET_CHAIN_ID,
      }) as [bigint, bigint, bigint, bigint, bigint];
      console.log(`Rank qualification for ${user}:`, { directs, level, strongTeam, totalTeam, fLevel });
      return { directs, level, strongTeam, totalTeam, fLevel };
    } catch (error: any) {
      console.error(`Error fetching rank qualification: ${error.message || error}`);
      throw new Error(`Failed to fetch rank qualification on BSC Testnet: ${error.message || 'Unknown error'}`);
    }
  },

  async getUnStakePotential(user: Address): Promise<UnStakePotential> {
    try {
      const result = await readContract(config, {
        abi: STAKING_ABI,
        address: SELFMINT_STAKING_CONTRACT_ADDRESS,
        functionName: 'unStakePotential',
        args: [user],
        chainId: BSC_TESTNET_CHAIN_ID,
      }) as [bigint, bigint, bigint, bigint, bigint, bigint, bigint, bigint, bigint, bigint, bigint];
      console.log(`Unstake potential for ${user}:`, result);
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
      throw new Error(`Failed to fetch unstake potential on BSC Testnet: ${error.message || 'Unknown error'}`);
    }
  },

  async getTotalRemainTPR(userAddress: Address, isMatureOrd: boolean): Promise<TotalRemainTPR> {
    try {
      const [totalTPR, growthTPR, forfietOrder] = await readContract(config, {
        abi: STAKING_ABI,
        address: SELFMINT_STAKING_CONTRACT_ADDRESS,
        functionName: 'totalRemainTPR',
        args: [userAddress, isMatureOrd],
        chainId: BSC_TESTNET_CHAIN_ID,
      }) as [bigint, bigint, bigint];
      console.log(`Total remaining TPR for ${userAddress} (mature: ${isMatureOrd}):`, { totalTPR, growthTPR, forfietOrder });
      return { totalTPR, growthTPR, forfietOrder };
    } catch (error: any) {
      console.error(`Error fetching total remaining TPR: ${error.message || error}`);
      throw new Error(`Failed to fetch total remaining TPR on BSC Testnet: ${error.message || 'Unknown error'}`);
    }
  },

  async getPrice(amount: bigint): Promise<bigint> {
    try {
      const price = await readContract(config, {
        abi: STAKING_ABI,
        address: SELFMINT_STAKING_CONTRACT_ADDRESS,
        functionName: 'getPrice',
        args: [amount],
        chainId: BSC_TESTNET_CHAIN_ID,
      }) as bigint;
      console.log(`Price for ${formatEther(amount)} DAI: ${formatEther(price)} SELFMINT`);
      return price;
    } catch (error: any) {
      console.error(`Error fetching price: ${error.message || error}`);
      throw new Error(`Failed to fetch price on BSC Testnet: ${error.message || 'Unknown error'}`);
    }
  },

  async activeUser(user: Address): Promise<boolean> {
    try {
      const isActive = await readContract(config, {
        abi: STAKING_ABI,
        address: SELFMINT_STAKING_CONTRACT_ADDRESS,
        functionName: 'activeUser',
        args: [user],
        chainId: BSC_TESTNET_CHAIN_ID,
      }) as boolean;
      console.log(`User ${user} active status: ${isActive}`);
      return isActive;
    } catch (error: any) {
      console.error(`Error checking active user: ${error.message || error}`);
      throw new Error(`Failed to check active user on BSC Testnet: ${error.message || 'Unknown error'}`);
    }
  },

  async userSelfUpdate(user: Address, account: Address): Promise<string> {
    try {
      console.log(`Updating status for user: ${user}`);
      const txHash = await writeContract(config, {
        abi: STAKING_ABI,
        address: SELFMINT_STAKING_CONTRACT_ADDRESS,
        functionName: 'userSelfUpdate',
        args: [user],
        chain: bscTestnet,
        account: account,
        gas: undefined,
      });
      console.log(`User update transaction successful: ${txHash}`);
      return txHash;
    } catch (error: any) {
      console.error(`Error updating user status:`, error);
      throw new Error(`Failed to update user status on BSC Testnet: ${error.message || 'Unknown error'}`);
    }
  },

  async getDirectUser(userAddress: Address): Promise<Address[]> {
    try {
      const referrals = await readContract(config, {
        abi: STAKING_ABI,
        address: SELFMINT_STAKING_CONTRACT_ADDRESS,
        functionName: 'directUser',
        args: [userAddress],
        chainId: BSC_TESTNET_CHAIN_ID,
      }) as Address[];
      console.log(`Direct referrals for ${userAddress}:`, referrals);
      return referrals;
    } catch (error: any) {
      console.error(`Error fetching direct referrals: ${error.message || error}`);
      throw new Error(`Failed to fetch direct referrals on BSC Testnet: ${error.message || 'Unknown error'}`);
    }
  },

  async findLeaderUser(userAddress: Address): Promise<FindLeaderUser> {
    try {
      const [ledAdd, devAdd] = await readContract(config, {
        abi: STAKING_ABI,
        address: SELFMINT_STAKING_CONTRACT_ADDRESS,
        functionName: 'findLeaderUser',
        args: [userAddress],
        chainId: BSC_TESTNET_CHAIN_ID,
      }) as [[Address, Address, Address, Address, Address, Address], [Address, Address, Address]];
      console.log(`Leader addresses for ${userAddress}:`, ledAdd);
      console.log(`Developer addresses for ${userAddress}:`, devAdd);
      return { ledAdd, devAdd };
    } catch (error: any) {
      console.error(`Error fetching leader user: ${error.message || error}`);
      throw new Error(`Failed to fetch leader user on BSC Testnet: ${error.message || 'Unknown error'}`);
    }
  },

  async getUSDAddress(): Promise<Address> {
    try {
      const usdAddress = await readContract(config, {
        abi: STAKING_ABI,
        address: SELFMINT_STAKING_CONTRACT_ADDRESS,
        functionName: 'usdAddress',
        chainId: BSC_TESTNET_CHAIN_ID,
      }) as Address;
      console.log(`Contract USD address: ${usdAddress}`);
      return usdAddress;
    } catch (error: any) {
      console.error(`Error fetching USD address: ${error.message || error}`);
      throw new Error(`Failed to fetch USD address on BSC Testnet: ${error.message || 'Unknown error'}`);
    }
  },

  async getTokenAddress(): Promise<Address> {
    try {
      const tokenAddress = await readContract(config, {
        abi: STAKING_ABI,
        address: SELFMINT_STAKING_CONTRACT_ADDRESS,
        functionName: 'tokenAddress',
        chainId: BSC_TESTNET_CHAIN_ID,
      }) as Address;
      console.log(`Contract SELFMINT token address: ${tokenAddress}`);
      return tokenAddress;
    } catch (error: any) {
      console.error(`Error fetching token address: ${error.message || error}`);
      throw new Error(`Failed to fetch SELFMINT token address on BSC Testnet: ${error.message || 'Unknown error'}`);
    }
  },

  async getShareAddress(): Promise<Address> {
    try {
      const shareAddress = await readContract(config, {
        abi: STAKING_ABI,
        address: SELFMINT_STAKING_CONTRACT_ADDRESS,
        functionName: 'shareAddress',
        chainId: BSC_TESTNET_CHAIN_ID,
      }) as Address;
      console.log(`Contract share token address: ${shareAddress}`);
      return shareAddress;
    } catch (error: any) {
      console.error(`Error fetching share address: ${error.message || error}`);
      throw new Error(`Failed to fetch share token address on BSC Testnet: ${error.message || 'Unknown error'}`);
    }
  },

  async getTotalReg(): Promise<bigint> {
    try {
      const totalReg = await readContract(config, {
        abi: STAKING_ABI,
        address: SELFMINT_STAKING_CONTRACT_ADDRESS,
        functionName: 'totalReg',
        chainId: BSC_TESTNET_CHAIN_ID,
      }) as bigint;
      console.log(`Total registered users: ${totalReg}`);
      return totalReg;
    } catch (error: any) {
      console.error(`Error fetching total registered users: ${error.message || error}`);
      throw new Error(`Failed to fetch total registered users on BSC Testnet: ${error.message || 'Unknown error'}`);
    }
  },

  async getAllStake(): Promise<bigint> {
    try {
      const allStake = await readContract(config, {
        abi: STAKING_ABI,
        address: SELFMINT_STAKING_CONTRACT_ADDRESS,
        functionName: 'allStake',
        chainId: BSC_TESTNET_CHAIN_ID,
      }) as bigint;
      console.log(`Total staked amount: ${formatEther(allStake)}`);
      return allStake;
    } catch (error: any) {
      console.error(`Error fetching total staked amount: ${error.message || error}`);
      throw new Error(`Failed to fetch total staked amount on BSC Testnet: ${error.message || 'Unknown error'}`);
    }
  },
};

// Contract interaction functions for SELFMINT_TOKEN (MLM equivalent)
export const mlmContractInteractions: MLMContractInteractions = {
  approveDAI: contractInteractions.approveDAI,
  getDAIBalance: contractInteractions.getDAIBalance,
  async buyInout(usdAmount: bigint, account: Address, toAddress?: Address): Promise<string> {
    try {
      console.log(`Buying INOUT with ${formatEther(usdAmount)} DAI`);
      const allowance = await readContract(config, {
        abi: DAI_ABI,
        address: DAI_CONTRACT_ADDRESS,
        functionName: 'allowance',
        args: [account, SELFMINT_TOKEN_CONTRACT_ADDRESS],
        chainId: BSC_TESTNET_CHAIN_ID,
      }) as bigint;
      if (allowance < usdAmount) {
        throw new Error(`Insufficient allowance. Approved: ${formatEther(allowance)} DAI, Required: ${formatEther(usdAmount)} DAI`);
      }
      const txHash = await writeContract(config, {
        abi: SELFMINT_TOKEN_ABI,
        address: SELFMINT_TOKEN_CONTRACT_ADDRESS,
        functionName: 'buySelfMint',
        args: toAddress ? [usdAmount, toAddress] : [usdAmount],
        chain: bscTestnet,
        account: account,
        gas: undefined,
      });
      console.log(`Buy INOUT transaction hash: ${txHash}`);
      return txHash;
    } catch (error: any) {
      console.error(`Error buying INOUT: ${error.message || error}`);
      throw new Error(`Failed to buy INOUT on BSC Testnet: ${error.message || 'Unknown error'}`);
    }
  },

  async sellInout(tokenAmount: bigint, account: Address, toAddress?: Address): Promise<string> {
    try {
      console.log(`Selling ${formatEther(tokenAmount)} INOUT tokens`);
      const txHash = await writeContract(config, {
        abi: SELFMINT_TOKEN_ABI,
        address: SELFMINT_TOKEN_CONTRACT_ADDRESS,
        functionName: 'sellSelfMint',
        args: toAddress ? [tokenAmount, toAddress] : [tokenAmount],
        chain: bscTestnet,
        account: account,
        gas: undefined,
      });
      console.log(`Sell INOUT transaction hash: ${txHash}`);
      return txHash;
    } catch (error: any) {
      console.error(`Error selling INOUT: ${error.message || error}`);
      throw new Error(`Failed to sell INOUT on BSC Testnet: ${error.message || 'Unknown error'}`);
    }
  },

  async getInoutBalance(account: Address): Promise<bigint> {
    try {
      const balance = await readContract(config, {
        abi: SELFMINT_TOKEN_ABI,
        address: SELFMINT_TOKEN_CONTRACT_ADDRESS,
        functionName: 'balanceOf',
        args: [account],
        chainId: BSC_TESTNET_CHAIN_ID,
      }) as bigint;
      console.log(`INOUT balance for ${account}: ${formatEther(balance)} INOUT`);
      return balance;
    } catch (error: any) {
      console.error(`Error fetching INOUT balance: ${error.message || error}`);
      throw new Error(`Failed to fetch INOUT balance on BSC Testnet: ${error.message || 'Unknown error'}`);
    }
  },

  getRateInDAI: contractInteractions.getRateInDAI,
  getReserves: contractInteractions.getReserves,
  isBuyOn: contractInteractions.isBuyEnabled,
  isWhitelisted: contractInteractions.isWhitelisted,
  setWhitelist: contractInteractions.setWhitelist,
};

// Export individual functions for convenience
export const {
  approveDAI,
  approveDAIForStaking,
  getDAIBalance,
  getBalance,
  buySelfMint,
  sellSelfMint,
  getRateInDAI,
  getReserves,
  isBuyEnabled,
  isWhitelisted,
  setWhitelist,
  regUser,
  buyToken,
  makeStake,
  makeUnstake,
  userStakeView,
  getBonusInfo,
  getUserInfo,
  getMatureOrder,
  getRankQualify,
  getUnStakePotential,
  getTotalRemainTPR,
  getPrice,
  activeUser,
  userSelfUpdate,
  getDirectUser,
  findLeaderUser,
  getUSDAddress,
  getTokenAddress,
  getShareAddress,
  getTotalReg,
  getAllStake,
} = contractInteractions;

// Export MLM contract interactions
export const {
  approveDAI: mlmApproveDAI,
  getDAIBalance: mlmGetDAIBalance,
  buyInout,
  sellInout,
  getInoutBalance,
  getRateInDAI: mlmGetRateInDAI,
  getReserves: mlmGetReserves,
  isBuyOn,
  isWhitelisted: mlmIsWhitelisted,
  setWhitelist: mlmSetWhitelist,
} = mlmContractInteractions;

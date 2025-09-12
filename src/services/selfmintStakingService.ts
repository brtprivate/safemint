import { readContract, writeContract, simulateContract } from "@wagmi/core";
import { config } from "../config/web3modal";
import { bscTestnet } from "wagmi/chains";
import type { Address } from "viem";
import {
  parseEther,
  formatEther,
  formatUnits,
  decodeErrorResult,
  parseUnits,
} from "viem";
import {
  USDC_CONTRACT_ADDRESS,
  USDC_ABI,
  usdcContractInteractions,
  approveUSDC,
} from "./approvalContracct";

// Export USDC_ABI for use in other files
export { USDC_ABI };
// import { simulateContract } from 'viem/actions';

// Staking Contract configuration - BSC Testnet
export const STAKING_CONTRACT_ADDRESS =
  "0xd5017C72215F927F8e9386006f3fede65aeBa405" as Address;
export const BSC_TESTNET_CHAIN_ID = 56;

// Token addresses on BSC Testnet (placeholders where necessary)
export const TOKEN_ADDRESS =
  "0xC0746bd0380190B899440bC33C647cE2426C8cCb" as Address; // INOUT token (BEP-20 test token, replace if needed)
export const USDC_ADDRESS = USDC_CONTRACT_ADDRESS; // USDC on BSC Testnet
export const SHARE_ADDRESS =
  "0xD8b5a05538bfB72221a75Ed6b5570d5E7d858228" as Address; // Placeholder for share token, replace with actual

// Staking Contract ABI (fetched from https://testnet.bscscan.com/address/0xb54B2B0Bc772Dedb586DE2685C8941751bebb084#code)
// export const STAKING_ABI = [
//   {
//     "inputs": [{"internalType": "address", "name": "_owner", "type": "address"}],
//     "stateMutability": "nonpayable",
//     "type": "constructor"
//   },
//   {
//     "anonymous": false,
//     "inputs": [
//       {"indexed": false, "internalType": "uint256", "name": "stacke_Id", "type": "uint256"},
//       {"indexed": false, "internalType": "address", "name": "user", "type": "address"},
//       {"indexed": false, "internalType": "uint256", "name": "growthRate", "type": "uint256"},
//       {"indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"},
//       {"indexed": false, "internalType": "uint256", "name": "timeStamp", "type": "uint256"}
//     ],
//     "name": "deposit_Satke",
//     "type": "event"
//   },
//   {
//     "anonymous": false,
//     "inputs": [{"indexed": false, "internalType": "uint256", "name": "stacke_Id", "type": "uint256"}],
//     "name": "forfeit_Ev",
//     "type": "event"
//   },
//   {
//     "anonymous": false,
//     "inputs": [
//       {"indexed": false, "internalType": "address", "name": "from_user", "type": "address"},
//       {"indexed": false, "internalType": "address", "name": "to_user", "type": "address"},
//       {"indexed": false, "internalType": "uint256", "name": "level", "type": "uint256"},
//       {"indexed": false, "internalType": "uint256", "name": "payAmount", "type": "uint256"},
//       {"indexed": false, "internalType": "uint256", "name": "types", "type": "uint256"}
//     ],
//     "name": "income_Ev",
//     "type": "event"
//   },
//   {
//     "anonymous": false,
//     "inputs": [
//       {"indexed": false, "internalType": "address", "name": "_user", "type": "address"},
//       {"indexed": false, "internalType": "address", "name": "referralAddress", "type": "address"}
//     ],
//     "name": "regUserEv",
//     "type": "event"
//   },
//   {
//     "anonymous": false,
//     "inputs": [
//       {"indexed": false, "internalType": "address", "name": "_user", "type": "address"},
//       {"indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"}
//     ],
//     "name": "withdrwal_Stacking",
//     "type": "event"
//   },
//   {
//     "inputs": [],
//     "name": "DAO_Count",
//     "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "DAO_TotalApprovals",
//     "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "DAO_VoteIsOn",
//     "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "DAO_Voting",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "VotingIsOn",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [{"internalType": "address", "name": "_user", "type": "address"}],
//     "name": "activeUser",
//     "outputs": [{"internalType": "bool", "name": "active", "type": "bool"}],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "allStake",
//     "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [{"internalType": "address", "name": "user", "type": "address"}],
//     "name": "avUnStake",
//     "outputs": [{"internalType": "uint256", "name": "avGh", "type": "uint256"}],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [{"internalType": "address", "name": "", "type": "address"}],
//     "name": "bonusInfos",
//     "outputs": [
//       {"internalType": "uint256", "name": "referralGains", "type": "uint256"},
//       {"internalType": "uint256", "name": "levelGains", "type": "uint256"},
//       {"internalType": "uint256", "name": "growthGains", "type": "uint256"},
//       {"internalType": "uint256", "name": "teamGrowthGains", "type": "uint256"},
//       {"internalType": "uint256", "name": "leaderGains", "type": "uint256"},
//       {"internalType": "uint256", "name": "developmentGains", "type": "uint256"},
//       {"internalType": "uint256", "name": "teamLevelStake", "type": "uint256"},
//       {"internalType": "uint256", "name": "lapsTeamStake", "type": "uint256"},
//       {"internalType": "uint256", "name": "totalStake", "type": "uint256"},
//       {"internalType": "uint256", "name": "totalUnStake", "type": "uint256"},
//       {"internalType": "uint256", "name": "totalWithdrwan", "type": "uint256"},
//       {"internalType": "uint256", "name": "inOutBuy", "type": "uint256"}
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "boostLevel",
//     "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [{"internalType": "uint256", "name": "usdAmount", "type": "uint256"}],
//     "name": "buyToken",
//     "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [{"internalType": "address", "name": "userAddress", "type": "address"}],
//     "name": "directUser",
//     "outputs": [{"internalType": "address[]", "name": "referrals", "type": "address[]"}],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "distShare",
//     "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {"internalType": "address", "name": "contractAdd", "type": "address"},
//       {"internalType": "uint256", "name": "runTime", "type": "uint256"},
//       {"internalType": "bool", "name": "looprun", "type": "bool"}
//     ],
//     "name": "fetchOldData",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [{"internalType": "address", "name": "userAddress", "type": "address"}],
//     "name": "findLeaderUser",
//     "outputs": [
//       {"internalType": "address[6]", "name": "ledAdd", "type": "address[6]"},
//       {"internalType": "address[3]", "name": "devAdd", "type": "address[3]"}
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [{"internalType": "uint256", "name": "_amount", "type": "uint256"}],
//     "name": "getPrice",
//     "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "levelDist",
//     "outputs": [{"internalType": "uint8[21]", "name": "levelPer", "type": "uint8[21]"}],
//     "stateMutability": "pure",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {"internalType": "address", "name": "userAddress", "type": "address"},
//       {"internalType": "uint256", "name": "Level", "type": "uint256"}
//     ],
//     "name": "makeLeader",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {"internalType": "uint256", "name": "amount", "type": "uint256"},
//       {"internalType": "address", "name": "userAddress", "type": "address"}
//     ],
//     "name": "makeStake",
//     "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [{"internalType": "uint256", "name": "amount", "type": "uint256"}],
//     "name": "makeUnstake",
//     "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [{"internalType": "address", "name": "_user", "type": "address"}],
//     "name": "matureOrder",
//     "outputs": [
//       {"internalType": "uint256", "name": "activeOrder", "type": "uint256"},
//       {"internalType": "uint256", "name": "lastOrder", "type": "uint256"},
//       {"internalType": "uint256", "name": "unlock_Order", "type": "uint256"},
//       {"internalType": "uint256", "name": "mature_Order", "type": "uint256"},
//       {"internalType": "uint256", "name": "activeLimit", "type": "uint256"}
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [{"internalType": "address", "name": "user", "type": "address"}],
//     "name": "rankQualify",
//     "outputs": [
//       {"internalType": "uint256", "name": "directs", "type": "uint256"},
//       {"internalType": "uint256", "name": "level", "type": "uint256"},
//       {"internalType": "uint256", "name": "strongTeam", "type": "uint256"},
//       {"internalType": "uint256", "name": "totalTeam", "type": "uint256"},
//       {"internalType": "uint256", "name": "fLevel", "type": "uint256"}
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "redeemRate",
//     "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [{"internalType": "address", "name": "referral", "type": "address"}],
//     "name": "regUser",
//     "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "releaseContract",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [{"internalType": "uint256[2]", "name": "_growthRate", "type": "uint256[2]"}],
//     "name": "setGrowths",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [{"internalType": "uint256[]", "name": "_levelSatke", "type": "uint256[]"}],
//     "name": "setLevelStakes",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {"internalType": "uint256", "name": "_teamDepth", "type": "uint256"},
//       {"internalType": "uint256", "name": "_redeemRate", "type": "uint256"},
//       {"internalType": "bool", "name": "_boostLevel", "type": "bool"}
//     ],
//     "name": "setPrams",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [{"internalType": "address", "name": "_shareAddress", "type": "address"}],
//     "name": "setShareAddress",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "shareAddress",
//     "outputs": [{"internalType": "address", "name": "", "type": "address"}],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [{"internalType": "uint256", "name": "stake_Order", "type": "uint256"}],
//     "name": "stakeGrowth",
//     "outputs": [{"internalType": "uint256", "name": "orderGrowth", "type": "uint256"}],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
//     "name": "stakeInfos",
//     "outputs": [
//       {"internalType": "address", "name": "ownerAddress", "type": "address"},
//       {"internalType": "uint256", "name": "orderValue", "type": "uint256"},
//       {"internalType": "uint256", "name": "orderGrowth", "type": "uint256"},
//       {"internalType": "uint256", "name": "orderID", "type": "uint256"},
//       {"internalType": "uint256", "name": "orderTime", "type": "uint256"},
//       {"internalType": "uint256", "name": "isMature", "type": "uint256"},
//       {"internalType": "bool", "name": "isComplete", "type": "bool"}
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "teamDepth",
//     "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {"internalType": "address", "name": "user", "type": "address"},
//       {"internalType": "uint256", "name": "totalTPR", "type": "uint256"}
//     ],
//     "name": "teamGrowthTime",
//     "outputs": [{"internalType": "uint256", "name": "growthTime", "type": "uint256"}],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "tokenAddress",
//     "outputs": [{"internalType": "address", "name": "", "type": "address"}],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [{"internalType": "address", "name": "_user", "type": "address"}],
//     "name": "totalGains",
//     "outputs": [{"internalType": "uint256", "name": "total", "type": "uint256"}],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "totalReg",
//     "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {"internalType": "address", "name": "userAddress", "type": "address"},
//       {"internalType": "bool", "name": "isMatureOrd", "type": "bool"}
//     ],
//     "name": "totalRemainTPR",
//     "outputs": [
//       {"internalType": "uint256", "name": "totalTPR", "type": "uint256"},
//       {"internalType": "uint256", "name": "growthTPR", "type": "uint256"},
//       {"internalType": "uint256", "name": "forfietOrder", "type": "uint256"}
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [{"internalType": "address", "name": "_user", "type": "address"}],
//     "name": "unStakePotential",
//     "outputs": [
//       {"internalType": "uint256", "name": "remainLimit", "type": "uint256"},
//       {"internalType": "uint256", "name": "growthLimit", "type": "uint256"},
//       {"internalType": "uint256", "name": "active_Order", "type": "uint256"},
//       {"internalType": "uint256", "name": "lastOrder", "type": "uint256"},
//       {"internalType": "uint256", "name": "unlock_Order", "type": "uint256"},
//       {"internalType": "uint256", "name": "mature_Order", "type": "uint256"},
//       {"internalType": "uint256", "name": "totGain", "type": "uint256"},
//       {"internalType": "uint256", "name": "OrderValue", "type": "uint256"},
//       {"internalType": "uint256", "name": "orderGrowth", "type": "uint256"},
//       {"internalType": "uint256", "name": "teamGrowth", "type": "uint256"},
//       {"internalType": "uint256", "name": "teamLaps", "type": "uint256"}
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "usdAddress",
//     "outputs": [{"internalType": "address", "name": "", "type": "address"}],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [{"internalType": "address", "name": "", "type": "address"}],
//     "name": "userInfos",
//     "outputs": [
//       {"internalType": "address", "name": "referral", "type": "address"},
//       {"internalType": "uint256", "name": "totalTeam", "type": "uint256"},
//       {"internalType": "uint256", "name": "strongTeam", "type": "uint256"},
//       {"internalType": "uint256", "name": "userLevel", "type": "uint256"},
//       {"internalType": "uint256", "name": "lastStake", "type": "uint256"},
//       {"internalType": "uint256", "name": "forfeitStake", "type": "uint256"},
//       {"internalType": "uint256", "name": "harvestTime", "type": "uint256"},
//       {"internalType": "bool", "name": "isNewStake", "type": "bool"},
//       {"internalType": "bool", "name": "isDAO", "type": "bool"},
//       {"internalType": "bool", "name": "joined", "type": "bool"}
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [{"internalType": "address", "name": "user", "type": "address"}],
//     "name": "userLiveStatus",
//     "outputs": [
//       {"internalType": "uint256", "name": "directs", "type": "uint256"},
//       {"internalType": "uint256", "name": "level", "type": "uint256"},
//       {"internalType": "uint256", "name": "strongLeg", "type": "uint256"},
//       {"internalType": "uint256", "name": "totalTeam", "type": "uint256"},
//       {"internalType": "uint256", "name": "growthVol", "type": "uint256"}
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [{"internalType": "address", "name": "user", "type": "address"}],
//     "name": "userSelfUpdate",
//     "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {"internalType": "address", "name": "user", "type": "address"},
//       {"internalType": "uint256", "name": "stakeCount", "type": "uint256"}
//     ],
//     "name": "userStakeView",
//     "outputs": [
//       {"internalType": "uint256", "name": "totalCount", "type": "uint256"},
//       {
//         "components": [
//           {"internalType": "address", "name": "ownerAddress", "type": "address"},
//           {"internalType": "uint256", "name": "orderValue", "type": "uint256"},
//           {"internalType": "uint256", "name": "orderGrowth", "type": "uint256"},
//           {"internalType": "uint256", "name": "orderID", "type": "uint256"},
//           {"internalType": "uint256", "name": "orderTime", "type": "uint256"},
//           {"internalType": "uint256", "name": "isMature", "type": "uint256"},
//           {"internalType": "bool", "name": "isComplete", "type": "bool"}
//         ],
//         "internalType": "struct SELFMINT_STAKING.order",
//         "name": "stakeInfo",
//         "type": "tuple"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   }
// ] as const;

export const STAKING_ABI = [
  {
    inputs: [{ internalType: "address", name: "_owner", type: "address" }],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "stacke_Id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "growthRate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timeStamp",
        type: "uint256",
      },
    ],
    name: "deposit_Satke",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "stacke_Id",
        type: "uint256",
      },
    ],
    name: "forfeit_Ev",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "from_user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to_user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "level",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "payAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "types",
        type: "uint256",
      },
    ],
    name: "income_Ev",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "referralAddress",
        type: "address",
      },
    ],
    name: "regUserEv",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
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
    outputs: [
      { internalType: "address[]", name: "referrals", type: "address[]" },
    ],
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
    outputs: [
      { internalType: "uint8[21]", name: "levelPer", type: "uint8[21]" },
    ],
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
    inputs: [
      { internalType: "uint256[2]", name: "_growthRate", type: "uint256[2]" },
    ],
    name: "setGrowths",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256[]", name: "_levelSatke", type: "uint256[]" },
    ],
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
    inputs: [
      { internalType: "address", name: "_shareAddress", type: "address" },
    ],
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
    outputs: [
      { internalType: "uint256", name: "orderGrowth", type: "uint256" },
    ],
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
];

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

// Staking contract interaction functions
export const stakingInteractions = {
  /**
   * Approve USDC spending for the staking contract
   * @param amount - Amount to approve (in wei)
   * @param account - Wallet address to send the transaction from
   * @returns Transaction hash
   */
  async approveUSDC(amount: bigint, account: Address): Promise<string> {
    try {
      console.log(
        `Approving ${formatEther(
          amount
        )} USDC for staking contract ${STAKING_CONTRACT_ADDRESS}`
      );

      const txHash = await usdcContractInteractions.approveUSDC(
        STAKING_CONTRACT_ADDRESS,
        amount,
        account
      );

      console.log(`Approval transaction submitted: ${txHash}`);

      return txHash;
    } catch (error: any) {
      console.error(`Error approving USDC:`, error);
      if (
        error.message?.includes("gasLimit") ||
        error.message?.includes("Cannot destructure")
      ) {
        throw new Error(
          "Network configuration error. Please ensure you are connected to BSC Testnet and try again."
        );
      }
      throw new Error(
        `Failed to approve USDC: ${error.message || "Unknown error"}`
      );
    }
  },

  /**
   * Get USDC balance for an address
   * @param account - Wallet address
   * @returns USDC balance in wei
   */
  async getUSDCBalance(account: Address): Promise<bigint> {
    try {
      const balance = (await readContract(config, {
        abi: USDC_ABI,
        address: USDC_ADDRESS,
        functionName: "balanceOf",
        args: [account],
        chainId: BSC_TESTNET_CHAIN_ID,
      })) as bigint;
      console.log(`USDC balance for ${account}: ${formatEther(balance)} USDC`);
      return balance;
    } catch (error: any) {
      console.error(`Error fetching USDC balance: ${error.message || error}`);
      throw new Error(
        `Failed to fetch USDC balance: ${error.message || "Unknown error"}`
      );
    }
  },

  /**
   * Get the USD token address configured in the staking contract
   * @returns USD token address
   */
  async getUSDAddress(): Promise<Address> {
    try {
      const usdAddress = (await readContract(config, {
        abi: STAKING_ABI,
        address: STAKING_CONTRACT_ADDRESS,
        functionName: "usdAddress",
        chainId: BSC_TESTNET_CHAIN_ID,
      })) as Address;
      console.log(`Contract USD address: ${usdAddress}`);
      return usdAddress;
    } catch (error: any) {
      console.error(`Error fetching USD address: ${error.message || error}`);
      throw new Error(
        `Failed to fetch USD address: ${error.message || "Unknown error"}`
      );
    }
  },

  /**
   * Register a user with a referral
   * @param referral - Referral address
   * @returns Transaction hash
   */
  async regUser(referral: Address, account: Address): Promise<string> {
    try {
      console.log(`Attempting to register user with referrer: ${referral}`);

      if (referral === "0x0000000000000000000000000000000000000000") {
        throw new Error(
          "Invalid referrer address: zero address is not allowed"
        );
      }

      const ethAddressRegex = /^0x[a-fA-F0-9]{40}$/;
      if (!ethAddressRegex.test(referral)) {
        throw new Error("Invalid referrer address format");
      }

      const txHash = await writeContract(config, {
        abi: STAKING_ABI,
        address: STAKING_CONTRACT_ADDRESS,
        functionName: "regUser",
        args: [referral],
        chain: bscTestnet,
        account: account,
        gas: undefined,
      });

      console.log(
        `Registration transaction submitted successfully. Hash: ${txHash}`
      );
      return txHash;
    } catch (error: any) {
      console.error("Error registering user:", error);
      if (error.message?.includes("user rejected")) {
        throw new Error("Transaction rejected by user");
      } else if (error.message?.includes("insufficient funds")) {
        throw new Error("Insufficient funds for gas fees");
      } else if (
        error.message?.includes("already registered") ||
        error.message?.includes("already exists")
      ) {
        throw new Error("Address is already registered");
      } else if (error.message?.includes("invalid address")) {
        throw new Error("Invalid referrer address");
      } else if (error.message?.includes("gas")) {
        throw new Error("Network congestion. Please try again later");
      } else {
        throw new Error(
          `Registration failed: ${error.message || "Unknown error occurred"}`
        );
      }
    }
  },

  /**
   * Buy tokens using USDC
   * @param usdAmount - Amount of USDC to spend (in wei)
   * @param account - Wallet address to send the transaction from
   * @returns Transaction hash
   */
  async buyToken(usdAmount: bigint, account: Address): Promise<string> {
    try {
      // Get USDC decimals
      const decimals = await readContract(config, {
        abi: USDC_ABI,
        address: USDC_ADDRESS,
        functionName: "decimals",
        chainId: BSC_TESTNET_CHAIN_ID,
      });
      console.log("USDC Decimals:", decimals);
      const amountFormatted = formatUnits(usdAmount, Number(decimals));
      console.log(`Buying tokens with ${amountFormatted} USDC`);

      // Verify allowance
      const allowance = (await readContract(config, {
        abi: USDC_ABI,
        address: USDC_ADDRESS,
        functionName: "allowance",
        args: [account, STAKING_CONTRACT_ADDRESS],
        chainId: BSC_TESTNET_CHAIN_ID,
      })) as bigint;
      console.log("Allowance:", formatUnits(allowance, Number(decimals)));
      if (allowance < usdAmount) {
        throw new Error(
          `Insufficient allowance. Approved: ${formatUnits(
            allowance,
            Number(decimals)
          )} USDC, Required: ${amountFormatted} USDC`
        );
      }

      // Simulate transaction
      console.log("Simulating buyToken transaction...");
      await simulateContract(config, {
        abi: STAKING_ABI,
        address: STAKING_CONTRACT_ADDRESS,
        functionName: "buyToken",
        args: [usdAmount],
        account: account,
        chainId: BSC_TESTNET_CHAIN_ID,
      });

      // Execute transaction with manual gas limit
      console.log("Executing buyToken transaction...");
      const txHash = await writeContract(config, {
        abi: STAKING_ABI,
        address: STAKING_CONTRACT_ADDRESS,
        functionName: "buyToken",
        args: [usdAmount],
        chain: bscTestnet,
        account: account,
        gas: BigInt(500000), // Manual gas limit to avoid estimation issues
      });
      console.log(`Buy token transaction successful: ${txHash}`);
      return txHash;
    } catch (error: any) {
      console.error("Error buying tokens:", error);
      if (error.cause?.data) {
        const decodedError = decodeErrorResult({
          abi: STAKING_ABI,
          data: error.cause.data,
        });
        throw new Error(
          `Buy token failed: ${decodedError.errorName || "Unknown error"} - ${
            decodedError.args?.join(", ") || ""
          }`
        );
      }
      throw new Error(
        `Failed to buy tokens: ${error.message || "Unknown error"}`
      );
    }
  },

  /**
   * Stake tokens
   * @param amount - Amount to stake (in wei)
   * @param userAddress - Address to stake for
   * @returns Transaction hash
   */
  // async makeStake(amount: bigint, userAddress: Address): Promise<string> {
  //   try {
  //     console.log(`Staking ${formatEther(amount)} DAI for ${userAddress}`);

  //     // Verify allowance
  //     const allowance = await readContract(config, {
  //       abi: USDC_ABI,
  //       address: USDC_ADDRESS,
  //       functionName: 'allowance',
  //       args: [userAddress, STAKING_CONTRACT_ADDRESS],
  //       chainId: BSC_TESTNET_CHAIN_ID,
  //     }) as bigint;

  //     if (allowance < amount) {
  //       throw new Error(`Insufficient allowance. Approved: ${formatEther(allowance)} USDC, Required: ${formatEther(amount)} USDC`);
  //     }

  //     const txHash = await writeContract(config, {
  //       abi: STAKING_ABI,
  //       address: STAKING_CONTRACT_ADDRESS,
  //       functionName: 'makeStake',
  //       args: [amount, userAddress],
  //       chain: bscTestnet,
  //       account: userAddress,
  //       gas: undefined,
  //     });
  //     console.log(`Stake transaction successful: ${txHash}`);
  //     return txHash;
  //   } catch (error: any) {
  //     console.error(`Error staking tokens:`, error);
  //     throw new Error(`Failed to stake tokens: ${error.message || 'Unknown error'}`);
  //   }
  // },
  async makeStake(amount: string, userAddress: Address): Promise<string> {
    try {
      console.log(`Staking ${amount} USDC for ${userAddress}`);

      // Get USDC decimals
      const decimals = await readContract(config, {
        abi: USDC_ABI,
        address: USDC_ADDRESS,
        functionName: "decimals",
        chainId: BSC_TESTNET_CHAIN_ID,
      });
      console.log("USDC Decimals:", decimals);

      // Convert user-friendly amount → wei
      const amountInWei = parseUnits(amount, Number(decimals));
      console.log(`Converted Amount: ${amountInWei.toString()} wei`);

      // Verify allowance
      const allowance = (await readContract(config, {
        abi: USDC_ABI,
        address: USDC_ADDRESS,
        functionName: "allowance",
        args: [userAddress, STAKING_CONTRACT_ADDRESS],
        chainId: BSC_TESTNET_CHAIN_ID,
      })) as bigint;

      console.log("Allowance:", formatUnits(allowance, Number(decimals)));
      if (allowance < amountInWei) {
        throw new Error(
          `Insufficient allowance. Approved: ${formatUnits(
            allowance,
            Number(decimals)
          )} USDC, Required: ${amount} USDC`
        );
      }

      // Simulate transaction
      console.log("Simulating makeStake transaction...");
      // await simulateContract(config, {
      //   abi: STAKING_ABI,
      //   address: STAKING_CONTRACT_ADDRESS,
      //   functionName: 'makeStake',
      //   args: [amountInWei, userAddress],
      //   account: userAddress,
      //   chainId: BSC_TESTNET_CHAIN_ID,
      // });

      // Execute transaction
      console.log("Executing makeStake transaction...");
      const txHash = await writeContract(config, {
        abi: STAKING_ABI,
        address: STAKING_CONTRACT_ADDRESS,
        functionName: "makeStake",
        args: [amount, userAddress],
        chain: bscTestnet,
        account: userAddress,
        // gas: BigInt(500000), // Manual gas limit
      });

      console.log(`Stake transaction successful: ${txHash}`);
      return txHash;
    } catch (error: any) {
      console.error("Error staking tokens:", error);
      if (error.cause?.data) {
        const decodedError = decodeErrorResult({
          abi: STAKING_ABI,
          data: error.cause.data,
        });
        throw new Error(
          `Stake failed: ${decodedError.errorName || "Unknown error"} - ${
            decodedError.args?.join(", ") || ""
          }`
        );
      }
      throw new Error(
        `Failed to stake tokens: ${error.message || "Unknown error"}`
      );
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
      console.log(`Unstaking ${formatEther(amount)} DAI for ${account}`);
      const txHash = await writeContract(config, {
        abi: STAKING_ABI,
        address: STAKING_CONTRACT_ADDRESS,
        functionName: "makeUnstake",
        args: [amount],
        chain: bscTestnet,
        account: account,
        gas: undefined,
      });
      console.log(`Unstake transaction successful: ${txHash}`);
      return txHash;
    } catch (error: any) {
      console.error(`Error unstaking tokens:`, error);
      throw new Error(
        `Failed to unstake tokens: ${error.message || "Unknown error"}`
      );
    }
  },

  /**
   * Get user stake information
   * @param user - User address
   * @param stakeCount - Stake index to view
   * @returns Total count and stake info
   */
  async userStakeView(
    user: Address,
    stakeCount: bigint
  ): Promise<UserStakeView> {
    try {
      const [totalCount, stakeInfo] = (await readContract(config, {
        abi: STAKING_ABI,
        address: STAKING_CONTRACT_ADDRESS,
        functionName: "userStakeView",
        args: [user, stakeCount],
        chainId: BSC_TESTNET_CHAIN_ID,
      })) as readonly [bigint, StakeInfo];

      return {
        totalCount,
        stakeInfo,
      };
    } catch (error: any) {
      console.error(`Error fetching stake info: ${error.message || error}`);
      throw new Error(
        `Failed to fetch stake info: ${error.message || "Unknown error"}`
      );
    }
  },

  /**
   * Get bonus information for a user
   * @param user - User address
   * @returns Bonus information
   */
  async getBonusInfo(user: Address): Promise<BonusInfo> {
    try {
      const result = (await readContract(config, {
        abi: STAKING_ABI,
        address: STAKING_CONTRACT_ADDRESS,
        functionName: "bonusInfos",
        args: [user],
        chainId: BSC_TESTNET_CHAIN_ID,
      })) as [
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint
      ];

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
      throw new Error(
        `Failed to fetch bonus info: ${error.message || "Unknown error"}`
      );
    }
  },

  /**
   * Get user information
   * @param user - User address
   * @returns User information
   */
  async getUserInfo(user: Address): Promise<UserInfo> {
    try {
      const result = (await readContract(config, {
        abi: STAKING_ABI,
        address: STAKING_CONTRACT_ADDRESS,
        functionName: "userInfos",
        args: [user],
        chainId: BSC_TESTNET_CHAIN_ID,
      })) as [
        Address,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        boolean,
        boolean,
        boolean
      ];

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
      throw new Error(
        `Failed to fetch user info: ${error.message || "Unknown error"}`
      );
    }
  },

  /**
   * Get mature order information
   * @param user - User address
   * @returns Mature order details
   */
  async getMatureOrder(user: Address): Promise<MatureOrder> {
    try {
      const [activeOrder, lastOrder, unlock_Order, mature_Order, activeLimit] =
        (await readContract(config, {
          abi: STAKING_ABI,
          address: STAKING_CONTRACT_ADDRESS,
          functionName: "matureOrder",
          args: [user],
          chainId: BSC_TESTNET_CHAIN_ID,
        })) as [bigint, bigint, bigint, bigint, bigint];

      return {
        activeOrder,
        lastOrder,
        unlock_Order,
        mature_Order,
        activeLimit,
      };
    } catch (error: any) {
      console.error(`Error fetching mature order: ${error.message || error}`);
      throw new Error(
        `Failed to fetch mature order: ${error.message || "Unknown error"}`
      );
    }
  },

  /**
   * Get rank qualification details
   * @param user - User address
   * @returns Rank qualification details
   */
  async getRankQualify(user: Address): Promise<RankQualify> {
    try {
      const [directs, level, strongTeam, totalTeam, fLevel] =
        (await readContract(config, {
          abi: STAKING_ABI,
          address: STAKING_CONTRACT_ADDRESS,
          functionName: "rankQualify",
          args: [user],
          chainId: BSC_TESTNET_CHAIN_ID,
        })) as [bigint, bigint, bigint, bigint, bigint];

      return { directs, level, strongTeam, totalTeam, fLevel };
    } catch (error: any) {
      console.error(
        `Error fetching rank qualification: ${error.message || error}`
      );
      throw new Error(
        `Failed to fetch rank qualification: ${
          error.message || "Unknown error"
        }`
      );
    }
  },

  /**
   * Get unstake potential
   * @param user - User address
   * @returns Unstake potential details
   */
  async getUnStakePotential(user: Address): Promise<UnStakePotential> {
    try {
      const result = (await readContract(config, {
        abi: STAKING_ABI,
        address: STAKING_CONTRACT_ADDRESS,
        functionName: "unStakePotential",
        args: [user],
        chainId: BSC_TESTNET_CHAIN_ID,
      })) as [
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint
      ];

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
      console.error(
        `Error fetching unstake potential: ${error.message || error}`
      );
      throw new Error(
        `Failed to fetch unstake potential: ${error.message || "Unknown error"}`
      );
    }
  },

  /**
   * Get total remaining TPR
   * @param userAddress - User address
   * @param isMatureOrd - Whether to consider mature orders
   * @returns Total remaining TPR details
   */
  async getTotalRemainTPR(
    userAddress: Address,
    isMatureOrd: boolean
  ): Promise<TotalRemainTPR> {
    try {
      const [totalTPR, growthTPR, forfietOrder] = (await readContract(config, {
        abi: STAKING_ABI,
        address: STAKING_CONTRACT_ADDRESS,
        functionName: "totalRemainTPR",
        args: [userAddress, isMatureOrd],
        chainId: BSC_TESTNET_CHAIN_ID,
      })) as [bigint, bigint, bigint];

      return { totalTPR, growthTPR, forfietOrder };
    } catch (error: any) {
      console.error(
        `Error fetching total remaining TPR: ${error.message || error}`
      );
      throw new Error(
        `Failed to fetch total remaining TPR: ${
          error.message || "Unknown error"
        }`
      );
    }
  },

  /**
   * Get token price for a given amount
   * @param amount - Amount in wei
   * @returns Price in wei
   */
  async getPrice(amount: bigint): Promise<bigint> {
    try {
      const price = (await readContract(config, {
        abi: STAKING_ABI,
        address: STAKING_CONTRACT_ADDRESS,
        functionName: "getPrice",
        args: [amount],
        chainId: BSC_TESTNET_CHAIN_ID,
      })) as bigint;
      console.log(
        `Price for ${formatEther(amount)} DAI: ${formatEther(price)} INOUT`
      );
      return price;
    } catch (error: any) {
      console.error(`Error fetching price: ${error.message || error}`);
      throw new Error(
        `Failed to fetch price: ${error.message || "Unknown error"}`
      );
    }
  },

  /**
   * Check if a user is active
   * @param user - User address
   * @returns Active status
   */
  async activeUser(user: Address): Promise<boolean> {
    try {
      const isActive = (await readContract(config, {
        abi: STAKING_ABI,
        address: STAKING_CONTRACT_ADDRESS,
        functionName: "activeUser",
        args: [user],
        chainId: BSC_TESTNET_CHAIN_ID,
      })) as boolean;
      console.log(`User ${user} active status: ${isActive}`);
      return isActive;
    } catch (error: any) {
      console.error(`Error checking active user: ${error.message || error}`);
      throw new Error(
        `Failed to check active user: ${error.message || "Unknown error"}`
      );
    }
  },

  /**
   * Update user status
   * @param user - User address
   * @returns Transaction hash
   */
  async userSelfUpdate(user: Address): Promise<string> {
    try {
      console.log(`Updating status for user: ${user}`);
      const txHash = await writeContract(config, {
        abi: STAKING_ABI,
        address: STAKING_CONTRACT_ADDRESS,
        functionName: "userSelfUpdate",
        args: [user],
        chain: bscTestnet,
        account: user,
        gas: undefined,
      });
      console.log(`User update transaction successful: ${txHash}`);
      return txHash;
    } catch (error: any) {
      console.error(`Error updating user status:`, error);
      throw new Error(
        `Failed to update user status: ${error.message || "Unknown error"}`
      );
    }
  },

  /**
   * Get direct referrals for a user
   * @param userAddress - User address
   * @returns Array of referral addresses
   */
  async getDirectUser(userAddress: Address): Promise<Address[]> {
    try {
      const referrals = (await readContract(config, {
        abi: STAKING_ABI,
        address: STAKING_CONTRACT_ADDRESS,
        functionName: "directUser",
        args: [userAddress],
        chainId: BSC_TESTNET_CHAIN_ID,
      })) as Address[];
      console.log(`Direct referrals for ${userAddress}:`, referrals);
      return referrals;
    } catch (error: any) {
      console.error(
        `Error fetching direct referrals: ${error.message || error}`
      );
      throw new Error(
        `Failed to fetch direct referrals: ${error.message || "Unknown error"}`
      );
    }
  },

  /**
   * Find leader and developer addresses
   * @param userAddress - User address
   * @returns Leader and developer addresses
   */
  async findLeaderUser(userAddress: Address): Promise<FindLeaderUser> {
    try {
      const [ledAdd, devAdd] = (await readContract(config, {
        abi: STAKING_ABI,
        address: STAKING_CONTRACT_ADDRESS,
        functionName: "findLeaderUser",
        args: [userAddress],
        chainId: BSC_TESTNET_CHAIN_ID,
      })) as [
        [Address, Address, Address, Address, Address, Address],
        [Address, Address, Address]
      ];

      console.log(`Leader addresses for ${userAddress}:`, ledAdd);
      console.log(`Developer addresses for ${userAddress}:`, devAdd);
      return { ledAdd, devAdd };
    } catch (error: any) {
      console.error(`Error fetching leader user: ${error.message || error}`);
      throw new Error(
        `Failed to fetch leader user: ${error.message || "Unknown error"}`
      );
    }
  },
};

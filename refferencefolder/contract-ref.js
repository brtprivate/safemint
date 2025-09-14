const DAddress = "0x60E1986Eb35F65916C46636b3cB12b54db087761";

const  mainABIData = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "stacke_Id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "growthRate",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timeStamp",
				"type": "uint256"
			}
		],
		"name": "deposit_Satke",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "stacke_Id",
				"type": "uint256"
			}
		],
		"name": "forfeit_Ev",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "from_user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "to_user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "level",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "payAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "types",
				"type": "uint256"
			}
		],
		"name": "income_Ev",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "_user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "referralAddress",
				"type": "address"
			}
		],
		"name": "regUserEv",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "_user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "withdrwal_Stacking",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "DAO_Count",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "DAO_TotalApprovals",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "DAO_VoteIsOn",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
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
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "activeUser",
		"outputs": [
			{
				"internalType": "bool",
				"name": "active",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "allStake",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "avUnStake",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "avGh",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "bonusInfos",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "referralGains",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "levelGains",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "growthGains",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "teamGrowthGains",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "leaderGains",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "developmentGains",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "teamLevelStake",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "lapsTeamStake",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalStake",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalUnStake",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalWithdrwan",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "inOutBuy",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "boostLevel",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "usdAmount",
				"type": "uint256"
			}
		],
		"name": "buyToken",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			}
		],
		"name": "directUser",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "referrals",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "distShare",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "contractAdd",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "runTime",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "looprun",
				"type": "bool"
			}
		],
		"name": "fetchOldData",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			}
		],
		"name": "findLeaderUser",
		"outputs": [
			{
				"internalType": "address[6]",
				"name": "ledAdd",
				"type": "address[6]"
			},
			{
				"internalType": "address[3]",
				"name": "devAdd",
				"type": "address[3]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "getPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "levelDist",
		"outputs": [
			{
				"internalType": "uint8[21]",
				"name": "levelPer",
				"type": "uint8[21]"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "Level",
				"type": "uint256"
			}
		],
		"name": "makeLeader",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			}
		],
		"name": "makeStake",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "makeUnstake",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "matureOrder",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "activeOrder",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "lastOrder",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "unlock_Order",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "mature_Order",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "activeLimit",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "rankQualify",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "directs",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "level",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "strongTeam",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalTeam",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "fLevel",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "redeemRate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "referral",
				"type": "address"
			}
		],
		"name": "regUser",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
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
		"inputs": [
			{
				"internalType": "uint256[2]",
				"name": "_growthRate",
				"type": "uint256[2]"
			}
		],
		"name": "setGrowths",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "_levelSatke",
				"type": "uint256[]"
			}
		],
		"name": "setLevelStakes",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_teamDepth",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_redeemRate",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "_boostLevel",
				"type": "bool"
			}
		],
		"name": "setPrams",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_shareAddress",
				"type": "address"
			}
		],
		"name": "setShareAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "shareAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "stake_Order",
				"type": "uint256"
			}
		],
		"name": "stakeGrowth",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "orderGrowth",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "stakeInfos",
		"outputs": [
			{
				"internalType": "address",
				"name": "ownerAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "orderValue",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "orderGrowth",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "orderID",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "orderTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "isMature",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "isComplete",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "teamDepth",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "totalTPR",
				"type": "uint256"
			}
		],
		"name": "teamGrowthTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "growthTime",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "tokenAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "totalGains",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "total",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalReg",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "isMatureOrd",
				"type": "bool"
			}
		],
		"name": "totalRemainTPR",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "totalTPR",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "growthTPR",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "forfietOrder",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "unStakePotential",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "remainLimit",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "growthLimit",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "active_Order",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "lastOrder",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "unlock_Order",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "mature_Order",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totGain",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "OrderValue",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "orderGrowth",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "teamGrowth",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "teamLaps",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "usdAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "userInfos",
		"outputs": [
			{
				"internalType": "address",
				"name": "referral",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "totalTeam",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "strongTeam",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "userLevel",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "lastStake",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "forfeitStake",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "harvestTime",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "isNewStake",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "isDAO",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "joined",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "userLiveStatus",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "directs",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "level",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "strongLeg",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalTeam",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "growthVol",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "userSelfUpdate",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "stakeCount",
				"type": "uint256"
			}
		],
		"name": "userStakeView",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "totalCount",
				"type": "uint256"
			},
			{
				"components": [
					{
						"internalType": "address",
						"name": "ownerAddress",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "orderValue",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "orderGrowth",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "orderID",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "orderTime",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "isMature",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "isComplete",
						"type": "bool"
					}
				],
				"internalType": "struct INOUT_STAKING.order",
				"name": "stakeInfo",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];


const tokenContractABI =[
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_usdtToken",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OwnableInvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
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
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "inOutAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "usdReceived",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "inOutPrice",
				"type": "uint256"
			}
		],
		"name": "Burned",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "usdAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "inOutReceived",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "inOutPrice",
				"type": "uint256"
			}
		],
		"name": "Minted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newRate",
				"type": "uint256"
			}
		],
		"name": "RateAdjusted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "InitialRate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "burnSlippage",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "usdAmount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "toAddress",
				"type": "address"
			}
		],
		"name": "buyInout",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "usdAmount",
				"type": "uint256"
			}
		],
		"name": "buyInout",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getReserves",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_reserve0",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_reserve1",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_blockTimestampLast",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "isBuyOn",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "isBuyOn_Off",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "rateInUSDT",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenAmount",
				"type": "uint256"
			}
		],
		"name": "sellInout",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenAmount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "toAddress",
				"type": "address"
			}
		],
		"name": "sellInout",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newaddress",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "flag",
				"type": "bool"
			}
		],
		"name": "whiteList",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
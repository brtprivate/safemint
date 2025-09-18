import React, { useState } from 'react';
import { Button, Card, CardContent, Typography, Box, CircularProgress, TextField } from '@mui/material';
import { readContract } from '@wagmi/core';
import { formatUnits } from 'viem';
import { config } from '../config/web3modal';

// Contract addresses and ABIs
const STAKING_CONTRACT_ADDRESS = '0xd5017C72215F927F8e9386006f3fede65aeBa405';
const USDT_ADDRESS = '0x55d398326f99059fF775485246999027B3197955';

const USDT_ABI = [
  {
    inputs: [],
    name: 'decimals',
    outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
    stateMutability: 'view',
    type: 'function',
  },
];

const STAKING_ABI = [
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
];

const TeamGrowthChecker = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const targetAddress = '0x8ACe33fe8f5F7542b62407520855622F8cf07218';

  // Also test with a known working address for comparison
  const [testAddress, setTestAddress] = useState(targetAddress);

  const fetchTeamGrowthData = async () => {
    setLoading(true);
    setError('');
    setResult(null);

    try {
      console.log('🔍 Fetching Team Growth Wallet data for:', targetAddress);

      // Get USDT decimals
      const decimals = await readContract(config, {
        abi: USDT_ABI,
        address: USDT_ADDRESS,
        functionName: 'decimals',
        chainId: 56,
      });
      console.log('💰 USDT Decimals:', decimals);

      // First check if user is registered
      const userInfo = await readContract(config, {
        abi: STAKING_ABI,
        address: STAKING_CONTRACT_ADDRESS,
        functionName: 'userInfos',
        args: [testAddress],
        chainId: 56,
      });

      console.log('👤 User Info:', userInfo);

      if (!userInfo[9]) { // joined is at index 9
        throw new Error('User is not registered in the system');
      }

      // Get bonus info
      const bonusInfo = await readContract(config, {
        abi: STAKING_ABI,
        address: STAKING_CONTRACT_ADDRESS,
        functionName: 'bonusInfos',
        args: [testAddress],
        chainId: 56,
      });

      console.log('📊 Raw Bonus Info:', bonusInfo);

      // Extract teamGrowthGains (4th element, index 3)
      const teamGrowthGainsRaw = bonusInfo[3];
      console.log('🎯 Team Growth Gains Raw:', teamGrowthGainsRaw.toString());

      // Format the value (same logic as Dashboard.jsx)
      const isWeiFormat = (value) => Number(value) > 1000000;
      
      let teamGrowthWallet;
      if (!teamGrowthGainsRaw || teamGrowthGainsRaw === 0n) {
        teamGrowthWallet = 0;
      } else if (isWeiFormat(teamGrowthGainsRaw)) {
        teamGrowthWallet = parseFloat(formatUnits(teamGrowthGainsRaw, Number(decimals))) || 0;
      } else {
        teamGrowthWallet = parseFloat(teamGrowthGainsRaw.toString()) || 0;
      }

      const resultData = {
        address: testAddress,
        teamGrowthWalletRaw: teamGrowthGainsRaw.toString(),
        teamGrowthWalletFormatted: teamGrowthWallet,
        decimals: Number(decimals),
        allBonusInfo: {
          referralGains: bonusInfo[0].toString(),
          levelGains: bonusInfo[1].toString(),
          growthGains: bonusInfo[2].toString(),
          teamGrowthGains: bonusInfo[3].toString(),
          leaderGains: bonusInfo[4].toString(),
          developmentGains: bonusInfo[5].toString(),
          teamLevelStake: bonusInfo[6].toString(),
          lapsTeamStake: bonusInfo[7].toString(),
          totalStake: bonusInfo[8].toString(),
          totalUnStake: bonusInfo[9].toString(),
          totalWithdrawn: bonusInfo[10].toString(),
          inOutBuy: bonusInfo[11].toString(),
        }
      };

      setResult(resultData);
      console.log('✅ Final Result:', resultData);

    } catch (error) {
      console.error('❌ Error fetching data:', error);
      setError(`Error: ${error.message || 'Unknown error'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card sx={{ maxWidth: 800, margin: 'auto', mt: 4 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Team Growth Wallet Checker
        </Typography>
        
        <TextField
          fullWidth
          label="Wallet Address"
          value={testAddress}
          onChange={(e) => setTestAddress(e.target.value)}
          sx={{ mb: 2 }}
          placeholder="Enter wallet address to check"
        />

        <Button
          variant="contained"
          onClick={fetchTeamGrowthData}
          disabled={loading || !testAddress}
          sx={{ mb: 3 }}
        >
          {loading ? <CircularProgress size={24} /> : 'Fetch Team Growth Data'}
        </Button>

        {error && (
          <Box sx={{ mb: 2, p: 2, bgcolor: 'error.light', borderRadius: 1 }}>
            <Typography color="error">{error}</Typography>
          </Box>
        )}

        {result && (
          <Box>
            <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
              🎯 Team Growth Wallet: {result.teamGrowthWalletFormatted} USDT
            </Typography>
            
            <Typography variant="body2" sx={{ mb: 1 }}>
              Raw Value: {result.teamGrowthWalletRaw}
            </Typography>
            
            <Typography variant="h6" sx={{ mt: 3, mb: 2 }}>
              📊 Complete Bonus Info:
            </Typography>
            
            <Box sx={{ fontFamily: 'monospace', fontSize: '0.875rem' }}>
              <div>├─ Referral Gains: {result.allBonusInfo.referralGains}</div>
              <div>├─ Level Gains: {result.allBonusInfo.levelGains}</div>
              <div>├─ Growth Gains: {result.allBonusInfo.growthGains}</div>
              <div style={{ color: '#1976d2', fontWeight: 'bold' }}>
                ├─ Team Growth Gains: {result.allBonusInfo.teamGrowthGains} ← Team Growth Wallet
              </div>
              <div>├─ Leader Gains: {result.allBonusInfo.leaderGains}</div>
              <div>├─ Development Gains: {result.allBonusInfo.developmentGains}</div>
              <div>├─ Team Level Stake: {result.allBonusInfo.teamLevelStake}</div>
              <div>├─ Laps Team Stake: {result.allBonusInfo.lapsTeamStake}</div>
              <div>├─ Total Stake: {result.allBonusInfo.totalStake}</div>
              <div>├─ Total UnStake: {result.allBonusInfo.totalUnStake}</div>
              <div>├─ Total Withdrawn: {result.allBonusInfo.totalWithdrawn}</div>
              <div>└─ In Out Buy: {result.allBonusInfo.inOutBuy}</div>
            </Box>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default TeamGrowthChecker;

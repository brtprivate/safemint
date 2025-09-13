import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  CircularProgress,
  Alert,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { useWallet } from '../context/WalletContext';
import { useChainId, useSwitchChain } from 'wagmi';
import { formatUnits, parseUnits, decodeErrorResult } from 'viem';
import { readContract, waitForTransactionReceipt, simulateContract } from '@wagmi/core';
import { config } from '../config/web3modal';
import { stakingInteractions, USDC_ADDRESS, STAKING_CONTRACT_ADDRESS, USDC_ABI, STAKING_ABI } from '../services/selfmintStakingService';

// Icons
import PeopleIcon from '@mui/icons-material/People';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import DiamondIcon from '@mui/icons-material/Diamond';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import TimelineIcon from '@mui/icons-material/Timeline';
import RefreshIcon from '@mui/icons-material/Refresh';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const MLMDashboard = () => {
  const wallet = useWallet();
  const chainId = useChainId();
  const { switchChain } = useSwitchChain();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [buyAmount, setBuyAmount] = useState('');
  const [sellAmount, setSellAmount] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [orderHistory, setOrderHistory] = useState([]);
  const [orderLoading, setOrderLoading] = useState(false);
  const [notRegistered, setNotRegistered] = useState(false);
  const [mlmData, setMlmData] = useState({
    directTeam: 0,
    strongTeam: 0,
    otherTeams: 0,
    levels: 0,
    totalIn: 0,
    totalOut: 0,
    activePortfolio: 0,
    teamGrowthWallet: 0,
    referralEarn: 0,
    levelEarn: 0,
    growthEarn: 0,
    leaderEarn: 0,
    developmentEarn: 0,
    totalWithdrawn: 0,
    teamGrowthLaps: 0,
    inOutBuy: 0,
    growthFuels: 0,
    activeOrders: 0,
  });

  const fetchMlmData = async () => {
    if (!wallet.isConnected || !wallet.account) {
      setError('Wallet not connected. Please connect your wallet.');
      return;
    }

    try {
      setIsLoading(true);
      setError('');

      const userInfo = await stakingInteractions.getUserInfo(wallet.account);
      if (!userInfo?.joined) {
        setNotRegistered(true);
        setIsLoading(false);
        return;
      }

      setNotRegistered(false);

      const [bonusInfo, rankQualify, directReferrals, unStakePotential, matureOrder] = await Promise.all([
        stakingInteractions.getBonusInfo(wallet.account).catch(() => ({})),
        stakingInteractions.getRankQualify(wallet.account).catch(() => ({})),
        stakingInteractions.getDirectUser(wallet.account).catch(() => []),
        stakingInteractions.getUnStakePotential(wallet.account).catch(() => ({})),
        stakingInteractions.getMatureOrder(wallet.account).catch(() => ({})),
      ]);

      const decimals = await readContract(config, {
        abi: USDC_ABI,
        address: USDC_ADDRESS,
        functionName: 'decimals',
        chainId: 56,
      });

      const directTeam = directReferrals?.length || 0;
      const strongTeam = Number(rankQualify?.strongTeam || 0);
      const totalTeam = Number(rankQualify?.totalTeam || 0);
      const otherTeams = totalTeam - directTeam - strongTeam;
      const levels = Number(rankQualify?.level || 0);
      const activeOrders = Number(matureOrder?.activeOrder || 0);
      const totalIn = parseFloat(formatUnits(bonusInfo?.totalStake || 0, Number(decimals))) || 0;
      const totalOut =
        (parseFloat(formatUnits(bonusInfo?.referralGains || 0, Number(decimals))) || 0) +
        (parseFloat(formatUnits(bonusInfo?.levelGains || 0, Number(decimals))) || 0) +
        (parseFloat(formatUnits(bonusInfo?.growthGains || 0, Number(decimals))) || 0);
      const activePortfolio = totalIn - totalOut;
      const referralEarn = parseFloat(formatUnits(bonusInfo?.referralGains || 0, Number(decimals))) || 0;
      const levelEarn = parseFloat(formatUnits(bonusInfo?.levelGains || 0, Number(decimals))) || 0;
      const growthEarn = parseFloat(formatUnits(bonusInfo?.growthGains || 0, Number(decimals))) || 0;
      const leaderEarn = parseFloat(formatUnits(bonusInfo?.leaderGains || 0, Number(decimals))) || 0;
      const developmentEarn = parseFloat(formatUnits(bonusInfo?.developmentGains || 0, Number(decimals))) || 0;
      const teamGrowthWallet = parseFloat(formatUnits(bonusInfo?.teamGrowthGains || 0, Number(decimals))) || 0;
      const totalWithdrawn = parseFloat(formatUnits(bonusInfo?.totalWithdrawn || 0, Number(decimals))) || 0;
      const teamGrowthLaps = parseFloat(formatUnits(unStakePotential?.teamLaps || 0, Number(decimals))) || 0;
      const inOutBuy = parseFloat(formatUnits(bonusInfo?.inOutBuy || 0, Number(decimals))) || 0;
      const growthFuels = parseFloat(formatUnits(unStakePotential?.teamGrowth || 0, Number(decimals))) || 0;

      setMlmData({
        directTeam,
        strongTeam,
        otherTeams,
        levels,
        totalIn,
        totalOut,
        activePortfolio,
        teamGrowthWallet,
        referralEarn,
        levelEarn,
        growthEarn,
        leaderEarn,
        developmentEarn,
        totalWithdrawn,
        teamGrowthLaps,
        inOutBuy,
        growthFuels,
        activeOrders,
      });

      setOrderLoading(true);
      const orders = [];
      const stakeViewResponse = await stakingInteractions.userStakeView(wallet.account, BigInt(0)).catch(() => ({ totalCount: 0 }));
      const totalCount = Number(stakeViewResponse?.totalCount || 0);
      for (let i = 0; i < totalCount; i++) {
        const orderResponse = await stakingInteractions.userStakeView(wallet.account, BigInt(i)).catch(() => ({}));
        const stakeInfo = orderResponse?.stakeInfo || {};
        orders.push({
          ...stakeInfo,
          amount: parseFloat(formatUnits(stakeInfo?.orderValue || BigInt(0), Number(decimals))) || 0,
          timestamp: Number(stakeInfo?.orderTime || 0) * 1000,
          isStake: !stakeInfo?.isComplete,
        });
      }
      setOrderHistory(orders);
    } catch (error) {
      console.error('Error fetching MLM data:', error);
      setError('Failed to fetch MLM data. Please try again.');
    } finally {
      setIsLoading(false);
      setOrderLoading(false);
    }
  };



  useEffect(() => {
    if (wallet.isConnected && wallet.account) {
      fetchMlmData();
    }
  }, [wallet.isConnected, wallet.account]);


  const handleRegister = async () => {
    if (!wallet.isConnected || !wallet.account) {
      setError('Please connect your wallet to register.');
      return;
    }

    try {
      setIsLoading(true);
      setError('');
      setSuccess('');

      const decimals = await readContract(config, {
        abi: USDC_ABI,
        address: USDC_ADDRESS,
        functionName: 'decimals',
        chainId: 56,
      });
      const approveAmount = parseUnits('1', Number(decimals)); // 1 USDC for registration
      console.log('Approving 1 USDC for registration...');
      const approvalTx = await stakingInteractions.approveUSDC(approveAmount, wallet.account);
      console.log('USDC approval transaction:', approvalTx);
      await waitForTransactionReceipt(config, { hash: approvalTx, chainId: 56 });
      console.log('USDC approval confirmed');

      const refCode = referralCode || '0x3FBF4C71e8b3Fbb16808C2fb66A19f414B250297';
      console.log('Registering with referral code:', refCode);
      const registerTx = await stakingInteractions.regUser(refCode, wallet.account);
      console.log('Registration transaction:', registerTx);

      setSuccess(`Registration successful! Transaction: ${registerTx}`);
      setReferralCode('');
      setTimeout(fetchMlmData, 3000);
    } catch (error) {
      console.error('Error registering user:', error);
      if (error.cause?.data) {
        const decodedError = decodeErrorResult({
          abi: STAKING_ABI,
          data: error.cause.data,
        });
        setError(`Registration failed: ${decodedError.errorName || 'Unknown error'} - ${decodedError.args?.join(', ') || ''}`);
      } else if (error.message?.includes('User rejected')) {
        setError('Transaction was cancelled by user');
      } else if (error.message?.includes('insufficient')) {
        setError('Insufficient USDC balance or BNB for gas fees. Ensure you have ~1 USDC and ~0.05 BNB.');
      } else if (error.message?.includes('already registered')) {
        setError('Address is already registered');
      } else {
        setError(`Failed to register: ${error.message || 'Unknown error'}`);
      }
    } finally {
      setIsLoading(false);
    }
  };


  const handleMakestake = async (amount) => {
    console.log("🚀 [Stake] Initiating stake for:", amount, "USDC");

    try {
      const txHash = await stakingInteractions.makeStake(
        amount, // pass plain USDC (e.g., "100")
        wallet.account
      );

      console.log("✅ [Stake] Success. Tx Hash:", txHash);
      setSuccess(`Staked ${amount} USDC successfully!`);
    } catch (error) {
      console.error("❌ [Stake] Failed:", error);
      setError(`Stake failed: ${error.message || error}`);
    }
  };


  const handleBuy = async () => {
    console.log("🛒 [Buy] Buy button clicked");

    if (!wallet.isConnected || !wallet.account) {
      setError("Wallet not connected. Please connect your wallet.");
      console.warn("⚠️ [Buy] Wallet not connected");
      return;
    }

    if (!buyAmount || parseFloat(buyAmount) <= 0) {
      setError("Please enter a valid amount to buy");
      console.warn("⚠️ [Buy] Invalid buy amount:", buyAmount);
      return;
    }

    try {
      setOrderLoading(true);
      setError("");
      setSuccess("");

      console.log("🔹 [Buy] Starting buy process for:", buyAmount, "USDC");

      // 1. Verify network
      if (chainId !== 56) {
        setError("Please switch to BSC Testnet.");
        console.warn("⚠️ [Buy] Wrong network:", chainId);
        await switchChain({ chainId: 56 });
        return;
      }

      // 2. Verify registration status
      const userInfo = await stakingInteractions.getUserInfo(wallet.account);
      console.log("ℹ️ [Buy] User Info:", userInfo);
      if (!userInfo.joined) {
        setError("User is not registered. Please register first.");
        console.warn("⚠️ [Buy] User not registered");
        return;
      }

      // 3. Get USDC decimals
      const decimals = await readContract(config, {
        abi: USDC_ABI,
        address: USDC_ADDRESS,
        functionName: "decimals",
        chainId: 56,
      });
      console.log("ℹ️ [Buy] USDC Decimals:", decimals);

      // 4. Convert buyAmount to wei
      const amountInWei = parseUnits(buyAmount, Number(decimals));
      console.log("ℹ️ [Buy] Amount in Wei:", amountInWei.toString());

      // 5. Verify contract’s USDC address
      const contractUSDAddress = await stakingInteractions.getUSDAddress();
      console.log("ℹ️ [Buy] Contract USD Address:", contractUSDAddress);

      // 6. Check USDC balance
      // (You can add a balance check here if needed)

      // 7. Check and approve USDC allowance
      // const allowance = await readContract(config, {
      //   abi: USDC_ABI,
      //   address: USDC_ADDRESS,
      //   functionName: "allowance",
      //   args: [wallet.account, STAKING_CONTRACT_ADDRESS],
      //   chainId: 97,
      // });
      // console.log("ℹ️ [Buy] Current Allowance:", formatUnits(allowance, Number(decimals)));

      console.log("🔄 [Buy] Sending approval transaction...");
      const approvalTx = await stakingInteractions.approveUSDC(
        amountInWei,
        wallet.account
      );
      console.log("✅ [Buy] Approval successful. Tx Hash:", approvalTx);

      // 8. Stake after short delay (to ensure approval is mined)
      setTimeout(() => {
        console.log("⏳ [Buy] Proceeding to stake after approval...");
        handleMakestake(buyAmount);
      }, 5000);

    } catch (error) {
      console.error("❌ [Buy] Unexpected error:", error);
      setError(`Unexpected error: ${error.message || "Unknown error"}`);
    } finally {
      setOrderLoading(false);
      console.log("🔚 [Buy] Buy process completed");
    }
  };


  const handleSell = async () => {
    if (!wallet.isConnected || !wallet.account) {
      setError('Wallet not connected. Please connect your wallet.');
      return;
    }

    if (!sellAmount || parseFloat(sellAmount) <= 0) {
      setError('Please enter a valid amount to sell');
      return;
    }

    try {
      setOrderLoading(true);
      setError('');
      setSuccess('');

      const decimals = await readContract(config, {
        abi: USDC_ABI,
        address: USDC_ADDRESS,
        functionName: 'decimals',
        chainId: 56,
      });
      const amountInWei = parseUnits(sellAmount, Number(decimals));

      console.log('Executing unstake transaction...');
      const txHash = await stakingInteractions.makeUnstake(amountInWei, wallet.account);
      console.log('Unstake transaction successful:', txHash);

      setSuccess(`Successfully sold ${sellAmount} worth of tokens! Transaction: ${txHash}`);
      setSellAmount('');
      setTimeout(fetchMlmData, 3000);
    } catch (error) {
      console.error('Error selling tokens:', error);
      if (error.cause?.data) {
        const decodedError = decodeErrorResult({
          abi: STAKING_ABI,
          data: error.cause.data,
        });
        setError(`Unstake failed: ${decodedError.errorName || 'Unknown error'} - ${decodedError.args?.join(', ') || ''}`);
      } else if (error.message?.includes('User rejected')) {
        setError('Transaction was cancelled by user');
      } else if (error.message?.includes('insufficient')) {
        setError('Insufficient token balance for this transaction');
      } else if (error.message?.includes('gas')) {
        setError('Gas estimation failed. Please try a smaller amount.');
      } else {
        setError(`Failed to sell tokens: ${error.message || 'Unknown error'}`);
      }
    } finally {
      setOrderLoading(false);
    }
  };

  const formatCurrency = (amount = 0) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  const formatNumber = (num = 0) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  const formatDate = (timestamp = 0) => {
    return new Date(timestamp).toLocaleString();
  };

  if (!wallet.isConnected) {
    return (
      <Container maxWidth="xl" sx={{ py: { xs: 2, sm: 3 } }}>
        <Alert severity="warning">Please connect your wallet to view the MLM dashboard.</Alert>
      </Container>
    );
  }

  if (isLoading) {
    return (
      <Container
        maxWidth="xl"
        sx={{ py: { xs: 2, sm: 3 }, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '400px' }}
      >
        <CircularProgress />
      </Container>
    );
  }

  if (notRegistered) {
    return (
      <Container maxWidth="sm" sx={{ py: { xs: 2, sm: 3 } }}>
        <Card sx={{ p: { xs: 2, sm: 3 }, boxShadow: 3 }}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ color: 'primary.main', fontWeight: 'bold', mb: { xs: 2, sm: 3 }, fontSize: { xs: '1.25rem', sm: '1.5rem' } }}
          >
            Register 
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: { xs: 2, sm: 3 }, fontSize: { xs: '0.875rem', sm: '1rem' } }}
          >
            Enter a referral code to join the MLM system or leave blank to use the default.
          </Typography>
          {error && (
            <Alert severity="error" sx={{ mb: 2 }} onClose={() => setError('')}>
              {error}
            </Alert>
          )}
          {success && (
            <Alert severity="success" sx={{ mb: 2 }} onClose={() => setSuccess('')}>
              {success}
            </Alert>
          )}
          <TextField
            fullWidth
            label="Referral Code (Optional)"
            value={referralCode}
            onChange={(e) => setReferralCode(e.target.value)}
            sx={{ mb: 2, '& .MuiInputBase-input': { fontSize: { xs: '0.875rem', sm: '1rem' } } }}
          />
          <Button
            fullWidth
            variant="contained"
            startIcon={<PersonAddIcon />}
            onClick={handleRegister}
            disabled={isLoading}
            sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
          >
            Register
          </Button>
        </Card>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ py: { xs: 2, sm: 3 } }}>
      {error && (
        <Alert severity="error" sx={{
          mb:

            2
        }} onClose={() => setError('')}>
          {error}
        </Alert>
      )}
      {success && (
        <Alert severity="success" sx={{ mb: 2 }} onClose={() => setSuccess('')}>
          {success}
        </Alert>
      )}

      <Box
        sx={{
          mb: { xs: 2, sm: 4 },
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'stretch', sm: 'center' },
          gap: 2,
        }}
      >
        <Box>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ color: 'primary.main', fontWeight: 'bold', fontSize: { xs: '1.5rem', sm: '2rem' } }}
          >
            Dashboard
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>
            Monitor your team performance and manage your investments
          </Typography>
        </Box>
        <Button
          variant="outlined"
          startIcon={<RefreshIcon />}
          onClick={fetchMlmData}
          disabled={isLoading || orderLoading}
          sx={{ width: { xs: '100%', sm: 'auto' }, fontSize: { xs: '0.875rem', sm: '1rem' } }}
        >
          Refresh
        </Button>
      </Box>

      <Grid container spacing={2}>
        {/* First Box: Performance Overview */}
        <Grid item xs={12} md={8} sx={{ order: { xs: 2, md: 1 } }}>
          <Card sx={{ p: { xs: 2, sm: 3 }, boxShadow: 3 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ color: 'primary.main', fontWeight: 'bold', mb: { xs: 2, sm: 3 }, fontSize: { xs: '1.25rem', sm: '1.5rem' } }}
            >
              Performance Overview
            </Typography>

            {/* Team Statistics */}
            <Typography
              variant="h6"
              gutterBottom
              sx={{ color: 'primary.main', mb: { xs: 2, sm: 3 }, fontSize: { xs: '1rem', sm: '1.25rem' } }}
            >
              Team Statistics
            </Typography>
            <Grid container spacing={2} sx={{ mb: { xs: 3, sm: 4 } }}>
              {[
                { icon: <PeopleIcon />, title: 'My Direct', value: formatNumber(mlmData.directTeam), subtitle: 'Direct Referrals', color: 'primary.main' },
                {
                  icon: <DiamondIcon />,
                  title: 'Strong Teams',
                  value: formatNumber(mlmData.strongTeam),
                  subtitle: 'Active Strong Teams',
                  color: 'secondary.main',
                },
                {
                  icon: <PeopleIcon />,
                  title: 'Other Teams',
                  value: formatNumber(mlmData.otherTeams),
                  subtitle: 'Additional Team Members',
                  color: 'info.main',
                },
                { icon: <TimelineIcon />, title: 'Levels', value: formatNumber(mlmData.levels), subtitle: 'Achievement Levels', color: 'warning.main' },
                {
                  icon: <AssignmentTurnedInIcon />,
                  title: 'Active Orders',
                  value: formatNumber(mlmData.activeOrders),
                  subtitle: 'Current Active Orders',
                  color: 'success.main',
                },
              ].map((card, index) => (
                <Grid item xs={12} sm={6} md={4} key={`team-stats-${index}`}>
                  <Card sx={{ p: { xs: 1.5, sm: 2 }, boxShadow: 2, height: '100%' }}>
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                        {React.cloneElement(card.icon, { sx: { color: card.color, mr: 1, fontSize: { xs: '1.5rem', sm: '2rem' } } })}
                        <Typography variant="h6" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                          {card.title}
                        </Typography>
                      </Box>
                      <Typography variant="h4" sx={{ fontWeight: 'bold', color: card.color, fontSize: { xs: '1.25rem', sm: '1.5rem' } }}>
                        {card.value}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                        {card.subtitle}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* Financial Overview */}
            <Typography
              variant="h6"
              gutterBottom
              sx={{ color: 'primary.main', mb: { xs: 2, sm: 3 }, fontSize: { xs: '1rem', sm: '1.25rem' } }}
            >
              Financial Overview
            </Typography>
            <Grid container spacing={2} sx={{ mb: { xs: 3, sm: 4 } }}>
              {[
                { icon: <TrendingUpIcon />, title: 'Total In', value: formatCurrency(mlmData.totalIn), subtitle: 'Total Investments', color: 'success.main' },
                { icon: <MonetizationOnIcon />, title: 'Total Out', value: formatCurrency(mlmData.totalOut), subtitle: 'Total Withdrawals', color: 'info.main' },
                {
                  icon: <AccountBalanceWalletIcon />,
                  title: 'Active Portfolio',
                  value: formatCurrency(mlmData.activePortfolio),
                  subtitle: 'Current Investment Value',
                  color: 'primary.main',
                },
                {
                  icon: <EmojiEventsIcon />,
                  title: 'Team Growth Wallet',
                  value: formatCurrency(mlmData.teamGrowthWallet),
                  subtitle: 'Growth Wallet Balance',
                  color: 'secondary.main',
                },
                {
                  icon: <AccountBalanceIcon />,
                  title: 'Total Withdrawn',
                  value: formatCurrency(mlmData.totalWithdrawn),
                  subtitle: 'Total Amount Withdrawn',
                  color: 'error.main',
                },
                {
                  icon: <GroupWorkIcon />,
                  title: 'Team Growth Laps',
                  value: formatCurrency(mlmData.teamGrowthLaps),
                  subtitle: 'Team Growth Cycles',
                  color: 'warning.main',
                },
                {
                  icon: <AccountBalanceWalletIcon />,
                  title: 'InOut Buy Potential',
                  value: formatCurrency(mlmData.inOutBuy),
                  subtitle: 'Buy Potential Value',
                  color: 'info.main',
                },
                {
                  icon: <LocalGasStationIcon />,
                  title: 'Growth Fuels',
                  value: formatCurrency(mlmData.growthFuels),
                  subtitle: 'Team Growth Potential',
                  color: 'success.main',
                },
              ].map((card, index) => (
                <Grid item xs={12} sm={6} md={4} key={`financial-${index}`}>
                  <Card sx={{ p: { xs: 1.5, sm: 2 }, boxShadow: 2, height: '100%' }}>
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                        {React.cloneElement(card.icon, { sx: { color: card.color, mr: 1, fontSize: { xs: '1.5rem', sm: '2rem' } } })}
                        <Typography variant="h6" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                          {card.title}
                        </Typography>
                      </Box>
                      <Typography variant="h4" sx={{ fontWeight: 'bold', color: card.color, fontSize: { xs: '1.25rem', sm: '1.5rem' } }}>
                        {card.value}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                        {card.subtitle}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* Earnings Breakdown */}
            <Typography
              variant="h6"
              gutterBottom
              sx={{ color: 'primary.main', mb: { xs: 2, sm: 3 }, fontSize: { xs: '1rem', sm: '1.25rem' } }}
            >
              Earnings Breakdown
            </Typography>
            <Grid container spacing={2}>
              {[
                { icon: <PeopleIcon />, title: 'Referral Earn', value: formatCurrency(mlmData.referralEarn), subtitle: 'From Direct Referrals', color: 'primary.main' },
                { icon: <TimelineIcon />, title: 'Level Earn', value: formatCurrency(mlmData.levelEarn), subtitle: 'From Team Levels', color: 'info.main' },
                { icon: <TrendingUpIcon />, title: 'Growth Earn', value: formatCurrency(mlmData.growthEarn), subtitle: 'From Growth System', color: 'success.main' },
                { icon: <EmojiEventsIcon />, title: 'Leader Earn', value: formatCurrency(mlmData.leaderEarn), subtitle: 'From Leadership', color: 'warning.main' },
                {
                  icon: <TimelineIcon />,
                  title: 'Development Earn',
                  value: formatCurrency(mlmData.developmentEarn),
                  subtitle: 'From Development',
                  color: 'info.main',
                },
                {
                  icon: <PeopleIcon />,
                  title: 'Team Growth',
                  value: formatCurrency(mlmData.teamGrowthWallet),
                  subtitle: 'Team Growth Wallet',
                  color: 'secondary.main',
                },
              ].map((card, index) => (
                <Grid item xs={12} sm={6} md={4} key={`earnings-${index}`}>
                  <Card sx={{ p: { xs: 1.5, sm: 2 }, boxShadow: 2, height: '100%' }}>
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                        {React.cloneElement(card.icon, { sx: { color: card.color, mr: 1, fontSize: { xs: '1.5rem', sm: '2rem' } } })}
                        <Typography variant="h6" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                          {card.title}
                        </Typography>
                      </Box>
                      <Typography variant="h4" sx={{ fontWeight: 'bold', color: card.color, fontSize: { xs: '1.25rem', sm: '1.5rem' } }}>
                        {card.value}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                        {card.subtitle}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Card>
        </Grid>

        {/* Second Box: Trading & Referrals */}
        <Grid item xs={12} md={4} sx={{ order: { xs: 1, md: 2 } }}>
          <Card sx={{ p: { xs: 2, sm: 3 }, boxShadow: 3, display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ color: 'primary.main', fontWeight: 'bold', mb: { xs: 2, sm: 3 }, fontSize: { xs: '1.25rem', sm: '1.5rem' } }}
            >
              Trading & Referrals
            </Typography>

            {/* Buy/Sell Section */}
            <Box sx={{ mb: { xs: 3, sm: 4 }, display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography variant="h6" sx={{ color: 'primary.main', fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                Buy/Sell Tokens
              </Typography>
              <TextField
                fullWidth
                label="Buy Amount (USDC)"
                type="number"
                value={buyAmount}
                onChange={(e) => setBuyAmount(e.target.value)}
                sx={{ '& .MuiInputBase-input': { fontSize: { xs: '0.875rem', sm: '1rem' } } }}
              />
              <Button
                fullWidth
                variant="contained"
                onClick={handleBuy}
                disabled={orderLoading}
                sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
              >
                Buy Tokens
              </Button>
              <TextField
                fullWidth
                label="Sell Amount (Tokens)"
                type="number"
                value={sellAmount}
                onChange={(e) => setSellAmount(e.target.value)}
                sx={{ '& .MuiInputBase-input': { fontSize: { xs: '0.875rem', sm: '1rem' } } }}
              />
              <Button
                fullWidth
                variant="outlined"
                onClick={handleSell}
                disabled={orderLoading}
                sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
              >
                Sell Tokens
              </Button>
            </Box>

            {/* Referral Code Section */}
            <Box sx={{ mb: { xs: 3, sm: 4 }, display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography variant="h6" sx={{ color: 'primary.main', fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                Your Referral Code
              </Typography>
              <TextField
                fullWidth
                label="Referral Code"
                value={wallet.account || ''}
                InputProps={{ readOnly: true }}
                sx={{ '& .MuiInputBase-input': { fontSize: { xs: '0.875rem', sm: '1rem' } } }}
              />
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Button
                  variant="contained"
                  onClick={() => {
                    if (wallet.account) {
                      navigator.clipboard.writeText(wallet.account);
                      setSuccess('Referral code copied to clipboard!');
                    }
                  }}
                  disabled={!wallet.account}
                  sx={{ flex: 1, fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
                >
                  Copy
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => {
                    if (wallet.account) {
                      const shareText = `Join me on UniversalBet! Use my referral code: ${wallet.account}`;
                      if (navigator.share) {
                        navigator
                          .share({
                            title: 'UniversalBet Referral',
                            text: shareText,
                            url: window.location.origin,
                          })
                          .catch(() => {
                            navigator.clipboard.writeText(shareText);
                            setSuccess('Referral message copied to clipboard!');
                          });
                      } else {
                        navigator.clipboard.writeText(shareText);
                        setSuccess('Referral message copied to clipboard!');
                      }
                    }
                  }}
                  disabled={!wallet.account}
                  sx={{ flex: 1, fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
                >
                  Share
                </Button>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                Share this code with friends to earn referral bonuses when they join and invest!
              </Typography>
            </Box>

            {/* Order History */}
            <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <Typography
                variant="h6"
                sx={{ color: 'primary.main', mb: { xs: 2, sm: 3 }, fontSize: { xs: '1rem', sm: '1.25rem' } }}
              >
                Order History
              </Typography>
              {orderLoading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', p: 3, flexGrow: 1 }}>
                  <CircularProgress />
                </Box>
              ) : orderHistory.length === 0 ? (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ p: 2, textAlign: 'center', fontSize: { xs: '0.75rem', sm: '0.875rem' }, flexGrow: 1 }}
                >
                  No orders yet
                </Typography>
              ) : (
                <TableContainer component={Paper} sx={{ flexGrow: 1 }}>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Type</TableCell>
                        <TableCell sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Amount</TableCell>
                        <TableCell sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Date</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {orderHistory.map((order, index) => (
                        <TableRow key={`order-${index}`}>
                          <TableCell>
                            <Typography
                              variant="body2"
                              color={order.isStake ? 'success.main' : 'error.main'}
                              sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
                            >
                              {order.isStake ? 'BUY' : 'SELL'}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                              {formatCurrency(order.amount)}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                              {formatDate(order.timestamp)}
                            </Typography>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MLMDashboard;

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
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { useWallet } from '../context/WalletContext';
import { useChainId, useSwitchChain } from 'wagmi';
import { formatUnits, parseUnits, decodeErrorResult } from 'viem';
import { readContract, waitForTransactionReceipt } from '@wagmi/core';
import { config } from '../config/web3modal';
import { stakingInteractions, USDT_ADDRESS, USDT_ABI, STAKING_ABI, STAKING_CONTRACT_ADDRESS } from '../services/selfmintStakingService';
import { getReferrerFromUrl, hasReferralInUrl, clearReferralFromUrl } from '../utils/urlUtils';

// Import reusable components
import StatCard from '../components/common/StatCard';
import TradingSection from '../components/common/TradingSection';
import ReferralSection from '../components/common/ReferralSection';
import OrderHistoryTable from '../components/common/OrderHistoryTable';
import RegistrationForm from '../components/common/RegistrationForm';
import TokenPriceCard from '../components/common/TokenPriceCard';
import SafeMintTokenStats from '../components/common/SafeMintTokenStats';
import TeamGrowthChecker from '../components/TeamGrowthChecker';

// Import utility functions
import { formatCurrency, formatNumber, formatDate } from '../utils/formatters';

// Lucide React icons
import {
  Users,
  TrendingUp,
  Wallet,
  DollarSign,
  Star,
  Trophy,
  BarChart3,
  RefreshCw,
  Building2,
  Users2,
  Fuel,
  CheckCircle,
  Battery
} from 'lucide-react';

// Helper function to safely stringify objects with BigInt values
const safeStringify = (obj, space = 2) => {
  return JSON.stringify(obj, (key, value) => {
    if (typeof value === 'bigint') {
      return value.toString() + 'n';
    }
    return value;
  }, space);
};

// Loading Skeleton Component
const LoadingSkeleton = ({ height = 60, width = '100%', borderRadius = 2 }) => (
  <Box
    sx={{
      width,
      height,
      borderRadius,
      background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
      backgroundSize: '200% 100%',
      animation: 'skeleton-loading 1.5s ease-in-out infinite',
      '@keyframes skeleton-loading': {
        '0%': { backgroundPosition: '200% 0' },
        '100%': { backgroundPosition: '-200% 0' }
      }
    }}
  />
);

const Dashboard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const wallet = useWallet();
  const chainId = useChainId();
  const { switchChain } = useSwitchChain();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [buyAmount, setBuyAmount] = useState('');
  const [sellAmount, setSellAmount] = useState('');
  const [buyTokenAmount, setBuyTokenAmount] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [orderHistory, setOrderHistory] = useState([]);
  const [orderLoading, setOrderLoading] = useState(false);
  const [notRegistered, setNotRegistered] = useState(false);
  const [isFromReferralLink, setIsFromReferralLink] = useState(false);
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
    console.log("🔄 [fetchMlmData] Starting data fetch process...");
    console.log("🔄 [fetchMlmData] Wallet connected:", wallet.isConnected);
    console.log("🔄 [fetchMlmData] Wallet account:", wallet.account);

    if (!wallet.isConnected || !wallet.account) {
      console.warn("⚠️ [fetchMlmData] Wallet not connected");
      setError('Wallet not connected. Please connect your wallet.');
      return;
    }

    try {
      setIsLoading(true);
      setError('');
      console.log("🔄 [fetchMlmData] Loading state set to true");

      console.log("📡 [fetchMlmData] Fetching user info for account:", wallet.account);
      const userInfo = await stakingInteractions.getUserInfo(wallet.account);
      console.log("📊 [fetchMlmData] User Info Response:", safeStringify(userInfo));

      if (!userInfo?.joined) {
        console.warn("⚠️ [fetchMlmData] User not registered, showing registration form");
        setNotRegistered(true);
        setIsLoading(false);
        return;
      }

      console.log("✅ [fetchMlmData] User is registered, proceeding with data fetch");
      setNotRegistered(false);

      console.log("📡 [fetchMlmData] Fetching all contract data in parallel...");
      const [bonusInfo, rankQualify, directReferrals, unStakePotential, matureOrder] = await Promise.all([
        stakingInteractions.getBonusInfo(wallet.account).catch((err) => {
          console.error("❌ [fetchMlmData] getBonusInfo failed:", err);
          return {};
        }),
        stakingInteractions.getRankQualify(wallet.account).catch((err) => {
          console.error("❌ [fetchMlmData] getRankQualify failed:", err);
          return {};
        }),
        stakingInteractions.getDirectUser(wallet.account).catch((err) => {
          console.error("❌ [fetchMlmData] getDirectUser failed:", err);
          return [];
        }),
        stakingInteractions.getUnStakePotential(wallet.account).catch((err) => {
          console.error("❌ [fetchMlmData] getUnStakePotential failed:", err);
          return {};
        }),
        stakingInteractions.getMatureOrder(wallet.account).catch((err) => {
          console.error("❌ [fetchMlmData] getMatureOrder failed:", err);
          return {};
        }),
      ]);

      console.log("📊 [fetchMlmData] Raw Contract Data:");
      console.log("  📊 bonusInfo:", safeStringify(bonusInfo));
      console.log("  📊 rankQualify:", safeStringify(rankQualify));
      console.log("  📊 directReferrals:", safeStringify(directReferrals));
      console.log("  📊 unStakePotential:", safeStringify(unStakePotential));
      console.log("  📊 matureOrder:", safeStringify(matureOrder));

      console.log("📡 [fetchMlmData] Fetching USDT decimals...");
      const decimals = await readContract(config, {
        abi: USDT_ABI,
        address: USDT_ADDRESS,
        functionName: 'decimals',
        chainId: 56,
      });
      console.log("📊 [fetchMlmData] USDT Decimals fetched:", decimals);

      console.log("🧮 [fetchMlmData] Processing and calculating data...");

      // Team Statistics Calculations
      const directTeam = directReferrals?.length || 0;
      console.log("📊 [fetchMlmData] Direct Team Count:", directTeam);

      const strongTeam = Number(rankQualify?.strongTeam || 0);
      console.log("📊 [fetchMlmData] Strong Team Count:", strongTeam);

      const totalTeam = Number(rankQualify?.totalTeam || 0);
      console.log("📊 [fetchMlmData] Total Team Count:", totalTeam);

      const otherTeams = totalTeam - directTeam - strongTeam;
      console.log("📊 [fetchMlmData] Other Teams Count:", otherTeams);

      const levels = Number(rankQualify?.level || 0);
      console.log("📊 [fetchMlmData] Levels:", levels);

      const activeOrders = Number(matureOrder?.activeOrder || 0);
      console.log("📊 [fetchMlmData] Active Orders:", activeOrders);

      // Order History Processing
      console.log("📋 [fetchMlmData] Starting order history fetch for financial calculations...");
      const orders = [];

      console.log("📊 [fetchMlmData] Getting total order count...");
      const stakeViewResponse = await stakingInteractions.userStakeView(wallet.account, BigInt(0)).catch((err) => {
        console.error("❌ [fetchMlmData] Failed to get total count:", err);
        return { totalCount: 0 };
      });

      const totalCount = Number(stakeViewResponse?.totalCount || 0);
      console.log("📊 [fetchMlmData] Total order count:", totalCount);

      let totalStakedFromOrders = 0;

      for (let i = 0; i < totalCount; i++) {
        console.log(`📡 [fetchMlmData] Fetching order ${i + 1}/${totalCount}...`);

        const orderResponse = await stakingInteractions.userStakeView(wallet.account, BigInt(i)).catch((err) => {
          console.error(`❌ [fetchMlmData] Failed to get order ${i}:`, err);
          return {};
        });

        const stakeInfo = orderResponse?.stakeInfo || {};
        const orderValue = stakeInfo?.orderValue || BigInt(0);
        const orderTime = stakeInfo?.orderTime || 0;
        const orderGrowth = stakeInfo?.orderGrowth || BigInt(0);
        const isMature = stakeInfo?.isMature || 0;
        const isComplete = stakeInfo?.isComplete || false;

        const formattedAmount = Number(orderValue);
        const timestamp = Number(orderTime) * 1000;
        const growthRate = Number(orderGrowth);
        const maturityStatus = Number(isMature);

        totalStakedFromOrders += formattedAmount;

        const orderDate = new Date(timestamp);
        const formattedDate = orderDate.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        });

        const maturityPeriodDays = 15;
        const stakeDate = new Date(timestamp);
        const currentTime = new Date();
        const timeElapsed = currentTime.getTime() - stakeDate.getTime();
        const daysElapsed = Math.floor(timeElapsed / (1000 * 60 * 60 * 24));

        const totalMaturityTime = maturityPeriodDays * 24 * 60 * 60 * 1000;
        const remainingTime = totalMaturityTime - timeElapsed;

        let remainingTimeText = '';
        if (isComplete) {
          remainingTimeText = 'Completed';
        } else if (daysElapsed >= 15 || maturityStatus > 0) {
          remainingTimeText = 'Matured';
        } else if (remainingTime > 0) {
          const remainingDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
          const remainingHours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const remainingMinutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
          remainingTimeText = `${remainingDays}d ${remainingHours}h ${remainingMinutes}m`;
        } else {
          remainingTimeText = 'Matured';
        }

        const processedOrder = {
          ...stakeInfo,
          amount: formattedAmount,
          timestamp: timestamp,
          date: formattedDate,
          growthRate: growthRate,
          maturityStatus: maturityStatus,
          remainingTime: remainingTimeText,
          isStake: !isComplete,
        };

        orders.push(processedOrder);
      }

      console.log("💰 [fetchMlmData] Total staked from orders:", totalStakedFromOrders);

      // Financial Calculations
      console.log("💰 [fetchMlmData] Processing financial data with decimals:", decimals);

      const isWeiFormat = (value) => value > 1000000;

      const formatValue = (rawValue) => {
        if (!rawValue || rawValue === 0) return 0;
        if (isWeiFormat(Number(rawValue))) {
          return parseFloat(formatUnits(rawValue, Number(decimals))) || 0;
        } else {
          return parseFloat(rawValue.toString()) || 0;
        }
      };

      const totalStakeRaw = bonusInfo?.totalStake || 0;
      const totalIn = formatValue(totalStakeRaw);

      const totalUnStakeRaw = bonusInfo?.totalUnStake || 0;
      const totalOut = formatValue(totalUnStakeRaw);

      const totalWithdrawnRaw = bonusInfo?.totalWithdrawn || 0;
      const totalWithdrawn = formatValue(totalWithdrawnRaw);

      const orderValueRaw = unStakePotential?.OrderValue || 0;
      const orderValueFormatted = formatValue(orderValueRaw);
      const activePortfolio = totalIn - (orderValueFormatted + totalOut);

      const referralGainsRaw = bonusInfo?.referralGains || 0;
      const levelGainsRaw = bonusInfo?.levelGains || 0;
      const growthGainsRaw = bonusInfo?.growthGains || 0;

      const referralEarn = formatValue(referralGainsRaw);
      const levelEarn = formatValue(levelGainsRaw);
      const growthEarn = formatValue(growthGainsRaw);

      const leaderGainsRaw = bonusInfo?.leaderGains || 0;
      const leaderEarn = formatValue(leaderGainsRaw);

      const developmentGainsRaw = bonusInfo?.developmentGains || 0;
      const developmentEarn = formatValue(developmentGainsRaw);

      const teamGrowthGainsRaw = bonusInfo?.teamGrowthGains || 0;
      const teamGrowthWallet = formatValue(teamGrowthGainsRaw);

      const teamLapsRaw = unStakePotential?.teamLaps || 0;
      const teamGrowthLaps = parseFloat(formatUnits(teamLapsRaw, 18)) || 0;

      const lastStakeRaw = userInfo?.lastStake || 0;
      const inOutBuyRaw = bonusInfo?.inOutBuy || 0;
      const lastStakeFormatted = formatValue(lastStakeRaw);
      const inOutBuyFormatted = formatValue(inOutBuyRaw);
      const inOutBuy = lastStakeFormatted - inOutBuyFormatted;

      const teamGrowthRaw = unStakePotential?.teamGrowth || 0;
      const growthFuels = parseFloat(formatUnits(teamGrowthRaw, 18)) || 0;

      const totalFuels = growthFuels + teamGrowthLaps;

      const totGainRaw = unStakePotential?.totGain || 0;
      const orderGrowthRaw = unStakePotential?.orderGrowth || 0;
      const totGainFormatted = formatValue(totGainRaw);
      const orderGrowthFormatted = formatValue(orderGrowthRaw);

      const availableWithdrawal = totGainFormatted + orderGrowthFormatted + growthFuels + orderValueFormatted;

      const finalMlmData = {
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
        totalFuels,
        activeOrders,
        availableWithdrawal,
      };

      setMlmData(finalMlmData);
      setOrderHistory(orders);
      setOrderLoading(true);
    } catch (error) {
      console.error('❌ [fetchMlmData] Critical error occurred:', error);
      setError('Failed to fetch MLM data. Please try again.');
    } finally {
      setIsLoading(false);
      setOrderLoading(false);
    }
  };

  // Check for referral code in URL and auto-connect wallet on component mount
  useEffect(() => {
    console.log("🔗 [useEffect] Checking for referral code in URL and auto-connecting wallet");

    if (hasReferralInUrl()) {
      const referrerFromUrl = getReferrerFromUrl();
      console.log("🔗 [useEffect] Found referral code in URL:", referrerFromUrl);

      const ethAddressRegex = /^0x[a-fA-F0-9]{40}$/;
      if (ethAddressRegex.test(referrerFromUrl)) {
        setReferralCode(referrerFromUrl);
        setIsFromReferralLink(true);
        console.log("✅ [useEffect] Valid referral code set from URL");
        clearReferralFromUrl();
      } else {
        console.warn("⚠️ [useEffect] Invalid referral code format in URL:", referrerFromUrl);
      }
    }

    if (!wallet.isConnected) {
      console.log("🔌 [useEffect] Wallet not connected, attempting auto-connect...");
      const autoConnect = async () => {
        try {
          await wallet.connectWallet();
          console.log("✅ [useEffect] Auto-connect successful");
        } catch (error) {
          console.log("⚠️ [useEffect] Auto-connect failed (user may have cancelled):", error.message);
        }
      };

      const timer = setTimeout(autoConnect, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    console.log("🔄 [useEffect] Wallet state changed");
    console.log("🔄 [useEffect] Wallet connected:", wallet.isConnected);
    console.log("🔄 [useEffect] Wallet account:", wallet.account);

    if (wallet.isConnected && wallet.account) {
      console.log("✅ [useEffect] Triggering data fetch due to wallet connection");
      fetchMlmData();
    } else {
      console.log("⚠️ [useEffect] Wallet not ready, skipping data fetch");
    }
  }, [wallet.isConnected, wallet.account]);

  const handleRegister = async () => {
    console.log("🔐 [handleRegister] Registration process started");

    if (!wallet.isConnected || !wallet.account) {
      console.warn("⚠️ [handleRegister] Wallet not connected");
      setError('Please connect your wallet to register.');
      return;
    }

    if (!referralCode || referralCode.trim() === '') {
      console.warn("⚠️ [handleRegister] No referral code provided");
      setError('Please enter a referral code to register.');
      return;
    }

    const ethAddressRegex = /^0x[a-fA-F0-9]{40}$/;
    if (!ethAddressRegex.test(referralCode)) {
      console.warn("⚠️ [handleRegister] Invalid referral code format:", referralCode);
      setError('Please enter a valid referral code (Ethereum address format).');
      return;
    }

    try {
      setIsLoading(true);
      setError('');
      setSuccess('');

      const refCode = referralCode;
      console.log("📡 [handleRegister] Proceeding with user registration...");

      const registerTx = await stakingInteractions.regUser(refCode, wallet.account);
      console.log("✅ [handleRegister] Registration transaction hash:", registerTx);

      console.log("🎉 [handleRegister] Registration successful!");
      setSuccess(`Registration successful! Transaction: ${registerTx}`);
      setReferralCode('');

      console.log("⏳ [handleRegister] Scheduling data refresh in 3 seconds...");
      setTimeout(fetchMlmData, 3000);
    } catch (error) {
      console.error('❌ [handleRegister] Registration failed:', error);

      if (error.message?.includes('User rejected')) {
        console.log("⚠️ [handleRegister] User rejected transaction");
        setError('Transaction was cancelled by user');
      } else if (error.message?.includes('insufficient')) {
        console.log("⚠️ [handleRegister] Insufficient balance");
        setError('Insufficient USDT balance or BNB for gas fees. Ensure you have ~1 USDT and ~0.05 BNB.');
      } else if (error.message?.includes('already registered')) {
        console.log("⚠️ [handleRegister] Already registered");
        setError('Address is already registered');
      } else {
        console.log("❌ [handleRegister] Unknown error");
        setError(`Failed to register: ${error.message || 'Unknown error'}`);
      }
    } finally {
      console.log("🔚 [handleRegister] Registration process completed");
      setIsLoading(false);
    }
  };

  const handleMakestake = async (amount) => {
    console.log("🚀 [handleMakestake] Initiating stake process");
    console.log("🚀 [handleMakestake] Amount to stake:", amount, "USDT");

    try {
      console.log("📡 [handleMakestake] Calling makeStake function...");
      const txHash = await stakingInteractions.makeStake(amount, wallet.account);

      console.log("✅ [handleMakestake] Stake transaction successful!");
      console.log("✅ [handleMakestake] Transaction hash:", txHash);
      setSuccess(`Staked ${amount} USDT successfully! Tx: ${txHash.slice(0, 10)}...${txHash.slice(-8)}`);

      console.log("⏳ [handleMakestake] Scheduling data refresh...");
      setTimeout(fetchMlmData, 3000);
    } catch (error) {
      console.error("❌ [handleMakestake] Stake failed:", error);
      setError(`Stake failed: ${error.message || error}`);
    }
  };

  const handleWithdraw = async () => {
    console.log("💸 [handleWithdraw] Withdrawal process started");

    if (!wallet.isConnected || !wallet.account) {
      console.warn("⚠️ [handleWithdraw] Wallet not connected");
      setError('Please connect your wallet');
      return;
    }

    if (chainId !== 56) {
      setError("Please switch to BSC Mainnet (Chain ID: 56) to withdraw earnings.");
      return;
    }

    try {
      setOrderLoading(true); // Use orderLoading for consistency
      setError('');
      setSuccess('');

      const referralEarn = mlmData.referralEarn || 0;
      const levelEarn = mlmData.levelEarn || 0;
      const growthEarn = mlmData.growthEarn || 0;
      const teamGrowthWallet = mlmData.teamGrowthWallet || 0;
      const leaderEarn = mlmData.leaderEarn || 0;
      const developmentEarn = mlmData.developmentEarn || 0;

      const totalAvailable = referralEarn + levelEarn + growthEarn + teamGrowthWallet + leaderEarn + developmentEarn;
      console.log("💰 [handleWithdraw] Total available for withdrawal:", totalAvailable);

      if (totalAvailable <= 0) {
        console.warn("⚠️ [handleWithdraw] No earnings available");
        setError('No earnings available for withdrawal');
        return;
      }

      // Get USDT decimals for proper conversion
      const decimals = await readContract(config, {
        abi: USDT_ABI,
        address: USDT_ADDRESS,
        functionName: 'decimals',
        chainId: 56,
      });

      const amountInWei = parseUnits(totalAvailable.toFixed(6), Number(decimals));
      console.log("💰 [handleWithdraw] Amount in wei:", amountInWei.toString());

      console.log("📡 [handleWithdraw] Executing withdrawal transaction...");
      const txHash = await stakingInteractions.makeUnstake(amountInWei, wallet.account);
      console.log("✅ [handleWithdraw] Withdrawal transaction successful!");

      setSuccess(`Withdrawal successful! Amount: $${totalAvailable.toFixed(2)} USDT. Tx: ${txHash.slice(0, 10)}...${txHash.slice(-8)}`);

      console.log("⏳ [handleWithdraw] Scheduling data refresh in 3 seconds...");
      setTimeout(() => {
        fetchMlmData();
      }, 3000);

    } catch (error) {
      console.error("❌ [handleWithdraw] Withdrawal failed:", error);
      setError(`Withdrawal failed: ${error.message || error}`);
    } finally {
      console.log("🔚 [handleWithdraw] Withdrawal process completed");
      setOrderLoading(false); // Use orderLoading for consistency
    }
  };

  const handleBuy = async () => {
    console.log("🛒 [Buy] Buy button clicked");

    if (!wallet.isConnected || !wallet.account) {
      setError("Wallet not connected. Please connect your wallet.");
      return;
    }

    if (!buyAmount || parseFloat(buyAmount) <= 0) {
      setError("Please enter a valid amount to buy");
      return;
    }

    try {
      setOrderLoading(true);
      setError("");
      setSuccess("");

      if (chainId !== 56) {
        setError("Please switch to BSC Mainnet (Chain ID: 56) to stake.");
        return;
      }

      const userInfo = await stakingInteractions.getUserInfo(wallet.account);
      if (!userInfo.joined) {
        setError("User is not registered. Please register first.");
        return;
      }

      const decimals = await readContract(config, {
        abi: USDT_ABI,
        address: USDT_ADDRESS,
        functionName: "decimals",
        chainId: 56,
      });

      const amountInWei = parseUnits(buyAmount, Number(decimals));

      console.log("🔄 [Buy] Sending approval transaction...");
      const approvalTx = await stakingInteractions.approveUSDT(amountInWei, wallet.account);
      console.log("✅ [Buy] Approval successful. Tx Hash:", approvalTx);

      setTimeout(() => {
        console.log("⏳ [Buy] Proceeding to stake after approval...");
        handleMakestake(buyAmount);
      }, 5000);

    } catch (error) {
      console.error("❌ [Buy] Unexpected error:", error);
      setError(`Unexpected error: ${error.message || "Unknown error"}`);
    } finally {
      setOrderLoading(false);
    }
  };

  const handleSell = async () => {
    console.log("💰 [handleSell] Sell button clicked");

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
        abi: USDT_ABI,
        address: USDT_ADDRESS,
        functionName: 'decimals',
        chainId: 56,
      });

      const amountInWei = parseUnits(sellAmount, Number(decimals));

      const txHash = await stakingInteractions.makeUnstake(amountInWei, wallet.account);
      setSuccess(`Successfully sold ${sellAmount} USDT worth of tokens! Tx: ${txHash.slice(0, 10)}...${txHash.slice(-8)}`);
      setSellAmount('');

      setTimeout(fetchMlmData, 3000);
    } catch (error) {
      console.error('❌ [handleSell] Sell process failed:', error);
      setError(`Failed to sell tokens: ${error.message || 'Unknown error'}`);
    } finally {
      setOrderLoading(false);
    }
  };

  const handleBuyToken = async () => {
    console.log("🪙 [handleBuyToken] Buy token button clicked");

    if (!wallet.isConnected || !wallet.account) {
      setError('Wallet not connected. Please connect your wallet.');
      return;
    }

    if (!buyTokenAmount || parseFloat(buyTokenAmount) <= 0) {
      setError('Please enter a valid amount to buy tokens');
      return;
    }

    if (chainId !== 56) {
      setError("Please switch to BSC Mainnet (Chain ID: 56) to buy tokens.");
      return;
    }

    try {
      setOrderLoading(true);
      setError('');
      setSuccess('');

      const decimals = await readContract(config, {
        abi: USDT_ABI,
        address: USDT_ADDRESS,
        functionName: 'decimals',
        chainId: 56,
      });

      const amountInWei = parseUnits(buyTokenAmount, Number(decimals));

      const allowance = await readContract(config, {
        abi: USDT_ABI,
        address: USDT_ADDRESS,
        functionName: 'allowance',
        args: [wallet.account, STAKING_CONTRACT_ADDRESS],
        chainId: 56,
      });

      if (allowance < amountInWei) {
        const approvalTx = await stakingInteractions.approveUSDT(amountInWei, wallet.account);
        await waitForTransactionReceipt(config, { hash: approvalTx, chainId: 56 });
      }

      const txHash = await stakingInteractions.buyToken(buyTokenAmount, wallet.account);
      setSuccess(`Successfully bought tokens with ${buyTokenAmount} USDT! Tx: ${txHash.slice(0, 10)}...${txHash.slice(-8)}`);
      setBuyTokenAmount('');

      setTimeout(fetchMlmData, 3000);
    } catch (error) {
      console.error('❌ [handleBuyToken] Buy token process failed:', error);

      if (error.message?.includes('User rejected')) {
        setError('Transaction was cancelled by user');
      } else if (error.message?.includes('insufficient')) {
        setError('Insufficient USDT balance for this transaction');
      } else {
        setError(`Failed to buy tokens: ${error.message || 'Unknown error occurred'}`);
      }
    } finally {
      setOrderLoading(false);
    }
  };

  if (!wallet.isConnected) {
    return (
      <Container maxWidth="xl" sx={{ py: { xs: 3, sm: 4 } }}>
        <Card sx={{
          p: { xs: 3, sm: 4, md: 5 },
          boxShadow: { xs: 4, sm: 8, md: 12 },
          textAlign: 'center',
          backgroundColor: 'white',
          borderRadius: { xs: 3, sm: 4 },
          border: '1px solid rgba(0, 0, 0, 0.08)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #1976d2 0%, #42a5f5 50%, #1976d2 100%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 3s ease-in-out infinite',
          }
        }}>
          <Typography variant="h4" gutterBottom sx={{
            color: 'primary.main',
            fontWeight: 800,
            fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2.2rem' },
            letterSpacing: '-0.02em',
            mb: 2
          }}>
            Welcome to SafeMint Dashboard
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{
            mb: 4,
            fontSize: { xs: '1rem', sm: '1.1rem' },
            fontWeight: 500,
            lineHeight: 1.6
          }}>
            Connect your wallet to access the dashboard and start earning with our secure staking platform.
          </Typography>
          {isFromReferralLink && referralCode && (
            <Alert severity="info" sx={{
              mb: 4,
              borderRadius: 2,
              boxShadow: '0 4px 12px rgba(33, 150, 243, 0.15)'
            }}>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                🎉 You were invited! Referral code: {referralCode.slice(0, 6)}...{referralCode.slice(-4)}
              </Typography>
            </Alert>
          )}
          <Button
            variant="contained"
            size="large"
            onClick={wallet.connectWallet}
            disabled={wallet.loading}
            sx={{
              minWidth: 220,
              py: { xs: 1.5, sm: 2 },
              px: { xs: 3, sm: 4 },
              fontSize: { xs: '1rem', sm: '1.1rem' },
              fontWeight: 700,
              borderRadius: '30px',
              textTransform: 'none',
              boxShadow: '0 6px 20px rgba(25, 118, 210, 0.3)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 25px rgba(25, 118, 210, 0.4)'
              }
            }}
          >
            {wallet.loading ? <CircularProgress size={24} color="inherit" /> : 'Connect Wallet'}
          </Button>
          <Typography variant="body2" color="text.secondary" sx={{
            mt: 3,
            fontSize: { xs: '0.9rem', sm: '1rem' },
            fontWeight: 500
          }}>
            💡 Connecting your wallet is safe and secure
          </Typography>
        </Card>
      </Container>
    );
  }

  if (isLoading) {
    return (
      <Container
        maxWidth="xl"
        sx={{
          py: { xs: 4, sm: 6 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '60vh'
        }}
      >
        <Box sx={{
          textAlign: 'center',
          p: { xs: 3, sm: 4 },
          borderRadius: 3,
          backgroundColor: 'white',
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
          border: '1px solid rgba(0, 0, 0, 0.08)'
        }}>
          <CircularProgress size={48} sx={{ mb: 3 }} />
          <Typography variant="h6" sx={{
            color: 'primary.main',
            fontWeight: 600,
            mb: 1
          }}>
            Loading Dashboard
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
            Please wait while we fetch your data...
          </Typography>
        </Box>
      </Container>
    );
  }

  if (notRegistered) {
    return (
      <RegistrationForm
        referralCode={referralCode}
        setReferralCode={setReferralCode}
        onRegister={handleRegister}
        isLoading={isLoading}
        error={error}
        success={success}
        setError={setError}
        setSuccess={setSuccess}
        isFromReferralLink={isFromReferralLink}
      />
    );
  }

  return (
    <Box sx={{
      backgroundColor: '#f8f9fa',
      minHeight: '100vh',
      py: { xs: 2, sm: 3, md: 4 },
      pb: { xs: 12, sm: 4, md: 4 } // Add extra bottom padding for mobile to avoid footer overlap
    }}>
      <Container
        maxWidth="xl"
        sx={{
          px: { xs: 1.5, sm: 2, md: 3 }
        }}
      >
        {error && (
          <Alert
            severity="error"
            sx={{
              mb: 3,
              backgroundColor: 'white',
              borderRadius: 2,
              boxShadow: '0 4px 12px rgba(244, 67, 54, 0.15)',
              border: '1px solid rgba(244, 67, 54, 0.2)',
              fontWeight: 500
            }}
            onClose={() => setError('')}
          >
            {error}
          </Alert>
        )}
        {success && (
          <Alert
            severity="success"
            sx={{
              mb: 3,
              backgroundColor: 'white',
              borderRadius: 2,
              boxShadow: '0 4px 12px rgba(76, 175, 80, 0.15)',
              border: '1px solid rgba(76, 175, 80, 0.2)',
              fontWeight: 500
            }}
            onClose={() => setSuccess('')}
          >
            {success}
          </Alert>
        )}

        {/* Header Section */}
        <Box
          sx={{
            mb: { xs: 2, sm: 3 },
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: { xs: 1.5, sm: 2 },
            p: { xs: 2, sm: 3, md: 4 },
            borderRadius: { xs: 3, sm: 4 },
            backgroundColor: 'white',
            boxShadow: { xs: 2, sm: 4, md: 6 },
            border: '1px solid rgba(0, 0, 0, 0.08)',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(90deg, #1976d2 0%, #42a5f5 50%, #1976d2 100%)',
              backgroundSize: '200% 100%',
              animation: 'shimmer 3s ease-in-out infinite',
            },
            '@keyframes shimmer': {
              '0%': { backgroundPosition: '-200% 0' },
              '100%': { backgroundPosition: '200% 0' }
            },
            animation: 'float 6s ease-in-out infinite',
            '@keyframes float': {
              '0%, 100%': { transform: 'translateY(0px)' },
              '50%': { transform: 'translateY(-2px)' }
            }
          }}
        >
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                color: 'primary.main',
                fontWeight: 800,
                fontSize: { xs: '1.4rem', sm: '1.6rem', md: '2.1rem' },
                lineHeight: 1.1,
                mb: { xs: 0.5, sm: 1 },
                letterSpacing: '-0.02em'
              }}
            >
              SafeMint Dashboard
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1.05rem' },
                lineHeight: 1.5,
                fontWeight: 500
              }}
            >
              Welcome back! {wallet.account?.slice(0, 6)}...{wallet.account?.slice(-4)}
            </Typography>
          </Box>

          <Button
            variant="outlined"
            startIcon={<RefreshCw size={18} />}
            onClick={fetchMlmData}
            disabled={isLoading}
            size={isMobile ? 'small' : 'medium'}
            sx={{
              fontSize: { xs: '0.8rem', sm: '0.875rem', md: '1rem' },
              flex: { xs: 1, sm: 'none' },
              borderRadius: { xs: 2, sm: 3 },
              fontWeight: 600,
              px: { xs: 2, sm: 3 },
              py: { xs: 1, sm: 1.5 },
              borderWidth: '2px',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': {
                borderWidth: '2px',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 25px rgba(25, 118, 210, 0.15)'
              }
            }}
          >
            Refresh
          </Button>
        </Box>

        {/* Token Information Section */}
        <Card sx={{
          p: { xs: 2, sm: 3, md: 4 },
          backgroundColor: 'white',
          borderRadius: { xs: 3, sm: 4 },
          boxShadow: { xs: 2, sm: 4, md: 6 },
          mb: { xs: 2, sm: 3 },
          width: '100%',
          border: '1px solid rgba(0, 0, 0, 0.08)',
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          animation: 'slideInUp 0.6s ease-out',
          '&:hover': {
            boxShadow: { xs: 4, sm: 8, md: 12 },
            transform: 'translateY(-4px) scale(1.01)'
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: 'linear-gradient(90deg, #1976d2 0%, #42a5f5 50%, #1976d2 100%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 3s ease-in-out infinite',
          },
          '@keyframes slideInUp': {
            '0%': { opacity: 0, transform: 'translateY(30px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' }
          },
          '@keyframes shimmer': {
            '0%': { backgroundPosition: '-200% 0' },
            '100%': { backgroundPosition: '200% 0' }
          }
        }}>
          {/* Decorative SVG Circle */}
          <Box sx={{
            position: 'absolute',
            top: 16,
            left: 16,
            width: 12,
            height: 12,
            zIndex: 1
          }}>
            <svg width="12" height="12" viewBox="0 0 12 12">
              <circle
                cx="6"
                cy="6"
                r="5"
                fill="none"
                stroke="#1976d2"
                strokeWidth="1"
                opacity="0.6"
              >
                <animate
                  attributeName="r"
                  values="3;5;3"
                  dur="2s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.6;0.2;0.6"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
          </Box>

          <Typography
            variant="h6"
            gutterBottom
            sx={{
              color: 'primary.main',
              fontWeight: 700,
              mb: { xs: 2, sm: 3 },
              fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.35rem' },
              textAlign: { xs: 'center', sm: 'left' },
              letterSpacing: '-0.01em',
              pl: { xs: 0, sm: 3 }
            }}
          >
            Token Information
          </Typography>

          {/* Token Price Card - Full Width on Mobile */}
          {/* <Grid
            container
            spacing={{ xs: 1.5, sm: 2, md: 2 }}
            sx={{
              width: '100%',
              margin: 0,
              mb: { xs: 2, sm: 3 }
            }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                width: { xs: '100%', sm: '100%', md: 'auto' },
                maxWidth: { xs: '100%', sm: '100%', md: 'none' },
                flexBasis: { xs: '100%', sm: '100%', md: 'auto' }
              }}
            >
              <Box sx={{
                width: { xs: '100%', sm: '100%', md: '100%' },
                maxWidth: '100%'
              }}>
                <TokenPriceCard autoRefresh={true} refreshInterval={30000} />
              </Box>
            </Grid>
          </Grid> */}

          {/* Token Stats Cards - Responsive Grid */}
          <Grid
            container
            spacing={{ xs: 2, sm: 2.5, md: 3 }}
            sx={{
              width: '100%',
              margin: 0
            }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                width: { xs: '100%', sm: '100%', md: 'auto' },
                maxWidth: { xs: '100%', sm: '100%', md: 'none' },
                flexBasis: { xs: '100%', sm: '100%', md: 'auto' }
              }}
            >
              <Box sx={{
                width: { xs: '100%', sm: '100%', md: '100%' },
                maxWidth: '100%'
              }}>
                <SafeMintTokenStats autoRefresh={true} refreshInterval={30000} />
              </Box>
            </Grid>
          </Grid>
        </Card>

        {/* Team Statistics Cards */}
        <Card sx={{
          p: { xs: 2, sm: 3, md: 4 },
          backgroundColor: 'white',
          borderRadius: { xs: 3, sm: 4 },
          boxShadow: { xs: 2, sm: 4, md: 6 },
          mb: { xs: 2, sm: 3 },
          width: '100%',
          border: '1px solid rgba(0, 0, 0, 0.08)',
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          animation: 'slideInUp 0.8s ease-out',
          animationDelay: '0.1s',
          animationFillMode: 'both',
          '&:hover': {
            boxShadow: { xs: 4, sm: 8, md: 12 },
            transform: 'translateY(-4px) scale(1.01)'
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: 'linear-gradient(90deg, #9c27b0 0%, #e1bee7 50%, #9c27b0 100%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 3s ease-in-out infinite',
          }
        }}>
          {/* Decorative SVG Circle */}
          <Box sx={{
            position: 'absolute',
            top: 16,
            left: 16,
            width: 12,
            height: 12,
            zIndex: 1
          }}>
            <svg width="12" height="12" viewBox="0 0 12 12">
              <circle
                cx="6"
                cy="6"
                r="5"
                fill="none"
                stroke="#9c27b0"
                strokeWidth="1"
                opacity="0.6"
              >
                <animate
                  attributeName="r"
                  values="2;6;2"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.8;0.2;0.8"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
          </Box>

          <Typography
            variant="h6"
            gutterBottom
            sx={{
              color: 'primary.main',
              mb: { xs: 2, sm: 3 },
              fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.35rem' },
              fontWeight: 700,
              textAlign: { xs: 'center', sm: 'left' },
              letterSpacing: '-0.01em',
              pl: { xs: 0, sm: 3 }
            }}
          >
            Team Statistics
          </Typography>
          <Grid
            container
            spacing={{ xs: 2, sm: 2.5, md: 3 }}
            sx={{
              width: '100%',
              margin: 0
            }}
          >
            {[
              { icon: <Users size={24} />, title: 'My Direct', value: isLoading ? <LoadingSkeleton height={24} width={60} /> : formatNumber(mlmData.directTeam), subtitle: 'Direct Referrals', color: 'primary.main' },
              { icon: <Star size={24} />, title: 'Strong Teams', value: isLoading ? <LoadingSkeleton height={24} width={60} /> : formatNumber(mlmData.strongTeam), subtitle: 'Active Strong Teams', color: 'secondary.main' },
              { icon: <Users size={24} />, title: 'Other Teams', value: isLoading ? <LoadingSkeleton height={24} width={60} /> : formatNumber(mlmData.otherTeams), subtitle: 'Additional Team Members', color: 'info.main' },
              { icon: <BarChart3 size={24} />, title: 'Levels', value: isLoading ? <LoadingSkeleton height={24} width={60} /> : formatNumber(mlmData.levels), subtitle: 'Achievement Levels', color: 'warning.main' },
              { icon: <CheckCircle size={24} />, title: 'Active Orders', value: isLoading ? <LoadingSkeleton height={24} width={60} /> : formatNumber(mlmData.activeOrders), subtitle: 'Current Active Orders', color: 'success.main' },
            ].map((card, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={4}
                xl={4}
                key={`team-stats-${index}`}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  width: { xs: '100%', sm: '100%', md: 'auto' },
                  maxWidth: { xs: '100%', sm: '100%', md: 'none' },
                  flexBasis: { xs: '100%', sm: '100%', md: 'auto' }
                }}
              >
                <Box sx={{
                  width: { xs: '100%', sm: '100%', md: '100%' },
                  maxWidth: '100%',
                  animation: 'fadeInUp 0.6s ease-out',
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both',
                  '@keyframes fadeInUp': {
                    '0%': { opacity: 0, transform: 'translateY(20px)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' }
                  }
                }}>
                  <StatCard
                    icon={card.icon}
                    title={card.title}
                    value={card.value}
                    subtitle={card.subtitle}
                    color={card.color}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Card>

        {/* Financial Overview Cards */}
        <Card sx={{
          p: { xs: 2, sm: 3, md: 4 },
          backgroundColor: 'white',
          borderRadius: { xs: 3, sm: 4 },
          boxShadow: { xs: 2, sm: 4, md: 6 },
          mb: { xs: 2, sm: 3 },
          width: '100%',
          border: '1px solid rgba(0, 0, 0, 0.08)',
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          animation: 'slideInUp 1s ease-out',
          animationDelay: '0.2s',
          animationFillMode: 'both',
          '&:hover': {
            boxShadow: { xs: 4, sm: 8, md: 12 },
            transform: 'translateY(-4px) scale(1.01)'
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: 'linear-gradient(90deg, #4caf50 0%, #81c784 50%, #4caf50 100%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 3s ease-in-out infinite',
          }
        }}>
          {/* Decorative SVG Circle */}
          <Box sx={{
            position: 'absolute',
            top: 16,
            left: 16,
            width: 12,
            height: 12,
            zIndex: 1
          }}>
            <svg width="12" height="12" viewBox="0 0 12 12">
              <circle
                cx="6"
                cy="6"
                r="5"
                fill="none"
                stroke="#4caf50"
                strokeWidth="1"
                opacity="0.6"
              >
                <animate
                  attributeName="r"
                  values="4;6;4"
                  dur="3s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.6;0.3;0.6"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
          </Box>

          <Typography
            variant="h6"
            gutterBottom
            sx={{
              color: 'primary.main',
              mb: { xs: 2, sm: 3 },
              fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.35rem' },
              fontWeight: 700,
              textAlign: { xs: 'center', sm: 'left' },
              letterSpacing: '-0.01em',
              pl: { xs: 0, sm: 3 }
            }}
          >
            Financial Overview
          </Typography>
          <Grid
            container
            spacing={{ xs: 2, sm: 2.5, md: 3 }}
            sx={{
              width: '100%',
              margin: 0
            }}
          >
            {[
              { icon: <TrendingUp size={24} />, title: 'Total In', value: isLoading ? <LoadingSkeleton height={24} width={80} /> : formatCurrency(mlmData.totalIn), subtitle: 'Total Investments', color: 'success.main' },
              { icon: <DollarSign size={24} />, title: 'Total Out', value: isLoading ? <LoadingSkeleton height={24} width={80} /> : formatCurrency(mlmData.totalOut), subtitle: 'Total Withdrawals', color: 'info.main' },
              { icon: <Wallet size={24} />, title: 'Active Portfolio', value: isLoading ? <LoadingSkeleton height={24} width={80} /> : formatCurrency(mlmData.activePortfolio), subtitle: 'Current Investment Value', color: 'primary.main' },
              { icon: <Trophy size={24} />, title: 'Team Growth Wallet', value: isLoading ? <LoadingSkeleton height={24} width={80} /> : formatCurrency(mlmData.teamGrowthWallet), subtitle: 'Growth Wallet Balance', color: 'secondary.main' },
              { icon: <Building2 size={24} />, title: 'Total Withdrawn', value: isLoading ? <LoadingSkeleton height={24} width={80} /> : formatCurrency(mlmData.totalWithdrawn), subtitle: 'Total Amount Withdrawn', color: 'error.main' },
              { icon: <Users2 size={24} />, title: 'Team Growth Laps', value: isLoading ? <LoadingSkeleton height={24} width={80} /> : formatCurrency(mlmData.teamGrowthLaps), subtitle: 'Team Growth Cycles', color: 'warning.main' },
              { icon: <Wallet size={24} />, title: 'SafeMint Buy Potential', value: isLoading ? <LoadingSkeleton height={24} width={80} /> : formatCurrency(mlmData.inOutBuy), subtitle: 'Buy Potential Value', color: 'info.main' },
              { icon: <Fuel size={24} />, title: 'Growth Fuels', value: isLoading ? <LoadingSkeleton height={24} width={80} /> : formatCurrency(mlmData.growthFuels), subtitle: 'Team Growth Potential', color: 'success.main' },
              { icon: <Battery size={24} />, title: 'Total Fuels', value: isLoading ? <LoadingSkeleton height={24} width={80} /> : formatCurrency(mlmData.totalFuels), subtitle: 'Combined Fuel Resources', color: 'primary.main' },
            ].map((card, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={4}
                xl={4}
                key={`financial-${index}`}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  width: { xs: '100%', sm: '100%', md: 'auto' },
                  maxWidth: { xs: '100%', sm: '100%', md: 'none' },
                  flexBasis: { xs: '100%', sm: '100%', md: 'auto' }
                }}
              >
                <Box sx={{
                  width: { xs: '100%', sm: '100%', md: '100%' },
                  maxWidth: '100%',
                  animation: 'fadeInUp 0.6s ease-out',
                  animationDelay: `${index * 0.08}s`,
                  animationFillMode: 'both'
                }}>
                  <StatCard
                    icon={card.icon}
                    title={card.title}
                    value={card.value}
                    subtitle={card.subtitle}
                    color={card.color}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Card>

        {/* Earnings Breakdown Cards */}
        <Card sx={{
          p: { xs: 2, sm: 3, md: 4 },
          backgroundColor: 'white',
          borderRadius: { xs: 3, sm: 4 },
          boxShadow: { xs: 2, sm: 4, md: 6 },
          mb: { xs: 2, sm: 3 },
          width: '100%',
          border: '1px solid rgba(0, 0, 0, 0.08)',
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          animation: 'slideInUp 1.2s ease-out',
          animationDelay: '0.3s',
          animationFillMode: 'both',
          '&:hover': {
            boxShadow: { xs: 4, sm: 8, md: 12 },
            transform: 'translateY(-4px) scale(1.01)'
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: 'linear-gradient(90deg, #ff9800 0%, #ffcc02 50%, #ff9800 100%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 3s ease-in-out infinite',
          }
        }}>
          {/* Decorative SVG Circle */}
          <Box sx={{
            position: 'absolute',
            top: 16,
            left: 16,
            width: 12,
            height: 12,
            zIndex: 1
          }}>
            <svg width="12" height="12" viewBox="0 0 12 12">
              <circle
                cx="6"
                cy="6"
                r="5"
                fill="none"
                stroke="#ff9800"
                strokeWidth="1"
                opacity="0.6"
              >
                <animate
                  attributeName="r"
                  values="3;5;3"
                  dur="2.2s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.7;0.3;0.7"
                  dur="2.2s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
          </Box>

          <Typography
            variant="h6"
            gutterBottom
            sx={{
              color: 'primary.main',
              mb: { xs: 2, sm: 3 },
              fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.35rem' },
              fontWeight: 700,
              textAlign: { xs: 'center', sm: 'left' },
              letterSpacing: '-0.01em',
              pl: { xs: 0, sm: 3 }
            }}
          >
            Earnings Breakdown
          </Typography>
          <Grid
            container
            spacing={{ xs: 2, sm: 2.5, md: 3 }}
            sx={{
              width: '100%',
              margin: 0
            }}
          >
            {[
              { icon: <Users size={24} />, title: 'Referral Earn', value: isLoading ? <LoadingSkeleton height={24} width={80} /> : formatCurrency(mlmData.referralEarn), subtitle: 'From Direct Referrals', color: 'primary.main' },
              { icon: <BarChart3 size={24} />, title: 'Level Earn', value: isLoading ? <LoadingSkeleton height={24} width={80} /> : formatCurrency(mlmData.levelEarn), subtitle: 'From Team Levels', color: 'info.main' },
              { icon: <TrendingUp size={24} />, title: 'Growth Earn', value: isLoading ? <LoadingSkeleton height={24} width={80} /> : formatCurrency(mlmData.growthEarn), subtitle: 'From Growth System', color: 'success.main' },
              { icon: <Trophy size={24} />, title: 'Leader Earn', value: isLoading ? <LoadingSkeleton height={24} width={80} /> : formatCurrency(mlmData.leaderEarn), subtitle: 'From Leadership', color: 'warning.main' },
              { icon: <BarChart3 size={24} />, title: 'Development Earn', value: isLoading ? <LoadingSkeleton height={24} width={80} /> : formatCurrency(mlmData.developmentEarn), subtitle: 'From Development', color: 'info.main' },
              { icon: <Users size={24} />, title: 'Team Growth', value: isLoading ? <LoadingSkeleton height={24} width={80} /> : formatCurrency(mlmData.teamGrowthWallet), subtitle: 'Team Growth Wallet', color: 'secondary.main' },
            ].map((card, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={4}
                xl={4}
                key={`earnings-${index}`}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  width: { xs: '100%', sm: '100%', md: 'auto' },
                  maxWidth: { xs: '100%', sm: '100%', md: 'none' },
                  flexBasis: { xs: '100%', sm: '100%', md: 'auto' }
                }}
              >
                <Box sx={{
                  width: { xs: '100%', sm: '100%', md: '100%' },
                  maxWidth: '100%',
                  animation: 'fadeInUp 0.6s ease-out',
                  animationDelay: `${index * 0.12}s`,
                  animationFillMode: 'both'
                }}>
                  <StatCard
                    icon={card.icon}
                    title={card.title}
                    value={card.value}
                    subtitle={card.subtitle}
                    color={card.color}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Card>

        {/* Main Action Cards Grid */}
        <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }} sx={{ width: '100%', margin: 0 }}>

          {/* Trading & Staking Card */}
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              width: { xs: '100%', sm: '100%', md: 'auto' },
              maxWidth: { xs: '100%', sm: '100%', md: 'none' },
              flexBasis: { xs: '100%', sm: '100%', md: 'auto' }
            }}
          >
            <Box sx={{
              width: { xs: '100%', sm: '100%', md: '100%' },
              maxWidth: '100%'
            }}>
              <Card sx={{
                p: { xs: 2, sm: 3, md: 4 },
                backgroundColor: 'white',
                borderRadius: { xs: 3, sm: 4 },
                boxShadow: { xs: 2, sm: 4, md: 6 },
                height: 'fit-content',
                width: '100%',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                animation: 'slideInLeft 1.4s ease-out',
                animationDelay: '0.4s',
                animationFillMode: 'both',
                '&:hover': {
                  boxShadow: { xs: 4, sm: 8, md: 12 },
                  transform: 'translateY(-4px) scale(1.01)'
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, #2196f3 0%, #64b5f6 50%, #2196f3 100%)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 3s ease-in-out infinite',
                },
                '@keyframes slideInLeft': {
                  '0%': { opacity: 0, transform: 'translateX(-30px)' },
                  '100%': { opacity: 1, transform: 'translateX(0)' }
                }
              }}>
              {/* Decorative SVG Circle */}
              <Box sx={{
                position: 'absolute',
                top: 16,
                left: 16,
                width: 12,
                height: 12,
                zIndex: 1
              }}>
                <svg width="12" height="12" viewBox="0 0 12 12">
                  <circle
                    cx="6"
                    cy="6"
                    r="5"
                    fill="none"
                    stroke="#2196f3"
                    strokeWidth="1"
                    opacity="0.6"
                  >
                    <animate
                      attributeName="r"
                      values="2;5;2"
                      dur="2.8s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.8;0.2;0.8"
                      dur="2.8s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </svg>
              </Box>

              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  color: 'primary.main',
                  fontWeight: 700,
                  mb: { xs: 2, sm: 3 },
                  fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.35rem' },
                  textAlign: { xs: 'center', sm: 'left' },
                  letterSpacing: '-0.01em',
                  pl: { xs: 0, sm: 3 }
                }}
              >
                Trading & Staking
              </Typography>

              <TradingSection
                buyAmount={buyAmount}
                setBuyAmount={setBuyAmount}
                sellAmount={sellAmount}
                setSellAmount={setSellAmount}
                buyTokenAmount={buyTokenAmount}
                setBuyTokenAmount={setBuyTokenAmount}
                onBuy={handleBuy}
                onSell={handleSell}
                onBuyToken={handleBuyToken}
                orderLoading={orderLoading}
              />
              </Card>
            </Box>
          </Grid>

          {/* Referral Section Card */}
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              width: { xs: '100%', sm: '100%', md: 'auto' },
              maxWidth: { xs: '100%', sm: '100%', md: 'none' },
              flexBasis: { xs: '100%', sm: '100%', md: 'auto' }
            }}
          >
            <Box sx={{
              width: { xs: '100%', sm: '100%', md: '100%' },
              maxWidth: '100%'
            }}>
              <Card sx={{
                p: { xs: 2, sm: 3, md: 4 },
                backgroundColor: 'white',
                borderRadius: { xs: 3, sm: 4 },
                boxShadow: { xs: 2, sm: 4, md: 6 },
                height: 'fit-content',
                width: '100%',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                animation: 'slideInRight 1.4s ease-out',
                animationDelay: '0.5s',
                animationFillMode: 'both',
                '&:hover': {
                  boxShadow: { xs: 4, sm: 8, md: 12 },
                  transform: 'translateY(-4px) scale(1.01)'
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, #673ab7 0%, #9575cd 50%, #673ab7 100%)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 3s ease-in-out infinite',
                },
                '@keyframes slideInRight': {
                  '0%': { opacity: 0, transform: 'translateX(30px)' },
                  '100%': { opacity: 1, transform: 'translateX(0)' }
                }
              }}>
              {/* Decorative SVG Circle */}
              <Box sx={{
                position: 'absolute',
                top: 16,
                left: 16,
                width: 12,
                height: 12,
                zIndex: 1
              }}>
                <svg width="12" height="12" viewBox="0 0 12 12">
                  <circle
                    cx="6"
                    cy="6"
                    r="5"
                    fill="none"
                    stroke="#673ab7"
                    strokeWidth="1"
                    opacity="0.6"
                  >
                    <animate
                      attributeName="r"
                      values="4;6;4"
                      dur="2.6s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.6;0.2;0.6"
                      dur="2.6s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </svg>
              </Box>

              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  color: 'primary.main',
                  fontWeight: 700,
                  mb: { xs: 2, sm: 3 },
                  fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.35rem' },
                  textAlign: { xs: 'center', sm: 'left' },
                  letterSpacing: '-0.01em',
                  pl: { xs: 0, sm: 3 }
                }}
              >
                Your Referral Code
              </Typography>

              <ReferralSection
                account={wallet.account}
                onCopy={() => setSuccess('Referral code copied to clipboard!')}
                onShare={() => setSuccess('Referral shared successfully!')}
              />
              </Card>
            </Box>
          </Grid>

          {/* Withdrawal Information Card */}
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              width: { xs: '100%', sm: '100%', md: 'auto' },
              maxWidth: { xs: '100%', sm: '100%', md: 'none' },
              flexBasis: { xs: '100%', sm: '100%', md: 'auto' }
            }}
          >
            <Box sx={{
              width: { xs: '100%', sm: '100%', md: '100%' },
              maxWidth: '100%'
            }}>
              <Card sx={{
                p: { xs: 2, sm: 3, md: 4 },
                backgroundColor: 'white',
                borderRadius: { xs: 3, sm: 4 },
                boxShadow: { xs: 2, sm: 4, md: 6 },
                height: 'fit-content',
                width: '100%',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                animation: 'slideInLeft 1.6s ease-out',
                animationDelay: '0.6s',
                animationFillMode: 'both',
                '&:hover': {
                  boxShadow: { xs: 4, sm: 8, md: 12 },
                  transform: 'translateY(-4px) scale(1.01)'
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, #4caf50 0%, #81c784 50%, #4caf50 100%)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 3s ease-in-out infinite',
                }
              }}>
              {/* Decorative SVG Circle */}
              <Box sx={{
                position: 'absolute',
                top: 16,
                left: 16,
                width: 12,
                height: 12,
                zIndex: 1
              }}>
                <svg width="12" height="12" viewBox="0 0 12 12">
                  <circle
                    cx="6"
                    cy="6"
                    r="5"
                    fill="none"
                    stroke="#4caf50"
                    strokeWidth="1"
                    opacity="0.6"
                  >
                    <animate
                      attributeName="r"
                      values="3;6;3"
                      dur="2.4s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.7;0.2;0.7"
                      dur="2.4s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </svg>
              </Box>

              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  mb: { xs: 2, sm: 3 },
                  textAlign: 'center',
                  color: 'primary.main',
                  fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.35rem' },
                  letterSpacing: '-0.01em',
                  pl: { xs: 0, sm: 3 }
                }}
              >
                Withdrawal Information
              </Typography>

              <Box sx={{ mb: 3 }}>
                <Box sx={{
                  backgroundColor: '#f8f9fa',
                  p: { xs: 1.5, sm: 2 },
                  display: 'flex',
                  justifyContent: 'space-between',
                  borderRadius: '12px 12px 0 0',
                  borderBottom: '2px solid #e9ecef',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                }}>
                  <Typography variant="body2" sx={{ fontWeight: 700, color: 'text.primary', fontSize: { xs: '0.85rem', sm: '0.9rem' } }}>
                    Earning Type
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 700, color: 'text.primary', fontSize: { xs: '0.85rem', sm: '0.9rem' } }}>
                    Available Amount
                  </Typography>
                </Box>

                <Box sx={{
                  border: '1px solid #e9ecef',
                  borderTop: 'none',
                  borderRadius: '0 0 12px 12px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                }}>
                  {[
                    { label: 'Referral Earnings', value: isLoading ? <LoadingSkeleton height={16} width={60} /> : mlmData.referralEarn },
                    { label: 'Level Earnings', value: isLoading ? <LoadingSkeleton height={16} width={60} /> : mlmData.levelEarn },
                    { label: 'Growth Earnings', value: isLoading ? <LoadingSkeleton height={16} width={60} /> : mlmData.growthEarn },
                    { label: 'Team Growth Gains', value: isLoading ? <LoadingSkeleton height={16} width={60} /> : mlmData.teamGrowthWallet },
                    { label: 'Leader Earnings', value: isLoading ? <LoadingSkeleton height={16} width={60} /> : mlmData.leaderEarn },
                    { label: 'Development Earnings', value: isLoading ? <LoadingSkeleton height={16} width={60} /> : mlmData.developmentEarn },
                  ].map((item, index, array) => (
                    <Box
                      key={item.label}
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        p: { xs: 1.5, sm: 2 },
                        borderBottom: index < array.length - 1 ? '1px solid #f1f3f4' : 'none',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          backgroundColor: '#f8f9fa'
                        }
                      }}
                    >
                      <Typography variant="body2" sx={{
                        color: 'text.primary',
                        fontSize: { xs: '0.8rem', sm: '0.9rem' },
                        fontWeight: 500
                      }}>
                        {item.label}
                      </Typography>
                      <Typography variant="body2" sx={{
                        fontWeight: 700,
                        color: 'success.main',
                        fontSize: { xs: '0.8rem', sm: '0.9rem' }
                      }}>
                        {typeof item.value === 'object' ? item.value : `+ $${formatNumber(item.value)}`}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              <Box sx={{
                backgroundColor: '#f8f9fa',
                p: { xs: 2, sm: 3 },
                borderRadius: 3,
                mb: 3,
                textAlign: 'center',
                border: '2px solid #e9ecef',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, #4caf50 0%, #81c784 50%, #4caf50 100%)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 2s ease-in-out infinite',
                }
              }}>
                <Typography variant="h4" sx={{
                  fontWeight: 800,
                  color: 'primary.main',
                  mb: 1,
                  fontSize: { xs: '1.6rem', sm: '2.2rem', md: '2.8rem' },
                  letterSpacing: '-0.02em'
                }}>
                  {isLoading ? (
                    <LoadingSkeleton height={40} width={120} />
                  ) : (
                    `$${formatNumber(
                      mlmData.referralEarn +
                      mlmData.levelEarn +
                      mlmData.growthEarn +
                      mlmData.teamGrowthWallet +
                      mlmData.leaderEarn +
                      mlmData.developmentEarn
                    )}`
                  )}
                </Typography>
                <Typography variant="body1" sx={{
                  color: 'text.secondary',
                  fontWeight: 600,
                  fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1.05rem' }
                }}>
                  Total Available for Withdrawal
                </Typography>
              </Box>

              <Box sx={{ textAlign: 'center' }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    borderRadius: '30px',
                    px: { xs: 4, sm: 5 },
                    py: { xs: 1.5, sm: 2 },
                    fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.15rem' },
                    fontWeight: 700,
                    textTransform: 'none',
                    boxShadow: '0 6px 20px rgba(76, 175, 80, 0.3)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      backgroundColor: '#45a049',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 25px rgba(76, 175, 80, 0.4)'
                    },
                    '&:disabled': {
                      backgroundColor: '#cccccc',
                      transform: 'none',
                      boxShadow: 'none'
                    }
                  }}
                  disabled={orderLoading || (mlmData.referralEarn + mlmData.levelEarn + mlmData.growthEarn + mlmData.teamGrowthWallet + mlmData.leaderEarn + mlmData.developmentEarn) <= 0}
                  onClick={handleWithdraw}
                >
                  {orderLoading ? <CircularProgress size={24} color="inherit" /> : 'Withdraw Earnings'}
                </Button>
              </Box>
              </Card>
            </Box>
          </Grid>

          {/* Order History Card */}
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              width: { xs: '100%', sm: '100%', md: 'auto' },
              maxWidth: { xs: '100%', sm: '100%', md: 'none' },
              flexBasis: { xs: '100%', sm: '100%', md: 'auto' }
            }}
          >
            <Box sx={{
              width: { xs: '100%', sm: '100%', md: '100%' },
              maxWidth: '100%'
            }}>
              <Card sx={{
                p: { xs: 2, sm: 3, md: 4 },
                backgroundColor: 'white',
                borderRadius: { xs: 3, sm: 4 },
                boxShadow: { xs: 2, sm: 4, md: 6 },
                height: 'fit-content',
                width: '100%',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                animation: 'slideInRight 1.6s ease-out',
                animationDelay: '0.7s',
                animationFillMode: 'both',
                '&:hover': {
                  boxShadow: { xs: 4, sm: 8, md: 12 },
                  transform: 'translateY(-4px) scale(1.01)'
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, #f44336 0%, #ef5350 50%, #f44336 100%)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 3s ease-in-out infinite',
                }
              }}>
              {/* Decorative SVG Circle */}
              <Box sx={{
                position: 'absolute',
                top: 16,
                left: 16,
                width: 12,
                height: 12,
                zIndex: 1
              }}>
                <svg width="12" height="12" viewBox="0 0 12 12">
                  <circle
                    cx="6"
                    cy="6"
                    r="5"
                    fill="none"
                    stroke="#f44336"
                    strokeWidth="1"
                    opacity="0.6"
                  >
                    <animate
                      attributeName="r"
                      values="2;6;2"
                      dur="3.2s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.8;0.2;0.8"
                      dur="3.2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </svg>
              </Box>

              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  color: 'primary.main',
                  fontWeight: 700,
                  mb: { xs: 2, sm: 3 },
                  fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.35rem' },
                  textAlign: { xs: 'center', sm: 'left' },
                  letterSpacing: '-0.01em',
                  pl: { xs: 0, sm: 3 }
                }}
              >
                Order History
              </Typography>

              <OrderHistoryTable
                orderHistory={orderHistory}
                orderLoading={orderLoading}
                formatDate={formatDate}
              />
              </Card>
            </Box>
          </Grid>

        </Grid>

      </Container>
    </Box>
  );
};

export default Dashboard;
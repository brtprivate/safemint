import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CircularProgress,
  Alert,
  Button,
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

// Import utility functions
import { formatCurrency, formatNumber, formatDate } from '../utils/formatters';


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
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';


// Helper function to safely stringify objects with BigInt values
const safeStringify = (obj, space = 2) => {
  return JSON.stringify(obj, (key, value) => {
    if (typeof value === 'bigint') {
      return value.toString() + 'n';
    }
    return value;
  }, space);
};

const MLMDashboard = () => {
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

      // Order History Processing (moved up to calculate totalIn correctly)
      console.log("📋 [fetchMlmData] Starting order history fetch for financial calculations...");
      const orders = [];

      console.log("� [fetchMlmData] Getting total order count...");
      const stakeViewResponse = await stakingInteractions.userStakeView(wallet.account, BigInt(0)).catch((err) => {
        console.error("❌ [fetchMlmData] Failed to get total count:", err);
        return { totalCount: 0 };
      });

      const totalCount = Number(stakeViewResponse?.totalCount || 0);
      console.log("� [fetchMlmData] Total order count:", totalCount);
      console.log("📊 [fetchMlmData] Initial stake view response:", safeStringify(stakeViewResponse));

      let totalStakedFromOrders = 0;

      for (let i = 0; i < totalCount; i++) {
        console.log(`📡 [fetchMlmData] Fetching order ${i + 1}/${totalCount}...`);

        const orderResponse = await stakingInteractions.userStakeView(wallet.account, BigInt(i)).catch((err) => {
          console.error(`❌ [fetchMlmData] Failed to get order ${i}:`, err);
          return {};
        });

        console.log(`� [fetchMlmData] Order ${i} raw response:`, safeStringify(orderResponse));

        const stakeInfo = orderResponse?.stakeInfo || {};
        console.log(`📊 [fetchMlmData] Order ${i} stake info:`, safeStringify(stakeInfo));

        const orderValue = stakeInfo?.orderValue || BigInt(0);
        const orderTime = stakeInfo?.orderTime || 0;
        const orderGrowth = stakeInfo?.orderGrowth || BigInt(0);
        const isMature = stakeInfo?.isMature || 0;
        const isComplete = stakeInfo?.isComplete || false;

        // Contract returns direct USDT values (not wei format)
        const formattedAmount = Number(orderValue);
        const timestamp = Number(orderTime) * 1000;
        // Growth rate is stored as 1 for 1%, not 10 for 1%
        const growthRate = Number(orderGrowth);
        const maturityStatus = Number(isMature);

        // Add to total staked amount
        totalStakedFromOrders += formattedAmount;

        console.log(`� [fetchMlmData] Order ${i} processed data:`);
        console.log(`  💰 Order Value (raw): ${orderValue.toString()}`);
        console.log(`  💰 Formatted Amount: ${formattedAmount}`);
        console.log(`  ⏰ Order Time (raw): ${orderTime}`);
        console.log(`  ⏰ Timestamp: ${timestamp}`);
        console.log(`  ✅ Is Complete: ${isComplete}`);
        console.log(`  📈 Is Stake: ${!isComplete}`);

        // Calculate date and remaining time
        const orderDate = new Date(timestamp);
        const formattedDate = orderDate.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        });

        // Calculate remaining time for maturity (15 days from actual stake date)
        const maturityPeriodDays = 15;
        const stakeDate = new Date(timestamp);
        const currentTime = new Date();

        // Calculate time elapsed since stake
        const timeElapsed = currentTime.getTime() - stakeDate.getTime();
        const daysElapsed = Math.floor(timeElapsed / (1000 * 60 * 60 * 24));
        const hoursElapsed = Math.floor((timeElapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutesElapsed = Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60));

        // Calculate remaining time
        const totalMaturityTime = maturityPeriodDays * 24 * 60 * 60 * 1000; // 15 days in milliseconds
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

        console.log(`  📅 Formatted Date: ${formattedDate}`);
        console.log(`  📈 Growth Rate: ${growthRate}%`);
        console.log(`  🔄 Maturity Status: ${maturityStatus}`);
        console.log(`  ⏳ Days Elapsed: ${daysElapsed} days`);
        console.log(`  ⏳ Remaining Time: ${remainingTimeText}`);

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

        console.log(`📊 [fetchMlmData] Order ${i} final object:`, safeStringify(processedOrder));
        orders.push(processedOrder);
      }

      console.log("💰 [fetchMlmData] Total staked from orders:", totalStakedFromOrders);

      // Financial Calculations (Reference-based)
      console.log("💰 [fetchMlmData] Processing financial data with decimals:", decimals);

      // Check if values are in wei format or direct USDT format
      const isWeiFormat = (value) => value > 1000000; // If value > 1M, likely in wei

      // Helper function to format values correctly
      const formatValue = (rawValue) => {
        if (!rawValue || rawValue === 0) return 0;

        // If it's a very large number, treat as wei and use decimals
        if (isWeiFormat(Number(rawValue))) {
          return parseFloat(formatUnits(rawValue, Number(decimals))) || 0;
        } else {
          // If it's a small number, treat as direct USDT value
          return parseFloat(rawValue.toString()) || 0;
        }
      };

      // Total In = bonusInfo.totalStake (Reference line 1494)
      const totalStakeRaw = bonusInfo?.totalStake || 0;
      const totalIn = formatValue(totalStakeRaw);
      console.log("💰 [fetchMlmData] Total In Raw:", totalStakeRaw.toString());
      console.log("💰 [fetchMlmData] Total In (formatted):", totalIn);

      // Total Out = bonusInfo.totalUnStake (Reference line 1495)
      const totalUnStakeRaw = bonusInfo?.totalUnStake || 0;
      const totalOut = formatValue(totalUnStakeRaw);
      console.log("💰 [fetchMlmData] Total Out Raw:", totalUnStakeRaw.toString());
      console.log("💰 [fetchMlmData] Total Out (formatted):", totalOut);

      // Total Withdrawn = bonusInfo.totalWithdrawn (Reference line 1493)
      const totalWithdrawnRaw = bonusInfo?.totalWithdrawn || 0;
      const totalWithdrawn = formatValue(totalWithdrawnRaw);
      console.log("💰 [fetchMlmData] Total Withdrawn Raw:", totalWithdrawnRaw.toString());
      console.log("💰 [fetchMlmData] Total Withdrawn:", totalWithdrawn);

      // Active Portfolio = totalStake - (OrderValue + totalUnStake) (Reference line 1497)
      const orderValueRaw = unStakePotential?.OrderValue || 0;
      const orderValueFormatted = formatValue(orderValueRaw);
      const activePortfolio = totalIn - (orderValueFormatted + totalOut);
      console.log("💰 [fetchMlmData] Order Value Raw:", orderValueRaw.toString());
      console.log("💰 [fetchMlmData] Order Value Formatted:", orderValueFormatted);
      console.log("💰 [fetchMlmData] Active Portfolio:", activePortfolio, "(", totalIn, "- (", orderValueFormatted, "+", totalOut, "))");

      // Individual earnings (available for withdrawal)
      const referralGainsRaw = bonusInfo?.referralGains || 0;
      const levelGainsRaw = bonusInfo?.levelGains || 0;
      const growthGainsRaw = bonusInfo?.growthGains || 0;
      console.log("💰 [fetchMlmData] Raw Gains - Referral:", referralGainsRaw.toString(), "Level:", levelGainsRaw.toString(), "Growth:", growthGainsRaw.toString());

      const referralEarn = formatValue(referralGainsRaw);
      const levelEarn = formatValue(levelGainsRaw);
      const growthEarn = formatValue(growthGainsRaw);

      const leaderGainsRaw = bonusInfo?.leaderGains || 0;
      const leaderEarn = formatValue(leaderGainsRaw);
      console.log("💰 [fetchMlmData] Leader Earn Raw:", leaderGainsRaw.toString(), "Formatted:", leaderEarn);

      const developmentGainsRaw = bonusInfo?.developmentGains || 0;
      const developmentEarn = formatValue(developmentGainsRaw);
      console.log("💰 [fetchMlmData] Development Earn Raw:", developmentGainsRaw.toString(), "Formatted:", developmentEarn);

      const teamGrowthGainsRaw = bonusInfo?.teamGrowthGains || 0;
      const teamGrowthWallet = formatValue(teamGrowthGainsRaw);
      console.log("💰 [fetchMlmData] Team Growth Wallet Raw:", teamGrowthGainsRaw.toString(), "Formatted:", teamGrowthWallet);

      // Team Growth Laps = userPotantial.teamLaps / base (Reference line 1503)
      const teamLapsRaw = unStakePotential?.teamLaps || 0;
      const teamGrowthLaps = parseFloat(formatUnits(teamLapsRaw, 18)) || 0;
      console.log("💰 [fetchMlmData] Team Growth Laps Raw:", teamLapsRaw.toString(), "Formatted:", teamGrowthLaps);

      // InOut Buy Potential = userInfo.lastStake - bonusInfo.inOutBuy (Reference line 1509)
      const lastStakeRaw = userInfo?.lastStake || 0;
      const inOutBuyRaw = bonusInfo?.inOutBuy || 0;
      const lastStakeFormatted = formatValue(lastStakeRaw);
      const inOutBuyFormatted = formatValue(inOutBuyRaw);
      const inOutBuy = lastStakeFormatted - inOutBuyFormatted;
      console.log("💰 [fetchMlmData] Last Stake Raw:", lastStakeRaw.toString(), "Formatted:", lastStakeFormatted);
      console.log("💰 [fetchMlmData] InOut Buy Raw:", inOutBuyRaw.toString(), "Formatted:", inOutBuyFormatted);
      console.log("💰 [fetchMlmData] InOut Buy Potential (lastStake - inOutBuy):", inOutBuy);

      // Growth Fuels = userPotantial.teamGrowth / base (Reference line 1504)
      const teamGrowthRaw = unStakePotential?.teamGrowth || 0;
      const growthFuels = parseFloat(formatUnits(teamGrowthRaw, 18)) || 0;
      console.log("💰 [fetchMlmData] Growth Fuels Raw:", teamGrowthRaw.toString());
      console.log("💰 [fetchMlmData] Growth Fuels (teamGrowthRaw / 1e18):", growthFuels);
      console.log("💰 [fetchMlmData] Reference calculation: (", teamGrowthRaw.toString(), "/ 1e18) =", growthFuels);

      // Debug: Show contract response for verification
      console.log("🔍 [fetchMlmData] Full unStakePotential response:", {
        teamGrowth: teamGrowthRaw.toString(),
        teamLaps: (unStakePotential?.teamLaps || 0).toString(),
        totGain: (unStakePotential?.totGain || 0).toString(),
        orderGrowth: (unStakePotential?.orderGrowth || 0).toString(),
        OrderValue: (unStakePotential?.OrderValue || 0).toString()
      });

      // Calculate Total Fuels (Growth Fuels + Team Growth Laps) - Reference style
      const totalFuels = growthFuels + teamGrowthLaps;
      console.log("💰 [fetchMlmData] Total Fuels (Growth Fuels + Team Growth Laps):", totalFuels);

      // Available Withdrawal = totGain + orderGrowth + teamGrowth + (OrderValue * base) (Reference line 1441)
      const totGainRaw = unStakePotential?.totGain || 0;
      const orderGrowthRaw = unStakePotential?.orderGrowth || 0;
      const totGainFormatted = formatValue(totGainRaw);
      const orderGrowthFormatted = formatValue(orderGrowthRaw);

      // For reference calculation, use 1 as base since values are already in USDT format
      const availableWithdrawal = totGainFormatted + orderGrowthFormatted + growthFuels + orderValueFormatted;
      console.log("💰 [fetchMlmData] Tot Gain Raw:", totGainRaw.toString(), "Formatted:", totGainFormatted);
      console.log("💰 [fetchMlmData] Order Growth Raw:", orderGrowthRaw.toString(), "Formatted:", orderGrowthFormatted);
      console.log("💰 [fetchMlmData] Available Withdrawal (totGain + orderGrowth + teamGrowth + OrderValue):", availableWithdrawal);

      // Final MLM Data Object
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

      console.log("📊 [fetchMlmData] Final MLM Data Object:", safeStringify(finalMlmData));

      // Financial Summary Logging (Reference-based)
      console.log("💰 [fetchMlmData] === FINANCIAL SUMMARY (REFERENCE-BASED) ===");
      console.log("💰 [fetchMlmData] Total In (bonusInfo.totalStake):", totalIn, "USDT");
      console.log("💰 [fetchMlmData] Total Out (bonusInfo.totalUnStake):", totalOut, "USDT");
      console.log("💰 [fetchMlmData] Total Withdrawn (bonusInfo.totalWithdrawn):", totalWithdrawn, "USDT");
      console.log("💰 [fetchMlmData] Active Portfolio (totalStake - OrderValue - totalUnStake):", activePortfolio, "USDT");
      console.log("💰 [fetchMlmData] InOut Buy Potential (lastStake - inOutBuy):", inOutBuy, "USDT");
      console.log("💰 [fetchMlmData] Available Withdrawal (totGain + orderGrowth + teamGrowth + OrderValue*base):", availableWithdrawal, "USDT");
      console.log("💰 [fetchMlmData] Team Growth Wallet (teamGrowthGains):", teamGrowthWallet, "USDT");
      console.log("💰 [fetchMlmData] Growth Fuels (unStakePotential.teamGrowth / 1e18):", growthFuels, "USDT");
      console.log("💰 [fetchMlmData] Team Growth Laps (unStakePotential.teamLaps / 1e18):", teamGrowthLaps, "USDT");
      console.log("💰 [fetchMlmData] Total Fuels (Growth Fuels + Team Growth Laps):", totalFuels, "USDT");
      console.log("💰 [fetchMlmData] === END SUMMARY ===");

      setMlmData(finalMlmData);

      // Set order history and loading state
      console.log("📊 [fetchMlmData] Complete order history array:", safeStringify(orders));
      console.log("📊 [fetchMlmData] Order history summary:");
      console.log(`  📋 Total orders: ${orders.length}`);
      console.log(`  💰 Total amount: ${orders.reduce((sum, order) => sum + (order.amount || 0), 0)}`);
      console.log(`  📈 Active stakes: ${orders.filter(order => order.isStake).length}`);
      console.log(`  📉 Completed orders: ${orders.filter(order => !order.isStake).length}`);

      if (orders.length > 0) {
        console.log("📊 [fetchMlmData] Sample order (first):", safeStringify(orders[0]));
        if (orders.length > 1) {
          console.log("📊 [fetchMlmData] Sample order (last):", safeStringify(orders[orders.length - 1]));
        }
      }

      setOrderHistory(orders);
      setOrderLoading(true);
    } catch (error) {
      console.error('❌ [fetchMlmData] Critical error occurred:', error);
      console.error('❌ [fetchMlmData] Error stack:', error.stack);
      console.error('❌ [fetchMlmData] Error message:', error.message);
      console.error('❌ [fetchMlmData] Error cause:', error.cause);
      setError('Failed to fetch MLM data. Please try again.');
    } finally {
      console.log("🔚 [fetchMlmData] Fetch process completed");
      console.log("🔚 [fetchMlmData] Setting loading states to false");
      setIsLoading(false);
      setOrderLoading(false);
    }
  };



  // Check for referral code in URL and auto-connect wallet on component mount
  useEffect(() => {
    console.log("🔗 [useEffect] Checking for referral code in URL and auto-connecting wallet");

    // Check for referral code in URL
    if (hasReferralInUrl()) {
      const referrerFromUrl = getReferrerFromUrl();
      console.log("🔗 [useEffect] Found referral code in URL:", referrerFromUrl);

      // Validate the referrer address format
      const ethAddressRegex = /^0x[a-fA-F0-9]{40}$/;
      if (ethAddressRegex.test(referrerFromUrl)) {
        setReferralCode(referrerFromUrl);
        setIsFromReferralLink(true);
        console.log("✅ [useEffect] Valid referral code set from URL");

        // Clear the URL parameter to keep URL clean
        clearReferralFromUrl();
      } else {
        console.warn("⚠️ [useEffect] Invalid referral code format in URL:", referrerFromUrl);
      }
    }

    // Auto-connect wallet if not already connected
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

      // Add a small delay to ensure the component is fully mounted
      const timer = setTimeout(autoConnect, 1000);
      return () => clearTimeout(timer);
    }
  }, []); // Run only once on mount

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
    console.log("🔐 [handleRegister] Wallet connected:", wallet.isConnected);
    console.log("🔐 [handleRegister] Wallet account:", wallet.account);
    console.log("🔐 [handleRegister] Referral code:", referralCode);

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

    // Validate referral code format
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
      console.log("🔐 [handleRegister] Loading state set, starting registration process");

      console.log("📡 [handleRegister] Fetching USDT decimals...");
      const decimals = await readContract(config, {
        abi: USDT_ABI,
        address: USDT_ADDRESS,
        functionName: 'decimals',
        chainId: 56,
      });
      console.log("📊 [handleRegister] USDT decimals:", decimals);

      // const approveAmount = parseUnits('1', Number(decimals)); // 1 USDT for registration
      // console.log("💰 [handleRegister] Approve amount (wei):", approveAmount.toString());
      // console.log("💰 [handleRegister] Approve amount (formatted): 1 USDT");

      console.log("📡 [handleRegister] Sending USDT approval transaction...");
      // const approvalTx = await stakingInteractions.approveUSDT(approveAmount, wallet.account);
      // console.log("✅ [handleRegister] USDT approval transaction hash:", approvalTx);

      // console.log("⏳ [handleRegister] Waiting for approval confirmation...");
      // await waitForTransactionReceipt(config, { hash: approvalTx, chainId: 56 });
      // console.log("✅ [handleRegister] USDT approval confirmed");

      const refCode = referralCode;
      console.log("📡 [handleRegister] Proceeding with user registration...");
      console.log("📊 [handleRegister] Using referral code:", refCode);

      const registerTx = await stakingInteractions.regUser(refCode, wallet.account);
      console.log("✅ [handleRegister] Registration transaction hash:", registerTx);

      console.log("🎉 [handleRegister] Registration successful!");
      setSuccess(`Registration successful! Transaction: ${registerTx}`);
      setReferralCode('');

      console.log("⏳ [handleRegister] Scheduling data refresh in 3 seconds...");
      setTimeout(fetchMlmData, 3000);
    } catch (error) {
      console.error('❌ [handleRegister] Registration failed:', error);
      console.error('❌ [handleRegister] Error details:', {
        message: error.message,
        cause: error.cause,
        stack: error.stack
      });

      if (error.cause?.data) {
        console.log("🔍 [handleRegister] Decoding contract error...");
        const decodedError = decodeErrorResult({
          abi: STAKING_ABI,
          data: error.cause.data,
        });
        console.log("📊 [handleRegister] Decoded error:", decodedError);
        setError(`Registration failed: ${decodedError.errorName || 'Unknown error'} - ${decodedError.args?.join(', ') || ''}`);
      } else if (error.message?.includes('User rejected')) {
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
    console.log("🚀 [handleMakestake] Wallet account:", wallet.account);

    try {
      console.log("📡 [handleMakestake] Calling makeStake function...");
      const txHash = await stakingInteractions.makeStake(
        amount, // pass plain USDT (e.g., "100")
        wallet.account
      );

      console.log("✅ [handleMakestake] Stake transaction successful!");
      console.log("✅ [handleMakestake] Transaction hash:", txHash);
      setSuccess(`Staked ${amount} USDT successfully! Tx: ${txHash.slice(0, 10)}...${txHash.slice(-8)}`);

      console.log("⏳ [handleMakestake] Scheduling data refresh...");
      setTimeout(fetchMlmData, 3000);
    } catch (error) {
      console.error("❌ [handleMakestake] Stake failed:", error);
      console.error("❌ [handleMakestake] Error details:", {
        message: error.message,
        cause: error.cause,
        stack: error.stack
      });
      setError(`Stake failed: ${error.message || error}`);
    }
  };

  const handleWithdraw = async () => {
    console.log("💸 [handleWithdraw] Withdrawal process started");
    console.log("💸 [handleWithdraw] Wallet connected:", wallet.isConnected);
    console.log("💸 [handleWithdraw] Wallet account:", wallet.account);

    if (!wallet.isConnected || !wallet.account) {
      console.warn("⚠️ [handleWithdraw] Wallet not connected");
      setError('Please connect your wallet');
      return;
    }

    try {
      setIsLoading(true);
      setError('');
      setSuccess('');
      console.log("� [handleWithdraw] Loading state set, starting withdrawal");

      console.log("💸 [handleWithdraw] Current MLM data for calculation:", safeStringify(mlmData));

      // Calculate total available amount
      const referralEarn = mlmData.referralEarn || 0;
      const levelEarn = mlmData.levelEarn || 0;
      const growthEarn = mlmData.growthEarn || 0;
      const teamGrowthWallet = mlmData.teamGrowthWallet || 0;
      const leaderEarn = mlmData.leaderEarn || 0;
      const developmentEarn = mlmData.developmentEarn || 0;

      console.log("💰 [handleWithdraw] Individual earnings:");
      console.log("  📊 Referral Earn:", referralEarn);
      console.log("  📊 Level Earn:", levelEarn);
      console.log("  📊 Growth Earn:", growthEarn);
      console.log("  📊 Team Growth Wallet:", teamGrowthWallet);
      console.log("  📊 Leader Earn:", leaderEarn);
      console.log("  📊 Development Earn:", developmentEarn);

      const totalAvailable = referralEarn + levelEarn + growthEarn + teamGrowthWallet + leaderEarn + developmentEarn;
      console.log("💰 [handleWithdraw] Total available for withdrawal:", totalAvailable);

      if (totalAvailable <= 0) {
        console.warn("⚠️ [handleWithdraw] No earnings available");
        setError('No earnings available for withdrawal');
        return;
      }

      // Convert to wei format for contract (USDT has 6 decimals)
      const amountInWei = parseUnits(totalAvailable.toString(), 6);
      console.log("💰 [handleWithdraw] Amount in wei:", amountInWei.toString());
      console.log("💰 [handleWithdraw] Amount formatted:", totalAvailable, "USDT");

      console.log("📡 [handleWithdraw] Executing withdrawal transaction...");
      const txHash = await stakingInteractions.makeUnstake(amountInWei, wallet.account);
      console.log("✅ [handleWithdraw] Withdrawal transaction successful!");
      console.log("✅ [handleWithdraw] Transaction hash:", txHash);

      setSuccess(`Withdrawal successful! Amount: ${totalAvailable} USDT. Tx: ${txHash.slice(0, 10)}...${txHash.slice(-8)}`);

      console.log("⏳ [handleWithdraw] Scheduling data refresh in 3 seconds...");
      setTimeout(() => {
        fetchMlmData();
      }, 3000);

    } catch (error) {
      console.error("❌ [handleWithdraw] Withdrawal failed:", error);
      console.error("❌ [handleWithdraw] Error details:", {
        message: error.message,
        cause: error.cause,
        stack: error.stack
      });
      setError(`Withdrawal failed: ${error.message || error}`);
    } finally {
      console.log("🔚 [handleWithdraw] Withdrawal process completed");
      setIsLoading(false);
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

      console.log("🔹 [Buy] Starting buy process for:", buyAmount, "USDT");
      console.log("🔹 [Buy] Current chain ID:", chainId);

      // 1. Verify network
      if (chainId !== 56) {
        setError("Please switch to BSC Mainnet (Chain ID: 56) to stake.");
        console.warn("⚠️ [Buy] Wrong network. Current:", chainId, "Required: 56");
        return;
      }

      // 2. Verify registration status
      const userInfo = await stakingInteractions.getUserInfo(wallet.account);
      console.log("ℹ️ [Buy] User Info:", safeStringify(userInfo));
      if (!userInfo.joined) {
        setError("User is not registered. Please register first.");
        console.warn("⚠️ [Buy] User not registered");
        return;
      }

      // 3. Get USDT decimals
      const decimals = await readContract(config, {
        abi: USDT_ABI,
        address: USDT_ADDRESS,
        functionName: "decimals",
        chainId: 56,
      });
      console.log("ℹ️ [Buy] USDTDecimals:", decimals);

      // 4. Convert buyAmount to wei
      const amountInWei = parseUnits(buyAmount, Number(decimals));
      console.log("ℹ️ [Buy] Amount in Wei:", amountInWei.toString());

      // 5. Verify contract’s USDTaddress
      const contractUSDAddress = await stakingInteractions.getUSDAddress();
      console.log("ℹ️ [Buy] Contract USD Address:", contractUSDAddress);

      // 6. Check USDTbalance
      // (You can add a balance check here if needed)

      // 7. Check and approve USDTallowance
      // const allowance = await readContract(config, {
      //   abi: USDC_ABI,
      //   address: USDC_ADDRESS,
      //   functionName: "allowance",
      //   args: [wallet.account, STAKING_CONTRACT_ADDRESS],
      //   chainId: 97,
      // });
      // console.log("ℹ️ [Buy] Current Allowance:", formatUnits(allowance, Number(decimals)));

      console.log("🔄 [Buy] Sending approval transaction...");
      const approvalTx = await stakingInteractions.approveUSDT(
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
    console.log("💰 [handleSell] Sell button clicked");
    console.log("💰 [handleSell] Sell amount:", sellAmount);
    console.log("💰 [handleSell] Wallet connected:", wallet.isConnected);
    console.log("💰 [handleSell] Wallet account:", wallet.account);

    if (!wallet.isConnected || !wallet.account) {
      console.warn("⚠️ [handleSell] Wallet not connected");
      setError('Wallet not connected. Please connect your wallet.');
      return;
    }

    if (!sellAmount || parseFloat(sellAmount) <= 0) {
      console.warn("⚠️ [handleSell] Invalid sell amount:", sellAmount);
      setError('Please enter a valid amount to sell');
      return;
    }

    try {
      setOrderLoading(true);
      setError('');
      setSuccess('');
      console.log("💰 [handleSell] Loading state set, starting sell process");

      console.log("📡 [handleSell] Fetching USDT decimals...");
      const decimals = await readContract(config, {
        abi: USDT_ABI,
        address: USDT_ADDRESS,
        functionName: 'decimals',
        chainId: 56,
      });
      console.log("📊 [handleSell] USDT decimals:", decimals);

      console.log("🧮 [handleSell] Converting sell amount to wei...");
      const amountInWei = parseUnits(sellAmount, Number(decimals));
      console.log("📊 [handleSell] Amount in wei:", amountInWei.toString());
      console.log("📊 [handleSell] Amount formatted:", sellAmount, "USDT");

      console.log("📡 [handleSell] Executing unstake transaction...");
      const txHash = await stakingInteractions.makeUnstake(amountInWei, wallet.account);
      console.log("✅ [handleSell] Unstake transaction successful!");
      console.log("✅ [handleSell] Transaction hash:", txHash);

      setSuccess(`Successfully sold ${sellAmount} USDT worth of tokens! Tx: ${txHash.slice(0, 10)}...${txHash.slice(-8)}`);
      setSellAmount('');

      console.log("⏳ [handleSell] Scheduling data refresh in 3 seconds...");
      setTimeout(fetchMlmData, 3000);
    } catch (error) {
      console.error('❌ [handleSell] Sell process failed:', error);
      console.error('❌ [handleSell] Error details:', {
        message: error.message,
        cause: error.cause,
        stack: error.stack
      });

      if (error.cause?.data) {
        console.log("🔍 [handleSell] Decoding contract error...");
        const decodedError = decodeErrorResult({
          abi: STAKING_ABI,
          data: error.cause.data,
        });
        console.log("📊 [handleSell] Decoded error:", safeStringify(decodedError));
        setError(`Unstake failed: ${decodedError.errorName || 'Unknown error'} - ${decodedError.args?.join(', ') || ''}`);
      } else if (error.message?.includes('User rejected')) {
        console.log("⚠️ [handleSell] User rejected transaction");
        setError('Transaction was cancelled by user');
      } else if (error.message?.includes('insufficient')) {
        console.log("⚠️ [handleSell] Insufficient balance");
        setError('Insufficient token balance for this transaction');
      } else if (error.message?.includes('gas')) {
        console.log("⚠️ [handleSell] Gas estimation failed");
        setError('Gas estimation failed. Please try a smaller amount.');
      } else {
        console.log("❌ [handleSell] Unknown error");
        setError(`Failed to sell tokens: ${error.message || 'Unknown error'}`);
      }
    } finally {
      console.log("🔚 [handleSell] Sell process completed");
      setOrderLoading(false);
    }
  };

  // Buy Token Function
  const handleBuyToken = async () => {
    console.log("🪙 [handleBuyToken] === BUY TOKEN FUNCTION STARTED ===");
    console.log("🪙 [handleBuyToken] Buy token button clicked");
    console.log("🪙 [handleBuyToken] Buy token amount:", buyTokenAmount);
    console.log("🪙 [handleBuyToken] Wallet connected:", wallet.isConnected);
    console.log("🪙 [handleBuyToken] Wallet account:", wallet.account);
    console.log("🪙 [handleBuyToken] Current chain ID:", chainId);
    console.log("🪙 [handleBuyToken] stakingInteractions available:", !!stakingInteractions);
    console.log("🪙 [handleBuyToken] stakingInteractions.buyToken available:", !!stakingInteractions.buyToken);

    if (!wallet.isConnected || !wallet.account) {
      console.warn("⚠️ [handleBuyToken] Wallet not connected");
      setError('Wallet not connected. Please connect your wallet.');
      return;
    }

    if (!buyTokenAmount || parseFloat(buyTokenAmount) <= 0) {
      console.warn("⚠️ [handleBuyToken] Invalid buy token amount:", buyTokenAmount);
      setError('Please enter a valid amount to buy tokens');
      return;
    }

    // Check network before starting
    if (chainId !== 56) {
      setError("Please switch to BSC Mainnet (Chain ID: 56) to buy tokens.");
      console.warn("⚠️ [handleBuyToken] Wrong network. Current:", chainId, "Required: 56");
      return;
    }

    try {
      setOrderLoading(true);
      setError('');
      setSuccess('');
      console.log("🪙 [handleBuyToken] Loading state set, starting buy token process");

      // 2. Get USDT decimals
      console.log("📡 [handleBuyToken] Fetching USDT decimals...");
      const decimals = await readContract(config, {
        abi: USDT_ABI,
        address: USDT_ADDRESS,
        functionName: 'decimals',
        chainId: 56,
      });
      console.log("📊 [handleBuyToken] USDT decimals:", decimals);

      // 3. Convert amount to wei
      console.log("🧮 [handleBuyToken] Converting buy token amount to wei...");
      const amountInWei = parseUnits(buyTokenAmount, Number(decimals));
      console.log("📊 [handleBuyToken] Amount in wei:", amountInWei.toString());
      console.log("📊 [handleBuyToken] Amount formatted:", buyTokenAmount, "USDT");

      // 4. Check and approve USDT if needed
      console.log("📡 [handleBuyToken] Checking USDT allowance...");
      const allowance = await readContract(config, {
        abi: USDT_ABI,
        address: USDT_ADDRESS,
        functionName: 'allowance',
        args: [wallet.account, STAKING_CONTRACT_ADDRESS],
        chainId: 56,
      });

      console.log("📊 [handleBuyToken] Current allowance:", formatUnits(allowance, Number(decimals)));

      if (allowance < amountInWei) {
        console.log("🔄 [handleBuyToken] Insufficient allowance, requesting approval...");
        const approvalTx = await stakingInteractions.approveUSDT(amountInWei, wallet.account);
        console.log("✅ [handleBuyToken] Approval transaction:", approvalTx);

        console.log("⏳ [handleBuyToken] Waiting for approval confirmation...");
        await waitForTransactionReceipt(config, { hash: approvalTx, chainId: 56 });
        console.log("✅ [handleBuyToken] Approval confirmed");
      }

      // 5. Execute buyToken transaction
      console.log("📡 [handleBuyToken] Executing buyToken transaction...");
      console.log("📡 [handleBuyToken] Calling stakingInteractions.buyToken with:", {
        amount: amountInWei.toString(),
        account: wallet.account
      });

      const txHash = await stakingInteractions.buyToken(amountInWei, wallet.account);
      console.log("✅ [handleBuyToken] BuyToken transaction successful!");
      console.log("✅ [handleBuyToken] Transaction hash:", txHash);

      setSuccess(`Successfully bought tokens with ${buyTokenAmount} USDT! Tx: ${txHash.slice(0, 10)}...${txHash.slice(-8)}`);
      setBuyTokenAmount('');

      console.log("⏳ [handleBuyToken] Scheduling data refresh in 3 seconds...");
      setTimeout(fetchMlmData, 3000);
    } catch (error) {
      console.error('❌ [handleBuyToken] Buy token process failed:', error);
      console.error('❌ [handleBuyToken] Error details:', {
        message: error.message,
        cause: error.cause,
        stack: error.stack,
        name: error.name
      });

      // Check for specific error types
      if (error.message?.includes('User rejected') || error.message?.includes('user rejected')) {
        console.log("⚠️ [handleBuyToken] User rejected transaction");
        setError('Transaction was cancelled by user');
      } else if (error.message?.includes('insufficient') || error.message?.includes('Insufficient')) {
        console.log("⚠️ [handleBuyToken] Insufficient balance");
        setError('Insufficient USDT balance for this transaction');
      } else if (error.message?.includes('network') || error.message?.includes('chain')) {
        console.log("⚠️ [handleBuyToken] Network error");
        setError('Network error. Please check your connection and try again.');
      } else if (error.cause?.data) {
        console.log("🔍 [handleBuyToken] Decoding contract error...");
        try {
          const decodedError = decodeErrorResult({
            abi: STAKING_ABI,
            data: error.cause.data,
          });
          console.log("📊 [handleBuyToken] Decoded error:", safeStringify(decodedError));
          setError(`Buy token failed: ${decodedError.errorName || 'Contract error'} - ${decodedError.args?.join(', ') || ''}`);
        } catch (decodeErr) {
          console.log("❌ [handleBuyToken] Failed to decode error");
          setError(`Buy token failed: ${error.message || 'Unknown contract error'}`);
        }
      } else {
        console.log("❌ [handleBuyToken] Generic error occurred");
        setError(`Failed to buy tokens: ${error.message || 'Unknown error occurred'}`);
      }
    } finally {
      console.log("🔚 [handleBuyToken] Buy token process completed");
      setOrderLoading(false);
    }
  };



  if (!wallet.isConnected) {
    return (
      <Container maxWidth="xl" sx={{ py: { xs: 2, sm: 3 } }}>
        <Card sx={{ p: { xs: 2, sm: 3 }, boxShadow: 3, textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
            Welcome to SafeMint
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Connect your wallet to access the dashboard and start earning.
          </Typography>
          {isFromReferralLink && referralCode && (
            <Alert severity="info" sx={{ mb: 3 }}>
              <Typography variant="body2">
                🎉 You were invited! Referral code: {referralCode.slice(0, 6)}...{referralCode.slice(-4)}
              </Typography>
            </Alert>
          )}
          <Button
            variant="contained"
            size="large"
            onClick={wallet.connectWallet}
            disabled={wallet.loading}
            sx={{ minWidth: 200 }}
          >
            {wallet.loading ? <CircularProgress size={24} color="inherit" /> : 'Connect Wallet'}
          </Button>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
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
        sx={{ py: { xs: 2, sm: 3 }, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '400px' }}
      >
        <CircularProgress />
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
        <Box sx={{ display: 'flex', gap: 1, flexDirection: { xs: 'column', sm: 'row' } }}>
          <Button
            variant="outlined"
            startIcon={<RefreshIcon />}
            onClick={fetchMlmData}
            disabled={isLoading || orderLoading}
            sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
          >
            Refresh
          </Button>

        </Box>
      </Box>

      {/* Performance Overview - Top Section */}
      <Card sx={{ p: { xs: 2, sm: 3 }, boxShadow: 3, mb: 3 }}>
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
                  <StatCard
                    icon={card.icon}
                    title={card.title}
                    value={card.value}
                    subtitle={card.subtitle}
                    color={card.color}
                  />
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
                {
                  icon: <BatteryChargingFullIcon />,
                  title: 'Total Fuels',
                  value: formatCurrency(mlmData.totalFuels),
                  subtitle: 'Combined Fuel Resources',
                  color: 'primary.main',
                },
              ].map((card, index) => (
                <Grid item xs={12} sm={6} md={4} key={`financial-${index}`}>
                  <StatCard
                    icon={card.icon}
                    title={card.title}
                    value={card.value}
                    subtitle={card.subtitle}
                    color={card.color}
                  />
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
                  <StatCard
                    icon={card.icon}
                    title={card.title}
                    value={card.value}
                    subtitle={card.subtitle}
                    color={card.color}
                  />
                </Grid>
              ))}
            </Grid>
      </Card>

      {/* Cards Grid Layout */}
      <Grid container spacing={3}>

        {/* Trading & Referrals Card */}
        <Grid item xs={12} md={6}>
          <Card sx={{ p: { xs: 2, sm: 3 }, boxShadow: 3, height: 'fit-content' }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ color: 'primary.main', fontWeight: 'bold', mb: 3, fontSize: { xs: '1.25rem', sm: '1.5rem' } }}
            >
              Trading & Referrals
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
        </Grid>

        {/* Your Referral Code Card */}
        <Grid item xs={12} md={6}>
          <Card sx={{ p: { xs: 2, sm: 3 }, boxShadow: 3, height: 'fit-content' }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ color: 'primary.main', fontWeight: 'bold', mb: 3, fontSize: { xs: '1.25rem', sm: '1.5rem' } }}
            >
              Your Referral Code
            </Typography>

            <ReferralSection
              account={wallet.account}
              onCopy={() => setSuccess('Referral code copied to clipboard!')}
              onShare={() => setSuccess('Referral shared successfully!')}
            />
          </Card>
        </Grid>

        {/* Withdrawal Information Card */}
        <Grid item xs={12} md={6}>
          <Card sx={{ p: { xs: 2, sm: 3 }, boxShadow: 3, height: 'fit-content' }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontWeight: 'bold', mb: 3, textAlign: 'center', color: 'primary.main' }}
            >
              Withdrawal Information
            </Typography>

            <Box sx={{ mb: 3 }}>
              <Box sx={{
                backgroundColor: '#f8f9fa',
                p: 1.5,
                display: 'flex',
                justifyContent: 'space-between',
                borderRadius: '8px 8px 0 0',
                borderBottom: '2px solid #e9ecef'
              }}>
                <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                  Earning Type
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                  Available Amount
                </Typography>
              </Box>

              <Box sx={{ border: '1px solid #e9ecef', borderTop: 'none', borderRadius: '0 0 8px 8px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 1.5, borderBottom: '1px solid #f1f3f4' }}>
                  <Typography variant="body2" sx={{ color: 'text.primary' }}>Referral Earnings</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'success.main' }}>
                    + ${formatNumber(mlmData.referralEarn)}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 1.5, borderBottom: '1px solid #f1f3f4' }}>
                  <Typography variant="body2" sx={{ color: 'text.primary' }}>Level Earnings</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'success.main' }}>
                    + ${formatNumber(mlmData.levelEarn)}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 1.5, borderBottom: '1px solid #f1f3f4' }}>
                  <Typography variant="body2" sx={{ color: 'text.primary' }}>Growth Earnings</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'success.main' }}>
                    + ${formatNumber(mlmData.growthEarn)}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 1.5, borderBottom: '1px solid #f1f3f4' }}>
                  <Typography variant="body2" sx={{ color: 'text.primary' }}>Team Growth Gains</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'success.main' }}>
                    + ${formatNumber(mlmData.teamGrowthWallet)}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 1.5, borderBottom: '1px solid #f1f3f4' }}>
                  <Typography variant="body2" sx={{ color: 'text.primary' }}>Leader Earnings</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'success.main' }}>
                    + ${formatNumber(mlmData.leaderEarn)}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 1.5 }}>
                  <Typography variant="body2" sx={{ color: 'text.primary' }}>Development Earnings</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'success.main' }}>
                    + ${formatNumber(mlmData.developmentEarn)}
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box sx={{
              backgroundColor: '#f8f9fa',
              p: 2,
              borderRadius: 2,
              mb: 3,
              textAlign: 'center',
              border: '2px solid #e9ecef'
            }}>
              <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'primary.main', mb: 1 }}>
                ${formatNumber(
                  mlmData.referralEarn +
                  mlmData.levelEarn +
                  mlmData.growthEarn +
                  mlmData.teamGrowthWallet +
                  mlmData.leaderEarn +
                  mlmData.developmentEarn
                )}
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', fontWeight: 'medium' }}>
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
                  borderRadius: '25px',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  '&:hover': { backgroundColor: '#45a049' },
                  '&:disabled': { backgroundColor: '#cccccc' }
                }}
                disabled={orderLoading || (mlmData.referralEarn + mlmData.levelEarn + mlmData.growthEarn + mlmData.teamGrowthWallet + mlmData.leaderEarn + mlmData.developmentEarn) <= 0}
                onClick={handleWithdraw}
              >
                {orderLoading ? <CircularProgress size={24} color="inherit" /> : 'Withdraw Earnings'}
              </Button>
            </Box>
          </Card>
        </Grid>

        {/* Order History Card */}
        <Grid item xs={12} md={6}>
          <Card sx={{ p: { xs: 2, sm: 3 }, boxShadow: 3, height: 'fit-content' }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ color: 'primary.main', fontWeight: 'bold', mb: 3, fontSize: { xs: '1.25rem', sm: '1.5rem' } }}
            >
              Order History
            </Typography>

            <OrderHistoryTable
              orderHistory={orderHistory}
              orderLoading={orderLoading}
              formatDate={formatDate}
            />
          </Card>
        </Grid>

      </Grid>
    </Container>
  );
};

export default MLMDashboard;

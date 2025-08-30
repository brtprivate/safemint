import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  Button,
  TextField,
  Chip,
  Stack,
  useTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Alert,
  CircularProgress,
  Tabs,
  Tab,
  InputAdornment
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useWallet } from '../context/WalletContext';
import { contractInteractions } from '../services/mlmcontract';
import { stakingInteractions } from '../services/selfmintStakingService';
import { formatEther } from 'viem';

// Icons
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleIcon from '@mui/icons-material/People';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';

const Home = () => {
  const wallet = useWallet();
  const navigate = useNavigate();
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState(0);

  // State for data
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [registrationDialog, setRegistrationDialog] = useState(false);
  const [referralAddress, setReferralAddress] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Token balances and contract data
  const [balances, setBalances] = useState({
    usdt: 0,
    selfmint: 0,
    rate: 0,
    isBuyEnabled: false,
    reserves: { reserve0: 0, reserve1: 0, blockTimestampLast: 0 },
    isWhitelisted: false
  });

  // Staking data
  const [stakingData, setStakingData] = useState({
    userInfo: null,
    bonusInfo: null,
    rankQualify: null,
    matureOrder: null,
    unStakePotential: null,
    directReferrals: [],
    leaderInfo: null,
    userStakeView: null,
    totalRemainTPR: null,
    activeStatus: false,
    priceInfo: null
  });

  // Input states
  const [usdtAmount, setUsdtAmount] = useState('');
  const [selfmintAmount, setSelfmintAmount] = useState('');
  const [stakeAmount, setStakeAmount] = useState('');
  const [unstakeAmount, setUnstakeAmount] = useState('');

  // Check if user is registered and fetch data from contracts
  useEffect(() => {
    const fetchData = async () => {
      if (wallet.isConnected && wallet.account) {
        try {
          setIsLoading(true);
          
          // Check if user is registered in staking contract
          try {
            const userInfo = await stakingInteractions.getUserInfo(wallet.account);
            setIsRegistered(userInfo.joined);
            
            // Fetch MLM data if registered
            if (userInfo.joined) {
              const bonusInfo = await stakingInteractions.getBonusInfo(wallet.account);
              const rankQualify = await stakingInteractions.getRankQualify(wallet.account);
              const directReferrals = await stakingInteractions.getDirectUser(wallet.account);
              const matureOrder = await stakingInteractions.getMatureOrder(wallet.account);
              const unStakePotential = await stakingInteractions.getUnStakePotential(wallet.account);
              const leaderInfo = await stakingInteractions.findLeaderUser(wallet.account);
              
              // Fetch additional contract data
              const activeStatus = await stakingInteractions.activeUser(wallet.account);
              const priceInfo = await stakingInteractions.getPrice(BigInt(1e18)); // Price for 1 token
              
              // Fetch user stake view (first stake)
              let userStakeView = null;
              try {
                userStakeView = await stakingInteractions.userStakeView(wallet.account, BigInt(0));
              } catch (error) {
                console.log('No stake data available yet');
              }
              
              // Fetch total remaining TPR
              let totalRemainTPR = null;
              try {
                totalRemainTPR = await stakingInteractions.getTotalRemainTPR(wallet.account, true);
              } catch (error) {
                console.log('Error fetching TPR data:', error);
              }
              
              setStakingData({
                userInfo,
                bonusInfo,
                rankQualify,
                matureOrder,
                unStakePotential,
                directReferrals,
                leaderInfo,
                userStakeView,
                totalRemainTPR,
                activeStatus,
                priceInfo
              });
            }
          } catch (error) {
            console.error('Error fetching staking data:', error);
            setIsRegistered(false);
          }

          // Fetch token balances and contract data
          const usdtBalance = await contractInteractions.getUSDTBalance(wallet.account);
          const selfMintBalance = await contractInteractions.getBalance(wallet.account);
          const rate = await contractInteractions.getRateInUSDT();
          const isBuyEnabled = await contractInteractions.isBuyEnabled();
          const reserves = await contractInteractions.getReserves();
          const isWhitelisted = await contractInteractions.isWhitelisted(wallet.account);
          
          setBalances({
            usdt: parseFloat(formatEther(usdtBalance)),
            selfmint: parseFloat(formatEther(selfMintBalance)),
            rate: parseFloat(formatEther(rate)),
            isBuyEnabled,
            reserves: {
              reserve0: parseFloat(formatEther(reserves.reserve0)),
              reserve1: parseFloat(formatEther(reserves.reserve1)),
              blockTimestampLast: Number(reserves.blockTimestampLast)
            },
            isWhitelisted
          });

        } catch (error) {
          console.error('Error fetching contract data:', error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchData();
  }, [wallet.isConnected, wallet.account]);

  // Handle user registration
  const handleRegister = async () => {
    if (!wallet.isConnected || !wallet.account) {
      setError('Wallet not connected');
      return;
    }

    if (!referralAddress) {
      setError('Please enter a referral address');
      return;
    }

    try {
      setIsLoading(true);
      setError('');
      
      // First approve USDT for staking contract
      const approveAmount = BigInt(1e18); // 1 USDT for registration
      const approveTx = await stakingInteractions.approveUSDT(approveAmount, wallet.account);
      console.log('USDT Approval TX:', approveTx);

      // Register user with referral
      const registerTx = await stakingInteractions.regUser(referralAddress);
      console.log('Registration TX:', registerTx);
      
      setSuccess('Registration successful! Please wait for confirmation...');
      setRegistrationDialog(false);
      
      // Refresh registration status after a delay
      setTimeout(async () => {
        try {
          const userInfo = await stakingInteractions.getUserInfo(wallet.account);
          setIsRegistered(userInfo.joined);
        } catch (error) {
          console.error('Error checking registration status:', error);
        }
      }, 5000);

    } catch (error) {
      console.error('Registration error:', error);
      setError(error.message || 'Registration failed');
    } finally {
      setIsLoading(false);
    }
  };

  // Handle token operations
  const handleBuyTokens = async () => {
    if (!wallet.isConnected || !wallet.account) {
      setError('Wallet not connected');
      return;
    }

    const amount = parseFloat(usdtAmount);
    if (isNaN(amount) || amount <= 0) {
      setError('Invalid USDT amount');
      return;
    }

    try {
      setIsLoading(true);
      setError('');
      
      // Convert to wei
      const amountWei = BigInt(Math.floor(amount * 1e18));
      
      // First approve USDT spending
      const approveTx = await contractInteractions.approveUSDT(amountWei, wallet.account);
      console.log('USDT Approval TX:', approveTx);

      // Then buy tokens
      const buyTx = await contractInteractions.buySelfMint(amountWei, wallet.account);
      console.log('Buy TX:', buyTx);
      
      setSuccess('Buy transaction submitted!');
      setUsdtAmount('');

    } catch (error) {
      console.error('Buy error:', error);
      setError(error.message || 'Buy failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSellTokens = async () => {
    if (!wallet.isConnected || !wallet.account) {
      setError('Wallet not connected');
      return;
    }

    const amount = parseFloat(selfmintAmount);
    if (isNaN(amount) || amount <= 0) {
      setError('Invalid SELFMINT amount');
      return;
    }

    try {
      setIsLoading(true);
      setError('');
      
      // Convert to wei
      const amountWei = BigInt(Math.floor(amount * 1e18));
      
      // Sell tokens
      const sellTx = await contractInteractions.sellSelfMint(amountWei, wallet.account);
      console.log('Sell TX:', sellTx);
      
      setSuccess('Sell transaction submitted!');
      setSelfmintAmount('');

    } catch (error) {
      console.error('Sell error:', error);
      setError(error.message || 'Sell failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleStake = async () => {
    if (!wallet.isConnected || !wallet.account) {
      setError('Wallet not connected');
      return;
    }

    const amount = parseFloat(stakeAmount);
    if (isNaN(amount) || amount <= 0) {
      setError('Invalid stake amount');
      return;
    }

    try {
      setIsLoading(true);
      setError('');
      
      // Convert to wei
      const amountWei = BigInt(Math.floor(amount * 1e18));
      
      // Stake tokens
      const stakeTx = await stakingInteractions.makeStake(amountWei, wallet.account);
      console.log('Stake TX:', stakeTx);
      
      setSuccess('Stake transaction submitted!');
      setStakeAmount('');

    } catch (error) {
      console.error('Stake error:', error);
      setError(error.message || 'Stake failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleUnstake = async () => {
    if (!wallet.isConnected || !wallet.account) {
      setError('Wallet not connected');
      return;
    }

    const amount = parseFloat(unstakeAmount);
    if (isNaN(amount) || amount <= 0) {
      setError('Invalid unstake amount');
      return;
    }

    try {
      setIsLoading(true);
      setError('');
      
      // Convert to wei
      const amountWei = BigInt(Math.floor(amount * 1e18));
      
      // Unstake tokens
      const unstakeTx = await stakingInteractions.makeUnstake(amountWei, wallet.account);
      console.log('Unstake TX:', unstakeTx);
      
      setSuccess('Unstake transaction submitted!');
      setUnstakeAmount('');

    } catch (error) {
      console.error('Unstake error:', error);
      setError(error.message || 'Unstake failed');
    } finally {
      setIsLoading(false);
    }
  };

  // Handle user self-update
  const handleUserSelfUpdate = async () => {
    if (!wallet.isConnected || !wallet.account) {
      setError('Wallet not connected');
      return;
    }

    try {
      setIsLoading(true);
      setError('');
      
      const updateTx = await stakingInteractions.userSelfUpdate(wallet.account);
      console.log('User Self Update TX:', updateTx);
      
      setSuccess('User self-update transaction submitted!');

    } catch (error) {
      console.error('User self-update error:', error);
      setError(error.message || 'User self-update failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      {/* Connection and Registration Status */}
      {wallet.isConnected && (
        <Box sx={{ mb: 3 }}>
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
          {!isRegistered && (
            <Alert 
              severity="warning" 
              sx={{ mb: 2 }}
              action={
                <Button 
                  color="inherit" 
                  size="small" 
                  onClick={() => setRegistrationDialog(true)}
                  startIcon={<PersonAddIcon />}
                >
                  Register Now
                </Button>
              }
            >
              You need to register to access MLM features
            </Alert>
          )}
          {isRegistered && (
            <Alert 
              severity="success" 
              sx={{ mb: 2 }}
              action={
                <Button 
                  color="inherit" 
                  size="small" 
                  startIcon={<HowToRegIcon />}
                  disabled
                >
                  Registered
                </Button>
              }
            >
              You are successfully registered 
            </Alert>
          )}
        </Box>
      )}

      {/* Navigation Links */}
      <Box sx={{ mb: 4 }}>
        <Stack direction="row" spacing={2} flexWrap="wrap">
          <Button
            variant="outlined"
            startIcon={<AccountBalanceWalletIcon />}
            onClick={() => handleNavigation('/deposit')}
          >
            Deposit
          </Button>
          <Button
            variant="outlined"
            startIcon={<SwapHorizIcon />}
            onClick={() => handleNavigation('/swap')}
          >
            Swap
          </Button>
          {!isRegistered && wallet.isConnected && (
            <Button
              variant="contained"
              color="primary"
              startIcon={<PersonAddIcon />}
              onClick={() => setRegistrationDialog(true)}
            >
              Register in MLM
            </Button>
          )}
        </Stack>
      </Box>

      {/* Tabs for different sections */}
      <Paper sx={{ mb: 3 }}>
        <Tabs value={activeTab} onChange={handleTabChange} centered>
          <Tab label="Overview" />
          <Tab label="Token Operations" />
          <Tab label="MLM Dashboard" />
          <Tab label="Contract Info" />
        </Tabs>
      </Paper>

      {/* Overview Tab */}
      {activeTab === 0 && (
        <Grid container spacing={3}>
          {/* Token Balances */}
          <Grid item xs={12} md={6} lg={3}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ color: theme.palette.primary.main }}>
                Token Balances
              </Typography>
              <Stack spacing={2}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography>USDT Balance</Typography>
                  <Chip 
                    label={`${balances.usdt.toFixed(6)} USDT`} 
                    color="primary" 
                    variant="outlined"
                  />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography>SELFMINT Balance</Typography>
                  <Chip 
                    label={`${balances.selfmint.toFixed(6)} SELFMINT`} 
                    color="secondary" 
                    variant="outlined"
                  />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography>Current Rate</Typography>
                  <Chip 
                    label={`$${balances.rate.toFixed(6)} per SELFMINT`} 
                    color="info" 
                    variant="outlined"
                  />
                </Box>
              </Stack>
            </Paper>
          </Grid>

          {/* Registration Status */}
          <Grid item xs={12} md={6} lg={3}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ color: theme.palette.primary.main }}>
                MLM Status
              </Typography>
              <Stack spacing={2}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography>Registration Status</Typography>
                  <Chip 
                    label={isRegistered ? 'Registered' : 'Not Registered'} 
                    color={isRegistered ? 'success' : 'warning'} 
                  />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography>Wallet Connected</Typography>
                  <Chip 
                    label={wallet.isConnected ? 'Connected' : 'Disconnected'} 
                    color={wallet.isConnected ? 'success' : 'error'} 
                  />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography>Buy Status</Typography>
                  <Chip 
                    label={balances.isBuyEnabled ? 'Enabled' : 'Disabled'} 
                    color={balances.isBuyEnabled ? 'success' : 'error'} 
                  />
                </Box>
              </Stack>
            </Paper>
          </Grid>

          {/* Contract Reserves */}
          <Grid item xs={12} md={6} lg={3}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ color: theme.palette.primary.main }}>
                Contract Reserves
              </Typography>
              <Stack spacing={2}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography>Reserve 0</Typography>
                  <Chip 
                    label={`${balances.reserves.reserve0.toFixed(2)}`} 
                    color="info" 
                    variant="outlined"
                  />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography>Reserve 1</Typography>
                  <Chip 
                    label={`${balances.reserves.reserve1.toFixed(2)}`} 
                    color="info" 
                    variant="outlined"
                  />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography>Last Update</Typography>
                  <Chip 
                    label={new Date(balances.reserves.blockTimestampLast * 1000).toLocaleDateString()} 
                    color="default" 
                    variant="outlined"
                  />
                </Box>
              </Stack>
            </Paper>
          </Grid>

          {/* Quick Actions */}
          <Grid item xs={12} md={6} lg={3}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ color: theme.palette.primary.main }}>
                Quick Actions
              </Typography>
              <Stack spacing={2}>
                {!isRegistered && wallet.isConnected && (
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<PersonAddIcon />}
                    onClick={() => setRegistrationDialog(true)}
                    fullWidth
                  >
                    Register in MLM
                  </Button>
                )}
                <Button
                    variant="outlined"
                    startIcon={<SwapHorizIcon />}
                    onClick={() => setActiveTab(1)}
                    fullWidth
                  >
                    Buy/Sell Tokens
                  </Button>
                {isRegistered && (
                  <Button
                    variant="outlined"
                    startIcon={<TrendingUpIcon />}
                    onClick={() => setActiveTab(2)}
                    fullWidth
                  >
                    MLM Dashboard
                  </Button>
                )}
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      )}

      {/* Token Operations Tab */}
      {activeTab === 1 && (
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ color: theme.palette.primary.main }}>
                Buy SELFMINT Tokens
              </Typography>
              <Box sx={{ mb: 3 }}>
                <TextField
                  fullWidth
                  label="USDT Amount"
                  value={usdtAmount}
                  onChange={(e) => setUsdtAmount(e.target.value)}
                  type="number"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Button 
                          onClick={handleBuyTokens}
                          disabled={isLoading || !usdtAmount}
                          variant="contained"
                        >
                          {isLoading ? <CircularProgress size={20} /> : 'Buy'}
                        </Button>
                      </InputAdornment>
                    )
                  }}
                />
                <Typography variant="caption" color="text.secondary">
                  Current balance: {balances.usdt.toFixed(6)} USDT
                </Typography>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ color: theme.palette.primary.main }}>
                Sell SELFMINT Tokens
              </Typography>
              <Box sx={{ mb: 3 }}>
                <TextField
                  fullWidth
                  label="SELFMINT Amount"
                  value={selfmintAmount}
                  onChange={(e) => setSelfmintAmount(e.target.value)}
                  type="number"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Button 
                          onClick={handleSellTokens}
                          disabled={isLoading || !selfmintAmount}
                          variant="contained"
                          color="secondary"
                        >
                          {isLoading ? <CircularProgress size={20} /> : 'Sell'}
                        </Button>
                      </InputAdornment>
                    )
                  }}
                />
                <Typography variant="caption" color="text.secondary">
                  Current balance: {balances.selfmint.toFixed(6)} SELFMINT
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      )}

      {/* MLM Dashboard Tab */}
      {activeTab === 2 && isRegistered && stakingData.bonusInfo && (
        <Grid container spacing={3}>
          {/* Earnings Overview */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ color: theme.palette.primary.main }}>
                Earnings Overview
              </Typography>
              <Stack spacing={2}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography>Referral Gains</Typography>
                  <Chip 
                    label={`$${parseFloat(formatEther(stakingData.bonusInfo.referralGains)).toFixed(2)}`} 
                    color="success" 
                  />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography>Level Gains</Typography>
                  <Chip 
                    label={`$${parseFloat(formatEther(stakingData.bonusInfo.levelGains)).toFixed(2)}`} 
                    color="success" 
                  />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography>Growth Gains</Typography>
                  <Chip 
                    label={`$${parseFloat(formatEther(stakingData.bonusInfo.growthGains)).toFixed(2)}`} 
                    color="success" 
                  />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography>Total Stake</Typography>
                  <Chip 
                    label={`$${parseFloat(formatEther(stakingData.bonusInfo.totalStake)).toFixed(2)}`} 
                    color="info" 
                  />
                </Box>
              </Stack>
            </Paper>
          </Grid>

          {/* Team Statistics */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ color: theme.palette.primary.main }}>
                Team Statistics
              </Typography>
              <Stack spacing={2}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography>Direct Referrals</Typography>
                  <Chip 
                    label={stakingData.directReferrals.length} 
                    color="primary" 
                  />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography>Total Team</Typography>
                  <Chip 
                    label={Number(stakingData.rankQualify?.totalTeam || 0)} 
                    color="secondary" 
                  />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography>Level</Typography>
                  <Chip 
                    label={Number(stakingData.rankQualify?.level || 0)} 
                    color="info" 
                  />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography>Strong Team</Typography>
                  <Chip 
                    label={Number(stakingData.rankQualify?.strongTeam || 0)} 
                    color="warning" 
                  />
                </Box>
              </Stack>
            </Paper>
          </Grid>

          {/* Additional Contract Data */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ color: theme.palette.primary.main }}>
                Additional Data
              </Typography>
              <Stack spacing={2}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography>Active Status</Typography>
                  <Chip 
                    label={stakingData.activeStatus ? 'Active' : 'Inactive'} 
                    color={stakingData.activeStatus ? 'success' : 'error'} 
                  />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography>Price Info</Typography>
                  <Chip 
                    label={stakingData.priceInfo ? `$${parseFloat(formatEther(stakingData.priceInfo)).toFixed(6)}` : 'N/A'} 
                    color="info" 
                  />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography>Total Remain TPR</Typography>
                  <Chip 
                    label={stakingData.totalRemainTPR ? parseFloat(formatEther(stakingData.totalRemainTPR)).toFixed(2) : 'N/A'} 
                    color="warning" 
                  />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography>User Self Update</Typography>
                  <Button 
                    variant="outlined" 
                    size="small"
                    onClick={handleUserSelfUpdate}
                    disabled={isLoading}
                  >
                    {isLoading ? <CircularProgress size={16} /> : 'Update'}
                  </Button>
                </Box>
              </Stack>
            </Paper>
          </Grid>

          {/* Stake View Data */}
          {stakingData.userStakeView && (
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ color: theme.palette.primary.main }}>
                  Stake Details
                </Typography>
                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography>Stake Amount</Typography>
                    <Chip 
                      label={`$${parseFloat(formatEther(stakingData.userStakeView.amount)).toFixed(2)}`} 
                      color="primary" 
                    />
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography>Stake Time</Typography>
                    <Chip 
                      label={new Date(Number(stakingData.userStakeView.stakeTime) * 1000).toLocaleDateString()} 
                      color="info" 
                    />
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography>Mature Time</Typography>
                    <Chip 
                      label={new Date(Number(stakingData.userStakeView.matureTime) * 1000).toLocaleDateString()} 
                      color="success" 
                    />
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography>Unstake Time</Typography>
                    <Chip 
                      label={new Date(Number(stakingData.userStakeView.unstakeTime) * 1000).toLocaleDateString()} 
                      color="warning" 
                    />
                  </Box>
                </Stack>
              </Paper>
            </Grid>
          )}
        </Grid>
      )}

      {/* Contract Info Tab */}
      {activeTab === 3 && (
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ color: theme.palette.primary.main }}>
                Contract Information
              </Typography>
              <Stack spacing={2}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography>Whitelisted</Typography>
                  <Chip 
                    label={balances.isWhitelisted ? 'Yes' : 'No'} 
                    color={balances.isWhitelisted ? 'success' : 'error'} 
                  />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography>Buy Enabled</Typography>
                  <Chip 
                    label={balances.isBuyEnabled ? 'Yes' : 'No'} 
                    color={balances.isBuyEnabled ? 'success' : 'error'} 
                  />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography>Reserve 0</Typography>
                  <Chip 
                    label={`${balances.reserves.reserve0.toFixed(2)}`} 
                    color="info" 
                  />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography>Reserve 1</Typography>
                  <Chip 
                    label={`${balances.reserves.reserve1.toFixed(2)}`} 
                    color="info" 
                  />
                </Box>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      )}

      {/* Registration Dialog */}
      <Dialog 
        open={registrationDialog} 
        onClose={() => setRegistrationDialog(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          Register in
        </DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2 }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Enter the referral address to join the. Registration requires 1 USDT.
            </Typography>
            <TextField
              fullWidth
              label="Referral Address"
              value={referralAddress}
              onChange={(e) => setReferralAddress(e.target.value)}
              placeholder="0x..."
              sx={{ mt: 2 }}
            />
            {error && (
              <Alert severity="error" sx={{ mt: 2 }}>
                {error}
              </Alert>
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setRegistrationDialog(false)}>
            Cancel
          </Button>
          <Button 
            onClick={handleRegister} 
            variant="contained"
            disabled={isLoading || !referralAddress}
            startIcon={isLoading ? <CircularProgress size={16} /> : <PersonAddIcon />}
          >
            {isLoading ? 'Registering...' : 'Register (1 USDT)'}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Home;

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
  Paper
} from '@mui/material';
import { useWallet } from '../context/WalletContext';
import { stakingInteractions } from '../services/selfmintStakingService';
import { formatEther, parseEther } from 'viem';

// Icons
import PeopleIcon from '@mui/icons-material/People';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import DiamondIcon from '@mui/icons-material/Diamond';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import TimelineIcon from '@mui/icons-material/Timeline';
import RefreshIcon from '@mui/icons-material/Refresh';

const MLMDashboard = () => {
  const wallet = useWallet();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [buyAmount, setBuyAmount] = useState('');
  const [sellAmount, setSellAmount] = useState('');
  const [orderHistory, setOrderHistory] = useState([]);
  const [orderLoading, setOrderLoading] = useState(false);
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
    growthEarn: 0
  });

  const fetchMlmData = async () => {
    if (wallet.isConnected && wallet.account) {
      try {
        setIsLoading(true);
        setError('');

        const userInfo = await stakingInteractions.getUserInfo(wallet.account);
        
        if (!userInfo.joined) {
          setError('You need to register in the MLM system first');
          setIsLoading(false);
          return;
        }

        const [bonusInfo, rankQualify, directReferrals] = await Promise.all([
          stakingInteractions.getBonusInfo(wallet.account),
          stakingInteractions.getRankQualify(wallet.account),
          stakingInteractions.getDirectUser(wallet.account)
        ]);

        const directTeam = directReferrals.length;
        const strongTeam = Number(rankQualify?.strongTeam || 0);
        const totalTeam = Number(rankQualify?.totalTeam || 0);
        const otherTeams = totalTeam - directTeam - strongTeam;
        const levels = Number(rankQualify?.level || 0);

        const totalIn = parseFloat(formatEther(bonusInfo.totalStake));
        const totalOut = parseFloat(formatEther(bonusInfo.referralGains)) + 
                        parseFloat(formatEther(bonusInfo.levelGains)) + 
                        parseFloat(formatEther(bonusInfo.growthGains));
        const activePortfolio = parseFloat(formatEther(bonusInfo.totalStake)) - totalOut;

        const referralEarn = parseFloat(formatEther(bonusInfo.referralGains));
        const levelEarn = parseFloat(formatEther(bonusInfo.levelGains));
        const growthEarn = parseFloat(formatEther(bonusInfo.growthGains));

        setMlmData({
          directTeam,
          strongTeam,
          otherTeams,
          levels,
          totalIn,
          totalOut,
          activePortfolio,
          teamGrowthWallet: growthEarn,
          referralEarn,
          levelEarn,
          growthEarn
        });

        // Fetch order history
        setOrderLoading(true);
        const orders = [];
        const stakeViewResponse = await stakingInteractions.userStakeView(wallet.account, BigInt(0));
        const totalCount = Number(stakeViewResponse.totalCount || 0);
        for (let i = 0; i < totalCount; i++) {
          const orderResponse = await stakingInteractions.userStakeView(wallet.account, BigInt(i));
          const stakeInfo = orderResponse.stakeInfo;
          orders.push({
            ...stakeInfo,
            amount: parseFloat(formatEther(stakeInfo.amount || BigInt(0))),
            timestamp: Number(stakeInfo.timestamp || BigInt(0)) * 1000,
            isStake: stakeInfo.isStake
          });
        }
        setOrderHistory(orders);
        setOrderLoading(false);

      } catch (error) {
        console.error('Error fetching MLM data:', error);
        setError('Failed to fetch MLM data. Please try again.');
        setOrderLoading(false);
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchMlmData();
  }, [wallet.isConnected, wallet.account]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  };

  const handleBuy = async () => {
    if (!buyAmount || parseFloat(buyAmount) <= 0) {
      setError('Please enter a valid amount to buy');
      return;
    }

    try {
      setOrderLoading(true);
      setError('');
      setSuccess('');
      
      const amountInWei = parseEther(buyAmount);
      const txHash = await stakingInteractions.makeStake(amountInWei, wallet.account);
      
      setSuccess(`Successfully bought $${buyAmount} worth of tokens! Transaction: ${txHash}`);
      setBuyAmount('');
      
      setTimeout(() => {
        fetchMlmData();
      }, 3000);
    } catch (error) {
      console.error('Error buying tokens:', error);
      if (error.message?.includes('User rejected')) {
        setError('Transaction was cancelled by user');
      } else if (error.message?.includes('insufficient')) {
        setError('Insufficient USDT balance for this transaction');
      } else {
        setError('Failed to buy tokens. Please check your balance and try again.');
      }
    } finally {
      setOrderLoading(false);
    }
  };

  const handleSell = async () => {
    if (!sellAmount || parseFloat(sellAmount) <= 0) {
      setError('Please enter a valid amount to sell');
      return;
    }

    try {
      setOrderLoading(true);
      setError('');
      setSuccess('');
      
      const amountInWei = parseEther(sellAmount);
      const txHash = await stakingInteractions.makeUnstake(amountInWei, wallet.account);
      
      setSuccess(`Successfully sold $${sellAmount} worth of tokens! Transaction: ${txHash}`);
      setSellAmount('');
      
      setTimeout(() => {
        fetchMlmData();
      }, 3000);
    } catch (error) {
      console.error('Error selling tokens:', error);
      if (error.message?.includes('User rejected')) {
        setError('Transaction was cancelled by user');
      } else if (error.message?.includes('insufficient')) {
        setError('Insufficient token balance for this transaction');
      } else {
        setError('Failed to sell tokens. Please check your balance and try again.');
      }
    } finally {
      setOrderLoading(false);
    }
  };

  if (!wallet.isConnected) {
    return (
      <Container maxWidth="xl" sx={{ py: 3 }}>
        <Alert severity="warning">
          Please connect your wallet to view the MLM dashboard.
        </Alert>
      </Container>
    );
  }

  if (isLoading) {
    return (
      <Container maxWidth="xl" sx={{ py: 3, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '400px' }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      {error && (
        <Alert severity="error" sx={{ mb: 3 }} onClose={() => setError('')}>
          {error}
        </Alert>
      )}
      {success && (
        <Alert severity="success" sx={{ mb: 3 }} onClose={() => setSuccess('')}>
          {success}
        </Alert>
      )}

      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
          <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
            Dashboard
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Manage your team, track earnings, and monitor growth
          </Typography>
        </Box>
        <Button
          variant="outlined"
          startIcon={<RefreshIcon />}
          onClick={fetchMlmData}
          disabled={isLoading || orderLoading}
        >
          Refresh
        </Button>
      </Box>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={8}>
          {/* Team Statistics */}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom sx={{ color: 'primary.main' }}>
                Team Statistics
              </Typography>
            </Grid>
            
            <Grid item xs={12} sm={6} lg={3}>
              <Card sx={{ p: 2, boxShadow: 3 }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <PeopleIcon sx={{ color: 'primary.main', mr: 1 }} />
                    <Typography variant="h6">My Direct</Typography>
                  </Box>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                    {formatNumber(mlmData.directTeam)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Direct Referrals
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
      
            <Grid item xs={12} sm={6} lg={3}>
              <Card sx={{ p: 2, boxShadow: 3 }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <DiamondIcon sx={{ color: 'secondary.main', mr: 1 }} />
                    <Typography variant="h6">Strong Teams</Typography>
                  </Box>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'secondary.main' }}>
                    {formatNumber(mlmData.strongTeam)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Active Strong Teams
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
      
            <Grid item xs={12} sm={6} lg={3}>
              <Card sx={{ p: 2, boxShadow: 3 }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <PeopleIcon sx={{ color: 'info.main', mr: 1 }} />
                    <Typography variant="h6">Other Teams</Typography>
                  </Box>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'info.main' }}>
                    {formatNumber(mlmData.otherTeams)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Additional Team Members
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
      
            <Grid item xs={12} sm={6} lg={3}>
              <Card sx={{ p: 2, boxShadow: 3 }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <TimelineIcon sx={{ color: 'warning.main', mr: 1 }} />
                    <Typography variant="h6">Levels</Typography>
                  </Box>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'warning.main' }}>
                    {formatNumber(mlmData.levels)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Achievement Levels
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
      
          {/* Financial Overview */}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom sx={{ color: 'primary.main' }}>
                Financial Overview
              </Typography>
            </Grid>
            
            <Grid item xs={12} sm={6} lg={3}>
              <Card sx={{ p: 2, boxShadow: 3 }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <TrendingUpIcon sx={{ color: 'success.main', mr: 1 }} />
                    <Typography variant="h6">Total In</Typography>
                  </Box>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'success.main' }}>
                    {formatCurrency(mlmData.totalIn)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Total Investments
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} lg={3}>
              <Card sx={{ p: 2, boxShadow: 3 }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <MonetizationOnIcon sx={{ color: 'info.main', mr: 1 }} />
                    <Typography variant="h6">Total Out</Typography>
                  </Box>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'info.main' }}>
                    {formatCurrency(mlmData.totalOut)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Total Withdrawals
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} lg={3}>
              <Card sx={{ p: 2, boxShadow: 3 }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <AccountBalanceWalletIcon sx={{ color: 'primary.main', mr: 1 }} />
                    <Typography variant="h6">Active Portfolio</Typography>
                  </Box>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                    {formatCurrency(mlmData.activePortfolio)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Current Investment Value
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} lg={3}>
              <Card sx={{ p: 2, boxShadow: 3 }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <EmojiEventsIcon sx={{ color: 'secondary.main', mr: 1 }} />
                    <Typography variant="h6">Team Growth</Typography>
                  </Box>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'secondary.main' }}>
                    {formatCurrency(mlmData.teamGrowthWallet)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Growth Wallet Balance
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Earnings Breakdown */}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom sx={{ color: 'primary.main' }}>
                Earnings Breakdown
              </Typography>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 2, boxShadow: 3 }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <PeopleIcon sx={{ color: 'primary.main', mr: 1 }} />
                    <Typography variant="h6">Referral Earn</Typography>
                  </Box>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                    {formatCurrency(mlmData.referralEarn)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    From Direct Referrals
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card sx={{ p: 2, boxShadow: 3 }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <TimelineIcon sx={{ color: 'info.main', mr: 1 }} />
                    <Typography variant="h6">Level Earn</Typography>
                  </Box>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'info.main' }}>
                    {formatCurrency(mlmData.levelEarn)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    From Team Levels
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card sx={{ p: 2, boxShadow: 3 }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <TrendingUpIcon sx={{ color: 'success.main', mr: 1 }} />
                    <Typography variant="h6">Growth Earn</Typography>
                  </Box>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'success.main' }}>
                    {formatCurrency(mlmData.growthEarn)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    From Growth System
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={4}>
          {/* Buy/Sell Section */}
          <Card sx={{ p: 3, boxShadow: 3, mb: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ color: 'primary.main' }}>
              Buy/Sell Tokens
            </Typography>
            
            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                label="Buy Amount (USDT)"
                type="number"
                value={buyAmount}
                onChange={(e) => setBuyAmount(e.target.value)}
                sx={{ mb: 2 }}
              />
              <Button
                fullWidth
                variant="contained"
                onClick={handleBuy}
                disabled={orderLoading}
                sx={{ mb: 2 }}
              >
                Buy Tokens
              </Button>
            </Box>

            <Box>
              <TextField
                fullWidth
                label="Sell Amount (Tokens)"
                type="number"
                value={sellAmount}
                onChange={(e) => setSellAmount(e.target.value)}
                sx={{ mb: 2 }}
              />
              <Button
                fullWidth
                variant="outlined"
                onClick={handleSell}
                disabled={orderLoading}
              >
                Sell Tokens
              </Button>
            </Box>
          </Card>

          {/* Order History */}
          <Card sx={{ p: 3, boxShadow: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ color: 'primary.main' }}>
              Order History
            </Typography>
            
            {orderLoading ? (
              <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
                <CircularProgress />
              </Box>
            ) : orderHistory.length === 0 ? (
              <Typography variant="body2" color="text.secondary" sx={{ p: 2, textAlign: 'center' }}>
                No orders yet
              </Typography>
            ) : (
              <TableContainer>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Type</TableCell>
                      <TableCell>Amount</TableCell>
                      <TableCell>Date</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {orderHistory.slice(0, 5).map((order, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <Typography variant="body2" color={order.isStake ? 'success.main' : 'error.main'}>
                            {order.isStake ? 'BUY' : 'SELL'}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2">
                            {formatCurrency(order.amount)}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2">
                            {formatDate(order.timestamp)}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MLMDashboard;

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
    growthEarn: 0,
    leaderEarn: 0,
    developmentEarn: 0
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
        const leaderEarn = parseFloat(formatEther(bonusInfo.leaderGains));
        const developmentEarn = parseFloat(formatEther(bonusInfo.developmentGains));
        const teamGrowthWallet = parseFloat(formatEther(bonusInfo.teamGrowthGains));

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
          developmentEarn
        });

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
    <Container maxWidth="xl" sx={{ py: 3, display: 'flex', flexDirection: 'column', gap: 3 }}>
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
            MLM Dashboard
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Monitor your team performance and manage your investments
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

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
        {/* First Box: Statistics and Earnings Cards */}
        <Box sx={{ flex: 2, p: 3, boxShadow: 3, borderRadius: 2, bgcolor: 'background.paper' }}>
          <Typography variant="h5" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold', mb: 4 }}>
            Performance Overview
          </Typography>

          {/* Team Statistics */}
          <Typography variant="h6" gutterBottom sx={{ color: 'primary.main', mb: 3 }}>
            Team Statistics
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 4 }}>
            {[
              { icon: <PeopleIcon />, title: 'My Direct', value: formatNumber(mlmData.directTeam), subtitle: 'Direct Referrals', color: 'primary.main' },
              { icon: <DiamondIcon />, title: 'Strong Teams', value: formatNumber(mlmData.strongTeam), subtitle: 'Active Strong Teams', color: 'secondary.main' },
              { icon: <PeopleIcon />, title: 'Other Teams', value: formatNumber(mlmData.otherTeams), subtitle: 'Additional Team Members', color: 'info.main' },
              { icon: <TimelineIcon />, title: 'Levels', value: formatNumber(mlmData.levels), subtitle: 'Achievement Levels', color: 'warning.main' },
            ].map((card, index) => (
              <Box key={index} sx={{ flex: '0 0 calc(33.33% - 16px)', minWidth: 0 }}>
                <Card sx={{ p: 2, boxShadow: 2, height: '100%' }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      {React.cloneElement(card.icon, { sx: { color: card.color, mr: 1 } })}
                      <Typography variant="h6">{card.title}</Typography>
                    </Box>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: card.color }}>
                      {card.value}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {card.subtitle}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>

          {/* Financial Overview */}
          <Typography variant="h6" gutterBottom sx={{ color: 'primary.main', mb: 3 }}>
            Financial Overview
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 4 }}>
            {[
              { icon: <TrendingUpIcon />, title: 'Total In', value: formatCurrency(mlmData.totalIn), subtitle: 'Total Investments', color: 'success.main' },
              { icon: <MonetizationOnIcon />, title: 'Total Out', value: formatCurrency(mlmData.totalOut), subtitle: 'Total Withdrawals', color: 'info.main' },
              { icon: <AccountBalanceWalletIcon />, title: 'Active Portfolio', value: formatCurrency(mlmData.activePortfolio), subtitle: 'Current Investment Value', color: 'primary.main' },
              { icon: <EmojiEventsIcon />, title: 'Team Growth', value: formatCurrency(mlmData.teamGrowthWallet), subtitle: 'Growth Wallet Balance', color: 'secondary.main' },
            ].map((card, index) => (
              <Box key={index} sx={{ flex: '0 0 calc(33.33% - 16px)', minWidth: 0 }}>
                <Card sx={{ p: 2, boxShadow: 2, height: '100%' }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      {React.cloneElement(card.icon, { sx: { color: card.color, mr: 1 } })}
                      <Typography variant="h6">{card.title}</Typography>
                    </Box>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: card.color }}>
                      {card.value}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {card.subtitle}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>

          {/* Earnings Breakdown */}
          <Typography variant="h6" gutterBottom sx={{ color: 'primary.main', mb: 3 }}>
            Earnings Breakdown
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            {[
              { icon: <PeopleIcon />, title: 'Referral Earn', value: formatCurrency(mlmData.referralEarn), subtitle: 'From Direct Referrals', color: 'primary.main' },
              { icon: <TimelineIcon />, title: 'Level Earn', value: formatCurrency(mlmData.levelEarn), subtitle: 'From Team Levels', color: 'info.main' },
              { icon: <TrendingUpIcon />, title: 'Growth Earn', value: formatCurrency(mlmData.growthEarn), subtitle: 'From Growth System', color: 'success.main' },
              { icon: <EmojiEventsIcon />, title: 'Leader Earn', value: formatCurrency(mlmData.leaderEarn), subtitle: 'From Leadership', color: 'warning.main' },
              { icon: <TimelineIcon />, title: 'Development Earn', value: formatCurrency(mlmData.developmentEarn), subtitle: 'From Development', color: 'info.main' },
              { icon: <PeopleIcon />, title: 'Team Growth', value: formatCurrency(mlmData.teamGrowthWallet), subtitle: 'Team Growth Wallet', color: 'secondary.main' },
            ].map((card, index) => (
              <Box key={index} sx={{ flex: '0 0 calc(33.33% - 16px)', minWidth: 0 }}>
                <Card sx={{ p: 2, boxShadow: 2, height: '100%' }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      {React.cloneElement(card.icon, { sx: { color: card.color, mr: 1 } })}
                      <Typography variant="h6">{card.title}</Typography>
                    </Box>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: card.color }}>
                      {card.value}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {card.subtitle}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Second Box: Buy/Sell, Referral, and Order History */}
        <Box sx={{ flex: 1, p: 3, boxShadow: 3, borderRadius: 2, bgcolor: 'background.paper' }}>
          <Typography variant="h5" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold', mb: 4 }}>
            Trading & Referrals
          </Typography>

          {/* Buy/Sell Section */}
          <Typography variant="h6" gutterBottom sx={{ color: 'primary.main', mb: 3 }}>
            Buy/Sell Tokens
          </Typography>
          <Box sx={{ mb: 4 }}>
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

          {/* Referral Code Section */}
          <Typography variant="h6" gutterBottom sx={{ color: 'primary.main', mb: 3 }}>
            Your Referral Code
          </Typography>
          <Box sx={{ mb: 4 }}>
            <TextField
              fullWidth
              label="Referral Code"
              value={wallet.account || ''}
              InputProps={{
                readOnly: true,
              }}
              sx={{ mb: 2 }}
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
                sx={{ flex: 1 }}
              >
                Copy
              </Button>
              <Button
                variant="outlined"
                onClick={() => {
                  if (wallet.account) {
                    const shareText = `Join me on UniversalBet! Use my referral code: ${wallet.account}`;
                    if (navigator.share) {
                      navigator.share({
                        title: 'UniversalBet Referral',
                        text: shareText,
                        url: window.location.origin
                      });
                    } else {
                      navigator.clipboard.writeText(shareText);
                      setSuccess('Referral message copied to clipboard!');
                    }
                  }
                }}
                disabled={!wallet.account}
                sx={{ flex: 1 }}
              >
                Share
              </Button>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              Share this code with friends to earn referral bonuses when they join and invest!
            </Typography>
          </Box>

          {/* Order History */}
          <Typography variant="h6" gutterBottom sx={{ color: 'primary.main', mb: 3 }}>
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
            <TableContainer component={Paper}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Type</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orderHistory.map((order, index) => (
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
        </Box>
      </Box>
    </Container>
  );
};

export default MLMDashboard;
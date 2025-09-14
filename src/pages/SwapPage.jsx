import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Alert,
  CircularProgress,
  Grid,
  Divider,
  InputAdornment,
  Chip,
} from '@mui/material';
import { useWallet } from '../context/WalletContext';
import { stakingInteractions } from '../services/selfmintStakingService';
import { formatUnits, parseUnits } from 'viem';
import { formatCurrency, formatNumber } from '../utils/formatters';

// Icons
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import RefreshIcon from '@mui/icons-material/Refresh';

const SwapPage = () => {
  const wallet = useWallet();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [usdtAmount, setUsdtAmount] = useState('');
  const [tokenAmount, setTokenAmount] = useState('');
  const [usdtBalance, setUsdtBalance] = useState('0');
  const [tokenBalance, setTokenBalance] = useState('0');
  const [estimatedTokens, setEstimatedTokens] = useState('0');
  const [estimatedUsdt, setEstimatedUsdt] = useState('0');
  const [refreshing, setRefreshing] = useState(false);
  const [swapDirection, setSwapDirection] = useState('usdtToToken'); // 'usdtToToken' or 'tokenToUsdt'

  // Fetch USDT balance
  const fetchUSDTBalance = async () => {
    if (!wallet.isConnected || !wallet.account) return;

    try {
      setRefreshing(true);
      const balance = await stakingInteractions.getUSDTBalance(wallet.account);
      setUsdtBalance(formatUnits(balance, 6));
    } catch (error) {
      console.error('Error fetching USDT balance:', error);
    } finally {
      setRefreshing(false);
    }
  };

  // Fetch Token balance
  const fetchTokenBalance = async () => {
    if (!wallet.isConnected || !wallet.account) return;

    try {
      // Get token balance from contract
      const userInfo = await stakingInteractions.getUserInfo(wallet.account);
      setTokenBalance(userInfo?.inOutBuy?.toString() || '0');
    } catch (error) {
      console.error('Error fetching token balance:', error);
    }
  };

  useEffect(() => {
    fetchUSDTBalance();
    fetchTokenBalance();
  }, [wallet.isConnected, wallet.account]);

  // Calculate estimated tokens/USDT based on swap direction
  useEffect(() => {
    if (swapDirection === 'usdtToToken') {
      if (usdtAmount && !isNaN(parseFloat(usdtAmount))) {
        setEstimatedTokens(usdtAmount);
      } else {
        setEstimatedTokens('0');
      }
    } else {
      if (tokenAmount && !isNaN(parseFloat(tokenAmount))) {
        setEstimatedUsdt(tokenAmount);
      } else {
        setEstimatedUsdt('0');
      }
    }
  }, [usdtAmount, tokenAmount, swapDirection]);

  const handleSwap = async () => {
    if (!wallet.isConnected || !wallet.account) {
      setError('Please connect your wallet');
      return;
    }

    if (!usdtAmount || parseFloat(usdtAmount) <= 0) {
      setError('Please enter a valid USDT amount');
      return;
    }

    if (parseFloat(usdtAmount) > parseFloat(usdtBalance)) {
      setError('Insufficient USDT balance');
      return;
    }

    try {
      setLoading(true);
      setError('');
      setSuccess('');

      console.log(`🔄 [Swap] Swapping ${usdtAmount} USDT for tokens...`);
      console.log('🔄 [Swap] Wallet account:', wallet.account);

      // Check if user is registered first
      try {
        const userInfo = await stakingInteractions.getUserInfo(wallet.account);
        console.log('User info:', userInfo);

        if (!userInfo.joined) {
          setError('You must be registered to swap tokens. Please register first.');
          return;
        }
      } catch (regError) {
        console.error('Error checking registration:', regError);
        setError('Unable to verify registration status. Please try again.');
        return;
      }

      // Convert amount to wei (USDT has 6 decimals) - contract expects BigInt
      const amountInWei = parseUnits(usdtAmount, 6);
      console.log('🔄 [Swap] Amount in wei:', amountInWei.toString());

      // Execute buyToken transaction
      console.log('🔄 [Swap] Calling buyToken function...');
      const txHash = await stakingInteractions.buyToken(amountInWei, wallet.account);
      console.log('✅ [Swap] Transaction successful! Hash:', txHash);

      setSuccess(`🎉 Swap successful! Bought tokens with ${usdtAmount} USDT. Tx: ${txHash.slice(0, 10)}...${txHash.slice(-8)}`);
      setUsdtAmount('');

      // Refresh balance after successful swap
      console.log('🔄 [Swap] Refreshing balances...');
      setTimeout(() => {
        fetchUSDTBalance();
        fetchTokenBalance();
      }, 3000);

    } catch (error) {
      console.error('Swap error:', error);

      // Better error handling
      let errorMessage = 'Swap failed. Please try again.';

      if (error.message) {
        if (error.message.includes('insufficient')) {
          errorMessage = 'Insufficient balance or allowance. Please check your USDTbalance.';
        } else if (error.message.includes('rejected')) {
          errorMessage = 'Transaction was rejected. Please try again.';
        } else if (error.message.includes('gas')) {
          errorMessage = 'Transaction failed due to gas issues. Please try again.';
        } else if (error.message.includes('network')) {
          errorMessage = 'Network error. Please check your connection and try again.';
        } else {
          errorMessage = error.message;
        }
      }

      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleMaxClick = () => {
    setUsdtAmount(usdtBalance);
  };

  if (!wallet.isConnected) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Alert severity="warning">
          Please connect your wallet to access the swap feature.
        </Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
          <SwapHorizIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
          Token Swap
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Swap between USDT and SafeMint tokens
        </Typography>

        {/* Swap Direction Toggle */}
        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
          <Button
            variant={swapDirection === 'usdcToToken' ? 'contained' : 'outlined'}
            onClick={() => setSwapDirection('usdcToToken')}
            sx={{ mr: 2, borderRadius: '20px' }}
          >
            USDT→ Token
          </Button>
          <Button
            variant={swapDirection === 'tokenToUsdc' ? 'contained' : 'outlined'}
            onClick={() => setSwapDirection('tokenToUsdc')}
            sx={{ borderRadius: '20px' }}
          >
            Token → USDT
          </Button>
        </Box>
      </Box>

      {/* Balance Cards */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} md={6}>
          <Card sx={{ backgroundColor: 'white', boxShadow: 3 }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', color: 'primary.main' }}>
                  <AccountBalanceWalletIcon sx={{ mr: 1 }} />
                  USDT Balance
                </Typography>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<RefreshIcon />}
                  onClick={fetchUSDTBalance}
                  disabled={refreshing}
                >
                  {refreshing ? 'Refreshing...' : 'Refresh'}
                </Button>
              </Box>
              <Typography variant="h4" sx={{ mt: 1, color: 'text.primary', fontWeight: 'bold' }}>
                {formatCurrency(parseFloat(usdtBalance))} USDT
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ backgroundColor: 'white', boxShadow: 3 }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', color: 'secondary.main' }}>
                  <TrendingUpIcon sx={{ mr: 1 }} />
                  Token Balance
                </Typography>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<RefreshIcon />}
                  onClick={fetchTokenBalance}
                  disabled={refreshing}
                >
                  {refreshing ? 'Refreshing...' : 'Refresh'}
                </Button>
              </Box>
              <Typography variant="h4" sx={{ mt: 1, color: 'text.primary', fontWeight: 'bold' }}>
                {formatNumber(parseFloat(tokenBalance))} SMT
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Swap Card */}
      <Card sx={{ backgroundColor: 'white', boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
            <SwapHorizIcon sx={{ mr: 1 }} />
            Swap USDT to Tokens
          </Typography>

          <Grid container spacing={3}>
            {/* From Section */}
            <Grid item xs={12}>
              <Typography variant="subtitle1" gutterBottom>
                From
              </Typography>
              <TextField
                fullWidth
                label="USDT Amount"
                value={usdtAmount}
                onChange={(e) => setUsdtAmount(e.target.value)}
                type="number"
                inputProps={{ min: 0, step: 0.01 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button
                        size="small"
                        onClick={handleMaxClick}
                        sx={{ minWidth: 'auto', px: 1 }}
                      >
                        MAX
                      </Button>
                    </InputAdornment>
                  ),
                }}
                helperText={`Available: ${formatCurrency(parseFloat(usdtBalance))} USDT`}
              />
            </Grid>

            {/* Swap Arrow */}
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <SwapHorizIcon sx={{ fontSize: 40, color: 'primary.main' }} />
            </Grid>

            {/* To Section */}
            <Grid item xs={12}>
              <Typography variant="subtitle1" gutterBottom>
                To (Estimated)
              </Typography>
              <TextField
                fullWidth
                label="SafeMint Tokens"
                value={estimatedTokens}
                InputProps={{
                  readOnly: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <Chip label="1:1 Ratio" size="small" color="primary" />
                    </InputAdornment>
                  ),
                }}
                helperText="1 USDT= 1 SafeMint Token"
              />
            </Grid>
          </Grid>

          <Divider sx={{ my: 3 }} />

          {/* Transaction Summary */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Transaction Summary
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="body2" color="text.secondary">
                  You Pay:
                </Typography>
                <Typography variant="body1" fontWeight="bold">
                  {formatCurrency(parseFloat(usdtAmount || '0'))} USDT
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" color="text.secondary">
                  You Receive:
                </Typography>
                <Typography variant="body1" fontWeight="bold">
                  {formatNumber(parseFloat(estimatedTokens || '0'))} Tokens
                </Typography>
              </Grid>
            </Grid>
          </Box>

          {/* Error/Success Messages */}
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

          {/* Swap Button */}
          <Button
            fullWidth
            variant="contained"
            size="large"
            onClick={handleSwap}
            disabled={loading || !usdtAmount || parseFloat(usdtAmount) <= 0}
            startIcon={loading ? <CircularProgress size={20} /> : <TrendingUpIcon />}
            sx={{
              py: 1.5,
              fontSize: '1.1rem',
              background: 'linear-gradient(45deg, #FFA000 30%, #FF8F00 90%)',
              '&:hover': {
                background: 'linear-gradient(45deg, #FF8F00 30%, #F57C00 90%)',
              }
            }}
          >
            {loading ? 'Swapping...' : 'Swap Tokens'}
          </Button>

          {/* Info */}
          <Box sx={{ mt: 2, p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
            <Typography variant="body2" color="text.secondary">
              <strong>Note:</strong> This swap converts your USDTto SafeMint tokens at a 1:1 ratio. 
              Make sure you have enough USDTbalance and the transaction will require gas fees.
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default SwapPage;

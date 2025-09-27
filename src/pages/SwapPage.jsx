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
import { stakingInteractions, STAKING_CONTRACT_ADDRESS, SAFEMINT_TOKEN_ABI } from '../services/selfmintStakingService';
import { formatUnits, parseUnits, formatEther } from 'viem';
import { formatNumber } from '../utils/formatters';
import safeMintTokenService, { SAFEMINT_TOKEN_ADDRESS } from '../services/safeMintTokenService';

// Lucide React icons
import { TrendingDown, TrendingUp } from 'lucide-react';
import { readContract } from '@wagmi/core';
import { config } from '../config/web3modal';

const UnstakePage = () => {
  const wallet = useWallet();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [tokenAmount, setTokenAmount] = useState('');
  const [tokenBalance, setTokenBalance] = useState('0');
  const [estimatedUsdt, setEstimatedUsdt] = useState('0');
  const [refreshing, setRefreshing] = useState(false);
  const [tokenPrice, setTokenPrice] = useState('0');
  const [approving, setApproving] = useState(false);



  // Fetch Token balance
  const fetchTokenBalance = async () => {
    if (!wallet.isConnected || !wallet.account) return;

    try {
      console.log("🔄 [SwapPage] Fetching USER SafeMint token balance for wallet:", wallet.account);
      setRefreshing(true);

      // Get USER's actual SafeMint token balance from the token contract
      const balance = await safeMintTokenService.getBalance(wallet.account);
      console.log("🔍 [SwapPage] Raw USER SafeMint balance (wei):", balance.toString());

      const formattedBalance = formatUnits(balance, 18); // SafeMint tokens have 18 decimals
      console.log("🔍 [SwapPage] Formatted USER SafeMint balance:", formattedBalance);

      setTokenBalance(formattedBalance);
      console.log("✅ [SwapPage] USER SafeMint token balance updated:", formattedBalance, "SMT");
    } catch (error) {
      console.error('❌ [SwapPage] Error fetching USER SafeMint token balance:', error);
      setTokenBalance('0');
    } finally {
      setRefreshing(false);
    }
  };

  // Fetch real-time token price
  const fetchTokenPrice = async () => {
    try {
      console.log("🔄 [UnstakePage] Fetching real-time token price...");

      const tokenInfo = await safeMintTokenService.getTokenInfo();
      const priceInUSDT = formatEther(tokenInfo.rateInUSDT);
      setTokenPrice(priceInUSDT);

      console.log("✅ [UnstakePage] Token price updated:", priceInUSDT, "USDT");
    } catch (error) {
      console.error('❌ [UnstakePage] Error fetching token price:', error);
      setTokenPrice('1.0'); // Fallback to 1:1 ratio
    }
  };

  // Refresh all data
  const refreshAllData = async () => {
    if (!wallet.isConnected || !wallet.account) return;

    setRefreshing(true);
    try {
      await Promise.all([
        fetchTokenBalance(),
        fetchTokenPrice()
      ]);
    } catch (error) {
      console.error('❌ [UnstakePage] Error refreshing data:', error);
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    if (wallet.isConnected && wallet.account) {
      console.log("🔄 [UnstakePage] Wallet connected, fetching balances for:", wallet.account);
      // console.log("🔄 [UnstakePage] Current chain ID:", wallet.chainId);

      // Check if we're on BSC Mainnet
      if (wallet.chainId !== 56) {
        console.warn("⚠️ [UnstakePage] Warning: Not on BSC Mainnet (Chain ID 56). Current chain:", wallet.chainId);
      }

      fetchTokenBalance();
      fetchTokenPrice();
    } else {
      console.log("⚠️ [UnstakePage] Wallet not connected, skipping balance fetch");
    }
  }, [wallet.isConnected, wallet.account, wallet.chainId]);

  // Auto-refresh token price every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      fetchTokenPrice();
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  // Calculate estimated USDT based on real-time price
  useEffect(() => {
    if (tokenAmount && !isNaN(parseFloat(tokenAmount)) && tokenPrice && parseFloat(tokenPrice) > 0) {
      // Calculate USDT based on real-time price: Token Amount * Token Price = USDT
      const usdtToReceive = parseFloat(tokenAmount) * parseFloat(tokenPrice);
      setEstimatedUsdt(usdtToReceive.toFixed(6));
    } else {
      setEstimatedUsdt('0');
    }
  }, [tokenAmount, tokenPrice]);

const handleUnstake = async () => {
  console.log("🪙 [handleUnstake] Unstake button clicked");

  if (!wallet.isConnected || !wallet.account) {
    setError('Please connect your wallet');
    return;
  }

  if (!tokenAmount || parseFloat(tokenAmount) <= 0) {
    setError('Please enter a valid token amount');
    return;
  }

  if (parseFloat(tokenAmount) > parseFloat(tokenBalance)) {
    setError('Insufficient token balance');
    return;
  }



  try {
    setLoading(true);
    setError('');
    setSuccess('');

    // Check if user is registered
    const userInfo = await stakingInteractions.getUserInfo(wallet.account);
    console.log('🔍 [handleUnstake] User info:', userInfo);
    if (!userInfo.joined) {
      setError('You must be registered to unstake tokens. Please register first.');
      return;
    }

    // Get SafeMint token decimals
    const tokenDecimals = await readContract(config, {
      abi: SAFEMINT_TOKEN_ABI,
      address: SAFEMINT_TOKEN_ADDRESS,
      functionName: "decimals",
      chainId: 56,
    });
    console.log("🔍 [handleUnstake] SafeMint Token Decimals:", tokenDecimals);

    // Approve SafeMint tokens if allowance is insufficient
    // if (allowance < tokenAmountInWei) {
    //   console.log(`🔄 [handleUnstake] Approving ${tokenAmount} SafeMint tokens (plain amount) for staking contract...`);
    //   setError('Approving tokens for unstake...');
    //   setApproving(true);

    //   const approvalTxHash = await safeMintTokenService.approve(
    //     STAKING_CONTRACT_ADDRESS,
    //     tokenAmount, // Pass plain amount
    //     wallet.account
      // );
      // console.log(`✅ [handleUnstake] Approval transaction successful: ${approvalTxHash}`);
      // setError('Approval submitted. Waiting for confirmation...');

      // Wait for approval confirmation
    //   await new Promise(resolve => setTimeout(resolve, 2000));
    //   console.log('✅ [handleUnstake] Approval confirmed, proceeding with unstake...');
    //   setError('');
    // } else {
    //   console.log("✅ [handleUnstake] Sufficient allowance, no approval needed.");
    // }

    // Calculate USDT equivalent amount (token amount * token price)
    const usdtEquivalent = parseFloat(tokenAmount) * parseFloat(tokenPrice);
    const roundedUsdtEquivalent = parseFloat(usdtEquivalent.toFixed(6)); // Round to 6 decimals for USDT
    console.log(`🔄 [handleUnstake] Unstaking ${tokenAmount} tokens for ${roundedUsdtEquivalent} USDT (plain amount)...`);

    // Execute sellToken transaction with rounded plain USDT equivalent
    const txHash = await safeMintTokenService.sellSelfMint(roundedUsdtEquivalent, wallet.account);
    console.log('✅ [handleUnstake] Transaction successful! Hash:', txHash);

    setSuccess(
      `🎉 Unstake successful! Sold ${tokenAmount} tokens for ${roundedUsdtEquivalent} USDT. Tx: ${txHash.slice(0, 10)}...${txHash.slice(-8)}`
    );
    setTokenAmount('');

    // Refresh balances after successful unstake
    console.log('🔄 [handleUnstake] Refreshing balances...');
    setTimeout(() => {
      refreshAllData();
    }, 3000);

  } catch (error) {
    console.error('❌ [handleUnstake] Unstake error:', error);

    let errorMessage = 'Unstake failed. Please try again.';
    if (error.message) {
      if (error.message.includes('User rejected') || error.message.includes('denied')) {
        errorMessage = 'Transaction was cancelled by user';
      } else if (error.message.includes('insufficient balance')) {
        errorMessage = 'Insufficient token balance. Please check your wallet balance.';
      } else if (error.message.includes('insufficient allowance')) {
        errorMessage = 'Insufficient token allowance. Please approve tokens first.';
      } else if (error.message.includes('approve')) {
        errorMessage = 'Failed to approve tokens. Please try again.';
      } else if (error.message.includes('gas')) {
        errorMessage = 'Transaction failed due to gas issues. Please increase gas limit or try again.';
      } else if (error.message.includes('network') || error.message.includes('connection')) {
        errorMessage = 'Network error. Please check your connection and try again.';
      } else if (error.message.includes('not registered')) {
        errorMessage = 'You must be registered to unstake tokens. Please register first.';
      } else if (error.message.includes('slippage')) {
        errorMessage = 'Price changed during transaction. Please try again.';
      } else if (error.message.includes('cannot be converted to a BigInt')) {
        errorMessage = 'Invalid amount format. Please ensure the amount has no more than 6 decimal places.';
      } else {
        errorMessage = error.message;
      }
    }

    setError(errorMessage);
  } finally {
    setLoading(false);
    setApproving(false);
  }
};


  if (!wallet.isConnected) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Alert severity="warning">
          Please connect your wallet to access the unstake feature.
        </Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
          <TrendingDown size={24} style={{ marginRight: 8, verticalAlign: 'middle' }} />
          Unstake SafeMint Tokens
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Convert your SafeMint tokens back to USDT
        </Typography>
      </Box>

     
    

      {/* Token Price Card */}
      <Card sx={{ backgroundColor: 'white', boxShadow: 3, mb: 3 }}>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', color: 'primary.main' }}>
              <TrendingUp sx={{ mr: 1 }} />
              SafeMint Token Price
            </Typography>
           
          </Box>
          <Typography variant="h4" sx={{ mt: 1, color: 'success.main', fontWeight: 'bold' }}>
            ${parseFloat(tokenPrice).toFixed(6)} USDT
          </Typography>
         
        </CardContent>
      </Card>

      {/* Unstake Card */}
      <Card sx={{ backgroundColor: 'white', boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
            <TrendingDown sx={{ mr: 1 }} />
            Unstake SafeMint Tokens
          </Typography>

          <Grid container spacing={3}>
            {/* Token Input Section */}
            <Grid item xs={12}>
              <Typography variant="subtitle1" gutterBottom>
                SafeMint Tokens to Unstake
              </Typography>
              <TextField
                fullWidth
                label="SafeMint Token Amount"
                value={tokenAmount}
                onChange={(e) => setTokenAmount(e.target.value)}
                type="number"
                slotProps={{
                  htmlInput: { min: 0, step: 0.000001 },
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <Button
                          size="small"
                          onClick={() => setTokenAmount(tokenBalance)}
                          sx={{ minWidth: 'auto', px: 1 }}
                        >
                          MAX
                        </Button>
                      </InputAdornment>
                    ),
                  }
                }}
                helperText={`Available: ${formatNumber(parseFloat(tokenBalance || '0'), 6)} SMT`}
              />
            </Grid>

            {/* Arrow Divider */}
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <TrendingDown sx={{ fontSize: 40, color: 'primary.main' }} />
            </Grid>

            {/* USDT Output Section */}
            <Grid item xs={12}>
              <Typography variant="subtitle1" gutterBottom>
                USDT You'll Receive (Estimated)
              </Typography>
              <TextField
                fullWidth
                label="USDT Amount"
                value={estimatedUsdt}
                slotProps={{
                  input: {
                    readOnly: true,
                    endAdornment: (
                      <InputAdornment position="end">
                        <Chip
                          label={`$${parseFloat(tokenPrice).toFixed(6)} per SMT`}
                          size="small"
                          color="secondary"
                        />
                      </InputAdornment>
                    ),
                  }
                }}
                helperText={`1 SafeMint Token = $${parseFloat(tokenPrice).toFixed(6)} USDT`}
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
                  You Unstake:
                </Typography>
                <Typography variant="body1" fontWeight="bold">
                  {formatNumber(parseFloat(tokenAmount || '0'), 6)} SMT
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" color="text.secondary">
                  You Receive:
                </Typography>
                <Typography variant="body1" fontWeight="bold">
                  {formatNumber(parseFloat(estimatedUsdt || '0'), 6)} USDT
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

          {/* Unstake Button */}
          <Button
            fullWidth
            variant="contained"
            size="large"
            onClick={handleUnstake}
            disabled={loading || !tokenAmount || parseFloat(tokenAmount) <= 0}
            startIcon={loading ? <CircularProgress size={20} /> : <TrendingDown size={18} />}
            sx={{
              py: 1.5,
              fontSize: '1.1rem',
              background: 'linear-gradient(45deg, #f44336 30%, #d32f2f 90%)',
              '&:hover': {
                background: 'linear-gradient(45deg, #d32f2f 30%, #c62828 90%)',
              }
            }}
          >
            {loading ? 'Unstaking...' : 'Unstake Tokens'}
          </Button>

          {/* Info */}
          <Box sx={{ mt: 2, p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
            <Typography variant="body2" color="text.secondary">
              <strong>Note:</strong> This unstake converts your SafeMint tokens to USDT at the current market rate of $${parseFloat(tokenPrice).toFixed(6)} USDT per token.
              Prices are updated in real-time from the SafeMint contract. Make sure you have enough balance and the transaction will require gas fees.
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default UnstakePage;

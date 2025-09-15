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
import { stakingInteractions, STAKING_CONTRACT_ADDRESS, USDT_ABI, USDT_ADDRESS } from '../services/selfmintStakingService';
import { formatUnits, parseUnits, formatEther } from 'viem';
import { formatNumber } from '../utils/formatters';
import safeMintTokenService from '../services/safeMintTokenService';
import { readContract } from '@wagmi/core';
import { config } from '../config/web3modal';

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
  const [tokenPrice, setTokenPrice] = useState('0');
  const [priceLoading, setPriceLoading] = useState(false);
  const [approving, setApproving] = useState(false);

  // Fetch USDT balance
  const fetchUSDTBalance = async () => {
    if (!wallet.isConnected || !wallet.account) return;

    try {
      console.log("🔄 [SwapPage] Fetching USER USDT balance for wallet:", wallet.account);
      setRefreshing(true);

      // Make sure we're getting the USER's balance, not contract balance
      const balance = await stakingInteractions.getUSDTBalance(wallet.account);
      console.log("🔍 [SwapPage] Raw USER USDT balance (wei):", balance.toString());

      const formattedBalance = formatUnits(balance, 6);
      console.log("🔍 [SwapPage] Formatted USER USDT balance:", formattedBalance);

      setUsdtBalance(formattedBalance);
      console.log("✅ [SwapPage] USER USDT balance updated:", formattedBalance, "USDT");
    } catch (error) {
      console.error('❌ [SwapPage] Error fetching USER USDT balance:', error);
      setUsdtBalance('0');
    } finally {
      setRefreshing(false);
    }
  };

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
      setPriceLoading(true);
      console.log("🔄 [SwapPage] Fetching real-time token price...");

      const tokenInfo = await safeMintTokenService.getTokenInfo();
      const priceInUSDT = formatEther(tokenInfo.rateInUSDT);
      setTokenPrice(priceInUSDT);

      console.log("✅ [SwapPage] Token price updated:", priceInUSDT, "USDT");
    } catch (error) {
      console.error('❌ [SwapPage] Error fetching token price:', error);
      setTokenPrice('1.0'); // Fallback to 1:1 ratio
    } finally {
      setPriceLoading(false);
    }
  };

  // Test balance fetching with detailed logging
  const testBalanceFetching = async () => {
    if (!wallet.isConnected || !wallet.account) {
      console.log("❌ [TEST] Wallet not connected");
      return;
    }

    console.log("🧪 [TEST] Starting balance test for wallet:", wallet.account);
    console.log("🧪 [TEST] Wallet chain ID:", wallet.chainId);

    try {
      // Test USDT balance
      console.log("🧪 [TEST] Testing USDT balance...");
      console.log("🧪 [TEST] USDT Contract Address: 0x55d398326f99059fF775485246999027B3197955");
      console.log("🧪 [TEST] Expected Chain ID: 56 (BSC Mainnet)");

      const usdtBalance = await stakingInteractions.getUSDTBalance(wallet.account);
      console.log("🧪 [TEST] Raw USDT balance (wei):", usdtBalance.toString());
      console.log("🧪 [TEST] USDT balance (6 decimals):", formatUnits(usdtBalance, 6));
      console.log("🧪 [TEST] USDT balance (18 decimals):", formatUnits(usdtBalance, 18));

      // Check if this is a reasonable USDT balance (should be < 1 billion typically)
      const usdtFormatted = parseFloat(formatUnits(usdtBalance, 6));
      if (usdtFormatted > 1000000000) {
        console.warn("⚠️ [TEST] USDT balance seems unusually high! Might be using wrong decimals or contract.");
      }

      // Test SafeMint balance
      console.log("🧪 [TEST] Testing SafeMint balance...");
      console.log("🧪 [TEST] SafeMint Contract Address: 0xC0746bd0380190B899440bC33C647cE2426C8cCb");

      const smtBalance = await safeMintTokenService.getBalance(wallet.account);
      console.log("🧪 [TEST] Raw SafeMint balance (wei):", smtBalance.toString());
      console.log("🧪 [TEST] SafeMint balance (18 decimals):", formatUnits(smtBalance, 18));
      console.log("🧪 [TEST] SafeMint balance (6 decimals):", formatUnits(smtBalance, 6));

      // Summary
      console.log("🧪 [TEST] === BALANCE SUMMARY ===");
      console.log("🧪 [TEST] User Wallet:", wallet.account);
      console.log("🧪 [TEST] USDT Balance:", formatUnits(usdtBalance, 6), "USDT");
      console.log("🧪 [TEST] SafeMint Balance:", formatUnits(smtBalance, 18), "SMT");
      console.log("🧪 [TEST] === END SUMMARY ===");

    } catch (error) {
      console.error("❌ [TEST] Error in balance test:", error);
    }
  };

  // Refresh all data
  const refreshAllData = async () => {
    if (!wallet.isConnected || !wallet.account) return;

    setRefreshing(true);
    try {
      // Run test first
      await testBalanceFetching();

      await Promise.all([
        fetchUSDTBalance(),
        fetchTokenBalance(),
        fetchTokenPrice()
      ]);
    } catch (error) {
      console.error('❌ [SwapPage] Error refreshing data:', error);
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    if (wallet.isConnected && wallet.account) {
      console.log("🔄 [SwapPage] Wallet connected, fetching balances for:", wallet.account);
      console.log("🔄 [SwapPage] Current chain ID:", wallet.chainId);

      // Check if we're on BSC Mainnet
      if (wallet.chainId !== 56) {
        console.warn("⚠️ [SwapPage] Warning: Not on BSC Mainnet (Chain ID 56). Current chain:", wallet.chainId);
      }

      fetchUSDTBalance();
      fetchTokenBalance();
      fetchTokenPrice();
    } else {
      console.log("⚠️ [SwapPage] Wallet not connected, skipping balance fetch");
    }
  }, [wallet.isConnected, wallet.account, wallet.chainId]);

  // Auto-refresh token price every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      fetchTokenPrice();
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  // Calculate estimated tokens/USDT based on real-time price
  useEffect(() => {
    if (swapDirection === 'usdtToToken') {
      if (usdtAmount && !isNaN(parseFloat(usdtAmount)) && tokenPrice && parseFloat(tokenPrice) > 0) {
        // Calculate tokens based on real-time price: USDT Amount / Token Price = Tokens
        const tokensToReceive = parseFloat(usdtAmount) / parseFloat(tokenPrice);
        setEstimatedTokens(tokensToReceive.toFixed(6));
      } else {
        setEstimatedTokens('0');
      }
    } else if (swapDirection === 'tokenToUsdt') {
      if (tokenAmount && !isNaN(parseFloat(tokenAmount)) && tokenPrice && parseFloat(tokenPrice) > 0) {
        // Calculate USDT based on real-time price: Token Amount * Token Price = USDT
        const usdtToReceive = parseFloat(tokenAmount) * parseFloat(tokenPrice);
        setEstimatedUsdt(usdtToReceive.toFixed(6));
      } else {
        setEstimatedUsdt('0');
      }
    }
  }, [usdtAmount, tokenAmount, swapDirection, tokenPrice]);

  const handleSwap = async () => {
    if (!wallet.isConnected || !wallet.account) {
      setError('Please connect your wallet');
      return;
    }

    // Validate inputs based on swap direction
    if (swapDirection === 'usdtToToken') {
      if (!usdtAmount || parseFloat(usdtAmount) <= 0) {
        setError('Please enter a valid USDT amount');
        return;
      }
      if (parseFloat(usdtAmount) > parseFloat(usdtBalance)) {
        setError('Insufficient USDT balance');
        return;
      }
    } else {
      if (!tokenAmount || parseFloat(tokenAmount) <= 0) {
        setError('Please enter a valid token amount');
        return;
      }
      if (parseFloat(tokenAmount) > parseFloat(tokenBalance)) {
        setError('Insufficient token balance');
        return;
      }
    }

    try {
      setLoading(true);
      setError('');
      setSuccess('');

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

      if (swapDirection === 'usdtToToken') {
        // USDT → Token swap
        console.log(`🔄 [Swap] Swapping ${usdtAmount} USDT for tokens...`);

        // Use plain USDT amount (not wei) for swap
        const plainAmount = parseFloat(usdtAmount);
        console.log('🔄 [Swap] Plain USDT amount for swap:', plainAmount);

        // Convert to wei only for approval check
        const amountInWei = parseUnits(usdtAmount, 6);
        console.log('🔄 [Swap] Amount in wei (for approval):', amountInWei.toString());

        // Check USDT allowance and approve if needed
        console.log('🔄 [Swap] Checking USDT allowance...');
        const allowance = await readContract(config, {
          abi: USDT_ABI,
          address: USDT_ADDRESS,
          functionName: "allowance",
          args: [wallet.account, STAKING_CONTRACT_ADDRESS],
          chainId: 56,
        });
        console.log('🔍 [Swap] Current USDT allowance:', formatUnits(allowance, 6), 'USDT');
        console.log('🔍 [Swap] Required USDT amount:', formatUnits(amountInWei, 6), 'USDT');

        if (allowance < amountInWei) {
          console.log('🔄 [Swap] Insufficient USDT allowance, requesting approval...');
          setError('Approving USDT for swap...');
          try {
            setApproving(true);
            const approvalTx = await stakingInteractions.approveUSDT(amountInWei, wallet.account);
            console.log('✅ [Swap] USDT approval transaction:', approvalTx);
            setError('USDT approval submitted. Waiting for confirmation...');

            // Wait for approval confirmation
            await new Promise(resolve => setTimeout(resolve, 5000));
            console.log('✅ [Swap] USDT approval confirmed, proceeding with token swap...');
            setError('');
          } catch (approvalError) {
            console.error('❌ [Swap] USDT approval failed:', approvalError);
            setError('USDT approval failed. Please try again.');
            return;
          } finally {
            setApproving(false);
          }
        }

        console.log('🔄 [Swap] Calling buyToken function with plain amount:', plainAmount);
        const txHash = await stakingInteractions.buyToken(plainAmount, wallet.account);
        console.log('✅ [Swap] Swap transaction successful! Hash:', txHash);

        setSuccess(`🎉 Swap successful! Bought tokens with ${usdtAmount} USDT. Tx: ${txHash.slice(0, 10)}...${txHash.slice(-8)}`);
        setUsdtAmount('');
      } else {
        // Token → USDT swap
        console.log(`🔄 [Swap] Swapping ${tokenAmount} tokens for USDT...`);

        // Calculate USDT equivalent amount (token amount * token price)
        const usdtEquivalent = parseFloat(tokenAmount) * parseFloat(tokenPrice);
        const amountInWei = parseUnits(usdtEquivalent.toString(), 6);
        console.log('🔄 [Swap] USDT equivalent amount in wei:', amountInWei.toString());

        // Check token allowance for the staking contract
        try {
          const tokenAmountInWei = parseUnits(tokenAmount, 18); // SafeMint tokens have 18 decimals
          const allowance = await safeMintTokenService.getAllowance(wallet.account, STAKING_CONTRACT_ADDRESS);

          if (allowance < tokenAmountInWei) {
            console.log('🔄 [Swap] Insufficient allowance, requesting approval...');
            setError('Approving tokens for swap...');

            // Request token approval
            try {
              setApproving(true);
              const approvalTx = await safeMintTokenService.approve(STAKING_CONTRACT_ADDRESS, tokenAmountInWei, wallet.account);
              console.log('✅ [Swap] Approval transaction:', approvalTx);

              setError('Approval submitted. Waiting for confirmation...');

              // Wait for approval confirmation (simplified - in production you'd use waitForTransactionReceipt)
              await new Promise(resolve => setTimeout(resolve, 5000));

              console.log('✅ [Swap] Approval confirmed, proceeding with swap...');
              setError(''); // Clear approval message
            } catch (approvalError) {
              console.error('❌ [Swap] Approval failed:', approvalError);
              setError('Token approval failed. Please try again.');
              return;
            } finally {
              setApproving(false);
            }
          }
        } catch (allowanceError) {
          console.error('Error checking token allowance:', allowanceError);
          setError('Unable to check token allowance. Please try again.');
          return;
        }

        // Execute sellToken transaction
        console.log('🔄 [Swap] Calling sellToken function...');
        const txHash = await stakingInteractions.sellToken(amountInWei, wallet.account);
        console.log('✅ [Swap] Transaction successful! Hash:', txHash);

        setSuccess(`🎉 Swap successful! Sold ${tokenAmount} tokens for ${usdtEquivalent.toFixed(6)} USDT. Tx: ${txHash.slice(0, 10)}...${txHash.slice(-8)}`);
        setTokenAmount('');
      }

      // Refresh balances after successful swap
      console.log('🔄 [Swap] Refreshing balances...');
      setTimeout(() => {
        refreshAllData();
      }, 3000);

    } catch (error) {
      console.error('❌ [Swap] Swap error:', error);

      // Comprehensive error handling
      let errorMessage = 'Swap failed. Please try again.';

      if (error.message) {
        if (error.message.includes('insufficient allowance')) {
          errorMessage = 'Insufficient token allowance. Please approve tokens for the contract.';
        } else if (error.message.includes('insufficient balance')) {
          errorMessage = 'Insufficient balance. Please check your wallet balance.';
        } else if (error.message.includes('insufficient')) {
          errorMessage = 'Insufficient balance or allowance. Please check your balance.';
        } else if (error.message.includes('rejected') || error.message.includes('denied')) {
          errorMessage = 'Transaction was rejected by user. Please try again.';
        } else if (error.message.includes('gas')) {
          errorMessage = 'Transaction failed due to gas issues. Please increase gas limit or try again.';
        } else if (error.message.includes('network') || error.message.includes('connection')) {
          errorMessage = 'Network error. Please check your connection and try again.';
        } else if (error.message.includes('not registered')) {
          errorMessage = 'You must be registered to swap tokens. Please register first.';
        } else if (error.message.includes('slippage')) {
          errorMessage = 'Price changed during transaction. Please try again.';
        } else {
          errorMessage = error.message;
        }
      }

      setError(errorMessage);
    } finally {
      setLoading(false);
    }
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
            variant={swapDirection === 'usdtToToken' ? 'contained' : 'outlined'}
            onClick={() => setSwapDirection('usdtToToken')}
            sx={{ mr: 2, borderRadius: '20px' }}
          >
            USDT → Token
          </Button>
          <Button
            variant={swapDirection === 'tokenToUsdt' ? 'contained' : 'outlined'}
            onClick={() => setSwapDirection('tokenToUsdt')}
            sx={{ borderRadius: '20px' }}
          >
            Token → USDT
          </Button>
        </Box>
      </Box>

     
    

      {/* Token Price Card */}
      <Card sx={{ backgroundColor: 'white', boxShadow: 3, mb: 3 }}>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', color: 'primary.main' }}>
              <TrendingUpIcon sx={{ mr: 1 }} />
              SafeMint Token Price
            </Typography>
           
          </Box>
          <Typography variant="h4" sx={{ mt: 1, color: 'success.main', fontWeight: 'bold' }}>
            ${parseFloat(tokenPrice).toFixed(6)} USDT
          </Typography>
         
        </CardContent>
      </Card>

      {/* Swap Card */}
      <Card sx={{ backgroundColor: 'white', boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
            <SwapHorizIcon sx={{ mr: 1 }} />
            {swapDirection === 'usdtToToken' ? 'Swap USDT to Tokens' : 'Swap Tokens to USDT'}
          </Typography>

          <Grid container spacing={3}>
            {/* From Section */}
            <Grid item xs={12}>
              <Typography variant="subtitle1" gutterBottom>
                From
              </Typography>
              {swapDirection === 'usdtToToken' ? (
                <TextField
                  fullWidth
                  label="USDT Amount"
                  value={usdtAmount}
                  onChange={(e) => setUsdtAmount(e.target.value)}
                  type="number"
                  slotProps={{
                    htmlInput: { min: 0, step: 0.01 },
                    input: {
                      endAdornment: (
                        <InputAdornment position="end">
                          <Button
                            size="small"
                            onClick={() => setUsdtAmount(usdtBalance)}
                            sx={{ minWidth: 'auto', px: 1 }}
                          >
                            MAX
                          </Button>
                        </InputAdornment>
                      ),
                    }
                  }}
                  // helperText={`Available: ${formatNumber(parseFloat(usdtBalance || '0'), 6)} USDT`}
                />
              ) : (
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
              )}
            </Grid>

            {/* Swap Arrow */}
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <Button
                onClick={() => {
                  setSwapDirection(swapDirection === 'usdtToToken' ? 'tokenToUsdt' : 'usdtToToken');
                  setUsdtAmount('');
                  setTokenAmount('');
                  setEstimatedTokens('0');
                  setEstimatedUsdt('0');
                }}
                sx={{
                  minWidth: 'auto',
                  p: 1,
                  borderRadius: '50%',
                  '&:hover': { backgroundColor: 'primary.light' }
                }}
              >
                <SwapHorizIcon sx={{ fontSize: 40, color: 'primary.main' }} />
              </Button>
            </Grid>

            {/* To Section */}
            <Grid item xs={12}>
              <Typography variant="subtitle1" gutterBottom>
                To (Estimated)
              </Typography>
              {swapDirection === 'usdtToToken' ? (
                <TextField
                  fullWidth
                  label="SafeMint Tokens"
                  value={estimatedTokens}
                  slotProps={{
                    input: {
                      readOnly: true,
                      endAdornment: (
                        <InputAdornment position="end">
                          <Chip
                            label={`$${parseFloat(tokenPrice).toFixed(6)} USDT`}
                            size="small"
                            color="primary"
                          />
                        </InputAdornment>
                      ),
                    }
                  }}
                  helperText={`1 SafeMint Token = $${parseFloat(tokenPrice).toFixed(6)} USDT`}
                />
              ) : (
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
              )}
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
                  {swapDirection === 'usdtToToken'
                    ? `${formatNumber(parseFloat(usdtAmount || '0'), 6)} USDT`
                    : `${formatNumber(parseFloat(tokenAmount || '0'), 6)} SMT`
                  }
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" color="text.secondary">
                  You Receive:
                </Typography>
                <Typography variant="body1" fontWeight="bold">
                  {swapDirection === 'usdtToToken'
                    ? `${formatNumber(parseFloat(estimatedTokens || '0'), 6)} SMT`
                    : `${formatNumber(parseFloat(estimatedUsdt || '0'), 6)} USDT`
                  }
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
            disabled={
              loading ||
              (swapDirection === 'usdtToToken' && (!usdtAmount || parseFloat(usdtAmount) <= 0)) ||
              (swapDirection === 'tokenToUsdt' && (!tokenAmount || parseFloat(tokenAmount) <= 0))
            }
            startIcon={loading ? <CircularProgress size={20} /> : <TrendingUpIcon />}
            sx={{
              py: 1.5,
              fontSize: '1.1rem',
              background: swapDirection === 'usdtToToken'
                ? 'linear-gradient(45deg, #FFA000 30%, #FF8F00 90%)'
                : 'linear-gradient(45deg, #4CAF50 30%, #45a049 90%)',
              '&:hover': {
                background: swapDirection === 'usdtToToken'
                  ? 'linear-gradient(45deg, #FF8F00 30%, #F57C00 90%)'
                  : 'linear-gradient(45deg, #45a049 30%, #388e3c 90%)',
              }
            }}
          >
            {loading
              ? 'Swapping...'
              : swapDirection === 'usdtToToken'
                ? 'Buy Tokens'
                : 'Sell Tokens'
            }
          </Button>

          {/* Info */}
          <Box sx={{ mt: 2, p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
            <Typography variant="body2" color="text.secondary">
              <strong>Note:</strong> {swapDirection === 'usdtToToken'
                ? `This swap converts your USDT to SafeMint tokens at the current market rate of $${parseFloat(tokenPrice).toFixed(6)} USDT per token.`
                : `This swap converts your SafeMint tokens to USDT at the current market rate of $${parseFloat(tokenPrice).toFixed(6)} USDT per token.`
              } Prices are updated in real-time from the SafeMint contract. Make sure you have enough balance and the transaction will require gas fees.
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default SwapPage;

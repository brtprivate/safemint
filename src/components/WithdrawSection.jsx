import React, { useState } from 'react';
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography
} from '@mui/material';
import { parseUnits } from 'viem';
import { readContract, waitForTransactionReceipt } from '@wagmi/core';
const WithdrawSection = ({ wallet, chainId, mlmData, stakingInteractions, fetchMlmData, config, USDT_ABI, USDT_ADDRESS }) => {
  const [orderLoading, setOrderLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const totalAvailable =
    (mlmData.referralEarn || 0) +
    (mlmData.levelEarn || 0) +
    (mlmData.growthEarn || 0) +
    (mlmData.teamGrowthWallet || 0) +
    (mlmData.leaderEarn || 0) +
    (mlmData.developmentEarn || 0);

  const handleWithdrawClick = () => {
    setError('');
    setWithdrawAmount('');
    setOpenModal(true);
  };

  const handleConfirmWithdraw = async () => {
    console.log("💸 [handleWithdraw] Withdrawal process started");

    if (!wallet.isConnected || !wallet.account) {
      setError('Please connect your wallet');
      return;
    }

    if (chainId !== 56) {
      setError("Please switch to BSC Mainnet (Chain ID: 56) to withdraw earnings.");
      return;
    }

    const amount = Number(withdrawAmount);
    if (isNaN(amount) || amount <= 0) {
      setError('Please enter a valid withdrawal amount');
      return;
    }

    if (amount % 10 !== 0) {
      setError('Amount must be a multiple of 10');
      return;
    }

    if (amount > totalAvailable) {
      setError('Amount exceeds available balance');
      return;
    }

    try {
      setOrderLoading(true);
      setError('');
      setSuccess('');

      // Get USDT decimals
      const decimals = await readContract(config, {
        abi: USDT_ABI,
        address: USDT_ADDRESS,
        functionName: 'decimals',
        chainId: 56,
      });

      // Convert plain amount into Wei
      const amountInWei = parseUnits(amount.toString(), Number(decimals));
      console.log("💰 [handleWithdraw] Entered amount:", amount, "Amount in wei:", amountInWei.toString());

      // Call unstake
      console.log("📡 [handleWithdraw] Executing withdrawal transaction...");
      const txHash = await stakingInteractions.makeUnstake(amount, wallet.account);
      console.log("✅ [handleWithdraw] Withdrawal transaction successful!");

      setSuccess(`Withdrawal successful! Amount: $${amount.toFixed(2)} USDT. Tx: ${txHash.slice(0, 10)}...${txHash.slice(-8)}`);
      setOpenModal(false);

      // Refresh MLM data
      setTimeout(() => {
        fetchMlmData();
      }, 3000);
    } catch (err) {
      console.error("❌ [handleWithdraw] Withdrawal failed:", err);
      setError(`Withdrawal failed: ${err.message || err}`);
    } finally {
      setOrderLoading(false);
    }
  };

  return (
    <>
      {/* Withdraw Button */}
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
          disabled={orderLoading || totalAvailable <= 0}
          onClick={handleWithdrawClick}
        >
          {orderLoading ? <CircularProgress size={24} color="inherit" /> : 'Withdraw Earnings'}
        </Button>
      </Box>

      {/* Withdraw Modal */}
      <Dialog open={openModal} onClose={() => setOpenModal(false)} maxWidth="xs" fullWidth>
        <DialogTitle>Enter Withdrawal Amount</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            type="number"
            label="Amount (USDT)"
            value={withdrawAmount}
            onChange={(e) => setWithdrawAmount(e.target.value)}
            sx={{ mt: 2 }}
          />
          {error && (
            <Typography color="error" sx={{ mt: 1 }}>
              {error}
            </Typography>
          )}
          {success && (
            <Typography color="primary" sx={{ mt: 1 }}>
              {success}
            </Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenModal(false)}>Cancel</Button>
          <Button onClick={handleConfirmWithdraw} variant="contained" disabled={orderLoading}>
            {orderLoading ? <CircularProgress size={20} color="inherit" /> : 'Confirm'}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default WithdrawSection;

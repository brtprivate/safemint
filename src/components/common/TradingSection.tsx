import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

interface TradingSectionProps {
  buyAmount: string;
  setBuyAmount: (value: string) => void;
  sellAmount: string;
  setSellAmount: (value: string) => void;
  buyTokenAmount: string;
  setBuyTokenAmount: (value: string) => void;
  onBuy: () => void;
  onSell: () => void;
  onBuyToken: () => void;
  orderLoading: boolean;
}

const TradingSection: React.FC<TradingSectionProps> = ({
  buyAmount,
  setBuyAmount,
  sellAmount,
  setSellAmount,
  buyTokenAmount,
  setBuyTokenAmount,
  onBuy,
  onSell,
  onBuyToken,
  orderLoading
}) => {
  return (
    <Box sx={{ mb: { xs: 3, sm: 4 }, display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6" sx={{ color: 'primary.main', fontSize: { xs: '1rem', sm: '1.25rem' } }}>
        Trading Operations
      </Typography>

      {/* Stake Section */}
      <Box sx={{ p: 2, border: '1px solid', borderColor: 'primary.light', borderRadius: 1 }}>
        <Typography variant="subtitle1" sx={{ mb: 1, color: 'primary.main' }}>
          Stake USDT
        </Typography>
        <TextField
          fullWidth
          label="Stake Amount (USDT)"
          type="number"
          value={buyAmount}
          onChange={(e) => setBuyAmount(e.target.value)}
          sx={{ '& .MuiInputBase-input': { fontSize: { xs: '0.875rem', sm: '1rem' } }, mb: 1 }}
        />
        <Button
          fullWidth
          variant="contained"
          onClick={onBuy}
          disabled={orderLoading}
          sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
        >
          Stake USDT
        </Button>
      </Box>

      {/* Buy Token Section */}
      <Box sx={{ p: 2, border: '1px solid', borderColor: 'success.light', borderRadius: 1 }}>
        <Typography variant="subtitle1" sx={{ mb: 1, color: 'success.main' }}>
          Buy Tokens
        </Typography>
        <TextField
          fullWidth
          label="Buy Token Amount (USDT)"
          type="number"
          value={buyTokenAmount}
          onChange={(e) => setBuyTokenAmount(e.target.value)}
          sx={{ '& .MuiInputBase-input': { fontSize: { xs: '0.875rem', sm: '1rem' } }, mb: 1 }}
        />
        <Button
          fullWidth
          variant="contained"
          color="success"
          onClick={onBuyToken}
          disabled={orderLoading}
          sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
        >
          Buy Tokens
        </Button>
      </Box>

     
    </Box>
  );
};

export default TradingSection;

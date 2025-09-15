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
    <Box sx={{
      mb: { xs: 2, sm: 3, md: 4 },
      display: 'flex',
      flexDirection: 'column',
      gap: { xs: 1.5, sm: 2 }
    }}>
      {/* <Typography
        variant="h6"
        sx={{
          color: 'primary.main',
          fontSize: { xs: '0.9rem', sm: '1rem', md: '1.25rem' },
          fontWeight: 'bold',
          textAlign: { xs: 'center', sm: 'left' }
        }}
      >
        Trading Operations
      </Typography> */}

      {/* Stake Section */}
      <Box sx={{
        p: { xs: 1.5, sm: 2 },
        border: '1px solid rgba(0, 0, 0, 0.05)',
        borderRadius: { xs: 2, sm: 3 },
        backgroundColor: 'white',
        boxShadow: { xs: 1, sm: 2 }
      }}>
        <Typography
          variant="subtitle1"
          sx={{
            mb: { xs: 1, sm: 1.5 },
            color: 'primary.main',
            fontSize: { xs: '0.85rem', sm: '1rem' },
            fontWeight: 'medium'
          }}
        >
          Stake 
        </Typography>
        <TextField
          fullWidth
          label="Stake Amount (USDT)"
          type="number"
          value={buyAmount}
          onChange={(e) => {
            const value = e.target.value;
            // Only allow positive numbers and decimals
            if (value === '' || (/^\d*\.?\d*$/.test(value) && parseFloat(value) >= 0)) {
              setBuyAmount(value);
            }
          }}
          size={window.innerWidth < 600 ? "small" : "medium"}
          placeholder="Enter amount to stake"
          sx={{
            '& .MuiInputBase-input': {
              fontSize: { xs: '0.8rem', sm: '0.875rem', md: '1rem' }
            },
            mb: { xs: 1, sm: 1.5 },
            '& .MuiOutlinedInput-root': {
              borderRadius: { xs: 1.5, sm: 2 }
            }
          }}
        />
        <Button
          fullWidth
          variant="contained"
          onClick={onBuy}
          disabled={orderLoading}
          size={window.innerWidth < 600 ? "small" : "medium"}
          sx={{
            fontSize: { xs: '0.8rem', sm: '0.875rem', md: '1rem' },
            py: { xs: 1, sm: 1.5 },
            borderRadius: { xs: 1.5, sm: 2 },
            fontWeight: 'bold'
          }}
        >
          Stake USDT
        </Button>
      </Box>

      {/* Buy Token Section */}
      <Box sx={{
        p: { xs: 1.5, sm: 2 },
        border: '1px solid rgba(0, 0, 0, 0.05)',
        borderRadius: { xs: 2, sm: 3 },
        backgroundColor: 'white',
        boxShadow: { xs: 1, sm: 2 }
      }}>
        <Typography
          variant="subtitle1"
          sx={{
            mb: { xs: 1, sm: 1.5 },
            color: 'success.main',
            fontSize: { xs: '0.85rem', sm: '1rem' },
            fontWeight: 'medium'
          }}
        >
          Buy Tokens
        </Typography>
        <TextField
          fullWidth
          label="Buy Token Amount (USDT)"
          type="number"
          value={buyTokenAmount}
          onChange={(e) => {
            const value = e.target.value;
            // Only allow positive numbers and decimals
            if (value === '' || (/^\d*\.?\d*$/.test(value) && parseFloat(value) >= 0)) {
              setBuyTokenAmount(value);
            }
          }}
          size={window.innerWidth < 600 ? "small" : "medium"}
          placeholder="Enter USDT amount to buy tokens"
          sx={{
            '& .MuiInputBase-input': {
              fontSize: { xs: '0.8rem', sm: '0.875rem', md: '1rem' }
            },
            mb: { xs: 1, sm: 1.5 },
            '& .MuiOutlinedInput-root': {
              borderRadius: { xs: 1.5, sm: 2 }
            }
          }}
        />
        <Button
          fullWidth
          variant="contained"
          color="success"
          onClick={onBuyToken}
          disabled={orderLoading}
          size={window.innerWidth < 600 ? "small" : "medium"}
          sx={{
            fontSize: { xs: '0.8rem', sm: '0.875rem', md: '1rem' },
            py: { xs: 1, sm: 1.5 },
            borderRadius: { xs: 1.5, sm: 2 },
            fontWeight: 'bold'
          }}
        >
          Buy Tokens
        </Button>
      </Box>
    </Box>
  );
};

export default TradingSection;

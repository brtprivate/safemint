import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
  IconButton,
  InputAdornment,
  RadioGroup,
  FormControlLabel,
  Radio,
  Chip
} from '@mui/material';
import { Close as CloseIcon, AccountBalanceWallet as WalletIcon, Token as TokenIcon } from '@mui/icons-material';

interface WalletAddressModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: (walletAddress: string, stakeType: 'USDT' | 'SafeMint') => void;
  currentWalletAddress: string;
  isLoading?: boolean;
}

const WalletAddressModal: React.FC<WalletAddressModalProps> = ({
  open,
  onClose,
  onConfirm,
  currentWalletAddress,
  isLoading = false
}) => {
  const [walletAddress, setWalletAddress] = useState('');
  const [stakeType, setStakeType] = useState<'USDT' | 'SafeMint'>('USDT');
  const [error, setError] = useState('');

  const handleClose = () => {
    setWalletAddress('');
    setStakeType('USDT');
    setError('');
    onClose();
  };

  const handleConfirm = () => {
    const address = walletAddress.trim();
    
    if (!address) {
      setError('Please enter a wallet address');
      return;
    }

    // Basic Ethereum address validation
    if (!/^0x[a-fA-F0-9]{40}$/.test(address)) {
      setError('Please enter a valid Ethereum wallet address');
      return;
    }

    onConfirm(address, stakeType);
  };

  const handleUseCurrentWallet = () => {
    onConfirm(currentWalletAddress, stakeType);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
          border: '1px solid rgba(0, 0, 0, 0.08)'
        }
      }}
    >
      <DialogTitle sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        pb: 1,
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white'
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <WalletIcon />
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Staking Options
          </Typography>
        </Box>
        <IconButton 
          onClick={handleClose} 
          size="small" 
          sx={{ color: 'white' }}
          disabled={isLoading}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ pt: 3, pb: 2 }}>
        {/* Staking Type Selection */}
        <Box sx={{ mb: 3 }}>
          <RadioGroup
            value={stakeType}
            onChange={(e) => setStakeType(e.target.value as 'USDT' | 'SafeMint')}
            sx={{ gap: 1 }}
          >
            <FormControlLabel
              value="USDT"
              control={<Radio />}
              label={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Chip 
                    label="USDT" 
                    color="primary" 
                    size="small"
                    sx={{ fontWeight: 600 }}
                  />
                </Box>
              }
              sx={{ 
                border: '1px solid', 
                borderColor: stakeType === 'USDT' ? 'primary.main' : 'divider',
                borderRadius: 2, 
                p: 1.5, 
                m: 0,
                backgroundColor: stakeType === 'USDT' ? 'rgba(25, 118, 210, 0.04)' : 'transparent'
              }}
            />
            <FormControlLabel
              value="SafeMint"
              control={<Radio />}
              label={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Chip 
                    label="SafeMint" 
                    color="secondary" 
                    size="small"
                    sx={{ fontWeight: 600 }}
                  />
                </Box>
              }
              sx={{ 
                border: '1px solid', 
                borderColor: stakeType === 'SafeMint' ? 'secondary.main' : 'divider',
                borderRadius: 2, 
                p: 1.5, 
                m: 0,
                backgroundColor: stakeType === 'SafeMint' ? 'rgba(156, 39, 176, 0.04)' : 'transparent'
              }}
            />
          </RadioGroup>
        </Box>

        {/* Wallet Address Input */}
        <TextField
          fullWidth
          label="Wallet Address (Optional)"
          placeholder="0x..."
          value={walletAddress}
          onChange={(e) => {
            setWalletAddress(e.target.value);
            setError('');
          }}
          error={!!error}
          helperText={error || 'Leave empty to use current wallet'}
          disabled={isLoading}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <WalletIcon color="action" />
              </InputAdornment>
            ),
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 2,
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'primary.main',
              },
            },
          }}
        />
      </DialogContent>

      <DialogActions sx={{ p: 3, pt: 1, gap: 1 }}>
        <Button
          onClick={handleClose}
          disabled={isLoading}
          sx={{
            borderRadius: 2,
            textTransform: 'none',
            fontWeight: 600,
            px: 3
          }}
        >
          Cancel
        </Button>
        
        <Button
          onClick={handleUseCurrentWallet}
          variant="outlined"
          disabled={isLoading}
          sx={{
            borderRadius: 2,
            textTransform: 'none',
            fontWeight: 600,
            px: 3,
            borderColor: 'primary.main',
            color: 'primary.main',
            '&:hover': {
              borderColor: 'primary.dark',
              backgroundColor: 'rgba(25, 118, 210, 0.04)'
            }
          }}
        >
          Use Current
        </Button>

        <Button
          onClick={handleConfirm}
          variant="contained"
          disabled={isLoading || !walletAddress.trim()}
          sx={{
            borderRadius: 2,
            textTransform: 'none',
            fontWeight: 600,
            px: 3,
            background: stakeType === 'SafeMint' 
              ? 'linear-gradient(135deg, #9c27b0 0%, #673ab7 100%)'
              : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            '&:hover': {
              background: stakeType === 'SafeMint'
                ? 'linear-gradient(135deg, #8e24aa 0%, #5e35b1 100%)'
                : 'linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)',
            },
            '&:disabled': {
              background: 'rgba(0, 0, 0, 0.12)',
            }
          }}
        >
          {isLoading ? 'Processing...' : 'Stake'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default WalletAddressModal;

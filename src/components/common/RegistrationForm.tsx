import React from 'react';
import {
  Container,
  Card,
  Typography,
  Alert,
  TextField,
  Button,
  Chip,
  Box,
} from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LinkIcon from '@mui/icons-material/Link';

interface RegistrationFormProps {
  referralCode: string;
  setReferralCode: (value: string) => void;
  onRegister: () => void;
  isLoading: boolean;
  error: string;
  success: string;
  setError: (value: string) => void;
  setSuccess: (value: string) => void;
  isFromReferralLink?: boolean;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({
  referralCode,
  setReferralCode,
  onRegister,
  isLoading,
  error,
  success,
  setError,
  setSuccess,
  isFromReferralLink = false
}) => {
  return (
    <Container maxWidth="sm" sx={{ py: { xs: 2, sm: 3 } }}>
      <Card sx={{ p: { xs: 2, sm: 3 }, boxShadow: 3 }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            color: 'primary.main',
            fontWeight: 'bold',
            mb: { xs: 2, sm: 3 },
            fontSize: { xs: '1.25rem', sm: '1.5rem' }
          }}
        >
          Register
        </Typography>

        {isFromReferralLink && referralCode && (
          <Box sx={{ mb: 2 }}>
            <Alert severity="info" sx={{ mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LinkIcon fontSize="small" />
                <Typography variant="body2">
                  You were invited! Referral code auto-detected from link.
                </Typography>
              </Box>
            </Alert>
            <Chip
              label={`Referrer: ${referralCode.slice(0, 6)}...${referralCode.slice(-4)}`}
              color="primary"
              variant="outlined"
              size="small"
            />
          </Box>
        )}

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: { xs: 2, sm: 3 }, fontSize: { xs: '0.875rem', sm: '1rem' } }}
        >
          {isFromReferralLink && referralCode
            ? "Your referral code has been automatically filled. You can change it if needed."
            : "Enter a referral code to get started."
          }
        </Typography>

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

        <TextField
          fullWidth
          label="Referral Code"
          value={referralCode}
          onChange={(e) => setReferralCode(e.target.value)}
          placeholder="0x..."
          helperText={isFromReferralLink ? "Auto-filled from referral link" : "Enter the wallet address of your referrer"}
          sx={{ mb: 2, '& .MuiInputBase-input': { fontSize: { xs: '0.875rem', sm: '1rem' } } }}
        />

        <Button
          fullWidth
          variant="contained"
          startIcon={<PersonAddIcon />}
          onClick={onRegister}
          disabled={isLoading || !referralCode}
          sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
        >
          {isLoading ? 'Registering...' : 'Register'}
        </Button>

        {!referralCode && (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 2, textAlign: 'center', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
          >
            💡 Need a referral code? Ask a friend or find one in the community!
          </Typography>
        )}
      </Card>
    </Container>
  );
};

export default RegistrationForm;

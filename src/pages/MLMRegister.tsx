import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  Paper,
  TextField,
  Alert,
  CircularProgress,
  Stack,
  Card,
  CardContent,
  Fade,
  Zoom,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useMLM } from '../context/MLMContext';
import { useWallet } from '../context/WalletContext';
import { OWNER_ADDRESS, DEFAULT_REFERRAL_ADDRESS } from '../config';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import SecurityIcon from '@mui/icons-material/Security';

const MLMRegister: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const wallet = useWallet();
  const mlm = useMLM();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [referrerAddress, setReferrerAddress] = useState<string>('');
  const [registrationStatus, setRegistrationStatus] = useState<'idle' | 'registering' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [activeStep, setActiveStep] = useState(0);

  // Get referrer from URL params or use owner address as default
  useEffect(() => {
    const refParam = searchParams.get('ref');
    if (refParam) {
      setReferrerAddress(refParam);
    } else {
      // Always use owner address as default referrer when no referrer provided
      setReferrerAddress(OWNER_ADDRESS);
    }
  }, [searchParams]);

  // Check registration status
  useEffect(() => {
    if (wallet.isConnected && mlm.isMLMRegistered) {
      navigate('/usd/safemint');
    }
  }, [wallet.isConnected, mlm.isMLMRegistered, navigate]);

  // Update stepper based on connection status
  useEffect(() => {
    if (!wallet.isConnected) {
      setActiveStep(0);
    } else if (!wallet.isCorrectNetwork) {
      setActiveStep(1);
    } else if (!mlm.isMLMRegistered) {
      setActiveStep(2);
    } else {
      setActiveStep(3);
    }
  }, [wallet.isConnected, wallet.isCorrectNetwork, mlm.isMLMRegistered]);

  const handleRegister = async () => {
    if (!wallet.isConnected || !wallet.isCorrectNetwork) return;

    try {
      setRegistrationStatus('registering');
      setErrorMessage('');

      const success = await mlm.registerMLM(referrerAddress || undefined);
      
      if (success) {
        setRegistrationStatus('success');
        setTimeout(() => {
          navigate('/usd/safemint');
        }, 2000);
      } else {
        setRegistrationStatus('error');
        setErrorMessage('Registration failed. Please try again.');
      }
    } catch (error: any) {
      setRegistrationStatus('error');
      setErrorMessage(error.message || 'Registration failed. Please try again.');
    }
  };

  const steps = [
    {
      label: 'Connect Wallet',
      description: 'Connect your Web3 wallet to get started',
      completed: wallet.isConnected,
      action: wallet.connectWallet,
      actionText: 'Connect Wallet',
      icon: <AccountBalanceWalletIcon />
    },
    {
      label: 'Switch Network',
      description: 'Switch to BSC Mainnet for platform registration',
      completed: wallet.isCorrectNetwork,
      action: wallet.switchToCorrectNetwork,
      actionText: 'Switch Network',
      icon: <SecurityIcon />
    },
    {
      label: 'Register for Platform',
      description: 'Complete your platform registration',
      completed: mlm.isMLMRegistered,
      action: handleRegister,
      actionText: 'Register Now',
      icon: <PersonAddIcon />
    },
    {
      label: 'Welcome to Platform',
      description: 'Registration complete! Welcome to the platform',
      completed: mlm.isMLMRegistered,
      action: () => navigate('/usd/safemint'),
      actionText: 'Go to Dashboard',
      icon: <CheckCircleIcon />
    }
  ];

  return (
    <Container maxWidth="md" sx={{
      py: 4,
      pb: isMobile ? 12 : 4 // Extra bottom padding for mobile bottom nav
    }}>
      {/* Header */}
      <Fade in={true} timeout={1000}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ color: '#FFA000', fontWeight: 600 }}>
            Join Investment Platform
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Register to start building your network and earning commissions
          </Typography>
        </Box>
      </Fade>

      {/* Referrer Info */}
      <Zoom in={true} timeout={1500}>
        <Alert severity="info" sx={{ mb: 4 }}>
          {referrerAddress ? (
            <>
              <Typography variant="body1">
                <strong>Referrer:</strong> {referrerAddress}
              </Typography>
              <Typography variant="body2">
                You're being referred by this address. They will earn commissions from your network activity.
              </Typography>
            </>
          ) : (
            <>
              <Typography variant="body1">
                <strong>Owner Referrer:</strong> {OWNER_ADDRESS.slice(0, 12)}...{OWNER_ADDRESS.slice(-10)}
              </Typography>
              <Typography variant="body2">
                No referrer link provided. The platform owner address will be used as your referrer.
              </Typography>
            </>
          )}
        </Alert>
      </Zoom>

      {/* Registration Steps */}
      <Fade in={true} timeout={2000}>
        <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ mb: 3, color: '#1b5e20' }}>
            Registration Process
          </Typography>

          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel
                  optional={
                    step.completed ? (
                      <Typography variant="caption" color="success.main">
                        Completed
                      </Typography>
                    ) : null
                  }
                  StepIconComponent={() => (
                    <Box sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      backgroundColor: step.completed ? '#4caf50' : activeStep === index ? '#FFA000' : '#e0e0e0',
                      color: 'white'
                    }}>
                      {step.icon}
                    </Box>
                  )}
                >
                  <Typography variant="h6" sx={{ fontWeight: 500 }}>
                    {step.label}
                  </Typography>
                </StepLabel>
                <StepContent>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    {step.description}
                  </Typography>
                  
                  {index === 2 && (
                    <>
                      {/* Default Referral Address Display */}
                      <Box sx={{
                        mb: 3,
                        p: 2,
                        bgcolor: '#1a3a3a',
                        border: '1px solid #4fc3f7',
                        borderRadius: 2
                      }}>
                        <Typography variant="subtitle2" sx={{ color: '#4fc3f7', mb: 1, fontWeight: 'bold' }}>
                          🔗 Default USDStack Referrer
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#ffffff',
                            fontFamily: 'monospace',
                            bgcolor: '#2d2d2d',
                            p: 1,
                            borderRadius: 1,
                            wordBreak: 'break-all'
                          }}
                        >
                          {OWNER_ADDRESS}
                        </Typography>
                        <Typography variant="caption" sx={{ color: '#b0b0b0', mt: 1, display: 'block' }}>
                          Platform owner address will be used as your referrer if no custom referrer is provided below.
                        </Typography>
                      </Box>

                      <Box sx={{ mb: 2 }}>
                        <TextField
                          fullWidth
                          label="Custom Referrer Address (Optional)"
                          value={referrerAddress}
                          onChange={(e) => setReferrerAddress(e.target.value)}
                          placeholder="Enter custom referrer address or leave empty to use default"
                          helperText={
                            referrerAddress && referrerAddress !== OWNER_ADDRESS
                              ? "✅ Custom referrer address will be used"
                              : "💡 Leave empty to use the platform owner as your referrer"
                          }
                          disabled={registrationStatus === 'registering'}
                          InputProps={{
                            sx: {
                              fontFamily: 'monospace',
                              fontSize: '0.9rem',
                            }
                          }}
                        />
                      </Box>
                    </>
                  )}

                  {registrationStatus === 'error' && (
                    <Alert severity="error" sx={{ mb: 2 }}>
                      {errorMessage}
                    </Alert>
                  )}

                  {registrationStatus === 'success' && (
                    <Alert severity="success" sx={{ mb: 2 }}>
                      Registration successful! Redirecting to dashboard...
                    </Alert>
                  )}

                  <Box sx={{ mb: 2 }}>
                    <Button
                      variant="contained"
                      onClick={step.action}
                      disabled={
                        step.completed ||
                        (index === 1 && !wallet.isConnected) ||
                        (index === 2 && (!wallet.isConnected || !wallet.isCorrectNetwork)) ||
                        registrationStatus === 'registering'
                      }
                      startIcon={
                        registrationStatus === 'registering' && index === 2 ? 
                        <CircularProgress size={20} /> : 
                        step.icon
                      }
                      sx={{
                        backgroundColor: step.completed ? '#4caf50' : '#FFA000',
                        '&:hover': {
                          backgroundColor: step.completed ? '#45a049' : '#FF8F00'
                        }
                      }}
                    >
                      {step.completed ? 'Completed' : 
                       registrationStatus === 'registering' && index === 2 ? 'Registering...' : 
                       step.actionText}
                    </Button>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Paper>
      </Fade>

      {/* Platform Benefits */}
      <Fade in={true} timeout={2500}>
        <Card sx={{ background: 'linear-gradient(135deg, rgba(255, 193, 7, 0.05) 0%, rgba(255, 215, 0, 0.1) 100%)' }}>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ color: '#FFA000', fontWeight: 600 }}>
              Why Join Our Investment Platform?
            </Typography>
            
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AccountTreeIcon sx={{ color: '#1b5e20', mr: 2 }} />
                <Typography variant="body1">
                  <strong>Build Your Network:</strong> Invite friends and family to create multiple income streams
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <CheckCircleIcon sx={{ color: '#1b5e20', mr: 2 }} />
                <Typography variant="body1">
                  <strong>Earn Commissions:</strong> Get rewarded for every person in your downline network
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <SecurityIcon sx={{ color: '#1b5e20', mr: 2 }} />
                <Typography variant="body1">
                  <strong>Blockchain Security:</strong> All transactions are transparent and secure on the blockchain
                </Typography>
              </Box>
            </Stack>

            <Box sx={{ mt: 3, textAlign: 'center' }}>
              <Button
                variant="outlined"
                onClick={() => navigate('/mlm')}
                sx={{
                  borderColor: '#FFA000',
                  color: '#FFA000',
                  '&:hover': {
                    borderColor: '#FF8F00',
                    backgroundColor: 'rgba(255, 160, 0, 0.1)'
                  }
                }}
              >
                Learn More About Platform
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Fade>
    </Container>
  );
};

export default MLMRegister;

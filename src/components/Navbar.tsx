import React from 'react';
import Logo from './common/Logo';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Chip,
  Container,
  useTheme,
  useMediaQuery,
  Avatar,
  BottomNavigation,
  BottomNavigationAction,
  Paper
} from '@mui/material';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { useWallet } from '../context/WalletContext';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import HistoryIcon from '@mui/icons-material/History';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import DashboardIcon from '@mui/icons-material/Dashboard';

const Navbar: React.FC = () => {
  const wallet = useWallet();
  const { open } = useWeb3Modal();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  // Check if a route is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Gradient background for AppBar
  const appBarStyle = {
    background: 'linear-gradient(90deg, #FFA000 0%, #FF8F00 100%)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
  };



  return (
    <>
      <AppBar position="sticky" sx={appBarStyle} elevation={0}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: { xs: 64, sm: 70 } }}>
            {/* Logo */}
            <Typography
              variant="h6"
              component={RouterLink}
              to="/"
              sx={{
                flexGrow: 1,
                fontWeight: 700,
                textDecoration: 'none',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                fontSize: { xs: '1rem', sm: '1.25rem' }
              }}
            >
              <Logo size="navbar" sx={{ mr: 1 }} />
              SafeMint
            </Typography>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <Button
                  color="inherit"
                  component={RouterLink}
                  to="/"
                  sx={{
                    borderRadius: '20px',
                    px: 2,
                    backgroundColor: isActive('/') ? 'rgba(255, 255, 255, 0.15)' : 'transparent'
                  }}
                  startIcon={<HomeIcon />}
                >
                  Dashboard
                </Button>
{/* 
                <Button
                  color="inherit"
                  component={RouterLink}
                  to="/dashboard"
                  sx={{
                    borderRadius: '20px',
                    px: 2,
                    backgroundColor: isActive('/dashboard') ? 'rgba(255, 255, 255, 0.15)' : 'transparent'
                  }}
                  startIcon={<DashboardIcon />}
                >
                  New Dashboard
                </Button> */}

                {wallet.isConnected && (
                  <>
                    <Button
                      color="inherit"
                      component={RouterLink}
                      to="/history"
                      sx={{
                        borderRadius: '20px',
                        px: 2,
                        backgroundColor: isActive('/history') ? 'rgba(255, 255, 255, 0.15)' : 'transparent'
                      }}
                      startIcon={<HistoryIcon />}
                    >
                      History
                    </Button>

                    <Button
                      color="inherit"
                      component={RouterLink}
                      to="/swap"
                      sx={{
                        borderRadius: '20px',
                        px: 2,
                        backgroundColor: isActive('/swap') ? 'rgba(255, 255, 255, 0.15)' : 'transparent'
                      }}
                      startIcon={<SwapHorizIcon />}
                    >
                      Swap
                    </Button>
                  </>
                )}
              </Box>
            )}

            {/* Wallet Connection */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 2 }}>
              {wallet.isConnected && !isMobile && (
                <Chip
                  avatar={<Avatar sx={{ bgcolor: theme.palette.success.main, width: 32, height: 32 }}>
                    U
                  </Avatar>}
                  label={`${wallet.account?.substring(0, 6)}...${wallet.account?.substring(wallet.account.length - 4)}`}
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    fontSize: '0.875rem'
                  }}
                  variant="outlined"
                />
              )}

              {wallet.isConnected ? (
                <Button
                  color="inherit"
                  variant="outlined"
                  onClick={wallet.disconnectWallet}
                  sx={{
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                    '&:hover': { borderColor: 'white', backgroundColor: 'rgba(255, 255, 255, 0.1)' },
                    px: { xs: 1, sm: 2 },
                    fontSize: { xs: '0.75rem', sm: '0.875rem' }
                  }}
                  startIcon={!isMobile ? <LogoutIcon /> : undefined}
                >
                  {isMobile ? 'Exit' : 'Disconnect'}
                </Button>
              ) : (
                <Button
                  variant="contained"
                  onClick={() => open()}
                  sx={{
                    backgroundColor: '#FFA000',
                    '&:hover': { backgroundColor: '#FF8F00' },
                    px: { xs: 1, sm: 2 },
                    fontSize: { xs: '0.75rem', sm: '0.875rem' }
                  }}
                  startIcon={!isMobile ? <AccountBalanceWalletIcon /> : undefined}
                >
                  {isMobile ? 'Connect' : 'Connect Wallet'}
                </Button>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Bottom Navigation */}
      {isMobile && wallet.isConnected && (
        <Paper
          sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            borderTop: '1px solid #333'
          }}
          elevation={3}
        >
          <BottomNavigation
            value={location.pathname}
            sx={{
              bgcolor: '#FFA000',
              '& .MuiBottomNavigationAction-root': {
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '0.7rem',
                minWidth: 'auto',
                padding: '6px 8px',
                '&.Mui-selected': {
                  color: '#ffffff',
                  fontSize: '0.75rem'
                }
              }
            }}
            showLabels
          >
            <BottomNavigationAction
              label="Dashboard"
              value="/"
              icon={<HomeIcon sx={{ fontSize: 18 }} />}
              onClick={() => navigate('/')}
            />
            {/* <BottomNavigationAction
              label="New"
              value="/dashboard"
              icon={<DashboardIcon sx={{ fontSize: 18 }} />}
              onClick={() => navigate('/dashboard')}
            /> */}
            <BottomNavigationAction
              label="History"
              value="/history"
              icon={<HistoryIcon sx={{ fontSize: 18 }} />}
              onClick={() => navigate('/history')}
            />
            <BottomNavigationAction
              label="Swap"
              value="/swap"
              icon={<SwapHorizIcon sx={{ fontSize: 18 }} />}
              onClick={() => navigate('/swap')}
            />
          </BottomNavigation>
        </Paper>
      )}
    </>
  );
};

export default Navbar;

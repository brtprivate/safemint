import React from 'react';
import Logo from './common/Logo';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Chip,
  Tooltip,
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
import { useMLM } from '../context/MLMContext';
import { useWeb3Modal, useWeb3ModalState } from '@web3modal/wagmi/react';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LogoutIcon from '@mui/icons-material/Logout';
import CasinoIcon from '@mui/icons-material/Casino';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleIcon from '@mui/icons-material/People';
import DiamondIcon from '@mui/icons-material/Diamond';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

interface NavbarProps {
  selectedSection?: string;
  onSectionChange?: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ selectedSection, onSectionChange }) => {
  // Use only ThirdWeb MLM Context for wallet connections
  const wallet = useWallet();
  const mlm = useMLM();
  const { open } = useWeb3Modal();
  const { open: isModalOpen } = useWeb3ModalState();
  const navigate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  // Check if a route is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Check if we're in gaming or MLM section
  const isGamingSection = location.pathname.startsWith('/usd/gaming');
  const isMLMSection = location.pathname.startsWith('/usd/mlm');

  // Use Web3Modal for all wallet operations (MLM and Gaming)
  const currentWallet = {
    account: wallet.account,
    isConnected: wallet.isConnected,
    connectWallet: wallet.connectWallet,
    disconnectWallet: wallet.disconnectWallet,
    loading: wallet.loading,
    isRegistered: mlm.isMLMRegistered,
    isCorrectNetwork: wallet.isCorrectNetwork,
    switchToCorrectNetwork: wallet.switchToCorrectNetwork
  };

  // Gradient background for AppBar - different for MLM and Gaming
  const appBarStyle = {
    background: isMLMSection
      ? 'linear-gradient(90deg, #FFA000 0%, #FF8F00 100%)'
      : 'linear-gradient(90deg, #6200ea 0%, #3f51b5 100%)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
  };

  // Get page title based on current section
  const getPageTitle = () => {
    if (isMLMSection) {
      return 'safemint';
    } else if (isGamingSection) {
      return 'safemint Gaming';
    }
    return 'safemint';
  };



  return (
    <>
      <AppBar position="sticky" sx={appBarStyle} elevation={0}>
        <Container maxWidth="lg" sx={{ px: { xs: 0.25, sm: 0.5, md: 1 } }}>
          <Toolbar disableGutters sx={{ minHeight: { xs: 120, sm: 130 } }}>
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
                fontSize: { xs: '0.9rem', sm: '1.1rem' }
              }}
            >
              <Logo
                size="navbar"
                sx={{ mr: { xs: 0.2, sm: 0.3 } }}
              />
              <Box component="span" sx={{
                ml: { xs: 0.2, sm: 0.3 },
                display: { xs: 'none', sm: 'block' }
              }}>
                {getPageTitle()}
              </Box>
              {isMobile && (
                <Box component="span" sx={{ ml: 0.2, fontSize: '0.8rem' }}>
                  safemint
                </Box>
              )}
            </Typography>

            {/* Navigation - Show only essential items on mobile */}
            {!isMobile && (
              <Box sx={{
                display: 'flex',
                gap: 2,
                alignItems: 'center'
              }}>
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
                  Home
                </Button>

                {/* {currentWallet.isConnected && (
                  <>
                    {!currentWallet.isRegistered && (
                      <Button
                        color="inherit"
                        component={RouterLink}
                        to={isMLMSection ? "/usd/mlm/register" : "/usd/gaming/register"}
                        sx={{
                          borderRadius: '20px',
                          px: 2,
                          backgroundColor: isActive(isMLMSection ? '/usd/mlm/register' : '/usd/gaming/register') ? 'rgba(255, 255, 255, 0.15)' : 'transparent'
                        }}
                        startIcon={<PersonAddIcon />}
                      >
                        {isMLMSection ? "Join Platform" : "Register"}
                      </Button>
                    )}

                    {isGamingSection && (
                      <>
                        <Button
                          color="inherit"
                          component={RouterLink}
                          to="/usd/gaming/dashboard"
                          sx={{
                            borderRadius: '20px',
                            px: 2,
                            backgroundColor: isActive('/usd/gaming/dashboard') ? 'rgba(255, 255, 255, 0.15)' : 'transparent'
                          }}
                          startIcon={<DashboardIcon />}
                        >
                          Dashboard
                        </Button>

                        <Button
                          color="inherit"
                          component={RouterLink}
                          to="/usd/gaming/pools"
                          sx={{
                            borderRadius: '20px',
                            px: 2,
                            backgroundColor: isActive('/usd/gaming/pools') ? 'rgba(255, 255, 255, 0.15)' : 'transparent'
                          }}
                          startIcon={<CasinoIcon />}
                        >
                          Pools
                        </Button>
                      </>
                    )}
                  </>
                )} */}
              </Box>
            )}

            {/* Wallet Connection */}
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              gap: { xs: 0.3, sm: 0.5, md: 1 },
              ml: { xs: 0.3, sm: 0.5, md: 1 }
            }}>
              {currentWallet.isConnected && (
                <>
                  {/* {!currentWallet.isCorrectNetwork && (
                    <Tooltip title="Click to switch to the correct network">
                      <Chip
                        label={isMobile ? "Wrong Net" : "Wrong Network"}
                        color="error"
                        variant="outlined"
                        onClick={currentWallet.switchToCorrectNetwork}
                        clickable
                        sx={{
                          borderColor: 'white',
                          color: 'white',
                          '& .MuiChip-label': { px: { xs: 0.5, sm: 1 } },
                          backgroundColor: 'rgba(244, 67, 54, 0.2)',
                          fontSize: { xs: '0.7rem', sm: '0.875rem' }
                        }}
                      />
                    </Tooltip>
                  )} */}
                  {!isMobile && (
                    <Chip
                      avatar={<Avatar sx={{
                        bgcolor: currentWallet.isRegistered ? theme.palette.success.main : theme.palette.grey[500],
                        width: 32,
                        height: 32,
                        fontSize: '0.875rem'
                      }}>
                        U
                      </Avatar>}
                      label={`${currentWallet.account?.substring(0, 6)}...${currentWallet.account?.substring(currentWallet.account.length - 4)}`}
                      sx={{
                        borderColor: 'white',
                        color: 'white',
                        '& .MuiChip-label': { px: 1 },
                        fontSize: '0.875rem'
                      }}
                      variant="outlined"
                    />
                  )}
                </>
              )}

              {currentWallet.isConnected ? (
                <Button
                  color="inherit"
                  variant="outlined"
                  onClick={currentWallet.disconnectWallet}
                  sx={{
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                    '&:hover': { borderColor: 'white', backgroundColor: 'rgba(255, 255, 255, 0.1)' },
                    px: { xs: 1, sm: 2 },
                    fontSize: { xs: '0.7rem', sm: '0.875rem' },
                    minWidth: 'auto'
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
                    fontSize: { xs: '0.7rem', sm: '0.875rem' },
                    minWidth: 'auto'
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

      {/* Mobile Bottom Navigation - MLM Sidebar Items */}
      {isMobile && isMLMSection && currentWallet.isConnected && currentWallet.isRegistered && !isModalOpen && (
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
          <Box sx={{
            overflowX: 'auto',
            '&::-webkit-scrollbar': { display: 'none' },
            scrollbarWidth: 'none'
          }}>
            <BottomNavigation
              value={new URLSearchParams(location.search).get('section') || 'dashboard'}
              sx={{
                bgcolor: '#FFA000',
                '& .MuiBottomNavigationAction-root': {
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '0.7rem',
                  minWidth: 'auto',
                  padding: '6px 8px',
                  flex: 1,
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
                value="dashboard"
                icon={<DashboardIcon sx={{ fontSize: 18 }} />}
                onClick={() => navigate('/?section=dashboard')}
              />
              <BottomNavigationAction
                label="Packages"
                value="packages"
                icon={<DiamondIcon sx={{ fontSize: 18 }} />}
                onClick={() => navigate('/?section=packages')}
              />
              <BottomNavigationAction
                label="My Plans"
                value="my-investments"
                icon={<AccountBalanceWalletIcon sx={{ fontSize: 18 }} />}
                onClick={() => navigate('/?section=my-investments')}
              />
              <BottomNavigationAction
                label="ROI"
                value="daily-roi"
                icon={<TrendingUpIcon sx={{ fontSize: 18 }} />}
                onClick={() => navigate('/?section=daily-roi')}
              />
              <BottomNavigationAction
                label="Team"
                value="team-structure"
                icon={<PeopleIcon sx={{ fontSize: 18 }} />}
                onClick={() => navigate('/?section=team-structure')}
              />
            </BottomNavigation>
          </Box>
        </Paper>
      )}

      {/* Mobile Bottom Navigation - Gaming Section */}
      {isMobile && isGamingSection && !isModalOpen && (
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
              bgcolor: '#6200ea',
              '& .MuiBottomNavigationAction-root': {
                color: 'rgba(255, 255, 255, 0.7)',
                '&.Mui-selected': {
                  color: '#ffffff'
                }
              }
            }}
          >
            <BottomNavigationAction
              label="Home"
              value="/"
              icon={<HomeIcon />}
              component={RouterLink}
              to="/"
            />
            <BottomNavigationAction
              label="Dashboard"
              value="/usd/gaming/dashboard"
              icon={<DashboardIcon />}
              component={RouterLink}
              to="/usd/gaming/dashboard"
            />
            <BottomNavigationAction
              label="Pools"
              value="/usd/gaming/pools"
              icon={<CasinoIcon />}
              component={RouterLink}
              to="/usd/gaming/pools"
            />
          </BottomNavigation>
        </Paper>
      )}

      {/* Mobile Bottom Navigation - General/Registration */}
      {isMobile && (!currentWallet.isConnected || !currentWallet.isRegistered) && !isModalOpen && (
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
              bgcolor: isMLMSection ? '#FFA000' : '#6200ea',
              '& .MuiBottomNavigationAction-root': {
                color: 'rgba(255, 255, 255, 0.7)',
                '&.Mui-selected': {
                  color: '#ffffff'
                }
              }
            }}
          >
            <BottomNavigationAction
              label="Home"
              value="/"
              icon={<HomeIcon />}
              component={RouterLink}
              to="/"
            />

            {currentWallet.isConnected && !currentWallet.isRegistered && (
              <BottomNavigationAction
                label={isMLMSection ? "Join" : "Register"}
                value={isMLMSection ? "/usd/mlm/register" : "/usd/gaming/register"}
                icon={<PersonAddIcon />}
                component={RouterLink}
                to={isMLMSection ? "/usd/mlm/register" : "/usd/gaming/register"}
              />
            )}

            {!currentWallet.isConnected && (
              <BottomNavigationAction
                label="Connect"
                value="/connect"
                icon={<AccountBalanceWalletIcon />}
                onClick={() => open()}
              />
            )}
          </BottomNavigation>
        </Paper>
      )}
    </>
  );
};

export default Navbar;

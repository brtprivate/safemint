import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Import custom Web3Modal styles and customizer
import './styles/web3modal-override.css';
import './utils/web3modal-customizer';

import { config } from './config/web3modal';
import { WalletProvider } from './context/WalletContext';
import { MLMProvider } from './context/MLMContext';
import { TransactionHistoryProvider } from './context/TransactionHistoryContext';
import { ToastProvider } from './components/common/ToastNotification';

// Components
import Navbar from './components/Navbar';

// Pages
import MLMDashboard from './pages/MLMDashboard';
import Dashboard from './pages/Dashboard';
import HistoryPage from './pages/HistoryPage';
import SwapPage from './pages/SwapPage';
import LandingPage from './pages/LandingPage';
import TokenTest from './pages/TokenTest';
import SafeMintHTML from './pages/SafeMintHTML';
import IconsShowcase from './pages/IconsShowcase';


// Create a colorful theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#6200ea', // Deep purple
      light: '#9d46ff',
      dark: '#0a00b6',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#00bcd4', // Cyan
      light: '#62efff',
      dark: '#008ba3',
      contrastText: '#000000',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    error: {
      main: '#f44336',
    },
    warning: {
      main: '#ff9800',
    },
    info: {
      main: '#2196f3',
    },
    success: {
      main: '#4caf50',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          padding: '10px 24px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
        },
        containedPrimary: {
          '&:hover': {
            boxShadow: '0 6px 15px rgba(98, 0, 234, 0.3)',
          },
        },
        containedSecondary: {
          '&:hover': {
            boxShadow: '0 6px 15px rgba(0, 188, 212, 0.3)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: 16,
        },
        elevation1: {
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
        },
        elevation3: {
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
});

// Setup QueryClient for React Query
const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <WalletProvider>
            <ToastProvider>
              <MLMProvider>
                <TransactionHistoryProvider>
                  <Router basename="/app">
                    <Navbar />
                    <Routes>
                      <Route path="/dashboard" element={<MLMDashboard />} />
                      <Route path="/" element={<Dashboard />} />
                      {/* <Route path="/" element={<LandingPage />} /> */}
                      <Route path="/ui" element={<SafeMintHTML />} />
                      <Route path="/history" element={<HistoryPage />} />
                      <Route path="/swap" element={<SwapPage />} />
                      <Route path="/token-test" element={<TokenTest />} />
                      <Route path="/icons" element={<IconsShowcase />} />
                      <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                  </Router>
                </TransactionHistoryProvider>
              </MLMProvider>
            </ToastProvider>
          </WalletProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </ThemeProvider>
  );
}

export default App;



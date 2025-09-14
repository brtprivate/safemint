import { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  CircularProgress,
  Alert,
  Button,
  Grid,
  Avatar,
  Divider,
  LinearProgress,
  Tooltip,
  IconButton,
} from '@mui/material';
import { useWallet } from '../context/WalletContext';
import { stakingInteractions } from '../services/selfmintStakingService';
import { formatUnits } from 'viem';
import { formatCurrency, formatDate, formatNumber, formatTimeAgo } from '../utils/formatters';

// Icons
import HistoryIcon from '@mui/icons-material/History';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PeopleIcon from '@mui/icons-material/People';
import GroupsIcon from '@mui/icons-material/Groups';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import RefreshIcon from '@mui/icons-material/Refresh';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import LaunchIcon from '@mui/icons-material/Launch';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import PendingIcon from '@mui/icons-material/Pending';
// import CancelIcon from '@mui/icons-material/Cancel';

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`history-tabpanel-${index}`}
      aria-labelledby={`history-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const HistoryPage = () => {
  const wallet = useWallet();
  const [tabValue, setTabValue] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [historyData, setHistoryData] = useState(null);

  const fetchHistoryData = async () => {
    if (!wallet.isConnected || !wallet.account) {
      setError('Please connect your wallet to view history');
      return;
    }

    try {
      setLoading(true);
      setError('');

      console.log('🔄 [HistoryPage] Fetching complete history for:', wallet.account);
      const data = await stakingInteractions.getCompleteUserHistory(wallet.account);
      setHistoryData(data);
      console.log('📊 [HistoryPage] History data received:', {
        stakeHistoryCount: data?.stakeHistory?.length || 0,
        directReferralsCount: data?.directReferrals?.length || 0,
        sampleStake: data?.stakeHistory?.[0] || null
      });
    } catch (error) {
      console.error('❌ [HistoryPage] Error fetching history:', error);
      setError(`Failed to fetch history data: ${error.message || 'Please try again.'}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (wallet.isConnected && wallet.account) {
      fetchHistoryData();
    }
  }, [wallet.isConnected, wallet.account]);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  if (!wallet.isConnected) {
    return (
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Alert severity="warning">
          Please connect your wallet to view your transaction history.
        </Alert>
      </Container>
    );
  }

  if (loading) {
    return (
      <Container maxWidth="xl" sx={{ py: 4, display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
          <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
            <HistoryIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
            Transaction History
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Complete overview of your USDT deposits, withdrawals, team activity, and earnings history
          </Typography>
        </Box>
        <Button
          variant="outlined"
          startIcon={<RefreshIcon />}
          onClick={fetchHistoryData}
          disabled={loading}
          sx={{
            borderRadius: '25px',
            px: 3,
            '&:hover': {
              backgroundColor: 'primary.main',
              color: 'white',
            }
          }}
        >
          {loading ? 'Refreshing...' : 'Refresh Data'}
        </Button>
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }} onClose={() => setError('')}>
          {error}
        </Alert>
      )}

      {/* Overview Statistics */}
      {historyData && (
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ backgroundColor: 'primary.main', color: 'white', boxShadow: 3 }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      Total Stakes
                    </Typography>
                    <Typography variant="h4" fontWeight="bold">
                      {historyData.stakeHistory?.length || 0}
                    </Typography>
                  </Box>
                  <AccountBalanceWalletIcon sx={{ fontSize: 40, opacity: 0.8 }} />
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ backgroundColor: 'success.main', color: 'white', boxShadow: 3 }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      Active Deposits
                    </Typography>
                    <Typography variant="h4" fontWeight="bold">
                      {historyData.stakeHistory?.filter(stake => !stake.isComplete).length || 0}
                    </Typography>
                  </Box>
                  <TrendingUpIcon sx={{ fontSize: 40, opacity: 0.8 }} />
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ backgroundColor: 'info.main', color: 'white', boxShadow: 3 }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      Completed
                    </Typography>
                    <Typography variant="h4" fontWeight="bold">
                      {historyData.stakeHistory?.filter(stake => stake.isComplete).length || 0}
                    </Typography>
                  </Box>
                  <CheckCircleIcon sx={{ fontSize: 40, opacity: 0.8 }} />
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ backgroundColor: 'secondary.main', color: 'white', boxShadow: 3 }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      Direct Team
                    </Typography>
                    <Typography variant="h4" fontWeight="bold">
                      {historyData.directReferrals?.length || 0}
                    </Typography>
                  </Box>
                  <PeopleIcon sx={{ fontSize: 40, opacity: 0.8 }} />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}

      {/* Tabs */}
      <Card sx={{ mb: 3 }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{ borderBottom: 1, borderColor: 'divider' }}
        >
          <Tab 
            label="Deposits" 
            icon={<TrendingUpIcon />} 
            iconPosition="start"
          />
          <Tab 
            label="Withdrawals" 
            icon={<TrendingDownIcon />} 
            iconPosition="start"
          />
          <Tab 
            label="Direct Team" 
            icon={<PeopleIcon />} 
            iconPosition="start"
          />
          <Tab 
            label="Team Overview" 
            icon={<GroupsIcon />} 
            iconPosition="start"
          />
          <Tab
            label="Earnings"
            icon={<MonetizationOnIcon />}
            iconPosition="start"
          />
        </Tabs>

        {/* Deposits Tab */}
        <TabPanel value={tabValue} index={0}>
          <DepositHistory historyData={historyData} />
        </TabPanel>

        {/* Withdrawals Tab */}
        <TabPanel value={tabValue} index={1}>
          <WithdrawalHistory historyData={historyData} />
        </TabPanel>

        {/* Direct Team Tab */}
        <TabPanel value={tabValue} index={2}>
          <DirectTeamHistory historyData={historyData} />
        </TabPanel>

        {/* Team Overview Tab */}
        <TabPanel value={tabValue} index={3}>
          <TeamOverview historyData={historyData} />
        </TabPanel>

        {/* Earnings Tab */}
        <TabPanel value={tabValue} index={4}>
          <EarningsHistory historyData={historyData} />
        </TabPanel>


      </Card>
    </Container>
  );
};

// Deposit History Component
const DepositHistory = ({ historyData }) => {
  const deposits = historyData?.stakeHistory?.filter(stake => !stake.isComplete) || [];

  if (deposits.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <TrendingUpIcon sx={{ fontSize: 64, color: 'grey.400', mb: 2 }} />
        <Typography variant="h6" color="text.secondary">
          No active deposits
        </Typography>
        <Typography variant="body2" color="text.secondary">
          All your deposits have been completed or withdrawn.
        </Typography>
      </Box>
    );
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <Box>
      {/* Summary Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: 'white', boxShadow: 3, borderRadius: 2 }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box>
                  <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                    Active Deposits
                  </Typography>
                  <Typography variant="h4" fontWeight="bold" sx={{ color: 'text.primary' }}>
                    {deposits.length}
                  </Typography>
                </Box>
                <TrendingUpIcon sx={{ fontSize: 40, color: 'primary.main' }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: 'white', boxShadow: 3, borderRadius: 2 }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box>
                  <Typography variant="h6" sx={{ color: 'success.main', fontWeight: 'bold' }}>
                    Total Invested
                  </Typography>
                  <Typography variant="h4" fontWeight="bold" sx={{ color: 'text.primary' }}>
                    {formatCurrency(
                      deposits.reduce((sum, deposit) => {
                        // Use the processed amount from our method
                        const amount = deposit.amount || Number(deposit.orderValue || 0);
                        console.log('📊 [Summary] Deposit amount:', amount);
                        return sum + amount;
                      }, 0)
                    )}
                  </Typography>
                </Box>
                <MonetizationOnIcon sx={{ fontSize: 40, color: 'success.main' }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: 'white', boxShadow: 3, borderRadius: 2 }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box>
                  <Typography variant="h6" sx={{ color: 'info.main', fontWeight: 'bold' }}>
                    Expected Growth
                  </Typography>
                  <Typography variant="h4" fontWeight="bold" sx={{ color: 'text.primary' }}>
                    {formatCurrency(
                      deposits.reduce((sum, deposit) => {
                        const orderGrowth = deposit.orderGrowth || BigInt(0);
                        const amount = Number(orderGrowth); // Contract returns direct USDTvalues
                        return sum + amount;
                      }, 0)
                    )}
                  </Typography>
                </Box>
                <TrendingUpIcon sx={{ fontSize: 40, color: 'info.main' }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Deposits Table */}
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
            <HistoryIcon sx={{ mr: 1 }} />
            Active Deposits ({deposits.length})
          </Typography>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: 'grey.50' }}>
                  <TableCell><strong>Order Details</strong></TableCell>
                  <TableCell><strong>Investment</strong></TableCell>
                  <TableCell><strong>Growth</strong></TableCell>
                  <TableCell><strong>Timeline</strong></TableCell>
                  <TableCell><strong>Status</strong></TableCell>
                  <TableCell><strong>Actions</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {deposits.length > 0 ? deposits.map((deposit, index) => {
                  const orderValue = deposit.orderValue || BigInt(0);
                  const orderGrowth = deposit.orderGrowth || BigInt(0);
                  const orderTime = Number(deposit.orderTime || 0);
                  const orderId = deposit.orderID?.toString() || `DEP-${index + 1}`;

                  // Growth rate is stored as 1 for 1%, not 10 for 1%
                  const growthRate = Number(orderGrowth);

                  // Debug logging
                  console.log('📊 [DepositHistory] Deposit data:', {
                    orderValue: orderValue.toString(),
                    orderGrowth: orderGrowth.toString(),
                    orderTime,
                    orderId,
                    amount: deposit.amount,
                    timestamp: deposit.timestamp,
                    date: deposit.date,
                    remainingTime: deposit.remainingTime
                  });

                  // Use the processed amount from our getCompleteUserHistory method
                  let investmentAmount = deposit.amount || Number(orderValue);
                  let growthAmount = Number(orderGrowth);

                  console.log('📊 [DepositHistory] Parsed amounts:', { investmentAmount, growthAmount });
                  const isMature = Number(deposit.isMature || 0) > 0;

                  return (
                    <TableRow key={`deposit-${index}-${orderId}`} hover>
                      <TableCell>
                        <Box>
                          <Typography variant="body2" fontWeight="bold" color="primary.main">
                            #{orderId}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            Order ID
                          </Typography>
                        </Box>
                      </TableCell>

                      <TableCell>
                        <Box>
                          <Typography variant="body1" fontWeight="bold" color="primary.main">
                            {formatCurrency(investmentAmount)}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            USDT Invested
                          </Typography>
                        </Box>
                      </TableCell>

                      <TableCell>
                        <Box>
                          <Typography variant="body1" fontWeight="bold" color="success.main">
                            +{formatCurrency(growthAmount)}
                          </Typography>
                          <Typography variant="caption" color="success.main">
                            {growthRate}% Growth Rate
                          </Typography>
                        </Box>
                      </TableCell>

                      <TableCell>
                        <Box>
                          <Typography variant="body2" fontWeight="bold">
                            {deposit.date || (orderTime > 0 ? formatDate(orderTime) : 'N/A')}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {orderTime > 0 ? formatTimeAgo(orderTime) : 'Deposit Date'}
                          </Typography>
                          {deposit.remainingTime && (
                            <Typography
                              variant="caption"
                              color={deposit.remainingTime === 'Matured' || deposit.remainingTime === 'Completed' ? 'success.main' : 'warning.main'}
                              sx={{ display: 'block', mt: 0.5, fontWeight: 'bold' }}
                            >
                              ⏱️ {deposit.remainingTime}
                            </Typography>
                          )}
                        </Box>
                      </TableCell>

                      <TableCell>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                          <Chip
                            label={deposit.isComplete ? "Completed" : "Active"}
                            color={deposit.isComplete ? "success" : "primary"}
                            size="small"
                            icon={deposit.isComplete ? <CheckCircleIcon /> : <PendingIcon />}
                          />
                          <Chip
                            label={isMature ? "Mature" : "Growing"}
                            color={isMature ? "success" : "warning"}
                            size="small"
                            variant="outlined"
                          />
                        </Box>
                      </TableCell>

                      <TableCell>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                          <Tooltip title="Copy Order ID">
                            <IconButton
                              size="small"
                              onClick={() => copyToClipboard(orderId)}
                            >
                              <ContentCopyIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="View on Explorer">
                            <IconButton
                              size="small"
                              onClick={() => window.open(`https://bscscan.com/tx/${orderId}`, '_blank')}
                            >
                              <LaunchIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>
                        </Box>
                      </TableCell>
                    </TableRow>
                  );
                }) : (
                  <TableRow>
                    <TableCell colSpan={6} sx={{ textAlign: 'center', py: 4 }}>
                      <AccountBalanceWalletIcon sx={{ fontSize: 48, color: 'grey.400', mb: 1 }} />
                      <Typography variant="h6" color="text.secondary">
                        No active deposits found
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Your deposit transactions will appear here once you make your first deposit.
                      </Typography>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
};

// Withdrawal History Component
const WithdrawalHistory = ({ historyData }) => {
  const withdrawals = historyData?.stakeHistory?.filter(stake => stake.isComplete) || [];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const totalWithdrawn = withdrawals.reduce((sum, withdrawal) => {
    const orderValue = withdrawal.orderValue || BigInt(0);
    const orderGrowth = withdrawal.orderGrowth || BigInt(0);

    const principal = Number(orderValue); // Contract returns direct USDTvalues
    const growth = Number(orderGrowth);

    return sum + principal + growth;
  }, 0);

  const totalProfit = withdrawals.reduce((sum, withdrawal) => {
    const orderGrowth = withdrawal.orderGrowth || BigInt(0);
    const growth = Number(orderGrowth); // Contract returns direct USDTvalues
    return sum + growth;
  }, 0);

  return (
    <Box>
      {/* Summary Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: 'white', boxShadow: 3, borderRadius: 2 }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box>
                  <Typography variant="h6" sx={{ color: 'success.main', fontWeight: 'bold' }}>
                    Completed
                  </Typography>
                  <Typography variant="h4" fontWeight="bold" sx={{ color: 'text.primary' }}>
                    {withdrawals.length}
                  </Typography>
                </Box>
                <CheckCircleIcon sx={{ fontSize: 40, color: 'success.main' }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: 'white', boxShadow: 3, borderRadius: 2 }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box>
                  <Typography variant="h6" sx={{ color: 'error.main', fontWeight: 'bold' }}>
                    Total Withdrawn
                  </Typography>
                  <Typography variant="h4" fontWeight="bold" sx={{ color: 'text.primary' }}>
                    {formatCurrency(totalWithdrawn)}
                  </Typography>
                </Box>
                <TrendingDownIcon sx={{ fontSize: 40, color: 'error.main' }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: 'white', boxShadow: 3, borderRadius: 2 }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box>
                  <Typography variant="h6" sx={{ color: 'warning.main', fontWeight: 'bold' }}>
                    Total Profit
                  </Typography>
                  <Typography variant="h4" fontWeight="bold" sx={{ color: 'text.primary' }}>
                    {formatCurrency(totalProfit)}
                  </Typography>
                </Box>
                <MonetizationOnIcon sx={{ fontSize: 40, color: 'warning.main' }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Withdrawals Table */}
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
            <TrendingDownIcon sx={{ mr: 1 }} />
            Completed Withdrawals ({withdrawals.length})
          </Typography>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: 'grey.50' }}>
                  <TableCell><strong>Order Details</strong></TableCell>
                  <TableCell><strong>Principal</strong></TableCell>
                  <TableCell><strong>Profit Earned</strong></TableCell>
                  <TableCell><strong>Total Received</strong></TableCell>
                  <TableCell><strong>Completion Date</strong></TableCell>
                  <TableCell><strong>Actions</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {withdrawals.length > 0 ? withdrawals.map((withdrawal, index) => {
                  const orderValue = withdrawal.orderValue || BigInt(0);
                  const orderGrowth = withdrawal.orderGrowth || BigInt(0);
                  const orderTime = Number(withdrawal.orderTime || 0);
                  const orderId = withdrawal.orderID?.toString() || `WTH-${index + 1}`;

                  // Contract returns direct USDTvalues
                  const principalAmount = Number(orderValue);
                  const growthAmount = Number(orderGrowth);
                  const totalReceived = principalAmount + growthAmount;
                  const profitPercentage = principalAmount > 0 ? ((growthAmount / principalAmount) * 100) : 0;

                  return (
                    <TableRow key={`withdrawal-${index}-${orderId}`} hover>
                      <TableCell>
                        <Box>
                          <Typography variant="body2" fontWeight="bold" color="primary.main">
                            #{orderId}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            Order ID
                          </Typography>
                        </Box>
                      </TableCell>

                      <TableCell>
                        <Box>
                          <Typography variant="body1" fontWeight="bold" color="primary.main">
                            {formatCurrency(principalAmount)}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            Original Investment
                          </Typography>
                        </Box>
                      </TableCell>

                      <TableCell>
                        <Box>
                          <Typography variant="body1" fontWeight="bold" color="success.main">
                            +{formatCurrency(growthAmount)}
                          </Typography>
                          <Typography variant="caption" color="success.main">
                            {profitPercentage.toFixed(1)}% Profit
                          </Typography>
                        </Box>
                      </TableCell>

                      <TableCell>
                        <Box>
                          <Typography variant="body1" fontWeight="bold" color="secondary.main">
                            {formatCurrency(totalReceived)}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            Total Payout
                          </Typography>
                        </Box>
                      </TableCell>

                      <TableCell>
                        <Box>
                          <Typography variant="body2" fontWeight="bold">
                            {withdrawal.date || (orderTime > 0 ? formatDate(orderTime) : 'N/A')}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {orderTime > 0 ? formatTimeAgo(orderTime) : 'Completion Date'}
                          </Typography>
                          <Chip
                            label="✅ Completed"
                            color="success"
                            size="small"
                            icon={<CheckCircleIcon />}
                            sx={{ mt: 0.5, display: 'block', width: 'fit-content' }}
                          />
                        </Box>
                      </TableCell>

                      <TableCell>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                          <Tooltip title="Copy Order ID">
                            <IconButton
                              size="small"
                              onClick={() => copyToClipboard(orderId)}
                            >
                              <ContentCopyIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="View on Explorer">
                            <IconButton
                              size="small"
                              onClick={() => window.open(`https://bscscan.com/tx/${orderId}`, '_blank')}
                            >
                              <LaunchIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>
                        </Box>
                      </TableCell>
                    </TableRow>
                  );
                }) : (
                  <TableRow>
                    <TableCell colSpan={6} sx={{ textAlign: 'center', py: 4 }}>
                      <TrendingDownIcon sx={{ fontSize: 48, color: 'grey.400', mb: 1 }} />
                      <Typography variant="h6" color="text.secondary">
                        No completed withdrawals found
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Your completed withdrawal transactions will appear here.
                      </Typography>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
};

// Direct Team History Component
const DirectTeamHistory = ({ historyData }) => {
  const teamDetails = historyData?.teamDetails || [];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <Box>
      {/* Summary Card */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={4}>
          <Card sx={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box>
                  <Typography variant="h6">👥 Direct Team</Typography>
                  <Typography variant="h4" fontWeight="bold">
                    {teamDetails.length}
                  </Typography>
                </Box>
                <PeopleIcon sx={{ fontSize: 40, opacity: 0.8 }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', color: 'white' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box>
                  <Typography variant="h6">💰 Total Deposits</Typography>
                  <Typography variant="h4" fontWeight="bold">
                    {formatCurrency(teamDetails.reduce((sum, member) => sum + member.recentDeposited, 0))}
                  </Typography>
                </Box>
                <MonetizationOnIcon sx={{ fontSize: 40, opacity: 0.8 }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', color: 'white' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box>
                  <Typography variant="h6">🟢 Active Members</Typography>
                  <Typography variant="h4" fontWeight="bold">
                    {teamDetails.filter(member => member.userStatus === 'Active').length}
                  </Typography>
                </Box>
                <TrendingUpIcon sx={{ fontSize: 40, opacity: 0.8 }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Team Members Table */}
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
            <PeopleIcon sx={{ mr: 1 }} />
            Direct Team Members ({teamDetails.length})
          </Typography>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: 'grey.50' }}>
                  <TableCell><strong>📅 Date</strong></TableCell>
                  <TableCell><strong>👤 Address</strong></TableCell>
                  <TableCell><strong>🎯 Sponsor</strong></TableCell>
                  <TableCell><strong>📊 Level</strong></TableCell>
                  <TableCell><strong>👥 Directs</strong></TableCell>
                  <TableCell><strong>💰 Recent Deposited</strong></TableCell>
                  <TableCell><strong>🏷️ Tag Name</strong></TableCell>
                  <TableCell><strong>⚡ User Status</strong></TableCell>
                  <TableCell><strong>🔧 Actions</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {teamDetails.length > 0 ? teamDetails.map((member, index) => (
                  <TableRow
                    key={`team-member-${index}`}
                    hover
                    sx={{
                      '&:hover': {
                        backgroundColor: 'rgba(25, 118, 210, 0.08)',
                        transform: 'scale(1.01)',
                        transition: 'all 0.2s ease-in-out',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                      },
                      cursor: 'pointer',
                      transition: 'all 0.2s ease-in-out',
                    }}
                  >
                    {/* Date */}
                    <TableCell>
                      <Box>
                        <Typography variant="body2" fontWeight="bold">
                          {member.date}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {formatTimeAgo(member.joinTimestamp)}
                        </Typography>
                      </Box>
                    </TableCell>

                    {/* Address */}
                    <TableCell>
                      <Tooltip
                        title={
                          <Box sx={{ p: 1 }}>
                            <Typography variant="body2" fontWeight="bold">Full Address:</Typography>
                            <Typography variant="body2" sx={{ fontFamily: 'monospace', wordBreak: 'break-all' }}>
                              {member.address}
                            </Typography>
                            <Typography variant="caption" color="grey.300" sx={{ mt: 1, display: 'block' }}>
                              Click to copy full address
                            </Typography>
                          </Box>
                        }
                        arrow
                        placement="top"
                      >
                        <Box
                          onClick={() => copyToClipboard(member.address)}
                          sx={{
                            cursor: 'pointer',
                            '&:hover': { backgroundColor: 'rgba(0,0,0,0.04)', borderRadius: 1, p: 0.5 }
                          }}
                        >
                          <Typography variant="body2" sx={{ fontFamily: 'monospace', fontWeight: 'bold' }}>
                            {`${member.address.slice(0, 8)}...${member.address.slice(-6)}`}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            📋 Click to copy
                          </Typography>
                        </Box>
                      </Tooltip>
                    </TableCell>

                    {/* Sponsor */}
                    <TableCell>
                      <Box>
                        <Typography variant="body2" sx={{ fontFamily: 'monospace', fontWeight: 'bold' }}>
                          {`${member.sponsor.slice(0, 8)}...${member.sponsor.slice(-6)}`}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          🎯 Sponsor
                        </Typography>
                      </Box>
                    </TableCell>

                    {/* Level */}
                    <TableCell>
                      <Box sx={{ textAlign: 'center' }}>
                        <Chip
                          label={`Level ${member.level}`}
                          color="primary"
                          size="small"
                          sx={{ fontWeight: 'bold' }}
                        />
                      </Box>
                    </TableCell>

                    {/* Directs */}
                    <TableCell>
                      <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h6" fontWeight="bold" color="secondary.main">
                          {member.directs}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          Direct Refs
                        </Typography>
                      </Box>
                    </TableCell>

                    {/* Recent Deposited */}
                    <TableCell>
                      <Box>
                        <Typography variant="body1" fontWeight="bold" color="success.main">
                          {formatCurrency(member.recentDeposited)}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          Latest Deposit
                        </Typography>
                      </Box>
                    </TableCell>

                    {/* Tag Name */}
                    <TableCell>
                      <Box>
                        <Typography variant="body2" fontWeight="bold" color="primary.main">
                          {member.tagName}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          🏷️ Tag
                        </Typography>
                      </Box>
                    </TableCell>

                    {/* User Status */}
                    <TableCell>
                      <Chip
                        label={member.userStatus}
                        color={member.userStatus === 'Active' ? 'success' : member.userStatus === 'Inactive' ? 'error' : 'default'}
                        size="small"
                        icon={member.userStatus === 'Active' ? <CheckCircleIcon /> : <CancelIcon />}
                        sx={{ fontWeight: 'bold' }}
                      />
                    </TableCell>

                    {/* Actions */}
                    <TableCell>
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        <Tooltip title="Copy Address">
                          <IconButton
                            size="small"
                            onClick={() => copyToClipboard(member.address)}
                            sx={{
                              '&:hover': {
                                backgroundColor: 'primary.main',
                                color: 'white',
                                transform: 'scale(1.1)'
                              },
                              transition: 'all 0.2s ease'
                            }}
                          >
                            <ContentCopyIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="View on BSCScan">
                          <IconButton
                            size="small"
                            onClick={() => window.open(`https://bscscan.com/address/${member.address}`, '_blank')}
                            sx={{
                              '&:hover': {
                                backgroundColor: 'success.main',
                                color: 'white',
                                transform: 'scale(1.1)'
                              },
                              transition: 'all 0.2s ease'
                            }}
                          >
                            <LaunchIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    </TableCell>
                  </TableRow>
                )) : (
                  <TableRow>
                    <TableCell colSpan={9} sx={{ textAlign: 'center', py: 4 }}>
                      <PeopleIcon sx={{ fontSize: 48, color: 'grey.400', mb: 1 }} />
                      <Typography variant="h6" color="text.secondary">
                        No direct team members found
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Start building your team by sharing your referral link with others.
                      </Typography>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
};

// Team Overview Component
const TeamOverview = ({ historyData }) => {
  if (!historyData?.rankQualify || !historyData?.userInfo) {
    return (
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <GroupsIcon sx={{ fontSize: 64, color: 'grey.400', mb: 2 }} />
        <Typography variant="h6" color="text.secondary">
          No team data available
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Team statistics will appear here once you start building your network.
        </Typography>
      </Box>
    );
  }

  const { rankQualify, userInfo } = historyData;

  return (
    <Box>
      {/* Team Statistics Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={3}>
          <Card sx={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <PeopleIcon sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h4" fontWeight="bold">
                {formatNumber(Number(rankQualify.directs || 0))}
              </Typography>
              <Typography variant="body2">Direct Team</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card sx={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', color: 'white' }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <GroupsIcon sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h4" fontWeight="bold">
                {formatNumber(Number(rankQualify.strongTeam || 0))}
              </Typography>
              <Typography variant="body2">Strong Team</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card sx={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', color: 'white' }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <GroupsIcon sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h4" fontWeight="bold">
                {formatNumber(Number(rankQualify.totalTeam || 0))}
              </Typography>
              <Typography variant="body2">Total Team</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card sx={{ background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)', color: 'white' }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <TrendingUpIcon sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h4" fontWeight="bold">
                {formatNumber(Number(rankQualify.level || 0))}
              </Typography>
              <Typography variant="body2">Current Level</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Detailed Information */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                <GroupsIcon sx={{ mr: 1 }} />
                Team Performance
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Direct Team Progress</Typography>
                    <Typography variant="body2" fontWeight="bold">
                      {Number(rankQualify.directs || 0)}/10
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={Math.min((Number(rankQualify.directs || 0) / 10) * 100, 100)}
                    sx={{ height: 8, borderRadius: 4 }}
                  />
                </Box>

                <Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Strong Team Progress</Typography>
                    <Typography variant="body2" fontWeight="bold">
                      {Number(rankQualify.strongTeam || 0)}/50
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={Math.min((Number(rankQualify.strongTeam || 0) / 50) * 100, 100)}
                    sx={{ height: 8, borderRadius: 4 }}
                    color="secondary"
                  />
                </Box>

                <Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Total Team Growth</Typography>
                    <Typography variant="body2" fontWeight="bold">
                      {Number(rankQualify.totalTeam || 0)}/100
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={Math.min((Number(rankQualify.totalTeam || 0) / 100) * 100, 100)}
                    sx={{ height: 8, borderRadius: 4 }}
                    color="success"
                  />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                <AccountBalanceWalletIcon sx={{ mr: 1 }} />
                Account Information
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography>User Level:</Typography>
                  <Chip
                    label={`Level ${formatNumber(Number(userInfo.userLevel || 0))}`}
                    color="primary"
                    size="small"
                  />
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography>Last Investment:</Typography>
                  <Typography fontWeight="bold" color="primary.main">
                    {formatCurrency(parseFloat(formatUnits(userInfo.lastStake || 0, 6)))}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography>Registration Status:</Typography>
                  <Chip
                    label={userInfo.joined ? "Verified" : "Pending"}
                    color={userInfo.joined ? "success" : "warning"}
                    size="small"
                    icon={userInfo.joined ? <CheckCircleIcon /> : <PendingIcon />}
                  />
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography>DAO Membership:</Typography>
                  <Chip
                    label={userInfo.isDAO ? "Active Member" : "Standard"}
                    color={userInfo.isDAO ? "success" : "default"}
                    size="small"
                    variant={userInfo.isDAO ? "filled" : "outlined"}
                  />
                </Box>

                <Divider sx={{ my: 1 }} />

                <Box sx={{ textAlign: 'center', p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
                  <Typography variant="body2" color="text.secondary">
                    Team Rank: <strong>Level {Number(rankQualify.level || 0)}</strong>
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Keep growing your team to unlock higher levels!
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

// Earnings History Component
const EarningsHistory = ({ historyData }) => {

  const { bonusInfo, directReferrals, stakeHistory } = historyData;

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  // Process earnings data with better formatting
  const earningsData = [
    {
      type: 'Referral Earnings',
      amount: parseFloat(formatUnits(bonusInfo.referralGains || 0, 6)),
      icon: <PeopleIcon />,
      color: 'primary',
      description: 'Direct referral commissions',
      source: 'Direct Team',
      addresses: directReferrals || []
    },
    {
      type: 'Level Earnings',
      amount: parseFloat(formatUnits(bonusInfo.levelGains || 0, 6)),
      icon: <TrendingUpIcon />,
      color: 'secondary',
      description: 'Multi-level team commissions',
      source: 'Team Levels',
      addresses: []
    },
    {
      type: 'Growth Earnings',
      amount: parseFloat(formatUnits(bonusInfo.growthGains || 0, 6)),
      icon: <MonetizationOnIcon />,
      color: 'success',
      description: 'Investment growth rewards',
      source: 'Personal Stakes',
      addresses: []
    },
    {
      type: 'Team Growth Earnings',
      amount: parseFloat(formatUnits(bonusInfo.teamGrowthGains || 0, 6)),
      icon: <GroupsIcon />,
      color: 'info',
      description: 'Team performance bonuses',
      source: 'Team Performance',
      addresses: directReferrals || []
    },
    {
      type: 'Leader Earnings',
      amount: parseFloat(formatUnits(bonusInfo.leaderGains || 0, 6)),
      icon: <TrendingUpIcon />,
      color: 'warning',
      description: 'Leadership achievement rewards',
      source: 'Leadership Rank',
      addresses: []
    },
    {
      type: 'Development Earnings',
      amount: parseFloat(formatUnits(bonusInfo.developmentGains || 0, 6)),
      icon: <AccountBalanceWalletIcon />,
      color: 'error',
      description: 'Platform development rewards',
      source: 'Development Fund',
      addresses: []
    }
  ];

  // Calculate additional metrics
  const totalDeposits = stakeHistory?.reduce((sum, stake) => sum + (stake.amount || 0), 0) || 0;
  const activeDeposits = stakeHistory?.filter(stake => !stake.isComplete).length || 0;
  const completedDeposits = stakeHistory?.filter(stake => stake.isComplete).length || 0;

  const totalEarnings = earningsData.reduce((sum, item) => sum + item.amount, 0);

  return (
    <Box>
      {/* Total Earnings Header */}
      <Box sx={{ mb: 4 }}>
        <Card sx={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', boxShadow: 4 }}>
          <CardContent sx={{ textAlign: 'center', py: 4 }}>
            <Typography variant="h3" sx={{ color: 'white', fontWeight: 'bold', mb: 1 }}>
              💰 {formatCurrency(totalEarnings)}
            </Typography>
            <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.9)' }}>
              Total Lifetime Earnings
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Quick Stats */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ backgroundColor: 'success.main', color: 'white' }}>
            <CardContent>
              <Typography variant="h6">💎 Total Deposits</Typography>
              <Typography variant="h4" fontWeight="bold">{formatCurrency(totalDeposits)}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ backgroundColor: 'primary.main', color: 'white' }}>
            <CardContent>
              <Typography variant="h6">🔄 Active Stakes</Typography>
              <Typography variant="h4" fontWeight="bold">{activeDeposits}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ backgroundColor: 'info.main', color: 'white' }}>
            <CardContent>
              <Typography variant="h6">✅ Completed</Typography>
              <Typography variant="h4" fontWeight="bold">{completedDeposits}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ backgroundColor: 'secondary.main', color: 'white' }}>
            <CardContent>
              <Typography variant="h6">👥 Team Size</Typography>
              <Typography variant="h4" fontWeight="bold">{directReferrals?.length || 0}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Detailed Earnings Table */}
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        📊 Detailed Earnings History
      </Typography>
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: 'grey.50' }}>
                  <TableCell><strong>📅 Date</strong></TableCell>
                  <TableCell><strong>💰 Amount</strong></TableCell>
                  <TableCell><strong>👤 From User</strong></TableCell>
                  <TableCell><strong>📊 Level</strong></TableCell>
                  <TableCell><strong>🎁 Reward Type</strong></TableCell>
                  <TableCell><strong>🔧 Actions</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {historyData.earningsDetails && historyData.earningsDetails.length > 0 ? (
                  historyData.earningsDetails.map((earning, index) => (
                    <TableRow
                      key={`earning-${index}`}
                      hover
                      sx={{
                        '&:hover': {
                          backgroundColor: 'rgba(76, 175, 80, 0.08)',
                          transform: 'scale(1.01)',
                          transition: 'all 0.2s ease-in-out',
                        },
                        transition: 'all 0.2s ease-in-out',
                      }}
                    >
                      {/* Date */}
                      <TableCell>
                        <Box>
                          <Typography variant="body2" fontWeight="bold">
                            {earning.date}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {formatTimeAgo(earning.timestamp)}
                          </Typography>
                        </Box>
                      </TableCell>

                      {/* Amount */}
                      <TableCell>
                        <Box>
                          <Typography variant="h6" fontWeight="bold" color="success.main">
                            +{formatCurrency(earning.amount)}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            💎 Earned
                          </Typography>
                        </Box>
                      </TableCell>

                      {/* From User */}
                      <TableCell>
                        <Tooltip
                          title={
                            <Box sx={{ p: 1 }}>
                              <Typography variant="body2" fontWeight="bold">Full Address:</Typography>
                              <Typography variant="body2" sx={{ fontFamily: 'monospace', wordBreak: 'break-all' }}>
                                {earning.fromUser}
                              </Typography>
                            </Box>
                          }
                          arrow
                          placement="top"
                        >
                          <Box>
                            <Typography variant="body2" sx={{ fontFamily: 'monospace', fontWeight: 'bold' }}>
                              {`${earning.fromUser.slice(0, 8)}...${earning.fromUser.slice(-6)}`}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                              👤 Source
                            </Typography>
                          </Box>
                        </Tooltip>
                      </TableCell>

                      {/* Level */}
                      <TableCell>
                        <Box sx={{ textAlign: 'center' }}>
                          <Chip
                            label={earning.level === 0 ? 'Direct' : `Level ${earning.level}`}
                            color={earning.level === 0 ? 'success' : earning.level === 1 ? 'primary' : 'secondary'}
                            size="small"
                            sx={{ fontWeight: 'bold' }}
                          />
                        </Box>
                      </TableCell>

                      {/* Reward Type */}
                      <TableCell>
                        <Box>
                          <Typography variant="body2" fontWeight="bold" color="primary.main">
                            {earning.rewardType}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            🎁 Bonus Type
                          </Typography>
                        </Box>
                      </TableCell>

                      {/* Actions */}
                      <TableCell>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                          <Tooltip title="Copy Address">
                            <IconButton
                              size="small"
                              onClick={() => copyToClipboard(earning.fromUser)}
                              sx={{
                                '&:hover': {
                                  backgroundColor: 'primary.main',
                                  color: 'white',
                                  transform: 'scale(1.1)'
                                },
                                transition: 'all 0.2s ease'
                              }}
                            >
                              <ContentCopyIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="View on BSCScan">
                            <IconButton
                              size="small"
                              onClick={() => window.open(`https://bscscan.com/address/${earning.fromUser}`, '_blank')}
                              sx={{
                                '&:hover': {
                                  backgroundColor: 'success.main',
                                  color: 'white',
                                  transform: 'scale(1.1)'
                                },
                                transition: 'all 0.2s ease'
                              }}
                            >
                              <LaunchIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} sx={{ textAlign: 'center', py: 4 }}>
                      <Typography variant="h6" color="text.secondary">
                        No earnings data available
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Your earnings will appear here once you start earning rewards.
                      </Typography>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Additional Information
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography variant="subtitle1" gutterBottom>
                  Total Staked
                </Typography>
                <Typography variant="h5">
                  {formatCurrency(parseFloat(formatUnits(bonusInfo.totalStake || 0, 6)))}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography variant="subtitle1" gutterBottom>
                  Total Withdrawn
                </Typography>
                <Typography variant="h5">
                  {formatCurrency(parseFloat(formatUnits(bonusInfo.totalWithdrwan || 0, 6)))}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HistoryPage;

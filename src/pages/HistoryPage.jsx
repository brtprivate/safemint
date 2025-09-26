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
import { formatCurrency, formatDate, formatTimeAgo } from '../utils/formatters';
export const formatNumber = (value, maxDecimals = 2) => {
  let num;
  if (typeof value === 'bigint') {
    num = Number(value);  // Convert BigInt to number (safe for small values)
  } else if (typeof value === 'string') {
    num = parseFloat(value);
  } else {
    num = value;
  }

  if (isNaN(num)) {
    return '0';
  }

  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: maxDecimals,
  }).format(num);
};

// Lucide React icons
import {
  Clock,
  Wallet,
  Users,
  Users2,
  DollarSign,
  RefreshCw,
  TrendingUp,
  TrendingDown,
  ExternalLink,
  Copy,
  CheckCircle,
  Clock3,
  BarChart,
  Crown,
  Building2,
} from 'lucide-react';

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
        sampleStake: data?.stakeHistory?.[0] || null,
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
        <Alert severity="warning">Please connect your wallet to view your transaction history.</Alert>
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
          <Typography
            variant="h4"
            gutterBottom
            sx={{ color: 'primary.main', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}
          >
            <Clock style={{ marginRight: 8 }} />
            Transaction History
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Complete overview of your USDT deposits, withdrawals, team activity, and earnings history
          </Typography>
        </Box>
        <Button
          variant="outlined"
          startIcon={<RefreshCw size={18} />}
          onClick={fetchHistoryData}
          disabled={loading}
          sx={{
            borderRadius: '25px',
            px: 3,
            '&:hover': {
              backgroundColor: 'primary.main',
              color: 'white',
            },
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
                  <Wallet size={40} style={{ opacity: 0.8 }} />
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
                      {historyData.stakeHistory?.filter((stake) => !stake.isComplete).length || 0}
                    </Typography>
                  </Box>
                  <TrendingUp size={40} style={{ opacity: 0.8 }} />
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
                      {historyData.stakeHistory?.filter((stake) => stake.isComplete).length || 0}
                    </Typography>
                  </Box>
                  <CheckCircle size={40} style={{ opacity: 0.8 }} />
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
                  <Users size={40} style={{ opacity: 0.8 }} />
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
          <Tab label="Deposits" icon={<Clock size={18} />} iconPosition="start" />
          <Tab label="Withdrawals" icon={<TrendingDown size={18} />} iconPosition="start" />
          <Tab label="Direct Team" icon={<Users size={18} />} iconPosition="start" />
          <Tab label="Team Overview" icon={<Users2 size={18} />} iconPosition="start" />
          <Tab label="Earnings" icon={<DollarSign size={18} />} iconPosition="start" />
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
  const deposits = historyData?.stakeHistory?.filter((stake) => !stake.isComplete) || [];

  if (deposits.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <TrendingUp size={64} style={{ color: '#9e9e9e', marginBottom: 16 }} />
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
                <TrendingUp size={40} style={{ color: '#6200ea' }} />
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
                        const amount = deposit.amount
                          ? parseFloat(formatUnits(deposit.amount, 18))
                          : parseFloat(formatUnits(deposit.orderValue || 0n, 18));
                        console.log('📊 [Summary] Deposit amount:', amount);
                        return sum + amount;
                      }, 0),
                    )}
                  </Typography>
                </Box>
                <DollarSign size={40} style={{ color: '#4caf50' }} />
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
                        const orderGrowth = parseFloat(formatUnits(deposit.orderGrowth || 0n, 18));
                        return sum + orderGrowth;
                      }, 0),
                    )}
                  </Typography>
                </Box>
                <TrendingUp size={40} style={{ color: '#2196f3' }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Deposits Table */}
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
            <Clock3 size={20} style={{ marginRight: 8 }} />
            Active Deposits ({deposits.length})
          </Typography>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: 'grey.50' }}>
                  <TableCell>
                    <strong>Order Details</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Investment</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Growth</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Timeline</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Status</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Actions</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {deposits.length > 0 ? (
                  deposits.map((deposit, index) => {
                    const orderValue = deposit.orderValue || 0n;
                    const orderGrowth = deposit.orderGrowth || 0n;
                    const orderTime = Number(deposit.orderTime || 0n);
                    const orderId = deposit.orderID?.toString() || `DEP-${index + 1}`;

                    // Use processed amount or convert from wei
                    const investmentAmount = deposit.amount
                      ? parseFloat(formatUnits(deposit.amount, 18))
                      : parseFloat(formatUnits(orderValue, 18));
                    const growthAmount = parseFloat(formatUnits(orderGrowth, 18));
                    const growthRate = orderValue > 0 ? (growthAmount / investmentAmount) * 100 : 0;
                    const isMature = Number(deposit.isMature || 0n) > 0;

                    console.log('📊 [DepositHistory] Deposit data:', {
                      orderValue: orderValue.toString(),
                      orderGrowth: orderGrowth.toString(),
                      orderTime,
                      orderId,
                      investmentAmount,
                      growthAmount,
                      timestamp: deposit.timestamp,
                      date: deposit.date,
                      remainingTime: deposit.remainingTime,
                    });

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
                              {growthRate.toFixed(1)}% Growth Rate
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
                                color={
                                  deposit.remainingTime === 'Matured' || deposit.remainingTime === 'Completed'
                                    ? 'success.main'
                                    : 'warning.main'
                                }
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
                              label={deposit.isComplete ? 'Completed' : 'Active'}
                              color={deposit.isComplete ? 'success' : 'primary'}
                              size="small"
                              icon={deposit.isComplete ? <CheckCircle size={16} /> : <Clock size={16} />}
                            />
                            <Chip
                              label={isMature ? 'Mature' : 'Growing'}
                              color={isMature ? 'success' : 'warning'}
                              size="small"
                              variant="outlined"
                            />
                          </Box>
                        </TableCell>

                        <TableCell>
                          <Box sx={{ display: 'flex', gap: 1 }}>
                            <Tooltip title="Copy Order ID">
                              <IconButton size="small" onClick={() => copyToClipboard(orderId)}>
                                <Copy size={16} />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="View on Explorer">
                              <IconButton
                                size="small"
                                onClick={() => window.open(`https://bscscan.com/tx/${orderId}`, '_blank')}
                              >
                                <ExternalLink size={16} />
                              </IconButton>
                            </Tooltip>
                          </Box>
                        </TableCell>
                      </TableRow>
                    );
                  })
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} sx={{ textAlign: 'center', py: 4 }}>
                      <Wallet size={48} style={{ color: '#9e9e9e', marginBottom: 8 }} />
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
  const withdrawals = historyData?.stakeHistory?.filter((stake) => stake.isComplete) || [];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const totalWithdrawn = withdrawals.reduce((sum, withdrawal) => {
    const orderValue = withdrawal.orderValue || 0n;
    const orderGrowth = withdrawal.orderGrowth || 0n;
    const principal = parseFloat(formatUnits(orderValue, 18));
    const growth = parseFloat(formatUnits(orderGrowth, 18));
    return sum + principal + growth;
  }, 0);

  const totalProfit = withdrawals.reduce((sum, withdrawal) => {
    const orderGrowth = parseFloat(formatUnits(withdrawal.orderGrowth || 0n, 18));
    return sum + orderGrowth;
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
                <CheckCircle size={40} style={{ color: '#4caf50' }} />
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
                <TrendingDown size={40} style={{ color: '#f44336' }} />
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
                <DollarSign size={40} style={{ color: '#ff9800' }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Withdrawals Table */}
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
            <TrendingDown size={20} style={{ marginRight: 8 }} />
            Completed Withdrawals ({withdrawals.length})
          </Typography>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: 'grey.50' }}>
                  <TableCell>
                    <strong>Order Details</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Principal</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Profit Earned</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Total Received</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Completion Date</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Actions</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {withdrawals.length > 0 ? (
                  withdrawals.map((withdrawal, index) => {
                    const orderValue = withdrawal.orderValue || 0n;
                    const orderGrowth = withdrawal.orderGrowth || 0n;
                    const orderTime = Number(withdrawal.orderTime || 0n);
                    const orderId = withdrawal.orderID?.toString() || `WTH-${index + 1}`;

                    const principalAmount = parseFloat(formatUnits(orderValue, 18));
                    const growthAmount = parseFloat(formatUnits(orderGrowth, 18));
                    const totalReceived = principalAmount + growthAmount;
                    const profitPercentage = principalAmount > 0 ? (growthAmount / principalAmount) * 100 : 0;

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
                              icon={<TrendingDown size={16} />}
                              sx={{ mt: 0.5, display: 'block', width: 'fit-content' }}
                            />
                          </Box>
                        </TableCell>

                        <TableCell>
                          <Box sx={{ display: 'flex', gap: 1 }}>
                            <Tooltip title="Copy Order ID">
                              <IconButton size="small" onClick={() => copyToClipboard(orderId)}>
                                <Copy size={16} />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="View on Explorer">
                              <IconButton
                                size="small"
                                onClick={() => window.open(`https://bscscan.com/tx/${orderId}`, '_blank')}
                              >
                                <ExternalLink size={16} />
                              </IconButton>
                            </Tooltip>
                          </Box>
                        </TableCell>
                      </TableRow>
                    );
                  })
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} sx={{ textAlign: 'center', py: 4 }}>
                      <TrendingDown size={48} style={{ color: '#9e9e9e', marginBottom: 8 }} />
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
                <Users size={40} style={{ opacity: 0.8 }} />
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
                    {formatCurrency(
                      teamDetails.reduce((sum, member) => sum + (parseFloat(formatUnits(member.recentDeposited || 0n, 18))), 0),
                    )}
                  </Typography>
                </Box>
                <DollarSign size={40} style={{ opacity: 0.8 }} />
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
                    {teamDetails.filter((member) => member.userStatus === 'Active').length}
                  </Typography>
                </Box>
                <TrendingUp size={40} style={{ opacity: 0.8 }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Team Members Table */}
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
            <Users size={20} style={{ marginRight: 8 }} />
            Direct Team Members ({teamDetails.length})
          </Typography>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: 'grey.50' }}>
                  <TableCell>
                    <strong>📅 Date</strong>
                  </TableCell>
                  <TableCell>
                    <strong>👤 Address</strong>
                  </TableCell>
                  <TableCell>
                    <strong>🎯 Sponsor</strong>
                  </TableCell>
                  <TableCell>
                    <strong>📊 Level</strong>
                  </TableCell>
                  <TableCell>
                    <strong>👥 Directs</strong>
                  </TableCell>
                  <TableCell>
                    <strong>💰 Recent Deposited</strong>
                  </TableCell>
                  <TableCell>
                    <strong>🏷️ Tag Name</strong>
                  </TableCell>
                  <TableCell>
                    <strong>⚡ User Status</strong>
                  </TableCell>
                  <TableCell>
                    <strong>🔧 Actions</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {teamDetails.length > 0 ? (
                  teamDetails.map((member, index) => (
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
                              <Typography variant="body2" fontWeight="bold">
                                Full Address:
                              </Typography>
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
                              '&:hover': { backgroundColor: 'rgba(0,0,0,0.04)', borderRadius: 1, p: 0.5 },
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
                          <Chip label={`Level ${member.level}`} color="primary" size="small" sx={{ fontWeight: 'bold' }} />
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
                            {formatCurrency(parseFloat(formatUnits(member.recentDeposited || 0n, 18)))}
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
                          icon={member.userStatus === 'Active' ? <CheckCircle size={16} /> : <Clock size={16} />}
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
                                  transform: 'scale(1.1)',
                                },
                                transition: 'all 0.2s ease',
                              }}
                            >
                              <Copy size={16} />
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
                                  transform: 'scale(1.1)',
                                },
                                transition: 'all 0.2s ease',
                              }}
                            >
                              <ExternalLink size={16} />
                            </IconButton>
                          </Tooltip>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={9} sx={{ textAlign: 'center', py: 4 }}>
                      <Users size={48} style={{ color: '#9e9e9e', marginBottom: 8 }} />
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
        <Users2 size={64} style={{ color: '#9e9e9e', marginBottom: 16 }} />
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
              <Users size={40} style={{ marginBottom: 8 }} />
              <Typography variant="h4" fontWeight="bold">
                {formatNumber(Number(rankQualify.directs || 0n))}
              </Typography>
              <Typography variant="body2">Direct Team</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card sx={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', color: 'white' }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Users2 size={40} style={{ marginBottom: 8 }} />
              <Typography variant="h4" fontWeight="bold">
                {formatNumber(Number(rankQualify.strongTeam || 0n))}
              </Typography>
              <Typography variant="body2">Strong Team</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card sx={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', color: 'white' }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Users2 size={40} style={{ marginBottom: 8 }} />
              <Typography variant="h4" fontWeight="bold">
                {formatNumber(Number(rankQualify.totalTeam || 0n))}
              </Typography>
              <Typography variant="body2">Total Team</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card sx={{ background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)', color: 'white' }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <TrendingUp size={40} style={{ marginBottom: 8 }} />
              <Typography variant="h4" fontWeight="bold">
                {formatNumber(Number(rankQualify.level || 0n))}
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
                <Users2 size={20} style={{ marginRight: 8 }} />
                Team Performance
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Direct Team Progress</Typography>
                    <Typography variant="body2" fontWeight="bold">
                      {Number(rankQualify.directs || 0n)}/10
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={Math.min((Number(rankQualify.directs || 0n) / 10) * 100, 100)}
                    sx={{ height: 8, borderRadius: 4 }}
                  />
                </Box>

                <Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Strong Team Progress</Typography>
                    <Typography variant="body2" fontWeight="bold">
                      {Number(rankQualify.strongTeam || 0n)}/50
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={Math.min((Number(rankQualify.strongTeam || 0n) / 50) * 100, 100)}
                    sx={{ height: 8, borderRadius: 4 }}
                    color="secondary"
                  />
                </Box>

                <Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Total Team Growth</Typography>
                    <Typography variant="body2" fontWeight="bold">
                      {Number(rankQualify.totalTeam || 0n)}/100
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={Math.min((Number(rankQualify.totalTeam || 0n) / 100) * 100, 100)}
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
                <Wallet size={20} style={{ marginRight: 8 }} />
                Account Information
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography>User Level:</Typography>
                  <Chip
                    label={`Level ${formatNumber(Number(userInfo.userLevel || 0n))}`}
                    color="primary"
                    size="small"
                  />
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography>Last Investment:</Typography>
                  <Typography fontWeight="bold" color="primary.main">
                    {formatCurrency(parseFloat(formatUnits(userInfo.lastStake || 0n, 18)))}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography>Registration Status:</Typography>
                  <Chip
                    label={userInfo.joined ? 'Verified' : 'Pending'}
                    color={userInfo.joined ? 'success' : 'warning'}
                    size="small"
                    icon={userInfo.joined ? <CheckCircle size={16} /> : <Clock size={16} />}
                  />
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography>DAO Membership:</Typography>
                  <Chip
                    label={userInfo.isDAO ? 'Active Member' : 'Standard'}
                    color={userInfo.isDAO ? 'success' : 'default'}
                    size="small"
                    variant={userInfo.isDAO ? 'filled' : 'outlined'}
                  />
                </Box>

                <Divider sx={{ my: 1 }} />

                <Box sx={{ textAlign: 'center', p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
                  <Typography variant="body2" color="text.secondary">
                    Team Rank: <strong>Level {Number(rankQualify.level || 0n)}</strong>
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
  const { bonusInfo, directReferrals, stakeHistory } = historyData || {};

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  // Process earnings data with 18 decimals
  const earningsData = [
    {
      type: 'Referral Earnings',
      amount: parseFloat(formatUnits(bonusInfo?.referralGains || 0n, 18)),
      icon: <Users size={16} />,
      color: 'primary',
      description: 'Direct referral commissions',
      source: 'Direct Team',
      addresses: directReferrals || [],
    },
    {
      type: 'Level Earnings',
      amount: parseFloat(formatUnits(bonusInfo?.levelGains || 0n, 18)),
      icon: <BarChart size={16} />,
      color: 'secondary',
      description: 'Multi-level team commissions',
      source: 'Team Levels',
      addresses: [],
    },
    {
      type: 'Growth Earnings',
      amount: parseFloat(formatUnits(bonusInfo?.growthGains || 0n, 18)),
      icon: <TrendingUp size={16} />,
      color: 'success',
      description: 'Investment growth rewards',
      source: 'Personal Stakes',
      addresses: [],
    },
    {
      type: 'Team Growth Earnings',
      amount: parseFloat(formatUnits(bonusInfo?.teamGrowthGains || 0n, 18)),
      icon: <Users2 size={16} />,
      color: 'info',
      description: 'Team performance bonuses',
      source: 'Team Performance',
      addresses: directReferrals || [],
    },
    {
      type: 'Leader Earnings',
      amount: parseFloat(formatUnits(bonusInfo?.leaderGains || 0n, 18)),
      icon: <Crown size={16} />,
      color: 'warning',
      description: 'Leadership achievement rewards',
      source: 'Leadership Rank',
      addresses: [],
    },
    {
      type: 'Development Earnings',
      amount: parseFloat(formatUnits(bonusInfo?.developmentGains || 0n, 18)),
      icon: <Building2 size={16} />,
      color: 'error',
      description: 'Platform development rewards',
      source: 'Development Fund',
      addresses: [],
    },
  ];

  // Calculate additional metrics
  const totalDeposits = stakeHistory?.reduce((sum, stake) => {
    const amount = stake.amount ? parseFloat(formatUnits(stake.amount, 18)) : 0;
    return sum + amount;
  }, 0) || 0;
  const activeDeposits = stakeHistory?.filter((stake) => !stake.isComplete).length || 0;
  const completedDeposits = stakeHistory?.filter((stake) => stake.isComplete).length || 0;
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
              <Typography variant="h4" fontWeight="bold">
                {formatCurrency(totalDeposits)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ backgroundColor: 'primary.main', color: 'white' }}>
            <CardContent>
              <Typography variant="h6">🔄 Active Stakes</Typography>
              <Typography variant="h4" fontWeight="bold">
                {activeDeposits}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ backgroundColor: 'info.main', color: 'white' }}>
            <CardContent>
              <Typography variant="h6">✅ Completed</Typography>
              <Typography variant="h4" fontWeight="bold">
                {completedDeposits}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ backgroundColor: 'secondary.main', color: 'white' }}>
            <CardContent>
              <Typography variant="h6">👥 Team Size</Typography>
              <Typography variant="h4" fontWeight="bold">
                {directReferrals?.length || 0}
              </Typography>
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
                  <TableCell>
                    <strong>📅 Date</strong>
                  </TableCell>
                  <TableCell>
                    <strong>💰 Amount</strong>
                  </TableCell>
                  <TableCell>
                    <strong>👤 From User</strong>
                  </TableCell>
                  <TableCell>
                    <strong>📊 Level</strong>
                  </TableCell>
                  <TableCell>
                    <strong>🎁 Reward Type</strong>
                  </TableCell>
                  <TableCell>
                    <strong>🔧 Actions</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {historyData?.earningsDetails && historyData.earningsDetails.length > 0 ? (
                  historyData.earningsDetails.map((earning, index) => {
                    const amount = parseFloat(formatUnits(earning.amount || 0n, 18));
                    return (
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
                              +{formatCurrency(amount)}
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
                                <Typography variant="body2" fontWeight="bold">
                                  Full Address:
                                </Typography>
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
                                    transform: 'scale(1.1)',
                                  },
                                  transition: 'all 0.2s ease',
                                }}
                              >
                                <Copy size={16} />
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
                                    transform: 'scale(1.1)',
                                  },
                                  transition: 'all 0.2s ease',
                                }}
                              >
                                <ExternalLink size={16} />
                              </IconButton>
                            </Tooltip>
                          </Box>
                        </TableCell>
                      </TableRow>
                    );
                  })
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
                <Typography variant="h5">{formatNumber(bonusInfo?.totalStake || 0)}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography variant="subtitle1" gutterBottom>
                  Total Withdrawn
                </Typography>
                <Typography variant="h5">{formatCurrency(parseFloat(formatUnits(bonusInfo?.totalWithdrwan || 0n, 18)))}</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HistoryPage;
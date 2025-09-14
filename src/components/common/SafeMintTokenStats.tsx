import React, { useState, useEffect } from 'react';
import { 
  Card, 
  CardContent, 
  Box, 
  Typography, 
  Grid,
  CircularProgress, 
  Alert,
  Chip,
  Divider,
  IconButton
} from '@mui/material';
import { 
  TrendingUp as TrendingUpIcon,
  AccountBalance as AccountBalanceIcon,
  Token as TokenIcon,
  Refresh as RefreshIcon,
  Schedule as ScheduleIcon
} from '@mui/icons-material';
import { formatEther } from 'viem';
import safeMintTokenService, { SafeMintTokenInfo } from '../../services/safeMintTokenService';

interface SafeMintTokenStatsProps {
  autoRefresh?: boolean;
  refreshInterval?: number; // in milliseconds
}

const SafeMintTokenStats: React.FC<SafeMintTokenStatsProps> = ({ 
  autoRefresh = true, 
  refreshInterval = 30000 // 30 seconds
}) => {
  const [tokenInfo, setTokenInfo] = useState<SafeMintTokenInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchTokenInfo = async () => {
    try {
      setError(null);
      console.log("🔄 [SafeMintTokenStats] Fetching token info...");
      
      const info = await safeMintTokenService.getTokenInfo();
      setTokenInfo(info);
      setLastUpdated(new Date());
      console.log("✅ [SafeMintTokenStats] Token info updated successfully");
    } catch (err: any) {
      console.error("❌ [SafeMintTokenStats] Error fetching token info:", err);
      setError(err.message || 'Failed to fetch token information');
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = () => {
    setLoading(true);
    fetchTokenInfo();
  };

  useEffect(() => {
    fetchTokenInfo();
  }, []);

  useEffect(() => {
    if (!autoRefresh) return;

    const interval = setInterval(() => {
      fetchTokenInfo();
    }, refreshInterval);

    return () => clearInterval(interval);
  }, [autoRefresh, refreshInterval]);

  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    
    if (diffInSeconds < 60) return `${diffInSeconds}s ago`;
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    return `${Math.floor(diffInSeconds / 3600)}h ago`;
  };

  const calculateMarketCap = () => {
    if (!tokenInfo) return '0';
    const marketCap = tokenInfo.totalSupply * tokenInfo.rateInUSDT / BigInt(10**18);
    return safeMintTokenService.formatBalance(marketCap);
  };

  if (loading && !tokenInfo) {
    return (
      <Card sx={{ p: { xs: 1.5, sm: 2 }, boxShadow: 2, height: '100%', backgroundColor: 'white' }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 200 }}>
            <CircularProgress size={40} />
          </Box>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card sx={{ p: { xs: 1.5, sm: 2 }, boxShadow: 2, height: '100%', backgroundColor: 'white' }}>
        <CardContent>
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <IconButton onClick={handleRefresh} disabled={loading}>
              <RefreshIcon />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    );
  }

  if (!tokenInfo) {
    return (
      <Card sx={{ p: { xs: 1.5, sm: 2 }, boxShadow: 2, height: '100%', backgroundColor: 'white' }}>
        <CardContent>
          <Typography variant="body2" color="text.secondary" align="center">
            No token data available
          </Typography>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card sx={{ p: { xs: 1.5, sm: 2 }, boxShadow: 2, height: '100%', backgroundColor: 'white' }}>
      <CardContent>
        {/* Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <TokenIcon sx={{ mr: 1, color: 'primary.main', fontSize: '1.5rem' }} />
            <Typography variant="h6" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' }, fontWeight: 'bold' }}>
              {tokenInfo.name} ({tokenInfo.symbol})
            </Typography>
          </Box>
          <IconButton 
            size="small" 
            onClick={handleRefresh} 
            disabled={loading}
            sx={{ p: 0.5 }}
          >
            <RefreshIcon sx={{ fontSize: '1.2rem' }} />
          </IconButton>
        </Box>

        {/* Price Section */}
        <Box sx={{ mb: 3, textAlign: 'center' }}>
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 'bold', 
              color: 'primary.main',
              fontSize: { xs: '1.5rem', sm: '2rem' },
              mb: 0.5
            }}
          >
            ${safeMintTokenService.formatRate(tokenInfo.rateInUSDT)}
          </Typography>
          <Typography 
            variant="body2" 
            color="text.secondary" 
            sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
          >
            Current Exchange Rate
          </Typography>
        </Box>

        <Divider sx={{ mb: 2 }} />

        {/* Token Statistics Grid */}
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={6}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'success.main', fontSize: '1rem' }}>
                ${safeMintTokenService.formatBalance(tokenInfo.reserves.usdtBalance)}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
                USDT Pool
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'info.main', fontSize: '1rem' }}>
                {safeMintTokenService.formatBalance(tokenInfo.totalSupply)}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
                Total Supply
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Additional Stats */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
              Market Cap:
            </Typography>
            <Typography variant="body2" sx={{ fontSize: '0.875rem', fontWeight: 'medium' }}>
              ${calculateMarketCap()}
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
              Token Supply:
            </Typography>
            <Typography variant="body2" sx={{ fontSize: '0.875rem', fontWeight: 'medium' }}>
              {safeMintTokenService.formatBalance(tokenInfo.reserves.tokenSupply)}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
              Last Update:
            </Typography>
            <Typography variant="body2" sx={{ fontSize: '0.875rem', fontWeight: 'medium' }}>
              {new Date(Number(tokenInfo.reserves.blockTimestampLast) * 1000).toLocaleTimeString()}
            </Typography>
          </Box>
        </Box>

        {/* Status Chips */}
        <Box sx={{ display: 'flex', gap: 1, mt: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Chip 
            label="Live Data" 
            size="small" 
            color="success" 
            variant="outlined"
            sx={{ fontSize: '0.7rem', height: 24 }}
            icon={<TrendingUpIcon sx={{ fontSize: '0.8rem' }} />}
          />
          {lastUpdated && (
            <Chip 
              label={formatTimeAgo(lastUpdated)} 
              size="small" 
              variant="outlined"
              sx={{ fontSize: '0.7rem', height: 24 }}
              icon={<ScheduleIcon sx={{ fontSize: '0.8rem' }} />}
            />
          )}
          {loading && (
            <Chip 
              label="Updating..." 
              size="small" 
              color="primary"
              variant="outlined"
              sx={{ fontSize: '0.7rem', height: 24 }}
              icon={<CircularProgress size={12} />}
            />
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default SafeMintTokenStats;

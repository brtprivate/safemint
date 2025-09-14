import React, { useState, useEffect } from 'react';
import { 
  Card, 
  CardContent, 
  Box, 
  Typography, 
  CircularProgress, 
  Alert,
  Chip,
  Tooltip,
  IconButton
} from '@mui/material';
import { 
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  Refresh as RefreshIcon,
  Info as InfoIcon
} from '@mui/icons-material';
import { formatEther } from 'viem';
import safeMintTokenService, { SafeMintTokenInfo } from '../../services/safeMintTokenService';

interface TokenPriceCardProps {
  autoRefresh?: boolean;
  refreshInterval?: number; // in milliseconds
}

const TokenPriceCard: React.FC<TokenPriceCardProps> = ({ 
  autoRefresh = true, 
  refreshInterval = 30000 // 30 seconds
}) => {
  const [tokenInfo, setTokenInfo] = useState<SafeMintTokenInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [previousRate, setPreviousRate] = useState<bigint | null>(null);

  const fetchTokenInfo = async () => {
    try {
      setError(null);
      console.log("🔄 [TokenPriceCard] Fetching token info...");
      
      const info = await safeMintTokenService.getTokenInfo();
      
      // Store previous rate for trend calculation
      if (tokenInfo?.rateInUSDT) {
        setPreviousRate(tokenInfo.rateInUSDT);
      }
      
      setTokenInfo(info);
      setLastUpdated(new Date());
      console.log("✅ [TokenPriceCard] Token info updated successfully");
    } catch (err: any) {
      console.error("❌ [TokenPriceCard] Error fetching token info:", err);
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

  const getRateTrend = () => {
    if (!tokenInfo || !previousRate) return null;
    
    const current = tokenInfo.rateInUSDT;
    const previous = previousRate;
    
    if (current > previous) return 'up';
    if (current < previous) return 'down';
    return 'stable';
  };

  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    
    if (diffInSeconds < 60) return `${diffInSeconds}s ago`;
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    return `${Math.floor(diffInSeconds / 3600)}h ago`;
  };

  const getTrendIcon = () => {
    const trend = getRateTrend();
    if (trend === 'up') return <TrendingUpIcon sx={{ color: 'success.main', fontSize: '1rem' }} />;
    if (trend === 'down') return <TrendingDownIcon sx={{ color: 'error.main', fontSize: '1rem' }} />;
    return null;
  };

  const getTrendColor = () => {
    const trend = getRateTrend();
    if (trend === 'up') return 'success.main';
    if (trend === 'down') return 'error.main';
    return 'text.primary';
  };

  if (loading && !tokenInfo) {
    return (
      <Card sx={{ p: { xs: 1.5, sm: 2 }, boxShadow: 2, height: '100%', backgroundColor: 'white' }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 120 }}>
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
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.5 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' }, fontWeight: 'bold' }}>
              {tokenInfo.symbol} Price
            </Typography>
            <Tooltip title="SafeMint Token Exchange Rate">
              <InfoIcon sx={{ ml: 0.5, fontSize: '1rem', color: 'text.secondary' }} />
            </Tooltip>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {getTrendIcon()}
            <IconButton 
              size="small" 
              onClick={handleRefresh} 
              disabled={loading}
              sx={{ p: 0.5 }}
            >
              <RefreshIcon sx={{ fontSize: '1rem' }} />
            </IconButton>
          </Box>
        </Box>

        {/* Price Display */}
        <Box sx={{ mb: 2 }}>
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 'bold', 
              color: getTrendColor(),
              fontSize: { xs: '1.25rem', sm: '1.5rem' },
              display: 'flex',
              alignItems: 'center',
              gap: 0.5
            }}
          >
            ${safeMintTokenService.formatRate(tokenInfo.rateInUSDT)}
            {loading && <CircularProgress size={16} />}
          </Typography>
          <Typography 
            variant="body2" 
            color="text.secondary" 
            sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
          >
            per {tokenInfo.symbol} token
          </Typography>
        </Box>

        {/* Token Stats */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
              Total Supply:
            </Typography>
            <Typography variant="body2" sx={{ fontSize: '0.75rem', fontWeight: 'medium' }}>
              {safeMintTokenService.formatBalance(tokenInfo.totalSupply)}
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
              USDT Pool:
            </Typography>
            <Typography variant="body2" sx={{ fontSize: '0.75rem', fontWeight: 'medium' }}>
              ${safeMintTokenService.formatBalance(tokenInfo.reserves.usdtBalance)}
            </Typography>
          </Box>
        </Box>

        {/* Status Chips */}
        <Box sx={{ display: 'flex', gap: 1, mt: 2, flexWrap: 'wrap' }}>
          <Chip 
            label="Live" 
            size="small" 
            color="success" 
            variant="outlined"
            sx={{ fontSize: '0.7rem', height: 20 }}
          />
          {lastUpdated && (
            <Chip 
              label={formatTimeAgo(lastUpdated)} 
              size="small" 
              variant="outlined"
              sx={{ fontSize: '0.7rem', height: 20 }}
            />
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default TokenPriceCard;

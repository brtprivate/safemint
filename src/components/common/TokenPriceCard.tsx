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
  TrendingUp,
  TrendingDown,
  RefreshCw,
  Info,
  Coins
} from 'lucide-react';
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
    if (trend === 'up') return <TrendingUp size={16} style={{ color: '#4caf50' }} />;
    if (trend === 'down') return <TrendingDown size={16} style={{ color: '#f44336' }} />;
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
              <RefreshCw size={20} />
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
    <Card sx={{
      p: { xs: 1, sm: 1.5, md: 2 },
      boxShadow: { xs: 1, sm: 2 },
      height: 'auto',
      minHeight: { xs: '160px', sm: '180px', md: '200px' },
      backgroundColor: 'white',
      borderRadius: { xs: 2, sm: 3 },
      transition: 'all 0.3s ease',
      '&:hover': {
        boxShadow: { xs: 2, sm: 4 },
        transform: 'translateY(-2px)'
      }
    }}>
      <CardContent sx={{
        p: { xs: 1, sm: 1.5, md: 2 },
        '&:last-child': { pb: { xs: 1, sm: 1.5, md: 2 } },
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}>
        {/* Header with Refresh Button */}
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: { xs: 1, sm: 1.5 }
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 0.5, sm: 1 } }}>
            <Coins
              size={24}
              style={{
                color: '#1976d2'
              }}
            />
            {getTrendIcon()}
          </Box>
          <IconButton
            size="small"
            onClick={handleRefresh}
            disabled={loading}
            sx={{
              p: { xs: 0.3, sm: 0.5 },
              minWidth: 'auto',
              '& .MuiSvgIcon-root': {
                fontSize: { xs: '0.9rem', sm: '1rem' }
              }
            }}
          >
            <RefreshCw size={16} />
          </IconButton>
        </Box>

        {/* Price Display - First Row */}
        <Box sx={{ textAlign: 'center', mb: { xs: 1, sm: 1.5 } }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              color: getTrendColor(),
              fontSize: { xs: '1.3rem', sm: '1.5rem', md: '1.8rem' },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 0.5,
              lineHeight: 1.2,
              mb: 0.5
            }}
          >
            ${safeMintTokenService.formatRate(tokenInfo.rateInUSDT)}
            {loading && <CircularProgress size={16} />}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.85rem' }
            }}
          >
            SELFMINT Price
          </Typography>
        </Box>

        {/* Token Name - Second Row */}
        <Box sx={{ textAlign: 'center', mb: { xs: 1, sm: 1.5 } }}>
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1.1rem' },
              fontWeight: 'bold',
              color: 'text.primary',
              lineHeight: 1.2
            }}
          >
            SELFMINT TOKEN 
          </Typography>
        </Box>

        {/* Token Stats */}
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: 0.8, sm: 1 },
          mb: { xs: 1, sm: 1.5 }
        }}>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 0.5
          }}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: { xs: '0.7rem', sm: '0.75rem' } }}
            >
              Total Supply:
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: { xs: '0.7rem', sm: '0.75rem' },
                fontWeight: 'medium',
                textAlign: 'right'
              }}
            >
              {safeMintTokenService.formatBalance(tokenInfo.totalSupply)}
            </Typography>
          </Box>

          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 0.5
          }}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: { xs: '0.7rem', sm: '0.75rem' } }}
            >
              USDT Pool:
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: { xs: '0.7rem', sm: '0.75rem' },
                fontWeight: 'medium',
                textAlign: 'right'
              }}
            >
              ${safeMintTokenService.formatBalance(tokenInfo.reserves.usdtBalance)}
            </Typography>
          </Box>
        </Box>

        {/* Status Chips */}
        {/* <Box sx={{
          display: 'flex',
          gap: { xs: 0.5, sm: 1 },
          mt: { xs: 1, sm: 2 },
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <Chip
            label="Live"
            size="small"
            color="success"
            variant="outlined"
            sx={{
              fontSize: { xs: '0.6rem', sm: '0.7rem' },
              height: { xs: 18, sm: 20 },
              '& .MuiChip-label': {
                px: { xs: 0.5, sm: 1 }
              }
            }}
          />
          {lastUpdated && (
            <Chip
              label={formatTimeAgo(lastUpdated)}
              size="small"
              variant="outlined"
              sx={{
                fontSize: { xs: '0.6rem', sm: '0.7rem' },
                height: { xs: 18, sm: 20 },
                '& .MuiChip-label': {
                  px: { xs: 0.5, sm: 1 }
                }
              }}
            />
          )}
        </Box> */}
      </CardContent>
    </Card>
  );
};

export default TokenPriceCard;

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
        {/* Header */}
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: { xs: 1, sm: 1.5 }
        }}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            minWidth: 0,
            flex: 1
          }}>
            <TokenIcon sx={{
              mr: { xs: 0.5, sm: 1 },
              color: 'primary.main',
              fontSize: { xs: '1.2rem', sm: '1.5rem' }
            }} />
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
                fontWeight: 'bold',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
            >
              Token Stats
            </Typography>
          </Box>
          <IconButton
            size="small"
            onClick={handleRefresh}
            disabled={loading}
            sx={{
              p: { xs: 0.3, sm: 0.5 },
              minWidth: 'auto',
              '& .MuiSvgIcon-root': {
                fontSize: { xs: '1rem', sm: '1.2rem' }
              }
            }}
          >
            <RefreshIcon />
          </IconButton>
        </Box>

        {/* Compact Token Statistics */}
        <Grid container spacing={{ xs: 1, sm: 1.5 }} sx={{ mb: { xs: 1, sm: 1.5 }, flex: 1 }}>
          <Grid item xs={6}>
            <Box sx={{
              textAlign: 'center',
              p: { xs: 0.5, sm: 0.8 },
              borderRadius: 1,
              backgroundColor: 'success.light',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  color: 'success.main',
                  fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.95rem' },
                  lineHeight: 1.1
                }}
              >
                ${safeMintTokenService.formatBalance(tokenInfo.reserves.usdtBalance)}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontSize: { xs: '0.6rem', sm: '0.65rem', md: '0.7rem' } }}
              >
                USDT Pool
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{
              textAlign: 'center',
              p: { xs: 0.5, sm: 0.8 },
              borderRadius: 1,
              backgroundColor: 'info.light',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  color: 'info.main',
                  fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.95rem' },
                  lineHeight: 1.1
                }}
              >
                {safeMintTokenService.formatBalance(tokenInfo.totalSupply)}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontSize: { xs: '0.6rem', sm: '0.65rem', md: '0.7rem' } }}
              >
                Total Supply
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Compact Market Cap */}
        <Box sx={{
          textAlign: 'center',
          p: { xs: 0.5, sm: 0.8 },
          borderRadius: 1,
          backgroundColor: 'grey.50',
          mb: { xs: 1, sm: 1.5 }
        }}>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem' },
              fontWeight: 'bold',
              color: 'primary.main'
            }}
          >
            Market Cap: ${calculateMarketCap()}
          </Typography>
        </Box>

        {/* Status Indicator */}
        <Box sx={{
          display: 'flex',
          gap: { xs: 0.5, sm: 1 },
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          {loading ? (
            <Chip
              label="Updating..."
              size="small"
              color="primary"
              variant="outlined"
              sx={{
                fontSize: { xs: '0.6rem', sm: '0.65rem' },
                height: { xs: 18, sm: 20 },
                '& .MuiChip-label': {
                  px: { xs: 0.5, sm: 0.8 }
                }
              }}
              icon={<CircularProgress size={10} />}
            />
          ) : (
            <Chip
              label="Live"
              size="small"
              color="success"
              variant="outlined"
              sx={{
                fontSize: { xs: '0.6rem', sm: '0.65rem' },
                height: { xs: 18, sm: 20 },
                '& .MuiChip-label': {
                  px: { xs: 0.5, sm: 0.8 }
                }
              }}
              icon={<TrendingUpIcon sx={{ fontSize: '0.7rem' }} />}
            />
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default SafeMintTokenStats;

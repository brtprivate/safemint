import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  Box,
  Typography,
  CircularProgress,
  Alert,
  Chip,
  Divider,
  IconButton
} from '@mui/material';
import {
  TrendingUp,
  Building2,
  Coins,
  RefreshCw,
  Clock
} from 'lucide-react';
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
    <Box sx={{
      display: 'grid',
      gridTemplateColumns: {
        xs: '1fr',
        sm: 'repeat(2, 1fr)',
        md: 'repeat(4, 1fr)'
      },
      gap: { xs: 2, sm: 2, md: 3 },
      width: '100%',
      p: { xs: 1, sm: 2 }
    }}>
      {/* USDT Pool Card */}
      <Card sx={{
        p: { xs: 1.5, sm: 2 },
        boxShadow: { xs: 2, sm: 3 },
        height: '100%',
        backgroundColor: 'white',
        borderRadius: { xs: 2, sm: 3 },
        border: '2px solid rgba(255, 160, 0, 0.2)',
        background: 'linear-gradient(135deg, rgba(255, 160, 0, 0.05) 0%, rgba(255, 143, 0, 0.05) 100%)',
        transition: 'all 0.3s ease',
        '&:hover': {
          boxShadow: { xs: 3, sm: 6 },
          transform: 'translateY(-4px)',
          border: '2px solid rgba(255, 160, 0, 0.4)',
        }
      }}>
        <CardContent sx={{
          p: { xs: 1, sm: 1.5 },
          '&:last-child': { pb: { xs: 1, sm: 1.5 } },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          height: '100%',
          justifyContent: 'center'
        }}>
          <Building2
            size={48}
            style={{
              color: '#FFA000',
              marginBottom: 8,
              filter: 'drop-shadow(0 2px 4px rgba(255, 160, 0, 0.3))'
            }}
          />
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              color: '#FFA000',
              fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.6rem' },
              mb: 0.5,
              textShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            ${safeMintTokenService.formatBalance(tokenInfo.reserves.usdtBalance)}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: 'text.primary',
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
              letterSpacing: '0.5px'
            }}
          >
            USDT Pool
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: { xs: '0.7rem', sm: '0.8rem' },
              mt: 0.5,
              fontWeight: 500
            }}
          >
            Liquidity Reserve
          </Typography>
        </CardContent>
      </Card>

      {/* Total Supply Card */}
      <Card sx={{
        p: { xs: 1.5, sm: 2 },
        boxShadow: { xs: 2, sm: 3 },
        height: '100%',
        backgroundColor: 'white',
        borderRadius: { xs: 2, sm: 3 },
        border: '2px solid rgba(255, 160, 0, 0.2)',
        background: 'linear-gradient(135deg, rgba(255, 160, 0, 0.05) 0%, rgba(255, 143, 0, 0.05) 100%)',
        transition: 'all 0.3s ease',
        '&:hover': {
          boxShadow: { xs: 3, sm: 6 },
          transform: 'translateY(-4px)',
          border: '2px solid rgba(255, 160, 0, 0.4)',
        }
      }}>
        <CardContent sx={{
          p: { xs: 1, sm: 1.5 },
          '&:last-child': { pb: { xs: 1, sm: 1.5 } },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          height: '100%',
          justifyContent: 'center'
        }}>
          <Coins
            size={48}
            style={{
              color: '#FFA000',
              marginBottom: 8,
              filter: 'drop-shadow(0 2px 4px rgba(255, 160, 0, 0.3))'
            }}
          />
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              color: '#FFA000',
              fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.6rem' },
              mb: 0.5,
              textShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            {safeMintTokenService.formatBalance(tokenInfo.totalSupply)}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: 'text.primary',
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
              letterSpacing: '0.5px'
            }}
          >
            Total Supply
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: { xs: '0.7rem', sm: '0.8rem' },
              mt: 0.5,
              fontWeight: 500
            }}
          >
            Circulating Tokens
          </Typography>
        </CardContent>
      </Card>

      {/* Market Cap Card */}
      <Card sx={{
        p: { xs: 1.5, sm: 2 },
        boxShadow: { xs: 2, sm: 3 },
        height: '100%',
        backgroundColor: 'white',
        borderRadius: { xs: 2, sm: 3 },
        border: '2px solid rgba(255, 160, 0, 0.2)',
        background: 'linear-gradient(135deg, rgba(255, 160, 0, 0.05) 0%, rgba(255, 143, 0, 0.05) 100%)',
        transition: 'all 0.3s ease',
        '&:hover': {
          boxShadow: { xs: 3, sm: 6 },
          transform: 'translateY(-4px)',
          border: '2px solid rgba(255, 160, 0, 0.4)',
        }
      }}>
        <CardContent sx={{
          p: { xs: 1, sm: 1.5 },
          '&:last-child': { pb: { xs: 1, sm: 1.5 } },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          height: '100%',
          justifyContent: 'center'
        }}>
          <TrendingUp
            size={48}
            style={{
              color: '#FFA000',
              marginBottom: 8,
              filter: 'drop-shadow(0 2px 4px rgba(255, 160, 0, 0.3))'
            }}
          />
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              color: '#FFA000',
              fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.6rem' },
              mb: 0.5,
              textShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            ${calculateMarketCap()}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: 'text.primary',
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
              letterSpacing: '0.5px'
            }}
          >
            Market Cap
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: { xs: '0.7rem', sm: '0.8rem' },
              mt: 0.5,
              fontWeight: 500
            }}
          >
            Total Market Value
          </Typography>
        </CardContent>
      </Card>

      {/* Token Price Card */}
      <Card sx={{
        p: { xs: 1.5, sm: 2 },
        boxShadow: { xs: 2, sm: 3 },
        height: '100%',
        backgroundColor: 'white',
        borderRadius: { xs: 2, sm: 3 },
        border: '2px solid rgba(255, 160, 0, 0.2)',
        background: 'linear-gradient(135deg, rgba(255, 160, 0, 0.05) 0%, rgba(255, 143, 0, 0.05) 100%)',
        transition: 'all 0.3s ease',
        '&:hover': {
          boxShadow: { xs: 3, sm: 6 },
          transform: 'translateY(-4px)',
          border: '2px solid rgba(255, 160, 0, 0.4)',
        }
      }}>
        <CardContent sx={{
          p: { xs: 1, sm: 1.5 },
          '&:last-child': { pb: { xs: 1, sm: 1.5 } },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          height: '100%',
          justifyContent: 'center'
        }}>
          <TrendingUp
            size={48}
            style={{
              color: '#FFA000',
              marginBottom: 8,
              filter: 'drop-shadow(0 2px 4px rgba(255, 160, 0, 0.3))',
              transform: 'rotate(45deg)'
            }}
          />
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              color: '#FFA000',
              fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.6rem' },
              mb: 0.5,
              textShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            ${safeMintTokenService.formatBalance(tokenInfo.rateInUSDT)}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: 'text.primary',
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
              letterSpacing: '0.5px'
            }}
          >
            Token Price
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: { xs: '0.7rem', sm: '0.8rem' },
              mt: 0.5,
              fontWeight: 500
            }}
          >
            Current Rate
          </Typography>
        </CardContent>
      </Card>

    
    </Box>
  );
};

export default SafeMintTokenStats;

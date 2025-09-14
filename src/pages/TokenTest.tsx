import React, { useState } from 'react';
import { 
  Container, 
  Card, 
  CardContent, 
  Typography, 
  Button, 
  Box, 
  Alert,
  CircularProgress,
  Grid
} from '@mui/material';
import { formatEther } from 'viem';
import safeMintTokenService from '../services/safeMintTokenService';
import TokenPriceCard from '../components/common/TokenPriceCard';
import SafeMintTokenStats from '../components/common/SafeMintTokenStats';

const TokenTest: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const testGetRate = async () => {
    setLoading(true);
    setError(null);
    try {
      const rate = await safeMintTokenService.getRateInUSDT();
      setResult({
        type: 'Rate',
        data: {
          raw: rate.toString(),
          formatted: safeMintTokenService.formatRate(rate),
          ether: formatEther(rate)
        }
      });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const testGetReserves = async () => {
    setLoading(true);
    setError(null);
    try {
      const reserves = await safeMintTokenService.getReserves();
      setResult({
        type: 'Reserves',
        data: {
          tokenSupply: {
            raw: reserves.tokenSupply.toString(),
            formatted: safeMintTokenService.formatBalance(reserves.tokenSupply),
            ether: formatEther(reserves.tokenSupply)
          },
          usdtBalance: {
            raw: reserves.usdtBalance.toString(),
            formatted: safeMintTokenService.formatBalance(reserves.usdtBalance),
            ether: formatEther(reserves.usdtBalance)
          },
          blockTimestampLast: reserves.blockTimestampLast.toString()
        }
      });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const testGetTokenInfo = async () => {
    setLoading(true);
    setError(null);
    try {
      const info = await safeMintTokenService.getTokenInfo();
      setResult({
        type: 'Token Info',
        data: {
          name: info.name,
          symbol: info.symbol,
          decimals: info.decimals,
          totalSupply: {
            raw: info.totalSupply.toString(),
            formatted: safeMintTokenService.formatBalance(info.totalSupply),
            ether: formatEther(info.totalSupply)
          },
          rateInUSDT: {
            raw: info.rateInUSDT.toString(),
            formatted: safeMintTokenService.formatRate(info.rateInUSDT),
            ether: formatEther(info.rateInUSDT)
          },
          reserves: {
            tokenSupply: {
              raw: info.reserves.tokenSupply.toString(),
              formatted: safeMintTokenService.formatBalance(info.reserves.tokenSupply),
              ether: formatEther(info.reserves.tokenSupply)
            },
            usdtBalance: {
              raw: info.reserves.usdtBalance.toString(),
              formatted: safeMintTokenService.formatBalance(info.reserves.usdtBalance),
              ether: formatEther(info.reserves.usdtBalance)
            },
            blockTimestampLast: info.reserves.blockTimestampLast.toString()
          }
        }
      });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold', mb: 4 }}>
        SafeMint Token Service Test
      </Typography>

      {/* Test Buttons */}
      <Card sx={{ mb: 4, p: 2 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Test Functions
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Button 
              variant="contained" 
              onClick={testGetRate} 
              disabled={loading}
              sx={{ minWidth: 120 }}
            >
              Get Rate
            </Button>
            <Button 
              variant="contained" 
              onClick={testGetReserves} 
              disabled={loading}
              sx={{ minWidth: 120 }}
            >
              Get Reserves
            </Button>
            <Button 
              variant="contained" 
              onClick={testGetTokenInfo} 
              disabled={loading}
              sx={{ minWidth: 120 }}
            >
              Get Token Info
            </Button>
          </Box>
        </CardContent>
      </Card>

      {/* Loading */}
      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <CircularProgress />
        </Box>
      )}

      {/* Error */}
      {error && (
        <Alert severity="error" sx={{ mb: 4 }}>
          {error}
        </Alert>
      )}

      {/* Results */}
      {result && (
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {result.type} Results
            </Typography>
            <Box component="pre" sx={{ 
              backgroundColor: 'grey.100', 
              p: 2, 
              borderRadius: 1, 
              overflow: 'auto',
              fontSize: '0.875rem'
            }}>
              {JSON.stringify(result.data, null, 2)}
            </Box>
          </CardContent>
        </Card>
      )}

      {/* Component Tests */}
      <Typography variant="h5" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold', mb: 3 }}>
        Component Tests
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Token Price Card
          </Typography>
          <TokenPriceCard autoRefresh={false} />
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            SafeMint Token Stats
          </Typography>
          <SafeMintTokenStats autoRefresh={false} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default TokenTest;

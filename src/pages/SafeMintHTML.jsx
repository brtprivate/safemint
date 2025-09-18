import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Button, Grid, Card, AppBar, Toolbar, IconButton } from '@mui/material';

const SafeMintHTML = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Add custom styles for this page
    const style = document.createElement('style');
    style.textContent = `
      .safemint-page {
        margin: 0;
        overflow-x: hidden;
        background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
        color: white;
        font-family: 'Inter', sans-serif;
        min-height: 100vh;
      }

      .glass-card {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 20px;
        transition: all 0.3s ease;
      }

      .glass-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 40px rgba(0, 255, 255, 0.2);
      }

      .gradient-text {
        background: linear-gradient(90deg, #00d4ff, #0099cc);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }

      .btn-primary {
        background: linear-gradient(90deg, #00d4ff, #0099cc);
        color: white;
        border: none;
        padding: 12px 30px;
        border-radius: 50px;
        font-weight: 600;
        transition: all 0.3s ease;
        cursor: pointer;
      }

      .btn-primary:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 30px rgba(0, 212, 255, 0.4);
      }

      .stats-card {
        background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(0, 153, 204, 0.1));
        border: 1px solid rgba(0, 212, 255, 0.3);
        padding: 1.5rem;
        border-radius: 12px;
        text-align: center;
      }

      .level-badge {
        background: linear-gradient(135deg, #ffd700, #ffed4e);
        color: #000;
        padding: 8px 16px;
        border-radius: 20px;
        font-weight: bold;
        font-size: 0.875rem;
        display: inline-block;
      }

      .bonus-highlight {
        background: linear-gradient(135deg, #00ff88, #00cc6a);
        color: white;
        padding: 4px 12px;
        border-radius: 15px;
        font-size: 0.75rem;
        font-weight: bold;
        display: inline-block;
      }

      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
        100% { transform: translateY(0px); }
      }

      .floating {
        animation: float 3s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <Box className="safemint-page" sx={{ pt: 0 }}>
      {/* Enhanced Navigation */}
      <AppBar
        position="fixed"
        sx={{
          background: 'rgba(15, 15, 35, 0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0, 212, 255, 0.1)',
          zIndex: 1100
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Logo Section */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: 3,
                background: 'linear-gradient(135deg, #00d4ff, #0099cc, #00ff88)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 25px rgba(0, 212, 255, 0.4)',
              }}
            >
              <Typography sx={{ fontSize: '24px', fontWeight: 900, color: '#000' }}>
                S
              </Typography>
            </Box>
            <Typography
              variant="h5"
              className="gradient-text"
              sx={{ fontWeight: 700, fontSize: '1.75rem' }}
            >
              SafeMint
            </Typography>
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', lg: 'flex' }, gap: 2 }}>
            {['Home', 'Smart Contract', 'Technology', 'About', 'Opportunity', 'Roadmap', 'Terms'].map((item) => (
              <Button
                key={item}
                sx={{
                  color: '#e2e8f0',
                  fontWeight: 500,
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: '#00d4ff',
                    backgroundColor: 'rgba(0, 212, 255, 0.1)',
                  },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>

          {/* Action Buttons */}
          <Box sx={{ display: { xs: 'none', lg: 'flex' }, gap: 2 }}>
            <Button
              variant="outlined"
              sx={{
                borderColor: 'rgba(0, 212, 255, 0.5)',
                color: '#00d4ff',
                borderRadius: 25,
                px: 3,
              }}
            >
              Login
            </Button>
            <Button
              className="btn-primary"
              sx={{
                borderRadius: 25,
                px: 3,
              }}
            >
              Register
            </Button>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            sx={{ display: { xs: 'block', lg: 'none' }, color: '#00d4ff' }}
            onClick={toggleMobileMenu}
          >
            ☰
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          pt: 10,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h1"
            className="gradient-text floating"
            sx={{
              fontSize: { xs: '3rem', sm: '4rem', md: '6rem', lg: '8rem' },
              fontWeight: 900,
              mb: 4,
              lineHeight: 0.9,
            }}
          >
            SafeMint
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '1.5rem', md: '2.5rem' },
              mb: 4,
              color: '#e2e8f0',
            }}
          >
            Smart Contract Investment Platform
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 6,
              color: '#94a3b8',
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            The SafeMint project is designed around a simple yet powerful economic principle:
            Flow of Value In (IN) and Flow of Value Out (OUT). Create continuous cycles of
            buying, selling, and reinvesting for sustainable growth.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              className="btn-primary"
              size="large"
              sx={{
                fontSize: '1.1rem',
                px: 6,
                py: 2,
              }}
            >
              Start Investing
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: '#00d4ff',
                color: '#00d4ff',
                fontSize: '1.1rem',
                px: 6,
                py: 2,
                borderRadius: 25,
              }}
            >
              Learn More
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Live Stats */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Card className="glass-card" sx={{ p: 4 }}>
          <Grid container spacing={4}>
            {[
              { icon: '👥', value: '15,847', label: 'Active Users' },
              { icon: '💰', value: '$2.4M', label: 'Total Value Locked' },
              { icon: '📈', value: '156.7%', label: 'Average ROI' },
              { icon: '🌐', value: '8,234', label: 'Team Members' },
            ].map((stat, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box className="stats-card">
                  <Typography sx={{ fontSize: '2rem', mb: 1 }}>{stat.icon}</Typography>
                  <Typography variant="h4" sx={{ fontWeight: 900, color: '#00d4ff', mb: 1 }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Card>
      </Container>
    </Box>
  );
};

export default SafeMintHTML;

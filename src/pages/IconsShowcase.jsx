import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  Paper,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import CustomSVGIcons from '../components/icons/CustomSVGIcons';

const IconsShowcase = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const iconList = [
    { name: 'Users', component: CustomSVGIcons.Users, description: 'Team Members & Direct Referrals' },
    { name: 'Star', component: CustomSVGIcons.Star, description: 'Strong Teams & Achievements' },
    { name: 'BarChart3', component: CustomSVGIcons.BarChart3, description: 'Levels & Analytics' },
    { name: 'CheckCircle', component: CustomSVGIcons.CheckCircle, description: 'Active Orders & Completion' },
    { name: 'TrendingUp', component: CustomSVGIcons.TrendingUp, description: 'Growth & Earnings' },
    { name: 'DollarSign', component: CustomSVGIcons.DollarSign, description: 'Financial Transactions' },
    { name: 'Wallet', component: CustomSVGIcons.Wallet, description: 'Portfolio & Wallets' },
    { name: 'Trophy', component: CustomSVGIcons.Trophy, description: 'Leadership & Achievements' },
    { name: 'Building2', component: CustomSVGIcons.Building2, description: 'Withdrawals & Infrastructure' },
    { name: 'Users2', component: CustomSVGIcons.Users2, description: 'Team Growth Laps' },
    { name: 'Fuel', component: CustomSVGIcons.Fuel, description: 'Growth Fuels & Energy' },
    { name: 'Battery', component: CustomSVGIcons.Battery, description: 'Total Fuels & Power' },
  ];

  return (
    <Box sx={{
      backgroundColor: '#f8f9fa',
      minHeight: '100vh',
      py: { xs: 3, sm: 4, md: 6 },
      pb: { xs: 12, sm: 4, md: 4 }
    }}>
      <Container maxWidth="xl" sx={{ px: { xs: 1.5, sm: 2, md: 3 } }}>
        {/* Header */}
        <Box sx={{
          mb: { xs: 3, sm: 4, md: 6 },
          textAlign: 'center',
          p: { xs: 3, sm: 4, md: 5 },
          borderRadius: { xs: 3, sm: 4 },
          backgroundColor: 'white',
          boxShadow: { xs: 4, sm: 8, md: 12 },
          border: '1px solid rgba(0, 0, 0, 0.08)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #1976d2 0%, #42a5f5 50%, #1976d2 100%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 3s ease-in-out infinite',
          },
          '@keyframes shimmer': {
            '0%': { backgroundPosition: '-200% 0' },
            '100%': { backgroundPosition: '200% 0' }
          }
        }}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              color: 'primary.main',
              fontWeight: 800,
              fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem' },
              letterSpacing: '-0.02em',
              mb: 2
            }}
          >
            🎨 Custom SVG Icons Showcase
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
              fontWeight: 500,
              lineHeight: 1.6,
              maxWidth: '800px',
              mx: 'auto'
            }}
          >
            Beautiful, animated SVG icons designed specifically for the SafeMint Dashboard.
            Each icon features smooth animations, gradient colors, and modern design.
          </Typography>
        </Box>

        {/* Icons Grid */}
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          {iconList.map((iconData, index) => {
            const IconComponent = iconData.component;
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={iconData.name}>
                <Card sx={{
                  height: '100%',
                  backgroundColor: 'white',
                  borderRadius: { xs: 3, sm: 4 },
                  boxShadow: { xs: 2, sm: 4, md: 6 },
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  animation: 'slideInUp 0.6s ease-out',
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both',
                  '&:hover': {
                    boxShadow: { xs: 4, sm: 8, md: 12 },
                    transform: 'translateY(-8px) scale(1.02)',
                    '& .icon-container': {
                      transform: 'scale(1.1)',
                    }
                  },
                  '@keyframes slideInUp': {
                    '0%': { opacity: 0, transform: 'translateY(30px)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' }
                  }
                }}>
                  <CardContent sx={{
                    p: { xs: 3, sm: 4 },
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    {/* Icon Display */}
                    <Box
                      className="icon-container"
                      sx={{
                        mb: 3,
                        p: 4,
                        borderRadius: '50%',
                        backgroundColor: 'rgba(25, 118, 210, 0.05)',
                        border: '2px solid rgba(25, 118, 210, 0.1)',
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 180,
                        height: 180,
                      }}
                    >
                      <IconComponent size={120} animated={true} />
                    </Box>

                    {/* Icon Name */}
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{
                        color: 'primary.main',
                        fontWeight: 700,
                        fontSize: { xs: '1.1rem', sm: '1.2rem' },
                        mb: 1
                      }}
                    >
                      {iconData.name}
                    </Typography>

                    {/* Icon Description */}
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        fontSize: { xs: '0.85rem', sm: '0.9rem' },
                        lineHeight: 1.5,
                        fontWeight: 500,
                        textAlign: 'center'
                      }}
                    >
                      {iconData.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        {/* Features Section */}
        <Paper sx={{
          mt: { xs: 4, sm: 6 },
          p: { xs: 3, sm: 4, md: 5 },
          backgroundColor: 'white',
          borderRadius: { xs: 3, sm: 4 },
          boxShadow: { xs: 2, sm: 4, md: 6 },
          border: '1px solid rgba(0, 0, 0, 0.08)',
        }}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              color: 'primary.main',
              fontWeight: 700,
              mb: 3,
              textAlign: 'center'
            }}
          >
            ✨ Icon Features
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h6" color="primary.main" gutterBottom sx={{ fontWeight: 600 }}>
                  🎭 Smooth Animations
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Each icon features carefully crafted CSS animations that bring life to the interface
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h6" color="primary.main" gutterBottom sx={{ fontWeight: 600 }}>
                  🌈 Gradient Colors
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Beautiful gradient color schemes that match the SafeMint brand identity
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h6" color="primary.main" gutterBottom sx={{ fontWeight: 600 }}>
                  📱 Responsive Design
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Scalable SVG icons that look perfect on all screen sizes and devices
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default IconsShowcase;

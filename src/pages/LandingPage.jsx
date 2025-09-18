import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Chip,
  Avatar,
  Divider,
  Paper,
  Stack,
  LinearProgress,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Fab,
} from '@mui/material';
import {
  Menu,
  Home,
  FileText,
  Settings,
  Info,
  TrendingUp,
  BarChart3,
  LogIn,
  Users,
  DollarSign,
  LineChart,
  Wifi,
  Shield,
  Eye,
  Lock,
  CheckCircle,
  ArrowRight,
  Star,
  Diamond,
  Rocket,
  Crown,
  Users2,
  User,
  Fuel,
  ArrowLeftRight,
  Gift,
  Link,
  ShoppingCart,
  BarChart,
  TrendingDown,
  Play,
  Zap,
  Globe,
  Smartphone,
  Code,
  Database,
  ArrowUp,
  ChevronDown,
  X,
  ExternalLink,
  Copy,
  Layers,
  Target,
  Award,
  Briefcase,
  PieChart,
  Activity,
  Clock,
  Coins,
  Wallet,
  Building2,
  Network,
  Sparkles,
  MessageCircle,
  Twitter,
  Github,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const LandingPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);
      setShowScrollTop(scrollY > 300);

      // Update active section based on scroll position
      const sections = ['hero', 'features', 'about', 'technology', 'opportunity', 'roadmap', 'team', 'security', 'tokenomics', 'faq', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simplified navigation items for cleaner navbar
  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'Features', href: '#features' },
    { label: 'About', href: '#about' },
    { label: 'Security', href: '#security' },
    { label: 'Tokenomics', href: '#tokenomics' },
    { label: 'FAQ', href: '#faq' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGetStarted = () => {
    navigate('/app');
  };

  return (
    <Box sx={{
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #0e4b99 100%)',
      minHeight: '100vh',
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Background Particles */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `
            radial-gradient(circle at 20% 80%, rgba(0, 212, 255, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(0, 255, 136, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(255, 0, 150, 0.1) 0%, transparent 50%)
          `,
          animation: 'float 8s ease-in-out infinite',
          zIndex: 0,
        }}
      />

      {/* Clean Enhanced Navigation with Orange Gradient */}
      <AppBar
        position="fixed"
        sx={{
          background: scrolled
            ? 'linear-gradient(90deg, rgba(255, 160, 0, 0.95), rgba(255, 143, 0, 0.95))'
            : 'linear-gradient(90deg, rgba(255, 160, 0, 0.9), rgba(255, 143, 0, 0.9))',
          backdropFilter: 'blur(20px)',
          borderBottom: `1px solid ${scrolled ? 'rgba(255, 160, 0, 0.4)' : 'rgba(255, 160, 0, 0.2)'}`,
          boxShadow: scrolled ? '0 8px 32px rgba(255, 160, 0, 0.3)' : '0 4px 20px rgba(255, 160, 0, 0.2)',
          transition: 'all 0.3s ease',
          zIndex: 1100,
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', py: 1.5 }}>
          {/* Clean Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
              {/* Enhanced SafeMint Logo with Orange Theme */}
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, #FFD700, #FFC107, #FF8F00)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 6px 20px rgba(255, 215, 0, 0.4)',
                  position: 'relative',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 8px 25px rgba(255, 215, 0, 0.6)',
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: -2,
                    borderRadius: 3,
                    background: 'linear-gradient(135deg, #FFD700, #FFC107, #FF8F00)',
                    zIndex: -1,
                    filter: 'blur(8px)',
                    opacity: 0.5,
                  }
                }}
              >
                {/* Clean S Letter Design */}
                <Box
                  sx={{
                    fontSize: '22px',
                    fontWeight: 900,
                    color: '#000',
                    fontFamily: '"Inter", "Roboto", sans-serif',
                    position: 'relative',
                    '&::after': {
                      content: '"$"',
                      position: 'absolute',
                      top: '-2px',
                      right: '-6px',
                      fontSize: '10px',
                      fontWeight: 700,
                      color: '#000',
                    }
                  }}
                >
                  S
                </Box>
              </Box>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 800,
                  color: '#ffffff',
                  fontSize: { xs: '1.5rem', md: '1.8rem' },
                  letterSpacing: '-0.01em',
                  fontFamily: '"Inter", "Roboto", sans-serif',
                  textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    textShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
                  }
                }}
              >
                SafeMint
              </Typography>
            </Box>
          </motion.div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                {navItems.map((item, index) => (
                  <Button
                    key={item.label}
                    startIcon={item.icon}
                    onClick={() => scrollToSection(item.href)}
                    sx={{
                      color: activeSection === item.href.slice(1) ? '#00d4ff' : '#e2e8f0',
                      fontWeight: activeSection === item.href.slice(1) ? 600 : 500,
                      px: 2.5,
                      py: 1,
                      borderRadius: 25,
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      fontSize: '0.9rem',
                      background: activeSection === item.href.slice(1)
                        ? 'rgba(0, 212, 255, 0.1)'
                        : 'transparent',
                      border: activeSection === item.href.slice(1)
                        ? '1px solid rgba(0, 212, 255, 0.3)'
                        : '1px solid transparent',
                      '&:hover': {
                        color: '#00d4ff',
                        backgroundColor: 'rgba(0, 212, 255, 0.15)',
                        transform: 'translateY(-2px)',
                        border: '1px solid rgba(0, 212, 255, 0.4)',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            </motion.div>
          )}

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {!isMobile && (
                <>
                  <Button
                    variant="outlined"
                    onClick={() => scrollToSection('#about')}
                    sx={{
                      borderColor: 'rgba(255, 255, 255, 0.6)',
                      color: 'white',
                      px: 3,
                      py: 1.2,
                      borderRadius: 25,
                      fontWeight: 600,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: 'white',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    Learn More
                  </Button>
                  <Button
                    startIcon={<Rocket size={18} />}
                    onClick={handleGetStarted}
                    sx={{
                      background: 'linear-gradient(135deg, #FFD700, #FFC107)',
                      color: '#000',
                      px: 4,
                      py: 1.2,
                      borderRadius: 25,
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 15px rgba(255, 215, 0, 0.4)',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: '0 8px 30px rgba(255, 215, 0, 0.6)',
                        background: 'linear-gradient(135deg, #FFC107, #FF8F00)',
                      },
                    }}
                  >
                    Launch App
                  </Button>
                </>
              )}

              {/* Mobile Menu Button */}
              {isMobile && (
                <IconButton
                  onClick={() => setMobileMenuOpen(true)}
                  sx={{
                    color: 'white',
                    background: 'rgba(255, 255, 255, 0.15)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: 2,
                    '&:hover': {
                      background: 'rgba(255, 255, 255, 0.25)',
                      transform: 'scale(1.05)',
                    }
                  }}
                >
                  <Menu size={24} />
                </IconButton>
              )}
            </Box>
          </motion.div>
        </Toolbar>
      </AppBar>

      {/* Enhanced Mobile Drawer with Orange Theme */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        PaperProps={{
          sx: {
            background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.95), rgba(26, 26, 26, 0.95))',
            backdropFilter: 'blur(20px)',
            color: 'white',
            width: 320,
            borderLeft: '2px solid rgba(255, 160, 0, 0.3)',
          }
        }}
      >
        <Box sx={{ p: 3 }}>
          {/* Header */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: '#FFD700' }}>
              Navigation
            </Typography>
            <IconButton
              onClick={() => setMobileMenuOpen(false)}
              sx={{
                color: '#FFD700',
                '&:hover': {
                  backgroundColor: 'rgba(255, 215, 0, 0.1)',
                }
              }}
            >
              <X size={20} />
            </IconButton>
          </Box>

          {/* Navigation Items */}
          <List sx={{ mb: 3 }}>
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <ListItem
                  onClick={() => scrollToSection(item.href)}
                  sx={{
                    cursor: 'pointer',
                    borderRadius: 3,
                    mb: 1,
                    transition: 'all 0.3s ease',
                    background: activeSection === item.href.slice(1)
                      ? 'rgba(255, 215, 0, 0.15)'
                      : 'transparent',
                    border: activeSection === item.href.slice(1)
                      ? '1px solid rgba(255, 215, 0, 0.3)'
                      : '1px solid transparent',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 215, 0, 0.1)',
                      transform: 'translateX(8px)',
                      border: '1px solid rgba(255, 215, 0, 0.4)',
                    }
                  }}
                >
                  <Box sx={{ mr: 2, color: '#FFD700' }}>•</Box>
                  <ListItemText
                    primary={item.label}
                    sx={{
                      '& .MuiTypography-root': {
                        fontWeight: activeSection === item.href.slice(1) ? 600 : 400
                      }
                    }}
                  />
                </ListItem>
              </motion.div>
            ))}
          </List>

          {/* Action Buttons */}
          <Stack spacing={2}>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => scrollToSection('#about')}
              sx={{
                borderColor: 'rgba(255, 215, 0, 0.5)',
                color: '#FFD700',
                py: 1.5,
                borderRadius: 25,
                fontWeight: 600,
              }}
            >
              Learn More
            </Button>
            <Button
              fullWidth
              startIcon={<Rocket size={18} />}
              onClick={handleGetStarted}
              sx={{
                background: 'linear-gradient(135deg, #FFD700, #FFC107)',
                color: '#000',
                py: 1.5,
                borderRadius: 25,
                fontWeight: 700,
                boxShadow: '0 4px 15px rgba(255, 215, 0, 0.4)',
              }}
            >
              Launch App
            </Button>
          </Stack>
        </Box>
      </Drawer>

      {/* Enhanced Centered Hero Section */}
      <Box
        id="hero"
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pt: { xs: 10, md: 12 },
          pb: { xs: 6, md: 8 },
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Chip
                icon={<Sparkles size={18} />}
                label="🚀 Next-Generation DeFi Platform"
                sx={{
                  mb: 6,
                  background: 'rgba(255, 215, 0, 0.15)',
                  color: '#FFD700',
                  border: '1px solid rgba(255, 215, 0, 0.4)',
                  fontWeight: 700,
                  fontSize: '1rem',
                  px: 4,
                  py: 1,
                  borderRadius: 50,
                  boxShadow: '0 8px 25px rgba(255, 215, 0, 0.2)',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 12px 35px rgba(255, 215, 0, 0.3)',
                  },
                  transition: 'all 0.3s ease',
                }}
              />
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '3.5rem', sm: '5rem', md: '7rem', lg: '8rem' },
                  fontWeight: 900,
                  mb: 4,
                  lineHeight: 0.9,
                  letterSpacing: '-0.03em',
                }}
              >
                <Box component="span" sx={{
                  background: 'linear-gradient(135deg, #FFD700 0%, #FFC107 50%, #FF8F00 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  display: 'block',
                  mb: 2,
                }}>
                  SafeMint
                </Box>
              </Typography>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.5rem' },
                  mb: 6,
                  color: '#ffffff',
                  fontWeight: 600,
                  lineHeight: 1.2,
                  maxWidth: '900px',
                  mx: 'auto',
                }}
              >
                The Future of{' '}
                <Box component="span" sx={{
                  background: 'linear-gradient(135deg, #FFD700, #FFC107)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}>
                  Smart Investment
                </Box>
              </Typography>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Typography
                variant="h5"
                sx={{
                  mb: 8,
                  color: '#94a3b8',
                  maxWidth: '700px',
                  mx: 'auto',
                  lineHeight: 1.6,
                  fontSize: { xs: '1.2rem', md: '1.5rem' },
                  fontWeight: 400,
                }}
              >
                Experience revolutionary DeFi technology with automated smart contracts,
                guaranteed transparency, and sustainable investment cycles.
              </Typography>
            </motion.div>

            {/* Central Visual Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <Box sx={{ mb: 8, position: 'relative', display: 'inline-block' }}>
                {/* Main Central Icon */}
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 3, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: 180, md: 240 },
                      height: { xs: 180, md: 240 },
                      borderRadius: 6,
                      background: 'linear-gradient(135deg, #00d4ff, #0099cc, #00ff88)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      boxShadow: '0 30px 100px rgba(0, 212, 255, 0.5)',
                      position: 'relative',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        inset: -6,
                        borderRadius: 6,
                        background: 'linear-gradient(135deg, #00d4ff, #0099cc, #00ff88)',
                        zIndex: -1,
                        filter: 'blur(25px)',
                        opacity: 0.7,
                      }
                    }}
                  >
                    {/* Enhanced SafeMint Logo */}
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#000',
                      }}
                    >
                      {/* Large S with $ symbol */}
                      <Box
                        sx={{
                          fontSize: { xs: '4rem', md: '5rem' },
                          fontWeight: 900,
                          fontFamily: '"Inter", "Roboto", sans-serif',
                          position: 'relative',
                          lineHeight: 1,
                          mb: 1,
                          '&::after': {
                            content: '"$"',
                            position: 'absolute',
                            top: '-8px',
                            right: '-20px',
                            fontSize: { xs: '2rem', md: '2.5rem' },
                            fontWeight: 700,
                          }
                        }}
                      >
                        S
                      </Box>
                      {/* Mint text */}
                      <Typography
                        sx={{
                          fontSize: { xs: '1rem', md: '1.2rem' },
                          fontWeight: 800,
                          letterSpacing: '0.1em',
                          color: '#000',
                          fontFamily: '"Inter", "Roboto", sans-serif',
                        }}
                      >
                        MINT
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>

                {/* Floating Elements */}
                {[
                  { icon: <Shield size={32} />, position: { top: '10%', left: '-20%' }, color: '#00ff88', delay: 0 },
                  { icon: <TrendingUp size={32} />, position: { top: '10%', right: '-20%' }, color: '#ff0096', delay: 0.5 },
                  { icon: <Zap size={32} />, position: { bottom: '10%', left: '-15%' }, color: '#ffeb3b', delay: 1 },
                  { icon: <Globe size={32} />, position: { bottom: '10%', right: '-15%' }, color: '#9c27b0', delay: 1.5 },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 + item.delay }}
                    style={{
                      position: 'absolute',
                      ...item.position,
                    }}
                  >
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 5, 0]
                      }}
                      transition={{
                        duration: 3 + index,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Paper
                        sx={{
                          background: `${item.color}20`,
                          backdropFilter: 'blur(10px)',
                          border: `2px solid ${item.color}40`,
                          borderRadius: '50%',
                          width: 70,
                          height: 70,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: `0 10px 30px ${item.color}30`,
                        }}
                      >
                        <Box sx={{ color: item.color }}>
                          {item.icon}
                        </Box>
                      </Paper>
                    </motion.div>
                  </motion.div>
                ))}
              </Box>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={4}
                justifyContent="center"
                alignItems="center"
                sx={{ mb: 8 }}
              >
                <Button
                  size="large"
                  onClick={handleGetStarted}
                  endIcon={<Rocket size={24} />}
                  sx={{
                    background: 'linear-gradient(135deg, #FFD700, #FFC107)',
                    color: '#000',
                    px: 10,
                    py: 3,
                    fontSize: '1.3rem',
                    borderRadius: 50,
                    fontWeight: 800,
                    minWidth: 280,
                    transition: 'all 0.4s ease',
                    boxShadow: '0 12px 40px rgba(255, 215, 0, 0.4)',
                    '&:hover': {
                      transform: 'translateY(-6px) scale(1.02)',
                      boxShadow: '0 20px 60px rgba(255, 215, 0, 0.6)',
                      background: 'linear-gradient(135deg, #FFC107, #FF8F00)',
                    },
                  }}
                >
                  Launch Platform
                </Button>

                <Button
                  size="large"
                  startIcon={<Play size={20} />}
                  onClick={() => scrollToSection('#features')}
                  sx={{
                    color: '#FFD700',
                    px: 8,
                    py: 3,
                    fontSize: '1.2rem',
                    borderRadius: 50,
                    fontWeight: 700,
                    minWidth: 250,
                    border: '3px solid rgba(255, 215, 0, 0.4)',
                    transition: 'all 0.4s ease',
                    '&:hover': {
                      borderColor: '#FFD700',
                      backgroundColor: 'rgba(255, 215, 0, 0.15)',
                      transform: 'translateY(-6px) scale(1.02)',
                      boxShadow: '0 15px 50px rgba(255, 215, 0, 0.3)',
                    },
                  }}
                >
                  Watch Demo
                </Button>
              </Stack>
            </motion.div>

            {/* Enhanced Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <Paper
                sx={{
                  background: 'rgba(0, 0, 0, 0.8)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 215, 0, 0.3)',
                  borderRadius: 6,
                  p: 6,
                  maxWidth: '800px',
                  mx: 'auto',
                }}
              >
                <Grid container spacing={4}>
                  {[
                    { value: '15,847', label: 'Active Investors', icon: <Users size={32} />, color: '#00d4ff' },
                    { value: '$2.4M', label: 'Total Value Locked', icon: <DollarSign size={32} />, color: '#00ff88' },
                    { value: '156.7%', label: 'Average ROI', icon: <TrendingUp size={32} />, color: '#ff0096' },
                  ].map((stat, index) => (
                    <Grid item xs={12} sm={4} key={index}>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 1.8 + index * 0.2 }}
                      >
                        <Box sx={{ textAlign: 'center' }}>
                          <Box
                            sx={{
                              width: 60,
                              height: 60,
                              borderRadius: '50%',
                              background: `${stat.color}20`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              mx: 'auto',
                              mb: 2,
                              border: `2px solid ${stat.color}40`,
                            }}
                          >
                            <Box sx={{ color: stat.color }}>
                              {stat.icon}
                            </Box>
                          </Box>
                          <Typography
                            variant="h3"
                            sx={{
                              fontWeight: 900,
                              color: stat.color,
                              mb: 1,
                              fontSize: { xs: '2rem', md: '2.5rem' }
                            }}
                          >
                            {stat.value}
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{
                              color: '#94a3b8',
                              fontSize: '1rem',
                              fontWeight: 600,
                            }}
                          >
                            {stat.label}
                          </Typography>
                        </Box>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </motion.div>
          </motion.div>
        </Container>
      </Box>

      {/* Features Section */}
      <Box id="features" sx={{ py: { xs: 8, md: 12 }, position: 'relative', zIndex: 1 }}>
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Section Header */}
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 800,
                  mb: 3,
                  background: 'linear-gradient(135deg, #00d4ff, #0099cc)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  letterSpacing: '-0.02em',
                }}
              >
                Why Choose SafeMint?
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: '#94a3b8',
                  maxWidth: '600px',
                  mx: 'auto',
                  lineHeight: 1.6,
                  fontSize: { xs: '1.1rem', md: '1.2rem' },
                }}
              >
                Experience the next generation of decentralized finance with cutting-edge features
                designed for maximum security and profitability.
              </Typography>
            </Box>

            {/* Features Grid */}
            <Grid container spacing={4}>
              {[
                {
                  icon: <Shield size={40} />,
                  title: 'Bank-Grade Security',
                  description: 'Multi-layered security protocols with smart contract audits and real-time monitoring.',
                  color: '#00d4ff',
                  gradient: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(0, 212, 255, 0.05))',
                },
                {
                  icon: <Zap size={40} />,
                  title: 'Lightning Fast',
                  description: 'Instant transactions and real-time updates powered by advanced blockchain technology.',
                  color: '#00ff88',
                  gradient: 'linear-gradient(135deg, rgba(0, 255, 136, 0.1), rgba(0, 255, 136, 0.05))',
                },
                {
                  icon: <Target size={40} />,
                  title: 'Smart Automation',
                  description: 'AI-powered investment strategies that automatically optimize your returns 24/7.',
                  color: '#ff0096',
                  gradient: 'linear-gradient(135deg, rgba(255, 0, 150, 0.1), rgba(255, 0, 150, 0.05))',
                },
                {
                  icon: <Globe size={40} />,
                  title: 'Global Access',
                  description: 'Access your investments from anywhere in the world with our decentralized platform.',
                  color: '#ffeb3b',
                  gradient: 'linear-gradient(135deg, rgba(255, 235, 59, 0.1), rgba(255, 235, 59, 0.05))',
                },
                {
                  icon: <PieChart size={40} />,
                  title: 'Advanced Analytics',
                  description: 'Comprehensive dashboard with real-time analytics and performance tracking.',
                  color: '#9c27b0',
                  gradient: 'linear-gradient(135deg, rgba(156, 39, 176, 0.1), rgba(156, 39, 176, 0.05))',
                },
                {
                  icon: <Award size={40} />,
                  title: 'Proven Results',
                  description: 'Track record of consistent returns with transparent performance metrics.',
                  color: '#ff5722',
                  gradient: 'linear-gradient(135deg, rgba(255, 87, 34, 0.1), rgba(255, 87, 34, 0.05))',
                },
              ].map((feature, index) => (
                <Grid item xs={12} sm={6} lg={4} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                  >
                    <Card
                      sx={{
                        background: feature.gradient,
                        backdropFilter: 'blur(20px)',
                        border: `1px solid ${feature.color}30`,
                        borderRadius: 4,
                        p: 4,
                        height: '100%',
                        transition: 'all 0.4s ease',
                        cursor: 'pointer',
                        '&:hover': {
                          border: `1px solid ${feature.color}60`,
                          boxShadow: `0 20px 40px ${feature.color}20`,
                          transform: 'translateY(-8px)',
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 80,
                          height: 80,
                          borderRadius: '50%',
                          background: `${feature.color}20`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 3,
                          border: `2px solid ${feature.color}40`,
                        }}
                      >
                        <Box sx={{ color: feature.color }}>
                          {feature.icon}
                        </Box>
                      </Box>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          mb: 2,
                          color: 'white',
                          fontSize: '1.4rem',
                        }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: '#94a3b8',
                          lineHeight: 1.6,
                          fontSize: '1rem',
                        }}
                      >
                        {feature.description}
                      </Typography>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Enhanced About Section with Black & Golden Theme */}
      <Box
        id="about"
        sx={{
          py: { xs: 12, md: 18 },
          background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 25%, #2d2d2d 50%, #1a1a1a 75%, #000000 100%)',
          position: 'relative',
          zIndex: 1,
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              radial-gradient(circle at 15% 25%, rgba(255, 215, 0, 0.15) 0%, transparent 40%),
              radial-gradient(circle at 85% 75%, rgba(255, 193, 7, 0.12) 0%, transparent 45%),
              radial-gradient(circle at 50% 50%, rgba(255, 235, 59, 0.08) 0%, transparent 60%)
            `,
            zIndex: -1,
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              linear-gradient(45deg, transparent 30%, rgba(255, 215, 0, 0.03) 50%, transparent 70%),
              linear-gradient(-45deg, transparent 30%, rgba(255, 193, 7, 0.02) 50%, transparent 70%)
            `,
            zIndex: -1,
          }
        }}
      >
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {/* Enhanced Section Header with Golden Theme */}
            <Box sx={{ textAlign: 'center', mb: 15 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Chip
                  icon={<Info size={20} />}
                  label="🏆 About Our Revolutionary Platform"
                  sx={{
                    mb: 6,
                    background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 193, 7, 0.15))',
                    color: '#FFD700',
                    border: '2px solid rgba(255, 215, 0, 0.4)',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    px: 4,
                    py: 1.5,
                    borderRadius: 50,
                    boxShadow: '0 8px 32px rgba(255, 215, 0, 0.25)',
                    backdropFilter: 'blur(10px)',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: '0 12px 40px rgba(255, 215, 0, 0.35)',
                      border: '2px solid rgba(255, 215, 0, 0.6)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '3.5rem', sm: '5rem', md: '6rem', lg: '7rem' },
                    fontWeight: 900,
                    mb: 4,
                    lineHeight: 0.9,
                    letterSpacing: '-0.03em',
                    textShadow: '0 4px 20px rgba(255, 215, 0, 0.3)',
                  }}
                >
                  <Box component="span" sx={{
                    background: 'linear-gradient(135deg, #FFD700 0%, #FFC107 50%, #FF8F00 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    filter: 'drop-shadow(0 2px 8px rgba(255, 215, 0, 0.4))',
                  }}>
                    About
                  </Box>
                  <Box component="span" sx={{
                    color: '#ffffff',
                    ml: 3,
                    textShadow: '0 2px 12px rgba(255, 255, 255, 0.3)',
                  }}>
                    SafeMint
                  </Box>
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: '#f8fafc',
                    maxWidth: '900px',
                    mx: 'auto',
                    lineHeight: 1.4,
                    fontSize: { xs: '1.6rem', md: '2.2rem' },
                    fontWeight: 500,
                    mb: 3,
                    textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  Revolutionizing DeFi on{' '}
                  <Box component="span" sx={{
                    background: 'linear-gradient(135deg, #FFD700, #FFC107)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    fontWeight: 700,
                  }}>
                    BSC Mainnet
                  </Box>
                  {' '}with{' '}
                  <Box component="span" sx={{
                    background: 'linear-gradient(135deg, #FFD700, #FF8F00)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    fontWeight: 700,
                  }}>
                    USDT Innovation
                  </Box>
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    color: '#cbd5e1',
                    maxWidth: '800px',
                    mx: 'auto',
                    lineHeight: 1.7,
                    fontSize: { xs: '1.2rem', md: '1.4rem' },
                    fontWeight: 400,
                    textShadow: '0 1px 4px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  Built on Binance Smart Chain with USDT as our primary token, SafeMint represents the future of
                  decentralized investment platforms with unmatched security, transparency, and sustainable profitability.
                </Typography>
              </motion.div>
            </Box>

            {/* Main Content Cards with Golden Theme */}
            <Grid container spacing={8}>
              {/* Mission Card */}
              <Grid item xs={12} md={4}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    sx={{
                      background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(26, 26, 26, 0.95) 100%)',
                      backdropFilter: 'blur(20px)',
                      border: '2px solid rgba(255, 215, 0, 0.3)',
                      borderRadius: 8,
                      p: 7,
                      height: '100%',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.4s ease',
                      '&:hover': {
                        transform: 'translateY(-15px) scale(1.02)',
                        boxShadow: '0 25px 80px rgba(255, 215, 0, 0.4)',
                        border: '2px solid rgba(255, 215, 0, 0.6)',
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 6,
                        background: 'linear-gradient(90deg, #FFD700, #FFC107, #FF8F00)',
                        borderRadius: '8px 8px 0 0',
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.05) 0%, transparent 50%)',
                        borderRadius: 8,
                        pointerEvents: 'none',
                      }
                    }}
                  >
                    <Box
                      sx={{
                        width: 90,
                        height: 90,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 193, 7, 0.15))',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 4,
                        border: '3px solid rgba(255, 215, 0, 0.4)',
                        boxShadow: '0 8px 25px rgba(255, 215, 0, 0.3)',
                        position: 'relative',
                        zIndex: 1,
                      }}
                    >
                      <Target size={45} color="#FFD700" />
                    </Box>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 800,
                        mb: 3,
                        background: 'linear-gradient(135deg, #FFD700, #FFC107)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                        fontSize: '2rem',
                        position: 'relative',
                        zIndex: 1,
                      }}
                    >
                      Our Mission
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#f1f5f9',
                        lineHeight: 1.8,
                        fontSize: '1.15rem',
                        fontWeight: 400,
                        position: 'relative',
                        zIndex: 1,
                      }}
                    >
                      To democratize access to advanced DeFi investment strategies on BSC mainnet through
                      transparent, automated smart contracts using USDT that deliver consistent returns
                      while maintaining the highest security standards in the industry.
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>

              {/* Technology Card */}
              <Grid item xs={12} md={4}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    sx={{
                      background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(26, 26, 26, 0.95) 100%)',
                      backdropFilter: 'blur(20px)',
                      border: '2px solid rgba(255, 193, 7, 0.3)',
                      borderRadius: 8,
                      p: 7,
                      height: '100%',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.4s ease',
                      '&:hover': {
                        transform: 'translateY(-15px) scale(1.02)',
                        boxShadow: '0 25px 80px rgba(255, 193, 7, 0.4)',
                        border: '2px solid rgba(255, 193, 7, 0.6)',
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 6,
                        background: 'linear-gradient(90deg, #FFC107, #FF8F00, #FFD700)',
                        borderRadius: '8px 8px 0 0',
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(135deg, rgba(255, 193, 7, 0.05) 0%, transparent 50%)',
                        borderRadius: 8,
                        pointerEvents: 'none',
                      }
                    }}
                  >
                    <Box
                      sx={{
                        width: 90,
                        height: 90,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, rgba(255, 193, 7, 0.2), rgba(255, 152, 0, 0.15))',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 4,
                        border: '3px solid rgba(255, 193, 7, 0.4)',
                        boxShadow: '0 8px 25px rgba(255, 193, 7, 0.3)',
                        position: 'relative',
                        zIndex: 1,
                      }}
                    >
                      <Code size={45} color="#FFC107" />
                    </Box>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 800,
                        mb: 3,
                        background: 'linear-gradient(135deg, #FFC107, #FF8F00)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                        fontSize: '2rem',
                        position: 'relative',
                        zIndex: 1,
                      }}
                    >
                      BSC Technology
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#f1f5f9',
                        lineHeight: 1.8,
                        fontSize: '1.15rem',
                        fontWeight: 400,
                        position: 'relative',
                        zIndex: 1,
                      }}
                    >
                      Built on Binance Smart Chain with advanced smart contract architecture using USDT.
                      Our platform utilizes cutting-edge DeFi protocols, automated market makers,
                      and yield optimization strategies for maximum efficiency and low fees.
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>

              {/* Security Card */}
              <Grid item xs={12} md={4}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    sx={{
                      background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(26, 26, 26, 0.95) 100%)',
                      backdropFilter: 'blur(20px)',
                      border: '2px solid rgba(255, 152, 0, 0.3)',
                      borderRadius: 8,
                      p: 7,
                      height: '100%',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.4s ease',
                      '&:hover': {
                        transform: 'translateY(-15px) scale(1.02)',
                        boxShadow: '0 25px 80px rgba(255, 152, 0, 0.4)',
                        border: '2px solid rgba(255, 152, 0, 0.6)',
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 6,
                        background: 'linear-gradient(90deg, #FF9800, #FFD700, #FFC107)',
                        borderRadius: '8px 8px 0 0',
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(135deg, rgba(255, 152, 0, 0.05) 0%, transparent 50%)',
                        borderRadius: 8,
                        pointerEvents: 'none',
                      }
                    }}
                  >
                    <Box
                      sx={{
                        width: 90,
                        height: 90,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, rgba(255, 152, 0, 0.2), rgba(255, 215, 0, 0.15))',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 4,
                        border: '3px solid rgba(255, 152, 0, 0.4)',
                        boxShadow: '0 8px 25px rgba(255, 152, 0, 0.3)',
                        position: 'relative',
                        zIndex: 1,
                      }}
                    >
                      <Shield size={45} color="#FF9800" />
                    </Box>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 800,
                        mb: 3,
                        background: 'linear-gradient(135deg, #FF9800, #FFD700)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                        fontSize: '2rem',
                        position: 'relative',
                        zIndex: 1,
                      }}
                    >
                      USDT Security
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#f1f5f9',
                        lineHeight: 1.8,
                        fontSize: '1.15rem',
                        fontWeight: 400,
                        position: 'relative',
                        zIndex: 1,
                      }}
                    >
                      Multi-signature wallets, smart contract audits, and real-time monitoring
                      ensure your USDT investments are protected by bank-grade security measures
                      and industry best practices on BSC mainnet.
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            </Grid>

            {/* Key Features Grid */}
            <Box sx={{ mt: 12 }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    textAlign: 'center',
                    mb: 8,
                    fontWeight: 700,
                    color: 'white',
                    fontSize: { xs: '2rem', md: '2.5rem' },
                  }}
                >
                  Why Choose{' '}
                  <Box component="span" sx={{
                    background: 'linear-gradient(135deg, #00d4ff, #00ff88)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                  }}>
                    SafeMint?
                  </Box>
                </Typography>

                <Grid container spacing={4}>
                  {[
                    {
                      icon: <Zap size={32} />,
                      title: 'Lightning Fast',
                      description: 'Instant transactions and real-time updates',
                      color: '#ffeb3b',
                    },
                    {
                      icon: <Globe size={32} />,
                      title: 'Global Access',
                      description: 'Available worldwide, 24/7 accessibility',
                      color: '#9c27b0',
                    },
                    {
                      icon: <Activity size={32} />,
                      title: 'Live Analytics',
                      description: 'Real-time performance tracking and insights',
                      color: '#ff5722',
                    },
                    {
                      icon: <Award size={32} />,
                      title: 'Proven Results',
                      description: 'Consistent returns with transparent metrics',
                      color: '#00d4ff',
                    },
                  ].map((item, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Box
                          sx={{
                            textAlign: 'center',
                            p: 4,
                            borderRadius: 4,
                            background: 'rgba(255, 255, 255, 0.02)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              transform: 'translateY(-5px)',
                              background: 'rgba(255, 255, 255, 0.05)',
                              border: `1px solid ${item.color}40`,
                            }
                          }}
                        >
                          <Box
                            sx={{
                              width: 70,
                              height: 70,
                              borderRadius: '50%',
                              background: `${item.color}20`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              mx: 'auto',
                              mb: 3,
                              border: `2px solid ${item.color}40`,
                            }}
                          >
                            <Box sx={{ color: item.color }}>
                              {item.icon}
                            </Box>
                          </Box>
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 600,
                              mb: 2,
                              color: 'white',
                              fontSize: '1.2rem',
                            }}
                          >
                            {item.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: '#94a3b8',
                              lineHeight: 1.6,
                            }}
                          >
                            {item.description}
                          </Typography>
                        </Box>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </motion.div>
            </Box>


          </motion.div>
        </Container>
      </Box>

      {/* Enhanced Technology Section */}
      <Box
        id="technology"
        sx={{
          py: { xs: 10, md: 15 },
          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(13, 13, 35, 0.95) 50%, rgba(26, 26, 46, 0.9) 100%)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              radial-gradient(circle at 30% 30%, rgba(0, 212, 255, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 70% 70%, rgba(0, 255, 136, 0.1) 0%, transparent 50%)
            `,
            zIndex: -1,
          }
        }}
      >
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {/* Enhanced Section Header */}
            <Box sx={{ textAlign: 'center', mb: 12 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Chip
                  icon={<Code size={18} />}
                  label="Cutting-Edge Technology"
                  sx={{
                    mb: 4,
                    background: 'rgba(0, 255, 136, 0.15)',
                    color: '#00ff88',
                    border: '1px solid rgba(0, 255, 136, 0.3)',
                    fontWeight: 600,
                    fontSize: '1rem',
                    px: 3,
                    py: 1,
                  }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '3rem', sm: '4rem', md: '5rem', lg: '6rem' },
                    fontWeight: 900,
                    mb: 4,
                    lineHeight: 0.9,
                    letterSpacing: '-0.03em',
                  }}
                >
                  <Box component="span" sx={{
                    background: 'linear-gradient(135deg, #00ff88, #00d4ff, #0099cc)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                  }}>
                    Technology
                  </Box>
                  <Box component="span" sx={{ color: 'white', ml: 2 }}>
                    Behind
                  </Box>
                  <br />
                  <Box component="span" sx={{
                    background: 'linear-gradient(135deg, #00d4ff, #00ff88)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                  }}>
                    SafeMint
                  </Box>
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: '#e2e8f0',
                    maxWidth: '800px',
                    mx: 'auto',
                    lineHeight: 1.4,
                    fontSize: { xs: '1.5rem', md: '2rem' },
                    fontWeight: 400,
                    mb: 2,
                  }}
                >
                  Powered by{' '}
                  <Box component="span" sx={{
                    background: 'linear-gradient(135deg, #00ff88, #00d4ff)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    fontWeight: 600,
                  }}>
                    Next-Generation Blockchain
                  </Box>
                  {' '}Infrastructure
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    color: '#94a3b8',
                    maxWidth: '700px',
                    mx: 'auto',
                    lineHeight: 1.6,
                    fontSize: { xs: '1.1rem', md: '1.3rem' },
                    fontWeight: 400,
                  }}
                >
                  Built on Binance Smart Chain's robust blockchain with advanced smart contracts,
                  DeFi protocols, USDT integration, and cutting-edge security measures.
                </Typography>
              </motion.div>
            </Box>

            {/* Technology Stack Cards */}
            <Grid container spacing={6}>
              {/* Blockchain Foundation Card */}
              <Grid item xs={12} md={4}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    sx={{
                      background: 'rgba(0, 212, 255, 0.1)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(0, 212, 255, 0.3)',
                      borderRadius: 6,
                      p: 6,
                      height: '100%',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.4s ease',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        boxShadow: '0 20px 60px rgba(0, 212, 255, 0.3)',
                        border: '1px solid rgba(0, 212, 255, 0.5)',
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 4,
                        background: 'linear-gradient(90deg, #00d4ff, #0099cc)',
                      }
                    }}
                  >
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        background: 'rgba(0, 212, 255, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 4,
                        border: '2px solid rgba(0, 212, 255, 0.4)',
                      }}
                    >
                      <Layers size={40} color="#00d4ff" />
                    </Box>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 700,
                        mb: 3,
                        color: 'white',
                        fontSize: '1.8rem',
                      }}
                    >
                      BSC Mainnet Blockchain
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#e2e8f0',
                        lineHeight: 1.7,
                        fontSize: '1.1rem',
                        mb: 4,
                      }}
                    >
                      Built on Binance Smart Chain's robust and secure blockchain infrastructure,
                      ensuring maximum security, transparency, low fees, and fast transactions for all USDT operations.
                    </Typography>

                    <Stack spacing={2}>
                      {[
                        { icon: <Shield size={20} />, text: 'Military-grade Security', color: '#00d4ff' },
                        { icon: <Globe size={20} />, text: 'Global Network', color: '#00d4ff' },
                        { icon: <Zap size={20} />, text: 'Fast Transactions', color: '#00d4ff' },
                      ].map((feature, index) => (
                        <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Box sx={{ color: feature.color }}>
                            {feature.icon}
                          </Box>
                          <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                            {feature.text}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>
                  </Paper>
                </motion.div>
              </Grid>

              {/* Smart Contracts Card */}
              <Grid item xs={12} md={4}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    sx={{
                      background: 'rgba(0, 255, 136, 0.1)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(0, 255, 136, 0.3)',
                      borderRadius: 6,
                      p: 6,
                      height: '100%',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.4s ease',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        boxShadow: '0 20px 60px rgba(0, 255, 136, 0.3)',
                        border: '1px solid rgba(0, 255, 136, 0.5)',
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 4,
                        background: 'linear-gradient(90deg, #00ff88, #00cc6a)',
                      }
                    }}
                  >
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        background: 'rgba(0, 255, 136, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 4,
                        border: '2px solid rgba(0, 255, 136, 0.4)',
                      }}
                    >
                      <Code size={40} color="#00ff88" />
                    </Box>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 700,
                        mb: 3,
                        color: 'white',
                        fontSize: '1.8rem',
                      }}
                    >
                      Smart Contracts
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#e2e8f0',
                        lineHeight: 1.7,
                        fontSize: '1.1rem',
                        mb: 4,
                      }}
                    >
                      Automated, self-executing contracts with terms directly written into code.
                      No intermediaries, no delays, just pure efficiency and transparency.
                    </Typography>

                    <Stack spacing={2}>
                      {[
                        { icon: <CheckCircle size={20} />, text: 'Automated Execution', color: '#00ff88' },
                        { icon: <Eye size={20} />, text: 'Full Transparency', color: '#00ff88' },
                        { icon: <Lock size={20} />, text: 'Immutable Logic', color: '#00ff88' },
                      ].map((feature, index) => (
                        <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Box sx={{ color: feature.color }}>
                            {feature.icon}
                          </Box>
                          <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                            {feature.text}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>
                  </Paper>
                </motion.div>
              </Grid>

              {/* DeFi Protocols Card */}
              <Grid item xs={12} md={4}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    sx={{
                      background: 'rgba(255, 0, 150, 0.1)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 0, 150, 0.3)',
                      borderRadius: 6,
                      p: 6,
                      height: '100%',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.4s ease',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        boxShadow: '0 20px 60px rgba(255, 0, 150, 0.3)',
                        border: '1px solid rgba(255, 0, 150, 0.5)',
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 4,
                        background: 'linear-gradient(90deg, #ff0096, #cc0077)',
                      }
                    }}
                  >
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        background: 'rgba(255, 0, 150, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 4,
                        border: '2px solid rgba(255, 0, 150, 0.4)',
                      }}
                    >
                      <Network size={40} color="#ff0096" />
                    </Box>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 700,
                        mb: 3,
                        color: 'white',
                        fontSize: '1.8rem',
                      }}
                    >
                      DeFi Protocols
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#e2e8f0',
                        lineHeight: 1.7,
                        fontSize: '1.1rem',
                        mb: 4,
                      }}
                    >
                      Advanced DeFi protocols for yield farming, liquidity mining, and automated
                      market making to maximize returns and optimize investment strategies.
                    </Typography>

                    <Stack spacing={2}>
                      {[
                        { icon: <TrendingUp size={20} />, text: 'Yield Optimization', color: '#ff0096' },
                        { icon: <ArrowLeftRight size={20} />, text: 'Liquidity Mining', color: '#ff0096' },
                        { icon: <BarChart size={20} />, text: 'Auto Compounding', color: '#ff0096' },
                      ].map((feature, index) => (
                        <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Box sx={{ color: feature.color }}>
                            {feature.icon}
                          </Box>
                          <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                            {feature.text}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>
                  </Paper>
                </motion.div>
              </Grid>
            </Grid>

            {/* Technical Specifications */}
            <Box sx={{ mt: 12 }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    textAlign: 'center',
                    mb: 8,
                    fontWeight: 700,
                    color: 'white',
                    fontSize: { xs: '2rem', md: '2.5rem' },
                  }}
                >
                  Technical{' '}
                  <Box component="span" sx={{
                    background: 'linear-gradient(135deg, #00d4ff, #00ff88)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                  }}>
                    Specifications
                  </Box>
                </Typography>

                <Grid container spacing={4}>
                  {[
                    {
                      title: 'Blockchain Network',
                      value: 'BSC Mainnet',
                      icon: <Layers size={32} />,
                      color: '#00d4ff',
                      description: 'Built on Binance Smart Chain for fast and low-cost transactions'
                    },
                    {
                      title: 'Token Standard',
                      value: 'BEP-20 Compatible',
                      icon: <Coins size={32} />,
                      color: '#00ff88',
                      description: 'Full compatibility with BSC ecosystem and USDT integration'
                    },
                    {
                      title: 'Smart Contract',
                      value: 'Audited & Verified',
                      icon: <Shield size={32} />,
                      color: '#ff0096',
                      description: 'Security audited by leading blockchain firms'
                    },
                    {
                      title: 'Gas Optimization',
                      value: 'Ultra Efficient',
                      icon: <Zap size={32} />,
                      color: '#ffeb3b',
                      description: 'Optimized for minimal transaction costs'
                    },
                  ].map((spec, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Paper
                          sx={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: 4,
                            p: 4,
                            textAlign: 'center',
                            height: '100%',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              transform: 'translateY(-5px)',
                              background: 'rgba(255, 255, 255, 0.08)',
                              border: `1px solid ${spec.color}40`,
                            }
                          }}
                        >
                          <Box
                            sx={{
                              width: 70,
                              height: 70,
                              borderRadius: '50%',
                              background: `${spec.color}20`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              mx: 'auto',
                              mb: 3,
                              border: `2px solid ${spec.color}40`,
                            }}
                          >
                            <Box sx={{ color: spec.color }}>
                              {spec.icon}
                            </Box>
                          </Box>
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 600,
                              mb: 1,
                              color: 'white',
                              fontSize: '1.1rem',
                            }}
                          >
                            {spec.title}
                          </Typography>
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 700,
                              mb: 2,
                              color: spec.color,
                              fontSize: '1rem',
                            }}
                          >
                            {spec.value}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: '#94a3b8',
                              lineHeight: 1.5,
                            }}
                          >
                            {spec.description}
                          </Typography>
                        </Paper>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </motion.div>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* About SafeMint Section */}
      <Box id="about" sx={{ py: 10, backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              sx={{
                textAlign: 'center',
                mb: 8,
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #00d4ff, #0099cc)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                fontSize: { xs: '2.5rem', md: '3.5rem' }
              }}
            >
              ABOUT SafeMint
            </Typography>

            {/* IN (Input of Funds) */}
            <Paper
              sx={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: 4,
                p: 4,
                mb: 6,
              }}
            >
              <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Typography
                  variant="h4"
                  sx={{
                    mb: 2,
                    fontWeight: 'bold',
                    background: 'linear-gradient(135deg, #00d4ff, #0099cc)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  IN (Input of Funds)
                </Typography>
                <Typography variant="h6" sx={{ color: '#e2e8f0', maxWidth: '800px', mx: 'auto', lineHeight: 1.6 }}>
                  The SafeMint project is designed around a simple yet powerful economic principle: Flow of Value
                  In (IN) and Flow of Value Out (OUT). The core idea is to create a continuous cycle of
                  buying, selling, and reinvesting to generate sustainable growth and profits.
                </Typography>
              </Box>

              <Grid container spacing={4}>
                {[
                  {
                    icon: <DollarSign size={32} style={{ color: '#00d4ff' }} />,
                    title: 'Buying Phase',
                    desc: 'Users invest funds (USDT, tokens, etc.) into the system by:',
                    points: ['Staking', 'Purchasing tokens', 'Providing liquidity']
                  },
                  {
                    icon: <Fuel size={32} style={{ color: '#2196f3' }} />,
                    title: 'Capital Pool',
                    desc: 'The funds collected are pooled together to create strong liquidity, the backbone of any economic system.',
                    points: []
                  },
                  {
                    icon: <BarChart size={32} style={{ color: '#9c27b0' }} />,
                    title: 'Diversified Allocation',
                    desc: 'A portion of funds is allocated to high-yield activities like arbitrage, DeFi protocols, trading bots, or staking to generate returns.',
                    points: []
                  },
                ].map((item, index) => (
                  <Grid item xs={12} md={4} key={index}>
                    <Paper
                      sx={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: 3,
                        p: 3,
                        height: '100%',
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        {item.icon}
                        <Typography
                          variant="h6"
                          sx={{
                            ml: 2,
                            fontWeight: 'bold',
                            background: 'linear-gradient(135deg, #00d4ff, #0099cc)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent',
                          }}
                        >
                          {item.title}
                        </Typography>
                      </Box>
                      <Typography variant="body1" sx={{ color: '#e2e8f0', mb: 2 }}>
                        {item.desc}
                      </Typography>
                      {item.points.length > 0 && (
                        <Stack spacing={1}>
                          {item.points.map((point, idx) => (
                            <Typography key={idx} variant="body2" sx={{ color: '#94a3b8' }}>
                              • {point}
                            </Typography>
                          ))}
                        </Stack>
                      )}
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Paper>

            {/* OUT (Output of Returns) */}
            <Paper
              sx={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: 4,
                p: 4,
                mb: 6,
              }}
            >
              <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Typography
                  variant="h4"
                  sx={{
                    mb: 2,
                    fontWeight: 'bold',
                    background: 'linear-gradient(135deg, #00d4ff, #0099cc)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  OUT (Output of Returns)
                </Typography>
                <Typography variant="h6" sx={{ color: '#e2e8f0', maxWidth: '600px', mx: 'auto' }}>
                  This represents the flow of returns or benefits out of the system.
                </Typography>
              </Box>

              <Grid container spacing={4}>
                {[
                  {
                    icon: <DollarSign size={32} style={{ color: '#4caf50' }} />,
                    title: 'Profit Distribution',
                    desc: 'The profits generated from investments are distributed back to participants.'
                  },
                  {
                    icon: <TrendingDown size={32} style={{ color: '#f44336' }} />,
                    title: 'Token Buybacks',
                    desc: 'To maintain value, the system can buy back its own tokens from the market, reducing supply and increasing demand.'
                  },
                  {
                    icon: <Rocket size={32} style={{ color: '#ffeb3b' }} />,
                    title: 'Reinvestment Option',
                    desc: 'Users can choose to reinvest their profits to compound earnings, keeping the IN–OUT cycle active.'
                  },
                ].map((item, index) => (
                  <Grid item xs={12} md={4} key={index}>
                    <Paper
                      sx={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: 3,
                        p: 3,
                        height: '100%',
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        {item.icon}
                        <Typography
                          variant="h6"
                          sx={{
                            ml: 2,
                            fontWeight: 'bold',
                            background: 'linear-gradient(135deg, #00d4ff, #0099cc)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent',
                          }}
                        >
                          {item.title}
                        </Typography>
                      </Box>
                      <Typography variant="body1" sx={{ color: '#e2e8f0' }}>
                        {item.desc}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </motion.div>
        </Container>
      </Box>

      {/* Enhanced Opportunity Plan Section */}
      <Box
        id="opportunity"
        sx={{
          py: { xs: 10, md: 15 },
          background: 'linear-gradient(135deg, rgba(13, 13, 35, 0.95) 0%, rgba(0, 0, 0, 0.9) 50%, rgba(26, 26, 46, 0.95) 100%)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              radial-gradient(circle at 25% 25%, rgba(255, 0, 150, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(0, 212, 255, 0.08) 0%, transparent 50%)
            `,
            zIndex: -1,
          }
        }}
      >
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {/* Enhanced Section Header */}
            <Box sx={{ textAlign: 'center', mb: 12 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Chip
                  icon={<TrendingUp size={18} />}
                  label="Investment Opportunities"
                  sx={{
                    mb: 4,
                    background: 'rgba(255, 0, 150, 0.15)',
                    color: '#ff0096',
                    border: '1px solid rgba(255, 0, 150, 0.3)',
                    fontWeight: 600,
                    fontSize: '1rem',
                    px: 3,
                    py: 1,
                  }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '3rem', sm: '4rem', md: '5rem', lg: '6rem' },
                    fontWeight: 900,
                    mb: 4,
                    lineHeight: 0.9,
                    letterSpacing: '-0.03em',
                  }}
                >
                  <Box component="span" sx={{
                    background: 'linear-gradient(135deg, #ff0096, #00d4ff, #00ff88)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                  }}>
                    Investment
                  </Box>
                  <Box component="span" sx={{ color: 'white', ml: 2 }}>
                    Plans
                  </Box>
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: '#e2e8f0',
                    maxWidth: '800px',
                    mx: 'auto',
                    lineHeight: 1.4,
                    fontSize: { xs: '1.5rem', md: '2rem' },
                    fontWeight: 400,
                    mb: 2,
                  }}
                >
                  Choose Your{' '}
                  <Box component="span" sx={{
                    background: 'linear-gradient(135deg, #ff0096, #00d4ff)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    fontWeight: 600,
                  }}>
                    Perfect Investment Strategy
                  </Box>
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    color: '#94a3b8',
                    maxWidth: '700px',
                    mx: 'auto',
                    lineHeight: 1.6,
                    fontSize: { xs: '1.1rem', md: '1.3rem' },
                    fontWeight: 400,
                  }}
                >
                  Flexible plans designed to maximize your returns with transparent terms
                  and guaranteed security for every investment level.
                </Typography>
              </motion.div>
            </Box>

            {/* Investment Plans Grid */}
            <Grid container spacing={6}>
              {/* Starter Plan */}
              <Grid item xs={12} md={4}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    sx={{
                      background: 'rgba(0, 0, 0, 0.8)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 215, 0, 0.3)',
                      borderRadius: 6,
                      p: 6,
                      height: '100%',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.4s ease',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        boxShadow: '0 20px 60px rgba(255, 215, 0, 0.3)',
                        border: '1px solid rgba(255, 215, 0, 0.5)',
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 4,
                        background: 'linear-gradient(90deg, #FFD700, #FFC107)',
                      }
                    }}
                  >
                    <Box sx={{ textAlign: 'center', mb: 4 }}>
                      <Box
                        sx={{
                          width: 80,
                          height: 80,
                          borderRadius: '50%',
                          background: 'rgba(255, 215, 0, 0.2)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mx: 'auto',
                          mb: 3,
                          border: '2px solid rgba(255, 215, 0, 0.4)',
                        }}
                      >
                        <Rocket size={40} color="#FFD700" />
                      </Box>
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: 700,
                          mb: 2,
                          color: 'white',
                          fontSize: '1.8rem',
                        }}
                      >
                        Starter Plan
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          color: '#FFD700',
                          fontWeight: 600,
                          mb: 1,
                        }}
                      >
                        Perfect for Beginners
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: '#94a3b8',
                          lineHeight: 1.6,
                        }}
                      >
                        Start your DeFi journey with minimal investment and maximum learning
                      </Typography>
                    </Box>

                    <Box sx={{ mb: 4 }}>
                      <Typography
                        variant="h2"
                        sx={{
                          textAlign: 'center',
                          fontWeight: 900,
                          color: '#FFD700',
                          mb: 1,
                        }}
                      >
                        0.5%
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          textAlign: 'center',
                          color: '#94a3b8',
                          fontWeight: 500,
                        }}
                      >
                        Daily Returns
                      </Typography>
                    </Box>

                    <Stack spacing={3} sx={{ mb: 4 }}>
                      {[
                        { icon: <DollarSign size={20} />, text: 'Minimum: $10', color: '#FFD700' },
                        { icon: <Clock size={20} />, text: '15-day cycle', color: '#FFD700' },
                        { icon: <TrendingUp size={20} />, text: 'Up to 1% with referrals', color: '#FFD700' },
                        { icon: <Shield size={20} />, text: 'Secure & Transparent', color: '#FFD700' },
                      ].map((feature, index) => (
                        <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Box sx={{ color: feature.color }}>
                            {feature.icon}
                          </Box>
                          <Typography variant="body2" sx={{ color: '#e2e8f0' }}>
                            {feature.text}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>

                    <Button
                      fullWidth
                      variant="contained"
                      sx={{
                        background: 'linear-gradient(135deg, #FFD700, #FFC107)',
                        color: '#000',
                        fontWeight: 600,
                        py: 2,
                        fontSize: '1.1rem',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #FFC107, #FF8F00)',
                        },
                      }}
                    >
                      Start Investing
                    </Button>
                  </Paper>
                </motion.div>
              </Grid>

              {/* Professional Plan */}
              <Grid item xs={12} md={4}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    sx={{
                      background: 'rgba(0, 0, 0, 0.9)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 215, 0, 0.5)',
                      borderRadius: 6,
                      p: 6,
                      height: '100%',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.4s ease',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        boxShadow: '0 20px 60px rgba(255, 215, 0, 0.4)',
                        border: '1px solid rgba(255, 215, 0, 0.7)',
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 4,
                        background: 'linear-gradient(90deg, #FFD700, #FFC107)',
                      }
                    }}
                  >
                    <Box sx={{ textAlign: 'center', mb: 4 }}>
                      <Chip
                        label="POPULAR"
                        sx={{
                          position: 'absolute',
                          top: 20,
                          right: 20,
                          background: '#FFD700',
                          color: '#000',
                          fontWeight: 700,
                          fontSize: '0.8rem',
                        }}
                      />
                      <Box
                        sx={{
                          width: 80,
                          height: 80,
                          borderRadius: '50%',
                          background: 'rgba(255, 215, 0, 0.2)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mx: 'auto',
                          mb: 3,
                          border: '2px solid rgba(255, 215, 0, 0.4)',
                        }}
                      >
                        <Crown size={40} color="#FFD700" />
                      </Box>
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: 700,
                          mb: 2,
                          color: 'white',
                          fontSize: '1.8rem',
                        }}
                      >
                        Professional Plan
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          color: '#FFD700',
                          fontWeight: 600,
                          mb: 1,
                        }}
                      >
                        Most Popular Choice
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: '#94a3b8',
                          lineHeight: 1.6,
                        }}
                      >
                        Balanced approach with enhanced returns and premium features
                      </Typography>
                    </Box>

                    <Box sx={{ mb: 4 }}>
                      <Typography
                        variant="h2"
                        sx={{
                          textAlign: 'center',
                          fontWeight: 900,
                          color: '#FFD700',
                          mb: 1,
                        }}
                      >
                        1.2%
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          textAlign: 'center',
                          color: '#94a3b8',
                          fontWeight: 500,
                        }}
                      >
                        Daily Returns
                      </Typography>
                    </Box>

                    <Stack spacing={3} sx={{ mb: 4 }}>
                      {[
                        { icon: <DollarSign size={20} />, text: 'Minimum: $100', color: '#FFD700' },
                        { icon: <Clock size={20} />, text: '30-day cycle', color: '#FFD700' },
                        { icon: <TrendingUp size={20} />, text: 'Up to 2% with bonuses', color: '#FFD700' },
                        { icon: <Award size={20} />, text: 'Priority Support', color: '#FFD700' },
                      ].map((feature, index) => (
                        <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Box sx={{ color: feature.color }}>
                            {feature.icon}
                          </Box>
                          <Typography variant="body2" sx={{ color: '#e2e8f0' }}>
                            {feature.text}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>

                    <Button
                      fullWidth
                      variant="contained"
                      sx={{
                        background: 'linear-gradient(135deg, #FFD700, #FFC107)',
                        color: '#000',
                        fontWeight: 600,
                        py: 2,
                        fontSize: '1.1rem',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #FFC107, #FF8F00)',
                        },
                      }}
                    >
                      Choose Professional
                    </Button>
                  </Paper>
                </motion.div>
              </Grid>

              {/* Enterprise Plan */}
              <Grid item xs={12} md={4}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    sx={{
                      background: 'rgba(0, 0, 0, 0.95)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 215, 0, 0.6)',
                      borderRadius: 6,
                      p: 6,
                      height: '100%',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.4s ease',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        boxShadow: '0 20px 60px rgba(255, 215, 0, 0.5)',
                        border: '1px solid rgba(255, 215, 0, 0.8)',
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 4,
                        background: 'linear-gradient(90deg, #FFD700, #FFC107)',
                      }
                    }}
                  >
                    <Box sx={{ textAlign: 'center', mb: 4 }}>
                      <Box
                        sx={{
                          width: 80,
                          height: 80,
                          borderRadius: '50%',
                          background: 'rgba(255, 215, 0, 0.2)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mx: 'auto',
                          mb: 3,
                          border: '2px solid rgba(255, 215, 0, 0.4)',
                        }}
                      >
                        <Diamond size={40} color="#FFD700" />
                      </Box>
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: 700,
                          mb: 2,
                          color: 'white',
                          fontSize: '1.8rem',
                        }}
                      >
                        Enterprise Plan
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          color: '#FFD700',
                          fontWeight: 600,
                          mb: 1,
                        }}
                      >
                        Maximum Returns
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: '#94a3b8',
                          lineHeight: 1.6,
                        }}
                      >
                        Premium tier with highest returns and exclusive benefits
                      </Typography>
                    </Box>

                    <Box sx={{ mb: 4 }}>
                      <Typography
                        variant="h2"
                        sx={{
                          textAlign: 'center',
                          fontWeight: 900,
                          color: '#FFD700',
                          mb: 1,
                        }}
                      >
                        2.0%
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          textAlign: 'center',
                          color: '#94a3b8',
                          fontWeight: 500,
                        }}
                      >
                        Daily Returns
                      </Typography>
                    </Box>

                    <Stack spacing={3} sx={{ mb: 4 }}>
                      {[
                        { icon: <DollarSign size={20} />, text: 'Minimum: $1,000', color: '#FFD700' },
                        { icon: <Clock size={20} />, text: '60-day cycle', color: '#FFD700' },
                        { icon: <TrendingUp size={20} />, text: 'Up to 3% with VIP status', color: '#FFD700' },
                        { icon: <Users size={20} />, text: 'Dedicated Manager', color: '#FFD700' },
                      ].map((feature, index) => (
                        <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Box sx={{ color: feature.color }}>
                            {feature.icon}
                          </Box>
                          <Typography variant="body2" sx={{ color: '#e2e8f0' }}>
                            {feature.text}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>

                    <Button
                      fullWidth
                      variant="contained"
                      sx={{
                        background: 'linear-gradient(135deg, #FFD700, #FFC107)',
                        color: '#000',
                        fontWeight: 600,
                        py: 2,
                        fontSize: '1.1rem',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #FFC107, #FF8F00)',
                        },
                      }}
                    >
                      Go Enterprise
                    </Button>
                  </Paper>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>



      {/* Team Section */}
      <Box
        id="team"
        sx={{
          py: { xs: 10, md: 15 },
          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(26, 26, 46, 0.9) 50%, rgba(0, 0, 0, 0.95) 100%)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {/* Section Header */}
            <Box sx={{ textAlign: 'center', mb: 12 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Chip
                  icon={<Users size={20} />}
                  label="Meet Our Team"
                  sx={{
                    mb: 4,
                    background: 'rgba(255, 215, 0, 0.15)',
                    color: '#FFD700',
                    border: '1px solid rgba(255, 215, 0, 0.3)',
                    fontWeight: 600,
                    fontSize: '1rem',
                    px: 3,
                    py: 1,
                  }}
                />
              </motion.div>

              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 900,
                  mb: 4,
                  background: 'linear-gradient(135deg, #FFD700, #FFC107)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                Expert Team Behind SafeMint
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: '#94a3b8',
                  maxWidth: '800px',
                  mx: 'auto',
                  lineHeight: 1.6,
                  fontSize: { xs: '1.1rem', md: '1.3rem' },
                }}
              >
                Our experienced team of blockchain developers, financial experts, and security specialists
                are dedicated to building the future of DeFi.
              </Typography>
            </Box>

            {/* Team Grid */}
            <Grid container spacing={6}>
              {[
                {
                  name: 'Alex Chen',
                  role: 'CEO & Founder',
                  image: '/api/placeholder/300/300',
                  bio: 'Former Goldman Sachs executive with 15+ years in traditional finance and 5+ years in DeFi.',
                  linkedin: '#',
                  twitter: '#',
                  expertise: ['DeFi Strategy', 'Financial Markets', 'Leadership']
                },
                {
                  name: 'Sarah Johnson',
                  role: 'CTO & Co-Founder',
                  image: '/api/placeholder/300/300',
                  bio: 'Ex-BSC core developer with expertise in smart contract security and blockchain architecture.',
                  linkedin: '#',
                  twitter: '#',
                  expertise: ['Blockchain Development', 'Smart Contracts', 'Security']
                },
                {
                  name: 'Michael Rodriguez',
                  role: 'Head of Security',
                  image: '/api/placeholder/300/300',
                  bio: 'Cybersecurity expert with experience auditing major DeFi protocols and preventing exploits.',
                  linkedin: '#',
                  twitter: '#',
                  expertise: ['Security Audits', 'Risk Management', 'Compliance']
                },
                {
                  name: 'Emily Wang',
                  role: 'Head of Product',
                  image: '/api/placeholder/300/300',
                  bio: 'Product strategist with background in fintech and user experience design for financial applications.',
                  linkedin: '#',
                  twitter: '#',
                  expertise: ['Product Strategy', 'UX Design', 'Market Research']
                }
              ].map((member, index) => (
                <Grid item xs={12} sm={6} lg={3} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Paper
                      sx={{
                        background: 'rgba(0, 0, 0, 0.8)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 215, 0, 0.2)',
                        borderRadius: 6,
                        p: 4,
                        height: '100%',
                        textAlign: 'center',
                        transition: 'all 0.4s ease',
                        '&:hover': {
                          transform: 'translateY(-10px)',
                          boxShadow: '0 20px 60px rgba(255, 215, 0, 0.2)',
                          border: '1px solid rgba(255, 215, 0, 0.4)',
                        },
                      }}
                    >
                      {/* Profile Image */}
                      <Box
                        sx={{
                          width: 120,
                          height: 120,
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #FFD700, #FFC107)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mx: 'auto',
                          mb: 3,
                          border: '3px solid rgba(255, 215, 0, 0.3)',
                        }}
                      >
                        <User size={60} color="#000" />
                      </Box>

                      {/* Name and Role */}
                      <Typography
                        variant="h6"
                        sx={{
                          color: '#FFD700',
                          fontWeight: 700,
                          mb: 1,
                        }}
                      >
                        {member.name}
                      </Typography>

                      <Typography
                        variant="body1"
                        sx={{
                          color: '#94a3b8',
                          fontWeight: 600,
                          mb: 3,
                        }}
                      >
                        {member.role}
                      </Typography>

                      {/* Bio */}
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#e2e8f0',
                          lineHeight: 1.6,
                          mb: 3,
                        }}
                      >
                        {member.bio}
                      </Typography>

                      {/* Expertise Tags */}
                      <Box sx={{ mb: 3 }}>
                        {member.expertise.map((skill, skillIndex) => (
                          <Chip
                            key={skillIndex}
                            label={skill}
                            size="small"
                            sx={{
                              background: 'rgba(255, 215, 0, 0.1)',
                              color: '#FFD700',
                              border: '1px solid rgba(255, 215, 0, 0.3)',
                              m: 0.5,
                              fontSize: '0.75rem',
                            }}
                          />
                        ))}
                      </Box>

                      {/* Social Links */}
                      <Stack direction="row" spacing={2} justifyContent="center">
                        <IconButton
                          sx={{
                            color: '#FFD700',
                            '&:hover': {
                              background: 'rgba(255, 215, 0, 0.1)',
                            },
                          }}
                        >
                          <ExternalLink size={20} />
                        </IconButton>
                        <IconButton
                          sx={{
                            color: '#FFD700',
                            '&:hover': {
                              background: 'rgba(255, 215, 0, 0.1)',
                            },
                          }}
                        >
                          <Twitter size={20} />
                        </IconButton>
                      </Stack>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Security Section */}
      <Box
        id="security"
        sx={{
          py: { xs: 10, md: 15 },
          background: 'linear-gradient(135deg, rgba(26, 26, 46, 0.95) 0%, rgba(0, 0, 0, 0.9) 50%, rgba(13, 13, 35, 0.95) 100%)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {/* Section Header */}
            <Box sx={{ textAlign: 'center', mb: 12 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Chip
                  icon={<Shield size={20} />}
                  label="Security First"
                  sx={{
                    mb: 4,
                    background: 'rgba(255, 215, 0, 0.15)',
                    color: '#FFD700',
                    border: '1px solid rgba(255, 215, 0, 0.3)',
                    fontWeight: 600,
                    fontSize: '1rem',
                    px: 3,
                    py: 1,
                  }}
                />
              </motion.div>

              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 900,
                  mb: 4,
                  background: 'linear-gradient(135deg, #FFD700, #FFC107)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                Bank-Grade Security
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: '#94a3b8',
                  maxWidth: '800px',
                  mx: 'auto',
                  lineHeight: 1.6,
                  fontSize: { xs: '1.1rem', md: '1.3rem' },
                }}
              >
                Your funds are protected by multiple layers of security, audited smart contracts,
                and industry-leading security practices.
              </Typography>
            </Box>

            {/* Security Features Grid */}
            <Grid container spacing={6} sx={{ mb: 8 }}>
              {[
                {
                  icon: <Shield size={40} />,
                  title: 'Smart Contract Audits',
                  description: 'All contracts audited by leading security firms including CertiK, ConsenSys Diligence, and Trail of Bits.',
                  features: ['Multiple audit rounds', 'Continuous monitoring', 'Bug bounty program']
                },
                {
                  icon: <Lock size={40} />,
                  title: 'Multi-Signature Security',
                  description: 'Critical operations require multiple signatures from our security council to prevent unauthorized access.',
                  features: ['3-of-5 multisig', 'Time-locked operations', 'Emergency pause function']
                },
                {
                  icon: <Eye size={40} />,
                  title: 'Real-Time Monitoring',
                  description: '24/7 monitoring of all protocol activities with automated alerts for suspicious behavior.',
                  features: ['Anomaly detection', 'Real-time alerts', 'Automated responses']
                },
                {
                  icon: <Database size={40} />,
                  title: 'Decentralized Architecture',
                  description: 'No single point of failure with distributed infrastructure and decentralized governance.',
                  features: ['Distributed nodes', 'Redundant systems', 'Decentralized governance']
                }
              ].map((feature, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Paper
                      sx={{
                        background: 'rgba(0, 0, 0, 0.8)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 215, 0, 0.2)',
                        borderRadius: 6,
                        p: 6,
                        height: '100%',
                        transition: 'all 0.4s ease',
                        '&:hover': {
                          transform: 'translateY(-10px)',
                          boxShadow: '0 20px 60px rgba(255, 215, 0, 0.2)',
                          border: '1px solid rgba(255, 215, 0, 0.4)',
                        },
                      }}
                    >
                      {/* Icon */}
                      <Box
                        sx={{
                          width: 80,
                          height: 80,
                          borderRadius: '50%',
                          background: 'rgba(255, 215, 0, 0.2)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 4,
                          border: '2px solid rgba(255, 215, 0, 0.4)',
                        }}
                      >
                        <Box sx={{ color: '#FFD700' }}>
                          {feature.icon}
                        </Box>
                      </Box>

                      {/* Title */}
                      <Typography
                        variant="h5"
                        sx={{
                          color: '#FFD700',
                          fontWeight: 700,
                          mb: 3,
                        }}
                      >
                        {feature.title}
                      </Typography>

                      {/* Description */}
                      <Typography
                        variant="body1"
                        sx={{
                          color: '#e2e8f0',
                          lineHeight: 1.6,
                          mb: 4,
                        }}
                      >
                        {feature.description}
                      </Typography>

                      {/* Features List */}
                      <Stack spacing={2}>
                        {feature.features.map((item, itemIndex) => (
                          <Box key={itemIndex} sx={{ display: 'flex', alignItems: 'center' }}>
                            <CheckCircle size={16} color="#FFD700" style={{ marginRight: 12 }} />
                            <Typography
                              variant="body2"
                              sx={{
                                color: '#94a3b8',
                                fontWeight: 500,
                              }}
                            >
                              {item}
                            </Typography>
                          </Box>
                        ))}
                      </Stack>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>

            {/* Security Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Paper
                sx={{
                  background: 'rgba(0, 0, 0, 0.8)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 215, 0, 0.3)',
                  borderRadius: 6,
                  p: 6,
                }}
              >
                <Grid container spacing={4}>
                  {[
                    { label: 'Security Audits', value: '5+', icon: <Shield size={24} /> },
                    { label: 'Bug Bounty Rewards', value: '$500K+', icon: <Award size={24} /> },
                    { label: 'Uptime', value: '99.9%', icon: <Activity size={24} /> },
                    { label: 'Funds Secured', value: '$50M+', icon: <Lock size={24} /> },
                  ].map((stat, index) => (
                    <Grid item xs={6} md={3} key={index}>
                      <Box sx={{ textAlign: 'center' }}>
                        <Box sx={{ color: '#FFD700', mb: 2 }}>
                          {stat.icon}
                        </Box>
                        <Typography
                          variant="h4"
                          sx={{
                            color: '#FFD700',
                            fontWeight: 900,
                            mb: 1,
                          }}
                        >
                          {stat.value}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#94a3b8',
                            fontWeight: 600,
                          }}
                        >
                          {stat.label}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </motion.div>
          </motion.div>
        </Container>
      </Box>

      {/* Call to Action Section */}
      <Box sx={{ py: 10 }}>
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Paper
              sx={{
                background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(0, 153, 204, 0.1))',
                border: '1px solid rgba(0, 212, 255, 0.3)',
                borderRadius: 4,
                p: 6,
                textAlign: 'center',
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  mb: 3,
                  fontWeight: 'bold',
                  background: 'linear-gradient(135deg, #00d4ff, #0099cc)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  fontSize: { xs: '2rem', md: '3rem' }
                }}
              >
                Ready to Start Your Journey?
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, color: '#e2e8f0', lineHeight: 1.6 }}>
                Join thousands of investors who are already earning with SafeMint's innovative
                smart contract platform. Start with as little as $10 and watch your investment grow.
              </Typography>
              <Button
                size="large"
                onClick={handleGetStarted}
                sx={{
                  background: 'linear-gradient(135deg, #00d4ff, #0099cc)',
                  color: 'white',
                  px: 8,
                  py: 2.5,
                  fontSize: '1.3rem',
                  borderRadius: 30,
                  fontWeight: 600,
                  minWidth: 250,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 15px 35px rgba(0, 212, 255, 0.4)',
                  },
                }}
                endIcon={<ArrowRight size={20} />}
              >
                Launch SafeMint App
              </Button>
            </Paper>
          </motion.div>
        </Container>
      </Box>

      {/* Tokenomics Section */}
      <Box
        id="tokenomics"
        sx={{
          py: { xs: 10, md: 15 },
          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(26, 26, 46, 0.9) 50%, rgba(0, 0, 0, 0.95) 100%)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {/* Section Header */}
            <Box sx={{ textAlign: 'center', mb: 12 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Chip
                  icon={<Coins size={20} />}
                  label="Tokenomics"
                  sx={{
                    mb: 4,
                    background: 'rgba(255, 215, 0, 0.15)',
                    color: '#FFD700',
                    border: '1px solid rgba(255, 215, 0, 0.3)',
                    fontWeight: 600,
                    fontSize: '1rem',
                    px: 3,
                    py: 1,
                  }}
                />
              </motion.div>

              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 900,
                  mb: 4,
                  background: 'linear-gradient(135deg, #FFD700, #FFC107)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                SAFE Token Economics
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: '#94a3b8',
                  maxWidth: '800px',
                  mx: 'auto',
                  lineHeight: 1.6,
                  fontSize: { xs: '1.1rem', md: '1.3rem' },
                }}
              >
                Sustainable tokenomics designed for long-term growth and community rewards.
              </Typography>
            </Box>

            <Grid container spacing={6}>
              {/* Token Distribution Chart */}
              <Grid item xs={12} lg={6}>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    sx={{
                      background: 'rgba(0, 0, 0, 0.8)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 215, 0, 0.3)',
                      borderRadius: 6,
                      p: 6,
                      height: '100%',
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        color: '#FFD700',
                        fontWeight: 700,
                        mb: 4,
                        textAlign: 'center',
                      }}
                    >
                      Token Distribution
                    </Typography>

                    <Stack spacing={3}>
                      {[
                        { label: 'Community Rewards', percentage: '40%', color: '#FFD700' },
                        { label: 'Liquidity Pool', percentage: '25%', color: '#FFC107' },
                        { label: 'Development', percentage: '15%', color: '#FF8F00' },
                        { label: 'Team & Advisors', percentage: '10%', color: '#FF6F00' },
                        { label: 'Marketing', percentage: '5%', color: '#E65100' },
                        { label: 'Reserve Fund', percentage: '5%', color: '#BF360C' },
                      ].map((item, index) => (
                        <Box key={index}>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                            <Typography variant="body1" sx={{ color: '#e2e8f0', fontWeight: 600 }}>
                              {item.label}
                            </Typography>
                            <Typography variant="body1" sx={{ color: item.color, fontWeight: 700 }}>
                              {item.percentage}
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              width: '100%',
                              height: 8,
                              background: 'rgba(255, 255, 255, 0.1)',
                              borderRadius: 4,
                              overflow: 'hidden',
                            }}
                          >
                            <Box
                              sx={{
                                width: item.percentage,
                                height: '100%',
                                background: `linear-gradient(90deg, ${item.color}, ${item.color}cc)`,
                                borderRadius: 4,
                              }}
                            />
                          </Box>
                        </Box>
                      ))}
                    </Stack>
                  </Paper>
                </motion.div>
              </Grid>

              {/* Token Details */}
              <Grid item xs={12} lg={6}>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    sx={{
                      background: 'rgba(0, 0, 0, 0.8)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 215, 0, 0.3)',
                      borderRadius: 6,
                      p: 6,
                      height: '100%',
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        color: '#FFD700',
                        fontWeight: 700,
                        mb: 4,
                        textAlign: 'center',
                      }}
                    >
                      Token Details
                    </Typography>

                    <Stack spacing={4}>
                      {[
                        { label: 'Token Name', value: 'SafeMint Token' },
                        { label: 'Symbol', value: 'SAFE' },
                        { label: 'Total Supply', value: '1,000,000,000 SAFE' },
                        { label: 'Blockchain', value: 'BSC Mainnet (BEP-20)' },
                        { label: 'Initial Price', value: '$0.001' },
                        { label: 'Listing Date', value: 'Q2 2024' },
                      ].map((detail, index) => (
                        <Box
                          key={index}
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            p: 3,
                            background: 'rgba(255, 215, 0, 0.05)',
                            border: '1px solid rgba(255, 215, 0, 0.2)',
                            borderRadius: 3,
                          }}
                        >
                          <Typography
                            variant="body1"
                            sx={{
                              color: '#94a3b8',
                              fontWeight: 600,
                            }}
                          >
                            {detail.label}
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{
                              color: '#FFD700',
                              fontWeight: 700,
                            }}
                          >
                            {detail.value}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>

                    {/* Token Utility */}
                    <Box sx={{ mt: 6 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          color: '#FFD700',
                          fontWeight: 700,
                          mb: 3,
                        }}
                      >
                        Token Utility
                      </Typography>
                      <Stack spacing={2}>
                        {[
                          'Governance voting rights',
                          'Staking rewards up to 25% APY',
                          'Reduced platform fees',
                          'Exclusive investment opportunities',
                          'Premium features access',
                        ].map((utility, index) => (
                          <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                            <CheckCircle size={16} color="#FFD700" style={{ marginRight: 12 }} />
                            <Typography
                              variant="body2"
                              sx={{
                                color: '#e2e8f0',
                                fontWeight: 500,
                              }}
                            >
                              {utility}
                            </Typography>
                          </Box>
                        ))}
                      </Stack>
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Box
        id="faq"
        sx={{
          py: { xs: 10, md: 15 },
          background: 'linear-gradient(135deg, rgba(13, 13, 35, 0.95) 0%, rgba(0, 0, 0, 0.9) 50%, rgba(26, 26, 46, 0.95) 100%)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {/* Section Header */}
            <Box sx={{ textAlign: 'center', mb: 12 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Chip
                  icon={<MessageCircle size={20} />}
                  label="Frequently Asked Questions"
                  sx={{
                    mb: 4,
                    background: 'rgba(255, 215, 0, 0.15)',
                    color: '#FFD700',
                    border: '1px solid rgba(255, 215, 0, 0.3)',
                    fontWeight: 600,
                    fontSize: '1rem',
                    px: 3,
                    py: 1,
                  }}
                />
              </motion.div>

              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 900,
                  mb: 4,
                  background: 'linear-gradient(135deg, #FFD700, #FFC107)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                Got Questions?
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: '#94a3b8',
                  maxWidth: '800px',
                  mx: 'auto',
                  lineHeight: 1.6,
                  fontSize: { xs: '1.1rem', md: '1.3rem' },
                }}
              >
                Find answers to the most common questions about SafeMint platform and services.
              </Typography>
            </Box>

            {/* FAQ Accordions */}
            <Stack spacing={3}>
              {[
                {
                  question: 'What is SafeMint and how does it work?',
                  answer: 'SafeMint is a decentralized finance (DeFi) platform built on Binance Smart Chain (BSC) mainnet that offers automated investment strategies through smart contracts using USDT. Users can invest in various plans with guaranteed returns, powered by blockchain technology and algorithmic trading strategies.'
                },
                {
                  question: 'How secure are my investments on SafeMint?',
                  answer: 'SafeMint employs bank-grade security measures including multi-signature wallets, smart contract audits by leading firms, real-time monitoring, and decentralized architecture on BSC mainnet. All USDT funds are protected by multiple layers of security protocols with low transaction fees.'
                },
                {
                  question: 'What are the minimum investment requirements?',
                  answer: 'SafeMint offers flexible USDT investment options starting from just $10 for the Starter Plan, $100 for the Professional Plan, and $1,000 for the Enterprise Plan. This makes DeFi accessible to investors of all levels on BSC mainnet with minimal fees.'
                },
                {
                  question: 'How do I earn returns on my investments?',
                  answer: 'Returns are generated through automated trading strategies, liquidity provision, yield farming, and other DeFi protocols on BSC mainnet using USDT. Profits are distributed daily to investors based on their chosen investment plan and amount invested.'
                },
                {
                  question: 'Can I withdraw my funds at any time?',
                  answer: 'Yes, SafeMint offers flexible withdrawal options. While each investment plan has recommended cycles for optimal returns, you can request withdrawals at any time. Processing times may vary based on network conditions and plan type.'
                },
                {
                  question: 'What is the SAFE token and its utility?',
                  answer: 'SAFE is the native utility token of the SafeMint ecosystem built on BSC mainnet. Token holders enjoy governance voting rights, staking rewards up to 25% APY, reduced platform fees, access to exclusive USDT investment opportunities, and premium features with low transaction costs.'
                },
                {
                  question: 'Is SafeMint available globally?',
                  answer: 'SafeMint is accessible globally, though some features may be restricted in certain jurisdictions due to local regulations. We are continuously expanding our services and working on compliance in various regions.'
                },
                {
                  question: 'How can I get support if I have issues?',
                  answer: 'Our dedicated support team is available 24/7 through multiple channels including live chat, email support, and community forums. Enterprise plan users also get access to dedicated account managers.'
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Accordion
                    sx={{
                      background: 'rgba(0, 0, 0, 0.8)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 215, 0, 0.2)',
                      borderRadius: '12px !important',
                      '&:before': {
                        display: 'none',
                      },
                      '&.Mui-expanded': {
                        border: '1px solid rgba(255, 215, 0, 0.4)',
                        boxShadow: '0 8px 32px rgba(255, 215, 0, 0.1)',
                      },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ChevronDown size={24} color="#FFD700" />}
                      sx={{
                        '& .MuiAccordionSummary-content': {
                          margin: '16px 0',
                        },
                        '&:hover': {
                          background: 'rgba(255, 215, 0, 0.05)',
                        },
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: '#FFD700',
                          fontWeight: 600,
                          fontSize: { xs: '1.1rem', md: '1.2rem' },
                        }}
                      >
                        {faq.question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        variant="body1"
                        sx={{
                          color: '#e2e8f0',
                          lineHeight: 1.7,
                          fontSize: { xs: '0.95rem', md: '1rem' },
                        }}
                      >
                        {faq.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </motion.div>
              ))}
            </Stack>

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Box sx={{ textAlign: 'center', mt: 8 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#94a3b8',
                    mb: 4,
                  }}
                >
                  Still have questions? We're here to help!
                </Typography>
                <Button
                  size="large"
                  onClick={() => scrollToSection('#contact')}
                  sx={{
                    background: 'linear-gradient(135deg, #FFD700, #FFC107)',
                    color: '#000',
                    px: 6,
                    py: 2,
                    fontSize: '1.1rem',
                    borderRadius: 50,
                    fontWeight: 700,
                    '&:hover': {
                      background: 'linear-gradient(135deg, #FFC107, #FF8F00)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  Contact Support
                </Button>
              </Box>
            </motion.div>
          </motion.div>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box
        id="contact"
        sx={{
          py: { xs: 10, md: 15 },
          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(26, 26, 46, 0.9) 50%, rgba(0, 0, 0, 0.95) 100%)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              radial-gradient(circle at 30% 30%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 70% 70%, rgba(0, 255, 136, 0.08) 0%, transparent 50%)
            `,
            zIndex: -1,
          }
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Box sx={{ textAlign: 'center', mb: 10 }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  fontWeight: 900,
                  mb: 4,
                  lineHeight: 0.9,
                }}
              >
                <Box component="span" sx={{
                  background: 'linear-gradient(135deg, #00d4ff, #00ff88)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}>
                  Ready to Start
                </Box>
                <Box component="span" sx={{ color: 'white', ml: 2 }}>
                  Your Journey?
                </Box>
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  color: '#94a3b8',
                  maxWidth: '600px',
                  mx: 'auto',
                  lineHeight: 1.6,
                  mb: 6,
                }}
              >
                Join thousands of investors who trust SafeMint for their DeFi investments
              </Typography>

              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={3}
                justifyContent="center"
                alignItems="center"
              >
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    background: 'linear-gradient(135deg, #FFA000, #FF8F00)',
                    color: '#000',
                    fontWeight: 600,
                    px: 6,
                    py: 2,
                    fontSize: '1.2rem',
                    borderRadius: 3,
                    '&:hover': {
                      background: 'linear-gradient(135deg, #FF8F00, #FF6F00)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  Start Investing Now
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: '#FFA000',
                    color: '#FFA000',
                    fontWeight: 600,
                    px: 6,
                    py: 2,
                    fontSize: '1.2rem',
                    borderRadius: 3,
                    '&:hover': {
                      borderColor: '#FFA000',
                      backgroundColor: 'rgba(255, 160, 0, 0.1)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  Learn More
                </Button>
              </Stack>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Enhanced Footer */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.98) 0%, rgba(13, 13, 35, 0.95) 100%)',
          borderTop: '1px solid rgba(0, 212, 255, 0.2)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Footer Content */}
        <Container maxWidth="xl" sx={{ py: 8 }}>
          <Grid container spacing={6}>
            {/* Brand Section */}
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
                  {/* Enhanced SafeMint Logo */}
                  <Box
                    sx={{
                      width: 55,
                      height: 55,
                      borderRadius: 3,
                      background: 'linear-gradient(135deg, #00d4ff, #0099cc, #00ff88)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      boxShadow: '0 8px 32px rgba(0, 212, 255, 0.3)',
                      border: '2px solid rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '24px',
                        fontWeight: 900,
                        color: '#000',
                        position: 'relative',
                        '&::after': {
                          content: '"$"',
                          position: 'absolute',
                          top: '-2px',
                          right: '-8px',
                          fontSize: '14px',
                          fontWeight: 700,
                        }
                      }}
                    >
                      S
                    </Typography>
                    <Typography
                      sx={{
                        position: 'absolute',
                        bottom: '2px',
                        fontSize: '8px',
                        fontWeight: 700,
                        color: '#000',
                        letterSpacing: '1px',
                      }}
                    >
                      MINT
                    </Typography>
                  </Box>

                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      background: 'linear-gradient(135deg, #00d4ff, #0099cc, #00ff88)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      color: 'transparent',
                    }}
                  >
                    SafeMint
                  </Typography>
                </Box>

                <Typography
                  variant="body1"
                  sx={{
                    color: '#94a3b8',
                    mb: 4,
                    lineHeight: 1.7,
                    fontSize: '1.1rem',
                  }}
                >
                  The next-generation DeFi platform revolutionizing smart contract investments
                  with unparalleled security, transparency, and returns.
                </Typography>

                {/* Social Links */}
                <Stack direction="row" spacing={2}>
                  {[
                    { icon: <MessageCircle size={20} />, label: 'Telegram', color: '#FFA000' },
                    { icon: <Twitter size={20} />, label: 'Twitter', color: '#FFA000' },
                    { icon: <Github size={20} />, label: 'GitHub', color: '#FFA000' },
                    { icon: <Globe size={20} />, label: 'Website', color: '#FFA000' },
                  ].map((social, index) => (
                    <Box
                      key={index}
                      sx={{
                        width: 45,
                        height: 45,
                        borderRadius: '50%',
                        background: 'rgba(255, 160, 0, 0.1)',
                        border: '1px solid rgba(255, 160, 0, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          background: 'rgba(255, 160, 0, 0.2)',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 8px 25px rgba(255, 160, 0, 0.3)',
                        }
                      }}
                    >
                      <Box sx={{ color: social.color }}>
                        {social.icon}
                      </Box>
                    </Box>
                  ))}
                </Stack>
              </motion.div>
            </Grid>

            {/* Quick Links */}
            <Grid item xs={12} sm={6} md={2}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: 'white',
                    fontWeight: 600,
                    mb: 3,
                  }}
                >
                  Platform
                </Typography>
                <Stack spacing={2}>
                  {['Dashboard', 'Investments', 'Rewards', 'Analytics', 'Security'].map((link, index) => (
                    <Typography
                      key={index}
                      variant="body2"
                      sx={{
                        color: '#94a3b8',
                        cursor: 'pointer',
                        transition: 'color 0.3s ease',
                        '&:hover': {
                          color: '#FFA000',
                        }
                      }}
                    >
                      {link}
                    </Typography>
                  ))}
                </Stack>
              </motion.div>
            </Grid>

            {/* Resources */}
            <Grid item xs={12} sm={6} md={2}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: 'white',
                    fontWeight: 600,
                    mb: 3,
                  }}
                >
                  Resources
                </Typography>
                <Stack spacing={2}>
                  {['Documentation', 'API Reference', 'Tutorials', 'Community', 'Support'].map((link, index) => (
                    <Typography
                      key={index}
                      variant="body2"
                      sx={{
                        color: '#94a3b8',
                        cursor: 'pointer',
                        transition: 'color 0.3s ease',
                        '&:hover': {
                          color: '#FFA000',
                        }
                      }}
                    >
                      {link}
                    </Typography>
                  ))}
                </Stack>
              </motion.div>
            </Grid>

            {/* Legal */}
            <Grid item xs={12} sm={6} md={2}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: 'white',
                    fontWeight: 600,
                    mb: 3,
                  }}
                >
                  Legal
                </Typography>
                <Stack spacing={2}>
                  {['Terms of Service', 'Privacy Policy', 'Risk Disclosure', 'Compliance', 'Audit Reports'].map((link, index) => (
                    <Typography
                      key={index}
                      variant="body2"
                      sx={{
                        color: '#94a3b8',
                        cursor: 'pointer',
                        transition: 'color 0.3s ease',
                        '&:hover': {
                          color: '#FFA000',
                        }
                      }}
                    >
                      {link}
                    </Typography>
                  ))}
                </Stack>
              </motion.div>
            </Grid>

            {/* Newsletter */}
            <Grid item xs={12} md={2}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: 'white',
                    fontWeight: 600,
                    mb: 3,
                  }}
                >
                  Stay Updated
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#94a3b8',
                    mb: 3,
                    lineHeight: 1.6,
                  }}
                >
                  Get the latest updates on new features and investment opportunities.
                </Typography>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{
                    borderColor: '#FFA000',
                    color: '#FFA000',
                    fontWeight: 600,
                    '&:hover': {
                      borderColor: '#FFA000',
                      backgroundColor: 'rgba(255, 160, 0, 0.1)',
                    },
                  }}
                >
                  Subscribe
                </Button>
              </motion.div>
            </Grid>
          </Grid>
        </Container>

        {/* Footer Bottom */}
        <Box
          sx={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            py: 4,
            background: 'rgba(0, 0, 0, 0.3)',
          }}
        >
          <Container maxWidth="xl">
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item xs={12} md={6}>
                <Typography variant="body2" sx={{ color: '#64748b' }}>
                  © 2024 SafeMint. All rights reserved. Built with ❤️ for the DeFi community.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ textAlign: { xs: 'left', md: 'right' }, mt: { xs: 2, md: 0 } }}>
                  <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                    <strong>Risk Warning:</strong> Cryptocurrency investments carry inherent risks.
                    Please invest responsibly and only what you can afford to lose.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            style={{
              position: 'fixed',
              bottom: 30,
              right: 30,
              zIndex: 1000,
            }}
          >
            <Fab
              onClick={scrollToTop}
              sx={{
                background: 'linear-gradient(135deg, #00d4ff, #0099cc)',
                color: 'white',
                width: 60,
                height: 60,
                boxShadow: '0 8px 25px rgba(0, 212, 255, 0.4)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #00e5ff, #00b8d4)',
                  transform: 'scale(1.1)',
                  boxShadow: '0 12px 35px rgba(0, 212, 255, 0.6)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <ArrowUp size={24} />
            </Fab>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced CSS animations */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-15px) rotate(1deg); }
            66% { transform: translateY(-5px) rotate(-1deg); }
            100% { transform: translateY(0px) rotate(0deg); }
          }

          @keyframes pulse {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.05); opacity: 0.8; }
            100% { transform: scale(1); opacity: 1; }
          }

          @keyframes glow {
            0% { box-shadow: 0 0 20px rgba(0, 212, 255, 0.3); }
            50% { box-shadow: 0 0 40px rgba(0, 212, 255, 0.6); }
            100% { box-shadow: 0 0 20px rgba(0, 212, 255, 0.3); }
          }

          @keyframes slideInUp {
            from {
              transform: translateY(30px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          @keyframes fadeInScale {
            from {
              transform: scale(0.9);
              opacity: 0;
            }
            to {
              transform: scale(1);
              opacity: 1;
            }
          }

          /* Smooth scrolling for all browsers */
          html {
            scroll-behavior: smooth;
          }

          /* Custom scrollbar */
          ::-webkit-scrollbar {
            width: 8px;
          }

          ::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.1);
          }

          ::-webkit-scrollbar-thumb {
            background: linear-gradient(135deg, #00d4ff, #0099cc);
            border-radius: 4px;
          }

          ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(135deg, #00e5ff, #00b8d4);
          }
        `}
      </style>
    </Box>
  );
};

export default LandingPage;

import React from 'react';
import { Card, CardContent, Box, Typography } from '@mui/material';

interface StatCardProps {
  icon: React.ReactElement;
  title: string;
  value: string | number;
  subtitle: string;
  color: string;
  gradient?: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, value, subtitle, color, gradient }) => {
  return (
    <Card sx={{
      width: '100%',
      maxWidth: '100%',
      height: '100%',
      backgroundColor: 'white',
      borderRadius: { xs: 4, sm: 5 },
      boxShadow: { xs: 3, sm: 6, md: 10 },
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      border: `2px solid ${color}15`,
      margin: 0,
      position: 'relative',
      overflow: 'hidden',
      background: gradient || `linear-gradient(145deg, #ffffff 0%, #fafafa 100%)`,
      '&:hover': {
        boxShadow: { xs: 6, sm: 12, md: 20 },
        transform: 'translateY(-8px) scale(1.03)',
        borderColor: `${color}40`,
        background: `linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)`,
        '&::before': {
          opacity: 1,
          height: '4px'
        },
        '&::after': {
          opacity: 0.1
        }
      },
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: `linear-gradient(90deg, ${color} 0%, ${color}60 25%, ${color}80 50%, ${color}60 75%, ${color} 100%)`,
        backgroundSize: '200% 100%',
        opacity: 0.8,
        transition: 'all 0.4s ease',
        animation: 'shimmer 3s ease-in-out infinite',
        '@keyframes shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `radial-gradient(circle at 50% 0%, ${color}05 0%, transparent 50%)`,
        opacity: 0,
        transition: 'opacity 0.4s ease'
      }
    }}>
      <CardContent sx={{
        width: '100%',
        maxWidth: '100%',
        p: { xs: 4, sm: 5, md: 6 },
        '&:last-child': { pb: { xs: 4, sm: 5, md: 6 } },
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        minHeight: { xs: '200px', sm: '240px', md: '280px' },
        boxSizing: 'border-box',
        margin: 0,
        justifyContent: 'center',
        alignItems: 'stretch'
      }}>
        {/* Main Container: Enhanced 2-Box Layout for Large Icons */}
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: { xs: 4, sm: 5, md: 6 },
          width: '100%',
          height: '100%',
          position: 'relative'
        }}>

          {/* Box 1: Enhanced Icon Container - Optimized for Large SVG Icons */}
          <Box sx={{
            flex: '0 0 auto',
            width: { xs: '140px', sm: '160px', md: '180px' },
            height: { xs: '140px', sm: '160px', md: '180px' },
            borderRadius: { xs: 4, sm: 5, md: 6 },
            backgroundColor: `${color}08`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: `4px solid ${color}20`,
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            position: 'relative',
            overflow: 'hidden',
            background: `
              radial-gradient(circle at 30% 30%, ${color}15 0%, transparent 50%),
              linear-gradient(135deg, ${color}05 0%, ${color}15 50%, ${color}05 100%)
            `,
            boxShadow: `
              0 8px 25px ${color}25,
              inset 0 1px 0 rgba(255,255,255,0.4),
              inset 0 -1px 0 ${color}10
            `,
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)`,
              transition: 'left 0.8s ease'
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '120%',
              height: '120%',
              background: `radial-gradient(circle, ${color}05 0%, transparent 70%)`,
              transform: 'translate(-50%, -50%)',
              opacity: 0,
              transition: 'opacity 0.5s ease'
            },
            '&:hover': {
              backgroundColor: `${color}15`,
              transform: 'scale(1.05) translateY(-4px)',
              borderColor: `${color}40`,
              boxShadow: `
                0 15px 40px ${color}35,
                inset 0 1px 0 rgba(255,255,255,0.5),
                inset 0 -1px 0 ${color}20
              `,
              '&::before': {
                left: '100%'
              },
              '&::after': {
                opacity: 1
              },
              '& .icon-wrapper': {
                transform: 'scale(1.1) rotate(5deg)'
              }
            }
          }}>
            <Box
              className="icon-wrapper"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                filter: `drop-shadow(0 4px 12px ${color}40)`,
                position: 'relative',
                zIndex: 2,
                '&:hover': {
                  filter: `drop-shadow(0 6px 16px ${color}60)`
                }
              }}
            >
              {icon}
            </Box>
          </Box>

          {/* Box 2: Optimized Content Container - Enhanced for Large Icons */}
          <Box sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            height: '100%',
            minHeight: { xs: '140px', sm: '160px', md: '180px' },
            gap: { xs: 1.5, sm: 2, md: 2.5 },
            position: 'relative',
            pl: { xs: 2, sm: 3, md: 4 }
          }}>

            {/* Title Section - Enhanced for Large Icons */}
            <Box sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              minHeight: { xs: '40px', sm: '44px', md: '48px' }
            }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: 'text.primary',
                  fontSize: { xs: '1.3rem', sm: '1.5rem', md: '1.7rem' },
                  lineHeight: 1.1,
                  textAlign: 'left',
                  letterSpacing: '-0.01em',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  maxWidth: '100%',
                  textShadow: '0 1px 2px rgba(0,0,0,0.1)'
                }}
                title={title} // Shows full title on hover
              >
                {title}
              </Typography>
            </Box>

            {/* Value Section - Enhanced Typography for Large Icons */}
            <Box sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'flex-start',
              minHeight: { xs: '50px', sm: '60px', md: '70px' }
            }}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  color,
                  fontSize: { xs: '2.8rem', sm: '3.5rem', md: '4.2rem' },
                  lineHeight: 0.9,
                  letterSpacing: '-0.03em',
                  textAlign: 'left',
                  textShadow: `0 2px 8px ${color}20`,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  maxWidth: '100%'
                }}
                title={value?.toString()} // Shows full value on hover
              >
                {value}
              </Typography>
            </Box>

            {/* Subtitle Section - Enhanced for Large Icons */}
            <Box sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              minHeight: { xs: '28px', sm: '32px', md: '36px' }
            }}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                  lineHeight: 1.2,
                  color: 'text.secondary',
                  fontWeight: 600,
                  textAlign: 'left',
                  letterSpacing: '0.01em',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  maxWidth: '100%',
                  opacity: 0.8
                }}
                title={subtitle} // Shows full subtitle on hover
              >
                {subtitle}
              </Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default StatCard;

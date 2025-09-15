import React from 'react';
import { Card, CardContent, Box, Typography } from '@mui/material';

interface StatCardProps {
  icon: React.ReactElement;
  title: string;
  value: string | number;
  subtitle: string;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, value, subtitle, color }) => {
  return (
    <Card sx={{
      width: '100%',
      maxWidth: '100%',
      height: '100%',
      backgroundColor: 'white',
      borderRadius: { xs: 2, sm: 3 },
      boxShadow: { xs: 1, sm: 2, md: 3 },
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      border: '1px solid rgba(0, 0, 0, 0.05)',
      margin: 0,
      '&:hover': {
        boxShadow: { xs: 3, sm: 6, md: 8 },
        transform: 'translateY(-4px)',
        borderColor: color
      }
    }}>
      <CardContent sx={{
        width: '100%',
        maxWidth: '100%',
        p: { xs: 1.5, sm: 2, md: 2.5 },
        '&:last-child': { pb: { xs: 1.5, sm: 2, md: 2.5 } },
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        minHeight: { xs: '120px', sm: '140px', md: '160px' },
        boxSizing: 'border-box',
        margin: 0
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          justifyContent: { xs: 'center', sm: 'flex-start' },
          mb: { xs: 1.5, sm: 2 },
          gap: { xs: 1, sm: 1.5 },
          textAlign: { xs: 'center', sm: 'left' }
        }}>
          <Box sx={{
            p: { xs: 0.5, sm: 1 },
            borderRadius: { xs: 1, sm: 1.5 },
            backgroundColor: `${color}15`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {React.cloneElement(icon, {
              sx: {
                color,
                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
              }
            })}
          </Box>
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1.1rem' },
              fontWeight: 600,
              lineHeight: 1.2,
              color: 'text.primary',
              flex: { xs: 'none', sm: 1 },
              minWidth: 0,
              textAlign: { xs: 'center', sm: 'left' }
            }}
          >
            {title}
          </Typography>
        </Box>

        <Box sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          gap: { xs: 0.5, sm: 1 }
        }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color,
              fontSize: { xs: '1.1rem', sm: '1.4rem', md: '1.7rem' },
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              textAlign: 'center'
            }}
          >
            {value}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.875rem' },
              lineHeight: 1.4,
              color: 'text.secondary',
              fontWeight: 500,
              textAlign: 'center'
            }}
          >
            {subtitle}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default StatCard;

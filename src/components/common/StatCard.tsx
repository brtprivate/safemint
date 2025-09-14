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
    <Card sx={{ p: { xs: 1.5, sm: 2 }, boxShadow: 2, height: '100%', backgroundColor: 'white' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
          {React.cloneElement(icon, { 
            sx: { color, mr: 1, fontSize: { xs: '1.5rem', sm: '2rem' } } 
          })}
          <Typography variant="h6" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
            {title}
          </Typography>
        </Box>
        <Typography 
          variant="h4" 
          sx={{ 
            fontWeight: 'bold', 
            color, 
            fontSize: { xs: '1.25rem', sm: '1.5rem' } 
          }}
        >
          {value}
        </Typography>
        <Typography 
          variant="body2" 
          color="text.secondary" 
          sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
        >
          {subtitle}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StatCard;

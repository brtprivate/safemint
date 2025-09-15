import React from 'react';
import { Box, Container, useTheme, useMediaQuery } from '@mui/material';

interface ResponsiveContainerProps {
  children: React.ReactNode;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  disableGutters?: boolean;
}

const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({
  children,
  maxWidth = 'xl',
  disableGutters = false
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container
      maxWidth={maxWidth}
      disableGutters={disableGutters}
      sx={{
        py: {
          xs: 1,
          sm: 1.5,
          md: 2,
          lg: 3
        },
        px: {
          xs: 0.5,
          sm: 1,
          md: 2,
          lg: 3
        },
        minHeight: '100vh',
        backgroundColor: 'background.default'
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '100%',
          overflow: 'hidden'
        }}
      >
        {children}
      </Box>
    </Container>
  );
};

export default ResponsiveContainer;

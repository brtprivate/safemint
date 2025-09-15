import React from 'react';
import { Grid, GridProps, useTheme, useMediaQuery } from '@mui/material';

interface ResponsiveGridProps extends Omit<GridProps, 'spacing'> {
  children: React.ReactNode;
  spacing?: number | { xs?: number; sm?: number; md?: number; lg?: number; xl?: number };
  mobileSpacing?: number;
  tabletSpacing?: number;
  desktopSpacing?: number;
}

const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({
  children,
  spacing,
  mobileSpacing = 1.5,
  tabletSpacing = 2,
  desktopSpacing = 3,
  ...props
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  // Determine spacing based on screen size
  const getSpacing = () => {
    if (spacing) {
      if (typeof spacing === 'object') {
        return spacing;
      }
      return spacing;
    }

    if (isMobile) return mobileSpacing;
    if (isTablet) return tabletSpacing;
    return desktopSpacing;
  };

  const responsiveSpacing = typeof spacing === 'object' 
    ? spacing 
    : {
        xs: mobileSpacing,
        sm: tabletSpacing,
        md: desktopSpacing,
        lg: desktopSpacing,
        xl: desktopSpacing
      };

  return (
    <Grid
      spacing={spacing || responsiveSpacing}
      {...props}
    >
      {children}
    </Grid>
  );
};

export default ResponsiveGrid;

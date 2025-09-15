import React, { useState } from 'react';
import { Box, BoxProps } from '@mui/material';
import LOGO_CONFIG from '../../assets/logo';

interface LogoProps extends Omit<BoxProps, 'component'> {
  size?: 'small' | 'medium' | 'large' | 'navbar' | 'sidebar';
  fallbackText?: string;
}

const Logo: React.FC<LogoProps> = ({
  size = 'medium',
  fallbackText = 'SM',
  sx,
  ...props
}) => {
  const [imageError, setImageError] = useState(false);
  const [fallbackError, setFallbackError] = useState(false);

  // Get size configuration
  const getSizeConfig = () => {
    switch (size) {
      case 'small':
        return { width: 24, height: 24 };
      case 'navbar':
        return LOGO_CONFIG.sizes.navbar;
      case 'sidebar':
        return LOGO_CONFIG.sizes.sidebar;
      case 'large':
        return LOGO_CONFIG.sizes.large;
      default:
        return { width: 48, height: 48 };
    }
  };

  const sizeConfig = getSizeConfig();

  // Handle image load error
  const handleImageError = () => {
    if (!imageError) {
      setImageError(true);
    } else if (!fallbackError) {
      setFallbackError(true);
    }
  };

  // Get the image source
  const getImageSrc = () => {
    if (!imageError) {
      return LOGO_CONFIG.image;
    } else if (!fallbackError) {
      return LOGO_CONFIG.fallback;
    }
    return null;
  };

  const imageSrc = getImageSrc();

  // If both image sources fail, show text fallback
  if (!imageSrc || (imageError && fallbackError)) {
    return (
      <Box
        sx={{
          width: sizeConfig.width,
          height: sizeConfig.height,
          borderRadius: LOGO_CONFIG.styles.borderRadius,
          background: 'linear-gradient(45deg, #FFA000 30%, #FF8F00 90%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          fontWeight: 'bold',
          fontSize: sizeConfig.width * 0.35,
          boxShadow: '0 4px 15px rgba(255, 160, 0, 0.4)',
          border: '2px solid rgba(255, 255, 255, 0.3)',
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
          // Add enhanced styling for navbar fallback
          ...(size === 'navbar' && {
            filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.2))',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)',
              filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3))',
            }
          }),
          ...sx
        }}
        {...props}
      >
        {fallbackText}
      </Box>
    );
  }

  return (
    <Box
      component="img"
      src={imageSrc}
      alt={LOGO_CONFIG.alt}
      onError={handleImageError}
      sx={{
        width: sizeConfig.width,
        height: sizeConfig.height,
        borderRadius: LOGO_CONFIG.styles.borderRadius,
        objectFit: LOGO_CONFIG.styles.objectFit,
        // Add enhanced styling for navbar
        ...(size === 'navbar' && {
          filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.2))',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
            filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3))',
          }
        }),
        ...sx
      }}
      {...props}
    />
  );
};

export default Logo;

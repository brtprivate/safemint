import React from 'react';
import { Box, BoxProps } from '@mui/material';

interface SafeMintTextSvgProps extends Omit<BoxProps, 'component'> {
  size?: 'small' | 'medium' | 'large' | 'navbar';
  animated?: boolean;
}

const SafeMintTextSvg: React.FC<SafeMintTextSvgProps> = ({
  size = 'medium',
  animated = true,
  sx,
  ...props
}) => {
  // Get size configuration
  const getSizeConfig = () => {
    switch (size) {
      case 'small':
        return { width: 80, height: 24, fontSize: 16 };
      case 'navbar':
        return { width: 100, height: 28, fontSize: 18 };
      case 'large':
        return { width: 140, height: 36, fontSize: 24 };
      default:
        return { width: 120, height: 32, fontSize: 20 };
    }
  };

  const sizeConfig = getSizeConfig();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        ...sx
      }}
      {...props}
    >
      <svg
        width={sizeConfig.width}
        height={sizeConfig.height}
        viewBox="0 0 120 32"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          filter: 'drop-shadow(0 1px 3px rgba(255, 160, 0, 0.3))'
        }}
      >
        <defs>
          {/* Gradient definitions */}
          <linearGradient id="safeMintTextGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFA000">
              {animated && (
                <animate attributeName="stop-color" values="#FFA000;#FFD54F;#FFA000" dur="3s" repeatCount="indefinite" />
              )}
            </stop>
            <stop offset="50%" stopColor="#FF8F00">
              {animated && (
                <animate attributeName="stop-color" values="#FF8F00;#FFC107;#FF8F00" dur="3s" repeatCount="indefinite" />
              )}
            </stop>
            <stop offset="100%" stopColor="#FF6F00">
              {animated && (
                <animate attributeName="stop-color" values="#FF6F00;#FF9800;#FF6F00" dur="3s" repeatCount="indefinite" />
              )}
            </stop>
          </linearGradient>

          {/* Text shadow effect */}
          <filter id="textShadow">
            <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="rgba(0,0,0,0.3)"/>
          </filter>
        </defs>

        {/* SafeMint Text */}
        <text
          x="60"
          y="20"
          fontFamily="'Inter', 'Roboto', sans-serif"
          fontSize={sizeConfig.fontSize}
          fontWeight="700"
          fill="url(#safeMintTextGradient)"
          textAnchor="middle"
          letterSpacing="0.5px"
          filter="url(#textShadow)"
        >
          <tspan>Safe</tspan>
          <tspan fill="#FF6F00" fontWeight="800">Mint</tspan>
          
          {animated && (
            <animate
              attributeName="opacity"
              values="0.9;1;0.9"
              dur="2s"
              repeatCount="indefinite"
            />
          )}
        </text>
      </svg>
    </Box>
  );
};

export default SafeMintTextSvg;

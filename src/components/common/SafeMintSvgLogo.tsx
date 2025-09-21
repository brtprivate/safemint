import React from 'react';
import { Box, BoxProps } from '@mui/material';

interface SafeMintSvgLogoProps extends Omit<BoxProps, 'component'> {
  size?: 'small' | 'medium' | 'large' | 'navbar';
  animated?: boolean;
}

const SafeMintSvgLogo: React.FC<SafeMintSvgLogoProps> = ({
  size = 'medium',
  animated = true,
  sx,
  ...props
}) => {
  // Get size configuration
  const getSizeConfig = () => {
    switch (size) {
      case 'small':
        return { width: 120, height: 32, fontSize: 18 };
      case 'navbar':
        return { width: 140, height: 36, fontSize: 20 };
      case 'large':
        return { width: 200, height: 48, fontSize: 28 };
      default:
        return { width: 160, height: 40, fontSize: 24 };
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
        viewBox="0 0 200 48"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          filter: 'drop-shadow(0 2px 8px rgba(255, 160, 0, 0.3))'
        }}
      >
        <defs>
          {/* Enhanced gradient definitions */}
          <linearGradient id="safeMintGradient" x1="0%" y1="0%" x2="100%" y2="0%">
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

          <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD54F" />
            <stop offset="50%" stopColor="#FFC107" />
            <stop offset="100%" stopColor="#FFA000" />
          </linearGradient>

          {/* Enhanced glow effect */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Sparkle effect */}
          <filter id="sparkle">
            <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
            <feOffset in="coloredBlur" dx="1" dy="1" result="offsetBlur"/>
            <feMerge>
              <feMergeNode in="offsetBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Shield icon */}
        <g transform="translate(8, 8)">
          <path
            d="M16 4 L16 4 C16 4 12 2 8 4 C4 6 4 10 4 14 C4 18 8 22 16 24 C24 22 28 18 28 14 C28 10 28 6 24 4 C20 2 16 4 16 4 Z"
            fill="url(#shieldGradient)"
            stroke="#FF8F00"
            strokeWidth="1"
            filter={animated ? "url(#glow)" : undefined}
          >
            {animated && (
              <animateTransform
                attributeName="transform"
                type="scale"
                values="1;1.1;1"
                dur="3s"
                repeatCount="indefinite"
              />
            )}
          </path>
          
          {/* Checkmark inside shield */}
          <path
            d="M12 16 L15 19 L20 12"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          >
            {animated && (
              <animate
                attributeName="stroke-dasharray"
                values="0 20;20 0"
                dur="2s"
                repeatCount="indefinite"
              />
            )}
          </path>
        </g>

        {/* SafeMint Text with enhanced styling */}
        <g filter={animated ? "url(#sparkle)" : undefined}>
          <text
            x="48"
            y="30"
            fontFamily="'Inter', 'Roboto', sans-serif"
            fontSize={sizeConfig.fontSize}
            fontWeight="700"
            fill="url(#safeMintGradient)"
            letterSpacing="0.8px"
            style={{
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
            }}
          >
            <tspan>Safe</tspan>
            <tspan fill="#FF6F00" fontWeight="800" dx="2">Mint</tspan>

            {animated && (
              <>
                <animate
                  attributeName="opacity"
                  values="0.9;1;0.9"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  values="1;1.02;1"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </>
            )}
          </text>
        </g>

        {/* Enhanced decorative elements */}
        <g opacity="0.8">
          <circle
            cx="185"
            cy="12"
            r="2"
            fill="#FFA000"
            filter="url(#glow)"
          >
            {animated && (
              <>
                <animate
                  attributeName="r"
                  values="1.5;3.5;1.5"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.6;1;0.6"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </>
            )}
          </circle>

          <circle
            cx="190"
            cy="20"
            r="1.5"
            fill="#FF8F00"
            filter="url(#glow)"
          >
            {animated && (
              <>
                <animate
                  attributeName="opacity"
                  values="0.3;0.9;0.3"
                  dur="1.8s"
                  repeatCount="indefinite"
                />
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  values="0 190 20;360 190 20"
                  dur="8s"
                  repeatCount="indefinite"
                />
              </>
            )}
          </circle>

          <circle
            cx="180"
            cy="28"
            r="1"
            fill="#FFD54F"
            opacity="0.5"
          >
            {animated && (
              <animate
                attributeName="opacity"
                values="0.2;0.7;0.2"
                dur="2.2s"
                repeatCount="indefinite"
              />
            )}
          </circle>
        </g>

        {/* Enhanced underline effect */}
        <line
          x1="48"
          y1="36"
          x2="160"
          y2="36"
          stroke="url(#safeMintGradient)"
          strokeWidth="2"
          opacity="0.4"
          strokeLinecap="round"
        >
          {animated && (
            <>
              <animate
                attributeName="stroke-dasharray"
                values="0 112;56 56;112 0"
                dur="4s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.2;0.6;0.2"
                dur="3s"
                repeatCount="indefinite"
              />
            </>
          )}
        </line>
      </svg>
    </Box>
  );
};

export default SafeMintSvgLogo;

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
          {/* Enhanced gradient definitions */}
          <linearGradient id="safeMintTextGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFA000">
              {animated && (
                <animate attributeName="stop-color" values="#FFA000;#FFD54F;#FFEB3B;#FFA000" dur="4s" repeatCount="indefinite" />
              )}
            </stop>
            <stop offset="50%" stopColor="#FF8F00">
              {animated && (
                <animate attributeName="stop-color" values="#FF8F00;#FFC107;#FF9800;#FF8F00" dur="4s" repeatCount="indefinite" />
              )}
            </stop>
            <stop offset="100%" stopColor="#FF6F00">
              {animated && (
                <animate attributeName="stop-color" values="#FF6F00;#FF9800;#F57C00;#FF6F00" dur="4s" repeatCount="indefinite" />
              )}
            </stop>
          </linearGradient>

          {/* Glowing gradient for special effects */}
          <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFD54F" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#FFC107" stopOpacity="1" />
            <stop offset="100%" stopColor="#FF9800" stopOpacity="0.8" />
          </linearGradient>

          {/* Enhanced text shadow and glow effects */}
          <filter id="textShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="rgba(0,0,0,0.4)"/>
            <feGaussianBlur stdDeviation="1" result="glow"/>
            <feMerge>
              <feMergeNode in="glow"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Sparkle effect */}
          <filter id="sparkle">
            <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Background glow effect */}
        {animated && (
          <circle
            cx="60"
            cy="16"
            r="45"
            fill="url(#glowGradient)"
            opacity="0.1"
          >
            <animate
              attributeName="r"
              values="40;50;40"
              dur="3s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.05;0.15;0.05"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
        )}

        {/* Main SafeMint Text with enhanced animations */}
        <g>
          {/* "Safe" text */}
          <text
            x="35"
            y="20"
            fontFamily="'Inter', 'Roboto', sans-serif"
            fontSize={sizeConfig.fontSize}
            fontWeight="700"
            fill="url(#safeMintTextGradient)"
            textAnchor="middle"
            letterSpacing="0.8px"
            filter="url(#textShadow)"
          >
            Safe

            {animated && (
              <>
                {/* Bounce animation */}
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0,0; 0,-2; 0,0; 0,-1; 0,0"
                  dur="3s"
                  repeatCount="indefinite"
                />

                {/* Subtle scale pulse */}
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  values="1;1.05;1"
                  dur="4s"
                  repeatCount="indefinite"
                  additive="sum"
                />

                {/* Opacity breathing */}
                <animate
                  attributeName="opacity"
                  values="0.9;1;0.9"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
              </>
            )}
          </text>

          {/* "Mint" text with different animation timing */}
          <text
            x="85"
            y="20"
            fontFamily="'Inter', 'Roboto', sans-serif"
            fontSize={sizeConfig.fontSize}
            fontWeight="800"
            fill="#FF6F00"
            textAnchor="middle"
            letterSpacing="0.8px"
            filter="url(#sparkle)"
          >
            Mint

            {animated && (
              <>
                {/* Delayed bounce animation */}
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0,0; 0,-2; 0,0; 0,-1; 0,0"
                  dur="3s"
                  begin="0.5s"
                  repeatCount="indefinite"
                />

                {/* Scale animation with different timing */}
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  values="1;1.08;1"
                  dur="3.5s"
                  repeatCount="indefinite"
                  additive="sum"
                />

                {/* Color animation for Mint */}
                <animate
                  attributeName="fill"
                  values="#FF6F00;#FF9800;#F57C00;#FF6F00"
                  dur="3s"
                  repeatCount="indefinite"
                />

                {/* Opacity with different timing */}
                <animate
                  attributeName="opacity"
                  values="0.85;1;0.85"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </>
            )}
          </text>
        </g>

        {/* Decorative sparkles */}
        {animated && (
          <g opacity="0.7">
            <circle cx="15" cy="8" r="1" fill="#FFD54F">
              <animate
                attributeName="opacity"
                values="0;1;0"
                dur="2s"
                repeatCount="indefinite"
              />
              <animateTransform
                attributeName="transform"
                type="scale"
                values="0;1;0"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>

            <circle cx="105" cy="10" r="1.5" fill="#FFC107">
              <animate
                attributeName="opacity"
                values="0;1;0"
                dur="2.5s"
                begin="1s"
                repeatCount="indefinite"
              />
              <animateTransform
                attributeName="transform"
                type="scale"
                values="0;1;0"
                dur="2.5s"
                begin="1s"
                repeatCount="indefinite"
              />
            </circle>

            <circle cx="25" cy="28" r="0.8" fill="#FF9800">
              <animate
                attributeName="opacity"
                values="0;1;0"
                dur="1.8s"
                begin="1.5s"
                repeatCount="indefinite"
              />
              <animateTransform
                attributeName="transform"
                type="scale"
                values="0;1;0"
                dur="1.8s"
                begin="1.5s"
                repeatCount="indefinite"
              />
            </circle>

            <circle cx="95" cy="30" r="1" fill="#FFD54F">
              <animate
                attributeName="opacity"
                values="0;1;0"
                dur="2.2s"
                begin="0.8s"
                repeatCount="indefinite"
              />
              <animateTransform
                attributeName="transform"
                type="scale"
                values="0;1;0"
                dur="2.2s"
                begin="0.8s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        )}
      </svg>
    </Box>
  );
};

export default SafeMintTextSvg;

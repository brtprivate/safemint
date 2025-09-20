import React from 'react';

// Enhanced Custom SVG Icons with animations and gradients
const CustomSVGIcons = {
  Users: ({ size = 24, color = 'currentColor', animated = true }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="usersGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4F46E5" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <circle cx="9" cy="7" r="4" fill="url(#usersGradient)" opacity="0.8" filter="url(#glow)">
        {animated && <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>}
      </circle>
      <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" stroke="url(#usersGradient)" strokeWidth="2" fill="none"/>
      <circle cx="16" cy="6" r="3" fill="url(#usersGradient)" opacity="0.6">
        {animated && <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2.5s" repeatCount="indefinite"/>}
      </circle>
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" stroke="url(#usersGradient)" strokeWidth="2" fill="none"/>
    </svg>
  ),

  Star: ({ size = 24, color = 'currentColor', animated = true }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="50%" stopColor="#FCD34D" />
          <stop offset="100%" stopColor="#EF4444" />
        </linearGradient>
        <filter id="starGlow">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" 
            fill="url(#starGradient)" stroke="url(#starGradient)" strokeWidth="1" filter="url(#starGlow)">
        {animated && <animateTransform attributeName="transform" type="rotate" values="0 12 12;360 12 12" dur="8s" repeatCount="indefinite"/>}
      </path>
      <circle cx="12" cy="12" r="2" fill="white" opacity="0.9">
        {animated && <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite"/>}
      </circle>
    </svg>
  ),

  BarChart3: ({ size = 24, color = 'currentColor', animated = true }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="chartGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="50%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#6EE7B7" />
        </linearGradient>
      </defs>
      <rect x="3" y="12" width="4" height="9" rx="2" fill="url(#chartGradient)" opacity="0.8">
        {animated && <animate attributeName="height" values="5;9;5" dur="2s" repeatCount="indefinite"/>}
        {animated && <animate attributeName="y" values="16;12;16" dur="2s" repeatCount="indefinite"/>}
      </rect>
      <rect x="10" y="8" width="4" height="13" rx="2" fill="url(#chartGradient)">
        {animated && <animate attributeName="height" values="9;13;9" dur="2.5s" repeatCount="indefinite"/>}
        {animated && <animate attributeName="y" values="12;8;12" dur="2.5s" repeatCount="indefinite"/>}
      </rect>
      <rect x="17" y="4" width="4" height="17" rx="2" fill="url(#chartGradient)" opacity="0.9">
        {animated && <animate attributeName="height" values="13;17;13" dur="3s" repeatCount="indefinite"/>}
        {animated && <animate attributeName="y" values="8;4;8" dur="3s" repeatCount="indefinite"/>}
      </rect>
    </svg>
  ),

  CheckCircle: ({ size = 24, color = 'currentColor', animated = true }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="checkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#065F46" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="10" fill="url(#checkGradient)" opacity="0.9">
        {animated && <animate attributeName="r" values="8;10;8" dur="2s" repeatCount="indefinite"/>}
      </circle>
      <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {animated && <animate attributeName="stroke-dasharray" values="0 10;10 0;0 10" dur="3s" repeatCount="indefinite"/>}
      </path>
    </svg>
  ),

  TrendingUp: ({ size = 24, color = 'currentColor', animated = true }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="trendGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="50%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#6EE7B7" />
        </linearGradient>
      </defs>
      <path d="M3 17l6-6 4 4 8-8" stroke="url(#trendGradient)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {animated && <animate attributeName="stroke-dasharray" values="0 30;30 0;0 30" dur="4s" repeatCount="indefinite"/>}
      </path>
      <path d="M21 7v6h-6" stroke="url(#trendGradient)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="9" cy="11" r="2" fill="url(#trendGradient)" opacity="0.7">
        {animated && <animate attributeName="r" values="1;3;1" dur="2s" repeatCount="indefinite"/>}
      </circle>
      <circle cx="13" cy="15" r="2" fill="url(#trendGradient)" opacity="0.7">
        {animated && <animate attributeName="r" values="1;3;1" dur="2.5s" repeatCount="indefinite"/>}
      </circle>
    </svg>
  ),

  DollarSign: ({ size = 24, color = 'currentColor', animated = true }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="dollarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#059669" />
          <stop offset="50%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#34D399" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="10" fill="url(#dollarGradient)" opacity="0.1">
        {animated && <animate attributeName="opacity" values="0.05;0.15;0.05" dur="3s" repeatCount="indefinite"/>}
      </circle>
      <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" 
            stroke="url(#dollarGradient)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {animated && <animate attributeName="stroke-width" values="2;3;2" dur="2s" repeatCount="indefinite"/>}
      </path>
    </svg>
  ),

  Wallet: ({ size = 24, color = 'currentColor', animated = true }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="walletGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="50%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
      </defs>
      <rect x="2" y="6" width="20" height="12" rx="3" fill="url(#walletGradient)" opacity="0.9">
        {animated && <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite"/>}
      </rect>
      <rect x="2" y="4" width="20" height="2" rx="1" fill="url(#walletGradient)" opacity="0.7"/>
      <circle cx="18" cy="12" r="2" fill="white" opacity="0.9">
        {animated && <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>}
      </circle>
      <rect x="4" y="9" width="8" height="1.5" rx="0.75" fill="white" opacity="0.6"/>
      <rect x="4" y="11.5" width="6" height="1" rx="0.5" fill="white" opacity="0.4"/>
    </svg>
  ),

  Trophy: ({ size = 24, color = 'currentColor', animated = true }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="trophyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="50%" stopColor="#FCD34D" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
      </defs>
      <g>
        {animated && <animateTransform attributeName="transform" type="rotate" values="0 12 12;5 12 12;0 12 12;-5 12 12;0 12 12" dur="4s" repeatCount="indefinite"/>}
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18" 
              stroke="url(#trophyGradient)" strokeWidth="2" fill="none"/>
        <path d="M6 9a6 6 0 0 0 12 0" fill="url(#trophyGradient)" opacity="0.8"/>
        <rect x="8" y="15" width="8" height="6" rx="1" fill="url(#trophyGradient)" opacity="0.6"/>
        <rect x="10" y="18" width="4" height="1" rx="0.5" fill="white" opacity="0.8"/>
        <circle cx="12" cy="11" r="1.5" fill="white" opacity="0.9">
          {animated && <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite"/>}
        </circle>
      </g>
    </svg>
  ),

  Building2: ({ size = 24, color = 'currentColor', animated = true }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="buildingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366F1" />
          <stop offset="50%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#4F46E5" />
        </linearGradient>
      </defs>
      <rect x="3" y="4" width="8" height="17" rx="1" fill="url(#buildingGradient)" opacity="0.8">
        {animated && <animate attributeName="opacity" values="0.6;0.9;0.6" dur="3s" repeatCount="indefinite"/>}
      </rect>
      <rect x="13" y="8" width="8" height="13" rx="1" fill="url(#buildingGradient)" opacity="0.9">
        {animated && <animate attributeName="opacity" values="0.7;1;0.7" dur="3.5s" repeatCount="indefinite"/>}
      </rect>
      <rect x="5" y="7" width="2" height="2" rx="0.5" fill="white" opacity="0.7">
        {animated && <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite"/>}
      </rect>
      <rect x="8" y="7" width="2" height="2" rx="0.5" fill="white" opacity="0.7">
        {animated && <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2.2s" repeatCount="indefinite"/>}
      </rect>
      <rect x="5" y="11" width="2" height="2" rx="0.5" fill="white" opacity="0.7">
        {animated && <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2.4s" repeatCount="indefinite"/>}
      </rect>
      <rect x="8" y="11" width="2" height="2" rx="0.5" fill="white" opacity="0.7">
        {animated && <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2.6s" repeatCount="indefinite"/>}
      </rect>
      <rect x="15" y="11" width="2" height="2" rx="0.5" fill="white" opacity="0.7">
        {animated && <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2.8s" repeatCount="indefinite"/>}
      </rect>
      <rect x="18" y="11" width="2" height="2" rx="0.5" fill="white" opacity="0.7">
        {animated && <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite"/>}
      </rect>
      <rect x="15" y="15" width="2" height="2" rx="0.5" fill="white" opacity="0.7">
        {animated && <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3.2s" repeatCount="indefinite"/>}
      </rect>
      <rect x="18" y="15" width="2" height="2" rx="0.5" fill="white" opacity="0.7">
        {animated && <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3.4s" repeatCount="indefinite"/>}
      </rect>
    </svg>
  ),

  Users2: ({ size = 24, color = 'currentColor', animated = true }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="users2Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="50%" stopColor="#A78BFA" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
      <circle cx="7" cy="6" r="3" fill="url(#users2Gradient)" opacity="0.8">
        {animated && <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>}
      </circle>
      <circle cx="17" cy="6" r="3" fill="url(#users2Gradient)" opacity="0.8">
        {animated && <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite"/>}
      </circle>
      <circle cx="12" cy="10" r="3" fill="url(#users2Gradient)">
        {animated && <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite"/>}
      </circle>
      <path d="M2 20v-2a4 4 0 0 1 4-4h2" stroke="url(#users2Gradient)" strokeWidth="2" fill="none"/>
      <path d="M16 16h2a4 4 0 0 1 4 4v2" stroke="url(#users2Gradient)" strokeWidth="2" fill="none"/>
      <path d="M8 20v-2a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4v2" stroke="url(#users2Gradient)" strokeWidth="2" fill="none"/>
    </svg>
  ),

  Fuel: ({ size = 24, color = 'currentColor', animated = true }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fuelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="50%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
      </defs>
      <rect x="3" y="6" width="12" height="14" rx="2" fill="url(#fuelGradient)" opacity="0.8">
        {animated && <animate attributeName="opacity" values="0.6;0.9;0.6" dur="2s" repeatCount="indefinite"/>}
      </rect>
      <path d="M15 11l4-4v10l-4-4" fill="url(#fuelGradient)" opacity="0.9">
        {animated && <animateTransform attributeName="transform" type="translate" values="0 0;2 0;0 0" dur="1.5s" repeatCount="indefinite"/>}
      </path>
      <rect x="6" y="9" width="6" height="2" rx="1" fill="white" opacity="0.8">
        {animated && <animate attributeName="opacity" values="0.6;1;0.6" dur="1s" repeatCount="indefinite"/>}
      </rect>
      <rect x="6" y="12" width="6" height="2" rx="1" fill="white" opacity="0.6">
        {animated && <animate attributeName="opacity" values="0.4;0.8;0.4" dur="1.2s" repeatCount="indefinite"/>}
      </rect>
      <rect x="6" y="15" width="4" height="2" rx="1" fill="white" opacity="0.4">
        {animated && <animate attributeName="opacity" values="0.2;0.6;0.2" dur="1.4s" repeatCount="indefinite"/>}
      </rect>
      <circle cx="17" cy="13" r="1.5" fill="url(#fuelGradient)">
        {animated && <animate attributeName="r" values="1;2;1" dur="2s" repeatCount="indefinite"/>}
      </circle>
    </svg>
  ),

  Battery: ({ size = 24, color = 'currentColor', animated = true }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="batteryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="50%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#6EE7B7" />
        </linearGradient>
      </defs>
      <rect x="2" y="8" width="16" height="8" rx="2" fill="none" stroke="url(#batteryGradient)" strokeWidth="2"/>
      <rect x="4" y="10" width="3" height="4" rx="1" fill="url(#batteryGradient)" opacity="0.9">
        {animated && <animate attributeName="opacity" values="0.7;1;0.7" dur="1s" repeatCount="indefinite"/>}
      </rect>
      <rect x="8" y="10" width="3" height="4" rx="1" fill="url(#batteryGradient)" opacity="0.7">
        {animated && <animate attributeName="opacity" values="0.5;0.9;0.5" dur="1.2s" repeatCount="indefinite"/>}
      </rect>
      <rect x="12" y="10" width="3" height="4" rx="1" fill="url(#batteryGradient)" opacity="0.5">
        {animated && <animate attributeName="opacity" values="0.3;0.7;0.3" dur="1.4s" repeatCount="indefinite"/>}
      </rect>
      <rect x="20" y="10" width="2" height="4" rx="1" fill="url(#batteryGradient)" opacity="0.8"/>
      <path d="M6 6l2 2M10 6l2 2M14 6l2 2" stroke="url(#batteryGradient)" strokeWidth="2" strokeLinecap="round">
        {animated && <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>}
      </path>
    </svg>
  )
};

export default CustomSVGIcons;

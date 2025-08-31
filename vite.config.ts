import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 7050,
    open: true,
    host: '0.0.0.0',
    hmr: {
      host: 'localhost',
      port: 7050
    },
  },
  define: {
    global: 'globalThis',
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: false,
    target: 'esnext',
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      onwarn(warning, warn) {
        // Suppress common warnings that cause build issues
        if (warning.code === 'INVALID_ANNOTATION') return;
        if (warning.message?.includes('externalized for browser compatibility')) return;
        if (warning.message?.includes('__PURE__')) return;
        warn(warning);
      }
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', '@mui/material', '@mui/icons-material', 'wagmi', 'viem', '@web3modal/wagmi/react'],
    exclude: [
      '@mui/icons-material/Refresh',
      '@mui/icons-material/AccountBalanceWallet',
      '@mui/icons-material/PersonAdd',
      '@mui/icons-material/People',
      '@mui/icons-material/TrendingUp',
      '@mui/icons-material/MonetizationOn',
      '@mui/icons-material/Diamond',
      '@mui/icons-material/EmojiEvents',
      '@mui/icons-material/Timeline',
      '@mui/icons-material/Menu',
      '@mui/icons-material/Telegram',
      '@mui/icons-material/Translate',
      '@mui/icons-material/Security',
      '@mui/icons-material/Groups',
      '@mui/icons-material/CheckCircle',
      '@mui/icons-material/AccountTree',
      '@mui/icons-material/Login',
      '@mui/icons-material/SportsEsports',
      '@mui/icons-material/Star',
      '@mui/icons-material/Logout',
      '@mui/icons-material/HowToReg',
      '@mui/icons-material/SwapHoriz',
      '@mui/icons-material/ExpandMore',
      '@mui/icons-material/ExpandLess',
      '@mui/icons-material/Casino',
      '@mui/icons-material/Home',
      '@mui/icons-material/Dashboard'
    ],
    force: true
  },
  publicDir: 'public'
})

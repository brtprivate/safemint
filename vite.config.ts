import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 7050,
    open: true,
    host: '0.0.0.0',
    headers: {
      'Content-Security-Policy': "frame-ancestors 'self' https://*.walletconnect.org https://*.walletconnect.com https://secure.walletconnect.org https://secure.walletconnect.com https://*.pages.dev https://*.vercel.app https://*.ngrok-free.app; frame-src 'self' https://*.walletconnect.org https://*.walletconnect.com https://secure.walletconnect.org https://secure.walletconnect.com https://*.pages.dev https://*.vercel.app https://*.ngrok-free.app; connect-src 'self' https://*.walletconnect.org https://*.walletconnect.com https://secure.walletconnect.org https://secure.walletconnect.com wss://*.walletconnect.org wss://*.walletconnect.com https://*.infura.io https://*.alchemy.com https://cca-lite.coinbase.com;"
    }
  },
  define: {
    global: 'globalThis',
    'process.env': {},
  },
  resolve: {
    alias: {
      buffer: 'buffer',
      process: 'process/browser',
    },
  },
  build: {
    outDir: 'server/dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: false,
    target: 'es2020',
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === 'INVALID_ANNOTATION') return
        if (warning.message?.includes('externalized for browser compatibility')) return
        if (warning.message?.includes('__PURE__')) return
        warn(warning)
      }
    }
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      '@mui/material',
      'lucide-react',
      'wagmi',
      'viem',
      '@web3modal/wagmi/react',
      'buffer',
      'process'
    ],
    esbuildOptions: {
      define: {
        global: 'globalThis'
      },
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true,
          process: true
        }),
        NodeModulesPolyfillPlugin()
      ]
    }
  },
  publicDir: 'public'
})

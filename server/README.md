# SafeMint Server

This server serves both the React application and the static SafeMint landing page.

## Setup Instructions

### 1. Install Dependencies
```bash
cd server
npm install
```

### 2. Copy Built Files
```bash
# Copy the dist folder from parent directory
npm run copy-dist
```

### 3. Start the Server
```bash
npm start
```

## Available Routes

Once the server is running on `http://localhost:3000`:

- **Landing Page**: `http://localhost:3000/`
  - The marketing/landing page for SafeMint with "Launch App" buttons

- **React App**: `http://localhost:3000/app`
  - Your SafeMint dashboard with wallet connection, staking, etc.
  - All React Router routes work under `/app/*`

- **Health Check**: `http://localhost:3000/api/health`
  - Server status and uptime information

- **Routes Info**: `http://localhost:3000/api/routes`
  - JSON list of all available routes

## Scripts

- `npm start` - Start the server
- `npm run dev` - Start the server (same as start)
- `npm run copy-dist` - Copy dist folder from parent directory
- `npm run build-and-serve` - Copy dist and start server

## From Parent Directory

You can also run these commands from the main project directory:

```bash
# Build and start server in one command
npm run server-setup

# Or just start the server (if dist is already copied)
npm run server-dev
```

## File Structure

```
server/
├── dist/                 # Built React app files
│   ├── index.html       # Main React app
│   └── assets/          # JS, CSS, and other assets
├── safemint/            # Static landing page (moved out of dist)
│   ├── index.html       # Landing page with "Launch App" buttons
│   ├── style.css        # Landing page styles
│   └── ...              # Other landing page assets
├── index.js             # Main server file
├── simple-server.js     # Alternative simple server
├── copy-dist.js         # Script to copy and organize files
├── package.json         # Server dependencies and scripts
└── README.md           # This file
```

## Troubleshooting

1. **"dist folder not found"**: Run `npm run copy-dist` first
2. **Port 3000 in use**: Change PORT in index.js or set environment variable
3. **Express errors**: Make sure Express 4.x is installed (not 5.x)

## Development

The server automatically serves:
- Static assets from `/assets/*`
- Landing page files from `/landing/*` and `/safemint`
- React app for all other routes (SPA fallback)

import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
import { bscTestnet, bsc } from "wagmi/chains";

const projectId = "b0cebcda95846f0aabc833a9f05dca99";
const metadata = {
  name: "safemin MLM",
  description: "safemin MLM Platform",
  url: "https://safemin.io/",
  icons: ["https://safemin.io/favicon.ico"],
};
const chains = [bsc] as const;

export const config = defaultWagmiConfig({ chains, projectId, metadata });

createWeb3Modal({
  wagmiConfig: config,
  projectId,
  metadata,
  // Mobile-optimized configuration
  featuredWalletIds: [
    "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0", // Trust Wallet
    "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96", // MetaMask
    "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa", // Coinbase Wallet
  ],
  // Disable problematic features for mobile
  enableAnalytics: false,
  enableOnramp: false,
  enableEmail: false,
  enableSocials: false,
  themeMode: "dark",
  themeVariables: {
    "--w3m-accent": "#FFA000",
    "--w3m-border-radius-master": "12px",
  },
  // Default to BSC Testnet for development
  defaultChain: bscTestnet,
});

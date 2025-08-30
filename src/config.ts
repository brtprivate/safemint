// MLM Contract addresses - Polygon Contracts
export const REFERRAL_CONTRACT_ADDRESS = '0x8F70b18Ea189ff5E05C6862481EdB4949a487513'; // MLM Contract Address

// USD Stack Contract - Polygon
export const USD_STACK_CONTRACT_ADDRESS = '0x9e187342c4234c9ee38de9df3b730bf0be8e8f4f'; // SelfMint Contract Address

// Owner address for MLM registration
// This address is used as the default referrer when no referrer is provided
export const OWNER_ADDRESS = '0x07bFa2e2327b2b669347b6FD2aEb855eA9659b95';
export const DEFAULT_REFERRAL_ADDRESS = OWNER_ADDRESS; // Alias for backward compatibility

// Chain ID for the network where the contract is deployed (137 for Polygon)
export const CHAIN_ID = 137; // Polygon

// Network configuration
export const NETWORK_CONFIG = {
  name: 'Polygon',
  chainId: 137,
  rpcUrl: 'https://polygon-rpc.com/',
  explorerUrl: 'https://polygonscan.com',
  nativeCurrency: {
    name: 'MATIC',
    symbol: 'MATIC',
    decimals: 18,
  },
};

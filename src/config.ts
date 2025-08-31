// MLM Contract addresses - BSC Testnet Contracts
export const REFERRAL_CONTRACT_ADDRESS = '0x8F70b18Ea189ff5E05C6862481EdB4949a487513'; // MLM Contract Address

// USD Stack Contract - BSC Testnet
export const USD_STACK_CONTRACT_ADDRESS = '0x9e187342c4234c9ee38de9df3b730bf0be8e8f4f'; // SelfMint Contract Address

// Owner address for MLM registration
// This address is used as the default referrer when no referrer is provided
export const OWNER_ADDRESS = '0x07bFa2e2327b2b669347b6FD2aEb855eA9659b95';
export const DEFAULT_REFERRAL_ADDRESS = OWNER_ADDRESS; // Alias for backward compatibility

// Chain ID for the network where the contract is deployed (97 for BSC Testnet)
export const CHAIN_ID = 97; // BSC Testnet

// Network configuration
export const NETWORK_CONFIG = {
  name: 'BSC Testnet',
  chainId: 97,
  rpcUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
  explorerUrl: 'https://testnet.bscscan.com',
  nativeCurrency: {
    name: 'Binance Coin',
    symbol: 'BNB',
    decimals: 18,
  },
};

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useAccount } from 'wagmi';
import { readContract } from '@wagmi/core';
import { config } from '../config/web3modal';
import {
  stakingInteractions,
  STAKING_CONTRACT_ADDRESS,
  STAKING_ABI,
  BSC_MAINNET_CHAIN_ID
} from '../services/selfmintStakingService';
import { formatEther, parseEther } from 'viem';

interface MLMContextType {
  address: string | null;
  isConnected: boolean;
  isMLMRegistered: boolean;
  isLoading: boolean;
  isCorrectNetwork: boolean;
  registerMLM: (referrerAddress?: string) => Promise<boolean>;
  checkMLMRegistration: () => Promise<boolean>;
  getDirectReferrals: () => Promise<string[]>;
  getDirectReferralCount: () => Promise<number>;
  getReferrer: () => Promise<string>;
  getTotalRegistered: () => Promise<number>;
}

const MLMContext = createContext<MLMContextType | undefined>(undefined);

interface MLMProviderProps {
  children: ReactNode;
}

export const MLMProvider: React.FC<MLMProviderProps> = ({ children }) => {
  const { address, isConnected, chain } = useAccount();
  const [isMLMRegistered, setIsMLMRegistered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // BSC chain id is 56
  const isCorrectNetwork = chain?.id === 56;

  // Check MLM registration status using staking contract
  const checkMLMRegistration = async (): Promise<boolean> => {
    if (!address || !isCorrectNetwork) return false;
    
    try {
      setIsLoading(true);
      // Use staking contract's activeUser function to check registration status
      const registered = await stakingInteractions.activeUser(address as `0x${string}`);
      setIsMLMRegistered(registered);
      return registered;
    } catch (error) {
      console.error('Error checking MLM registration:', error);
      setIsMLMRegistered(false);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Register user with proper error handling, DAI approval, and validation
  const handleRegisterMLM = async (referrerAddress?: string): Promise<boolean> => {
    if (!address || !isCorrectNetwork) {
      throw new Error('Wallet not connected or wrong network. Please connect your wallet and switch to Polygon network.');
    }

    // Use default referrer if none provided, matching MLMDashboard.tsx
    const refAddress = referrerAddress || '0x3FBF4C71e8b3Fbb16808C2fb66A19f414B250297';
    
    // Validate referrer address format
    const ethAddressRegex = /^0x[a-fA-F0-9]{40}$/;
    if (!ethAddressRegex.test(refAddress)) {
      throw new Error('Invalid referrer address format. Please provide a valid Ethereum address.');
    }

    try {
      setIsLoading(true);
      console.log('Starting registration process with referrer:', refAddress);

      // Approve 1 USDTfor registration
      const approveAmount = parseEther('1'); // 1 USDT(18 decimals)
      console.log(`Approving ${approveAmount} USDTfor contract ${STAKING_CONTRACT_ADDRESS}`);
      
      // Check USDTbalance
      const usdcBalance = await stakingInteractions.getUSDCBalance(address as `0x${string}`);
      if (usdcBalance < approveAmount) {
        throw new Error(`Insufficient USDTbalance. You have ${parseFloat(formatEther(usdcBalance)).toFixed(2)} USDTbut need 1 USDC.`);
      }

      // Perform USDTapproval
      const approvalTx = await stakingInteractions.approveUSDC(approveAmount, address as `0x${string}`);
      console.log('USDTapproval transaction successful:', approvalTx);

      // Register user
      const hash = await stakingInteractions.regUser(refAddress as `0x${string}`, address as `0x${string}`);
      console.log('Registration transaction submitted. Hash:', hash);

      // Wait for transaction confirmation and then check registration status
      setTimeout(async () => {
        try {
          await checkMLMRegistration();
          console.log('Registration status checked after transaction');
        } catch (checkError) {
          console.error('Error checking registration status after transaction:', checkError);
        }
      }, 5000); // Increased wait time for blockchain confirmation

      return true;
    } catch (error: any) {
      console.error('Error registering MLM:', error);
      console.error('Error details:', {
        name: error.name,
        message: error.message,
        code: error.code,
        data: error.data,
        shortMessage: error.shortMessage,
        details: error.details
      });
      
      // Provide more specific error messages
      if (error.message?.includes('user rejected')) {
        throw new Error('Transaction was rejected by user. Please approve the transaction to complete registration.');
      } else if (error.message?.includes('insufficient')) {
        throw new Error('Insufficient USDTbalance or POL for gas fees. Ensure you have ~1 USDTand ~0.2 POL.');
      } else if (error.message?.includes('already registered')) {
        throw new Error('This wallet address is already registered in the system.');
      } else {
        throw new Error(`Registration failed: ${error.message || 'Unknown error occurred. Please try again.'}`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Get direct referrals
  const handleGetDirectReferrals = async (): Promise<string[]> => {
    if (!address || !isCorrectNetwork) return [];
    
    try {
      return await stakingInteractions.getDirectUser(address as `0x${string}`);
    } catch (error) {
      console.error('Error getting direct referrals:', error);
      return [];
    }
  };

  // Get direct referral count
  const handleGetDirectReferralCount = async (): Promise<number> => {
    if (!address || !isCorrectNetwork) return 0;
    
    try {
      const referrals = await stakingInteractions.getDirectUser(address as `0x${string}`);
      return referrals.length;
    } catch (error) {
      console.error('Error getting direct referral count:', error);
      return 0;
    }
  };

  // Get referrer
  const handleGetReferrer = async (): Promise<string> => {
    if (!address || !isCorrectNetwork) return '';
    
    try {
      const userInfo = await stakingInteractions.getUserInfo(address as `0x${string}`);
      return userInfo.referral || '';
    } catch (error) {
      console.error('Error getting referrer:', error);
      return '';
    }
  };

  // Get total registered users
  const handleGetTotalRegistered = async (): Promise<number> => {
    try {
      // Read totalReg directly from the staking contract
      // @ts-ignore - wagmi v2 compatibility
      const total = await readContract(config, {
        abi: STAKING_ABI,
        address: STAKING_CONTRACT_ADDRESS,
        functionName: 'totalReg',
        chainId: 56,
      });
      return Number(total);
    } catch (error) {
      console.error('Error getting total registered:', error);
      return 0;
    }
  };

  // Auto-check MLM registration when wallet connects and network is correct
  useEffect(() => {
    if (isConnected && address && isCorrectNetwork) {
      checkMLMRegistration();
    } else {
      setIsMLMRegistered(false);
    }
  }, [isConnected, address, isCorrectNetwork]);

  const value: MLMContextType = {
    address: address ?? null,
    isConnected,
    isMLMRegistered,
    isLoading,
    isCorrectNetwork,
    registerMLM: handleRegisterMLM,
    checkMLMRegistration,
    getDirectReferrals: handleGetDirectReferrals,
    getDirectReferralCount: handleGetDirectReferralCount,
    getReferrer: handleGetReferrer,
    getTotalRegistered: handleGetTotalRegistered,
  };

  return (
    <MLMContext.Provider value={value}>
      {children}
    </MLMContext.Provider>
  );
};

export const useMLM = (): MLMContextType => {
  const context = useContext(MLMContext);
  if (context === undefined) {
    throw new Error('useMLM must be used within an MLMProvider');
  }
  return context;
};
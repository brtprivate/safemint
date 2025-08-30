import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useAccount } from 'wagmi';
import { readContract } from '@wagmi/core';
import { config } from '../config/web3modal';
import { 
  mlmContractInteractions, 
  MLM_CONTRACT_ADDRESS,
  POLYGON_CHAIN_ID 
} from '../services/mlmcontract';
import { 
  stakingInteractions,
  STAKING_CONTRACT_ADDRESS,
  STAKING_ABI
} from '../services/selfmintStakingService';

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

  // Polygon chain id is 137
  const isCorrectNetwork = chain?.id === 137;

  // Check MLM registration status
  const checkMLMRegistration = async (): Promise<boolean> => {
    if (!address || !isCorrectNetwork) return false;
    
    try {
      setIsLoading(true);
      const registered = await mlmContractInteractions.isWhitelisted(address as `0x${string}`);
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

  // Register in
  const handleRegisterMLM = async (referrerAddress?: string): Promise<boolean> => {
    if (!address || !isCorrectNetwork) {
      throw new Error('Wallet not connected or wrong network');
    }

    if (!referrerAddress) {
      throw new Error('Referrer address is required');
    }

    try {
      setIsLoading(true);
      const hash = await stakingInteractions.regUser(referrerAddress as `0x${string}`);
      console.log('Registration transaction hash:', hash);

      // Wait a bit and then check registration status
      setTimeout(async () => {
        await checkMLMRegistration();
      }, 3000);

      return true;
    } catch (error) {
      console.error('Error registering MLM:', error);
      throw error;
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
      const total = await readContract(config, {
        abi: STAKING_ABI,
        address: STAKING_CONTRACT_ADDRESS,
        functionName: 'totalReg',
        chainId: POLYGON_CHAIN_ID,
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


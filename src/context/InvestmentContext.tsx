// import React, { createContext, useContext, useState, ReactNode } from 'react';
// import { useWallet } from './WalletContext';
// import { useToast } from '../components/common/ToastNotification';
// import {
//   approveUSDTForInvestment,
//   investInPackageContract,
//   getUserInvestmentData,
//   getUserContribution,
//   getPoolDetails,
//   checkUSDTAllowance,
//   getUSDTBalance,
//   calculatePendingReward,
//   claimRewardFromContract
// } from '../services/investmentContractService';

// interface InvestmentPackage {
//   id: number;
//   name: string;
//   minAmount: bigint;
//   maxAmount: bigint;
//   rewardMultiplier: bigint;
//   totalRaised: bigint;
//   totalRewardDistributed: bigint;
// }

// interface UserInvestmentData {
//   totalInvestment: bigint;
//   contributionCount: bigint;
//   totalWithdrawn: bigint;
//   isActive: boolean;
// }

// interface UserContribution {
//   amount: bigint;
//   planIndex: bigint;
//   timestamp: bigint;
//   lastClaimTime: bigint;
//   totalClaimed: bigint;
//   isActive: boolean;
// }

// interface InvestmentContextType {
//   // User data
//   userInvestmentData: UserInvestmentData | null;
//   userContributions: UserContribution[];
//   totalPendingRewards: bigint;

//   // Package data
//   packages: InvestmentPackage[];

//   // Actions
//   investInPackage: (packageId: number, amount: string) => Promise<boolean>;
//   claimReward: (contributionIndex: number) => Promise<boolean>;
//   refreshUserData: () => Promise<void>;
//   approveUSDT: (amount: string) => Promise<boolean>;

//   // Loading states
//   isLoading: boolean;
//   isInvesting: boolean;
//   isClaiming: boolean;
//   isApproving: boolean;
// }

// const InvestmentContext = createContext<InvestmentContextType | undefined>(undefined);

// export const useInvestment = () => {
//   const context = useContext(InvestmentContext);
//   if (context === undefined) {
//     throw new Error('useInvestment must be used within an InvestmentProvider');
//   }
//   return context;
// };

// interface InvestmentProviderProps {
//   children: ReactNode;
// }

// export const InvestmentProvider: React.FC<InvestmentProviderProps> = ({ children }) => {
//   const wallet = useWallet();
//   const { showSuccess, showError, showInfo } = useToast();

//   // State
//   const [userInvestmentData, setUserInvestmentData] = useState<UserInvestmentData | null>(null);
//   const [userContributions, setUserContributions] = useState<UserContribution[]>([]);
//   const [totalPendingRewards, setTotalPendingRewards] = useState<bigint>(0n);
//   const [packages, setPackages] = useState<InvestmentPackage[]>([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isInvesting, setIsInvesting] = useState(false);
//   const [isClaiming, setIsClaiming] = useState(false);
//   const [isApproving, setIsApproving] = useState(false);

//   // Mock data for packages
//   React.useEffect(() => {
//     setPackages([
//       {
//         id: 0,
//         name: 'Starter Package',
//         minAmount: BigInt(10 * 10**18), // 10 USDT
//         maxAmount: BigInt(100 * 10**18), // 100 USDT
//         rewardMultiplier: 100n, // 1%
//         totalRaised: 0n,
//         totalRewardDistributed: 0n,
//       },
//       {
//         id: 1,
//         name: 'Silver Package',
//         minAmount: BigInt(100 * 10**18), // 100 USDT
//         maxAmount: BigInt(1000 * 10**18), // 1000 USDT
//         rewardMultiplier: 120n, // 1.2%
//         totalRaised: 0n,
//         totalRewardDistributed: 0n,
//       },
//       {
//         id: 2,
//         name: 'Gold Package',
//         minAmount: BigInt(1000 * 10**18), // 1000 USDT
//         maxAmount: BigInt(10000 * 10**18), // 10000 USDT
//         rewardMultiplier: 150n, // 1.5%
//         totalRaised: 0n,
//         totalRewardDistributed: 0n,
//       },
//       {
//         id: 3,
//         name: 'Diamond Package',
//         minAmount: BigInt(10000 * 10**18), // 10000 USDT
//         maxAmount: BigInt(100000 * 10**18), // 100000 USDT
//         rewardMultiplier: 200n, // 2%
//         totalRaised: 0n,
//         totalRewardDistributed: 0n,
//       },
//     ]);
//   }, []);

//   const refreshUserData = async (): Promise<void> => {
//     if (!wallet.isConnected || !wallet.account) return;

//     setIsLoading(true);
//     try {
//       // Get real user investment data from contract
//       const userData = await getUserInvestmentData(wallet.account);

//       // Get user contributions
//       const contributions = [];
//       const contributionCount = Number(userData.contributionCount);

//       for (let i = 0; i < contributionCount; i++) {
//         try {
//           const contribution = await getUserContribution(wallet.account, i);

//           // Calculate real pending rewards from contract
//           let pendingRewards = BigInt(0);
//           try {
//             pendingRewards = await calculatePendingReward(wallet.account, i);
//           } catch (rewardError) {
//             console.error(`Error calculating pending reward for contribution ${i}:`, rewardError);
//           }

//           contributions.push({
//             id: i,
//             packageId: Number(contribution.planIndex),
//             amount: contribution.amount,
//             timestamp: Number(contribution.lastClaimTime),
//             lastClaimTime: Number(contribution.lastClaimTime),
//             pendingRewards: pendingRewards
//           });
//         } catch (error) {
//           console.error(`Error getting contribution ${i}:`, error);
//         }
//       }

//       // Update state with real contract data
//       setUserInvestmentData({
//         totalInvestment: userData.totalContribution,
//         contributionCount: userData.contributionCount,
//         totalWithdrawn: 0n, // This would need another contract call
//         isActive: userData.contributionCount > 0n,
//       });

//       setUserContributions(contributions);

//       // Calculate total pending rewards
//       const totalPending = contributions.reduce((sum, contrib) => sum + contrib.pendingRewards, BigInt(0));
//       setTotalPendingRewards(totalPending);

//     } catch (error) {
//       console.error('Error refreshing user data:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const approveUSDT = async (amount: string): Promise<boolean> => {
//     if (!wallet.isConnected || !wallet.account) {
//       showError('Please connect your wallet first');
//       return false;
//     }

//     try {
//       setIsApproving(true);
//       showInfo('Approving USDT for investment...');

//       // Call real contract function
//       const hash = await approveUSDTForInvestment(amount, wallet.account);

//       showSuccess(`USDT approval successful! Transaction: ${hash.slice(0, 10)}...`);
//       return true;
//     } catch (error) {
//       console.error('Error approving USDT:', error);
//       showError('Failed to approve USDT: ' + (error as Error).message);
//       return false;
//     } finally {
//       setIsApproving(false);
//     }
//   };

//   const investInPackage = async (packageId: number, amount: string): Promise<boolean> => {
//     if (!wallet.isConnected || !wallet.account) {
//       showError('Please connect your wallet first');
//       return false;
//     }

//     try {
//       setIsInvesting(true);

//       // First check if user has enough USDT allowance
//       showInfo('Checking USDT allowance...');
//       const allowance = await checkUSDTAllowance(wallet.account);
//       const amountInWei = BigInt(parseFloat(amount) * 10**18);

//       if (allowance < amountInWei) {
//         showError('Insufficient USDT allowance. Please approve USDT first.');
//         return false;
//       }

//       showInfo(`Investing ${amount} USDT in package ${packageId}...`);

//       // Call real contract function
//       const hash = await investInPackageContract(packageId, amount, wallet.account);

//       showSuccess(`Investment successful! Transaction: ${hash.slice(0, 10)}...`);
//       await refreshUserData();
//       return true;
//     } catch (error) {
//       console.error('Error investing:', error);
//       showError('Failed to invest: ' + (error as Error).message);
//       return false;
//     } finally {
//       setIsInvesting(false);
//     }
//   };

//   const claimReward = async (contributionIndex: number): Promise<boolean> => {
//     if (!wallet.isConnected || !wallet.account) {
//       showError('Please connect your wallet first');
//       return false;
//     }

//     try {
//       setIsClaiming(true);
//       showInfo(`Claiming reward for contribution ${contributionIndex}...`);

//       // Call real contract function
//       const hash = await claimRewardFromContract(contributionIndex, wallet.account);

//       showSuccess(`Reward claimed successfully! Transaction: ${hash.slice(0, 10)}...`);
//       await refreshUserData();
//       return true;
//     } catch (error) {
//       console.error('Error claiming reward:', error);
//       showError('Failed to claim reward: ' + (error as Error).message);
//       return false;
//     } finally {
//       setIsClaiming(false);
//     }
//   };

//   // Auto-refresh data when wallet connects
//   React.useEffect(() => {
//     if (wallet.isConnected && wallet.account && wallet.isCorrectNetwork) {
//       refreshUserData();
//     }
//   }, [wallet.isConnected, wallet.account, wallet.isCorrectNetwork]);

//   const value: InvestmentContextType = {
//     userInvestmentData,
//     userContributions,
//     totalPendingRewards,
//     packages,
//     investInPackage,
//     claimReward,
//     refreshUserData,
//     approveUSDT,
//     isLoading,
//     isInvesting,
//     isClaiming,
//     isApproving,
//   };

//   return (
//     <InvestmentContext.Provider value={value}>
//       {children}
//     </InvestmentContext.Provider>
//   );
// };

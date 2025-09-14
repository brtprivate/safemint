/**
 * Extracts the referrer address from URL parameters
 * @returns The referrer address or empty string if not found
 */
export const getReferrerFromUrl = (): string => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('referrer') || urlParams.get('ref') || '';
};

/**
 * Generates a referral link with the current domain
 * @param referrerAddress - The referrer's wallet address
 * @returns Complete referral URL
 */
export const generateReferralLink = (referrerAddress: string): string => {
  const currentDomain = window.location.origin;
  const currentPath = window.location.pathname;
  return `${currentDomain}${currentPath}?ref=${referrerAddress}`;
};

/**
 * Generates a shareable referral message with link and address
 * @param referrerAddress - The referrer's wallet address
 * @param appName - Name of the application (default: 'SafeMint')
 * @returns Formatted message for sharing
 */
export const generateReferralMessage = (referrerAddress: string, appName: string = 'SafeMint'): string => {
  const referralLink = generateReferralLink(referrerAddress);
  return `🚀 Join me on ${appName}!

💰 Use my referral link to get started: ${referralLink}

📝 Or use my referral code: ${referrerAddress}

Start earning with crypto staking and MLM rewards! 💎`;
};

/**
 * Checks if the current URL contains a referral parameter
 * @returns boolean indicating if referral parameter exists
 */
export const hasReferralInUrl = (): boolean => {
  const referrer = getReferrerFromUrl();
  return referrer.length > 0;
};

/**
 * Removes referral parameters from the current URL
 */
export const clearReferralFromUrl = (): void => {
  const url = new URL(window.location.href);
  url.searchParams.delete('referrer');
  url.searchParams.delete('ref');
  window.history.replaceState({}, document.title, url.toString());
};

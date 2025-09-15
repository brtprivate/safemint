import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Chip, Alert } from '@mui/material';
import { ContentCopy, Share, Link as LinkIcon } from '@mui/icons-material';
import { generateReferralLink, generateReferralMessage } from '../../utils/urlUtils';

interface ReferralSectionProps {
  account: string | null;
  onCopy?: () => void;
  onShare?: () => void;
}

const ReferralSection: React.FC<ReferralSectionProps> = ({ account, onCopy, onShare }) => {
  const [copySuccess, setCopySuccess] = useState<string>('');

  const referralLink = account ? generateReferralLink(account) : '';
  const referralMessage = account ? generateReferralMessage(account) : '';

  const handleCopyCode = async () => {
    if (!account) return;

    try {
      await navigator.clipboard.writeText(account);
      setCopySuccess('Referral code copied!');
      setTimeout(() => setCopySuccess(''), 3000);
      onCopy?.();
    } catch (err) {
      console.error('Failed to copy referral code:', err);
    }
  };

  const handleCopyLink = async () => {
    if (!referralLink) return;

    try {
      await navigator.clipboard.writeText(referralLink);
      setCopySuccess('Referral link copied!');
      setTimeout(() => setCopySuccess(''), 3000);
    } catch (err) {
      console.error('Failed to copy referral link:', err);
    }
  };

  const handleShare = async () => {
    if (!account) return;

    try {
      if (navigator.share) {
        await navigator.share({
          title: 'SafeMint Referral',
          text: referralMessage,
          url: referralLink,
        });
      } else {
        // Fallback to copying the message
        await navigator.clipboard.writeText(referralMessage);
        setCopySuccess('Referral message copied!');
        setTimeout(() => setCopySuccess(''), 3000);
      }
      onShare?.();
    } catch (err) {
      console.error('Failed to share:', err);
      // Fallback to copying
      try {
        await navigator.clipboard.writeText(referralMessage);
        setCopySuccess('Referral message copied!');
        setTimeout(() => setCopySuccess(''), 3000);
      } catch (copyErr) {
        console.error('Failed to copy as fallback:', copyErr);
      }
    }
  };

  return (
    <Box sx={{ mb: { xs: 3, sm: 4 }, display: 'flex', flexDirection: 'column', gap: 2 }}>
      {/* <Typography variant="h6" sx={{ color: 'primary.main', fontSize: { xs: '1rem', sm: '1.25rem' } }}>
        Your Referral System
      </Typography> */}

      {copySuccess && (
        <Alert severity="success" sx={{ mb: 1 }}>
          {copySuccess}
        </Alert>
      )}

      {/* Referral Code Section */}
      <Box>
        <Typography variant="body2" sx={{ mb: 1, fontWeight: 'medium' }}>
          Referral Code:
        </Typography>
        <TextField
          fullWidth
          value={account || ''}
          InputProps={{
            readOnly: true,
            endAdornment: (
              <Button
                size="small"
                startIcon={<ContentCopy />}
                onClick={handleCopyCode}
                disabled={!account}
                sx={{ ml: 1 }}
              >
                Copy
              </Button>
            )
          }}
          sx={{ '& .MuiInputBase-input': { fontSize: { xs: '0.875rem', sm: '1rem' } } }}
        />
      </Box>

      {/* Referral Link Section */}
      <Box>
        <Typography variant="body2" sx={{ mb: 1, fontWeight: 'medium' }}>
          Referral Link:
        </Typography>
        <TextField
          fullWidth
          value={referralLink}
          InputProps={{
            readOnly: true,
            endAdornment: (
              <Button
                size="small"
                startIcon={<LinkIcon />}
                onClick={handleCopyLink}
                disabled={!account}
                sx={{ ml: 1 }}
              >
                Copy
              </Button>
            )
          }}
          sx={{ '& .MuiInputBase-input': { fontSize: { xs: '0.75rem', sm: '0.875rem' } } }}
        />
      </Box>

      {/* Action Buttons */}
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Button
          variant="contained"
          startIcon={<Share />}
          onClick={handleShare}
          disabled={!account}
          sx={{ flex: 1, fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
        >
          Share Complete Message
        </Button>
      </Box>

      {/* Info Section */}
      <Box sx={{ mt: 2 }}>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' }, mb: 1 }}
        >
          💡 How it works:
        </Typography>
        <Box sx={{ pl: 1 }}>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
            • Share your referral link or code with friends
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
            • When they register using your link, you become their referrer
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
            • Earn bonuses from their investments and activities
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ReferralSection;

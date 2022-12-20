import React, { useCallback } from 'react';
import { Box, Typography } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { screenshotCard } from './utils';

interface DownloadProps {
  cardId: string;
  imageURL?: string
}

const DOWNLOAD_OPTIONS = [{ label: 'card', fileType: '.png', mode: 'card-png' }, { label: 'card', fileType: '.pdf', mode: 'card-pdf' }, { label: 'art', fileType: '.png', mode: 'art' }];
export default function Download({ cardId, imageURL }: DownloadProps) {
  const downloadCard = useCallback((mode) => screenshotCard(cardId, mode, imageURL), [cardId,
    imageURL]);
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Box>
        {DOWNLOAD_OPTIONS.map((option) => (
          <Box key={option.mode} m={0.5} onClick={() => downloadCard(option.mode)} display="flex" alignItems="center" role="button" sx={{ cursor: 'pointer' }} tabIndex={0}>
            <FileDownloadIcon sx={{ fontSize: '22px' }} />
            <Typography>{option.label}</Typography>
            <Typography fontWeight="bold">
              {option.fileType}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
Download.defaultProps = {
  imageURL: undefined,
};

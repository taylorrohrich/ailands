import React from 'react';
import { Box } from '@mui/material';
import Preview from 'components/Preview';

export default function Home() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      sx={{ minHeight: '100%' }}
    >
      <Preview style={{ flex: 1 }} />
    </Box>
  );
}

import React from 'react';
import { Box, Typography } from '@mui/material';
import Logo from 'resources/logo.svg';

export default function Header() {
  return (
    <Box display="flex" alignItems="center" sx={{ padding: '20px' }}>
      <img alt="logo" src={Logo} style={{ width: '50px', height: '50px', marginRight: '20px' }} />

      <Typography fontWeight="bold" fontSize="24px">AI Lands</Typography>
    </Box>
  );
}

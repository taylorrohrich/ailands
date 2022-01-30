import React from 'react';
import { Box } from '@mui/material';
import Preview from 'components/Preview';
import Header from 'components/Header';
import Footer from 'components/Footer';

export default function Home() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      sx={{ minHeight: '100%' }}
    >
      <Header />
      <Box flex={1} display="flex" justifyContent="center" alignItems="center">
        <Preview />
      </Box>
      <Footer />
    </Box>
  );
}

import React from 'react';
import { Box, Typography, Link } from '@mui/material';

export default function Header() {
  return (
    <Box sx={{ fontFamily: 'EB Garamond' }} p={4}>
      <Typography fontSize="26px" fontFamily="EB Garamond"> AI Lands </Typography>
      <Typography fontFamily="EB Garamond" fontSize="22px">
        Generating art using
        a
        {' '}
        <Link underline="none" target="_blank" rel="noopener" href="https://github.com/tensorflow/gan/tree/master/tensorflow_gan/examples/">
          GAN network
        </Link>
        {' '}
        trained on Magic the Gathering lands.
      </Typography>
    </Box>
  );
}

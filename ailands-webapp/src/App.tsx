import React from 'react';
import { ThemeProvider, Box } from '@mui/material';
import theme from 'styling/theme';
import Card from 'components/Card';

const CARD_WIDTH = 400;
function App() {
  return (
    <Box style={{
      height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center',
    }}
    >
      <ThemeProvider theme={theme}>
        <Card width={CARD_WIDTH} land="plains" />
        <Card width={CARD_WIDTH} land="forest" />
        <Card width={CARD_WIDTH} land="swamp" />
        <Card width={CARD_WIDTH} land="island" />
        <Card width={CARD_WIDTH} land="mountain" />
      </ThemeProvider>
    </Box>
  );
}

export default App;

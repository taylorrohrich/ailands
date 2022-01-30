import React from 'react';
import { ThemeProvider, Box } from '@mui/material';
import theme from 'styling/theme';
import Home from 'routes/Home';

const CARD_WIDTH = 400;
function App() {
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </Box>
  );
}

export default App;

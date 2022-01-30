import React from 'react';
import { ThemeProvider, Box } from '@mui/material';
import theme from 'styling/theme';
import Home from 'routes/Home';

function App() {
  return (
    <Box style={{
      height: '100%',
    }}
    >
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </Box>
  );
}

export default App;

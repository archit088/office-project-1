import React from 'react';
import Route from './route';
import { ThemeProvider } from '@mui/material';
import theme from './helper/theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Route />
    </ThemeProvider>
  );
}

export default App;

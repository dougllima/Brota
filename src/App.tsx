import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, Theme, ThemeProvider } from '@material-ui/core';

const theme: Theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

function App(): React.ReactElement {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
      </ThemeProvider>
    </>
  );
}

export default App;

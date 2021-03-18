import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, Theme, ThemeProvider } from '@material-ui/core';
import getBrota from './service/getBrota';
import Brota from './model/Brota';

const theme: Theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

function App(): React.ReactElement {
  const [brota, setBrota] = useState<Brota>(new Brota());

  useEffect(() => {
    getBrota().subscribe(teste => {
      setBrota(teste);
    });
  }, []);

  useEffect(() => {
    console.log('brota 2', brota);
  }, [brota]);
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
      </ThemeProvider>
    </>
  );
}

export default App;

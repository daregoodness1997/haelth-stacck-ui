import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import AppProvider from './context';
import AppRoutes from './routes';
import { GlobalStyle } from './styles/global';
import { darkTheme, lightTheme } from './styles/theme';

function App() {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <AppProvider>
          <GlobalStyle />
          <AppRoutes />
        </AppProvider>
      </ThemeProvider>
    </>
  );
}

export default App;

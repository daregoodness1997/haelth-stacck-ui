import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import AppProvider from './context';
import AppRoutes from './routes/routes';
import { GlobalStyle } from './styles/global';
import { darkTheme, lightTheme } from './styles/theme';
import { Scrollbar } from 'smooth-scrollbar-react';

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
          <Scrollbar damping={0.04}>
            <AppRoutes />
          </Scrollbar>
        </AppProvider>
      </ThemeProvider>
    </>
  );
}

export default App;

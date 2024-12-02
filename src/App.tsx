import React, { useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Page from './components/Page';
import { lightThemeOptions, darkThemeOptions } from './components/ThemeOptions';
import ThemeSlider from './components/ThemeSlider';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme(darkMode ? darkThemeOptions : lightThemeOptions);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* чтобы тема применялась ко всем компонентам */}
      <h1 style={{ textAlign: 'center', marginTop: 20 }}>Accordion Articles</h1>
      <ThemeSlider darkMode={darkMode} setDarkMode={setDarkMode} />
      <Page />
    </ThemeProvider>
  );
};

export default App;
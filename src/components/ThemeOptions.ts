import { ThemeOptions } from '@mui/material/styles';

// светлая и темная темы

// много фиолетового
export const lightThemeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#9c27b0',
    },
    secondary: {
      main: '#ba68c8',
    },
    background: {
      default: '#f3e5f5',
    },
  },
};

// много другого фиолетового
export const darkThemeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#7b1fa2',
    },
    secondary: {
      main: '#ab47bc',
    },
    background: {
      default: '#4a148c',
    },
    // белый текст для темной темы
    text: {
      primary: '#ffffff',
    },
  },
};
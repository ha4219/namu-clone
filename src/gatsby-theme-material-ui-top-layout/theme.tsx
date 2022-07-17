import { createTheme, ThemeOptions } from '@mui/material/styles';
import { TypographyOptions } from '@mui/material/styles/createTypography';
import { Typography } from '@mui/material';

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    content: true;
    title: true;
    titleSub: true;
  }
}

interface ExtendedTypographyOptions extends TypographyOptions {
  content: React.CSSProperties;
  title: React.CSSProperties;
  titleSub: React.CSSProperties;
}

// A custom theme for this app
const baseTheme = createTheme({
  typography: {
    fontFamily: [
      'Open Sans',
      'arial',
      'Apple SD Gothic Neo',
      'Noto Sans CJK KR',
    ].join(','),
    content: {
      lineHeight: 1.5,
      fontSize: '0.9rem',
      wordBreak: 'break-all',
      color: '#ddd',
      WebkitTextSizeAdjust: 'none',
      marginBottom: '1rem',
      display: 'block',
    },
    title: {
      display: 'block',
      borderBottom: '1px solid #ccc',
      margin: '1.2em 0 0.8em',
      paddingBottom: '5px',
      fontSize: '1.8em',
      cursor: 'pointer',
      fontWeight: 'bold',
      color: '#ddd',
      borderBottomColor: '#383b40',
    },
    titleSub: {
      display: 'block',
      borderBottom: '1px solid #ccc',
      margin: '1.2em 0 0.8em',
      paddingBottom: '5px',
      fontSize: '1.6em',
      cursor: 'pointer',
      fontWeight: 'bold',
      color: '#ddd',
      borderBottomColor: '#383b40',
    },
  } as ExtendedTypographyOptions,
  palette: {
    primary: {
      main: '#2e8b57',
    },
    secondary: {
      main: '#ec9f19',
    },
    background: {
      default: '#010101',
      paper: `#1f2023`,
    },
    green: {
      main: `#090`,
    },
    third: {
      main: `#54AAFD`,
    },
  },
} as ThemeOptions);

export default baseTheme;

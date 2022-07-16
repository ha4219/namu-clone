import { createTheme, ThemeOptions } from '@mui/material/styles';
import { TypographyOptions } from '@mui/material/styles/createTypography';
import { Typography } from '@mui/material';

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    content: true;
  }
}

interface ExtendedTypographyOptions extends TypographyOptions {
  content: React.CSSProperties;
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
      default: ' #1f2023',
    },
  },
} as ThemeOptions);

export default baseTheme;

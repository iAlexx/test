'use client';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Container } from '@mui/material';
import { Noto_Kufi_Arabic } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const notoKufiArabic = Noto_Kufi_Arabic({
  weight: ['400', '700'],
  subsets: ['arabic'],
});

const theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: notoKufiArabic.style.fontFamily,
  },
  palette: {
    primary: {
      main: '#FFD700', // أصفر ذهبي
      dark: '#B8860B',
      light: '#FFEB3B',
    },
    secondary: {
      main: '#000000', // أسود
      light: '#424242',
      dark: '#212121',
    },
    background: {
      default: '#FFFFFF', // أبيض
      paper: '#FAFAFA',
    },
    text: {
      primary: '#000000',
      secondary: '#424242',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontSize: '1rem',
          padding: '10px 20px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 8px rgba(0,0,0,0.15)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        },
      },
    },
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={notoKufiArabic.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <Container maxWidth={false} disableGutters>
            {children}
          </Container>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
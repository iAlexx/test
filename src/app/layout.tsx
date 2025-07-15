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
      main: '#2C3E50',
    },
    secondary: {
      main: '#E74C3C',
    },
    background: {
      default: '#F8F9FA',
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
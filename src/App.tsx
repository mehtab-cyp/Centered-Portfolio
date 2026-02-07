import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
  Box } from
'@mui/material';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ContactPage } from './pages/ContactPage';
import { UsesPage } from './pages/UsesPage';
import { ArticlePage } from './pages/ArticlePage';

const theme = createTheme({
  typography: {
    fontFamily: '"Lora", "Georgia", "Times New Roman", serif',
    h1: {
      fontWeight: 700
    },
    h2: {
      fontWeight: 700
    },
    h3: {
      fontWeight: 700
    },
    h4: {
      fontWeight: 700
    },
    h5: {
      fontWeight: 700
    },
    h6: {
      fontWeight: 700
    },
    body1: {
      fontSize: '1.125rem',
      lineHeight: 1.8
    },
    button: {
      textTransform: 'none'
    }
  },
  palette: {
    background: {
      default: '#fafbfc'
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#555555'
    },
    primary: {
      main: '#0891b2'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          transition: 'all 0.3s ease'
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          transition: 'all 0.2s ease'
        }
      }
    }
  }
});

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Container
          maxWidth="sm"
          sx={{
            px: {
              xs: 3,
              sm: 0
            }
          }}>

          <Box
            sx={{
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
              pt: 8
            }}>

            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/uses" element={<UsesPage />} />
              <Route path="/article/:id" element={<ArticlePage />} />
            </Routes>
            <Footer />
          </Box>
        </Container>
      </Router>
    </ThemeProvider>);

}
import React from 'react';
import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
  Box } from
'@mui/material';
import { Header } from './components/Header';
import { HeroImage } from './components/HeroImage';
import { BioContent } from './components/BioContent';
import { WritingSection } from './components/WritingSection';
import { ProjectsSection } from './components/ProjectsSection';
import { NowSection } from './components/NowSection';
import { Footer } from './components/Footer';
// Create an editorial theme
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
      default: '#ffffff'
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#555555'
    },
    primary: {
      main: '#c0392b' // Crimson red
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          transition: 'color 0.2s ease'
        }
      }
    }
  }
});
export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
          <HeroImage />
          <BioContent />
          <WritingSection />
          <ProjectsSection />
          <NowSection />
          <Footer />
        </Box>
      </Container>
    </ThemeProvider>);

}
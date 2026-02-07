import React from 'react';
import { Box, Typography, Link } from '@mui/material';
export function BioContent() {
  return (
    <Box
      component="article"
      sx={{
        mb: 8
      }}>

      <Typography
        paragraph
        sx={{
          fontSize: '1.125rem',
          lineHeight: 1.8,
          mb: 3
        }}>

        I'm Jane. I spend most of my time building rendering engines,
        visualization tools, and systems that help me understand how GPUs
        actually behave. I care about real-time graphics, modern C++, and
        high-performance engineering.
      </Typography>

      <Typography
        paragraph
        sx={{
          fontSize: '1.125rem',
          lineHeight: 1.8,
          mb: 3
        }}>

        I'm the author of{' '}
        <Link
          href="#"
          color="inherit"
          underline="always"
          sx={{
            textDecorationColor: '#c0392b'
          }}>

          VGLX
        </Link>
        , a rendering engine I use as a proving ground for new rendering
        techniques.
      </Typography>

      <Typography
        paragraph
        sx={{
          fontSize: '1.125rem',
          lineHeight: 1.8
        }}>

        I live in San Francisco and work at{' '}
        <Link
          href="#"
          color="inherit"
          underline="always"
          sx={{
            textDecorationColor: '#c0392b'
          }}>

          Biohub
        </Link>
        , where I build visualization systems for bioimaging data in support of
        AI-driven biology research.
      </Typography>
    </Box>);

}
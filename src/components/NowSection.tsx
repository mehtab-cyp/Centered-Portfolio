import React from 'react';
import { Box, Typography } from '@mui/material';
export function NowSection() {
  return (
    <Box
      component="section"
      sx={{
        mb: 8
      }}>

      <Typography
        variant="h6"
        component="h2"
        sx={{
          mb: 2,
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center'
        }}>

        <Box
          component="span"
          sx={{
            color: 'primary.main',
            mr: 1
          }}>

          ✦
        </Box>{' '}
        Now
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontSize: '1.05rem',
          lineHeight: 1.7,
          color: 'text.secondary',
          fontStyle: 'italic'
        }}>

        Currently exploring WebGPU for creative coding experiments, reading "The
        Nature of Code" by Daniel Shiffman, and trying to perfect my sourdough
        recipe. Always open to interesting conversations about graphics
        programming or design systems.
      </Typography>
    </Box>);

}
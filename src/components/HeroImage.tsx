import React from 'react';
import { Box, Typography } from '@mui/material';
export function HeroImage() {
  return (
    <Box
      sx={{
        width: '100%',
        aspectRatio: '16/10',
        bgcolor: '#f0f0f0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mb: 6,
        borderRadius: 1 // Subtle rounding
      }}>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          fontStyle: 'italic'
        }}>

        [Workspace Photo Placeholder]
      </Typography>
    </Box>);

}
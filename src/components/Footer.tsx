import React from 'react';
import { Box, Typography, Grid, Divider } from '@mui/material';
export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        pb: 8
      }}>

      <Divider
        sx={{
          mb: 4,
          borderColor: '#e0e0e0'
        }} />


      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="subtitle2"
            sx={{
              color: 'primary.main',
              fontWeight: 700,
              mb: 1,
              fontSize: '0.9rem'
            }}>

            About
          </Typography>
          <Typography
            variant="body2"
            color="text.primary"
            sx={{
              lineHeight: 1.6
            }}>

            I'm Jane. I build tools for real-time rendering.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography
            variant="subtitle2"
            sx={{
              color: 'primary.main',
              fontWeight: 700,
              mb: 1,
              fontSize: '0.9rem'
            }}>

            Colophon
          </Typography>
          <Typography
            variant="body2"
            color="text.primary"
            sx={{
              lineHeight: 1.6
            }}>

            Designed, built, and written by a human.
          </Typography>
        </Grid>
      </Grid>
    </Box>);

}
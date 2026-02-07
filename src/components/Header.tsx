import React from 'react';
import { Box, Typography, Stack, IconButton, Link } from '@mui/material';
import { GithubIcon, RssIcon } from 'lucide-react';
export function Header() {
  return (
    <Box
      component="header"
      sx={{
        mb: 6
      }}>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          borderBottom: '1px solid #e0e0e0',
          pb: 2,
          mb: 2
        }}>

        <Typography
          variant="h5"
          component="h1"
          sx={{
            fontWeight: 700,
            letterSpacing: '-0.02em',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -17,
              left: 0,
              width: '100%',
              height: '2px',
              backgroundColor: 'primary.main'
            }
          }}>

          jane.dev
        </Typography>

        <Stack direction="row" spacing={1}>
          <IconButton
            aria-label="RSS Feed"
            size="small"
            sx={{
              color: 'text.secondary'
            }}>

            <RssIcon size={20} />
          </IconButton>
          <IconButton
            aria-label="GitHub"
            size="small"
            sx={{
              color: 'text.secondary'
            }}>

            <GithubIcon size={20} />
          </IconButton>
        </Stack>
      </Stack>

      <Stack direction="row" spacing={3}>
        <Link
          href="#"
          underline="none"
          sx={{
            color: 'primary.main',
            fontWeight: 500,
            fontSize: '1.05rem'
          }}>

          About
        </Link>
        <Link
          href="#"
          underline="none"
          sx={{
            color: 'text.secondary',
            fontWeight: 400,
            fontSize: '1.05rem',
            '&:hover': {
              color: 'primary.main'
            }
          }}>

          Articles
        </Link>
        <Link
          href="#"
          underline="none"
          sx={{
            color: 'text.secondary',
            fontWeight: 400,
            fontSize: '1.05rem',
            '&:hover': {
              color: 'primary.main'
            }
          }}>

          Projects
        </Link>
      </Stack>
    </Box>);

}
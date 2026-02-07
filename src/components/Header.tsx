import React, { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Box, Typography, Stack, IconButton, Link } from '@mui/material';
import { GithubIcon, RssIcon } from 'lucide-react';
import confetti from 'canvas-confetti';

export function Header() {
  const location = useLocation();
  const [logoClicks, setLogoClicks] = useState(0);

  const handleLogoClick = () => {
    const newCount = logoClicks + 1;
    setLogoClicks(newCount);

    if (newCount === 5) {
      confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.3 }
      });
      setTimeout(() => setLogoClicks(0), 2000);
    }
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

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
          component={RouterLink}
          to="/"
          onClick={handleLogoClick}
          sx={{
            fontWeight: 700,
            letterSpacing: '-0.02em',
            position: 'relative',
            textDecoration: 'none',
            color: 'text.primary',
            cursor: 'pointer',
            transition: 'transform 0.2s ease',
            '&:hover': {
              transform: 'scale(1.05)'
            },
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
              color: 'text.secondary',
              transition: 'all 0.3s ease',
              '&:hover': {
                color: 'primary.main',
                transform: 'rotate(20deg)'
              }
            }}>

            <RssIcon size={20} />
          </IconButton>
          <IconButton
            aria-label="GitHub"
            size="small"
            sx={{
              color: 'text.secondary',
              transition: 'all 0.3s ease',
              '&:hover': {
                color: 'primary.main',
                transform: 'scale(1.2)'
              }
            }}>

            <GithubIcon size={20} />
          </IconButton>
        </Stack>
      </Stack>

      <Stack direction="row" spacing={3} sx={{ flexWrap: 'wrap', gap: 1 }}>
        <Link
          component={RouterLink}
          to="/"
          underline="none"
          sx={{
            color: isActive('/') ? 'primary.main' : 'text.secondary',
            fontWeight: isActive('/') ? 600 : 400,
            fontSize: '1.05rem',
            transition: 'all 0.2s ease',
            '&:hover': {
              color: 'primary.main',
              transform: 'translateY(-2px)'
            }
          }}>

          Home
        </Link>
        <Link
          component={RouterLink}
          to="/uses"
          underline="none"
          sx={{
            color: isActive('/uses') ? 'primary.main' : 'text.secondary',
            fontWeight: isActive('/uses') ? 600 : 400,
            fontSize: '1.05rem',
            transition: 'all 0.2s ease',
            '&:hover': {
              color: 'primary.main',
              transform: 'translateY(-2px)'
            }
          }}>

          Uses
        </Link>
        <Link
          component={RouterLink}
          to="/contact"
          underline="none"
          sx={{
            color: isActive('/contact') ? 'primary.main' : 'text.secondary',
            fontWeight: isActive('/contact') ? 600 : 400,
            fontSize: '1.05rem',
            transition: 'all 0.2s ease',
            '&:hover': {
              color: 'primary.main',
              transform: 'translateY(-2px)'
            }
          }}>

          Contact
        </Link>
      </Stack>
    </Box>);

}
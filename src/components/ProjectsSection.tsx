import React from 'react';
import { Box, Typography, Link, Stack } from '@mui/material';
interface Project {
  title: string;
  year: string;
  description: string;
  url: string;
}
const projects: Project[] = [
{
  title: 'TaskFlow',
  year: '2025',
  description:
  'A minimal project management tool with drag-and-drop boards and real-time sync.',
  url: '#'
},
{
  title: 'Palette',
  year: '2024',
  description:
  'Color palette generator with built-in accessibility contrast checking.',
  url: '#'
},
{
  title: 'CloudDash',
  year: '2024',
  description:
  'Analytics dashboard for monitoring cloud infrastructure costs.',
  url: '#'
}];

export function ProjectsSection() {
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
          mb: 4,
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
        Projects
      </Typography>

      <Stack spacing={4}>
        {projects.map((project) =>
        <Box key={project.title}>
            <Stack direction="row" alignItems="baseline" spacing={1}>
              <Link
              href={project.url}
              color="text.primary"
              underline="hover"
              sx={{
                fontSize: '1.1rem',
                fontWeight: 600,
                textDecorationColor: '#c0392b',
                '&:hover': {
                  color: 'primary.main'
                }
              }}>

                {project.title}
              </Link>
              <Typography variant="caption" color="text.disabled">
                ({project.year})
              </Typography>
            </Stack>
            <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              mt: 0.5
            }}>

              {project.description}
            </Typography>
          </Box>
        )}
      </Stack>
    </Box>);

}
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Link, Stack } from '@mui/material';
interface Article {
  date: string;
  title: string;
  description: string;
  url: string;
  id: string;
}
const articles: Article[] = [
{
  date: 'Jan 2026',
  title: 'On the Merits of Boring Technology',
  description: 'Why proven tools often beat cutting-edge ones.',
  url: '/article/boring-technology',
  id: 'boring-technology'
},
{
  date: 'Nov 2025',
  title: 'Building Design Systems That Last',
  description: 'Lessons from maintaining a component library at scale.',
  url: '/article/design-systems',
  id: 'design-systems'
},
{
  date: 'Aug 2025',
  title: 'The Art of Readable Code',
  description: 'How naming and structure communicate intent.',
  url: '#',
  id: 'readable-code'
},
{
  date: 'May 2025',
  title: 'Rethinking Client-Side State',
  description: "When you don't need a state management library.",
  url: '#',
  id: 'client-state'
}];

export function WritingSection() {
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
        Writing
      </Typography>

      <Stack spacing={4}>
        {articles.map((article) =>
        <Box key={article.title}>
            <Stack
            direction={{
              xs: 'column',
              sm: 'row'
            }}
            alignItems={{
              xs: 'flex-start',
              sm: 'baseline'
            }}
            spacing={{
              xs: 0.5,
              sm: 2
            }}>

              <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                minWidth: '80px',
                fontFamily: 'monospace',
                fontSize: '0.85rem',
                pt: 0.5
              }}>

                {article.date}
              </Typography>

              <Box>
                <Link
                component={article.url.startsWith('/') ? RouterLink : 'a'}
                to={article.url.startsWith('/') ? article.url : undefined}
                href={article.url.startsWith('/') ? undefined : article.url}
                color="text.primary"
                underline="hover"
                sx={{
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  textDecorationColor: '#0891b2',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    color: 'primary.main',
                    transform: 'translateX(4px)',
                    display: 'inline-block'
                  }
                }}>

                  {article.title}
                </Link>
                <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  mt: 0.5
                }}>

                  {article.description}
                </Typography>
              </Box>
            </Stack>
          </Box>
        )}
      </Stack>
    </Box>);

}
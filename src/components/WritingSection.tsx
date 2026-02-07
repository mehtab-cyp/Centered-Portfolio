import React from 'react';
import { Box, Typography, Link, Stack } from '@mui/material';
interface Article {
  date: string;
  title: string;
  description: string;
  url: string;
}
const articles: Article[] = [
{
  date: 'Jan 2026',
  title: 'On the Merits of Boring Technology',
  description: 'Why proven tools often beat cutting-edge ones.',
  url: '#'
},
{
  date: 'Nov 2025',
  title: 'Building Design Systems That Last',
  description: 'Lessons from maintaining a component library at scale.',
  url: '#'
},
{
  date: 'Aug 2025',
  title: 'The Art of Readable Code',
  description: 'How naming and structure communicate intent.',
  url: '#'
},
{
  date: 'May 2025',
  title: 'Rethinking Client-Side State',
  description: "When you don't need a state management library.",
  url: '#'
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
                href={article.url}
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
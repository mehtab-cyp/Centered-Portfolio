import React, { useState, useEffect } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Typography,
  Chip,
  Stack,
  Button,
  LinearProgress
} from '@mui/material';
import { ArrowLeft, Clock, Eye } from 'lucide-react';
import confetti from 'canvas-confetti';

const articles: Record<string, {
  title: string;
  date: string;
  readTime: string;
  content: string;
  tags: string[];
}> = {
  'boring-technology': {
    title: 'On the Merits of Boring Technology',
    date: 'Jan 2026',
    readTime: '8 min read',
    tags: ['Engineering', 'Philosophy', 'Technology'],
    content: `
      <p>There's a seductive allure to cutting-edge technology. The newest framework, the latest database, the most innovative architecture pattern. But after years of building systems, I've come to appreciate the profound value of boring technology.</p>

      <p>Boring technology is proven. It's had its edges smoothed by thousands of production deployments. Its failure modes are documented. Its performance characteristics are well-understood. When something goes wrong at 3 AM, there's a Stack Overflow post about it.</p>

      <h3>The Hidden Cost of Innovation</h3>

      <p>Every new technology comes with a learning curve, not just for your team, but for the ecosystem around it. Debugging tools are immature. Best practices are still being discovered. You're not just building your product; you're pioneering the technology itself.</p>

      <p>This isn't to say you should never adopt new technology. But the decision should be deliberate, not reflexive. Ask yourself: what problem does this solve that boring technology can't? Is that problem worth the cost?</p>

      <h3>Innovation Where It Matters</h3>

      <p>By choosing boring technology for your infrastructure, you free up innovation budget for where it truly matters: your product, your user experience, your unique value proposition. This is where you should be taking risks, not in whether your message queue is going to eat all your messages.</p>

      <p>Boring technology lets you move fast by moving carefully. It's a foundation you can trust, so you can focus on building something remarkable on top of it.</p>
    `
  },
  'design-systems': {
    title: 'Building Design Systems That Last',
    date: 'Nov 2025',
    readTime: '12 min read',
    tags: ['Design', 'Engineering', 'Best Practices'],
    content: `
      <p>A design system is more than a component library. It's a shared language between design and engineering, a set of constraints that accelerate decision-making, and a living artifact of your product's evolution.</p>

      <h3>Start Small, Think Big</h3>

      <p>The mistake I see most often is trying to build the perfect design system from day one. You document every possible variant, every edge case, every future use case. Then reality hits, and half of it goes unused while the other half is missing what you actually need.</p>

      <p>Instead, start with the patterns you're already using. Extract them, document them, make them consistent. Let your design system grow organically from real needs, not hypothetical ones.</p>

      <h3>The Three Pillars</h3>

      <p>A sustainable design system rests on three pillars: tokens, components, and patterns. Tokens are your design decisions encoded as data. Components are your reusable UI building blocks. Patterns are the larger compositions and workflows that solve common problems.</p>

      <p>Each pillar supports the others. Without tokens, your components drift. Without components, your patterns become inconsistent. Without patterns, your tokens and components lack context.</p>
    `
  }
};

export function ArticlePage() {
  const { id } = useParams<{ id: string }>();
  const [readProgress, setReadProgress] = useState(0);
  const [hasFinished, setHasFinished] = useState(false);

  const article = id ? articles[id] : null;

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
      setReadProgress(Math.min(progress, 100));

      if (progress >= 95 && !hasFinished) {
        setHasFinished(true);
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.8 }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasFinished]);

  if (!article) {
    return (
      <Box sx={{ mb: 8, flex: 1 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Article not found
        </Typography>
        <Button
          component={RouterLink}
          to="/"
          startIcon={<ArrowLeft size={18} />}
          variant="outlined">
          Back to Home
        </Button>
      </Box>
    );
  }

  return (
    <>
      <LinearProgress
        variant="determinate"
        value={readProgress}
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          height: 3,
          bgcolor: 'transparent'
        }}
      />

      <Box
        component="article"
        sx={{
          mb: 8,
          flex: 1
        }}>

        <Button
          component={RouterLink}
          to="/"
          startIcon={<ArrowLeft size={18} />}
          variant="text"
          sx={{
            mb: 3,
            color: 'text.secondary',
            '&:hover': {
              color: 'primary.main'
            }
          }}>
          Back
        </Button>

        <Typography
          variant="h3"
          component="h1"
          sx={{
            mb: 2,
            fontWeight: 700,
            lineHeight: 1.2
          }}>
          {article.title}
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{ mb: 3 }}>
          <Typography variant="body2" color="text.secondary">
            {article.date}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Clock size={14} />
            {article.readTime}
          </Typography>
          {hasFinished && (
            <Chip
              icon={<Eye size={14} />}
              label="Read"
              size="small"
              sx={{
                bgcolor: '#10b981',
                color: 'white',
                fontWeight: 600
              }}
            />
          )}
        </Stack>

        <Stack direction="row" spacing={1} sx={{ mb: 4 }}>
          {article.tags.map(tag => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              sx={{
                bgcolor: '#e0f2fe',
                color: '#0369a1',
                fontWeight: 500
              }}
            />
          ))}
        </Stack>

        <Box
          sx={{
            '& p': {
              fontSize: '1.125rem',
              lineHeight: 1.8,
              mb: 3,
              color: 'text.primary'
            },
            '& h3': {
              fontSize: '1.5rem',
              fontWeight: 700,
              mt: 5,
              mb: 2,
              color: 'text.primary'
            }
          }}
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {hasFinished && (
          <Box
            sx={{
              mt: 6,
              p: 4,
              bgcolor: '#ecfdf5',
              border: '2px solid #10b981',
              borderRadius: 2,
              textAlign: 'center'
            }}>
            <Typography
              variant="h6"
              sx={{
                color: '#059669',
                fontWeight: 600,
                mb: 1
              }}>
              Thanks for reading!
            </Typography>
            <Typography variant="body2" color="text.secondary">
              You've unlocked a small celebration for finishing this article.
            </Typography>
          </Box>
        )}
      </Box>
    </>
  );
}

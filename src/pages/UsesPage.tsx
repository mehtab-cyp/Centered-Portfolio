import React, { useState } from 'react';
import {
  Box,
  Typography,
  Stack,
  Chip,
  Paper,
  Tooltip
} from '@mui/material';
import { Monitor, Code, Coffee, Headphones } from 'lucide-react';

interface UsesItem {
  name: string;
  description: string;
  category: string;
  emoji: string;
}

const usesData: UsesItem[] = [
  {
    name: 'VS Code',
    description: 'My primary code editor with custom keybindings',
    category: 'Development',
    emoji: '💻'
  },
  {
    name: 'Neovim',
    description: 'For quick terminal edits and remote work',
    category: 'Development',
    emoji: '⚡'
  },
  {
    name: 'iTerm2',
    description: 'Terminal with tmux for session management',
    category: 'Development',
    emoji: '🖥️'
  },
  {
    name: 'Figma',
    description: 'Design and prototyping tool',
    category: 'Design',
    emoji: '🎨'
  },
  {
    name: 'RenderDoc',
    description: 'Graphics debugging and frame analysis',
    category: 'Graphics',
    emoji: '🔍'
  },
  {
    name: 'Blender',
    description: 'For creating test models and assets',
    category: 'Graphics',
    emoji: '🎭'
  },
  {
    name: 'Sony WH-1000XM4',
    description: 'Noise-canceling headphones for deep focus',
    category: 'Hardware',
    emoji: '🎧'
  },
  {
    name: 'MacBook Pro M2',
    description: '32GB RAM, perfect for compilation',
    category: 'Hardware',
    emoji: '💾'
  },
  {
    name: 'Notion',
    description: 'For notes, documentation, and planning',
    category: 'Productivity',
    emoji: '📝'
  }
];

const categories = Array.from(new Set(usesData.map(item => item.category)));

export function UsesPage() {
  const [clickedItems, setClickedItems] = useState<Set<string>>(new Set());

  const handleItemClick = (name: string) => {
    setClickedItems(prev => new Set(prev).add(name));
  };

  return (
    <Box
      component="article"
      sx={{
        mb: 8,
        flex: 1
      }}>

      <Typography
        variant="h4"
        component="h1"
        sx={{
          mb: 2,
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center',
          gap: 1
        }}>
        <Monitor size={28} style={{ color: '#0891b2' }} />
        Uses
      </Typography>

      <Typography
        paragraph
        sx={{
          fontSize: '1.125rem',
          lineHeight: 1.8,
          mb: 4,
          color: 'text.secondary'
        }}>
        A living document of the tools, software, and gear I use daily.
        Click on items to mark them as interesting!
      </Typography>

      <Stack spacing={5}>
        {categories.map(category => (
          <Box key={category}>
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                fontWeight: 700,
                color: 'primary.main',
                display: 'flex',
                alignItems: 'center',
                gap: 1
              }}>
              <Box
                component="span"
                sx={{
                  color: 'primary.main'
                }}>
                ✦
              </Box>
              {category}
            </Typography>

            <Stack spacing={2}>
              {usesData
                .filter(item => item.category === category)
                .map(item => (
                  <Tooltip
                    key={item.name}
                    title="Click to mark as interesting!"
                    placement="top">
                    <Paper
                      elevation={0}
                      onClick={() => handleItemClick(item.name)}
                      sx={{
                        p: 3,
                        border: clickedItems.has(item.name)
                          ? '2px solid #0891b2'
                          : '1px solid #e0e0e0',
                        borderRadius: 2,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        bgcolor: clickedItems.has(item.name)
                          ? '#f0f9ff'
                          : 'white',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                          borderColor: '#0891b2'
                        }
                      }}>
                      <Stack
                        direction="row"
                        alignItems="flex-start"
                        spacing={2}>
                        <Typography
                          sx={{
                            fontSize: '2rem',
                            lineHeight: 1
                          }}>
                          {item.emoji}
                        </Typography>

                        <Box sx={{ flex: 1 }}>
                          <Stack
                            direction="row"
                            alignItems="center"
                            spacing={1}
                            sx={{ mb: 0.5 }}>
                            <Typography
                              variant="subtitle1"
                              sx={{
                                fontWeight: 600,
                                color: 'text.primary'
                              }}>
                              {item.name}
                            </Typography>
                            {clickedItems.has(item.name) && (
                              <Chip
                                label="Interesting!"
                                size="small"
                                sx={{
                                  bgcolor: '#0891b2',
                                  color: 'white',
                                  height: 20,
                                  fontSize: '0.7rem',
                                  fontWeight: 600
                                }}
                              />
                            )}
                          </Stack>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ lineHeight: 1.6 }}>
                            {item.description}
                          </Typography>
                        </Box>
                      </Stack>
                    </Paper>
                  </Tooltip>
                ))}
            </Stack>
          </Box>
        ))}
      </Stack>

      <Box
        sx={{
          mt: 6,
          p: 3,
          bgcolor: '#fef3c7',
          border: '2px dashed #f59e0b',
          borderRadius: 2
        }}>
        <Typography
          variant="body2"
          sx={{
            fontStyle: 'italic',
            color: '#92400e',
            display: 'flex',
            alignItems: 'center',
            gap: 1
          }}>
          <Coffee size={18} />
          This list is always evolving. Last updated: Feb 2026
        </Typography>
      </Box>
    </Box>
  );
}

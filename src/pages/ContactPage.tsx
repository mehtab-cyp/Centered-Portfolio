import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Paper,
  Fade
} from '@mui/material';
import { Send, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
      setSubmitted(false);
    }, 3000);
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
        <Sparkles size={28} style={{ color: '#0891b2' }} />
        Get in Touch
      </Typography>

      <Typography
        paragraph
        sx={{
          fontSize: '1.125rem',
          lineHeight: 1.8,
          mb: 4,
          color: 'text.secondary'
        }}>
        Have a question, project idea, or just want to say hi? Drop me a message
        and I'll get back to you as soon as possible.
      </Typography>

      {submitted ? (
        <Fade in={submitted}>
          <Paper
            elevation={0}
            sx={{
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
              Message Sent!
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Thanks for reaching out. I'll respond soon!
            </Typography>
          </Paper>
        </Fade>
      ) : (
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            '& .MuiTextField-root': {
              transition: 'all 0.3s ease'
            }
          }}>
          <Stack spacing={3}>
            <TextField
              fullWidth
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&:hover fieldset': {
                    borderColor: '#0891b2'
                  }
                }
              }}
            />

            <TextField
              fullWidth
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&:hover fieldset': {
                    borderColor: '#0891b2'
                  }
                }
              }}
            />

            <TextField
              fullWidth
              label="Message"
              multiline
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&:hover fieldset': {
                    borderColor: '#0891b2'
                  }
                }
              }}
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              endIcon={<Send size={18} />}
              sx={{
                alignSelf: 'flex-start',
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 600,
                boxShadow: '0 4px 14px 0 rgba(8, 145, 178, 0.39)',
                '&:hover': {
                  boxShadow: '0 6px 20px rgba(8, 145, 178, 0.5)',
                  transform: 'translateY(-2px)'
                }
              }}>
              Send Message
            </Button>
          </Stack>
        </Box>
      )}
    </Box>
  );
}

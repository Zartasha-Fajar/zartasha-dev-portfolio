import React, { useEffect } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
  IconButton,
  Stack,
  Link,
} from '@mui/material';
import { LocationOn, Phone, Email, Send } from '@mui/icons-material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ContactSection() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <Box sx={{
      color: 'white',
      px: { xs: 2, md: 10 },
      py: 13,
      overflow: 'hidden' ,
      background: 'radial-gradient(circle at right bottom, rgba(17, 57, 44, 0.85) 0%, rgba(15, 15, 15, 0.98) 70%)',
    }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          position: 'relative',
          zIndex: 1,
          gap: 8,
        }}
      >
        {/* Contact Form */}
        <Box
          data-aos="fade-up"
          data-aos-duration="1500"
          flex={2}
        >
          <Typography variant="h4" fontWeight="bold" mb={3} sx={{ color: '#26ff9c' }}>
            Contact Us
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} mb={2}>
            <TextField
              fullWidth
              variant="filled"
              label="First Name"
              InputLabelProps={{ style: { color: '#ccc' } }}
              sx={{ input: { color: 'white' }, bgcolor: '#1a1a1a' }}
            />
            <TextField
              fullWidth
              variant="filled"
              label="Last Name"
              InputLabelProps={{ style: { color: '#ccc' } }}
              sx={{ input: { color: 'white' }, bgcolor: '#1a1a1a' }}
            />
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} mb={2}>
            <TextField
              fullWidth
              variant="filled"
              label="Email"
              InputLabelProps={{ style: { color: '#ccc' } }}
              sx={{ input: { color: 'white' }, bgcolor: '#1a1a1a' }}
            />
            <TextField
              fullWidth
              variant="filled"
              label="Phone Number"
              InputLabelProps={{ style: { color: '#ccc' } }}
              sx={{ input: { color: 'white' }, bgcolor: '#1a1a1a' }}
            />
          </Stack>

          <Typography variant="body1" sx={{ mt: 2, mb: 1 }}>
            Select Subject:
          </Typography>
          <FormGroup row sx={{ gap: 2, mb: 2 }}>
            {['Web Development', 'Web Design'].map((label, i) => (
              <FormControlLabel
                key={i}
                control={<Checkbox sx={{ color: '#28e98c' }} />}
                label={<Typography sx={{ color: '#ccc' }}>{label}</Typography>}
              />
            ))}
          </FormGroup>

          <TextField
            fullWidth
            multiline
            rows={4}
            variant="filled"
            label="Your Message"
            InputLabelProps={{ style: { color: '#ccc' } }}
            sx={{
              textarea: { color: 'white' },
              bgcolor: '#1a1a1a',
              mb: 3,
            }}
          />

          <Button
            variant="contained"
            endIcon={<Send />}
            sx={{
              backgroundColor: '#28e98c',
              color: 'black',
              fontWeight: 'bold',
              textTransform: 'none',
              px: 4,
              '&:hover': {
                backgroundColor: 'black',
                color: 'white',
              },
            }}
          >
            Let's Talk
          </Button>
        </Box>

        {/* Contact Info */}
        <Box
          data-aos="fade-left"
          data-aos-duration="1500"
          flex={1}
          sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}
        >
          <Typography variant="h5" fontWeight="bold">
            Contact Information
          </Typography>

          <Box display="flex" alignItems="flex-start" gap={2}>
            <LocationOn sx={{ color: '#28e98c' }} />
            <Box>
              <Typography fontWeight="bold">Lahore, Pakistan</Typography>
              <Typography variant="body2" color="#aaa">Gulberg 3, Lahore</Typography>
            </Box>
          </Box>

          <Box display="flex" alignItems="flex-start" gap={2}>
            <Phone sx={{ color: '#28e98c' }} />
            <Box>
              <Typography fontWeight="bold">Phone</Typography>
              <Typography variant="body2" color="#aaa">+92 3084085870</Typography>
              <Typography variant="body2" color="#aaa">zaratsha.fajar99@gmail.com</Typography>
            </Box>
          </Box>

          <Box display="flex" alignItems="center" gap={2}>
            <Link href="https://github.com/Zartasha-Fajar" target="_blank" rel="noopener">
              <IconButton sx={{ bgcolor: '#1a1a1a', color: '#28e98c' }}>
                <GitHubIcon />
              </IconButton>
            </Link>
            <Link href="https://www.linkedin.com/in/zartasha-fajar-558714267/" target="_blank" rel="noopener">
              <IconButton sx={{ bgcolor: '#1a1a1a', color: '#28e98c' }}>
                <LinkedInIcon />
              </IconButton>
            </Link>
            <Link href="mailto:zartasha.fajar99@gmail.com">
              <IconButton sx={{ bgcolor: '#1a1a1a', color: '#28e98c' }}>
                <Email />
              </IconButton>
            </Link>
          </Box>
        </Box>
      </Box>

      {/* Footer */}
      <Typography
        variant="body2"
        sx={{
          textAlign: 'center',
          mt: 15,
          color: '#888',
          fontSize: '0.9rem',
        }}
      >
        © 2025 Zartasha-Fajar. All rights reserved.
      </Typography>
    </Box>
  );
}

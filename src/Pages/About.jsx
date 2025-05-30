import React from 'react';
import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material';

const About = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'radial-gradient(circle at left bottom, rgba(17, 57, 44, 0.8) 0%, rgba(15, 15, 15, 0.97) 70%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
        py: 4,
        overflow: 'hidden' 
      }}
    >
      <Container maxWidth="md">
        <Box
          data-aos="fade-up"
          data-aos-duration="1200"
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            borderRadius: 4,
            p: isSmallScreen ? 3 : 6,
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
          }}
        >
          <Typography
            variant={isSmallScreen ? 'h4' : 'h3'}
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              color: '#26ff9c',
              textAlign: 'center',
            }}
          >
            About Me
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: '#e0e0e0',
              fontSize: isSmallScreen ? '1rem' : '1.1rem',
              lineHeight: 1.8,
              textAlign: 'justify',
            }}
          >
            Hi, I'm <strong>Zartasha Fajar</strong> — a creative and detail-oriented Front-End Developer with a passion for building beautiful, user-friendly web experiences.
            <br /><br />
            With a strong foundation in HTML, CSS, JavaScript, and modern tools like <strong>React</strong> and <strong>Tailwind CSS</strong>, <strong>Material UI</strong>, <strong>Redux</strong> I love bringing designs to life and crafting responsive, pixel-perfect interfaces that don’t just look great — they feel great to use.
            <br /><br />
            I believe in clean code, seamless UX, and making the web a more intuitive place, one component at a time. Whether I’m developing a landing page, building a single-page app, or optimizing for performance, I approach every project with curiosity, precision, and a desire to create something meaningful.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default About;

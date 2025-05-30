import React, { useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Avatar,
  IconButton,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AOS from 'aos';
import 'aos/dist/aos.css';
import web from '../assets/web.jpeg';

const ServiceCard = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <Box
      sx={{
        color: 'white',
        px: { xs: 4, md: 10 },
        py: 10,
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 8,
        minHeight: 'max-content',
        overflow: 'hidden' ,
        background: 'radial-gradient(circle at right bottom, rgba(17, 57, 44, 0.85) 0%, rgba(15, 15, 15, 0.98) 70%)',
      }}
    >
      {/* Left Content */}
      <Box
        data-aos="fade-right"
        data-aos-duration="1500"
        sx={{ maxWidth: 500 }}
      >
        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
          My Service
        </Typography>
        <Typography variant="body1" sx={{ color: 'gray', mb: 4 }}>
          Transforming ideas into impactful digital solutions with expert development and design services. Let's take your business to the next level!
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#28e98c',
            color: 'black',
            fontWeight: 'bold',
            textTransform: 'none',
            px: 4,
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: 'black',
              color: 'white',
              transform: 'translateY(-2px)',
              boxShadow: '0 4px 20px rgba(0, 255, 135, 0.3)',
            },
          }}
        >
          Hire Team
        </Button>
      </Box>

      {/* Website Development Card */}
      <Card
        data-aos="fade-left"
        data-aos-duration="1500"
        sx={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          maxWidth: 600,
          background: 'linear-gradient(to right, #0f1111, #1a1a1a)',
          border: '1px solid #2a2a2a',
          borderRadius: 3,
          boxShadow: '0 8px 24px rgba(0, 255, 135, 0.1)',
          p: 3,
          height: 'max-content',
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 12px 30px rgba(0, 255, 135, 0.15)',
            borderColor: '#00ff87',
          },
          '&:hover .overlay': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        }}
      >
        <Avatar
          variant="rounded"
          src={web}
          alt="Website Development"
          sx={{
            width: 80,
            height: 80,
            bgcolor: 'transparent',
            borderRadius: 2,
            border: '1px solid #1f4b3f',
          }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 0.5, color: 'white' }}>
            Website Development
          </Typography>
          <Typography variant="body2" sx={{ color: '#00ff87' }}>
            60+ Completed Projects
          </Typography>
          <Typography variant="caption" sx={{ color: 'gray' }}>
            Custom, responsive, and SEO-friendly websites tailored to your brand.
          </Typography>
        </CardContent>
        <IconButton
          sx={{
            backgroundColor: '#1f4b3f',
            color: '#00ff87',
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: '#00ff87',
              color: '#0f1111',
              transform: 'rotate(90deg)',
            },
          }}
        >
          <ArrowForwardIcon />
        </IconButton>

        {/* Overlay Content */}
        <Box
          className="overlay"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            bgcolor: 'rgba(15, 17, 17, 0.95)',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            px: 4,
            textAlign: 'center',
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'all 0.4s ease',
            borderRadius: 3,
            zIndex: 10,
          }}
        >
          <Typography variant="h6" sx={{ mb: 1, color: '#00ff87' }}>
            Web Development Services
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            We build fast, secure, and scalable websites with modern tech stacks.
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Technologies: React, Redux and more.
          </Typography>
          <Button
            variant="outlined"
            sx={{
              borderColor: '#00ff87',
              color: '#00ff87',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#00ff87',
                color: '#0f1111',
              },
            }}
          >
            Learn More
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default ServiceCard;

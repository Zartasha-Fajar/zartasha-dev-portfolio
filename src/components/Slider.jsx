import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
} from '@mui/material';
import HtmlIcon from '@mui/icons-material/Language';
import CssIcon from '@mui/icons-material/Style';
import JavascriptIcon from '@mui/icons-material/Code';
import ReactIcon from '@mui/icons-material/AutoAwesome';
import BootstrapIcon from '@mui/icons-material/ViewDay';
import MaterialUiIcon from '@mui/icons-material/Widgets';
import TailwindIcon from '@mui/icons-material/BlurOn';
import ReduxIcon from '@mui/icons-material/CompareArrows';
import ReactBootstrapIcon from '@mui/icons-material/DashboardCustomize';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const skills = [
  { name: 'HTML', icon: <HtmlIcon fontSize="large" sx={{ color: '#26ff9c' }} /> },
  { name: 'CSS', icon: <CssIcon fontSize="large" sx={{ color: '#26ff9c' }} /> },
  { name: 'JavaScript', icon: <JavascriptIcon fontSize="large" sx={{ color: '#26ff9c' }} /> },
  { name: 'Bootstrap', icon: <BootstrapIcon fontSize="large" sx={{ color: '#26ff9c' }} /> },
  { name: 'React', icon: <ReactIcon fontSize="large" sx={{ color: '#26ff9c' }} /> },
  { name: 'React Bootstrap', icon: <ReactBootstrapIcon fontSize="large" sx={{ color: '#26ff9c' }} /> },
  { name: 'Material UI', icon: <MaterialUiIcon fontSize="large" sx={{ color: '#26ff9c' }} /> },
  { name: 'Tailwind CSS', icon: <TailwindIcon fontSize="large" sx={{ color: '#26ff9c' }} /> },
  { name: 'Redux', icon: <ReduxIcon fontSize="large" sx={{ color: '#26ff9c' }} /> },
];

const Slider = () => {
  return (
    <Box
      sx={{
        px: 4,
        py: 10,
        background: 'radial-gradient(circle at right bottom, rgba(17, 57, 44, 0.8) 0%, rgba(15, 15, 15, 0.97) 70%)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{ fontWeight: 'bold', color: '#26ff9c', textAlign: 'center' }}
      >
        My Skills
      </Typography>

      <Box
        sx={{
          display: 'flex',
          animation: 'scroll 30s linear infinite',
          width: 'fit-content',
          '&:hover': {
            animationPlayState: 'paused',
          },
          '@keyframes scroll': {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-50%)' },
          },
        }}
      >
        {[...skills, ...skills].map((skill, index) => (
          <Box
            key={index}
            sx={{
              flex: '0 0 auto',
              width: 200,
              mx: 2,
            }}
          >
            <Card
              sx={{
                backgroundColor: '#1e1e1e',
                textAlign: 'center',
                borderRadius: 3,
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <Box sx={{ mt: 3 }}>{skill.icon}</Box>
              <CardContent>
                <Typography variant="h6" sx={{ color: '#26ff9c', fontWeight: 'bold' }}>
                  {skill.name}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Slider;

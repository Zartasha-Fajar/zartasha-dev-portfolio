import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Container,
} from '@mui/material';

const experience = [
  {
    duration: 'Dec 2023 - Mar 2025 – ',
    title: 'Customer Service Specialist, Mindbridge (Epay , Bnak of London), Lahore',
    description:
      'Customer Service Rep experienced in resolving retailer concerns, handling sales/tech issues, training staff, and executing daily admin work. (on-site)',
  },
  {
    duration: 'Dec 2022 – Nov 2023',
    title: 'Customer Support Representative, Abacus (3d lifestyle), Lahore',
    description:
      'Handled client emails and calls, resolving appointment and treatment issues promptly. (on-site)',
  },
  {
    duration: 'Aug 2021 – Nov 2022',
    title: 'IT Support Specialist, Interwood Pvt. Ltd, Lahore',
    description:
      'Managed daily admin tasks, data processing, and report generation effectively. (on-site)',
  },
];

const education = [
  {
    title: 'Front-End Development',
    description: 'Web Devrs',
  },
  {
    title: 'BS - Computer Science',
    description: 'Virtual University of Pakistan',
  },
  {
    title: 'Intermediate - ICS',
    description: 'Punjab Group of Colleges',
  },
];

const TimelineCard = ({ duration, title, description }) => (
  <Card
    data-aos="fade-up"
    data-aos-duration="1500"

    sx={{
      background: 'linear-gradient(to right, #123d2a, #0e2c1f)',
      color: '#ffffff',
      overflow: 'hidden' ,
      mb: 4,
      px: 2,
      py: 2,
      borderLeft: '4px solid #26ff9c',
      borderRadius: 3,
      boxShadow: '0 4px 20px rgba(38, 255, 156, 0.15)',
      transition: 'transform 0.3s ease',
      '&:hover': {
        transform: 'scale(1.02)',
      },
    }}
  >
    <CardContent>
      {duration && (
        <Typography variant="subtitle2" sx={{ color: '#26ff9c', mb: 1 }}>
          {duration}
        </Typography>
      )}
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ color: 'grey.300' }}>
        {description}
      </Typography>
    </CardContent>
  </Card>
);

const SectionTitle = ({ children }) => (
  <Typography
    data-aos="fade-up"
    data-aos-duration="1500"
    variant="h4"
    sx={{
      display: 'inline-block',
      px: 3,
      py: 1,
      mb: 4,
      fontWeight: 'bold',
      color: '#26ff9c',
      border: '2px solid #26ff9c',
      borderRadius: 2,
    }}
  >
    {children}
  </Typography>
);

const ExperienceCompanies = () => {
  return (
    <Box
      sx={{
        px: { xs: 2, md: 6 },
        py: 10,
        background: '#0f0f0f',
        color: 'white',
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'column', lg: 'row' },
            gap: 6,
            justifyContent: 'space-between',
          }}
        >
          {/* Experience Section */}
          <Box sx={{ flex: 1 }}>
            <SectionTitle>My Experience</SectionTitle>
            {experience.map((exp, idx) => (
              <TimelineCard key={idx} {...exp} />
            ))}
          </Box>

          {/* Education Section */}
          <Box sx={{ flex: 1 }}>
            <SectionTitle>My Education</SectionTitle>
            {education.map((edu, idx) => (
              <TimelineCard key={idx} {...edu} />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ExperienceCompanies;

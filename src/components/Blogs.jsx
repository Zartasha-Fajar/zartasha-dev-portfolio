import React, { useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Link
} from '@mui/material';
import { CalendarMonth, ArrowForward } from '@mui/icons-material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import blog1 from '../assets/blog1.jpeg';
import download from '../assets/download.jpeg';

const blogs = [
  {
    title: 'Late-Night Web Development: Passion in Action',
    author: 'Zartasha Fajar',
    category: 'Web Dev.',
    image: blog1,
    date: 'May 2025',
    link: '#',
  },
  {
    title: 'After-Hours App Development: Innovation in Action',
    author: 'Zartasha Fajar',
    category: 'Web Dev.',
    image: download,
    date: 'May 2025',
    link: '#',
  }
];

export default function BlogSection() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <Box sx={{ backgroundColor: '#0f1111', color: 'white', px: { xs: 2, md: 6 }, py: 14, overflow: 'hidden'  }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
          alignItems: 'flex-start',
        }}
      >
        {/* Left Section */}
        <Box
          data-aos="fade-right"
          data-aos-duration="1500"
          sx={{ flex: 1 }}
        >
          <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ color: '#26ff9c' }}>
            My News & <br /> Latest Blogs
          </Typography>
          <Typography variant="body1" paragraph>
            Explore insightful blogs on web development, app development, and cutting-edge
            technology. Stay informed, inspired, and ahead of the curve with expert content crafted
            to empower and educate developers, designers, and tech enthusiasts.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#28e98c',
              color: 'black',
              mt: 2,
              px: 4,
              py: 1,
              borderRadius: 2,
              fontWeight: 'bold',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: 'black',
                boxShadow: '0 4px 20px rgba(20, 184, 166, 0.3)',
                color: 'white',
              },
            }}
          >
            All Blogs
          </Button>
        </Box>

        {/* Right Section */}
        <Box
          sx={{
            flex: 2,
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row', md: 'row' },
            gap: 2,
            flexWrap: 'wrap',
          }}
        >
          {blogs.map((blog, index) => (
            <Card
              key={index}
              data-aos="fade-up"
              data-aos-duration="1500"
              sx={{
                backgroundColor: '#111',
                color: 'white',
                width: { xs: '100%', sm: 'calc(50% - 8px)' },
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
                },
              }}
            >
              <CardMedia component="img" height="200" image={blog.image} alt={blog.title} />
              <CardContent>
                <Typography variant="body2" color="#4caf50">
                  by {blog.author} | {blog.category}
                  <CalendarMonth sx={{ fontSize: 14, ml: 1, mr: 0.5 }} /> {blog.date}
                </Typography>
                <Typography variant="h6" fontWeight="bold" sx={{ mt: 1 }}>
                  {blog.title}
                </Typography>
                <Link
                  href={blog.link}
                  underline="none"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    mt: 2,
                    fontWeight: 'bold',
                    color: '#28e98c',
                    transition: 'color 0.3s',
                    '&:hover': {
                      color: 'white',
                    },
                  }}
                >
                  Read More <ArrowForward sx={{ fontSize: 18, ml: 1 }} />
                </Link>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

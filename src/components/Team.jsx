import React from 'react';
import Slider from 'react-slick';
import {
    Box,
    Typography,
    Card,
    CardContent,
    Avatar,
    IconButton,
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const testimonials = [
    {
        name: 'Zartasha Fajar',
        role: 'CEO chief executive officer',
        image: 'https://randomuser.me/api/portraits/women/44.jpg',
        quote: 'Working with this team has been a game-changer. The collaboration and creativity are unmatched!',
    },
    {
        name: 'Arslan Ibrahim',
        role: 'Mern-Stack Developer',
        image: 'https://randomuser.me/api/portraits/men/46.jpg',
        quote: 'A truly inspiring team to work with. We build stunning interfaces that users love.',
    },
    {
        name: 'Samrina Ali Khan',
        role: 'Frontend Developer',
        image: 'https://randomuser.me/api/portraits/women/65.jpg',
        quote: 'Reliable, scalable, and modern solutions—our development process is top-notch.',
    },
    
];

// Custom Arrow Components
const ArrowLeft = ({ onClick }) => (
    <IconButton
        onClick={onClick}
        sx={{
            position: 'absolute',
            top: '50%',
            left: 0,
            zIndex: 1,
            transform: 'translateY(-50%)',
            backgroundColor: '#1a1a1a',
            color: '#00ff87',
            '&:hover': { backgroundColor: '#333' },
        }}
    >
        <ArrowBackIosNewIcon />
    </IconButton>
);

const ArrowRight = ({ onClick }) => (
    <IconButton
        onClick={onClick}
        sx={{
            position: 'absolute',
            top: '50%',
            right: 0,
            zIndex: 1,
            transform: 'translateY(-50%)',
            backgroundColor: '#1a1a1a',
            color: '#00ff87',
            '&:hover': { backgroundColor: '#333' },
        }}
    >
        <ArrowForwardIosIcon />
    </IconButton>
);

const TestimonialsSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: <ArrowRight />,
        prevArrow: <ArrowLeft />,
    };

    return (
        <Box sx={{ px: { xs: 4, md: 10 }, py: 13, backgroundColor: '#0f1111', color: 'white', position: 'relative', overflow: 'hidden'  }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom textAlign="center" mb={5}>
                Meet Our Team
            </Typography>
            <Slider {...settings}>
                {testimonials.map((member, index) => (
                    <Box key={index} px={2} >
                        <Card
                            sx={{
                                // background: '#1a1a1a',
                                background: 'radial-gradient(circle, rgba(17, 57, 44, 0.85) 0%, rgba(15, 15, 15, 0.98) 70%)',
                                color: 'white',
                                p: 4,
                                borderRadius: 3,
                                boxShadow: '0 6px 20px rgba(0, 255, 135, 0.1)',
                                textAlign: 'center',
                            }}
                        >
                            <Avatar
                                src={member.image}
                                alt={member.name}
                                sx={{ width: 80, height: 80, mx: 'auto', mb: 2 }}
                            />
                            <CardContent>
                                <Typography variant="h6" fontWeight="bold" gutterBottom>
                                    {member.name}
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#00ff87', mb: 1 }}>
                                    {member.role}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'gray', fontStyle: 'italic' }}>
                                    “{member.quote}”
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};

export default TestimonialsSlider;

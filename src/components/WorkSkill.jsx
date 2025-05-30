import React from 'react';
import {
    Box,
    Typography,
    Chip,
    Container,
    Stack,
} from '@mui/material';
import { FaCss3Alt, FaFigma, FaJava, FaReact } from 'react-icons/fa';

const skills = [
    {
        title: 'Web Development',
        tags: ['HTML 5', 'CSS'],
        icon: <FaCss3Alt size={40} color="#26ff9c" />,
        percent: '100%',
    },
    {
        title: 'Design Programs',
        tags: ['Tailwind', 'Material UI', 'React Bootstrap'],
        icon: <FaFigma size={40} color="#26ff9c" />,
        percent: '100%',
    },
    {
        title: 'Frameworks',
        tags: ['React JS'],
        icon: <FaReact size={40} color="#26ff9c" />,
        percent: '85%',
    },
    {
        title: 'Programming',
        tags: ['JavaScript'],
        icon: <FaJava size={40} color="#26ff9c" />,
        percent: '80%',
    },
];

const SkillCard = ({ title, tags, icon, percent }) => (
    <Box
        data-aos="fade-up"
        data-aos-duration="800"
        sx={{
            display: 'flex',
            alignItems: 'center',
            p: 3,
            borderRadius: 4,
            bgcolor: '#112d21',
            boxShadow:
                '0 4px 15px rgba(38, 255, 156, 0.25), 0 0 10px rgba(38, 255, 156, 0.15)',
            position: 'relative',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
                transform: 'scale(1.07)',
                boxShadow:
                    '0 8px 25px rgba(38, 255, 156, 0.45), 0 0 20px rgba(38, 255, 156, 0.3)',
            },
            mb: 4,
            width: '100%',
            maxWidth: 360,
            mx: 'auto',
            overflow: 'hidden' 
        }}
    >
        <Box
            sx={{
                width: 70,
                height: 70,
                borderRadius: '50%',
                border: '3px solid #26ff9c',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mr: 3,
                flexShrink: 0,
                backgroundColor: '#0b1e14',
                boxShadow: 'inset 0 0 8px #26ff9c',
            }}
        >
            {icon}
        </Box>
        <Box sx={{ flexGrow: 1 }}>
            <Typography
                variant="h6"
                sx={{ fontWeight: '700', color: '#e0f2e9', mb: 1.2, letterSpacing: 0.5 }}
            >
                {title}
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap">
                {tags.map((tag, idx) => (
                    <Chip
                        key={idx}
                        label={tag}
                        size="large"
                        sx={{
                            bgcolor: 'rgba(38, 255, 156, 0.15)',
                            color: '#26ff9c',
                            fontWeight: 600,
                            borderRadius: '20px',
                            fontSize: '0.8rem',
                            px: 2,
                            userSelect: 'none',
                        }}
                    />
                ))}
            </Stack>
        </Box>
        <Typography
            variant="body2"
            sx={{
                position: 'absolute',
                right: 18,
                top: 18,
                fontWeight: 'bold',
                color: '#26ff9c',
                fontSize: '1rem',
                letterSpacing: 1,
                userSelect: 'none',
            }}
        >
            {percent}
        </Typography>
    </Box>
);

const MySkills = () => {
    return (
        <Box
            sx={{
                py: 14,
                color: '#fff',
                background: 'radial-gradient(circle at left bottom, rgba(17, 57, 44, 0.85) 0%, rgba(15, 15, 15, 0.98) 70%)',
            }}
        >
            <Container
                maxWidth="xl"
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    px: 3,
                }}
            >
                {/* Left Section */}
                <Box
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    sx={{
                        flex: 1,
                        textAlign: 'left',
                        maxWidth: 520,
                        ml: { xs: 0, md: 4 },
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: '900',
                            mb: 2,
                            lineHeight: 1.15,
                            textAlign: { xs: 'center', md: 'left' },
                        }}
                    >
                        My{' '}
                        <Box component="span" sx={{ color: '#28E98C' }}>
                            Awesome
                        </Box>{' '}
                        Skills
                    </Typography>
                    <Typography
                        sx={{
                            color: 'white',
                            mb: 5,
                            fontSize: '1.15rem',
                            fontWeight: 500,
                            userSelect: 'none',
                            textAlign: { xs: 'center', md: 'left' },
                        }}
                    >
                        I build modern, responsive websites using HTML, CSS, and JavaScript. I design sleek interfaces with Tailwind, Material UI, and React Bootstrap. I’m skilled in React JS and write clean, efficient JavaScript code.
                    </Typography>
                </Box>

                {/* Right Section */}
                <Box
                    sx={{
                        flex: 2,
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: { xs: 'center', md: 'flex-start' },
                        gap: 3,
                    }}
                >
                    {skills.map((skill, idx) => (
                        <SkillCard key={idx} {...skill} />
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default MySkills;

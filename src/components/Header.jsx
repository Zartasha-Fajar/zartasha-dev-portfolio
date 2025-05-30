import React, { useEffect } from 'react';
import {
    Box,
    Typography,
    Button,
    Grid,
    Avatar,
    Stack,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import pro3 from '../assets/pro3.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <Box
            sx={{
                position: 'relative',
                background: 'radial-gradient(circle at right bottom,rgba(17, 57, 44, 0.8) 0%,rgba(15, 15, 15, 0.97) 70%)',
                color: '#fff',
                py: { xs: 6, md: 11 },
                px: { xs: 2, sm: 4, md: 10 },
                // mt: 8,
                width: '100%',
                overflow: 'hidden' 

            }}
        >
            <Grid container spacing={6} alignItems="center" justifyContent="space-evenly">
                {/* Left: Profile Image */}
                <Grid item xs={12} md={5} data-aos="fade-right">
                    <Avatar
                        src={pro3}
                        alt="Zartasha Fajar"
                        sx={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: 6,
                            maxWidth: { xs: 250, sm: 300, md: 400 },
                            mx: 'auto',
                        }}
                    />
                    {/* Social buttons */}
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={2}
                        justifyContent="center"
                        alignItems="center"
                        mt={3}
                    >
                        <Button
                            startIcon={<LinkedInIcon />}
                            href="https://www.linkedin.com/in/zartasha-fajar-558714267/"
                            target="_blank"
                            variant="contained"
                            sx={{
                                backgroundColor: '#0f0f0f',
                                border: '1px solid #26ff9c',
                                color: '#fff',
                                px: 3,
                                '&:hover': { backgroundColor: '#1a1a1a' }
                            }}
                        >
                            LinkedIn
                        </Button>
                        <Button
                            startIcon={<EmailIcon />}
                            href="mailto:zartasha.fajar99@gmail.com"
                            variant="contained"
                            sx={{
                                backgroundColor: '#26ff9c',
                                color: '#000',
                                fontWeight: 'bold',
                                px: 3,
                            }}
                        >
                            Email
                        </Button>
                        <Button
                            startIcon={<WhatsAppIcon />}
                            href="https://wa.me/yourwhatsapplink"
                            target="_blank"
                            variant="contained"
                            sx={{
                                backgroundColor: '#0f0f0f',
                                border: '1px solid #26ff9c',
                                color: '#fff',
                                px: 3,
                                '&:hover': { backgroundColor: '#1a1a1a' }
                            }}
                        >
                            WhatsApp
                        </Button>
                    </Stack>
                </Grid>

                {/* Right: Text Content */}
                <Grid item xs={12} md={7} data-aos="fade-left">
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }}
                    >
                        Hello! I'm
                    </Typography>
                    <Typography
                        variant="h1"
                        fontWeight="bold"
                        sx={{
                            color: '#26ff9c',
                            mb: 2,
                            fontSize: {
                                xs: '2rem',
                                sm: '3rem',
                                md: '5rem',
                            },
                        }}
                    >
                        Zartasha Fajar
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: '#bbb',
                            maxWidth: 600,
                            mb: 4,
                            fontSize: { xs: '0.9rem', sm: '1rem' }
                        }}
                    >
                        I'm a front-end developer who blends design with code to build fast, responsive, and engaging web applications. I love bringing static designs to life with React, Tailwind CSS, Material UI, Redux and clean JavaScript.
                    </Typography>

                    {/* Buttons */}
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={2}
                        mb={5}
                        alignItems={{ xs: 'stretch', sm: 'center' }}
                    >
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{
                                backgroundColor: '#26ff9c',
                                color: '#000',
                                fontWeight: 'bold',
                                '&:hover': {
                                    backgroundColor: '#1a1a1a',
                                    color: '#fff',
                                },
                            }}
                        >
                            Let's Talk!
                        </Button>
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{
                                backgroundColor: '#1a1a1a',
                                color: '#fff',
                                fontWeight: 'bold',
                                '&:hover': {
                                    backgroundColor: '#26ff9c',
                                    color: '#000',
                                },
                            }}
                        >
                            VIEW WORK
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Header;

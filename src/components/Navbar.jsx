import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Box,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Stack,
    useMediaQuery,
    useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const menuItems = ['HOME', 'ABOUT', 'SKILLS', 'SERVICE', 'WORKS', 'CONTACT'];

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            if (isMobile) setDrawerOpen(false);
        }
    };

    return (
        <>
            {/* Spacer to prevent content being hidden behind AppBar */}
            <Box sx={{ height: { xs: 64, md: 70 }, overflow: 'hidden' }} />

            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: '#0f0f0f',
                    px: { xs: 2, md: 4 },
                    py: 1,
                    width: '100vw',
                    maxWidth: '100vw',
                    top: 0,
                    left: 0,
                    right: 0,
                    position: 'fixed',
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
            >
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    {/* Logo */}
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 'bold',
                            color: '#26ff9c',
                            flexShrink: 0
                        }}
                    >
                        My Portfolio
                    </Typography>

                    {/* Desktop Navigation */}
                    {!isMobile && (
                        <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                            {menuItems.map((item) => (
                                <Typography
                                    key={item}
                                    variant="button"
                                    onClick={() => handleScroll(item)}
                                    sx={{
                                        color: item === 'HOME' ? '#26ff9c' : '#fff',
                                        fontWeight: 'bold',
                                        cursor: 'pointer',
                                        '&:hover': { color: '#26ff9c' },
                                    }}
                                >
                                    {item}
                                </Typography>
                            ))}
                        </Box>
                    )}

                    {/* Socials + Hire Me + Mobile Menu */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        {!isMobile && (
                            <>
                                <IconButton
                                    component="a"
                                    href="https://github.com/Zartasha-Fajar"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{ color: '#26ff9c' }}
                                >
                                    <GitHubIcon />
                                </IconButton>
                                <IconButton
                                    component="a"
                                    href="https://www.linkedin.com/in/zartasha-fajar-558714267/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{ color: '#26ff9c' }}
                                >
                                    <LinkedInIcon />
                                </IconButton>
                                <IconButton
                                    component="a"
                                    href="mailto:zartasha.fajar99@gmail.com"
                                    sx={{ color: '#26ff9c' }}
                                >
                                    <EmailIcon />
                                </IconButton>
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: '#26ff9c',
                                        color: '#000',
                                        fontWeight: 'bold',
                                        borderRadius: 2,
                                        '&:hover': {
                                            backgroundColor: '#1a1a1a',
                                            color: '#fff',
                                        },
                                    }}
                                >
                                    HIRE ME!
                                </Button>
                            </>
                        )}
                        {isMobile && (
                            <IconButton onClick={toggleDrawer(true)} sx={{ color: '#26ff9c' }}>
                                <MenuIcon />
                            </IconButton>
                        )}
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Drawer Menu for Mobile */}
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                PaperProps={{
                    sx: {
                        zIndex: (theme) => theme.zIndex.drawer + 2,
                        backgroundColor: '#0f0f0f',
                        color: '#fff',
                    },
                }}
            >
                <Box
                    sx={{
                        width: 250,
                        px: 2,
                        py: 3,
                        height: '100%',
                        backgroundColor: '#0f0f0f',
                        color: '#fff',
                        mt: 6
                    }}
                    role="presentation"
                >
                    <List>
                        {menuItems.map((item) => (
                            <ListItem
                                key={item}
                                component="button"
                                onClick={() => handleScroll(item)}
                                sx={{ textAlign: 'left' }}
                            >
                                <ListItemText
                                    primary={item}
                                    primaryTypographyProps={{
                                        fontWeight: 'bold',
                                        color: 'black',
                                    }}
                                />
                            </ListItem>
                        ))}
                    </List>

                    {/* Social Icons */}
                    <Stack direction="row" spacing={1} justifyContent="center" mt={2}>
                        <IconButton
                            component="a"
                            href="https://github.com/Zartasha-Fajar"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: '#26ff9c' }}
                        >
                            <GitHubIcon />
                        </IconButton>
                        <IconButton
                            component="a"
                            href="https://www.linkedin.com/in/zartasha-fajar-558714267/"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: '#26ff9c' }}
                        >
                            <LinkedInIcon />
                        </IconButton>
                        <IconButton
                            component="a"
                            href="mailto:zartasha.fajar99@gmail.com"
                            sx={{ color: '#26ff9c' }}
                        >
                            <EmailIcon />
                        </IconButton>
                    </Stack>

                    {/* Hire Me Button */}
                    <Box mt={3}>
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{
                                backgroundColor: '#26ff9c',
                                color: '#000',
                                fontWeight: 'bold',
                                borderRadius: 2,
                                '&:hover': {
                                    backgroundColor: '#1a1a1a',
                                    color: '#fff',
                                },
                            }}
                        >
                            HIRE ME!
                        </Button>
                    </Box>
                </Box>
            </Drawer>

        </>
    );
};

export default Navbar;
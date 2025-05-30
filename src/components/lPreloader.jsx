import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

const Preloader = () => {
    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                bgcolor: '#0f0f0f',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999,
            }}
        >
            <CircularProgress
                size={60}
                thickness={5}
                sx={{ color: '#26ff9c', mb: 2 }}
            />
            <Typography variant="h6" sx={{ color: '#26ff9c', fontWeight: 'bold' }}>
                Loading...
            </Typography>
        </Box>
    );
};

export default Preloader;

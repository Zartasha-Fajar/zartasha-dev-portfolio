import React, { useState, useEffect } from 'react';
import { IconButton, Zoom, useScrollTrigger } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollToTopButton = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Zoom in={trigger}>
      <IconButton
        onClick={handleClick}
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          zIndex: 1300,
          backgroundColor: '#26ff9c',
          color: '#000',
          '&:hover': {
            backgroundColor: '#1edb82',
          },
        }}
      >
        <KeyboardArrowUpIcon fontSize="large" />
      </IconButton>
    </Zoom>
  );
};

export default ScrollToTopButton;

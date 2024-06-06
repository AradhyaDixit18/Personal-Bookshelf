// src/components/ThemeToggle.js
import React from 'react';
import { IconButton } from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <IconButton onClick={toggleTheme} color="inherit">
      {theme === 'dark' ? <LightMode /> : <DarkMode />}
    </IconButton>
  );
};

export default ThemeToggle;

// src/components/Loader.js
import React from 'react';
import { CircularProgress, Box } from '@mui/material';

const Loader = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100px">
      <CircularProgress />
    </Box>
  );
};

export default Loader;

// src/pages/HomePage.js
import React from 'react';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import BookSearch from '../components/BookSearch';
import './HomePage.css';

const HomePage = ({ onAddToBookshelf }) => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <Typography variant="h3" gutterBottom>
        Personal Bookshelf
      </Typography>
      <BookSearch onAddToBookshelf={onAddToBookshelf} />
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate('/bookshelf')}
        className="bookshelf-button"
      >
        Go to My Bookshelf
      </Button>
    </div>
  );
};

export default HomePage;

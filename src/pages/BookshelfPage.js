// src/pages/BookshelfPage.js
import React from 'react';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Bookshelf from '../components/Bookshelf';
import './BookshelfPage.css';

const BookshelfPage = ({ bookshelf }) => {
  const navigate = useNavigate();

  return (
    <div className="bookshelf-page">
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate('/')}
        className="back-button"
      >
        Back to Search
      </Button>
      <Bookshelf bookshelf={bookshelf} />
    </div>
  );
};

export default BookshelfPage;

// src/components/BookCard.js
import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import './BookCard.css';

const BookCard = ({ book, onAdd }) => {
  return (
    <Card className="book-card">
      <CardContent>
        <Typography variant="h6">{book.title}</Typography>
        <Typography variant="body2" color="textSecondary">
          {book.author_name?.join(', ') || 'Unknown Author'}
        </Typography>
        <Button variant="contained" color="primary" onClick={() => onAdd(book)}>
          Add to Bookshelf
        </Button>
      </CardContent>
    </Card>
  );
};

export default BookCard;

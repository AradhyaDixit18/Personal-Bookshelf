// src/components/Bookshelf.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import './Bookshelf.css';

const Bookshelf = ({ bookshelf }) => {
  return (
    <div className="bookshelf">
      <Typography variant="h4" gutterBottom>
        My Bookshelf
      </Typography>
      {bookshelf.length === 0 ? (
        <Typography variant="body1">No books added yet.</Typography>
      ) : (
        <div className="bookshelf-list">
          {bookshelf.map((book) => (
            <Card key={book.key} className="bookshelf-card">
              <CardContent>
                <Typography variant="h6">{book.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {book.author_name?.join(', ') || 'Unknown Author'}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Bookshelf;

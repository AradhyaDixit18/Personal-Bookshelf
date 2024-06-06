// src/components/BookSearch.js
import React, { useState, useEffect } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { Search } from '@mui/icons-material';
import BookCard from './BookCard';
import Loader from './Loader';
import './BookSearch.css';

const BookSearch = ({ onAddToBookshelf }) => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch some random books on initial load
    fetchBooks('bestseller');
  }, []);

  const fetchBooks = async (searchQuery) => {
    setLoading(true);
    const response = await fetch(`https://openlibrary.org/search.json?q=${searchQuery}&limit=10&page=1`);
    const data = await response.json();
    setBooks(data.docs);
    setLoading(false);
  };

  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    if (newQuery) {
      fetchBooks(newQuery);
    } else {
      fetchBooks('bestseller'); // Fetch random books again if search query is cleared
    }
  };

  return (
    <div className="book-search">
      <TextField
        variant="outlined"
        fullWidth
        value={query}
        onChange={handleInputChange}
        placeholder="Search for books..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
      />
      {loading ? (
        <Loader />
      ) : (
        <div className="book-list">
          {books.map((book) => (
            <BookCard key={book.key} book={book} onAdd={onAddToBookshelf} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BookSearch;

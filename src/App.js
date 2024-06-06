// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import HomePages from './pages/HomePages';
import BookshelfPage from './pages/BookshelfPage';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

const App = () => {
  const [bookshelf, setBookshelf] = useState([]);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(storedBookshelf);
  }, []);

  useEffect(() => {
    localStorage.setItem('bookshelf', JSON.stringify(bookshelf));
  }, [bookshelf]);

  const addToBookshelf = (book) => {
    if (!bookshelf.some((b) => b.key === book.key)) {
      setBookshelf([...bookshelf, book]);
    }
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const muiTheme = createTheme({
    palette: {
      mode: theme,
    },
  });

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <Routes>
            <Route path="/" element={<HomePages onAddToBookshelf={addToBookshelf} />} />
            <Route path="/bookshelf" element={<BookshelfPage bookshelf={bookshelf} />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;

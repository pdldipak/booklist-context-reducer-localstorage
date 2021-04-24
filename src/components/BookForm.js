import React, { useState, useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
  //const { addBook } = useContext(BookContext);
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    //addBook(title, author);
    dispatch({ type: 'ADD_BOOK', book: { title, author } });
    setAuthor('');
    setTitle('');
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type='text'
        placeholder='Title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type='text'
        placeholder='Author'
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input type='submit' value='Add Book' />
    </form>
  );
};

export default BookForm;

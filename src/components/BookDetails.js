import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookDetails = ({ book }) => {
  // const { removeBook } = useContext(BookContext);
  const { dispatch } = useContext(BookContext);
  {
    /* <div onClick={() => removeBook(book.id)}> */
  }
  return (
    <div
      onClick={() => dispatch({ type: 'REMOVE_BOOK', id: book.id })}
    >
      <span>❌</span>
      <ul>
        <li className='title'>{book.title}</li>
        <li className='author'>{book.author}</li>
      </ul>
    </div>
  );
};

export default BookDetails;

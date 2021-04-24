import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className='navbar'>
      <h1>Dipak Reading lists</h1>
      <p>Currently you can have {books.length} books to get through....</p>
    </div>
  );
};

export default Navbar;

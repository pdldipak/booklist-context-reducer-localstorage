import React, { createContext, useEffect, useReducer } from 'react';
import { bookReducer } from '../reducers/bookReducer';
//import { v4 as uuidv4 } from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  //const [books, setBooks] = useState([]);
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem('books');
    return localData ? JSON.parse(localData) : [];
  });

  // const addBook = (title, author) => {
  //   return setBooks([...books, { title, author, id: uuidv4() }]);
  // };

  // const removeBook = (id) => {
  //   return setBooks(books.filter((book) => book.id !== id));
  // };
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  return (
    /* value={{ books, addBook, removeBook }} */
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;

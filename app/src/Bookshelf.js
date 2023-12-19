import React, { useState, useEffect } from 'react';
import './Bookshelf.css'

const MyBooks = () => {
  const [alreadyReadBooks, setAlreadyReadBooks] = useState([]);


  const fetchBookCovers = async (books) => {
    try {
      const covers = await Promise.all(
        books.map(async (book) => {
          try {
            const coverResponse = await fetch(
              `https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-M.jpg`
            );
            if (coverResponse.ok) {
              return coverResponse.url;
            } else {
              console.error('Failed to fetch cover for', book.title);
              return null;
            }
          } catch (error) {
            console.error('Error fetching cover:', error);
            return null;
          }
        })
      );
      return covers;
    } catch (error) {
      console.error('Error fetching covers:', error);
      return [];
    }
  };
  

  const fetchAlreadyReadBooks = async () => {
    try {
      const response = await fetch('http://openlibrary.org/people/george08/lists/OL97L/seeds.json');
      const data = await response.json();
      setAlreadyReadBooks(data.entries || []);
    } catch (error) {
      console.error('Error fetching already read books:', error);
    }
  };




  useEffect(() => {
    const fetchAndSetCovers = async () => {
      const alreadyReadCovers = await fetchBookCovers(alreadyReadBooks);

      setAlreadyReadBooks((prevData) =>
        prevData.map((book, index) => ({ ...book, cover: alreadyReadCovers[index] }))
      );
    };
    fetchAndSetCovers();
  }, [alreadyReadBooks]);

  // Function to add a book to the already read list
  const addToAlreadyReadList = async (bookSeed) => {
    try {
      const response = await fetch('/people/george08/lists/OL97L/seeds', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          add: [{ key: bookSeed }],
        }),
      });
      const result = await response.json();
      console.log('Book added to already read list:', result);
      fetchAlreadyReadBooks();
    } catch (error) {
      console.error('Error adding book to already read list:', error);
    }
  };

  return (
    <div className="MyBooks">
      <h1>Bookshelf</h1>
      <h2>Already Read Books</h2>

      <ul>
        {alreadyReadBooks.map((book, index) => (
          <li key={index}>
            <img src={book.cover} alt={`Cover for ${book.title}`} width="180px" height="280px"/>
            <span>{book.title}</span>
            {/* You can add additional book details here */}
          </li>
        ))}
      </ul>

      <button onClick={() => addToAlreadyReadList('/books/OL25083437M')}>
        Add Book to Already Read List
      </button>
    </div>
  );
};

export default MyBooks;
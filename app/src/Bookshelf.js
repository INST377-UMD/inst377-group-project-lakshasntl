import React, { useState, useEffect } from 'react';

const MyBooks = () => {
  const [alreadyReadBooks, setAlreadyReadBooks] = useState([]);

  // Function to fetch already read books
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
    fetchAlreadyReadBooks();
  }, []);

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
            {book.title}
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

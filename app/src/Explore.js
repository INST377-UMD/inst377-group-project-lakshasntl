import React, { useState, useEffect } from 'react';

const Explore = () => {
  const [bookCovers, setBookCovers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookCovers = async () => {
      try {
        const response = await fetch('YOUR_BOOK_COVERS_API_ENDPOINT');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();

        const covers = data.map((book) => ({
          id: book.id, 
          coverURL: `https://covers.openlibrary.org/b/id/${book.id}-M.jpg`,
        }));

        setBookCovers(covers);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching book covers:', error);
        setError('Failed to fetch book covers');
        setLoading(false);
      }
    };

    fetchBookCovers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="explore-container">
      <h1>Explore</h1>
      <div className="book-covers">
        {bookCovers.map((book) => (
          <img key={book.id} src={book.coverURL} alt={`Book cover for ${book.id}`} />
        ))}
      </div>
    </div>
  );
};

export default Explore;

import React, { useState, useEffect } from 'react';
import './Explore.css';

const Explore = () => {
  const [historyData, setHistoryData] = useState([]);
  const [romanceData, setRomanceData] = useState([]);
  const [scienceData, setScienceData] = useState([]);

  const fetchBookCovers = async (works) => {
    try {
      const covers = await Promise.all(
        works.map(async (work) => {
          try {
            const coverResponse = await fetch(
              `https://covers.openlibrary.org/b/olid/${work.cover_edition_key}-M.jpg`
            );
            if (coverResponse.ok) {
              return coverResponse.url;
            } else {
              console.error('Failed to fetch cover for', work.title);
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

  useEffect(() => {
    const fetchData = async (subject, setData) => {
      try {
        const response = await fetch(`https://openlibrary.org/subjects/${subject}.json`);
        const data = await response.json();
        setData(data.works || []);
      } catch (error) {
        console.error(`Error fetching ${subject} data:`, error);
      }
    };

    fetchData('history', setHistoryData);
    fetchData('romance', setRomanceData);
    fetchData('science', setScienceData);
  }, []);

  useEffect(() => {
    const fetchAndSetCovers = async () => {
      const historyCovers = await fetchBookCovers(historyData);
      const romanceCovers = await fetchBookCovers(romanceData);
      const scienceCovers = await fetchBookCovers(scienceData);

      setHistoryData((prevData) =>
        prevData.map((work, index) => ({ ...work, cover: historyCovers[index] }))
      );
      setRomanceData((prevData) =>
        prevData.map((work, index) => ({ ...work, cover: romanceCovers[index] }))
      );
      setScienceData((prevData) =>
        prevData.map((work, index) => ({ ...work, cover: scienceCovers[index] }))
      );
    };

    fetchAndSetCovers();
  }, [historyData, romanceData, scienceData]);

  return (
    <div className="Explore">
      <h1>Explore</h1>
    
    <div className='book-list-container'>
    <h2>Works under the subject "History"</h2>
    <ul className='History'>
  {historyData.map((work, index) => (
    <li key={index} className='History-item'>
      <div className="book-container">
        <img src={work.cover} alt={`Cover for ${work.title}`} width="180px" height="280px"/>
        <span className='History-item-title'>{work.title}</span>
      </div>
    </li>
  ))}
</ul>
    
      

      <h2>Works under the subject "Romance"</h2>
      <ul className='Romance'>
        {romanceData.map((work, index) => (
          <li key={index} className='Romance-item'>
            <div className="book-container">
            <img src={work.cover} alt={`Cover for ${work.title}`} width="180px" height="280px"/>
            <span id='Romance-item-Title'>{work.title}</span>
            </div>
            
          </li>
        ))}
      </ul>

      <h2>Works under the subject "Science"</h2>
      <ul className='Science'>
        {scienceData.map((work, index) => (
          <li key={index} className='Science-item'>
            <div className='book-container'>
            <img src={work.cover} alt={`Cover for ${work.title}`} width="180px" height="280px"/>
            <span id='Science=item-Title'>{work.title}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};


export default Explore;

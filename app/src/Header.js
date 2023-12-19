import React from 'react';
import './Header.css'; // Import the CSS file for styling
const Header = () => {
  return (
    <header className="header">
      <h1 id='Title'>Reads</h1>
      <nav>
        {/* Use a div or another container instead of the list */}
        <div className='navLinks'>
            <a href='./Bookshelf.js'> Bookshelf </a>
            <a href='./Explore.js'> Explore </a>
            <a href='./Home.js'>Home</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;

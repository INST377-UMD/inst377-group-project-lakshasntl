// Header.js
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom'; // Import Link component

function Header() {
  return (
    <header className="header">
      <h1 id="appTitle">My React App</h1>
      <nav id="main-nav">
        <ul id="navLinks">
          <li>
            <Link to="/mybooks">My Books</Link>
          </li>
          {/* Add other links as needed */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;

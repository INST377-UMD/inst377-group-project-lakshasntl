import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Navigate } from "react-router-dom";
import './Header.css'; // Import the CSS file for styling
const Header = () => {
    const [toHome, setToHome] = React.useState(false);
    const [toBookshelf, setToBookshelf] = React.useState(false);
    const [toExplore, setToExplore] = React.useState(false);
    const [toAbout, setToAbout] = React.useState(false);
    const currPage = "\uD83D\uDCDA Book-et List \uD83D\uDCDD";

    if (toHome) {
        return <Router><Navigate to="/Home" /></Router>;
    }
    if (toBookshelf) {
        return <Router><Navigate to="/Bookshelf" /></Router>;
    }
    if (toExplore) {
        return <Router><Navigate to="/Explore" /></Router>;
    }
    if (toAbout) {
        return <Router><Navigate to="/About" /></Router>;
    }

  return (
    <header className="header">
      <h1 id='Title'>Title</h1>
      <nav>
        {/* Use a div or another container instead of the list */}
        <div className='navLinks'>
            <a href='./Bookshelf' onClick={() => {setToBookshelf(true); }}> Bookshelf </a>
            <a href='./Explore' onClick={() => {setToExplore(true); }}> Explore </a>
            <a href='./Home' onClick={() => {setToHome(true);}}>Home</a>
            <a href='./About' onClick={() => { setToAbout(true); }}>About</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;

import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Explore from './Explore';
import Header from './Header';
import Home from './Home';
import About from './About';
import Bookshelf from './Bookshelf'
import Authentication from './userAuthentication'; // Import the Authentication component
import MainContent from './MainContent';
function App() {
  const [user, setUser] = useState('');
  const [showLogin, setShowLogin] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setShowLogin(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowLogin(false);
    }, 10000); // Adjust the delay here (in milliseconds)
  };

  return (
    <div className="App">
      {user ? <MainContent user={user} /> : (
      <div className="sidebar">
        <div
          className="hover-element"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          &#9776; 
        </div>
        {showLogin && (
          <div className="sidebar-content">
            <Authentication setUser={setUser} /> {/* Render Authentication component */}
          </div>
        )}
      </div> )}
          <div className="main-content">
              <Header />
              <Router>
                  <Routes>
                      <Route path="/Home" element={<Home />} />
                      <Route path="/Explore" element={<Explore />} />
                      <Route path="/Bookshelf" element={<Bookshelf />} />
                      <Route path="/About" element={<About />} />
                  </Routes>
              </Router>
        
        
      </div>
    </div>
  );
}

export default App;

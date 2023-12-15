import React, { useState } from 'react';
import './App.css';
import Explore from './Explore';
import Header from './Header';
import Home from './Home';
import Login from './userAuthentication';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="App">
      <div className="sidebar">
        <div
          className="hover-element"
          onMouseEnter={() => setShowLogin(true)}
          onMouseLeave={() => setShowLogin(false)}
        >
          &#9776; {/* Three lines symbol */}
        </div>
        {showLogin && (
          <div className="sidebar-content">
            <Login />
          </div>
        )}
      </div>
      <div className="main-content">
        <Header />
        <Home />
        <Explore />
      </div>
    </div>
  );
}

export default App;

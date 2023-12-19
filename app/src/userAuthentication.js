// userAuthentication.js

import React from 'react';
import Login from './Login'; // Import the Login component
import SignUp from './SignUp';

const Authentication = ({ setUser }) => {
  return (
    <div className="authentication-container">
      {/* Render the Login component */}
      <Login />
      {/* Other components like SignUp */}
      <SignUp />
    </div>
  );
};

export default Authentication;

// MainContent.js
import React from 'react';

const MainContent = ({ user }) => {
  // Your main content structure here
  return (
    <div>
      <h1>Welcome, {user}!</h1>
      {/* Other components or content for authenticated users */}
    </div>
  );
};

export default MainContent;

import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  const handleLogin = () => {
    // Simulated authentication logic (replace with your actual authentication logic)
    if (username === 'user' && password === 'password') {
      setLoginMessage('Login successful!');
      // Perform actions for successful login (redirect, set user session, etc.)
    } else {
      setLoginMessage('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button onClick={handleLogin}>Login</button>
        <p>{loginMessage}</p>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from 'react';

const Login = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  const handleLogin = () => {
    // Simulated authentication logic (replace with your actual authentication logic)
    const storedUser = localStorage.getItem('user');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUser && password === storedPassword) {
      setLoginMessage('Login successful!');
      setUser(username); // Set the user in the parent component
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

const SignUp = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [signupMessage, setSignupMessage] = useState('');

  const handleSignUp = () => {
    // Simulated signup logic (replace with your actual signup logic)
    localStorage.setItem('user', username);
    localStorage.setItem('password', password);
    setUser(username); // Set the user in the parent component
    setSignupMessage('Sign up successful!');
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <h2>Sign Up</h2>
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
        <button onClick={handleSignUp}>Sign Up</button>
        <p>{signupMessage}</p>
      </div>
    </div>
  );
};

const Authentication = ({ setUser }) => {
  return (
    <div className="authentication-container">
      <Login setUser={setUser} />
      <SignUp setUser={setUser} />
    </div>
  );
};

export default Authentication;

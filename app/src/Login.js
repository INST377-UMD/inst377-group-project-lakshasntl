import React, { useState } from 'react';
import { supabase } from './supabaseConfig'; // Import the supabase client

const Login = ({ setUser }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginMessage, setLoginMessage] = useState('');
  
    
    const handleLogin = async () => {
      const username = "anyText"; // Replace with the username entered by the user
      const password = "userPassword"; // Replace with the password entered by the user
    
      try {
        const { user, error } = await supabase.auth.signIn({
          email: `${username}@dummy.com`, // Using a dummy email format
          password: password,
        });
    
        if (error) {
          console.error('Sign in error:', error.message);
        } else {
          console.log('User signed in successfully:', user);
          // Handle the successful login flow, maybe setting user data in the application state
        }
      } catch (error) {
        console.error('Sign in process error:', error.message);
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
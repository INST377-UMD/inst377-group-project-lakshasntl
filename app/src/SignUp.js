import React, { useState } from 'react';
import { supabase } from './supabaseConfig'; // Import the supabase client


const SignUp = ({ setUser }) => {
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const [signupMessage, setSignupMessage] = useState('');
  
    
    const handleSignUp = async () => {
        try {
            const { user, error } = await supabase.auth.signUp({
                Username: `${Username}@dummy.com`, // Using a dummy email format
                Password: Password,
            });
        
            if (error) {
              console.error('Sign up error:', error.message);
            } else {
              console.log('User signed up successfully:', user);
        
              const { data, error } = await supabase
                .from('Users')
                .insert([
                  { Username: Username, Password: Password },
                ])
                .single();
        
              if (error) {
                console.error('User insertion error:', error.message);
              } else {
                console.log('User details inserted successfully:', data);
              }
            }
          } catch (error) {
            console.error('Sign up process error:', error.message);
          }
        };

        return(
      <div className="signup-container">
        <div className="signup-content">
          <h2>Sign Up</h2>
          <input
            type="text"
            placeholder="Username"
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button onClick={handleSignUp}>Sign Up</button>
          <p>{signupMessage}</p>
        </div>
      </div>
    );
  };

export default SignUp
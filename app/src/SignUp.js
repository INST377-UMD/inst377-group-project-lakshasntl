import { supabase } from './supabaseConfig';

const SignUp = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [signupMessage, setSignupMessage] = useState('');

  const handleSignUp = async () => {
    try {
      const { user, error } = await supabase.auth.signUp({
        email: `${username}@dummy.com`,
        password: password,
      });

      if (error) {
        console.error('Sign up error:', error.message);
        setSignupMessage('Error signing up');
      } else {
        console.log('User signed up successfully:', user);
        setUser(user); // Set the user object in the parent component
        setSignupMessage('Sign up successful!');
        // Handle further actions upon successful signup
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
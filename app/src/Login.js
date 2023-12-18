import { supabase } from './supabaseConfig';

const Login = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  const handleLogin = async () => {
    try {
      const { user, error } = await supabase.auth.signIn({
        email: `${username}@dummy.com`,
        password: password,
      });

      if (error) {
        console.error('Sign in error:', error.message);
        setLoginMessage('Invalid username or password');
      } else {
        console.log('User signed in successfully:', user);
        setUser(user); // Set the user object in the parent component
        setLoginMessage('Login successful!');
        // Handle further actions upon successful login
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
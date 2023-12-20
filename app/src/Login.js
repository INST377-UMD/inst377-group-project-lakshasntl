import { response } from 'express';
import React from 'react';

const Login = () => {

  async function loginUser() {
    console.log('Logging in');
    var host = window.location.origin;
    console.log(host)

    var usernameValue = document.getElementById('loginUsername').value;
    var passwordValue = document.getElementById('loginPassword').value;

    var loginData = {
      "username": usernameValue,
      "password": passwordValue
    };

    try {
      var loginResponse = await fetch(`${host}/users`, {
        method: 'POST',
        body: JSON.stringify(loginData),
        headers: {
          "Content-type": "application/json"
        }
      });

      var responseData = await loginResponse.text();
      
      if (loginResponse.ok) {
        // Login successful
        console.log(usernameValue);
        console.log("logged in")
        displayWelcomeMessage(usernameValue);
      } else {
        // Login failed
        console.error("Login failed:", responseData.message);
        // Display an error message or handle accordingly
      }
    } catch (error) {
      if (error instanceof SyntaxError) {
        console.error("SyntaxError: Invalid JSON in response");
        // Handle cases where the response is not a valid JSON
      } else {
        console.error("Error during login:", error);
        // Handle other errors during login
      }
    }

    function displayWelcomeMessage(username) {
      var welcomeDiv = document.createElement('div');
      welcomeDiv.textContent = `Welcome, ${username}!`;

      // Assuming you want to display this message somewhere on your page
      var welcomeContainer = document.getElementById('welcomeContainer');
      welcomeContainer.innerHTML = ''; // Clear previous content
      welcomeContainer.appendChild(welcomeDiv);
    }
  }

  return (
    <div className='login-container'>
      <h1>Login</h1>
      <form onSubmit={(e) => { e.preventDefault(); loginUser(e); }}>
        <label htmlFor="loginUsername">Username:</label>
        <input type="text" id="loginUsername" />
        <br />
        <label htmlFor="loginPassword">Password:</label>
        <input type="password" id="loginPassword" />
        <br />
        <br />
        <input type="submit" value="Submit" />
        <hr />
      </form>
      <hr />
      <div id="welcomeContainer"></div>
    </div>
  );
};

export default Login;

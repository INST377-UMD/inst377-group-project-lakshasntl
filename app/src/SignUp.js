import React from 'react';

const SignUp = () => {
  async function signUpUser() {
    console.log('Signing up');
    var host = window.location.origin;

    var usernameValue = document.getElementById('signupUsername').value;
    var passwordValue = document.getElementById('signupPassword').value;

    var signUpData = {
      "username": usernameValue,
      "password": passwordValue
    };

    try {
      var signUpResponse = await fetch(`${host}/users`, {
        method: 'POST',
        body: JSON.stringify(signUpData),
        headers: {
          "Content-type": "application/json"
        }
      });

      var responseData = await signUpResponse.text();

      if (signUpResponse.ok) {
        // Signup successful
        console.log(usernameValue);
        console.log("signed up");
        displaySuccessMessage(usernameValue);
      } else {
        // Signup failed
        console.error("Signup failed:", responseData.message);
        // Display an error message or handle accordingly
      }
    } catch (error) {
      if (error instanceof SyntaxError) {
        console.error("SyntaxError: Invalid JSON in response");
        // Handle cases where the response is not a valid JSON
      } else {
        console.error("Error during signup:", error);
        // Handle other errors during signup
      }
    }

    function displaySuccessMessage(username) {
      var successDiv = document.createElement('div');
      successDiv.textContent = `Signup successful, ${username}!`;

      // Assuming you want to display this message somewhere on your page
      var successContainer = document.getElementById('successContainer');
      successContainer.innerHTML = ''; // Clear previous content
      successContainer.appendChild(successDiv);
    }
  }

  return (
    <div className='signup-container'>
      <h1>Sign Up</h1>
      <form onSubmit={(e) => { e.preventDefault(); signUpUser(); }}>
        <label htmlFor="signupUsername">Username:</label>
        <input type="text" id="signupUsername" />
        <br />
        <label htmlFor="signupPassword">Password:</label>
        <input type="password" id="signupPassword" />
        <br />
        <br />
        <input type="submit" value="Submit" />
        <hr />
      </form>
      <hr />
      <div id="successContainer"></div>
    </div>
  );
};

export default SignUp;

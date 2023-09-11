import React, { useState } from 'react';
import firebase from './firebase';

const auth = firebase.auth();

const Email = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignup = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signup successful
        const user = userCredential.user;
        console.log('Gmail signup successful:', user);
      })
      .catch((error) => {
        // Signup error
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Gmail signup error:', errorCode, errorMessage);
        setErrorMessage(errorMessage);
      });
  };

  return (
    <div>
      <h1>Gmail Signup</h1>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} />
      </div>
      <div>
        <button onClick={handleSignup}>Signup</button>
      </div>
      {errorMessage && <div>{errorMessage}</div>}
    </div>
  );
};

export default Email;

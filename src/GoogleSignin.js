import React from 'react';
import firebase from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const auth = firebase.auth();

const GoogleSignin = () => {
  const [user] = useAuthState(auth);

  const handleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).catch((error) => {
      console.error('Google signin error:', error);
    });
  };

  const handleSignOut = () => {
    auth.signOut().catch((error) => {
      console.error('Signout error:', error);
    });
  };

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.displayName}!</h1>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <div>
          <h1>Google Sign In</h1>
          <button onClick={handleSignIn}>Sign In with Google</button>
        </div>
      )}
    </div>
  );
};

export default GoogleSignin;

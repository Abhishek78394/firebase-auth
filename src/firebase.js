

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  // Your Firebase configuration
  apiKey: "AIzaSyAkuBXJ1O1Trk7HPQthGxHgjjIcJs041lk",
  authDomain: "fir-auth-a48c1.firebaseapp.com",
  projectId: "fir-auth-a48c1",
  storageBucket: "fir-auth-a48c1.appspot.com",
  messagingSenderId: "436350759742",
  appId: "1:436350759742:web:d2810b02da52af0236326f"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
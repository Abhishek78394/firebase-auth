import React, { useState } from 'react'

import firebase from './firebase';

const auth = firebase.auth();
const MObile = () => {
    const [phoneNumber, setPhoneNumber] = useState(0);
    const [verificationCode, setVerificationCode] = useState('');
    const [verificationId, setVerificationId] = useState('');
  
    const handlePhoneNumberChange = (e) => {
      setPhoneNumber(e.target.value);
    };
  
    const handleVerificationCodeChange = (e) => {
      setVerificationCode(e.target.value);
    };
  
    const handleSendVerificationCode = () => {
      const appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
      auth
        .signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
          setVerificationId(confirmationResult.verificationId);
        })
        .catch((error) => {
          console.error('Phone number verification error:', error);
        });
    };
  
    const handleVerifyCode = () => {
      const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, verificationCode);
      auth
        .signInWithCredential(credential)
        .then((result) => {
          console.log('Phone number sign in successful:', result);
        })
        .catch((error) => {
          console.error('Phone number sign in error:', error);
        });
    };
  
    return (
      <div>
        <h1>Phone Number Signup</h1>
        <div>
          <label>Phone Number:</label>
          <input type="number" value={phoneNumber} onChange={handlePhoneNumberChange} />
        </div>
        <div>
          <button onClick={handleSendVerificationCode}>Send Verification Code</button>
        </div>
        <div>
          <label>Verification Code:</label>
          <input type="text" value={verificationCode} onChange={handleVerificationCodeChange} />
        </div>
        <div>
          <button onClick={handleVerifyCode}>Verify Code</button>
        </div>
        <div id="recaptcha-container"></div>
      </div>
    );
  }

export default MObile
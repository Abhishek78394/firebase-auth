import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import firebase from './firebase';

const auth = firebase.auth();


const Number = () => {
  
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationId, setVerificationId] = useState('');

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleVerificationCodeChange = (e) => {
    setVerificationCode(e.target.value);
  };

  const handleSendVerificationCode = () => {
    const recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      size: 'invisible',
      callback: (response) => {
        // This callback is required, but we won't use it in the invisible reCAPTCHA
      },
    });

    auth
      .signInWithPhoneNumber(phoneNumber, recaptchaVerifier)
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
        <input type="tel" value={phoneNumber} onChange={handlePhoneNumberChange} />
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
      <div id="recaptcha-container">
        <ReCAPTCHA sitekey="YOUR_RECAPTCHA_SITEKEY" size="invisible" />
      </div>
    </div>
  );
};



export default Number





import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [notificationPermission, setNotificationPermission] = useState(Notification.permission);

  function generateOTP() {
    const otpLength = 6;
    const randomOTP = Math.floor(Math.pow(10, otpLength - 1) + Math.random() * 9 * Math.pow(10, otpLength - 1));
    return randomOTP.toString();
  }
  
  const otp = generateOTP();

  const requestNotificationPermission = async () => {
    try {
      const permission = await Notification.requestPermission();
      setNotificationPermission(permission);
    } catch (error) {
      console.error('Error requesting notification permission:', error);
    }
  };

  const triggerPushNotification = () => {
    if (notificationPermission === 'granted' && 'serviceWorker' in navigator) {
      const notificationOptions = {
        body: `Hello, Your otp is ${otp}`,
        icon: 'https://static.vecteezy.com/system/resources/previews/023/128/305/non_2x/otp-one-time-password-login-code-verification-concept-icon-in-line-style-design-isolated-on-white-background-editable-stroke-vector.jpg',
      };
  
      navigator.serviceWorker.ready.then((registration) => {
        console.log(notificationOptions); 
        return registration.showNotification('my-app', notificationOptions);
      });
    } else {
      console.warn('Notification permission not granted or service worker not supported.');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={requestNotificationPermission} disabled={notificationPermission === 'granted'}>
          Request Notification Permission
        </button>
        <button onClick={triggerPushNotification}>Trigger Push Notification</button>
        <p>
          Test By abhi
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

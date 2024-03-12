import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [notificationPermission, setNotificationPermission] = useState(Notification.permission);

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
        body: 'This is your notification body.',
        icon: 'path/to/your/notification-icon.png',
      };
  
      navigator.serviceWorker.ready.then((registration) => {
        registration.showNotification('Your App Name', notificationOptions);
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

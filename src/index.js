// Import React
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Pull in root app component
import * as serviceWorkerRegistration from "./serviceWorkerRegistration"; // import basic service worker registration
import "./scss/style.scss"; // Import main SASS stylesheet

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// register the service worker
serviceWorkerRegistration.register();
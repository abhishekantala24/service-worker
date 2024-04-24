import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useServiceWorker } from './useServiceWorker';

function App() {
  const { waitingWorker, showReload, reloadPage } = useServiceWorker();

  const showToast = ( ) => {
    // Implementation to display a toast notification
    // For example, you can use a library like react-toastify
    // Here's a basic implementation using console.log:
    console.log('Showing toast:');
  };

  const closeToast = () => {
    // Implementation to close or dismiss the toast notification
    // For example, if you're using a library, call the close method
    // Here's a basic implementation:
    console.log('Closing toast');
  };

  useEffect(() => {
    if (showReload && waitingWorker) {
      showToast();
    } else closeToast();
  }, [waitingWorker, showReload, reloadPage]);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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

require('dotenv').config();
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'), {
  onCaughtError: (error, errorInfo) => {
    if (error.message !== 'Known error') {
      reportCaughtError({
        error,
        componentStack: errorInfo.componentStack,
      });
    }
  },
});

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

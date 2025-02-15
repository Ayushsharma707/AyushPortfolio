import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' for createRoot
import './index.css';
import App from './App';

// Get the root element from the DOM
const rootElement = document.getElementById('root');

// Create a root and render the app
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

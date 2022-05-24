import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Intro from './components/Intro';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Intro />
    <div style={{maxWidth: "1400px"}}>
      <App />
    </div>
  </div>
);
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//import css files
import './index.css'
import 'antd/dist/antd.css'
import './assets/fonts.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


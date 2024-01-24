import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './CSS/index.css';
import './FONTS/Roboto/Roboto-Black.ttf';
import './FONTS/Roboto/Roboto-Bold.ttf';
import './FONTS/Roboto/Roboto-Medium.ttf';
import './FONTS/Roboto/Roboto-Regular.ttf';
import App from './App';
import reportWebVitals from './reportWebVitals';

const app = ReactDOMClient.createRoot(document.getElementById('app'));
app.render(
  <App />
);


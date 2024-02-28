import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './CSS/index.css';
import './FONTS/Roboto/Roboto-Black.ttf';
import './FONTS/Roboto/Roboto-Bold.ttf';
import './FONTS/Roboto/Roboto-Medium.ttf';
import './FONTS/Roboto/Roboto-Regular.ttf';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store'

const app = ReactDOMClient.createRoot(document.getElementById('app'));
app.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);


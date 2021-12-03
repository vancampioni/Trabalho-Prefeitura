import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './componentes/App/App.js';

ReactDOM.render(
  <BrowserRouter>

    <App />

  </BrowserRouter>,

  document.getElementById('root')
  
);

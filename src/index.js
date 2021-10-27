import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

ReactDOM.render(

  <Router basename="/Blucolar-test">
     <App />
  </Router>

,
  document.getElementById('root')
);

reportWebVitals();

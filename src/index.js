import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/github">
        <App />
      </Route>
    </Switch>
  </Router>
  
     
   
,
  document.getElementById('root')
);

reportWebVitals();

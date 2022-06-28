import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Switch>
          <Route path={`${process.env.PUBLIC_URL}/`}><App /></Route>
        </Switch>
    </Router> 
);


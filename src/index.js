import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';

ReactDOM.render(
<div>
    <Router>
        <Route path='/' component={App}>
        </Route>
    </Router>
</div>,
document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import About from './layouts/About';
import Profile from './layouts/Profile';
import Search from './layouts/Search';
import App from './App';

ReactDOM.render(
    <Router>
        <App>
            <Route exact path="/" component={About} />
            <Route path="/create" component={Profile} />
            <Route path="/search" component={Search} />
        </App>
    </Router>,
    document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import About from './layouts/About';
import Profile from './layouts/Profile';
import Search from './layouts/Search';
import App from './App';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Router>
                <App>
                    <Route exact path="/" component={About} />
                    <Route path="/create" component={Profile} />
                    <Route path="/search" component={Search} />
                </App>
            </Router>
        </div>
    </Provider>,
    document.getElementById('root')
);

import React, { Component } from 'react';
import { Link }from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
                <nav>
                    <Link to="/">Home</Link>
                </nav>
                <nav>
                    <Link to="/search">Search</Link>
                </nav>
                <nav>
                    <Link to="/create">Profile</Link>
                </nav>
            </div>
        );
    }
}

export default Header;
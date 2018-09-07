import React, { Component } from 'react';
import { Link }from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
                <Link to="/">
                    <button> Home </button>
                </Link>
                <Link to="/search">
                    <button> Search </button>
                </Link>
                <Link to="/create">
                    <button> Profile </button>
                </Link>                
            </div>
        );
    }
}

export default Header;
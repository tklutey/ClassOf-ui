import React, { Component } from 'react';


class Button extends Component {

    handleClick = () => {
        this.props.handleClick();
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                Get Alumni!
            </button>
        );
    }
}

export default Button;
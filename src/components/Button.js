import React, { Component } from 'react';
class Button extends Component {

    handleClick = () => {
        this.props.handleClick();
    }

    render() {
        return (
            <button className={this.props.className} onClick={this.handleClick}>
                Get Alumni!
            </button>
        );
    }
}

export default Button;
import React, { Component } from 'react';

class Response extends Component {

    render() {
        console.log('render')
        var array = []
        for (var i in this.props.elements) {
            array.push(this.props.elements[i])
        }
        return (
            <div>
                {array.map(element => <div> {element} </div>)} 
            </div>
        );
    }
}

export default Response;

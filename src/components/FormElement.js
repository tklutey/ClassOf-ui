import React, { Component } from 'react';


class FormElement extends Component {

    render() {
        return (
            <div>
                <label>
                    {this.props.label}:
                    <input name={this.props.name} type={this.props.type} value={this.props.value} onChange={this.props.handleChange} />
                </label>
            </div>
        );
    }
}

export default FormElement;
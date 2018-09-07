import React, { Component } from 'react';
import FormElement from './FormElement';


class JobFormElement extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employer: '',
            position: '',
            isCurrent: false
        }
    }

    addJob = (event) => {
        this.setState({[event.target.name]: event.target.value});
        this.props.handleChange(this.state);
    }

    handleCheck = () => {
        this.setState({isCurrent : true})
        this.props.handleChange(this.state);
    }

    render() {
        return (
            <div>
                <FormElement name="employer" label="Company" value={this.state.employer} handleChange={this.addJob} />
                <FormElement name="position" label="Position" value={this.state.position} handleChange={this.addJob} />
                <label> Current
                    <input type="checkbox" value={this.state.isCurrent} checked={this.state.isCurrent} onChange={this.handleCheck}/>
                </label>  
            </div>  
        );
    }
}

export default JobFormElement;
import React, { Component } from 'react';
import './AlumniCard.css';

class AlumniCard extends Component {

    handleClick = () => {
        this.props.handleClick(this.props.alumni);
    }

    render() {
        return (
            <div className="alumniCard" onClick={this.handleClick}>
                <div> {this.props.alumni.firstName} {this.props.alumni.lastName} </div>
                <div> {this.props.alumni.classYear} </div>
            </div>
        )
    }
}

export default AlumniCard;

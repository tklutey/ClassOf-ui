import React, { Component } from 'react';
import './AlumniCard.css';

class AlumniCard extends Component {

    render() {
        return (
            <div className="alumniCard">
                <div> {this.props.alumni.firstName} {this.props.alumni.lastName} </div>
                <div> {this.props.alumni.classYear} </div>
            </div>
        )
    }
}

export default AlumniCard;

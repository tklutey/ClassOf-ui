import React, { Component } from 'react';

class AlumniCard extends Component {

    render() {
        const alumni = this.props.alumni;
        return (
            <div>
                <div> {alumni.firstName} {alumni.lastName} </div>
                <div> {alumni.classYear} </div>
            </div>
        )
    }
}

export default AlumniCard;

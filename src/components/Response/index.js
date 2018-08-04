import React, { Component } from 'react';
import AlumniCard from '../AlumniCard';

class Response extends Component {

    render() {
        const alumniElements = this.props.elements;
        const alumniItems = alumniElements.map((alumni) => 
            <AlumniCard alumni={alumni} key={alumni._id} />
        )
        return (
            <ul> {alumniItems} </ul>
        )
    }
}

export default Response;

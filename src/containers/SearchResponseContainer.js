import React, { Component } from 'react';
import AlumniCard from '../components/AlumniCard';
import AlumniPage from '../components/AlumniPage';

class SearchResponseContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedAlumni : null
        }
    }

    selectAlumni = (alumni) => {
        this.setState({ selectedAlumni : alumni._id })
    }

    render() {
        var content;
        const alumniElements = this.props.elements;
        const alumniItems = alumniElements.map((alumni) => { 
            if(alumni._id === this.state.selectedAlumni) {
                return <AlumniPage alumni={alumni} key={alumni._id} />
            }
            return <AlumniCard alumni={alumni} key={alumni._id} testClick={this.selectAlumni} />
        });
        content = <ul> {alumniItems} </ul>;
        return (
            content
        )
    }
}

export default SearchResponseContainer;

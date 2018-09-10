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

    deselectAlumni = () => {
        this.setState({ selectedAlumni : null })
    }

    render() {
        var content;
        const alumniElements = this.props.elements.results;
        const alumniItems = alumniElements.map((alumni) => { 
            if(alumni._id === this.state.selectedAlumni) {
                return <AlumniPage alumni={alumni} key={alumni._id} handleClick={this.deselectAlumni} />
            }
            return <AlumniCard alumni={alumni} key={alumni._id} handleClick={this.selectAlumni} />
        });
        content = <span> {alumniItems} </span> ;
        return (
            <div className={this.props.className}>
                {content}
            </div>
        )
    }
}

export default SearchResponseContainer;

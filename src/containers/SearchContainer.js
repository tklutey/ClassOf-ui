import React, { Component } from 'react';
import { connect } from 'react-redux';
import Response from '../containers/SearchResponseContainer';
import { findAlumni } from '../actions/alumniActions';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router'
import FormElement from '../components/FormElement';
import './SearchContainer.css';

class SearchContainer extends Component {

    constructor(props) {
        super(props);
        this.state= {
            search: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch(findAlumni(this.state.search));
        this.props.history.push(this.props.match.path + '/response');
      }

    render() {
        return(
            <div className="searchContainer">
                <form onSubmit={this.handleSubmit}>
                    <FormElement label="Search" name="search" value={this.state.search} handleChange={this.handleChange} />
                    <input type="submit" value="Submit" />
                </form>
                <Route exact path={this.props.match.path + '/response'} render={() => <Response className="searchResponse" elements={this.props.alumniElements} />}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        alumniElements: state.alumni.alumni,
    };
};

export default connect(mapStateToProps)(withRouter(SearchContainer));
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../components/Button';
import Response from '../containers/SearchResponseContainer';
import { loadAlumni } from '../actions/alumniActions';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router'
import './SearchContainer.css';

class SearchContainer extends Component {

    handleClick = () => {
        this.props.dispatch(loadAlumni());
        this.props.history.push(this.props.match.path + '/response');
    }

    render() {
        return(
            <div className="searchContainer">
                <Button className="searchButton" handleClick={this.handleClick}/>
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
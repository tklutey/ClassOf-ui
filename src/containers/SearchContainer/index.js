import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../../components/Button';
import Response from '../../components/Response';
import { loadAlumni } from '../../actions/alumniActions';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router'



class SearchContainer extends Component {

    handleClick = () => {
        this.props.dispatch(loadAlumni());
        this.props.history.push(this.props.match.path + '/response');
    }

    render() {
        console.log(this.props.alumniElement)
        return(
            <div>
                <Button handleClick={this.handleClick}/>
                <Route path={this.props.match.path + '/response'} render={() => <Response elements={this.props.alumniElement} />}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        alumniElement: state.alumni.alumni,
    };
};

export default connect(mapStateToProps)(withRouter(SearchContainer));
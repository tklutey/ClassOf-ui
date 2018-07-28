import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadAlumni } from '../../actions/alumniActions';


class Button extends Component {

    handleClick = () => {
        this.props.dispatch(loadAlumni());
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                Get Alumni!
            </button>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        buttonName : state.alumni.alumni.firstName
    };
};

export default connect(mapStateToProps)(Button);
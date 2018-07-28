import React, { Component } from 'react';
import { connect } from 'react-redux';


class Response extends Component {

    render() {
        var array = []
        for (var i in this.props.alumniElement) {
            array.push(this.props.alumniElement[i])
        }
        return (
            <div>
                {array.map(element => <div> {element} </div>)} 
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('mapstate')
    return {
        alumniElement: state.alumni.alumni,
    };
};

export default connect(mapStateToProps)(Response);
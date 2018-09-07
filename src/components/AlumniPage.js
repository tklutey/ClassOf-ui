import React, { Component } from 'react';
import './AlumniPage.css';


class AlumniPage extends Component {

    getCurrentJob = (alumni) => {
        for (var i = 0; i < alumni.jobs.length; i++) {
            if (alumni.jobs[i].isCurrent) {
                return alumni.jobs[i];
            }
            else {
                return alumni.jobs[0]
            }
        }
        return null;
    }

    handleClick = () => {
        this.props.handleClick();
    }

    render() {
        var currentJob = this.getCurrentJob(this.props.alumni);
        return (
            <div className="alumniPage" onClick={this.handleClick}>
                <h2> {this.props.alumni.firstName} {this.props.alumni.lastName} </h2>
                <h3> {this.props.alumni.classYear} </h3>
                <h3> Contact </h3>
                <p> {this.props.alumni.contactInfo.phoneNumber} </p>
                <p> {this.props.alumni.contactInfo.email} </p>
                <h3> Job </h3>
                <p> Employer: {currentJob.employer}</p>
                <p> Position: {currentJob.position}</p>
            </div>
        )
    }
}

export default AlumniPage;

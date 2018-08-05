import React, { Component } from 'react';
import './AlumniCard.css';


class AlumniPage extends Component {

    currentJob = (alumni) => {
        for (var i = 0; i < alumni.jobs.length; i++) {
            if (alumni.jobs[i].isCurrent) {
                return alumni.jobs[i];
            }
        }
        return null;
    }

    render() {
        var currentJob = this.currentJob(this.props.alumni);
        return (
            <div className="alumniCard">
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

import React, { Component } from 'react';
import FormElement from '../components/FormElement';
import JobFormElement from '../components/JobFormElement';
import { connect } from 'react-redux';
import {createAlumni} from '../api/alumniApi';


class ProfileForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            alumni: {
                firstName: '',
                lastName: '',
                classYear: '',
                photo: '',
                currentCity: '',
                currentState: '',
                currentCountry: '',
                homeCity: '',
                homeState: '',
                homeCountry: '',
                jobs: [],
                contactInfo: {
                    phoneNumber: '',
                    email: '',
                }
            },
            showSuccess: false,
            showFailure: false
        };
      }

      handleChange = (event) => {
        var alumni = this.state.alumni;
        if(event.target.name === "phoneNumber" | event.target.name === "email")  {
            this.handleContactChange(event, alumni)
        }
        else {
            alumni[event.target.name] = event.target.value;
            this.setState({
                alumni: alumni
            })
        }
      }

      handleContactChange(event, alumni) {
        var contactInfo = alumni.contactInfo
        contactInfo[event.target.name] = event.target.value;
        alumni[contactInfo] = contactInfo;
        this.setState({
            alumni: alumni
        })
      }

      addJob = (job) => {
        var alumni = this.state.alumni;
        alumni['jobs'] = job;
        this.setState(
            {alumni: alumni})
      }
    
      handleSubmit = (event) => {
        event.preventDefault();
        createAlumni(this.state.alumni).then(response => {
            if (response['success'] === true) {
                this.setState({
                    showSuccess: true
                })
            }
        });
      }

    render() {
        if (this.state.showFailure === false && this.state.showSuccess === false) {
            return(
                <form onSubmit={this.handleSubmit}>
                    <FormElement name="firstName" label="First Name" value={this.state.alumni.firstName} handleChange={this.handleChange} />
                    <FormElement name="lastName" label="Last Name" value={this.state.alumni.lastName} handleChange={this.handleChange} />
                    <FormElement name="phoneNumber" label="Phone" value={this.state.alumni.contactInfo.phoneNumber} handleChange={this.handleChange} />
                    <FormElement name="email" label="Email" value={this.state.alumni.contactInfo.email} handleChange={this.handleChange} />
                    <FormElement type="number" name="classYear" label="Grad Year" value={this.state.alumni.classYear} handleChange={this.handleChange} />
                    <FormElement name="photo" label="Photo URL" value={this.state.alumni.photo} handleChange={this.handleChange} />
                    <h3> Employment </h3>
                    <JobFormElement handleChange={this.addJob}/>
                    <h3> Current Location </h3>
                    <FormElement name="currentCity" label="City" value={this.state.alumni.currentCity} handleChange={this.handleChange} />
                    <FormElement name="currentState" label="State" value={this.state.alumni.currentState} handleChange={this.handleChange} />
                    <FormElement name="currentCountry" label="Country" value={this.state.alumni.currentCountry} handleChange={this.handleChange} />
                    <h3> Hometown </h3>
                    <FormElement name="homeCity" label="City" value={this.state.alumni.homeCity} handleChange={this.handleChange} />
                    <FormElement name="homeState" label="State" value={this.state.alumni.homeState} handleChange={this.handleChange} />
                    <FormElement name="homeCountry" label="Country" value={this.state.alumni.homeCountry} handleChange={this.handleChange} />
    
    
                    <input type="submit" value="Submit" />
                </form>
            )
        }
        else if(this.state.showSuccess === true) {
            return(
                <h2> Success! </h2>
            )
        }
        else if(this.state.showFailure === false) {
            return(
                <h2> Failure! </h2>
            )
        }
    }
}


export default connect()(ProfileForm);
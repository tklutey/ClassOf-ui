import React, { Component } from 'react';
import ProfileForm from '../containers/ProfileForm';

class Profile extends Component {
    render() {
        return (
            <div>
                <h1> Profile Page </h1>
                <ProfileForm />
            </div>
        );
    }
}

export default Profile;

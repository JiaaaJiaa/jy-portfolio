import React from 'react';
import './Profile.css';
import profile from '../../assets/profile.png';

const Profile = () => {
    return (
        <div className="profile">
            <img src={profile} alt=""/>
            <h1><span>I'm Ching Jia Ying,</span> Computer Science Fresh Graduate</h1>
            <p>An enthusiastic learner that is looking forward to learn more in Computer Science related field to serve, contribute and create solutions that make an impact.</p>
            <div className="profile-action">
                <div className="profile-contact">
                    Connect
                </div>
                <div className="profile-cv">
                    My CV
                </div>
                {/* <div className="resume">
                    resume
                </div> */}
            </div>

        </div>
    );
}

export default Profile;


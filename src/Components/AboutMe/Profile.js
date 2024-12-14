import React from 'react';
import './Profile.css';
import profile from '../../assets/profile.png';

const Profile = () => {
    return (
        <div id="profile" className="profile">
            <img src={profile} alt=""/>
            <h1><span>I'm Ching Jia Ying,</span> Computer Science Fresh Graduate</h1>
            <p>An enthusiastic learner that is looking forward to learn more in Computer Science related field to serve, contribute and create solutions that make an impact.</p>
            <div className="profile-action">
                
                <a href="https://linktr.ee/jiayingching" target="_blank" rel="noreferrer">
                    <div className="profile-contact">Connect</div>
                </a>
                
                <a href="https://docs.google.com/document/d/1ZuF-93hMjw6AmAmKdbevfXAal33-fIcJOY2tAWeqna8/edit?usp=sharing " target="_blank" rel="noreferrer">
                    <div className="profile-cv">My CV</div>
                </a>
                {/* <div className="resume">
                    resume
                </div> */}
            </div>

        </div>
    );
}

export default Profile;


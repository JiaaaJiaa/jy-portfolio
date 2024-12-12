import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {

    return (
        <nav className='navbar'>
            <img src={logo} alt="" className="logo"/>
            <ul className='navbarMenu'>
                <li>About Me</li>
                <li>Education</li>
                <li>Working Experience</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Awards</li>
            </ul>
        </nav>
    );
}

export default Navbar;
import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { useState } from 'react';
import underline from '../../assets/underline.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {

    const [Menu, setMenu] = useState("profile");

    return (
        <nav className='navbar'>
            <img src={logo} alt="" className="logo"/>
            <ul className='navbarMenu'>
                <li><AnchorLink className="anchor-link" href='#profile'><p onClick={()=>setMenu("profile")}>About Me</p></AnchorLink>{Menu === "profile"? <img src={underline} className="underline" alt=''/>:<></>}</li>
                <li><AnchorLink className="anchor-link" href='#education'><p onClick={()=>setMenu("education")}>Education</p></AnchorLink>{Menu === "education"? <img src={underline} className="underline" alt=''/>:<></>}</li>
                <li><AnchorLink className="anchor-link" href='#working'><p onClick={()=>setMenu("working")}>Working Experience</p></AnchorLink>{Menu === "working"? <img src={underline} className="underline" alt=''/>:<></>}</li>
                <li><AnchorLink className="anchor-link" href='#skills'><p onClick={()=>setMenu("skills")}>Skills</p></AnchorLink>{Menu === "skills"? <img src={underline} className="underline" alt=''/>:<></>}</li>
                <li><AnchorLink className="anchor-link" href='#projects'><p onClick={()=>setMenu("projects")}>Projects</p></AnchorLink>{Menu === "projects"? <img src={underline} className="underline" alt=''/>:<></>}</li>
                {/* <li>Awards</li> */}
            </ul>
        </nav>
    );
}

export default Navbar;
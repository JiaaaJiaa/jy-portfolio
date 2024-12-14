import React from 'react';
import './Project.css';
import titlebackground from '../../assets/titlebackground.png';

const Project = () => {
    return ( 
        <div className="Project">
            <div className="Project-title">
                <h1>Projects</h1>
                <img src={titlebackground} alt="" />
            </div>
        </div>
     );
}
 
export default Project;
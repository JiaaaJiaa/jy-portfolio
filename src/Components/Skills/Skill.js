import React from 'react';
import './Skill.css'
import titlebackground from '../../assets/titlebackground.png';

const Skill = () => {
    return ( 
        <div className="skill">
            <div className="skill-title">
                <h1>Skills</h1>
                <img src={titlebackground} alt="" />
            </div>
        </div>
     );
}
 
export default Skill;
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
            <div className="skill-contents">
                <div className="skill-content"><p>HTML & CSS</p><hr style={{width:"60%"}} />60%</div>
                <div className="skill-content"><p>ReactJS & Javascript</p><hr style={{width:"70%"}} />70%</div>
                <div className="skill-content"><p>Python & R programming</p><hr style={{width:"70%"}} />70%</div>
                <div className="skill-content"><p>SQL</p><hr style={{width:"80%"}} />80%</div>
                <div className="skill-content"><p>Tableau & PowerBI</p><hr style={{width:"50%"}} />50%</div>
            </div>
        </div>
     );
}
 
export default Skill;
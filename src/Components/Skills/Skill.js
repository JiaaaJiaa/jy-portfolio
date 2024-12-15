import React from 'react';
import './Skill.css'
import titlebackground from '../../assets/titlebackground.png';

const Skill = () => {
    return ( 
        <div  id="skills"  className="skill">
            <div className="skill-title">
                <h1>Skills</h1>
                <img src={titlebackground} alt="" />
            </div>
            <div className="skill-contents">
                <div className="skill-content">
                    <p>HTML & CSS</p>
                    <div className="skill-progress">
                        <hr style={{width:"60%"}} />
                        <span className="skill-percent">60%</span>
                    </div>
                </div>
                <div className="skill-content">
                    <p>ReactJS & Javascript</p>
                    <div className="skill-progress">
                        <hr style={{width:"70%"}} />                    
                        <span className="skill-percent">70%</span>
                    </div>
                </div>
                <div className="skill-content">
                    <p>Python & R programming</p>
                    <div className="skill-progress">
                        <hr style={{width:"70%"}} />                    
                        <span className="skill-percent">70%</span>
                    </div>
                </div>
                <div className="skill-content">
                    <p>SQL</p>
                    <div className="skill-progress">
                        <hr style={{width:"80%"}} />                    
                        <span className="skill-percent">80%</span>
                    </div>
                </div>
                <div className="skill-content">
                    <p>Tableau & PowerBI</p>
                    <div className="skill-progress">
                        <hr style={{width:"50%"}} />                    
                        <span className="skill-percent">50%</span>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Skill;
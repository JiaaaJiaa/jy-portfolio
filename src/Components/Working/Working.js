import React from 'react';
import './Working.css';

const Working = () => {
    return ( 
        <div className="work">
            <h1>Working Experience</h1>
            <div className="work-content">
                <div className="work-item">
                    <h2>Internship at Fave</h2>
                    <p>Software Engineer Intern</p>
                    <p>Jun, 2023 - Aug, 2023</p>
                    <div className="work-desc">
                        <ul>
                            <li>Developed and maintained web applications using ReactJS</li>
                            <li>Worked on the frontend and backend of the application</li>
                            <li>Participated in code reviews and testing</li>
                        </ul>
                    </div>
                </div>
                <div className="work-item">
                    <h2>Internship at Intel</h2>
                    <p>Software Engineer Intern</p>
                    <p>Jun, 2022 - Aug, 2022</p>
                    <div className="work-desc">
                        <ul>
                            <li>Developed and maintained web applications using ReactJS</li>
                            <li>Worked on the frontend and backend of the application</li>
                            <li>Participated in code reviews and testing</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}
 
export default Working;
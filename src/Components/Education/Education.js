import React from 'react';
import './Education.css';
import usm from '../../assets/usm.png';
import kmk from '../../assets/Kmk.gif';
import smk from '../../assets/sentosa.png';
import titlebackground from '../../assets/titlebackground.png';
// import edu from '../../data/education.json';

const Education = () => {
    return ( 
        <div className="education">
            <div className="education-title">
                <h1>Education</h1>
                <img src={titlebackground} alt="" />
            </div>
            <div className="education-content">
                <div className="education-item">
                    <img src={usm} alt="" className="usm"/>
                    <h2>Universiti Sains Malaysia</h2>
                    <p>Bachelor of Computer Science</p>
                    <p>Oct, 2020 - Aug, 2024</p>

                    <div className="education-desc">
                        <ul>
                            <li>Majored in Intelligent Computing</li>
                            <li>Minored in Management </li>
                            <li>CGPA: 3.79 </li>
                        </ul>
                    </div>
                </div>
                <div className="education-item">
                    <img src={kmk} alt=""  className="kmk"/>
                    <h2>Kolej Matrikulasi Kedah</h2>
                    <p>Science Stream (Module 1)</p>
                    <p>Jun, 2019 - Apr, 2020</p>
                    <div className="education-desc">
                        <ul>
                            <li>CGPA: 4.00</li>
                            <li>MUET: Band 4</li>
                        </ul>
                    </div>
                </div>
                <div className="education-item">
                    <img src={smk} alt=""  className="smk"/>
                    <h2>SMK Sri Sentosa</h2>
                    <p>Science Stream</p>
                    <p>Jan, 2013 - Dec, 2018</p>
                    <div className="education-desc">
                        <ul>
                            <li>Result: 3A+ 2A 5A-</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Education;
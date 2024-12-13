import React from 'react';
import './Working.css';
import titlebackground from '../../assets/titlebackground.png';

const Working = () => {
    return ( 
        <div className="work">
            <div className="work-title">
                <h1>Working Experience</h1>
                <img src={titlebackground} alt="" />
            </div>

            <div className="work-content">
                <div className="work-item">
                    <h2>ASE Electronics (M) Sdn Bhd</h2>
                    <p>Internship</p>
                    <p>Mar, 2023 - Sept, 2023 </p>
                    <div className="work-desc">
                        <ul>
                            <li>Involved in Python-based Tesseract OCR projects. </li>
                            <li>Utilized Arduino and MQTT protocol with open-source tools.</li>
                            <li>Explored diverse Machine Learning/Deep Learning tools and learning to train models that address real-world problems</li>
                        </ul>
                    </div>
                </div>
                <div className="work-item">
                    <h2>Tadika Seri Cahaya</h2>
                    <p>Assistant Teacher</p>
                    <p>Jan, 2019 - Mar, 2019</p>
                    <div className="work-desc">
                        <ul>
                            <li>Assisted 60 children from 4 – 6 years old</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}
 
export default Working;
import React from 'react';
import './Project.css';
import projects from "../../data/project.json";
import titlebackground from '../../assets/titlebackground.png';
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineOndemandVideo } from "react-icons/md";

const Project = () => {
    return ( 
        <div  id="projects" className="Project">
            <div className="Project-title">
                <h1>Projects</h1>
                <img src={titlebackground} alt="" />
            </div>
            <div className="Project-content">
                {projects.map((project) => {
                    return(
                        <div key={project.id} className="Project-card">
                            <div className="project-card-content">
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                                <ul>
                                    {project.skills.map((skill)=>{
                                        return <li key={skill}>{skill}</li>
                                    })}
                                </ul>
                                {project.demo && 
                                    <a href={project.demo} target="_blank" rel="noreferrer"><MdOutlineOndemandVideo /></a>}
                                {project.source && 
                                    <a href={project.source} target="_blank" rel="noreferrer"><FaGithub /></a>}
                                {project.website && 
                                    <a href={project.website} target="_blank" rel="noreferrer"><CgWebsite /></a>}

                            </div>
                        </div>
                    )
                })}
                </div>
        </div>
     );
}
 
export default Project;
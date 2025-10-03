// src/ProjectCard.jsx
import React from 'react';
import './Projects.css';
// Placeholder for a project image. You will need to replace this with your actual image path.
import projectImage from './images/Image.png'; 

const ProjectCard = ({ title, description }) => {
    return (
        <div className="project-card-container">
            <div className="project-card">
                <div className="project-image-container">
                    <img src={projectImage} alt={title} className="project-image" />
                </div>
                <div className="project-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <a href="#" className="learn-more-link">Learn More</a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
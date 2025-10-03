// src/ProjectCard.jsx
import React from 'react';
import './Projects.css';

// Import the project image and the background sheet image
import projectImage from './images/Image.png'; // Update with your project image path
import sheetBackground from './images/sheet.png'; // Make sure this path is correct

const ProjectCard = ({ title, description }) => {
    return (
        <div className="project-card">
            <div className="project-content-overlay">
                <div className="project-image-container">
                    <img src={projectImage} alt={title} className="project-image" />
                </div>
                <div className="project-text-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <a href="#" className="learn-more-link">Learn More</a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
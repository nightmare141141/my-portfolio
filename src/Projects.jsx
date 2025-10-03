// src/Projects.jsx
import React from 'react';
import ProjectCard from './projectCard';
import './Projects.css';
import projectImage from './images/Image.png'; // Make sure to use the correct path

const Projects = () => {
    return (
        <section className="projects-container">
            <h2 className="projects-title">My Projects</h2>
            <div className="project-grid">
                <ProjectCard
                    title="Spotify Mobile App"
                    description="Designed and implemented a fully functional website for Afghanistan Relief Alliance with Figma and webflow with more than one list"
                    projectImage={projectImage}
                />
                <ProjectCard
                    title="Spotify Mobile App"
                    description="Designed and implemented a fully functional website for Afghanistan Relief Alliance with Figma and webflow with more than one list"
                    projectImage={projectImage}
                />
                <ProjectCard
                    title="Spotify Mobile App"
                    description="Designed and implemented a fully functional website for Afghanistan Relief Alliance with Figma and webflow with more than one list"
                    projectImage={projectImage}
                />
                <ProjectCard
                    title="Spotify Mobile App"
                    description="Designed and implemented a fully functional website for Afghanistan Relief Alliance with Figma and webflow with more than one list"
                    projectImage={projectImage}
                />
                <ProjectCard
                    title="Spotify Mobile App"
                    description="Designed and implemented a fully functional website for Afghanistan Relief Alliance with Figma and webflow with more than one list"
                    projectImage={projectImage}
                />
            </div>
        </section>
    );
};

export default Projects;
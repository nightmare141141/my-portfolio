// src/Projects.jsx
import React from 'react';
import ProjectCard from './projectCard';
import './Projects.css';

const Projects = () => {
    return (
        <section className="projects-container">
            <h2>My Projects</h2>
            <div className="project-grid">
                <ProjectCard
                    title="Spotify Mobile App"
                    description="Designed and implemented a fully functional website for Afghanistan Relief Alliance with Figma and webflow with more than one list"
                />
                <ProjectCard
                    title="Spotify Mobile App"
                    description="Designed and implemented a fully functional website for Afghanistan Relief Alliance with Figma and webflow with more than one list"
                />
                <ProjectCard
                    title="Spotify Mobile App"
                    description="Designed and implemented a fully functional website for Afghanistan Relief Alliance with Figma and webflow with more than one list"
                />
                <ProjectCard
                    title="Spotify Mobile App"
                    description="Designed and implemented a fully functional website for Afghanistan Relief Alliance with Figma and webflow with more than one list"
                />
                <ProjectCard
                    title="Spotify Mobile App"
                    description="Designed and implemented a fully functional website for Afghanistan Relief Alliance with Figma and webflow with more than one list"
                />
            </div>
        </section>
    );
};

export default Projects;
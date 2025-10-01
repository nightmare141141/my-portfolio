import React from 'react';
import './App.css';
import profileImage from './image.png'; // Replace with your image path

const Diagram = () => {
    return (
        <main>
            <div className="profile-image">
                <img src={profileImage} alt="Mansour Naderi" />
            </div>
        </main>
    );
};

export default Diagram;
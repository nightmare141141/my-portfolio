// src/Diagram.js
import React from 'react';
import './App.css';
import profileImage from './images/Image.png'; 
import design from './images/design.png'; 
import clean from './images/clean.png'; 
import front from './images/front.png'; 
import sec from './images/sec.png'; 
import user from './images/user.png'; 

const Diagram = () => {
    return (
        <main className="diagram-container">
            <div className="small-block design-strategy">
                <img src={design} alt="Design" />
            </div>
            <div className="small-block privacy-security">
                <img src={sec} alt="Design" />
            </div>
            <div className="small-block user-friendly-design">
                <img src={user} alt="Design" />
            </div>
            <div className="small-block back-end">
                <img src={front} alt="Design" />
            </div>
            <div className="main-image-block">
                <img src={profileImage} alt="Mansour Naderi" />
            </div>
        </main>
    );
};

export default Diagram;
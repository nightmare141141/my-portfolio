// src/App.js
import React from 'react';
import Header from './Header';
import Diagram from './Diagram';
import Projects from './Projects'; // Import the new component
import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <Diagram />
      {/* The new section will be placed here */}
      <Projects />
    </div>
  );
}

export default App;
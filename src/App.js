import React from 'react';
import Header from './Header';
import Diagram from './Diagram';
import './App.css';
import Portfolio3D from './Portfolio3D';

function App() {
  return (
    <div className="container">
      <Header />
      <Diagram />
      <Portfolio3D />
    </div>
  );
}

export default App;
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">



      <header className="header">

        <p className="title"><span className="highlight">sean</span>concepcion</p>

        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item">Home</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Services</li>
            <li className="nav-item">Contact</li>
          </ul>
        </nav>

      </header>



      <div className="grid-container">
        <div className="grid-item">1</div>
        <div className="grid-item">2</div>
        <div className="grid-item">3</div>
        <div className="grid-item">4</div>
        <div className="grid-item">5</div>
      </div>



    </div>
  );
}

export default App;


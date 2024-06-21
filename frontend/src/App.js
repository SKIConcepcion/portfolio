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
        <div className="grid-item-1">
          <div className="grid-item-1-line"></div>
            <h4 className="grid-item-1-title"> About Me </h4>
          <div className="grid-item-1-container"></div>

          <div className="grid-item-3-line"></div>
            <h4 className="grid-item-3-title"> Contact </h4>
          <div className="grid-item-3-container"></div>
        </div>

        <div className="grid-item-2">
          <div className="grid-item-2-line"></div>
          <h4 className="grid-item-2-title"><span>MOBILE APP PROJECT</span>  Dito Nlng </h4>
          <div className="grid-item-2-container"></div>
        </div>

        
        <div className="grid-item-4">
          <div className="grid-item-4-line"></div>
          <h4 className="grid-item-4-title"><span>WEBSITE PROJECT</span> Brics </h4>
          <div className="grid-item-4-container"></div>

          
          <div className="grid-item-5-line"></div>
            <h4 className="grid-item-5-title"> Peronal Information </h4>
          <div className="grid-item-5-container"></div>
        </div>

        <div className="grid-item-6">
          <div className="grid-item-6-line"></div>
          <h4 className="grid-item-6-title"> Peronal Information </h4>
          <div className="grid-item-6-container"></div>
        </div>


      </div>



    </div>
  );
}

export default App;


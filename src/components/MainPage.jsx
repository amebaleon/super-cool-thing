import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css'; // Import a dedicated CSS file for MainPage

const MainPage = () => {
  return (
    <div className="main-page-container">
      <h1 className="main-title">
        <span className="split-text-char">W</span>
        <span className="split-text-char">e</span>
        <span className="split-text-char">l</span>
        <span className="split-text-char">c</span>
        <span className="split-text-char">o</span>
        <span className="split-text-char">m</span>
        <span className="split-text-char">e</span>
        <span className="split-text-char"> </span>
        <span className="split-text-char">t</span>
        <span className="split-text-char">o</span>
        <span className="split-text-char"> </span>
        <span className="split-text-char">O</span>
        <span className="split-text-char">u</span>
        <span className="split-text-char">r</span>
        <span className="split-text-char"> </span>
        <span className="split-text-char">S</span>
        <span className="split-text-char">u</span>
        <span className="split-text-char">p</span>
        <span className="split-text-char">e</span>
        <span className="split-text-char">r</span>
        <span className="split-text-char"> </span>
        <span className="split-text-char">C</span>
        <span className="split-text-char">o</span>
        <span className="split-text-char">o</span>
        <span className="split-text-char">l</span>
        <span className="split-text-char"> </span>
        <span className="split-text-char">S</span>
        <span className="split-text-char">i</span>
        <span className="split-text-char">t</span>
        <span className="split-text-char">e</span>
        <span className="split-text-char">!</span>
      </h1>
      <p className="main-subtitle">
        Experience the future of web applications.
      </p>
      <div className="info-section">
        <p>Discover innovative features and seamless user experiences.</p>
        <p>Join us on a journey to redefine digital interaction.</p>
      </div>
      <Link to="/login" className="main-button">
        Get Started
      </Link>
    </div>
  );
};

export default MainPage;

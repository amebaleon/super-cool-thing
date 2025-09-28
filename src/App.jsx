import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import LoginPage from './components/LoginPage';
import GoogleLoginPage from './components/GoogleLoginPage';
import Navbar from './components/Navbar'; // Import Navbar
import './App.css';

function App() {
  return (
    <>
      <Navbar /> {/* Render Navbar at the top */}
      <div className="content-area"> {/* Add a content area for styling */}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/google-login" element={<GoogleLoginPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

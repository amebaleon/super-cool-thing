import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css'; // Import dedicated CSS for LoginPage

const LoginPage = () => {
  return (
    <div className="login-page-container">
      <h1 className="login-title">Login</h1>
      <p className="login-subtitle">
        Please choose your login method.
      </p>
      <Link to="/google-login" className="google-login-button">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          alt="Google logo"
          className="google-logo"
        />
        Login with Google
      </Link>
    </div>
  );
};

export default LoginPage;
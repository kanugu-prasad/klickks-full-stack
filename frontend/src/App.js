import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [showRegister, setShowRegister] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/auth/me`, {
        withCredentials: true
      });

      if (response.data.authenticated) {
        setIsAuthenticated(true);
        setUser(response.data.user);
      }
    } catch (err) {
      console.error('Auth check failed:', err);
    }
  };

  const handleLogin = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
    setMessage('');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
    setMessage('');
  };

  const handleRegister = (message) => {
    setMessage(message);
    setShowRegister(false);
  };

  const switchToRegister = () => {
    setShowRegister(true);
    setMessage('');
  };

  const switchToLogin = () => {
    setShowRegister(false);
    setMessage('');
  };

  if (isAuthenticated) {
    return <Dashboard onLogout={handleLogout} />;
  }

  return (
    <div className="App">
      <div className="app-header">
        <h1>Klickks Authentication System</h1>
        <p>Secure login and registration with React & Node.js</p>
      </div>
      
      {message && (
        <div className="success-message">
          {message}
        </div>
      )}

      {showRegister ? (
        <Register 
          onRegister={handleRegister}
          onSwitchToLogin={switchToLogin}
        />
      ) : (
        <Login 
          onLogin={handleLogin}
          onSwitchToRegister={switchToRegister}
        />
      )}
    </div>
  );
}

export default App;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = ({ onLogout }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/auth/me', {
        withCredentials: true
      });

      if (response.data.authenticated) {
        setUser(response.data.user);
      } else {
        onLogout();
      }
    } catch (err) {
      console.error('Auth check failed:', err);
      onLogout();
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:5000/api/auth/logout', {}, {
        withCredentials: true
      });
      onLogout();
    } catch (err) {
      console.error('Logout failed:', err);
      // Still logout locally even if server request fails
      onLogout();
    }
  };

  if (loading) {
    return (
      <div className="dashboard-container">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <div className="dashboard-header">
          <h1>Welcome to Dashboard!</h1>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>
        
        <div className="dashboard-content">
          <div className="user-info">
            <h2>User Information</h2>
            <p><strong>Email:</strong> {user?.email}</p>
            <p><strong>User ID:</strong> {user?.id}</p>
          </div>
          
          <div className="dashboard-features">
            <h2>Features</h2>
            <div className="feature-grid">
              <div className="feature-card">
                <h3>🔐 Secure Authentication</h3>
                <p>Your session is protected with secure cookies</p>
              </div>
              <div className="feature-card">
                <h3>📊 User Dashboard</h3>
                <p>Access your personalized dashboard</p>
              </div>
              <div className="feature-card">
                <h3>🚀 Ready to Build</h3>
                <p>Add more features to your application</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

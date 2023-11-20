// Login.js
import React from 'react';
import './Lo.css';

const Lo = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Welcome to the Gardening Store</h2>
        {/* Input fields for email and password */}
        <input type="text" placeholder="Email" required />
        <input type="password" placeholder="Password" required/>
        <button><a href=''>Login</a></button>
      </div>
    </div>
  );
};

export default Lo;

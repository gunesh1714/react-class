// Login.js
import React from 'react';
import './login.css';

const Logingpage = () => {
  return (
    <div className="login-container">
      <h1>Login</h1>
      <form className="login-form">
        <div className="input-group">
          <input type="text" required />
          <label>Email</label>
        </div>
        <div className="input-group">
          <input type="password" required />
          <label>Password</label>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Logingpage;

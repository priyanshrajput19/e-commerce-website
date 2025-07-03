import React from "react";

const Login = () => (
  <div className="login-container">
    <form className="login-form">
      <h2>Login</h2>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" required />
      </div>
      <button className="login-btn" type="submit">Login</button>
    </form>
  </div>
);

export default Login; 
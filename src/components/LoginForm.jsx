import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css'; // <-- CSS file

function LoginForm()
{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) =>
  {
    e.preventDefault();
    navigate('/user-profile', {
      state: { email, password }
    });
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleSubmit}>
        <h2 className="title">Login</h2>

        <label>Email</label>
        <input
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />

        <label>Password</label>
        <input
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />

        <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;

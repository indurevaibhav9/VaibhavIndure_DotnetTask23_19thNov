import React, { useState } from 'react';
import './RegistrationForm.css';
import { useNavigate } from 'react-router-dom';

function RegistrationForm()
{
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) =>
  {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (event) =>
  {
    event.preventDefault();

    let validationErrors = {};

    if (!formData.name.trim())
    {
      validationErrors.name = "Name is required";
    }

    if (!formData.email.trim())
    {
      validationErrors.email = "Email is required";
    }

    if (formData.password.length < 6)
    {
      validationErrors.password = "Password must be at least 6 characters";
    }

    if (formData.password !== formData.confirmPassword)
    {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    // If any validation error
    if (Object.keys(validationErrors).length > 0)
    {
      setErrors(validationErrors);
      return;
    }

    // Clear errors
    setErrors({});

    // Show data in alert
    alert(
      `Registration Successful!\n\nName: ${formData.name}\nEmail: ${formData.email}\nPassword: ${formData.password}`
    );

    navigate('/user-profile', {
      state: { name: formData.name, email: formData.email }
    });
  };

  return (
    <div className="register-container">
      <form className="register-card" onSubmit={handleSubmit}>
        <h2 className="title">Register</h2>

        {/* Name */}
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          onChange={handleChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        {/* Email */}
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        {/* Password */}
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          onChange={handleChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}

        {/* Confirm Password */}
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          onChange={handleChange}
        />
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}

        <button type="submit" className="register-btn">
          Register
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;

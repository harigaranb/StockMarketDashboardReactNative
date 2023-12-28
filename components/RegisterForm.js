// components/RegisterForm.js
import React, { useState } from 'react';

const RegisterForm = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement registration logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Username:</label>
      <input type="text" name="username" value={formData.username} onChange={handleChange} />

      <label>Password:</label>
      <input type="password" name="password" value={formData.password} onChange={handleChange} />

      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;

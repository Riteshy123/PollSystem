import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // Import the external CSS file

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    password: ''
  });
  const [registered, setRegistered] = useState(false); // State to track registration status

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send POST request to register user
      await axios.post('http://localhost:5000/api/auth/register', formData);

      // Update state to indicate successful registration
      setRegistered(true);
    } catch (err) {
      // Handle registration error
      alert('Error registering user');
    }
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="container">
      {!registered ? (
        <form onSubmit={handleSubmit} className="form">
          <input name="name" placeholder="Name" onChange={handleChange} required />
          <input name="email" placeholder="Email" onChange={handleChange} required />
          <input name="phone" placeholder="Phone" onChange={handleChange} required />
          <select name="role" onChange={handleChange} required>
            <option value="">Select Role</option>
            <option value="Teacher">Teacher</option>
            <option value="Student">Student</option>
            <option value="Institute">Institute</option>
          </select>
          <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
          <button type="submit" className="button">Register</button>
        </form>
      ) : (
        <div>
          <p className="success-message">User registered successfully!</p>
          <button onClick={handleLogin} className="login-button">Login</button>
        </div>
      )}
    </div>
  );
};

export default Register;

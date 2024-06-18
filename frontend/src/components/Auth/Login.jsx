import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css'; // Import the external CSS file

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', formData);
      localStorage.setItem('token', response.data);
      console.log(gfgfgf);
      navigate('/dashboard');
    } catch (err) {
      alert('Error logging in');
    }
  };

  const handleSignUp = () => {
    navigate('/register');
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <input name="email" placeholder="Email" onChange={handleChange} className="input" required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} className="input" required />
        <button type="submit" className="button">Login</button>
        <p className="signUpText">Not registered? <Link to="/register" className="signUpLink">Sign Up</Link></p>
      </form>

    </div>
  );
};

export default Login;

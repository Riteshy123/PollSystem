import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreatePoll = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    question: '',
    options: '',
    targetRole: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await axios.post('http://localhost:5000/api/polls/create', formData, {
        headers: { 'Authorization': token }
      });
      alert('Poll created');
      navigate('/dashboard');
    } catch (err) {
      alert('Error creating poll');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="question" placeholder="Poll Question" onChange={handleChange} required />
      <input name="options" placeholder="Options (comma separated)" onChange={handleChange} required />
      <select name="targetRole" onChange={handleChange} required>
        <option value="">Select Target Role</option>
        <option value="Teacher">Teacher</option>
        <option value="Student">Student</option>
      </select>
      <button type="submit">Create Poll</button>
    </form>
  );
};

export default CreatePoll;

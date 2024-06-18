import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Dashboard from './components/Dashboard/Dashboard';
import CreatePoll from './components/Dashboard/CreatePoll';
import PollList from './components/Dashboard/PollList';

function App() {
  return (
    
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-poll" element={<CreatePoll />} />
        <Route path="/polls" element={<PollList />} />
      </Routes>
   
  );
}

export default App;

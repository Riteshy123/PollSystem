import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="/create-poll">Create Poll</Link>
      <Link to="/polls">View Polls</Link>
    </div>
  );
};

export default Dashboard;

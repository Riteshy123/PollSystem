import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PollList = () => {
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    const fetchPolls = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/api/polls', {
        headers: { 'Authorization': token }
      });
      setPolls(response.data);
    };

    fetchPolls();
  }, []);

  return (
    <div>
      <h1>Polls</h1>
      <ul>
        {polls.map(poll => (
          <li key={poll._id}>{poll.question}</li>
        ))}
      </ul>
    </div>
  );
};

export default PollList;

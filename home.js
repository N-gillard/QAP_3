
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Welcome to Feedback App</h2>
      <Link to="/feedbacks">See Feedbacks</Link>
    </div>
  );
};

export default Home;


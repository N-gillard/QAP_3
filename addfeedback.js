
import React from 'react';
import { Link } from 'react-router-dom';

const AddFeedback = () => {
  const handleAddFeedback = () => {
  };

  return (
    <div>
      <h2>Add Feedback</h2>
      <button onClick={handleAddFeedback}>Add New Feedback</button>
      <Link to="/feedbacks">Back to Feedbacks</Link>
    </div>
  );
};

export default AddFeedback;


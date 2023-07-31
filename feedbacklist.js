
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/feedbacks')
      .then((response) => response.json())
      .then((data) => {
        setFeedbacks(data);
      })
      .catch((error) => {
        console.error('Error fetching feedbacks:', error);
      });
  }, []);

  return (
    <div>
      <h2>Feedback List</h2>
      <ul>
        {feedbacks.map((feedback) => (
          <li key={feedback.id}>
            {feedback.text} - Rating: {feedback.rating}
          </li>
        ))}
      </ul>
      <Link to="/add">Add Feedback</Link>
    </div>
  );
};

export default FeedbackList;


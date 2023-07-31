function fetchFeedbacks() {
    fetch('http://localhost:3000/feedbacks')
      .then((response) => response.json())
      .then((data) => {
        console.log('All feedbacks:', data);
      })
      .catch((error) => {
        console.error('Error fetching feedbacks:', error);
      });
  }
  
  function addFeedback(newFeedback) {
    fetch('http://localhost:3000/feedbacks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('New feedback added:', data);
      })
      .catch((error) => {
        console.error('Error adding new feedback:', error);
      });
  }
  
  function updateFeedback(feedbackId, updatedFeedback) {
    fetch(`http://localhost:3000/feedbacks/${feedbackId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedFeedback),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Feedback updated:', data);
      })
      .catch((error) => {
        console.error('Error updating feedback:', error);
      });
  }

  function deleteFeedback(feedbackId) {
    fetch(`http://localhost:3000/feedbacks/${feedbackId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          console.log('Feedback deleted successfully');
        } else {
          console.error('Failed to delete feedback');
        }
      })
      .catch((error) => {
        console.error('Error deleting feedback:', error);
      });
  }
  
  const newFeedback = {
    text: "New feedback item",
    rating: 7,
  };
  
  fetchFeedbacks();
  addFeedback(newFeedback);
  updateFeedback(1, { text: "Updated feedback item", rating: 10 });
  deleteFeedback(2);

import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import FeedbackList from './components/FeedbackList';
import AddFeedback from './components/AddFeedback';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/feedbacks">Feedbacks</Link>
            </li>
            <li>
              <Link to="/add">Add Feedback</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/feedbacks" component={FeedbackList} />
          <Route path="/add" component={AddFeedback} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

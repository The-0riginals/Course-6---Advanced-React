import './App.css';
import { useState } from 'react';

function App() {
  // This is a stateful component
  const [score, setScore] = useState("10"); // Default value is 10
  const [comment, setComment] = useState(""); // Default value is empty string

  const handleSubmit = (e) => {
    e.preventDefault();

    // create a notification if the score is low and the comment is short for the user to provide more details
    if (Number(score) <= 5 && comment.length <= 10) {
      alert("Please provide a comment explaining why the experience was poor.");
      return;
    }

    console.log("Form submitted");
    setComment(""); // Clear the input fields after the form is submitted
    setScore("10"); // Reset the score to 10
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Feedback form</h2>
          <div className="Field"> {/*Field for score*/}
            <label>Score: {score} ⭐️</label>
            <input 
              type="range"  // This is a slider input
              min="0" 
              max="10"
              value={score} 
              onChange={e => setScore(e.target.value)}
            />
          </div>
          <div className="Field"> {/*Field for comment*/}
            <label>Comment:</label>
            <textarea value={comment} onChange={e => setComment(e.target.value)} />
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;

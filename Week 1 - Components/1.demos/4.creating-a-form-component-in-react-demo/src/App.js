import { useState } from "react";
import './App.css';

function App() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default HTML form behavior (refresh the page to clear the form)
    setName(""); // Clear the input fields after the form is submitted

    console.log('Form submitted!');
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="Field">
            <label htmlFor="name">Name:</label> {/* // htmlFor is the same as for in HTML */}
            <input 
              id="name"
              type="text" 
              placeholder="Name holder" 
              name="name" 
              
              // hook up the local state to the input field
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
          </div>
          <div className="Field">
             <label htmlFor="age"> Age: </label>  {/*test*/}
          </div>
          <button disabled={!name} type="submit">Submit</button>{/* // Disable the button if the name is empty */}
        </fieldset>
      </form>
    </div>
  );
}

export default App;

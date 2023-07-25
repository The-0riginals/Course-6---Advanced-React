import React from 'react';
import './App.css';

function App() {
  const [toggle, setToggle] = React.useState(false);

  const clickHandler = () => {
    setToggle(!toggle); // toggle the value of toggle; toggle: switch between two states
  }

  React.useEffect(() => {
    document.title = toggle ? "Welcome to Little Lemon" : "Using the useEffect hook"
  }, [toggle]); // only run (render) this effect if toggle changes

  return (
    <div>
      <h1>Using the useEffect hook</h1>
      <button onClick={clickHandler}>
        Toggle message
      </button>
      {toggle && <h2>Welcome to Little Lemon</h2>}
      <p>Click the button to toggle the message and take a look at title web</p>
    </div>
  )
}

export default App;

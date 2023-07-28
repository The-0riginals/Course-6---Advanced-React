import './App.css';
import {useState, useEffect} from 'react';

// HOC---
/**
 * Note that "with" in the HOC's name is a general convention recommended by React
 * since it expresses the enhancing nature of the technique, 
 * like providing a component with something else
 */
const withMousePosition = (WrappedComponent) => {
  return (props) => {

    const [mousePosition, setMousePosition] = useState({
      x: 0,
      y: 0,
    })

    // useEffect is a hook that allows you to perform side effects in function components
    useEffect(() => {
      const handleMousePositionChange = (e) => { 
        setMousePosition({ // setMousePosition is a function that updates the state
          x: e.clientX,
          y: e.clientY,
        });
      };

      window.addEventListener("mousemove", handleMousePositionChange); // addEventListener is a function that adds an event listener to the window object

      return () => {
        window.removeEventListener("mousemove", handleMousePositionChange); // removeEventListener is a function that removes an event listener from the window object
      };
    }, []);

    return <WrappedComponent {...props} mousePosition={mousePosition} /> // {...props} is a spread operator that passes all props to the WrappedComponent
  };
};
// ---HOC

// Components without HOC---
const PanelMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) {
    return null;
  }
  return (
    <div className="BasicTracker">
      <p>Mouse position:</p>
      <div className="Row">
        <span>x: {mousePosition.x}</span>
        <span>y: {mousePosition.y}</span>
      </div>
    </div>
  );
};

const PointMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) {
    return null;
  }
  return (
    <p>
      ({mousePosition.x}, {mousePosition.y})
    </p>
  );
}
// ---Components without HOC

// Components with HOC---
const PanelMouseTracker = withMousePosition(PanelMouseLogger);
const PointMouseTracker = withMousePosition(PointMouseLogger);
// ---Components with HOC


function App() {
  return (
    <div className="App">
      <header className="Header">Little Lemon Restaurant 🍕</header>
      <PanelMouseTracker />
      <PointMouseTracker />
    </div>
  );
}

export default App;

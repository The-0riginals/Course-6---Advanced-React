import * as React from "react";
import './App.css';

const Row = ({ children, spacing }) => {

  const childStyle = {
    marginLeft: `${spacing}px`,
  };

  return (
    <div className="Row">
      {React.Children.map(children, (child, index) => { 
        return React.cloneElement(child, { // this is to clone the child and add the style prop to it
          style: {
            ...child.props.style, // this is to preserve the style prop that might be passed to the child
            ...(index > 0 ? childStyle : {}), // this is to add the marginLeft style to all children except the first one
          }
        });
      })}
    </div>
  );
};

function LiveOrders() {
  return (
    <div className="App"> 
    {/* The Row component is used to render a row of data. It takes a spacing prop that determines the spacing between the children. */}
      <Row spacing={52}>
        <p>Pizza Margarita</p> 
        <p>2</p>
        <p>30$</p>
        <p>18:30</p>
        <p>John</p>
      </Row>
    </div>
  );
}

export default LiveOrders;

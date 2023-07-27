import * as React from "react";
import "./styles.css";

export const RadioGroup = ({ onChange, selected, children }) => {
  // Use React.Children.map and React.cloneElement to clone the children
  // and pass the correct props to each RadioOption
  const RadioOptions = React.Children.map(children, (child) => 
    React.cloneElement(child, {
        onChange: onChange, // this is to pass the onChange prop to the child
        checked: child.props.value === selected, // this is to check if the child's value is equal to the selected value
    })
    );
  return <div className="RadioGroup">{RadioOptions}</div>;
};

export const RadioOption = ({ value, checked, onChange, children }) => {
  // Hook up the onChange handler to call the onChange prop passed to RadioGroup
  // Also, make sure to pass the correct checked prop to the input element

  return (
    <div className="RadioOption">
      <input 
        id={value} 
        type="radio" 
        name={value}  
        value={value} // this is to pass the value prop to the input element
        checked={checked} 
        onChange={(e) => { // this is to pass the onChange prop to the input element
            onChange(e.target.value);
        }}
      />
      <label htmlFor={value}>{children}</label>
    </div>
  );
};

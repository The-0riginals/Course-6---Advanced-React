import './App.css';
import React, {useState} from 'react';

//The button uses the children prop to specify its text content.
const Button = ({ children, backgroundColor,onClick }) => {
  return <button style={{ backgroundColor }} onClick={onClick}>{children}</button>;
};

const Alert = ({ children , onClose}) => { 
  // the alert is a generic box that renders an overlay in the background and a white modal in the center of the screen
  //. The children prop determines the content of that modal.
  return (
    <>
      <div className="Overlay" onClick={onClose} /> {/* this class is used to style the background */}
      <div className="Alert">{children}</div> 
    </>
  );
};

const DeleteButton = ({ onDeleteClick }) => {
  return <Button backgroundColor="red" onClick={onDeleteClick}>Delete</Button>
}

function App() {
  // add a state variable to control whether the alert is shown or not
  const [showAlert, setShowAlert] = useState(true);
  const handleDeleteClick = () => {
    setShowAlert(false);
  };
  return (
    <div className="App">
      <header>Little Lemon Restaurant 🍕</header>
      {showAlert && (
      <Alert onClose={()=>setShowAlert(false)}>
        <h4>Delete Account</h4> {/* children */ }
        <p>
          Are you sure you want to proceed? You will miss all your delicious 
          recipes!
        </p> {/* children */}
        <DeleteButton onDeleteClick={handleDeleteClick} /> {/* children */}
      </Alert>
      )}
    </div>
  );
}

export default App;

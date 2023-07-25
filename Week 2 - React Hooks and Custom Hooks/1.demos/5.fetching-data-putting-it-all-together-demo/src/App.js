import React from "react";

function App() {
  const [user, setUser] = React.useState([]);

  // the fetchData function initially fetches data from the randomuser.me API,
  // next it retrieves a response from the API in JSON format,
  // and finally updates the state variable with the returned data. 
  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=2")
      .then(response => response.json())
      .then(data => setUser(data)); // update the state variable
  }

  React.useEffect(() => {
    fetchData();
  }, []);// only run this effect once, when the component first renders

  //OBJECT.KEYS() returns an array of a given object's own enumerable property names
  return Object.keys(user).length > 0 ? ( // if user is not empty
    <div>
      <h1>Data returned</h1>
      <h2>First Name: {user.results[0].name.first}</h2>
      <h2>Last Name: {user.results[0].name.last}</h2>
      <h2>Location: {user.results[0].location.city} city</h2>
    </div>
  ) : (
    <h1>Data pending...</h1>
  );
}

export default App;

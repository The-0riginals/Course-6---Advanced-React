import './App.css';
import { useEffect, useState } from "react";

const DataFetcher = ({ render, url }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (url.includes("desserts")) {
      setData(["cake", "ice cream", "pie", "brownie"]);
    } else {
      setData(["water", "soda", "juice"]);
    }
  }, [url]);

  return render(data); // render is a function that returns a component, so we can pass data to it
};

const DessertsCount = () => {
  return (
    <DataFetcher  
      url="https://littlelemon/desserts"
      //render={(data) => <p>{data.length} desserts</p>}

      //print the data in the console 
      render={(data) => {
        //console.log(data);
        data.forEach((element) => {
          console.log(element);
        });
        return <p>{data.length} desserts</p>;
      }}
    />
  );
};

const DrinksCount = () => {
  return (
    <DataFetcher 
      url="https://littlelemon/drinks"
      //render={(data) => <h3>{data.length} drinks</h3>}

      //print the data in the screen
       render={(data) => {
        return (
          <div>
            {data.map((element) => {
              return <p>{element}</p>;
            })}
          </div>
        );
      }}
    
    />
  );
};

function App() {
  return (
    <div className="App">
      <header className="Header">Little Lemon Restaurant 🍕</header>
      <DessertsCount />
      <DrinksCount />
    </div>
  );
}

export default App;

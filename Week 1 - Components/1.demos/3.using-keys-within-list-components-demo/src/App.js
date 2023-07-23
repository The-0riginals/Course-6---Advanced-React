import './index.css';
import {useState} from "react";

const ToDo = props => ( // This is a stateless component
  <tr> {/*// This is a table row(tr)*/}
    <td> {/*// This is a table data (td) cell*/} 
      <label>{props.id}</label>
    </td>
    <td>
      <input />{/*// This is an input receive from user */}
    </td>
    <td>
      <label>{props.createdAt}</label>
    </td>
  </tr>
);

function App() { 
  // This is a stateful component
  const [todos, setTodos] = useState([{
    id: 'todo1',
    createdAt: '18:00',
  }, {
    id: 'todo2',
    createdAt: '20:30',
  }]);


  const reverseOrder = () => {
    // Reverse is a mutative operation, so we need to create a new array first.
    setTodos([...todos].reverse());  // This is a shallow copy of the array. React ES6 Spread Operator(...)
  }

  // First example with keys, show browser console to see the warning.
  return (
    <div>
      <button onClick={reverseOrder}>Reverse</button>
      <table>
        <tbody>
          {todos.map((todo, index) => (
            
            // if you use key={index}, the key will remain the same when the list is reversed.
            // index is not a good key because If the order of items may change, that can negatively impact performance and may cause issues with component state. 
            <ToDo key={todo.id} id={todo.id} createdAt={todo.createdAt} />  // This is a stateless component with props
          
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

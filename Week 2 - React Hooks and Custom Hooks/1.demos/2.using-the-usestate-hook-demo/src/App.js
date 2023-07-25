import React from "react";

function GoalForm(props) {
    const [formData, setFormData] = React.useState({goal: "", by: ""});

    function changeHandler(e) {
        // shallow copy of formData, then update the property that changed
        // e.target.name is the name of attributes that changed "goal" or "by"
        // e.target.value is the value of the input that changed "what was typed in"
        //console.log(e.target.value);
        setFormData({ ...formData, [e.target.name]: e.target.value }); 
        //[] is a computed property name
    }

    function submitHandler(e) {
        e.preventDefault();
        props.onAdd(formData); // call the onAdd function
        setFormData({ goal: "", by: "" }); // reset the form
    };

    return (
        <>
            <h1>My Little Lemon Goals</h1>
            <form onSubmit={submitHandler}>
                <input type="text" name="goal" placeholder="Goal" value={formData.goal} onChange={changeHandler} />
                <input type="text" name="by" placeholder="By..." value={formData.by} onChange={changeHandler} />
                <button>Submit Goal</button>
            </form>
        </>
    );
}

function ListOfGoals(props) {
    return (
        <ul>
            {/* create a list item for each goal */}
            {props.allGoals.map((g) => (  
                <li key={g.goal}>
                    {/* loop through each goal and display it */}
                    <span>My goal is to {g.goal}, by {g.by}</span>
                </li>
            ))}
        </ul>
    );
}

export default function App() {
    const [allGoals, updateAllGoals] = React.useState([]);

    // add a new goal to the list of goals : shallow copy of allGoals, then add the new goal
    function addGoal(goal) { updateAllGoals([...allGoals, goal]); }

    return (
        <div className="App">
            <GoalForm onAdd={addGoal} />
            <h3>goal should be different cuz it's the key</h3>
            <ListOfGoals allGoals={allGoals} />
        </div>
    );
}
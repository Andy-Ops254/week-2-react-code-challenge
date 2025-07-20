// import React , {useState, useEffect} from 'react'



function GoalLists  ({goals, onDelete})  {
    // return (<div>This is working</div>)
    // const[goals, setGoals]= useState([])

  //Get request
    // useEffect(()=> {
    // fetch("http://localhost:3000/goals")
    // .then (resp =>resp.json())
    // .then(Data => setGoals(Data)) //remember to update state
    // },[])

//everything sent to APP and then this displays the changes

return (
    <div>
        <h1>SAVINGS GOAL LIST</h1>
        {goals.length===0 ? 
        <p>WEKA KITU MSEE !</p> :
        <ol>
            {goals.map((goal) => (
                <li key={goal.id}>
                    <h3> {goal.name}</h3>
                    <p>Target :{goal.targetAmount}</p>
                    <p>saved :{goal.savedAmount}</p>
                    <p>category :{goal.category}</p>
                    <p>deadline :{goal.deadline}</p>
                    <p>createdAt :{goal.createdAt}</p>
                    <button onClick={() =>onDelete(goal.id)}>Delete</button>
                    <button> Edit </button>
                </li>
            ))}
        </ol>}
    </div>
)
}

export default GoalLists
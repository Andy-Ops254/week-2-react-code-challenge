import React , {useState, useEffect} from 'react'



function GoalLists  ()  {
    // return (<div>This is working</div>)
    const[goals, setGoals]= useState([])

  //Get request
    useEffect(()=> {
    fetch("http://localhost:3000/goals")
    .then (resp =>resp.json())
    .then(Data => setGoals(Data)) //remember to update state
    },[])

    function handleDelete (goalId) {
        // console.log ("makosa")
        fetch(`http://localhost:3000/goals/${goalId}`,{
        method: "DELETE"
        })
        .then(resp => resp.json())
        .then(() => console.log("dlete!")) 
            setGoals(goals.filter(goal => goal.id !==goalId))
    }

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
                    <button onClick={() =>handleDelete(goal.id)}>Delete</button>
                </li>
            ))}
        </ol>}
    </div>
)
}

export default GoalLists
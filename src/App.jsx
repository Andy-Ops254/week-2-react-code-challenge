import React ,{useState} from "react"
import Form from "./component/ Form"
import GoalLists from "./component/GoalLists"

function App() {
  const[newGoal, setGoals]=useState([])


  function handleNewGoal (newGoal){
    setGoals( [...goals, newGoal])
  }


    function handleSubmit(e){
    e.preventDefault()
console.log("finya apo")
    console.log("name", name)
    console.log("target", target)
    console.log("saved", saved)
    console.log("category", category)
    console.log("deadline", deadline)
    console.log("createdAt", createdAt)

    const newData= {
    name:name,
    targetAmount: target,
    savedAmount:saved,
    category:category,
    deadline:deadline,
    createdAt:createdAt,
}

    //Fetch request
    fetch("http://localhost:3000/goals", {
        method: "POST",
        headers :{
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(newData)// converts to object strings
    })
    .then(res => res.json())
    .then(Data => onAddGoal(Data)) //remember to update state after display
    
}

  return (
    <div> 
      <h1>SMART GOAL PLANNER</h1>
      <h2>Be Financially Disciplined</h2>
      <Form  onAddGoal={handleNewGoal} goals={goals}/>
      <GoalLists />
      </div>
    // goals data props so it can display on goalslists
      

      
    
      
  )
}

export default App

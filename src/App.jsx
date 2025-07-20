import React ,{useState} from "react"
import Form from "./component/ Form"
import GoalLists from "./component/GoalLists"

function App() {
  const[goals, setGoals]=useState([])

  


  function handleNewGoal (newGoal){
    setGoals( [...goals, newGoal])
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

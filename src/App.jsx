import React ,{useState, useEffect} from "react"
import Form from "./component/ Form"
import GoalLists from "./component/GoalLists"
import Nav from "./nav"
import Footer from "./component/footer"
function App() {

  const[goals, setGoals]=useState([])

//Get so as to tell server we need to display data
  useEffect (()=> {
    fetch("http://localhost:3000/goals")
    .then(res => res.json())
    .then(Data => setGoals(Data))
  },[])


  function handleNewGoal (newGoal){
    setGoals( [...goals, newGoal])
  }

  function handleDelete (goalId) {
        // console.log ("makosa")
        fetch(`http://localhost:3000/goals/${goalId}`,{
        method: "DELETE"
        })
        .then(resp => resp.json())
        .then(() => {
        // console.log("delete!")            
        setGoals(goals.filter(goal => goal.id !==goalId))
    })
    }

  return (
    <div> 
      <Nav />
      <h1 className="font-bold text-center font-serif text-4xl my-4">SMART GOAL PLANNER</h1>
      <h2 className="font-semibold text-center text-3xl overline">Be Financially Disciplined</h2>
      <Form  onAddGoal={handleNewGoal} />
      <GoalLists  goals={goals} onDelete={handleDelete}/>
      <Footer />
      </div>
    // goals data props so it can display on goalslists
      

      
    
      
  )
}

export default App

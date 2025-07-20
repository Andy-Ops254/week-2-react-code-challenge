import React, {useState, useEffect} from "react"
import Form from "./component/ Form"

function App() {
  const[newItem, setNewItem]= useState([])

  //Get request
  useEffect(()=> {
    fetch("http://localhost:3000/goals")
    .then (resp =>resp.json())
    .then(Data => console.log(Data)) //remember to update state
  })

  // function handleNewItem (newItem){
  //   setNewItem( newItem)

  // }

  return (
    <div> 
      <h1>SMART GOAL PLANNER</h1>
      <h2>Be Financially Disciplined</h2>
      <Form  />
      </div>

      

      
    
      
  )
}

export default App

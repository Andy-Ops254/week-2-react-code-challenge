import React, {useState} from "react"
import Form from "./component/ Form"

function App() {
  const[newItem, setNewItem]= useState("")

  function handleNewItem (newItem){
    setNewItem( newItem)

  }

  return (
    <div> 
      <h1>SMART GOAL PLANNER</h1>
      <h2>Be Financially Disciplined</h2>
      <Form  onAddItem={handleNewItem}/>
      </div>

      

      
    
      
  )
}

export default App

import React , {useState, useEffect} from 'react'


function GoalLists  ()  {
    const[newItem, setNewItem]= useState([])

  //Get request
    useEffect(()=> {
    fetch("http://localhost:3000/goals")
    .then (resp =>resp.json())
    .then(Data => console.log(Data)) //remember to update state
    })

return (
    <div>
        <h1>SAVINGS GOAL LIST</h1>
        {GoalLists.length===0 ? 
        <p>WEKA KITU MSEE !</p> :
        <ol>
            
        </ol>}
    </div>
)
}

export default GoalLists
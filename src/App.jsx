import React from "react"

function App() {

  return (
    <>
      <h1>SMART GOAL PLANNER</h1>
      <h2>Be Financially Disciplined</h2>
      <div>
      <form className="Savings">
        <label for="name"></label>

        <input type="text" name="Name" placeholder="Name"/>

        <input type="number"  name="target" placeholder="Target Amount"/>

        <select name="category">
          <option>Electronics</option>
          <option>Travel</option>
          <option>Retirement</option>
          <option>Education</option>
          <option>Emergency</option>
          <option>Home</option>
          <option>Shopping</option>
          <option>vehicle</option>
          <option>Real Estate</option>
        </select>

        <input type= "number" name ="saved" placeholder="saved Amount" />
        <input type="date" name="date" placeholder="Created At" />
        <input type="date"  name="date"  placeholder="deadline"/>


        

      </form>

        
      </div>
      </>
      
  )
}

export default App

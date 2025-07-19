import React from "react"

function App() {

  return (
    <>
      <h1>SMART GOAL PLANNER</h1>
      <h2>Be Financially Disciplined</h2>
      <div>
      <form className="Savings">
      
      <label>
        Name :
        <input type="text" name="Name" placeholder="Name"/>
      </label>
        
        <label>
        Target Amount :
        <input type="number"  name="target" placeholder="Target Amount"/>
        </label>

        <label>
          Category
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
        </label>

        <label>
          Saved Amount : 
        <input type= "number" name ="saved" placeholder="saved Amount"></input>
        </label>

        <label>Created At :
        <input type="date" name="date" placeholder="Created At" />
        </label>

        <label>
          Deadline :
        <input type="date"  name="date"  placeholder="deadline"/>
        </label>
        <button>Submit</button>
      </form>

        
      </div>
      </>
      
  )
}

export default App

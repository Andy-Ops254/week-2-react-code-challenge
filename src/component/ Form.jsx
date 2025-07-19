import React, {useState} from 'react'


function  Form () {
    const[name, setName]=useState("")
    const[target, setTarget]= useState(0)
    const[saved, setSaved]=useState(0)
    const[category, setCategory]= useState("Electronics")
    const[deadline, setDeadline]=useState("")
    const[createdAt, setCreatedAt]= useState("")

    console.log;{"weeeeeeee"}
    


    function handleSubmit(e){
    e.preventDefault()
console.log("finaya apo")
    console.log("name", name)
    const newData= {
    name:name,
    targetAmount: target,
    savedAmount:saved,
    category:category,
    deadline:deadline,
    createdAt:createdAt,
}
console.log(newData);
}
    return (
    <div>
    <form>
        <label>
        Name :
        <input type="text" name="Name" placeholder="Name" onChange={(e)=> setName(e.target.value)}/>
        </label>
        
        <label>
        Target Amount :
        <input type="number"  name="target" placeholder="Target Amount" o/>
        </label>

        <label>
        Category
        <select name="category">
        <option value="Electronics">Electronics</option>
        <option value= "travel">Travel</option>
        <option value="Retirement">Retirement</option>
        <option value="Education">Education</option>
        <option value="Emergency">Emergency</option>
        <option value="Home">Home</option>
        <option value="Shopping">Shopping</option>
        <option value="vehicle">vehicle</option>
        <option value="Real Estate">Real Estate</option>
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

        <button>
    Submit
    </button>
        
    </form>
    </div>

    
    )
}

export default  Form
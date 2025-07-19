import React, {useState} from 'react'


function  Form () {
    const[name, setName]=useState("")
    const[target, setTarget]= useState(0)
    const[saved, setSaved]=useState(0)
    const[category, setCategory]= useState("Electronics")
    const[deadline, setDeadline]=useState("")
    const[createdAt, setCreatedAt]= useState("")

    console.log; ("weeeeeeee")
    


    function handleSubmit(e){
    e.preventDefault()
console.log("finya apo")
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
    //Fetch request
    fetch("http://localhost:3000/goals", {
        method: "POST",
        headers :{
            "Content-Type": "application.json",
            "Accept": "application.json"
        },
        body: JSON.stringify(newData)// converts to object strings
    })
    .then(res => res.json())
    .then(Data => console.log (Data))
    
}
    return (
    <div>
    <form onSubmit={handleSubmit}> 
        <label>
        Name :
        <input type="text" value={name} placeholder="Name" onChange={(e)=> setName(e.target.value)}/>
        </label>
        
        <label>
        Target Amount :
        <input type="number"  value={target} placeholder="Target Amount" onChange={(e) => setTarget(e.target.value)}/>
        </label>

        <label>
        Category
        <select name="category" onChange={(e)=> setCategory(e.target.value)}>
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
        <input type= "number" value={saved} placeholder="saved Amount" onChange={(e)=> setSaved(e.target.value)}></input>
        </label>

        <label>Created At :
        <input type="date" value={createdAt} placeholder="Created At" onChange={(e) =>setCreatedAt(e.target.value)} />
        </label>

        <label>
        Deadline :
        <input type="date"  value={deadline}  placeholder="deadline" onChange={(e) => setDeadline(e.target.value)}/>
        </label>

        <button>
    Submit
    </button>
        
    </form>
    </div>

    
    )
}

export default  Form
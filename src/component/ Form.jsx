import React, {useState} from 'react'


function  Form ({onAddGoal}) {
    const[name, setName]=useState("")
    const[target, setTarget]= useState(0)
    const[saved, setSaved]=useState(0)
    const[category, setCategory]= useState("Electronics")
    const[deadline, setDeadline]=useState("")
    // const[newItem, setNewItem]=useState ()
    const[createdAt, setCreatedAt]= useState("")


    // console.log; ("weeeeeeee")
    
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
    .then(Data =>{
                onAddGoal(Data),
                clearForm()
    } 
    ) //remember to update state after display

    //clear form logic
    function clearForm() {
        setName("")
        setCategory("Electronics")
        setCreatedAt("")
        setDeadline("")
        setTarget("")
        setSaved("")
    }
    
}


    return (
    <div className='h-vh  flex items-center justify-center p-4 '>

    <form onSubmit={handleSubmit}className='w-full max-w-lg bg-[#1DCD9F] rounded-lg shadow-lg shadow-green-400  p-8'>

    <h2 className='font-bold text-black text-center font-serif text-2xl mb-8'>SAVE TOWARDS YOUR FUTURE!!</h2>

        <div className='space-y-6'>
        
        <div>
        <label className='block text-md font-medium mb-2 text-black'>
        Name  :
        <input type="text" value={name} placeholder="Name" onChange={(e)=> setName(e.target.value)}
        className='w-full px-3 py-2 border border-none rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent'
        />
        </label>
        </div>
        
        <div>
        <label className='block text-md font-medium mb-2 text-black'>
        Target Amount  : 
        <input type="number"  value={target} placeholder="Target Amount" onChange={(e) => setTarget(e.target.value)}
        className='w-full px-3 py-2 border border-none rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent'
        />
        </label>
        </div>

        <div>
        <label className='block text-md font-medium mb-2 text-black'> 
        Category  :
        </label>
        <select name="category" onChange={(e)=> setCategory(e.target.value)}
        className='w-full px-3 py-2 border border-none rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-black'
        >
        <option value="ALl" className='text-black' >All</option>
        <option value="Electronics" className='text-black'>Electronics</option>
        <option value= "travel" className='text-black'>Travel</option>
        <option value="Retirement" className='text-black'>Retirement</option>
        <option value="Education" className='text-black'>Education</option>
        <option value="Emergency" className='text-black'>Emergency</option>
        <option value="Home" className='text-black'>Home</option>
        <option value="Shopping" className='text-black'>Shopping</option>
        <option value="vehicle" className='text-black'>vehicle</option>
        <option value="Real Estate" className='text-black'>Real Estate</option>
        </select>
        </div>

        <div>
        <label className='block text-md font-medium mb-2 text-black'>
        Saved Amount  :
        </label>
        <input type= "number" value={saved} placeholder="saved Amount" onChange={(e)=> setSaved(e.target.value)}
        className='w-full px-3 py-2 border border-none rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border- text-black'
        ></input>
        </div>

        <div>
        <label className='block text-md font-medium mb-2 text-black'>
            Created At  :
        </label>
        <input type="date" value={createdAt} placeholder="Created At" onChange={(e) =>setCreatedAt(e.target.value)} 
        className='w-full px-3 py-2 border border-none rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-black'
        />
        </div>

        <div>
        <label className='block text-md font-medium mb-2 text-black'>
        Deadline  :
        </label>
        <input type="date"  value={deadline}  placeholder="deadline" onChange={(e) => setDeadline(e.target.value)}
        className='w-full px-3 py-2 border border-none rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-black'
        />
        </div>

        <button
        className="w-full"

        >
    Submit
    </button>
            </div>

    </form>
    </div>

    
    )
}

export default  Form
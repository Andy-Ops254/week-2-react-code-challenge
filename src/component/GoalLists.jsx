import React , {useState, useEffect} from 'react'



function GoalLists  ({goals, onDelete})  {
    // return (<div>This is working</div>)
    // const[goals, setGoals]= useState([])
    const[editId, setEditId]=useState(null) //thesse state help in tracking the goal being tracked and saved
    const[saveEdit, SetSaveEdit]=useState("")

  //Get request
    // useEffect(()=> {
    // fetch("http://localhost:3000/goals")
    // .then (resp =>resp.json())
    // .then(Data => setGoals(Data)) //remember to update state
    // },[])

//everything sent to APP and then this displays the changes

return (
    <div className='max-w-7xl mx-auto px-8 py-8'>
        <h2 className='font-extrabold font-serif text-3xl my-8 text-center'>SAVINGS GOAL LIST</h2>
        {goals.length===0 ? 
        <p className='text-center font-extrabold font-serif font text-red-700 text-3xl'>WEKA KITU MSEE !</p> :
        <div className= 'grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {goals.map((goal) => (
                <div key={goal.id}
                className='bg-[#1DCD9F] rounded-lg hover:shadow-lg shadow-green-400 transition-shadow duration-150 cursor-grabbing p-8 flex flex-col'
                >
                    <h3 className='mb-4 text-center font-bold font-serif text-xl'> {goal.name}</h3>
                    <div className='space-y-3 font-semibold'>
                    <p>Target:<span className='ml-4'>{goal.targetAmount}</span></p>
                    <p>saved:<span className='ml-4'>{goal.savedAmount}</span></p>
                    <p>category:<span className='ml-4'>{goal.category}</span></p>
                    <p>deadline:<span className='ml-4'>{goal.deadline}</span></p>
                    <p>createdAt:<span className='ml-4'>{goal.createdAt}</span></p>
                    </div>
                    <button onClick={() =>onDelete(goal.id)} className='my-2'>Delete</button>
                    <button> Edit </button>
                </div>
            ))}
        </div>}
    </div>
)
}

export default GoalLists
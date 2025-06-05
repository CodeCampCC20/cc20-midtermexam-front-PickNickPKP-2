import React, { useState ,useRef} from 'react'

function TodoList() {
  const [name, setName] = useState({
      username: ""
    })
  
  const body = {
    name
  }
    console.log(body)

  

  
  return (
    <div className='bg-black rounded w-1/3 flex flex-col m-auto mt-50'>
     <div>
      <h1>My Todo</h1>

     </div>
     <div> <input
            className="input input-md bg-slate-600 rounded"
            type="text"
            name='username'
            value={name.username}
            onChange={e => setName(e.target.value)}
          /></div>
         
    </div>
  )
}

export default TodoList
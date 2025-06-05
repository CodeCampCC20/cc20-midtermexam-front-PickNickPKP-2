import React, { useState ,useRef} from 'react'
import { useNavigate } from 'react-router'
import { loginSchema } from '../schema.js/loginSchema'
import {yupToFormError} from '../util/yupToFormError'

function LoginPage() {
  // const [username ,setUsername] = useState("")
  // const [password ,setPassword] = useState("")
  const navigate = useNavigate()

  const [form, setForm] = useState({
    username: "",
    password: ""
  })

 const refs = {
    username : useRef(null),
    password : useRef(null),
 }
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const hdlSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   await loginSchema.validate(...form, { abortEarly: false })
    //   alert("ส่งสำเร็จ")
    //   setErrors({})

    // } catch (err) {
    //   console.log(err)
    //   const errorObj = yupToFormError(err);
    //   setErrors(errorObj);
  // }

    navigate("/todolist/")
    }

  

  return (
    <div className=' rounded bg-slate-800 w-1/3 flex flex-col m-auto mt-50 max-w-xs '>
      <h1 className='text-White mt-4 mb-5 ml-4 text-3xl'>Welcome</h1>
      <form onSubmit={hdlSubmit}
        className='flex flex-col items-center mb-4' >
        <label className="floating-label w-9/10 mb-4">
          <input
            className="input input-md bg-slate-600 rounded"
            type="text"
            name='username'
            placeholder="email"
            value={form.username}
            onChange={handleChange}
            ref = {refs.username}
          />
          <p className="text-red-500">{errors.username}</p>
        </label>
        <label className="floating-label w-9/10 mb-4">
          <input
            className="input input-md  bg-slate-600 rounded"
            type="text"
            name='password'
            placeholder="password"
            value={form.password}
            onChange={handleChange} 
            ref = {refs.password}
            />
            <p className="text-red-500">{errors.password}</p>
        </label>
        <div className="bg-slate-600 w-9/10 flex items-center rounded justify-center h-12">
          <button type='submit'>LOG IN</button>
        </div>
      </form>
    </div>
  )
}

export default LoginPage
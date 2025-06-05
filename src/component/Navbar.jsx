import React from 'react'
import { NavLink } from 'react-router'

function Navbar() {
  return (
    <nav>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/todolist">Todolist</NavLink>
      </nav>
  )
}

export default Navbar
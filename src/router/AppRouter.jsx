import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import LoginPage from '../pages/LoginPage'
import MainLayout from '../layout/MainLayout'
import TodoList from '../pages/TodoList'

function AppRouter() {
  return (
    <BrowserRouter>
    <Routes>
    
      <Route path="/" element={<LoginPage />} /> 
      <Route path="/todolist" element={<TodoList />} />

      
      
      
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
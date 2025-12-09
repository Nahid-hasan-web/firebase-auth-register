import React from 'react'
import Register from './Components/Register'
import app from './firebase.config'
import { ToastContainer } from 'react-toastify'

const App = () => {
  
  return (
    <>
    <ToastContainer/>
      <Register/>
    </>
  )
}

export default App
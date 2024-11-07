import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SignIn from './components/SignIn'
import { Routes, Route } from 'react-router-dom'
import Register from './components/Register'
import Home from './components/Home'

function App() {

  return (
    <>
    <Routes>
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/" element={<Home />} />
    </Routes>
    </>
  )
}

export default App

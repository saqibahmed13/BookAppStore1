import React from 'react'
import Home from './Home/Home'
import Courses from './courses/Courses'
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/course" element={<Courses/>} />
      </Routes>
    </>
  )
}

export default App

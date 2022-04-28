import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Route,Routes} from "react-router-dom"
import {TodoInformationAdd} from "./Components/TodoInput"
import {TodoDetails} from "./Components/TodoDetails"

function App() {
  

  return (
    <div className="App">
     <Routes>
     <Route path="/" element={<TodoInformationAdd/>}></Route>
      <Route path="/:id" element={<TodoDetails/>}></Route>
     </Routes>
    </div>
  )
}

export default App

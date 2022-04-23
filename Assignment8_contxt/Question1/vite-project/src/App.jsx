import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Navbar} from "./components/Navbar"
import {LoginStatus} from "./components/LoginStatus"
//import {Userform} from "./components/userForm"
import {useContext} from "react"
import{Authcontext} from "./Context/AuthContext"
function App() {
  
  const {isAuth} = useContext(Authcontext)
 
  return (
    <div className="App">
      <Navbar/>
      {isAuth === true ?<LoginStatus/>:""}
    
    
      
    </div>
  )
}

export default App

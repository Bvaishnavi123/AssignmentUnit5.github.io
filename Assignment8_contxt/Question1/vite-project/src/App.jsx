import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Navbar} from "./components/Navbar"
import {LoginStatus} from "./components/LoginStatus"
//import {Userform} from "./components/userForm"
import {useContext} from "react"
import{Authcontext} from "./Context/AuthContext"
function App() {
  
  const {trueauth} = useContext(Authcontext)
 
  return (
    <div className="App">
      <Navbar/>
      {trueauth==="false" ?  <LoginStatus />:"Click On Login button to see user" }
    
    
      
    </div>
  )
}

export default App

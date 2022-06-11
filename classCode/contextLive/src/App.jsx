import { useContext, useState } from 'react'
//import logo from './logo.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { Body } from './components/Body/cart'
import {lanContext} from './Context/LanContext'

function App() {
   
  const {languagehandler} = useContext(lanContext)
  return (
    <div className="App">
      <button onClick={()=>{
        languagehandler()
      }}> Change Language</button>
     <Navbar></Navbar>
     <Body></Body>
    </div>
  )
}

export default App

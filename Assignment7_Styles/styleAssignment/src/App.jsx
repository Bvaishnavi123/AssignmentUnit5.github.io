import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Button} from './components/button'
function App() {

  const [change,setchange] = useState("first")
  return (
    <div className="App">
      <Button change={change} id="first">Primary Button</Button>
      <Button change={change} id="second">Default Button</Button>
      <Button change={change} id="third">Dashed Button</Button>
      <Button change={change} id="fourth">Text Button</Button>
      <Button change={change} id="five">Link Button</Button>
      <Button onClick={() =>{
        setchange(change==="first"?"second":"first")
      }}>Change Color</Button>

      
    </div>
  )
}

export default App

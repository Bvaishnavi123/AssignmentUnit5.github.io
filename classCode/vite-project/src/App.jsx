import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
//import{Button} from "./components/buttons"
import { Button } from 'antd';



function App() {
  //const [theme,setTheme]= useState("light")
  return (
    <div className="App">
      <br />
          <Button type="primary">Primary Button</Button>

      {/* <h3>Theme is {theme}</h3>
     <Button theme={theme} onClick={
       ()=>{
         alert("click me")
       }
     }>Click me</Button>
     <Button onClick={()=>{
       setTheme(theme === "light"?"dark":"light")
     }}>Change Theme</Button> */}
    </div>
  )
}

export default App

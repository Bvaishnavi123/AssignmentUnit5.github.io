import { useState,useEffect } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [miliseconds, setmiliseconds] = useState(0)

  useEffect(() => {
    setInterval(()=>{
        setCount((prev)=>{
         return prev+1
        })
    },1000)

  },[])

  return (
    <div className="App">
       <h1>STOPWATCH</h1>
       <span><h1>{count}</h1></span> <span><h1>{miliseconds}</h1></span>
      
       <button>Start</button>
       <button>Reset</button>
    </div>
  )
}

export default App

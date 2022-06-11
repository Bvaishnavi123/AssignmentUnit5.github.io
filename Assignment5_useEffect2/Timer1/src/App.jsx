import {Timer} from "./Components/Timer"
import './App.css';
import{useState,useEffect} from "react"
import {DummyData} from "./Components/data"
//import "/App.css"

function App() {
  const [show,setshow]= useState(true)
  return (
    <div className="App">
      <DummyData/>
      {/* {show ? <Timer/>: null} */}
      {/* <h2>Let's get started!</h2>
      <button onClick={()=>{
        setshow(!show)
      }}>Hide Couter</button> */}
    </div>
  );
}

export default App;

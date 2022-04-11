//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';


function App() {
   const [counter,setcounter] = useState(0)
   function handle(v)
   {
      setcounter(counter+v)
   }
   function mul(v)
   {
      setcounter(counter*v)
   }
  return (
    <div className="App">
        <h1 className={`${counter%2===0?"greencolor":"redcolor"}`}>{counter}</h1>
        <button onClick={()=>handle(1)}>+</button>
        <button onClick={()=>handle(-1)}>-</button>
        <button onClick={()=>mul(2)}>Double</button>
    </div>
  );
}

export default App;


//import logo from './logo.svg';
//import { useState, useEffect} from "react";
import "./App.css";
//import { Hellow } from "./components/hellow";
//import axios from "axios";
//import {Newform} from "./components/newform"
import { Todoitem } from "./components/todos";

function App() {
  //const [show, setshow] = useState(true);
  //const [hideshow,sethideshow]=useState("Hide")

  // const res = await axios.get(`some-url/todos`);
  // console.log(res)

  return (
    <div className="App">
      <Todoitem />
    </div>
  );
}

export default App;

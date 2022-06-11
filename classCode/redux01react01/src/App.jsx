import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Count } from "./Components/Count";
import { Todo } from "./Components/todo";

function App() {
  return (
    <div className="App">
      <Count />
      <Todo />
    </div>
  );
}

export default App;

import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { About } from "./Components/about";
import { Home } from "./Components/home";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { Userlist } from "./Components/UserList";
import { Details } from "./Components/UserDetails";
import { LoginUser } from "./Components/login";
import {PrivateComponent} from "./Components/PrivateComponent";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/user" element={<Userlist />}></Route>
        <Route path="/user/:id" element={<PrivateComponent>
          <Details />
        </PrivateComponent>}></Route>
        <Route path="/login" element={<LoginUser />}></Route>
      </Routes>
    </div>
  );
}

export default App;

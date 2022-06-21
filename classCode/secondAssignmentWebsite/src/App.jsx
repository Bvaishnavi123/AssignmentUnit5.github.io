import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Navbar } from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Pages/Home";
import { Login } from "./Components/Pages/Login";
import { Payment } from "./Components/Pages/Payment";
import { Product } from "./Components/Pages/Product";
import { Register } from "./Components/Pages/Register";
import { About } from "./Components/Pages/About";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Payment" element={<Payment />}></Route>
        <Route path="/Product" element={<Product />}></Route>
      </Routes>
    </div>
  );
}

export default App;

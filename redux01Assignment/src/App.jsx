import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { TodoInformationAdd } from "./Components/TodoInput";
import { TodoDetails } from "./Components/TodoDetails";
import { Login } from "./Components/Login";
import { Protected } from "./Components/ProtectedComponent";
import { useDispatch } from "react-redux";
import { isAuth } from "./Redux/Action";
function App() {
  const dispatch = useDispatch();
 
  const localToken = localStorage.getItem("token");
  //console.log(localToken);

  if (localToken) {
    dispatch(isAuth(localToken));
  }

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Protected>
              <TodoInformationAdd />
            </Protected>
          }
        ></Route>
        <Route
          path="/:id"
          element={
            <Protected>
              <TodoDetails />
            </Protected>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;

import { useContext } from "react";
import { Authcontext } from "../Context/AuthContext";

export const Navbar = () => {
  const {isAuth} = useContext(Authcontext)
  const {toggleAuth} = useContext(Authcontext)
  return (
    <div
      style={{
        display: "flex",
        border: "1px solid gray",
        justifyContent: "flex-end",
        padding: "10px",
      }}
    >
      {" "}
      <button onClick={()=>{
        toggleAuth()
      }} >{isAuth === false ?"Login":"Logout"}</button>
    </div>
  );
};

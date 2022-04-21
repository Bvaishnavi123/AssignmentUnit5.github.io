import { useContext } from "react";
import { Authcontext } from "../Context/AuthContext";

export const Navbar = () => {
  const { toggleAuth } = useContext(Authcontext);
  const { auth } = useContext(Authcontext);
  const { isAuth } = useContext(Authcontext);

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
      <button
       onClick={() => { isAuth(); toggleAuth();}}
      >
        {auth}
      </button>
    </div>
  );
};

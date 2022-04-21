import { createContext } from "react";
import { useState } from "react";

export const Authcontext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [auth, setIsAuth] = useState("Login");
  const [trueauth,setTrueAuth] = useState("true")

 

  const toggleAuth = () => {
    return setIsAuth(auth==="Login"?"Logout":"Login")
  };
  const isAuth = () => {
  
      return setTrueAuth(trueauth==="true" ? "false":"true")
    
      
  };
  return <Authcontext.Provider value={{auth,trueauth,isAuth,toggleAuth}}>{children}</Authcontext.Provider>;
};

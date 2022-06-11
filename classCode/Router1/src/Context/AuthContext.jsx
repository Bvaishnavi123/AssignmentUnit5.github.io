import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setAuth] = useState(false);

  const AuthHandler = (state) => {
   return  setAuth(state);
  };
  return (
    <AuthContext.Provider value={{isAuth,AuthHandler}}>
      {children}
    </AuthContext.Provider>
  );
};

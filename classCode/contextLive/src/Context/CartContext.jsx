import { Children, createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setcart] = useState(0);

  const handleCart = (val) => {
    setcart(cart + val);
  };

  return (
    <CartContext.Provider value={{ cart, handleCart }}>
      {children}
    </CartContext.Provider>
  );
};

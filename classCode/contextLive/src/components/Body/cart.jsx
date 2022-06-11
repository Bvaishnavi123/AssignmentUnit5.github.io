import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

export const Body = () => {
  const { handleCart } = useContext(CartContext);
  return (
    <div
      style={{
        background: "yellow",
        width: "200px",
        height: "300px",
      }}
    >
      <button onClick={()=>{
          handleCart(1)
      }}>
        Add to cart
      </button>
    </div>
  );
};

import { CartContext } from "../Context/CartContext"
import { useContext } from "react"
import {lanContext} from "../Context/LanContext"


export const Navbar = ()=>{
   const {cart}= useContext(CartContext)
   const {language} = useContext(lanContext)
    return(
        <div>
            <div
        style={{
            display : "flex",
            border: "1px solid gray",
            justifyContent: "flex-end",
            padding: "10px",
    
        }}>{language==="En"?"Cart":"Thila"}:{cart}</div>
        
        </div>
    
        
    )
  
   
}
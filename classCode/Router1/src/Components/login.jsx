import { AuthContext } from "../Context/AuthContext"
import { useNavigate } from "react-router-dom"
import {useContext} from "react"

export const LoginUser = ()=>{
    const {AuthHandler} = useContext(AuthContext)
    const navigate = useNavigate()
    return( <div>
        <input type="text" placeholder="Enter Your Name"  required/>
        <input type="text"  placeholder="Enter Your Password" required/>
        <button onClick={()=>{
             AuthHandler(true)
             navigate(-2,{replace:true})

        }}>Submit</button> 
    </div>)
}
import { useContext } from "react"
import { Navigate } from "react-router-dom"
import {AuthContext } from "../Context/AuthContext"


export const PrivateComponent = ({children})=>{
   const {isAuth} = useContext(AuthContext)
    if(isAuth===false){
        return <Navigate to={"/login"} replace={false}/>
    }

   return children
}
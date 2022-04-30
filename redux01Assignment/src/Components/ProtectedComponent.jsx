import { useSelector } from "react-redux"
import {Navigate} from "react-router-dom"

export const Protected = ({children})=>{
    const status = useSelector((store) =>store.isLogin)
    if(status===false){
       return <Navigate to={'/login'}/>
       
    }
  return children
    
}
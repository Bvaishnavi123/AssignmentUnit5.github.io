import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

export const  Userlist = ()=>{

    const [user,setuser] = useState([])
    
   
    useEffect(()=>{
       axios.get("https://reqres.in/api/users").then(({data})=>{
          setuser(data.data)
       })
    },[])
    return (
        <div>
            {user.map((e)=>{
                return <div><Link to={`/user/${e.id}`}>{e.id}.{e.firste}</Link></div>

            })}
        </div>
    )
}
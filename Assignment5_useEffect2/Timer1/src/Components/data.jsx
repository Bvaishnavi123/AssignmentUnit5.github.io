import { useState,useEffect } from "react"
import axios from "axios"


export const DummyData = ()=>{

    const [data,setdata] = useState([])
    useEffect(()=>{
      axios.get("https://fakestoreapi.com/products").then(({data})=>{
           setdata(data)
      })
    },[])

    console.log("data",data)

    const newData = data.sort(function(a,b){
      return a.id-b.id
    })
   
   console.log("newData",newData)
    return (
        <div>

        </div>
    )
}
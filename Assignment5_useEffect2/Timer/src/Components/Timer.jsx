import { useEffect, useState } from "react"

export  const Timer = ()=>{
    const [time,setTimer]= useState(0)

      useEffect(()=>{
          return setInterval(()=>{
           setTimer(prevState=>{
               prevState = prevState+1
           })
          },1000)
      },[])
    return (
        <div>
            <h1>Time:{time}</h1>
            <button>Start</button>
        </div>
    )
}
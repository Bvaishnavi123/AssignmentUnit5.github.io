//import react from "react"
import {useState} from "react"


export const Todoinput = ({getdata})=>{
    const [text,setText] = useState("")
    return <div>
         <input onChange={(e)=>{
             //console.log(e.target.value);
             setText(e.target.value)
         }} type="text" placeholder="Enter Your Todo" />
         <button onClick={()=>getdata(text)}>Add1</button>
         {/* {text} */}
    </div>
     
}



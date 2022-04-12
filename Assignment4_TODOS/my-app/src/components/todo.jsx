import { Todoinput } from "./todoinput";
import {useState} from "react"
import {TodoItem} from "./todoItem"
function Todo(){
  const [todolist,setTodolist] = useState(["React","TypeScript"])
  const getdata = (todo)=>{
     console.log("received")
     setTodolist([...todolist,todo])


  }
    return(
        <div>
            <Todoinput  getdata={getdata}/>

         {
         todolist.map((e)=>{
            return  <TodoItem  todo = {e}/>  //<div>{e}</div>
         })}

        </div>
    )
}

export {Todo} 


import classes from "./ListItem.module.css"
import {useState} from "react"
export const ListItem = (props) => {
  const [show,setshow]=useState(true)
  const [chai,setChai]=useState({
    indexOfChai : -1
  })
  const todoDeleteHandler = (index)=>{
    props.onDeleteItem(index)
   // setshow(false)
  }
    const todoCompleteHandler = (index)=>{
      console.log(index)
        setChai({
          indexOfChai : index
        })
        
        //console.log("hiiiii")
    }
  return <ul>{props.todo.map((e,index) => {
     return <li className={`${chai.indexOfChai === index ? classes.listItem : ""}`} onClick={todoCompleteHandler.bind(this,index)} key={Math.random()}>{e} <button onClick={todoDeleteHandler.bind(this,index)}>Delete</button> </li>
   })}  </ul> ;
};

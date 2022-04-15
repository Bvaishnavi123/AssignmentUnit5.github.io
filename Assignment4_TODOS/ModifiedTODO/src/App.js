import {InputForm} from "./components/Input/InputForm"
import {ListItem} from "./components/List/ListItem"
import {useState} from "react"
function App() {
 const [todo,setTodo] = useState([])
 const ItemHandler = (item)=>{
    //console.log(item)
    setTodo(prevState=>{
      return [...prevState,item]
    })
 }

 const onDeleteItemHandler =(index)=>{
    console.log(index)
    let new_arr = todo.map((e,i)=>{
      if(i!==index)
      {
        return e
      }
    })
    setTodo(new_arr)
 }
  return (
    <div>
      <InputForm onAddItem={ItemHandler}/>
      <ListItem todo={todo} onDeleteItem={onDeleteItemHandler}/>
      
    </div>
  );
}

export default App;

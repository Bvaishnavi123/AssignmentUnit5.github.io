
import  {ADD_TODO} from "./Action"
import {TOGGLE_TODO} from "./Action"
import {DELETE} from "./Action"
export const Reducer = (store,{type,payload})=>{
    //console.log(store)
     switch(type)
     {
         case ADD_TODO: return {...store , todo:payload}
         case TOGGLE_TODO : return {...store,todo:store.todo.map((todo)=>{
           return todo.id===payload ? {...todo,status:!todo.status}:todo
         })}
         case DELETE : return {...store,todo:store.todo.filter(todo=>todo.id!=payload)}
         default: return {...store }
     }
}
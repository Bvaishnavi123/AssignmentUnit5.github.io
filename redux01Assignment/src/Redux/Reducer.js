
import { ADD_TODO, AUTH, DELETE, TOGGLE_TODO } from "./Action"
export const Reducer = (store,{type,payload})=>{
    //console.log(store)
     switch(type)
     {
         case ADD_TODO: return {...store , todo:payload}
         case TOGGLE_TODO : return {...store,todo:store.todo.map((todo)=>{
           return todo.id===payload ? {...todo,status:!todo.status}:todo
         })}
         case DELETE : return {...store,todo:store.todo.filter(todo=>todo.id!=payload)}
         case AUTH : return {...store,isLogin:!!payload,token:payload}
         default: return {...store }
     }
}
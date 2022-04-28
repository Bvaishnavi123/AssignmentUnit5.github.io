
import  {ADD_TODO} from "./Action"
export const Reducer = (store,{type,payload})=>{
    //console.log(store)
     switch(type)
     {
         case ADD_TODO: return {...store , Todo:payload}
         default: return {...store }
     }
}
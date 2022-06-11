
import { ADD_TODO } from "./action"
const initial = {

    todo:[],
}

export const Todoreducer = (store=initial,{type,payload})=>{
  //console.log(store)
    switch(type){
        
        case ADD_TODO : return {...store,todo:[...store.todo, payload]}
        default : return {...store}
    }
}
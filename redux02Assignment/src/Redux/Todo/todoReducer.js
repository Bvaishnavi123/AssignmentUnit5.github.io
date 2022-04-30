import {ADD_TODO} from "./Action"
export const TodoReducer = (store,{type,payload})=>{
    switch(type){
        case ADD_TODO : return {...store,todo:[...store.todo,payload]}
        default: return {...store}
    }
}
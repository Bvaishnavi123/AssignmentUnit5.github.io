import { legacy_createStore } from "redux";


const ADD_COUNTER = "ADD_COUNTER"
const ADD_TODO = "ADD_TODO"
const reducer = (store,action)=>{

    switch(action.type){
        case ADD_COUNTER : return  {...store,counter:store.counter+action.payload}
        case ADD_TODO : return {...store , todos:[...store.todos,action.payload]}
        default : return {...store}
        
    }
    
}
const initial = {
    counter: 0,
    todos:[],
    theme:"dark"
}
const store = legacy_createStore(reducer,initial)

const addTodo = (title)=>
{
   return{
       type : ADD_TODO,
       payload : {
           title : title,
           status : false
       }
   }
}

console.log(store.getState())
store.dispatch({type:ADD_COUNTER,payload:4})
console.log(store.getState())
store.dispatch({type:ADD_COUNTER,payload:4})
console.log(store.getState())
store.dispatch(addTodo("Learn JS"))
console.log(store.getState())
store.dispatch(addTodo("learn Typescript"))
console.log(store.getState())
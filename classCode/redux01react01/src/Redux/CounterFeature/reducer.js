import {ADD_COUNT} from "./action"

const initial = {
    count : 0,
}



export const CounterReducer = (store=initial,{type,payload})=>{
     //console.log(store)
    switch(type){
        case ADD_COUNT : return {...store,count:store.count + payload}
        
        default : return {...store}
    }
}
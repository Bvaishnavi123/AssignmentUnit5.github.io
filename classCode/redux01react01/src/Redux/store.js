import { legacy_createStore ,combineReducers, applyMiddleware} from "redux";

import { CounterReducer } from "./CounterFeature/reducer";
import { Todoreducer } from "./Feature/reducer";
const LogInmiddleWare = (store)=>(next)=>(action)=>{
   console.log("action")
   next(action)
}

const rootReducer = combineReducers({
     counter : CounterReducer,
     todos : Todoreducer
})


const store = legacy_createStore(
    
    rootReducer,
    applyMiddleware(LogInmiddleWare),
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log(store.getState())


export { store };

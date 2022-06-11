import { legacy_createStore } from "redux";
import {TodoReducer} from "./Todo/todoReducer"
const intial = {
    todo:[]
}
const store = legacy_createStore(intial,TodoReducer)
export {store}
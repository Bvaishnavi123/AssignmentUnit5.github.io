import {legacy_createStore} from "redux"
import{Reducer} from "./Reducer"
const initial = {
    Todo : [],
    status : "Incomplete"
}

const store = legacy_createStore(Reducer,initial)

export {store}
import {legacy_createStore} from "redux"
import{Reducer} from "./Reducer"
const initial = {
    todo : [],
}

const store = legacy_createStore(Reducer,initial)

export {store}
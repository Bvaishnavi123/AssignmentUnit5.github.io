import {legacy_createStore} from "redux"
import{Reducer} from "./Reducer"
const initial = {
    todo : [],
    token :'',
    isLogin :false
}

const store = legacy_createStore(Reducer,initial)

export {store}
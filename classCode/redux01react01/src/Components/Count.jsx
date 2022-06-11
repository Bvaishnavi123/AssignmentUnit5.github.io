import {store} from "../Redux/store"
import {useDispatch, useSelector} from 'react-redux'
import {addTodos} from "../Redux/CounterFeature/action"

export const Count = ()=>{
    const counter = useSelector((store)=>{
        return store.counter.count
      })
     const state = store.getState()
     //console.log(state)
     const dispatch = useDispatch()
    return <div>
              <h1>COUNTER:{counter}</h1>
      <button onClick={()=>{
        dispatch(addTodos(1))
      }}>ADD</button>
    </div>
}
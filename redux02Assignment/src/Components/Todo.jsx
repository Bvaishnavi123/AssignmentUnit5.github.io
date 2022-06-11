import {useDispatch,useSelector} from "react-redux"
import { ADD_TODO } from "../Redux/Todo/Action"
import axios from "axios"


export const Todos = ()=>{
    const dispatch = useDispatch();
   const submitHandler = ()=>{
    const payload = {
        
    }

   }
    return (
        <div>
            <input type="text"  placeholder="Enter Your Todo"/>
            <button onClick={submitHandler}>Add</button>
            {/* {} */}
        </div>
    )
}
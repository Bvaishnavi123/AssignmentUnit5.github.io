export const ADD_COUNT = "ADD_COUNT"

export const addTodos = (data)=>{
    return {
       type: ADD_COUNT,
       payload : data,
    }
}
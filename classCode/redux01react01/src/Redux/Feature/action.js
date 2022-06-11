export const ADD_TODO ="ADD_TODO"

export const addTodoList = (data)=>{
    return {
       type: ADD_TODO,
       payload : data,
    }
}

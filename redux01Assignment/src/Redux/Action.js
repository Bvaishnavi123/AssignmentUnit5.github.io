
export const TOGGLE_TODO = "TOGGLE_TODO"
export const ADD_TODO = "ADD_TODO"
export const DELETE = "DELETE"
export const AUTH = "AUTH"
export const  AddTodo = (data)=>{
    return {
        type: ADD_TODO,
        payload: data
    }

}
export const ToggleTodo = (id)=>{
    return {
    type: TOGGLE_TODO,
    payload:id
}
}

export const DeleteTodo = (id)=>{
    return {
        type : DELETE,
        payload:id
    }
}
export const isAuth = (token)=>{
    return {
        type : AUTH,
        payload : token
    }
}
export const TodoItem = ({todo,handlestatus})=>
{

    return (
      <div>
        {todo.id}-{todo.title} - {todo.status ? "Done":"Not Done"}
      <button onClick={()=>handlestatus(todo.id)}>Toggle</button>
      </div>
    
    )
  
}
export const TodoItem = ({ todo, handlestatus, handleDelete }) => {
  return (
    <div>
      {todo.id}-{todo.title} - {todo.status ? "Done" : "Not Done"}
      <button onClick={() => handlestatus(todo.id)}>Toggle</button>
      <button onClick={() => handleDelete(todo.id)}>DELETE</button>
    </div>
  );
};

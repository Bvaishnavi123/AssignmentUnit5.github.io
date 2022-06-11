import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TODO } from "../Redux/Feature/action";
export const Todo = () => {
  const todo = useSelector((store) => store.todos.todo);
  const dispatch = useDispatch();
  const [text, settext] = useState("");
  const handlechange = () => {
    dispatch({
      type: ADD_TODO,
      payload: {
        title: text,
        status: false,
      },
    });
  };
  return (
    <div>
      <input
        type="text"
        placeholder="ADD TODO"
        onChange={(e) => {
          settext(e.target.value);
        }}
      />
      <button onClick={handlechange}>ADD TODO</button>
      {todo.map((e,i) => {
        return <div key={i}>{e.title}</div>;
      })}
    </div>
  );
};

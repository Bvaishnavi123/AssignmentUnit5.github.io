import { useState, useEffect } from "react";
import axios from "axios";
import { ADD_TODO } from "../Redux/Action";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const TodoInformationAdd = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const todo = useSelector((store) => {
    return store.Todo;
  });
  //console.log(todo)
  const getData = () => {
    axios.get("http://localhost:8000/todos").then(({ data }) => {
      dispatch({
        type: ADD_TODO,
        payload: data,
      });
    });
  };
  useEffect(() => {
    getData();
  }, []);
  //console.log(todo);
  const addHandler = () => {
    const payload = {
      title: text,
      status : false
  };

    axios.post("http://localhost:8000/todos", payload);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add Todo"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button onClick={addHandler}>Add</button>
      {todo.map((e, i) => {
        return (
          <div key={i}>
            <Link key={i} to={`/${e.id}`}>
              <div>{e.title}</div>
            </Link>
            <button>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

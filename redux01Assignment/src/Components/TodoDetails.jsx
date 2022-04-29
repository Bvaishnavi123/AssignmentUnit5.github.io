import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TODO } from "../Redux/Action";
import { ToggleTodo } from "../Redux/Action";

export const TodoDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const SingleTodo = useSelector((store) => store.todo);
  //console.log(SingleTodo)
  const FilterTodo = SingleTodo.filter((todo) => todo.id == id);
  const text = FilterTodo[0];
  //console.log(text);
  //console.log(FilterTodo)

  const statusHandler = () => {
    //console.log(id)
    dispatch(ToggleTodo(text.id));
  };
  //console.log(user);

  return (
    <div>
      <p>{text.title}</p>
      <button onClick={statusHandler}>
        {text.status ? "Complete" : "Incomplete"}
      </button>
    </div>
  );
};

import { Todoinput } from "./todoinput";
import { useState } from "react";
import { TodoItem } from "./todoItem";

function Todo() {
  const [todolist, setTodolist] = useState([]);
  const [todolist1, setTodolist1] = useState([]);

  const getdata = (todo) => {
    // console.log("received");
    const payload = {
      title: todo,
      status: false,
      id: Math.floor(Math.random() * 10),
    };
    setTodolist([...todolist, payload]);
    setTodolist1([...todolist1, payload]);
  };

  const handlestatus = (d) => {
    // console.log(d)

    const newarr = todolist.map((e) => {
      if (d === e.id) {
        return { ...e, status: !e.status };
      } else {
        return e;
      }
    });

    setTodolist(newarr);
  };
  const sortHandler = (e) => {
    // console.log(e.target.value)
    // console.log(todolist1)
    if (e.target.value === "ASC") {
      todolist.sort((a, b) => a.id - b.id);
      setTodolist([...todolist]);
    } else if (e.target.value === "DES") {
      todolist.sort((a, b) => b.id - a.id);
      setTodolist([...todolist]);
    } else {
       //console.log(todolist1);
       setTodolist(todolist1)
    }
  };

  return (
    <div>
      <Todoinput getdata={getdata} />
      <select id="sortHandle" onChange={sortHandler}>
        <option value=""></option>
        <option value="ASC">Low To High</option>
        <option value="DES">High To Low </option>
      </select>

      {todolist.map((e) => {
        return <TodoItem todo={e} handlestatus={handlestatus} />;
      })}
    </div>
  );
}

export { Todo };

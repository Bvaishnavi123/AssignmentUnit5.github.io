import { Todoinput } from "./todoinput";
import { useState } from "react";
import { TodoItem } from "./todoItem";

function Todo() {
  const [todolist, setTodolist] = useState([]);
  // const [copy, setCopy] = useState([]);

  const getdata = (todo) => {
    // console.log("received");
    const payload = {
      title: todo,
      status: false,
      id: Math.floor(Math.random() * 1000),
    };
    setTodolist([...todolist, payload]);
    // let copyData = [...todolist];
    // console.log(copyData);
    // setCopy(copyData);
  };

  const handlestatus = (d) => {
    // console.log(d)
    setTodolist(
      todolist.map((e) => (e.id == d ? { ...e, status: !e.status } : e))
    );
  };
  const sortHandler = (e) => {
    if (e.target.value === "ASC") {
      todolist.sort((a, b) => a.id - b.id);
      setTodolist([...todolist]);
    } else if (e.target.value === "DES") {
      todolist.sort((a, b) => b.id - a.id);
      setTodolist([...todolist]);
    } 
    // else {
    //   setTodolist([...copy]);
    // }
  };
   const handleDelete = (del)=>{
    //console.log(del)
    setTodolist(todolist.filter((ele)=>{
      return ele.id != del
    }))
   }
  return (
    <div>
      <Todoinput getdata={getdata} />
      <select id="sortHandle" onChange={sortHandler}>
        <option value=""></option>
        <option value="ASC">Low To High</option>
        <option value="DES">High To Low </option>
      </select>

      {todolist.map((e) => {
        return <TodoItem todo={e} handlestatus={handlestatus} handleDelete={handleDelete} />;
      })}
    </div>
  );
}

export { Todo };

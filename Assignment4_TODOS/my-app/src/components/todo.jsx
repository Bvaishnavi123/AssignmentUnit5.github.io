import { Todoinput } from "./todoinput";
import { useState } from "react";
import { TodoItem } from "./todoItem";

function Todo() {
  const [todolist, setTodolist] = useState([]);
  const getdata = (todo) => {
    // console.log("received");
    const payload = {
      title: todo,
      status: false,
      id: Math.floor(Math.random() * 10),
    };
    setTodolist([...todolist, payload]);
  };

  const handlestatus = (d) => {
    // console.log(d)

   const newarr =  todolist.map((e) => {
      if (d === e.id) {
        return  { ...e,
           status : !e.status}
      } else {
        return e;
      }
    });

    setTodolist(newarr)
  };

 
  return (
    <div>
      <Todoinput getdata={getdata} />

      {todolist.map((e) => {
        return <TodoItem todo={e} handlestatus={handlestatus} />; //<div>{e}</div>
      })}
    </div>
  );
}

export { Todo };

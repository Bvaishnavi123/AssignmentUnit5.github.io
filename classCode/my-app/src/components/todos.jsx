import { useState, useEffect } from "react";

export const Todoitem = () => {
  const [Todo, settodo] = useState([]);
  const [text, setText] = useState("");
  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    const res = await fetch("http://localhost:8000/Todo").then((d) => d.json());

    settodo(res);
  };
  return (
    <div>
      <input
        type="text"
        id="name"
        placeholder="Enter your todo"
        onChange={(e) => {
          {
            setText(e.target.value);
          }
        }}
      />
      <button
        onClick={(e) => {
          const payload = {
            titile: text,
          };
          fetch("http://localhost:8000/Todo", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(payload),
          }).then(() => {
            getdata();
          });
        }}
      >
        Add
      </button>
      {Todo.map((e) => {
        return <div>{e.titile}</div>;
      })}
    </div>
  );
};

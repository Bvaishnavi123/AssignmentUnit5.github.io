import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TODO } from "../Redux/Action";

export const TodoDetails = () => {
  //https://reqres.in/api/users/
  const { id } = useParams();
  const [user, setuser] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(` http://localhost:8000/todos/${id}`).then(({ data }) => {
      setuser(data);
    });
  }, []);

  const statusHandler = () => {
    
  };
  //console.log(user);
 
  return (
    <div>
      <p>{user.title}</p>
      <button onClick={statusHandler}>{user.status===false?"Incomplete":"Complete"}</button>
    </div>
  );
};

import { Navigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const Details = () => {
  //https://reqres.in/api/users/
  const { id } = useParams();

  const [user, setuser] = useState({});
  

  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${id}`).then(({ data }) => {
      setuser(data.data);
    });
  }, []);
  //console.log(user);


  return (
    <div>
      <img src={user.avatar} alt="" />
      <p>{user.first_name}</p>
    </div>
  );
};

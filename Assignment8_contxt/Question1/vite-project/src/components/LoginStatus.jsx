import { useEffect, useState } from "react";
import axios from "axios";
export const LoginStatus = () => {
  const [user, setuser] = useState({});

  useEffect(() => {
    const payload = {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    };
    axios.post("https://reqres.in/api/login", payload).then(({data}) => {
      setuser(data);
    });
  }, []);
  return <div>
    Token :  <h5>{user.token}</h5>
  </div>;
};

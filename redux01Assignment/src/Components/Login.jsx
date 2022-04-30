import axios from "axios";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isAuth } from "../Redux/Action";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((store) => store.token);
  const status = useSelector((store) => store.isLogin);
  //console.log(token, status);

  const emailInput = useRef();
  const passwordInput = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmailInput = emailInput.current.value;
    const enteredPasswordInput = passwordInput.current.value;
    //console.log(enteredEmailInput, enteredPasswordInput)
    const postdata = {
      email: enteredEmailInput,
      password: enteredPasswordInput,
    };
    axios.post("https://reqres.in/api/login", postdata).then(({ data }) => {
      //console.log(data)
      localStorage.setItem("token", data.token);
      dispatch(isAuth(data.token));
      navigate("/");
    });
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Enter Your Email" ref={emailInput} />
        <input type="text" placeholder="Password" ref={passwordInput} />
        <input type="submit" />
      </form>
    </div>
  );
};

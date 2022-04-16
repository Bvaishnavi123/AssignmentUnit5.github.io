import { useState, useEffect } from "react";
import "./form.css";

import{ShowData} from "./showdata"
export const FormData = () => {
  // const [data,setdata] = useState([])
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    address: "",
    Department: "",
    salary: "",
    status: "",
  });
  // const marriedHandler = (e)=>{
  //    // console.log(e.target.value,"hiiiii")
  // }
  // const singleHandler = (e)=>{
  //    // console.log(e.target.value,"hiiiiii")
  // }

  // const getData = async()=>{
  //    const res = await fetch("http://localhost:8080/posts").then((d)=>d.json())
  //    setdata(res)
  // }

  // useEffect(()=>{
  //   getData()
  // },[])

  const handler = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    ///console.log(e.target.id);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    //console.log(formData);
    const payload = {
      name : formData.name,
   
      number: formData.number,
      address: formData.address,
      Department: formData.Department,
      salary: formData.salary,
      status: formData.status,

    };
    fetch("http://localhost:8080/posts", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(payload),
          })
  };
  return (
   <div id="Maincontainer">

<div id="container">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter Your Name"
          id="name"
          className="inputElement"
          //   value={formData.name}
          onChange={handler}
        />
        <input
          type="number"
          placeholder="Enter Your Number"
          id="number"
          className="inputElement"
          //   value={formData.number}
          onChange={handler}
        />
        <textarea
          name=""
          id="address"
          cols="30"
          rows="10"
          placeholder="Enter Your Address"
          className="inputElement"
          //   value={formData.address}
          onChange={handler}
        ></textarea>
        <select
          id="Department"
          className="inputElement"
          //   value={formData.department}
          onChange={handler}
        >
          <option value="software">Software</option>
          <option value="Civil">Civil</option>
          <option value="Mechanical">Mechanical</option>
          <option value="E and tc">E and tc</option>
        </select>
        <input
          type="number"
          placeholder="Enter Your Salary"
          id="salary"
          className="inputElement"
          //   value={formData.salary}
          onChange={handler}
        />
        Married:{" "}
        <input
          type="checkbox"
          name="colors"
          value="Married"
          onChange={handler}
          id="status"
        />
        <br />
        Not-Married:{" "}
        <input
          type="checkbox"
          name="colors"
          value="Single"
          onChange={handler}
          id="status"
        />
        <br />
        <input type="submit" value="submit" />
      </form>
       {/* {data.map((e)=>{
         return <div>{e.name}</div>
       })} */}
       </div>
       <div id="Showdata">
         <ShowData/>
       </div>
   </div>
  
     
    
  );
};

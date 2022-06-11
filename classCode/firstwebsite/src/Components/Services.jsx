import { Link } from "react-router-dom";
import { useState , useEffect } from "react";
import axios from "axios"
import "./Styles/service.css";

export const Service = () => {
    const [data , setdata] = useState([])
    useEffect(() =>{
     axios.get("https://fakestoreapi.com/products").then(({data})=>{
          setdata(data)
     })
    },[])
  return (
    <div>
      <div>
        <h1>Our Services</h1>
      </div>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-10 mx-auto">
            <div id="cardContainer">
                {data.map((e)=>{
                   return <div id="productCard">
                       <img src={e.image} id="imageofProduct" />
                       <h5>{e.title}</h5>
                   </div>
                    
                })}
         </div>
          </div>
        </div>
      </div>
    </div>
  );
};

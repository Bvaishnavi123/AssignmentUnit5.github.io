import { Link } from "react-router-dom";
import { useState , useEffect } from "react";
import axios from "axios"
import "../CSS/Product.css";
import { Button, ButtonGroup } from '@chakra-ui/react'

export const Product = () => {
    const [data , setdata] = useState([])
    useEffect(() =>{
     axios.get("https://fakestoreapi.com/products").then(({data})=>{
          setdata(data)
     })
    },[])
  return (
    <div>
      <div>
     
      </div>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-10 mx-auto">
            <div id="cardContainer">
                {data.map((e)=>{
                   return <div id="productCard">
                       <div className="ImageContainer">
                       <img src={e.image} id="imageofProduct" />
                       </div>
                       <div className="title-container">
                       <h5>{e.title}</h5>
                    </div>
                    <Button colorScheme='blue'>Add to cart</Button>
                       
                   </div>
                    
                })}
         </div>
          </div>
        </div>
      </div>
    </div>
  );
};

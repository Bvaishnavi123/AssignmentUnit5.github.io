import "../CSS/About.css";
import axios from "axios"
import { useEffect,useState } from "react";
export const About = () => {
  const [data,setdata] = useState([])
  //console.log(data)
  useEffect(() =>{
      axios.get("https://fakestoreapi.com/products?limit=3").then(({data})=>{
          setdata(data)
      })
  },[])
  
  return (
    <div className="container-fluid nav_bg">
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="slider-container">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="https://images.unsplash.com/photo-1642515578763-b7daf9516e97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="https://images.unsplash.com/photo-1650784424602-b892f7292b9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="https://images.unsplash.com/photo-1650484542731-18a22dd17e0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQwfFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="..." />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
           <div className="trending-container">
           <h1>TRENDING </h1>
           </div>
             
          
          <div className="ProductContainer">
            {data.map((e)=>{
                return <div className="card" >
                <img src={e.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <p className="card-text">{e.title}</p>
                  <p>{e.price}</p>
                </div>
              </div>
            })}

          </div>
        </div>
      </div>
    </div>
  );
};

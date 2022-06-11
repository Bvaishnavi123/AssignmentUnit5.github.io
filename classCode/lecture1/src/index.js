import { sum ,mul } from "./calc";
import React from "react";
import ReactDOM from "react-dom";
import "./style.css"
const key = "abcd"
console.log(sum(2,2),key,mul(1,2))

const root = document.getElementById("root")

// const h1 = document.createElement("h1")
// h1.innerText="hiiiiii"
// h1.setAttribute("class","redtext")
// root.append(h1)
// const h1 = React.createElement("h1",{},"hellow react")
// const image = React.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhkk3bTsCGUexAWuCrRaJedXosbyO2jCtevA&usqp=CAU",width:"200px"})

// const div = React.createElement("div",{},h1,image,"price:200")


// const thead = React.createElement("thead",{},
// "my name is vaishnavi")
// const table = React.createElement("table",{},thead)


ReactDOM.render(
   <div>
       <h1>Hello React</h1>
   </div>,
    document.getElementById("root")
)
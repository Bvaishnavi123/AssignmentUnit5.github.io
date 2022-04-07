let textareadiv = document.getElementById("textareas")
console.log("hiiii")
import './index.css';
import Icon from "./logo.png"
const imagediv = document.getElementById("logo")
const imge = document.createElement("img")
imge.setAttribute("id","img")
imge.src= Icon 
imagediv.append(imge)

document.getElementById("submit").addEventListener("click", function() {
      let todo = document.getElementById("todo").value
      console.log(todo)

      let textarea = document.createElement("textarea")

      textarea.append(todo)
      textareadiv.append(textarea)
})
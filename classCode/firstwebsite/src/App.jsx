import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {Home} from "./Components/Home"
import {About} from "./Components/About"
import {Service} from "./Components/Services"
import {Contact} from "./Components/Contact"
import {Navigate, Route,Routes} from "react-router-dom"
import {Navbar} from "./Components/Navbar"

function App() {
  return <div className="App">
    <Navbar/>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/service" element={<Service/>}/>
       <Route path="/contact" element={<Contact/>}/>
      </Routes>
     
  </div>;
}

export default App;

import { Link } from "react-router-dom"
import "./Navbar.css"


export const Navbar = () => {
  return (
    <div className="container-fluid nav_bg">
        <div className="row">
            <div className="col-10 mx-auto">
             <div className="NavbarContainer">
              <div>
              <Link className="navbar-brand" to="/">Fashion</Link>
              </div>
              <div className="LinksContainer">
              <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
              <Link className="nav-link active" aria-current="page" to="/Product">Products</Link>
              <Link className="nav-link active" aria-current="page" to="/Login">LogIn</Link>
              <Link className="nav-link active" aria-current="page" to="/register">SignUp</Link>
              <Link className="nav-link active" aria-current="page" to="/Payment">Payment</Link>
             </div>
            </div>
            </div>

        </div>
    </div>
  )
};

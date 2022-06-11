import {Link} from "react-router-dom"
import {Common} from "./Commom"

// Grow Your Business
// /service
// Get Started
export const Home = () => {
  return (
   <div>
      <Common  name="Grow Your Business" visit="/service" btn_name='Get Started'/>
   </div>
  );
};

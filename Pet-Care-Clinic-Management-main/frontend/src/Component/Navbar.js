import Peticon from "./icon";
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <div>
    <nav className="navbar">
    <div className="peticon">
         <Peticon/>
        </div>
     
      <div className="links">
      <a href="/">Home</a>
      <a href="/details">Our Services</a>
      <a href="/">Products</a>
  
      <a href="/">FAQ</a>
      <a href="/">Contact</a>
      <a href="/">About Us</a>

       
      </div>
      
    </nav>
   <hr className="top-boarder"/></div>
    
  );
}
 
export default Navbar;
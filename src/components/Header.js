import { useState } from "react";
import Logo from "../assets/img/foodvilla.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title = () => {
    return (
    <a href='/'>
    <img 
    className="logo"
    alt="FoodVilla"
    src={Logo}></img>
    </a>
    )
    };

const loggedInUser = () => {
  //API call t check authentication
  return false; 
};

const Header = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline()
    return(
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
             <li><Link to='/'>Home</Link></li>
            {/* <a href='/about'><li>About</li></a> */}
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/instamart'>Instamart</Link></li>

            <li>Cart</li> 
          </ul>
        </div>
        <h1>{isOnline? "✅":"🔴"}</h1>
        {
          
          (isLoggedIn ? (
          <button onClick={()=>setIsLoggedIn(false)}>Logout</button> 
          ) : (
          <button onClick={()=>setIsLoggedIn(true)}>Login</button>))
        }
        
        

      </div>
      );
    }

export default Header
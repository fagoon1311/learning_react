import { useState, useContext } from "react";
import Logo from "../assets/img/foodvilla.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import userContext from "../utils/UseContext";
import { useSelector } from "react-redux";
import store from "../utils/Store";

const Title = () => {
    return (
    <a href='/'>
    <img 
    className="h-28 p-2"
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
  const {user} = useContext(userContext)

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnline()

  const cartItems = useSelector(store=>store.cart.items);
  console.log(cartItems)
    return(
      <div className="flex justify-between bg-amber-600 shadow-xl">
        <Title />
        <div className="nav-items">
          <ul className="flex py-10">
             <li className="px-2"><Link to='/'>Home</Link></li>
            {/* <a href='/about'><li>About</li></a> */}
            <li className="px-2"><Link to='/about'>About</Link></li>
            <li className="px-2"><Link to='/contact'>Contact</Link></li>
            <li className="px-2"><Link to='/instamart'>Instamart</Link></li>
            <li className="px-2"><Link to='/cart'>Cart - {cartItems.length}</Link></li>

            
          </ul>
        </div>
        {user.name}
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
import { useState, useEffect } from "react"
import { restrautList } from "../Constants"
import RestaurantCard from "./RestaurantCards"
import Shimmer from "./shimmer"
import { Link } from "react-router-dom";


function filterData(searchInput, restaurants) {
  return restaurants.filter((restaurant)=> restaurant?.info?.name?.toLowerCase()?.includes(searchInput.toLowerCase() ))
}


const Body = () => {
  const searchtxt = 'KFC';
  //search text is a local variable (also called state variable)
  const [searchInput, setSearchInput] = useState("");
  //const [restaurants, setRestaurants] = useState(restrautList) //use state hook
  // this has been commented out because now we dont want to see the old hardcoded data before our APi call happens and we have out new data
  const [filteredrestaurants, setFilteredRestaurants] = useState([]) //use state hook
  const [allrestaurants, setAllRestaurants] = useState([])
  useEffect(()=>{
    //APICALL
    getRestaurants()
  }, [searchInput]) 
  
  async function getRestaurants(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.665956&lng=77.1006&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json()
    setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    //This is setting our restaurnat list from the api.
    setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

  }
  
  // Conditional Rendering
  // if restaurantList is empty => shimmerUI
  // is not emplty => API datra
  
  if(!allrestaurants) return null;
  // this all restaurant sometimes might not render quickly when page is loading and might show error of not existing to resolve either use 
  // optional chaingin or avoiding rendering using if or early return shown aboce

  // if(filteredrestaurants?.length === 0) return <h1>No Restaurant found</h1>

  return (allrestaurants?.length ===  0) ? <Shimmer/> :(
      <>
      <div className="search-container">
        <input 
        type="text" 
        className="search-input" 
        placeholder="Search" 
        value={searchInput}
        onChange={
          (e)=>{
            // searchtext = e.target.value;
            setSearchInput(e.target.value)
          }
        }
        />
      <button className="search-btn"
      onClick={() =>{
        const data = filterData(searchInput, allrestaurants); // first we filter data then we update state restaurants
        setFilteredRestaurants(data);
      }
        //need to filter 
      }>
        Search
      </button>
      </div>
      <div className="restaurant-list">
        {filteredrestaurants.map((restaurant)=>{
          return (
          <Link to={"/restaurant/" + restaurant.info.id}
          key={restaurant.info.id}>
          <RestaurantCard {...restaurant.info} key={restaurant.info.id}/>
          </Link>
          )
          
        })
        

        }
  
  
  {/* //----------This was for when we deconstructed on the fly------ */}
  
        {/* <RestaurantCard {...restrautList[0].info}  />
        <RestaurantCard {...restrautList[1].info}  />
        <RestaurantCard {...restrautList[2].info}  />
        <RestaurantCard {...restrautList[3].info}  />
        <RestaurantCard {...restrautList[4].info}  />
        <RestaurantCard {...restrautList[5].info}  />
        <RestaurantCard {...restrautList[6].info}  />
        <RestaurantCard {...restrautList[7].info}  />
        <RestaurantCard {...restrautList[8].info}  /> */}
  
  
  {/* //----------This was when we are using props directly--------- */}
        {/* <RestaurantCard restaurant={restrautList[1]} />
        <RestaurantCard restaurant={restrautList[2]} />
        <RestaurantCard restaurant={restrautList[3]} />
        <RestaurantCard restaurant={restrautList[4]} />
        <RestaurantCard restaurant={restrautList[5]} />
        <RestaurantCard restaurant={restrautList[6]} />
        <RestaurantCard restaurant={restrautList[7]} />
        <RestaurantCard restaurant={restrautList[8]} /> */}
      </div>
      </>
    )
    
  }

  export default Body  
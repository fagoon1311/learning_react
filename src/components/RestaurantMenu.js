import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { IMG_CDN_LINK } from "../Constants"
import Shimmer from "./shimmer"
const RestaurantMenu = () => {
    const params = useParams()
    const {id} = params

    
    // const [restaurant, setRestaurants] = useState({}) to avoid null error we will use null as the initial render not an empty object
    const [restaurant, setRestaurants] = useState(null)
    
    useEffect(()=>{
        getRestaurantinfo()
    }, [])

    async function getRestaurantinfo (){
        const data = await 
        fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.665956&lng=77.1006&restaurantId="+id+"&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        console.log(json.data);
        setRestaurants(json.data) //data is the object which we have got inside json we fetched from the api.
    }

   
    return (!restaurant)?<Shimmer/> :( 
        <div className="menu">
            <div>
                <h1>Restaurant id:{id}</h1>
                <h2>{restaurant?.cards?.[0]?.card?.card?.info?.name}</h2>
                <img src={IMG_CDN_LINK+restaurant?.cards?.[0]?.card?.card?.info?.cloudinaryImageId}></img>
                <h3>{restaurant?.cards?.[0]?.card?.card?.info?.areaName}</h3>
                <h3>{restaurant?.cards?.[0]?.card?.card?.info?.city}</h3>
                <h3>{restaurant?.cards?.[0]?.card?.card?.info?.avgRating} stars</h3>
                <h3>{restaurant?.cards?.[0]?.card?.card?.info?.costForTwoMessage}</h3>         
            </div>
            {/* {restaurant?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards && <div>
                {console.log(Object.values(restaurant?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map((item)=>item.card)))}
            </div>} */}
            <div>
                {console.log(restaurant?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)}
                <h1>Recommended Items</h1>
                {/* <ul>
                   { restaurant?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map((item)=><li>{item.card.info.name}</li>) }
                </ul> */}
                {restaurant?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
                    (item) =>item?.card?.card?.["@type"] ==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")?.card?.card?.itemCards.map((item)=> <li>{item.card.info.name}</li>)}

            </div>
            
        </div>
        
    )
}
export default RestaurantMenu
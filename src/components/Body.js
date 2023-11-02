import { restrautList } from "../Constants"
import RestaurantCard from "./RestaurantCards"

const Body = () => {
    return(
  
      <div className="restaurant-list">
        {restrautList.map((restaurant)=>{
          return <RestaurantCard {...restaurant.info} key={restaurant.info.id}/>
        })}
  
  
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
    )
  }

  export default Body  
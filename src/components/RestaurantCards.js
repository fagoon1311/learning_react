import { IMG_CDN_LINK } from "../Constants";


const RestaurantCard = ({ 
  name,
  cuisines,
  cloudinaryImageId,
  
 }) => {

  return( 
  <div className="w-56  p-5 m-2 shadow-lg bg-yellow-100">
    <img alt="Not Rendered"
    src={IMG_CDN_LINK+cloudinaryImageId}></img>
    <h2 className="font-bold text-lg text-orange-900">{name}</h2>
    <h3>{cuisines.join(", ")}</h3>
    {/* <h4>{sla?.deliveryTime} minutes</h4> */}
  </div>
  )
} 
// const RestaurantCard = (props) => {

//   return( 
//   <div className="card">
//     <img alt="Not Rendered"
//     src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+props.restaurant.info?.cloudinaryImageId}></img>
//     <h2>{props.restaurant.info?.name}</h2>
//     <h3>{props.restaurant.info?.cuisines.join(", ")}</h3>
//     <h4>{props.restaurant.info?.sla?.deliveryTime} minutes</h4>
//   </div>
//   )
// } 
export default RestaurantCard
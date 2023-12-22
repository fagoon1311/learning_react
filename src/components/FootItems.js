import { IMG_CDN_LINK } from "../Constants"
const FoodItem = ({name, description, imageId, defaultPrice}) => {
    return (
        <div className="w-56 p-2 m-2 shadow-lg bg-orange-50">
            <img src={IMG_CDN_LINK+imageId} className="w-56 h-40 p-2"></img>   
            <h2 className="text-red-950 font-bold text-lg">{name}</h2>
            <h4 className="text-xs">{description}</h4>
            <h4>₹{defaultPrice/100}</h4>   
        </div>
    )
}


export default  FoodItem
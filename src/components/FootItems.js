import { IMG_CDN_LINK } from "../Constants"
const FoodItem = ({name, description, imageId, price}) => {
    return (
        <div className="w-56 p-2 m-2 shadow-lg bg-orange-50">
            <h2 className="text-red-950 font-bold text-lg">{name}</h2>
            <h4 className="text-xs">{description}</h4>
            <h4>{price}</h4>   
            <img src={IMG_CDN_LINK+imageId}></img>   
        </div>
    )
}


export default  FoodItem
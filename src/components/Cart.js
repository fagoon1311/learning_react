import { useSelector } from "react-redux"
import FoodItem from "./FootItems"

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items)

    return (
    <div>
        <h1 className="text-4xl font-bold text-red-950">Cart items - {cartItems.length}</h1>
        <FoodItem {...cartItems[0]}/>
    </div>
    )
}

export default Cart
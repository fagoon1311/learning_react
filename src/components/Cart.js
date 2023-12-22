import { useDispatch, useSelector } from "react-redux"
import FoodItem from "./FootItems"
import { clearCart } from "../utils/cartSlice"

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items)
    const dispatch = useDispatch()
    const handleClearCart = () =>{
        dispatch(clearCart())
    }

    return (
    <div>
        <h1 className="text-4xl font-bold text-red-950">Cart items - {cartItems.length}</h1>
        <button onClick={()=>handleClearCart()} className="bg-slate-300 rounded-md">Clear cart</button>
        <div className="flex">
        {cartItems.map(item => <FoodItem {...item}/> )}
        </div>
    </div>
    )
}

export default Cart
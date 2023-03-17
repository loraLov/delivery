import { useSelector } from "react-redux";
import { getCartOrders, getTotalSum } from "../../Redux/cartSlice";
import CartItem from "./CartItem";

const Cart = () =>{
    const cartOrders = useSelector(getCartOrders);
    const totalSum = useSelector (getTotalSum)
    return(
        <div>
            <div className="cart">
            <img className = 'cartImage' src='https://img.icons8.com/external-obvious-line-kerismaker/512/external-shopping-cart-online-shopping-line-obvious-line-kerismaker.png' alt='cart'/>
            </div>
            <p className="total">TOTAL: ${totalSum}</p>
            {cartOrders.map(cartOrder => <CartItem key = {cartOrder.id} cartOrder = {cartOrder}/> )}
        </div>
    );
}
export default Cart;
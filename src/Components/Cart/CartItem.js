import { useDispatch } from "react-redux";
import dishesData from "../../Data/dishesData";
import { removeOrderFromCart } from "../../Redux/cartSlice";

const CartItem = ({cartOrder}) => {
    const dishes = dishesData.find(item => item.id === cartOrder.dishId);
    const dispatch = useDispatch();
    console.log(cartOrder)
    return(
    <div className="cartOrder">
       <h4>{dishes.name}</h4>
       <p>{cartOrder.quantity} portion(s)</p>
       <p>Price: ${dishes.price * cartOrder.quantity}</p>
       <span onClick = {() => dispatch(removeOrderFromCart({cartOrderId: cartOrder.id}))}>
       <img className="delete" src="https://img.icons8.com/windows/512/trash.png" alt='delete'/>
       </span>
       
    </div>
    )
}
export default CartItem;
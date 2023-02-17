import { useState } from "react";
import { useDispatch } from "react-redux";
import Quantity from "../../Data/Quantity";
import { addOrderToCart } from "../../Redux/cartSlice";

const Dish = ({dish}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    return(
    <div>
        <div className="dishBox">
            <img className="dishPicture" src= {`./${dish.img}.jpeg`} alt = 'dish'/>
            <h3>{dish.name}</h3>
            <p className="price">${dish.price}</p>
            
            <Quantity quantity = {quantity} setQuantity = {setQuantity} />
            <button className='add' onClick={() => {dispatch(addOrderToCart({dish,quantity}))}}>Add to cart</button>
            
        </div>
        
    </div>
    )
}
export default Dish;

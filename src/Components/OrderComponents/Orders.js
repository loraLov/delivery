import dishesData from "../../Data/dishesData";
import Dish from "./Dish";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../Redux/ordersSlise";


const Orders = () =>{
    const selectedCategory = useSelector(getSelectedCategory);
    return(
        <div className="orderMain">
          <div className="menu">
            <h2>Menu</h2>
          </div>
          <div className="dishMain">
             {dishesData
              .filter (dish =>{
                if (selectedCategory ==='ALL') return true;
                return selectedCategory === dish.category})
              .map ((dish) => (<Dish key = {dish.id} dish = {dish}/>))}
          </div>
        </div>
    );
}
export default Orders;
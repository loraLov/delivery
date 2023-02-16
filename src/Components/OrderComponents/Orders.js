import dishesData from "../../Data/dishesData";
import Dish from "./Dish";

const Orders = () =>{
    return(
        <div>
            {dishesData.map ((dish,index) => (<Dish key = {index} dish = {dish}/>))}
        </div>
    );
}
export default Orders;
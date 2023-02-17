import { useDispatch, useSelector } from "react-redux";
import { getSelectedCategory, listCategory } from "../../Redux/ordersSlise";


const Filter = ({category}) => {
    const selectedCategory = useSelector(getSelectedCategory);
    const dispatch = useDispatch();
    return(
        <div className="category">
           <p onClick = {() => {dispatch(listCategory(category))}} className={selectedCategory === category? 'selected nonselected' : 'nonselected'}>{category}</p> 
        </div>
    )
}
export default Filter;
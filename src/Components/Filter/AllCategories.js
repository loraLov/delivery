
import Filter from "./Filter";

const AllCategories = () =>{
    return(
        <div className="commonCategory">
          <p>{['APPETIZERS', 'ENTRIES', 'SALADS', 'PIZZA', 'SOUPS', 'ALL'].map(category => <Filter key = {category.id} category = {category}/>)}</p>
        </div>
    );
}
export default AllCategories;
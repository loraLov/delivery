
import Filter from "./Filter";

const AllCategories = () =>{
    return(
        <div className="commonCategory">
          <p>{['APPETIZERS', 'ENTRIES', 'SALADS', 'PIZZA', 'SOUPS', 'ALL'].map(category => <Filter category = {category}/>)}</p>
        </div>
    );
}
export default AllCategories;
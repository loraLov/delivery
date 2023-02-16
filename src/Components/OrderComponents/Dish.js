const Dish = ({dish}) => {
    return(
    <div className="loop">
        <div className="dishBox">
            <img className="dishPicture" src= {`./${dish.img}.jpeg`} alt = 'dish'/>
            <h3>{dish.name}</h3>
            <p className="price">${dish.price}</p>
        </div>
    </div>
    )
}
export default Dish;

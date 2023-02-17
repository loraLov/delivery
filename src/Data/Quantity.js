
const Quantity = ({quantity, setQuantity}) => {

    const removeDish = () => {
        if(quantity <= 1) return;
        const newQuantity = quantity - 1;
        setQuantity(newQuantity)
    }

    const addDish = () => {
       const newQuantity = quantity + 1;
       setQuantity(newQuantity)
    }
    return(
        <div>
            <button className="btn" onClick={removeDish}>-</button>
            <span>{quantity}</span>
            <button className="btn" onClick={addDish}>+</button>
        </div>
    )
}
export default Quantity;
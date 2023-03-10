
import './App.css';
import AllCategories from './Components/Filter/AllCategories';
import Cart from './Components/Cart/Cart';
import Orders from './Components/OrderComponents/Orders';
import image from './pic4.jpeg';
import pic from './pic.jpeg'

function App() {
  return (
    <div className="App">

<div className='heading'>
      <img  src = {pic} alt="logo" width='100px'/>
      <h1>Sea World</h1>
</div>

<div className='container'>
    <div className='left'>
      <AllCategories/>
      <Cart/>
    </div>
    <div className='right'>
      <img className="picMain" src={image} alt='shrimp'/>
    </div>
</div>

<Orders/>
    </div>
  );
}

export default App;

import { useState } from "react";
import Cart from "./Cart";
import Content from "./Content";
import Hr from "./Hr";
import Navbar from "./Navbar";
import { cartContext as CartContext } from './context/cartContext'


function App() {
const [count, setCount] = useState(0)
const [cart , setCart] = useState([])
const [render, setRender] = useState(false);

// create data object
const data = {
  cart,
  deleteFunc: (id) => {
    const newCart = cart.filter(item => item.id !== id);
    setCart(newCart)
  },
  checkOut:() => {setCart([])}
}

const addToCart = ({ count , item='' , description='' ,price = 125 }) =>{
  setCart([
    ...cart, {
      id:Math.floor(20 +( Math.random() * 1000)),
      count,
      item,
      description,
      price,
    }
  ])
}

  return (
    <CartContext.Provider value={{...data}}>
    <div className="App">
     {/* <Home /> */}
     <Navbar count={count} render={render}  setRender={setRender}/>
     <Hr />
     <Content count = {count} setCount = {setCount} addToCart={addToCart} />
     {render && <Cart />} 
     </div>
    </CartContext.Provider>
  );
}

export default App;

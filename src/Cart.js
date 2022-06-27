import React from 'react';
import { cartContext } from './context/cartContext';
import { useContext } from 'react';
import sp1 from './images/image-product-1-thumbnail.jpg';
import dlb from './images/icon-delete.svg';

function Cart() {
  const { cart, deleteFunc, checkOut } = useContext(cartContext)

  return (
    <div className='cart'>
      <div className="cartTitle">cart</div>
      <hr className='carthr' />
      <div className="allContent" >
        {
          (cart.length === 0) ? <p className='cartEmpty'>Cart is empty</p>
            :
            <>
              <div className="content" >
                {cart.map((item, index) => {
                  return (
                    <div className="render-data" key={index}>
                      <div className="image-block">
                        <img src={sp1} style={{ width: '50px', height: '50px' }} alt='shoe data' />
                      </div>
                      <div className="item-data">
                        <p>{item.description}</p>
                        <p>${item.price}.00 X {item.count} : <span style={{ fontWeight: "bold", marginLeft:"10px" }}>${eval(item.count * item.price)}.00</span>

                        </p>
                        </div>
                        <div>
                          <button style={{
                            cursor:"pointer"
                          }} className='deleteButton' onClick={() => deleteFunc(item.id)}>
                          <img className='deleteImg' src={dlb} alt="Delete button" />
                        </button></div>
                      
                    </div>
                  )
                })}
                <div className='Checkout'>
                  <button 
                  style={{
                    cursor:"pointer"
                  }}
                  className='checkoutButton'
                  onClick={() => checkOut()}>Checkout</button>
                </div>
              </div>
            </>

        }
      </div>

    </div>

  );
}

export default Cart
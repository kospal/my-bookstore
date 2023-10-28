import React, { useContext } from 'react';
import { ShopContext } from './ShopContent'; 
import "./Cart.css"


const Cart = () => {
  const { productsDisplay } = useContext(ShopContext); // Access the context
  const { totalPrice } = useContext(ShopContext);

  return (
    <><><div className='parent'>
      <p className='title'>Your products</p>
      <div className='my-products'>{productsDisplay()}</div>
      <div className='container'><p className='payment'>Your total payment is {totalPrice()}</p></div>
      <div><button className='checkout'>Proceed to Total Checkout</button></div>
      
    </div>
    <div className='footer-div'><p className='bookstore'>Bookstore  &#169; 2023</p></div>
    </></>
  );
}

export default Cart;

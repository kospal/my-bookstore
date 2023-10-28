import React from 'react'
import { myProducts } from '../Products.js';
import { useState} from 'react'
import { createContext } from 'react';
import './ShopContent.css'


export const ShopContext = createContext(null);

const ShopContent = ({children}) => {

    const cartItem = () => {
        let cart = {};

        for(let i = 0; i <= myProducts.length; i++){

            cart[i] = 0; 

        }

        return cart;
    }

    let [cartItems, setCartItems] = useState(cartItem());

    const addItem = (itemId) => {

        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));

    }

    const removeItem = (itemId) => {

    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));

    }

     // Calculate the total
     const sumCart = () => {
        let sum = 0;
        for (let i = 0; i <= myProducts.length; i++) {
            sum += cartItems[i];
        }
        return sum;
    };

    //display the products
    const productsDisplay = () => {
        return myProducts.map((product) => {
          if (cartItems[product.id] > 0) {
            return (
              <div className="products-div" key={product.id}>
                <div>
                  <img className="product-image" src={product.productImage} alt={product.productName} />
                  <button className="btn-removeproduct" onClick={()=>removeItem(product.id)}>Remove from Cart</button>
                </div>
                <div>
                  <p className="product-name">{product.productName} ({cartItems[product.id]})</p>
                </div>
                <div>
                  <p className="product-price">{product.price} € X {cartItems[product.id]}</p>
                </div>
                <div>
                
                </div>
              </div>
            );
          }
          return null; // Return null for items with cartItems[i] <= 0
        });
      }

      const totalPrice = () => {
        let sum = 0;
      
        myProducts.forEach((product) => {
          if (cartItems[product.id] > 0) {
            const productPrice = parseFloat(product.price);
            const quantity = parseFloat(cartItems[product.id]);
            const total = productPrice * quantity;
            sum += total;
          }
        });
      
        return (
          <>{(sum).toFixed(2)} €</>
       
        );
      };
      
      


      


      const contextValue = {
        cartItems,
        productsDisplay,
        cartItem,
        sumCart,
        addItem,
        totalPrice
      };
      
    
  return (
    <>

   {/* <Filters addItem={addItem} cartItems={cartItems} />
      <TotalCart sumCart={sumCart}/>
       {console.log(cartItems)} */} 
       
    {/*<Cart productsDisplay={productsDisplay}/> */} 
       
      <ShopContext.Provider value={contextValue}>
        {children}
      </ShopContext.Provider>

    </>
  )
}

export default ShopContent

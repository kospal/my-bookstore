import React, { useState } from 'react';
import Sidebar from './Sidebar.jsx';
import { myProducts } from '../Products.js';
import './AllProducts.css';
import './Sidebar.css';
import { useContext } from 'react'
import { ShopContext } from './ShopContent'



const Filters = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);

  const {addItem} = useContext(ShopContext);
  const {cartItems} = useContext(ShopContext);

  const myCategory = (category) => {
    setSelectedCategory(category);
  };

  const myPrice = (price) => {
    setSelectedPrice(price);
  };

  // Filter products based on selected category and price
  const filteredProducts = myProducts.filter((product) => {
    const categoryMatch = selectedCategory ? product.category === selectedCategory : true;
    const priceMatch =
      selectedPrice !== null
        ? (selectedPrice === 10 && product.price >= 10 && product.price <= 20) ||
          (selectedPrice === 20 && product.price >= 20 && product.price <= 30) ||
          (selectedPrice === 30 && product.price >= 30 && product.price <= 40) ||
          (selectedPrice === 40 && product.price >= 40 && product.price <= 50)
        : true;
    return categoryMatch && priceMatch;
  });

  return (
    <>
      <Sidebar myCategory={myCategory} myPrice={myPrice} />

      <div className="myproducts">
        {filteredProducts.map((product) => (
          <div className="products-div" key={product.id}>
            <div>
              <img className="product-image" src={product.productImage} alt={product.productName} />
            </div>
            <div>
              <p className="product-name">{product.productName}</p>
            </div>
            <div>
              <p className="product-price">{product.price} €</p>
            </div>
            <div>
              <button className="btn-product" onClick={() => { addItem(product.id)}}>Add to cart &nbsp;   
              {cartItems[product.id] > 0 ? `(${cartItems[product.id]})`:true} </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Filters;

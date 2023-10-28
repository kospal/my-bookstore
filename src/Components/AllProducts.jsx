import React from 'react';
import { myProducts } from '../Products.js';
import { useEffect, useState } from 'react'; 
import './AllProducts.css';


const AllProducts = () => {
  const myeffect = () => {
    return (
      <div className='myproducts'>
        {myProducts.map(product => (
          <div className='products-div'>
            <div><img className="product-image" src={product.productImage} alt={product.productName}/></div> 
            <div><p className='product-name'>{product.productName}</p></div>
            <div><p className='product-price'>{product.price} €</p></div>
            <div><button className='btn-product'> Add to cart </button></div>
          </div>
        ))}
      </div>
    );
  }


  const [content, setContent] = useState(null);
  

  useEffect(() => {
    
    setContent(myeffect());
    
  }, []);

  //const [Category, setCategory] = useState(true);

  return (
    <>
     
      {content}

    </>
  );
}

export default AllProducts;

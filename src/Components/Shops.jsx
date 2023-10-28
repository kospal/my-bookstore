import React from 'react';
import './Shops.css'
import books from './books.png';

const Shops = () => {
  return (
    <div>
      <h1 className='Bookstore-title'>Bookstore Shop</h1>
      <img className='my-img' src={books} alt="Logo could not be loaded"/>
    </div>
  );
}

export default Shops;

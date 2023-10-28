import React from 'react'
import './TotalCart.css'
import { useContext } from 'react'
import { ShopContext } from './ShopContent'

const TotalCart = () => {

  const {sumCart} = useContext(ShopContext);

  return (
    <div className='total-div'>
      <p className='number'>({sumCart()})</p>
    </div>
  )
}

export default TotalCart

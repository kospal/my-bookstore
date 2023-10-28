import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { PiShoppingCartSimpleBold } from 'react-icons/pi';
import TotalCart from './TotalCart';


const Navbar = ({ setVisibility }) => {
  useEffect(() => {
    const storedVisibility = localStorage.getItem('visibility');
    if (storedVisibility) {
      setVisibility(storedVisibility === 'true');
    }
  });

  // When the visibility state changes
  const handleVisibilityChange = (newVisibility) => {
    setVisibility(newVisibility);
    localStorage.setItem('visibility', newVisibility);
  };

  return (
    <div className="navbar-div">
      <div className="navbar-style">
        <Link to="/home" onClick={() => handleVisibilityChange(true)}>Home</Link>
          <Link to="/cart">
            <PiShoppingCartSimpleBold
              size={28}
              color={'white'}
              onClick={() => handleVisibilityChange(false)}
            />
          </Link>
        <TotalCart />
      </div>
    </div>
  );
};

export default Navbar;

import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ myCategory, myPrice }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <><> <button className="hamburger" onClick={() => { toggleSidebar()}}>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </button></>
    <div className='menu-text'>Menu</div>

    <div className={`sidebar ${sidebarVisible ? 'active' : ''}`}>
        

        <p className="section-title">Filters</p>

        <div className="categories">
          <p className="section-subtitle">CATEGORY</p>
          <input type="radio" id="fictions" name="filters" onChange={() => myCategory("Fiction")} />
          <label htmlFor="fiction">Fiction</label>
          <br />
          <input type="radio" id="horrors" name="filters" onChange={() => myCategory("Horror")} />
          <label htmlFor="horror">Horror</label>
          <br />
          <input type="radio" id="programmings" name="filters" onChange={() => myCategory("Programming")} />
          <label htmlFor="programming">Programming</label>
        </div>
        <br />
        <div className="prices">
          <p className="section-subtitle">PRICE</p>
          <input type="radio" id="price10" name="prices" onChange={() => myPrice(10)} />
          <label htmlFor="price10">10€ - 20€</label>
          <br />
          <input type="radio" id="price20" name="prices" onChange={() => myPrice(20)} />
          <label htmlFor="price20">20€ - 30€</label>
          <br />
          <input type="radio" id="price30" name="prices" onChange={() => myPrice(30)} />
          <label htmlFor="price30">30€ - 40€</label>
          <br />
          <input type="radio" id="price40" name="prices" onChange={() => myPrice(40)} />
          <label htmlFor="price40">40€ - 50€</label>
        </div>
      </div></>
  );
};

export default Sidebar;

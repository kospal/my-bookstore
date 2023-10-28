import './App.css';
import { Routes, Route, HashRouter } from "react-router-dom";
import Navbar from './Components/Navbar';
import Shops from './Components/Shops';
import Cart from './Components/Cart';
import ShopContent from './Components/ShopContent';
import Filters from './Components/Filters';
import { useState } from 'react';

function App() {

  const [visibility, setVisibility] = useState(true);

  return (
    <>
      <ShopContent>
        <HashRouter>
          <Navbar setVisibility={setVisibility}/>
          <Routes>
            <Route path="/" element={<Shops />} />
            <Route path="/cart" element={<Cart />}/>
          </Routes>
        </HashRouter>
      {visibility && 
      <div className='home'>
        <Filters />
       
      </div>}  
      </ShopContent>

      
    </>
  );
}

export default App;

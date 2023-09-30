import React from 'react';
import header from './header.module.css';
import Nav from '../../Nav';
import { Link } from 'react-router-dom';
import logo from './images/logo.png'
import order from './images/icons8-shopping_bag 1.png'


function Header() {
  return (
    <div className={header.wrapper}>
      <div className={header.logo}>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <button className={header.btn}>
          <Link to='/categories/all'>Catalog</Link>
        </button>
      </div>

      <div >
        <Nav />
      </div>
      
      <div className={header.burger_menu}>
          <Link to='/'>Main Page</Link>
          <Link to='/products/all'>All products</Link>
          <Link to='/promotion'>All salies</Link>
          <Link to='/order'>
              <img src={order} alt="order" />
          </Link>  
      </div>
    </div>
  );
}


export default Header;

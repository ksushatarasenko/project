import React from 'react';
import header from './header.module.css';
import Nav from '../../Nav';
import { Link } from 'react-router-dom';
import logo from './images/logo.png'

function Header() {
  return (
    <div className={header.wrapper}>
      <div className={header.logo}>
        <div>
          <img src={logo} alt="logo" />
        </div>  
        <button className={header.btn} ><Link to='/categories/all'>Каталог</Link></button>
      </div>

      <div >
        <Nav/>
      </div>
        
    </div>
  );
}

export default Header;

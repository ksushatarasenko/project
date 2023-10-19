import React, { useRef} from 'react';
import header from './header.module.css';
import Nav from '../../Nav'
import { Link } from 'react-router-dom';
import logo from './images/logo.png'
import order from './images/icons8-shopping_bag 1.png'
import burger_icon from './images/burger_icon.png'


function Header () {
  const navbarRef = useRef(null);
  const handleClick = () => {
    navbarRef.current.classList.toggle(`${header.show}`);
  }
  
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
      

      <div className={header.burger_menu_container} >

        <div className={header.burger_menu}>
            <div className={header.burger_icon} onClick={handleClick}>         
                <img src={burger_icon} alt="" />       
            </div>
           
            <div className={header.navbar}
                ref={navbarRef}>
              <Link to='/'>Main Page</Link>
              <Link to='/products/all'>All products</Link>
              <Link to='/promotion'>All salies</Link>
            </div>
        </div>
       
        <div className={header.cart}>
             
          <Link to='/order'>
              <img src={order} alt="order" />
          </Link> 
        </div>
           
      </div>
    </div>
  );
}


export default Header;


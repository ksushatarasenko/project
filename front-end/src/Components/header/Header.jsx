import React, { useRef} from 'react';
import header from './header.module.css';
import Nav from '../../Nav'
import { Link, NavLink } from 'react-router-dom';
import logo from '../image/logo.png'
import order from '../image/icons8-shopping_bag 1.png'
import burger_icon from '../image/burger_icon.png'
import cartStore from '../../store/cartStore/cartStore';
import '../../app.css'

function Header () {
  const navbarRef = useRef(null);
  const handleClick = () => {
    navbarRef.current.classList.toggle(`${header.show}`);
  }
  
  return (
    <div className={header.wrapper}>
        <div className={header.logoMenu}>
            <div className={header.logo}>
              <Link to='/'><img src={logo} alt="logo" /></Link>
            </div>
            <button className={header.btn}>
              <Link to='/categories/all'>Catalog</Link>
            </button>
        </div>
        <div className={header.navMenu}>
            <Nav />
        </div>
      
{/* ===== burger menu ========== */}
      <div className={header.burger_menu_container} >
        <div className={header.burger_order}>  
          <div>
          <Link to='/order'>
                <img src={order} alt="order" />
                <div>
                  {cartStore.totalCount > 0 ? (
                  <div className={header.cart_count}>{cartStore.totalCount}</div>
                  ) : (
                    <p className={header.p}>Your cart is empty</p>
                  )}
                </div>
            </Link> 
          </div>  
          <div className={header.burger_icon} onClick={handleClick}>         
              <img src={burger_icon} alt="" />       
          </div>
           
        </div>

        <div className={header.burger_menu}>          
            <div className={header.navbar}
                ref={navbarRef}>
              <NavLink to='/' className={({isActive})=> isActive ? 'active' : ''}>Main Page</NavLink>
              <NavLink to='/products/all' className={({isActive})=> isActive ? 'active' : ''}>All products</NavLink>
              <NavLink to='/promotion' className={({isActive})=> isActive ? 'active' : ''}>All salies</NavLink>             
            </div>
            
        </div>           
      </div>
    </div>
  );
}


export default Header;


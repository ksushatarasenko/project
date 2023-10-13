import React from 'react'
import { Link } from 'react-router-dom'; 
import header from './Components/header/header.module.css'
import order from './Components/header/images/icons8-shopping_bag 1.png'
import cartStore from './store/cartStore/cartStore';
import { observer } from 'mobx-react-lite';

const Nav = observer(() => {
  return (
    <nav className={header.nav}>
          <Link to='/'>Main Page</Link>
          <Link to='/products/all'>All products</Link>
          <Link to='/promotion'>All salies</Link>
          <div className={header.order}>
            <Link to='/order'>
              <img src={order} alt="order" />
            </Link> 
            {cartStore.totalCount > 0 ? (
              <p>Items in cart: {cartStore.totalCount}</p>
            ) : (
              <p>Your cart is empty</p>
            )}
            
          </div>
          
      </nav>
  )
})

export default Nav
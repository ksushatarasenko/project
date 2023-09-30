import React from 'react'
import { Link } from 'react-router-dom'; 
import header from './Components/header/header.module.css'
import order from './Components/header/images/icons8-shopping_bag 1.png'

function Nav() {
  return (
    <nav className={header.nav}>
          <Link to='/'>Main Page</Link>
          <Link to='/products/all'>All products</Link>
          <Link to='/promotion'>All salies</Link>
          <div className={header.order}>
            <Link to='/order'>
              <img src={order} alt="order" />
            </Link>  
          </div>
          
      </nav>
  )
}

export default Nav
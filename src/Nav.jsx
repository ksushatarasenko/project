import React from 'react'
import { Link } from 'react-router-dom'; 
import header from './Components/header/header.module.css'

function Nav() {
  return (
    <nav className={header.nav}>
          <Link to='/'>Main Page</Link>
          <Link to='/products/all'>All products</Link>
          
          {/* <Link to='/discount'>Купон</Link> */}
          <Link to='/promotion'>All salies</Link>
          {/* <Link to='/contact'>Контакты</Link> */}
          <Link to='/order'>
            <img src="https://w7.pngwing.com/pngs/657/152/png-transparent-shopping-bags-trolleys-shopping-cart-shopping-cart-rectangle-logo-shopping-bags-trolleys-thumbnail.png" alt="" />
          </Link>  
          
      </nav>
  )
}

export default Nav
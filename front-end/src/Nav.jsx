import React from 'react'
import { NavLink } from 'react-router-dom'; 
import header from './Components/header/header.module.css'
import order from './Components/image/icons8-shopping_bag 1.png'
import cartStore from './store/cartStore/cartStore';
import { observer } from 'mobx-react-lite';
import './app.css'


const Nav = observer(() => {
  return (
    <nav >
      <div className={header.menu}>

        <div className={header.nav}>
          <NavLink to='/' className={({isActive})=> isActive ? 'active' : ''}>Main Page</NavLink>
          <NavLink to='/products/all' className={({isActive})=> isActive ? 'active' : ''}>All products</NavLink>
          <NavLink to='/promotion' className={({isActive})=> isActive ? 'active' : ''}>All salies</NavLink>
        </div>
        
        <div className={header.order}>
          <NavLink to='/order'>
            <div className='cart'>
                <img src={order} alt="order" className={({isActive})=> isActive ? 'active' : ''}/>
                <div>
                  {cartStore.totalCount > 0 ? (
                  <div className={header.cart_count}>{cartStore.totalCount}</div>
                  ) : (
                    <p className={header.p}>Your cart is empty</p>
                  )}
                </div>              
            </div>
            
          </NavLink>    
        </div>

      </div>
    </nav>
  )
})

export default Nav
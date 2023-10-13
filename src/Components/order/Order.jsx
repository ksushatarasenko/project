import React from 'react'
import CartItem from './CartItem'
import order from './order.module.css'
import { Link } from 'react-router-dom'
import Footer from '../footer/Footer'
import { observer } from 'mobx-react-lite'

const Order = observer(() => {
  return (
    <div>
      <div className={order.cartTitle}>
        <h1>Shopping cart</h1>
        <div>
            <p>
              <Link to="/products/all">Back to the store 	&shy;  &gt;</Link>
            </p>
        </div>  
           <div className={order.line}></div>      
      </div> 
      
      <CartItem/>
      <Footer/>
    </div>
  )
})

export default Order;
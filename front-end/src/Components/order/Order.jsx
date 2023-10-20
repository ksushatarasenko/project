import React from 'react'
import OrderDetalis from './OrderDetalis'
import order from './order.module.css'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import AddItem from './AddItem'
import cartStore from '../../store/cartStore/cartStore'


//  Общая страница корзины
const Order = observer(() => {
  return (
    <div className={order.wrapper}>
      <div className={order.cartTitle}>
          <h1>Shopping cart</h1>
          <div>
              <p>
                <Link to="/products/all">Back to the store 	&shy;  &gt;</Link>
              </p>
          </div> 
          <hr className={order.line}/> 
      </div>  
      <div className={order.itemCart}>
          {(cartStore.items.length > 0) ? (<AddItem/>): ( 
            <div className={order.noItems}>
                <p >There are no items in your cart</p>
                <p >Do you want to see discounted products?</p>
                <Link className={order.link} to="/promotion">All salies</Link>
            </div>
            )
            } 
      </div> 
      <div className={order.page}><OrderDetalis/></div> 
      
    </div>
  )
})

export default Order;
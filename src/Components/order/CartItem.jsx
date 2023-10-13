import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import cartStore from '../../store/cartStore/cartStore'
import order from './order.module.css'
import AddItem from './AddItem'
import { Link } from 'react-router-dom'



const CartItem = observer(() => {
    useEffect(() => {
        cartStore.loadLocalStorage();
    }, [])
     console.log(cartStore.items)
  return (
    <div className={order.page}> 
        {(cartStore.items.length > 0) ? (<AddItem/>): ( 
            <div className={order.noItems}>
                <p >There are no items in your cart</p>
                <p >Do you want to see discounted products?</p>
                <Link className={order.link} to="/promotion">All salies</Link>
            </div>
            )
            }  
        
        <div className={order.order}>
            <h2 className={order.h2}>Orders detalis</h2>
                    {/* total + price */}
            <div className={order.counter}>
                <p className={order.total}>Total </p>

                <div className={order.totalPrice}>
                    <p className={order.totalCount}>{cartStore.amountPrice}</p>
                    <span className={order.price_span}>$</span>
                </div>                       
            </div>
                    {/* end total + price */}
            <form className={order.form} > 
                <input type="text" placeholder='Phone number' className={order.input}/>
                <button className={order.btn}>Order</button>
            </form> 
        </div>              
    </div>   
  )
})

export default CartItem
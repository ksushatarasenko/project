import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import cartStore from '../../store/cartStore/cartStore'
import order from './order.module.css'



// =========== Orders detalis ??==================
const OrderDetalis = observer(() => {
    useEffect(() => {
        cartStore.loadLocalStorage();
    }, [])
     console.log(cartStore.items)

  return (
           
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
    
  )
})

export default OrderDetalis
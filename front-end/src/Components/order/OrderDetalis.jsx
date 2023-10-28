import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import cartStore from '../../store/cartStore/cartStore'
import order from './order.module.css'
import Modal from '../modalWindow/Modal'
import modal from '../modalWindow/modal.module.css'




// =========== Orders detalis ??==================
const OrderDetalis = observer(() => {
    const { placeOrder} = cartStore;


    useEffect(() => {
        cartStore.loadLocalStorage();
    }, [])
     
    const handlePost =  (e) =>{
        e.preventDefault();
        console.log(cartStore)
        console.log("Order button clicked")
         placeOrder()
    }

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
                <button className={order.btn} onClick={handlePost}>Order</button>
                {localStorage.length === 0 && (
                    <Modal
                         wrapperClassName={modal.wrapper}
                         contentClassName={modal.content}
                         textClassName={modal.text}
                         btnClassName={modal.btn}>
                        <p>The order has been sent.</p>
                        <p>Thank you for your purchase!</p>
                    </Modal>
                )}
            </form> 
        </div>              
    
  )
})

export default OrderDetalis
import React from 'react'
import { observer } from 'mobx-react-lite'
import order from './order.module.css'
import cartStore from '../../store/cartStore/cartStore'

const AddItem = observer(() => {
  const product = cartStore.getSelectItems();

  const suma = (price, count) => {
    let total = price*count
    return total.toFixed(2)
  }

//    карточка с товаром в корзине
  return (
   
      <div>           
            {cartStore.isLoading ? (
                <p>Loading ... </p>
            ) : (
                product.map((item) => (
                <div key={item.product.id} >
                    <div className={order.item}>
                        <div className={order.image}>
                            <img src={`http://localhost:3333/${item.product.image}`} alt="" />
                        </div>

                        <div className={order.title_counter}>                           
                            <p className={order.title}>{item.product.title}</p>
                            <div className={order.count}>
                                <p onClick={() => cartStore.decrement(item.product.id)}
                                    className={order.minus}>-</p>
                                <p> {item.quantity}</p>
                                <p className={order.minus}
                                    onClick={() => cartStore.increment(item.product.id)}>+</p>
                            </div>                       
                        </div>

                        <div className={order.block_price}>
                            <div className={order.price}>
                                {item.product.discont_price === null ? (
                                    <p className={order.price_p}> 
                                        {suma(item.product.price, item.quantity)}
                                        <span
                                            className={order.price_dollar}>$</span>
                                    </p>
                                ) : (
                                    <p className={order.price_p}> 
                                        {suma(item.product.discont_price, item.quantity)}
                                        <span
                                            className={order.price_dollar}>$</span>
                                    </p>
                                )}
                                
                                    {item.product.discont_price && (
                                        <p className={order.discount_price}>
                                            {suma(item.product.price, item.quantity)}$</p>
                                    )}
                            </div>                          
                        </div>

                        <div onClick={() => cartStore.removeItem(item.product.id)}          
                                className={order.delete}>
                            <p>X</p>
                        </div>

                        <hr className={order.line}/> 
                    </div>                                      
                </div>
                ))
            )}           
        </div>
    
  )
})

export default AddItem
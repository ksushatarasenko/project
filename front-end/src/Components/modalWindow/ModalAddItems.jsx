import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import modalAddItem from './modalAddItem.module.css'
import cartStore from '../../store/cartStore/cartStore'

const ModalAddItems = observer (() => {
    const product = cartStore.getSelectItems();
    

  const suma = (price, count) => {
    let total = price*count
    return total.toFixed(2)
  }

    useEffect(() => {
        cartStore.loadLocalStorage();
    }, [])

    return (
   
        <div className={modalAddItem.wrapper}>  
            <p className={modalAddItem.p}>Product added to cart</p>
            <div className={modalAddItem.addItems}>
                {cartStore.isLoading ? (
                    <p>Loading ... </p>
                ) : (
                    product.map((item) => (
                    <div key={item.product.id} >
                        {/* card product */}
                        <div className={modalAddItem.item}>
                            <div className={modalAddItem.image}>
                                <img src={`http://localhost:3333/${item.product.image}`} alt="" />
                            </div>
    
                            <div className={modalAddItem.title_counter}>                           
                                <p className={modalAddItem.title}>{item.product.title}</p>
                                <div className={modalAddItem.count}>
                                    <p onClick={() => cartStore.decrement(item.product.id)}
                                        className={modalAddItem.minus}>-</p>
                                    <p> {item.quantity}</p>
                                    <p className={modalAddItem.minus}
                                        onClick={() => cartStore.increment(item.product.id)}>+</p>
                                </div>                       
                            </div>
    
                            <div className={modalAddItem.block_price}>
                                <div className={modalAddItem.price}>
                                    {item.product.discont_price === null && (
                                        <p className={modalAddItem.price_p}> 
                                            {suma(item.product.price, item.quantity)}
                                            <span
                                                className={modalAddItem.price_dollar}>$</span>
                                        </p>
                                    ) }
                                    
                                        {item.product.discont_price && (
                                            <p className={modalAddItem.discount_price}>
                                                {suma(item.product.price, item.quantity)}$</p>
                                        )}
                                </div>                          
                            </div>
    
                            <div onClick={() => cartStore.removeItem(item.product.id)}          
                                className={modalAddItem.delete}>
                                <p>X</p>
                            </div>
                        </div>                                      
                    </div>
                    ))
              )}           
            </div>  
            <div className={modalAddItem.order}>
                <h4 className={modalAddItem.h4}>Orders detalis</h4>
                    {/* total + price */}
                <div className={modalAddItem.counterOrder}>
                    <p className={modalAddItem.total}>Total </p>

                    <div className={modalAddItem.totalPrice}>
                        <p className={modalAddItem.totalCount}>{cartStore.amountPrice}</p>
                        <span className={modalAddItem.price_span}>$</span>
                    </div>                       
                </div>
                <div>
                </div>
            </div>       
              
          </div>
      
    )
  })

export default ModalAddItems
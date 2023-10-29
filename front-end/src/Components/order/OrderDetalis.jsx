import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import cartStore from '../../store/cartStore/cartStore'
import order from './order.module.css'
import Modal from '../modalWindow/Modal'
import modal from '../modalWindow/modal.module.css'
import InputMask from 'react-input-mask';




// =========== Orders detalis ??==================
const OrderDetalis = observer(() => {
    const { placeOrder, setClearCart} = cartStore;
    const [isOrderModalOpen, setOrderModalOpen] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(false);

    useEffect(() => {
        cartStore.loadLocalStorage();
    }, [])
     
    
    const handleInputChange = (e) => {
        let inputValue = e.target.value;
        if (inputValue.length >= 12) { 
            setIsValidPhoneNumber(true);
            setPhoneNumber(inputValue);
        } else {
            setIsValidPhoneNumber(false);
        }
        console.log('value ===>', inputValue);
        console.log('length ===>', inputValue.length);
    };
    
    const handlePost =  (e) =>{
        e.preventDefault();
        if (isValidPhoneNumber) {
            placeOrder();
            setOrderModalOpen(true);
            localStorage.clear();
            setClearCart();
            setPhoneNumber ('')
        } else {
            alert("Incorrect phone number entered");
        }
    }
    
    
      const closeModal = () => {
        
        setOrderModalOpen(false);       
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
                <div className={order.formContainer}>
                    <div>
                        <InputMask
                            mask="+4 (999) 999-9999"
                            // maskChar="_"
                            value={phoneNumber}
                            onChange={handleInputChange}
                            placeholder='Phone number'
                            className={order.input}
                            type='tel'
                        />
                         {/* {isValidPhoneNumber ? null : (
                            <p className="error-message">Incorrect phone number entered</p>
                        )} */}
                    </div>
                    <button className={order.btn} onClick={handlePost}>Order</button>
                    {isOrderModalOpen &&  (
                        <Modal
                            isModalOpen={isOrderModalOpen}
                            setIsModalOpen={setOrderModalOpen}
                            wrapperClassName={modal.wrapper}
                            contentClassName={modal.content}
                            textClassName={modal.text}
                            btnClassName={modal.btn}>
                                <div className={modal.wrapper}>
                                    <div className={modal.content}>     
                                    <div className={modal.text}>
                                        <p>The order has been sent.</p>
                                        <p>Thank you for your purchase!</p>                           
                                    </div>
                                    <div>
                                        <button onClick={closeModal} className={modal.btn}>Close</button>  
                                    </div>
                                    </div>
                                </div>
                        </Modal>
                    )}
                </div>
                
            </form> 
        </div>              
    
  )
})

export default OrderDetalis
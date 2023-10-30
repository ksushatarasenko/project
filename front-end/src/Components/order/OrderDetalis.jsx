import React, { useEffect, useRef, useState } from 'react'
import { observer } from 'mobx-react-lite'
import cartStore from '../../store/cartStore/cartStore'
import order from './order.module.css'
import Modal from '../modalWindow/Modal'
import modal from '../modalWindow/modal.module.css'


// =========== Orders detalis ()==================
const OrderDetalis = observer(() => {
    const { placeOrder, setClearCart, setIsSecondModalOpen, setIsFirstModalOpen, isFirstModalOpen, isSecondModalOpen, setIsFirstModalClose,setIsSecondModalClose} = cartStore;
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(false);
    const phoneInputRef = useRef(null);

    useEffect(() => {
        cartStore.loadLocalStorage();
    }, [])
     
    const handleInputChange = (e) => {
        setPhoneNumber (e.target.value);
        // inputValue = inputValue.replace(/\D/g, '');
        if (phoneNumber.length === 12) { 
            setIsValidPhoneNumber(true);
            console.log('phoneNumber ===>', phoneNumber);
        } else {
            setIsValidPhoneNumber(false);
        }
        console.log('phoneNumber ===>', phoneNumber);
        
    };
    
    const handlePost =  (e) =>{
        e.preventDefault();
        if (isValidPhoneNumber && cartStore.items.length > 0) {
                placeOrder();
                setIsFirstModalOpen();                   
                localStorage.clear();
                setClearCart();               
                setPhoneNumber('');      
                if (phoneInputRef.current) {
                    phoneInputRef.current.focus(); 
                }
        } else {
            setIsSecondModalOpen()
            alert("Incorrect phone number entered");
            setPhoneNumber('')
        }
            
    }

      const closeModal = () => {   
        setIsFirstModalClose(); 
        setIsSecondModalClose();
        console.log(isFirstModalOpen, isSecondModalOpen)    
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
                        <input 
                            type="text" 
                            placeholder='Phone number'
                            className={order.input}
                            onChange={handleInputChange}
                            value={phoneNumber}
                            />
                         {!isValidPhoneNumber && (
                            <p className="error-message">Неверный номер телефона</p>
                            )}
                    </div>
                    <button className={order.btn} onClick={handlePost}>Order</button>
                </div>               
            </form> 
                    {isFirstModalOpen &&  isValidPhoneNumber &&(
                        <Modal
                            isModalOpen={isFirstModalOpen}
                            // setIsModalOpen={setOrderModalOpen}
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
                    {isSecondModalOpen && (
                        <Modal
                            isModalOpen={setIsSecondModalOpen}
                            setIsModalOpen={!setIsSecondModalOpen}
                            wrapperClassName={modal.wrapper}
                            contentClassName={modal.content}
                            textClassName={modal.text}
                            btnClassName={modal.btn}
                        >
                            <div className={modal.wrapper}>
                            <div className={modal.content}>
                                <div className={modal.text}>
                                <p>Your cart is empty.</p>
                                <p>Select product!</p>
                                </div>
                                <div>
                                <button onClick={closeModal} className={modal.btn}>
                                    Close
                                </button>
                                </div>
                            </div>
                            </div>
                        </Modal>
                        )}
               
        </div>              
    
  )
})

export default OrderDetalis
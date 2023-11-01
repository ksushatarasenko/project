import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import cartStore from '../../store/cartStore/cartStore'
import order from './order.module.css'
import Modal from '../modalWindow/Modal'
import modal from '../modalWindow/modal.module.css'
import InputMask from 'react-input-mask';


// =========== Orders detalis ()==================
const OrderDetalis = observer(() => {
    const { placeOrder, setClearCart} = cartStore;
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isTouched, setIsTouched] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);


    useEffect(() => {
        cartStore.loadLocalStorage();
    }, [])
     
    const handleInputChange = (e) => {
        setIsTouched(true);
        const enteredValue = e.target.value;
        setPhoneNumber(enteredValue);
        const numericValue = enteredValue.replace(/\D/g, '');
      
        if (numericValue.length <= 10) {
          setIsValidPhoneNumber(false);
        } else {
          setIsValidPhoneNumber(true); 
        }   
      };
    
    const handlePost =  (e) =>{
        e.preventDefault();
        if (isValidPhoneNumber && cartStore.items.length > 0) {
                placeOrder();
                setIsModalOpen(true);
                setSuccess("The order has been sent. Thank you for the order!")                   
                localStorage.clear();
                setClearCart(); 
                setPhoneNumber('');                         
        } else if(isValidPhoneNumber && cartStore.items.length <= 0){
            setIsModalOpen(true);
            setError("There is no item in the cart. Do you want to choose to view the catalogue?");
            setPhoneNumber('')
        } else if (!isValidPhoneNumber && cartStore.items.length > 0){
            setIsModalOpen(true)
            setError('"Incorrect phone number entered"')            
        }            
    }

      const closeModal = () => {   
        setIsModalOpen(false); 
        setError('');
        setSuccess('');        
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
                    <InputMask
                        mask="+4 999 999 99 99"
                        maskChar="_"
                        type="tel"
                        placeholder="Phone number"
                        className={order.input}
                        onChange={handleInputChange}
                        value={phoneNumber}
                        />
                        {!isValidPhoneNumber && isTouched &&(
                            <div className={order.error_message}>
                                <p className="error-message">Please enter a correct phone number.</p>
                            </div> 
                        )}
                    <button className={order.btn} onClick={handlePost}>Order</button>
                </div>               
            </form> 
                    {setIsModalOpen &&(
                    <Modal
                        isModalOpen={isModalOpen}
                        setIsModalOpen = {() => setIsModalOpen(false)}
                        wrapperClassName={modal.wrapper}
                        contentClassName={modal.contentDiscount}
                        textClassName={modal.text}
                        btnClassName={modal.btn}>
                            <div className={modal.contentDiscount}>     
                                <div className={modal.text}>
                                    {success && <p className={modal.p}>{success}</p>}
                                    {error && <p className={modal.p}>{error}</p>}
                                </div>
                                <div>
                                    <button onClick={closeModal} className={modal.btn}>Close</button>  
                                </div>
                            </div>
                    </Modal>
                    )}                   
        </div>                  
  )
})

export default OrderDetalis
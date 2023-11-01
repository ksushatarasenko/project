import React, {useState } from 'react'
import disc from './discount.module.css'
import gnom from '../image/gnom.png'
import productsStore from '../../store/productsStore'
import { observer } from 'mobx-react-lite'
import Modal from '../modalWindow/Modal'
import modal from '../modalWindow/modal.module.css'
import InputMask from 'react-input-mask';



const Discount = observer  (() =>{
  const [phoneNumber, setPhoneNumber] = useState('')
  const [success, setSuccess] = useState('');
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {sendCoupon} = productsStore;

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
    console.log('status phone =>', isValidPhoneNumber)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidPhoneNumber) {  
      sendCoupon(phoneNumber)   
      setIsModalOpen(true)
      setSuccess("Your discount has been applied!");          
    }     
    setPhoneNumber("");   
  };

  console.log(success)
  
console.log("phone =>>", phoneNumber)


const closeModal = () => {   
  setIsModalOpen(false); 
  setSuccess('')  
}

  return (
    <div className={disc.wrapper}>
      <div className={disc.img}>
        <img src={gnom} alt="gnom" />
      </div>
      <div className={disc.text}>
        <h1 className={disc.h1}>5% off</h1>
        <h2 className={disc.h2}>on the first order</h2>
      </div> 
      <form className={disc.form}>
           <InputMask
                mask="+4 999 999 99 99"
                maskChar="_"
                type="tel"
                placeholder="+49"
                className={disc.input} 
                onChange={handleInputChange}
                value={phoneNumber}
            />
                {!isValidPhoneNumber && isTouched && (
                  <div className={disc.error_message}>
                    <p className="error-message">Please enter a correct phone number.</p>
                  </div>                   
                )}
        <button className={disc.btn} type="submit" onClick={handleSubmit}>
          Get a discount
        </button>
      </form>
      {setIsModalOpen &&(
            <Modal
            isModalOpen={isModalOpen}
            setIsModalOpen={closeModal}
            wrapperClassName={modal.wrapper}
            contentClassName={modal.content}
            textClassName={modal.text}
            btnClassName={modal.btn}
          >
            <div className={modal.contentDiscount}>
              <div className={modal.text}>
                {success && <p className={modal.p}>{success}</p>}
              </div>
              <div>
                <button onClick={closeModal} className={modal.btn}>
                  Close
                </button>
              </div>
            </div>
          </Modal>
        )}
    </div>
  )
})

export default Discount
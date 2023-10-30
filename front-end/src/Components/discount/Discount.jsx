import React, { useRef, useState } from 'react'
import disc from './discount.module.css'
import gnom from '../image/gnom.png'
import productsStore from '../../store/productsStore'
import { observer } from 'mobx-react-lite'
import Modal from '../modalWindow/Modal'
import modal from '../modalWindow/modal.module.css'


const Discount = observer  (() =>{
  const [phoneNumber, setPhoneNumber] = useState('')// состояние номера который вводим в инпут

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(false);
  const phoneInputRef = useRef(null);
  const {
      isModalOpen, 
      setIsModalOpen, 
      setIsModalClose,
      sendCoupon, 
      } = productsStore;


  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
    console.log('lenght =>', phoneNumber.length)
    if(phoneNumber.length === 11){
      setIsValidPhoneNumber(true) 
    } 
    setError('')
    setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isValidPhoneNumber) {
      try {
        const response = await sendCoupon(phoneNumber);
        console.log(response)
        if (response) {
          // Обработка успешного ответа
          if (response.status === 'OK') {
            setIsModalOpen(true)
            setSuccess("Your discount has been applied!");
          } else {
            setIsModalOpen(true)
            setError("Wrong phone number.The number must contain 12 digits.");
          }
        }
      } catch (error) {
        setError(error.message);
      }
      setIsModalOpen(true)
      setPhoneNumber("");
    }
    //  else {
    //   setIsModalOpen(true)
    //   setError("Wrong phone number. The number must contain 12 digits.")
    //   setPhoneNumber("");

    // }
  };
  
    
    if (phoneInputRef.current) {
      phoneInputRef.current.focus(); 
  }
  console.log(success, error)
  
console.log("phone =>>", phoneNumber)


const closeModal = () => {   
  setIsModalClose();   
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
        <input
          // style={{ border: isValidPhoneNumber ? '1px solid green' : '1px solid red' }}
          className={disc.input}          
          type="text"
          placeholder="+49"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
        {!isValidPhoneNumber && (
          <div>
            <p className="error-message">The phone number must be in the format +4 1234567891</p>
          </div>
          )}
        <button className={disc.btn} type="submit" onClick={handleSubmit}>
          Get a discount
        </button>
      </form>
      {setIsModalOpen &&(
            <Modal
                isModalOpen={isModalOpen}
                setIsModalOpen = {() => setIsModalOpen(false)}
                wrapperClassName={modal.wrapper}
                contentClassName={modal.content}
                textClassName={modal.text}
                btnClassName={modal.btn}>
                  <div className={modal.wrapper}>
                    <div className={modal.contentDiscount}>     
                        <div className={modal.text}>
                            {success && <p className={modal.p}>{success}</p>}
                            {error && <p className={modal.p}>{error}</p>}
                        </div>
                        <div>
                            <button onClick={closeModal} className={modal.btn}>Close</button>  
                        </div>
                    </div>
                  </div>
              </Modal>
        )}
    </div>
  )
})

export default Discount
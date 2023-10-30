import React, { useState } from 'react';
import modal from './modal.module.css'

const Modal = ({ children, wrapperClassName, contentClassName, textClassName, btnClassName, ItemsClassName,OrdersClassName, isModalOpen, setIsModalOpen}) => {
 
 console.log('OPEN ==>', isModalOpen)

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const overlayClick = (e) => {
    if (e.target === e.currentTarget) {
      console.log("overlayClick called");
      closeModal();
    }
  
};

// console.log('Modal in modal', isModalOpen)

  return isModalOpen ? (
    <div className={wrapperClassName} onClick={overlayClick}>     
        {children }
        {/* <button onClick={closeModal} className={modal.btn}>Close</button>  */}
    </div>
  ) : null;
};

export default Modal;

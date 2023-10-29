import React, { useState } from 'react';
// import modal from './modal.module.css'

const Modal = ({ children, wrapperClassName, contentClassName, textClassName, btnClassName, ItemsClassName,OrdersClassName, isModalOpen, setIsModalOpen}) => {
 

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const overlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  
};

console.log('Modal in modal', isModalOpen)

  return isModalOpen ? (
    <div className={wrapperClassName} onClick={overlayClick}>     
        {children }
    </div>
  ) : null;
};

export default Modal;

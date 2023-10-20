import React, { useState } from 'react';
import modal from './modal.module.css'

const Modal = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  const overlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
};
  return isOpen ? (
    <div className={modal.wrapper} onClick={overlayClick}>
      <div className={modal.content}>
        <div className={modal.text}>
            {children }
        </div>
        
        <button onClick={closeModal} className={modal.btn}>Закрыть</button>
      </div>
    </div>
  ) : null;
};

export default Modal;

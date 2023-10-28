import React, { useState } from 'react';
// import modal from './modal.module.css'

const Modal = ({ children, wrapperClassName, contentClassName, textClassName, btnClassName}) => {
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
    <div className={wrapperClassName} onClick={overlayClick}>
      <div className={contentClassName}>
        <div className={textClassName}>
            {children }
        </div>
        
        <button onClick={closeModal} className={btnClassName}>Закрыть</button>
      </div>
    </div>
  ) : null;
};

export default Modal;

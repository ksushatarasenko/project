import React from 'react';

const Modal = ({ children, wrapperClassName,
          contentClassName,
          textClassName,
          btnClassName,
          isModalOpen,
          setIsModalOpen}) => {
           
  const closeModal = () => {
    console.log("closeModal called");
    setIsModalOpen(false);
  };

  const overlayClick = (e) => {
    if (e.target === e.currentTarget) {
      console.log("overlayClick called");
      closeModal();
      console.log(e.target)
    }
  
};

  return isModalOpen ? (
    <div className={wrapperClassName} onClick={overlayClick}>
      {children}
    </div>
  ) : null;
};

export default Modal;

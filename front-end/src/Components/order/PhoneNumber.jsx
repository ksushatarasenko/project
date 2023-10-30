// import React, { useState } from 'react'
// import { observer } from 'mobx-react-lite'
// import cartStore from '../../store/cartStore/cartStore'
// import order from './order.module.css'
// import InputMask from 'react-input-mask';


// const OrderDetalis = observer(() => {
//     const { placeOrder, setClearCart} = cartStore;
//     const [isOrderModalOpen, setOrderModalOpen] = useState(false);
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(false);

    
//     const handleInputChange = (e) => {
//         let inputValue = e.target.value;
//         if (inputValue.length >= 25) { 
//             setIsValidPhoneNumber(true);
//             setPhoneNumber(inputValue);
//         } else {
//             setIsValidPhoneNumber(false);
//         }
//         console.log('value ===>', inputValue);
//         console.log('length ===>', inputValue.length);
//     };
    
//     const handlePost =  (e) =>{
//         e.preventDefault();
//         if (isValidPhoneNumber) {
//             placeOrder();
//             setOrderModalOpen(true);
//             localStorage.clear();
//             setClearCart();
//             setPhoneNumber ('')
//         } else {
//             alert("Incorrect phone number entered");
//         }
//     }

//   return (          
//         <div>           
//             <div className={order.formContainer}>
//                 <div>
//                     <InputMask
//                         mask="+4\999999-9999"
//                         maskChar="_"
//                         value={phoneNumber}
//                         onChange={handleInputChange}
//                         placeholder='Phone number'
//                         className={order.input}
//                         type='tel'
//                         disabled 
//                     />
//                     {!isValidPhoneNumber && (
//                     <small className="p-error">Недопустимая длина телефонного номера</small>
//                     ) }
//                 </div>                  
//             </div>
//         </div>                 
//   )
// })

// export default OrderDetalis





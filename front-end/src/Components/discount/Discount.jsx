import React from 'react'
import disc from './discount.module.css'
import gnom from '../image/gnom.png';



function Discount() {
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
        <input className={disc.input} type="text" placeholder='+49'  />
        <button className={disc.btn}>Get a discount</button>
      </form>
     
    </div>
  )
}

export default Discount
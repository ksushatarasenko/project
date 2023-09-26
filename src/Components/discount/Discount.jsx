import React from 'react'
import disc from './discount.module.css'
import gnom from './gnom.png';



function Discount() {
  return (
    <div className={disc.wrapper}>
      <div className={disc.img}>
        <img src={gnom} alt="gnom" />
      </div>
      <div className={disc.text}>
        <h1>5% off</h1>
        <h2>on the first order</h2>
        <form className={disc.form}>
          <input className={disc.input} type="text" placeholder='+49' value='+49' onChange={(e) => {}}/>
          <button className={disc.btn}>Get a discount</button>
        </form>
      </div>
    </div>
  )
}

export default Discount
import React from 'react'
import sale from './sale.module.css'
import saleImg from './sale.png'
import { Link } from 'react-router-dom'


function Sale() {
  
  return (
    <div className={sale.wrapper}>
      <div className={sale.text}>
        <div>
          <h1 className={sale.h1}>Sale</h1>
          <h2 className={sale.h2}>New season</h2>
        </div>
        
        <button className={sale.btn}>
          <Link to='/promotion'>Sale</Link>
        </button>
      </div>
      <div className={sale.img}>
        <img src={saleImg} alt="img" />
      </div>     
    </div>
  )
}

export default Sale
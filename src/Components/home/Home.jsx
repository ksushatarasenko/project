import React from 'react'

import Footer from '../footer/Footer'
import Sale from '../Sale/Sale'
import Discount from '../discount/Discount'
import Promotion from '../Promotion/Promotion'
import Categories from '../Products/Categories/Categories'

function Home() {
  return (
    <div>
      <Sale/> 
      <Categories/>
      <Discount/>
      <Promotion/>
      <Footer/>
    </div>
  )
}

export default Home
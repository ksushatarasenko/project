import React from 'react'
import { observer } from 'mobx-react-lite'
import sortingStore from '../../store/sorting/sortingStore'
import sort from './sorting.module.css'
import allProducts from '../../store/productsStore'

const DiscountSorting = observer(() => {
    const {setShowDiscount} = sortingStore
    const {products} = allProducts;

    const handleChangeCheckbox = (e) => {  
      let checked = (e.target.checked);
      console.log(checked)
      setShowDiscount(checked, products)
    }

  return (
    
    <div className={sort.discount}>
        <h3>Discounted items: </h3>
        <form className={sort.discount_form}>
            <input 
              type="checkbox" 
              onChange={handleChangeCheckbox} 
              className={sort.discount_input} />
        </form>
    </div>
  )
})

export default DiscountSorting
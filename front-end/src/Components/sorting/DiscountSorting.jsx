import React from 'react'
import { observer } from 'mobx-react-lite'
import sortingStore from '../../store/sorting/sortingStore'
import sort from './sorting.module.css'

const DiscountSorting = observer(({products}) => {
    const {setShowDiscount} = sortingStore

    const handleChangeCheckbox = (e) => {  
      let checked = (e.target.checked);
      console.log(checked)
      setShowDiscount(checked, products)
    }

  return (
    
    <div className={sort.checkbox}>
      <label className={sort.label}>
        <h3>Discounted items: </h3>
        <input      
          type="checkbox" 
          onChange={handleChangeCheckbox} 
          className={sort.input}
          />
        <span className={sort.fake}></span>
      </label>
    </div>
  
  )
})

export default DiscountSorting
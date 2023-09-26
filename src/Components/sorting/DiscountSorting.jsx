import React from 'react'
import { observer } from 'mobx-react-lite'
import sortingStore from '../../store/sortingStore'
import sort from './sorting.module.css'

const DiscountSorting = observer(() => {
    const {showDiscount, changeDiscounted} = sortingStore

  return (
    
    <div className={sort.discount}>
        <h3>Discounted items: </h3>
        <form >
            <input type="checkbox" checked={showDiscount} onChange={changeDiscounted} className={sort.discount_input} />
        </form>
    </div>
  )
})

export default DiscountSorting
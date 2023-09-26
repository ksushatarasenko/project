import React from 'react'
import sortingStore from '../../store/sortingStore'
import {observer} from 'mobx-react-lite'
import sort from './sorting.module.css'

const SortingPrice = observer (() => {
    const {priceFrom, priceTo} = sortingStore;

    console.log(priceFrom, priceTo);

    const handlePriceFrom = (e) => {
        console.log("Price From changed:", e.target.value);
        if (sortingStore) {
            sortingStore.setPriceFrom(parseInt(e.target.value));
        }
    }
    
    const handlePriceTo = (e) => {
        console.log("Price From changed:", e.target.value);
        if (sortingStore) {
            sortingStore.setPriceTo(parseInt(e.target.value));
        }
    }
    

  return (
    <div className={sort.price}>
        <h3>Price </h3>
        <form className={sort.form}>
            <input type="text" value={priceFrom} placeholder='from' onChange={handlePriceFrom} className={sort.price_input}/>
            <input type="text" value={priceTo} placeholder='to' onChange={handlePriceTo} className={sort.price_input}/>
        </form>
    </div>
  )
})

export default SortingPrice
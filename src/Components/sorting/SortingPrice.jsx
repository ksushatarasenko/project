import React from 'react'
import sortingStore from '../../store/sorting/sortingStore'
import {observer} from 'mobx-react-lite'
import sort from './sorting.module.css'
import allProducts from '../../store/allProducts'

const SortingPrice = observer (() => {
    const {minPrice, maxPrice} = sortingStore;

    console.log(minPrice, maxPrice);

    const handlePriceFrom = (e) => {
        console.log("Price From changed:", e.target.value);
        if (sortingStore) {
            sortingStore.setMinPrice(e.target.value);
        }
    }
    
    const handlePriceTo = (e) => {
        console.log("Price To changed:", e.target.value);
        if (sortingStore) {
            sortingStore.setMaxPrice(e.target.value);
        }
    }
    

  return (
    <div className={sort.price}>
        <h3 className={sort.h3}>Price </h3>
        <form className={sort.form}>
            <input 
                type="text" 
                value={minPrice} 
                placeholder='from' 
                onChange={handlePriceFrom} 
                className={sort.price_input}/>
            <input 
                type="text" 
                value={maxPrice} 
                placeholder='to' 
                onChange={handlePriceTo} 
                className={sort.price_input}/>
        </form>
    </div>
  )
})

export default SortingPrice
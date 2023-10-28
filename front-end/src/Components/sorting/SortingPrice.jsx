import React from 'react'
import sortingStore from '../../store/sorting/sortingStore'
import {observer} from 'mobx-react-lite'
import sort from './sorting.module.css'



const SortingPrice = observer (({products}) => { 
    // const{sortedProducts} = sortingStore; 
    
    const handleSortPrice = (e)=> {
        let data = {};
         data = Object.fromEntries(new FormData(e.target.parentNode));
        data.minPrice = (data.minPrice === '') ? -Infinity : +data.minPrice;
        data.maxPrice = (data.maxPrice === '') ? Infinity : +data.maxPrice
        console.log(data,products)
        sortingStore.setSortPrice(data, products);  
        
    }

  return (
    <div className={sort.price}>
        <h3 className={sort.h3}>Price </h3>
        <form className={sort.form} onChange={handleSortPrice}>
            <input 
                type="number" 
                name='minPrice' 
                placeholder='from'                
                className={sort.price_input} required/>
            <input 
                type="number" 
                name="maxPrice" 
                placeholder='to' 
                className={sort.price_input} required/>
        </form>
    </div>
  )
})

export default SortingPrice
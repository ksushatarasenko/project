import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'
import sortingStore from '../../store/sorting/sortingStore'
import sort from './sorting.module.css'


const DropdownSorting = observer(({products}) => {
    const {setSortPriceToLower, setSortPriceToDown, setSortNameToLower, setSortNameToDown, } = sortingStore;
    const [selectOption, setSelectOption] = useState('start')
    

    const handleSortChange = (e) => {
        sortingStore.sortPriceToLower = false;
        sortingStore.sortPriceToDown = false;
        sortingStore.sortNameToDown = false;
        sortingStore.sortNameToLower = false;
        
        let option = e.target.value
        if(option === 'priceDescending') {
            setSortPriceToLower(products);
        } else if (option === 'priceAscending' ){
            setSortPriceToDown(products);
        } else if (option === 'nameAscending') {
            setSortNameToLower(products);
        } else if (option === 'nameDescending'){
            setSortNameToDown(products)
        } 
        console.log(option)
        
        setSelectOption(option);     
    }

  return (
    <div className={sort.price}>
        <h3>Sorted </h3>
        <select value={selectOption} onChange={handleSortChange} className={sort.select}>
            <option value="start" className={sort.option}>Sort by...</option>
            <option value="priceDescending">Price high to low</option>
            <option value="priceAscending">Price low to high</option>
            <option value="nameAscending">Title А-Z</option>
            <option value="nameDescending">Title Z-A</option>
        </select>

    </div>
  )
})

export default DropdownSorting
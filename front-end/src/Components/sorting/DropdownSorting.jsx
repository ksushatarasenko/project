import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'
import sortingStore from '../../store/sorting/sortingStore'
import sort from './sorting.module.css'
import allProducts from '../../store/productsStore'


const DropdownSorting = observer(() => {
    const {setSortPriceToLower, setSortPriceToDown, setSortNameToLower, setSortNameToDown } = sortingStore;
    const {products} = allProducts;
    const [selectOption, setSelectOption] = useState('')
    

    const handleSortChange = (e) => {
        
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
        setTimeout(() => {
            setSelectOption(option); // Сброс выбора
        }, 100);
    }

  return (
    <div className={sort.price}>
        <h3>Sorted </h3>
        <select value={selectOption} onChange={handleSortChange} className={sort.select}>
            <option value="" className={sort.option}>Сортировать по ...</option>
            <option value="priceDescending">Цена по убыванию</option>
            <option value="priceAscending">Цена по возрастанию</option>
            <option value="nameAscending">Название А-Я</option>
            <option value="nameDescending">Название Я-А</option>
        </select>

    </div>
  )
})

export default DropdownSorting
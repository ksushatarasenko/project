import React from 'react'
import { observer } from 'mobx-react-lite'
import sortingStore from '../../store/sortingStore'
import sort from './sorting.module.css'


const DropdownSorting = observer(() => {
    const {sortByPrice, sortByName, setSortByPrice, setSortByName} = sortingStore;

    const handleSortChange = (e) => {
        if(e.target.value === 'price') {
            setSortByPrice();
        } else if (e.target.value === 'title') {
            setSortByName();
        }
    }

  return (
    <div className={sort.price}>
        <h3>Sorted </h3>
        <select name="sortType" onChange={handleSortChange}>
            <option value="">Сортировать по ...</option>
            <option value={sortByPrice}>Цена по убыванию</option>
            <option value="priceAscending">Цена по возрастанию</option>
            <option value={sortByName}>Название А-Я</option>
            <option value="nameDescending">Название Я-А</option>
        </select>

    </div>
  )
})

export default DropdownSorting
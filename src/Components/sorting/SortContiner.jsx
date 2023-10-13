import React from 'react'
import SortingPrice from './SortingPrice';
import DiscountSorting from './DiscountSorting';
import DropdownSorting from './DropdownSorting';
import sort from './sorting.module.css'


function SortContiner() {
  return (
    <div className={sort.wrapper}>
        <SortingPrice/>
        <DiscountSorting/>
        <DropdownSorting/>
    </div>
  )
}

export default SortContiner
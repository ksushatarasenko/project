import React from 'react'
import SortingPrice from './SortingPrice';
import DiscountSorting from './DiscountSorting';
import DropdownSorting from './DropdownSorting';
import sort from './sorting.module.css'


function SortContiner({products}) {
  return (
    <div className={sort.wrapper}>
        <SortingPrice products={products}/>
        <DiscountSorting products={products}/>
        <DropdownSorting products={products}/>
    </div>
  )
}

export default SortContiner
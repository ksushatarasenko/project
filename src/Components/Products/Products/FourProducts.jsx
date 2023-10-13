import React from 'react'
import Categories from '../Categories/Categories';

const FourProducts = ({categories}) => {
 const fourProducts = <Categories limit={4}/>
  return (
    <div>
        {fourProducts}
    </div>
  )
}

export default FourProducts
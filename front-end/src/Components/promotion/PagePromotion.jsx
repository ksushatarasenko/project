import React,{useEffect} from 'react'
import promo from './promotion.module.css'
import Promotion from './Promotion';
import SortingPrice from '../sorting/SortingPrice';
import DropdownSorting from '../sorting/DropdownSorting';
import productsStore from '../../store/productsStore';
import { observer } from 'mobx-react-lite';
import sortingStore from '../../store/sorting/sortingStore';
import { useLocation } from 'react-router-dom';


const PagePromotion = observer(() => {
  const {products, getAllProducts} = productsStore;
  const {sortedProducts} = sortingStore;
  const location = useLocation();
    
  useEffect(() => {
    sortingStore.resetSortedProducts();
  }, [location.pathname]);

    useEffect(() => {
        getAllProducts();
      }, [getAllProducts]);
    
    const saleProducts = products.filter((product) => product.discont_price);

  return (
    <div className={promo.wrapper}>
        <div className={promo.header}>
            <h2 className={promo.sale}>Sale</h2> 
            <div className={promo.sorting}>
                <SortingPrice products={saleProducts}/>
                <DropdownSorting products={saleProducts}/>
            </div>   
        </div>
        <Promotion sortedProducts={sortedProducts}/>
       
        
    </div>
  )
})

export default PagePromotion
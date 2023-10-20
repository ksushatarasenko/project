import React, { useEffect } from 'react'
import productsStore from '../../store/productsStore'; 
import promo from './promotion.module.css'
import { Link } from 'react-router-dom';
import cartStore
from '../../store/cartStore/cartStore';
import SortingPrice from '../sorting/SortingPrice';
import DropdownSorting from '../sorting/DropdownSorting';



function Promotion({limit}) {
  const {products, isLoading, getAllProducts} = productsStore;

  const handleAddToCart = (product) => {
    cartStore.addItem(product);
  }

  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

  const saleProducts = products.filter((product) => product.discont_price);

  return (
  <div>
    <h2 className={promo.sale}>Sale</h2>
    <div className={promo.wrapper}>
        {/* {<SortingPrice/>}
        {<DropdownSorting/>} */}
      </div>
    {isLoading ? (
      <p>Loading...</p>
    ) : (
      <div className={promo.wrapper}>
        {saleProducts.slice(0,limit).map((product) => (
          <div key={product.id} className={promo.cardProduct}>
            
            <div className={promo.image} >
                  <Link to={`/products/${product.id}`}>
                      <img 
                        src={`http://localhost:3333/${product.image}`} 
                        alt={product.id} 
                        />          
                  </Link>  
                  
                    <button className={promo.btn} 
                    onClick={() => handleAddToCart(product)}
                    >To cart</button>
              </div>

            <div className={promo.price}>
              <p className={promo.priceDiscount}>{product.discont_price} $</p> 
              <p className={promo.priceProduct}>{product.price} $</p>
              <p className={promo.pricePercent}>{((product.price-product.discont_price)*100/product.price).toFixed(0)} %</p>
            </div>
            <div className={promo.link}>
              <Link to={`/products/${product.id}`} className={promo.title}>
                {product.title}
              </Link>
            </div>
            
          </div>
        ))}
      </div>
  
    )}
    
  </div>
    )
}

export default Promotion
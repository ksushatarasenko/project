import React, { useEffect } from 'react'
import allProducts from '../../store/allProducts'; 
import promo from './promotion.module.css'
import { Link } from 'react-router-dom';

function Promotion() {
  const {products, isLoading, getAllProducts} = allProducts;

  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

  const saleProducts = products.filter((product) => product.discont_price);

  return (<div>
    <h2 className={promo.sale}>Sale</h2>
    {isLoading ? (
      <p>Loading...</p>
    ) : (
      <div className={promo.wrapper}>
        {saleProducts.map((product) => (
          <div key={product.id} className={promo.cardProduct}>
            <div className={promo.imgContainer}>
              <img 
              src={`http://localhost:3333/${product.image}`} 
              alt={product.id} 
              className={promo.image}/>
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
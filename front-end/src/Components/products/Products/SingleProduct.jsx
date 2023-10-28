
import { observer } from 'mobx-react-lite'; 
import productsStore from '../../../store/productsStore';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import cardProd from './singleProduct.module.css'
import cartStore from '../../../store/cartStore/cartStore'
import sortingStore from '../../../store/sorting/sortingStore';


const SingleProduct = observer(() => {
  const { id } = useParams(); 
  const { singleProduct, isLoading, getSingleProduct} = productsStore;
  const location = useLocation();

  const handleAddToCart = (product) => { 
    cartStore.addItem(product);
    
  }

  useEffect(() => {
    sortingStore.resetSortedProducts();
  },[location.pathname])

  useEffect(() => {  
    getSingleProduct(id);
  }, []);

 console.log(id)
 


  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
            (singleProduct.map((product) => (
            <div key={product.id} >
                <h2 className={cardProd.title}>{product.title}</h2>
                <div className={cardProd.wrapper}>
                 
                    <img 
                      src={`http://localhost:3333/${product.image}`} 
                      alt={product.id} 
                      className={cardProd.image}
                      />
                    
                                
                    <div className={cardProd.container_text}>
                        <div className={cardProd.price_container}>

                        {product.discont_price ? (
                                <>
                                    <p className={cardProd.price}>{product.discont_price}<span className={cardProd.valuts}>$</span></p> 
                                    <p className={cardProd.noPrice}>{product.price} $</p>
                                    <p className={cardProd.discount}>{((product.price-product.discont_price)*100/product.price).toFixed(0)} %</p>
                                </>
                                ) : <p className={cardProd.price}>{product.price} <span className={cardProd.valuts}>$</span> </p>}      
                        </div>
                        
                        <button 
                          className={cardProd.btn} 
                          onClick={() => handleAddToCart(product)}>To cart
                        </button>
                        
                        <div className={cardProd.line}></div>
                        <p className={cardProd.description}>{product.description}</p>
                    </div>
                    
                </div>               
            </div>   
            )))     
      )}
      {/* {isAddToCart && setIsAddToCart && <CartItem />} */}
     
      
    </div>
  );
});


export default SingleProduct;


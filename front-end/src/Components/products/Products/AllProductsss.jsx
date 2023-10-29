import React, { useState } from 'react';
import prod from './products.module.css'; 
import productsStore from '../../../store/productsStore'; 
import { observer } from 'mobx-react-lite'; 
import { useEffect } from 'react'; 
import { Link, useLocation } from 'react-router-dom'; 
import sortingStore from '../../../store/sorting/sortingStore';
import SortContiner from '../../sorting/SortContainer';
import cartStore from '../../../store/cartStore/cartStore';
import modal from '../../modalWindow/modal.module.css'
import Modal from '../../modalWindow/Modal';
import ModalAddItems from '../../modalWindow/ModalAddItems';

const AllProducts = observer(() => {
  const { products, isLoading, getAllProducts } = productsStore;
  const {sortedProducts} = sortingStore;
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  

  const handleAddToCart = (product) => {
    cartStore.addItem(product);
    setIsModalOpen(true); 
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  useEffect(() => {
    sortingStore.resetSortedProducts();
  }, [location.pathname]);
  
  useEffect(() => { 
      getAllProducts();   
  }, [getAllProducts]);
   
  return (
    <div>
      <div >
        {<SortContiner products={products}/>}
      </div>
      <div className={prod.wrapper}>
        {isLoading ? (<p>Loading...</p>) : 
        ((sortedProducts.length > 0 ? sortedProducts : products).map((product) => (
            <div key={product.id} className={prod.card}>

              <div className={prod.image} >
                  <Link to={`/products/${product.id}`}>
                      <img 
                        src={`http://localhost:3333/${product.image}`} 
                        alt={product.id} 
                        />          
                  </Link>  
                  
                    <button className={prod.btn} 
                    onClick={() => handleAddToCart(product)}
                    >To cart</button>
                   
              </div>

              <div className={prod.price}>
                  {product.discont_price ? (
                    <>
                      <p className={prod.priceProduct}>{product.discont_price} $</p> 
                      <p className={prod.noPrice}>{product.price} $</p>
                      <p className={prod.discount}>{((product.price-product.discont_price)*100/product.price).toFixed(0)} %</p>
                    </>
                  ) : <p>{product.price} $</p>}
              </div>

              <div className={prod.link}>
                <Link to={`/products/${product.id}`} className={prod.title}>
                  {product.title}
                </Link>   
              </div>
                       
            </div>
          ))
        )}
      </div>
      {isModalOpen && (
        <Modal
              isModalOpen={isModalOpen}
              setIsModalOpen = {() => setIsModalOpen(false)}
              wrapperClassName={modal.prodWrapper}
              contentClassName={modal.prodContent}
              textClassName={modal.prodText}
              btnClassName={modal.btn}
              >             
                <div >   
                  <div className={modal.prodContent}>
                    <div className={modal.prodItems}>
                      <ModalAddItems/>                     
                    </div>
                    <div className={modal.btnContainer}>
                      <button onClick={closeModal} className={modal.btnAllProduct}>Continue shopping</button>  
                      <Link to={'/order'}>
                        <button  className={modal.btnAllProductToCart}>Go to cart</button>
                      </Link>
                    </div>
                  </div>
                </div>          
        </Modal> 
      )}
       
    </div>
  );
});

export default AllProducts; 

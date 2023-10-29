
import React, {useEffect, useState} from 'react'
import productsStore from '../../../store/productsStore';
import { useLocation, useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import prod from '../Products/products.module.css'
import { Link } from 'react-router-dom';
import cartStore from '../../../store/cartStore/cartStore';
import SortContiner from '../../sorting/SortContainer';
import sortingStore from '../../../store/sorting/sortingStore';
import Modal from '../../modalWindow/Modal';
import ModalAddItems from '../../modalWindow/ModalAddItems';
import modal from '../../modalWindow/modal.module.css'


const SingleCategory = observer(() => {
  const {id} = useParams();
  const {singleCategory, isLoading,allCategories} = productsStore;
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
  },[location.pathname]);

  useEffect(() => {
    productsStore.getSingleCategory(id);
    
  }, [id]);

  const findCategories = allCategories.filter(category => (category.id) == id);
  const displayProducts = sortedProducts.length > 0 ? sortedProducts : singleCategory;
  console.log('сортирован массив',sortedProducts)
  console.log('товары одной категории',singleCategory)
  console.log('товары для отрисовки',displayProducts)


  return (
    <div>
        {findCategories[0] ? (
          <h1 className={prod.h1}> <span className={prod.span}>Category </span> {findCategories[0].title}</h1>
        ) : (
          isLoading && <p>Loading...</p>
        )}
      <div >
        {<SortContiner products={singleCategory}/>}
      </div>
      <div className={prod.wrapper}>
        {isLoading ? (<p>Loading...</p>) : 
        displayProducts.map ((product) => (
          
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
        }
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
      
     
})

export default SingleCategory;
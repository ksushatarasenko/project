
import { observer } from 'mobx-react-lite'; 
import productsStore from '../../../store/productsStore';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import cardProd from './singleProduct.module.css'
import cartStore from '../../../store/cartStore/cartStore'
import sortingStore from '../../../store/sorting/sortingStore';
import Modal from '../../modalWindow/Modal';
import modal from '../../modalWindow/modal.module.css'
import { Link } from 'react-router-dom';
import ModalAddItems from '../../modalWindow/ModalAddItems';


const SingleProduct = observer(() => {
  const { id } = useParams(); 
  const { singleProduct, isLoading, getSingleProduct} = productsStore;
  const location = useLocation();
  const imgRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const handleAddToCart = (product) => { 
    cartStore.addItem(product);
    setIsModalOpen(true)  
    console.log(isModalOpen)
  }

  const handleOnclickBigImg = () => {
    imgRef.current.classList.toggle(cardProd.big);
  }

  const closeModal = () => {
    setIsModalOpen(false);
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
                      onClick={handleOnclickBigImg}
                      ref={imgRef}
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
                        <h5>Description</h5>
                        <p className={cardProd.description}>{product.description}</p>
                    </div>
                    
                </div>               
            </div>   
            )))     
      )}
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


export default SingleProduct;


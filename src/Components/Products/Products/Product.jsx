
import { observer } from 'mobx-react-lite'; 
import singleProduct from '../../../store/singleProduct';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import cardProd from './singleProduct.module.css'
import Footer from '../../footer/Footer';


const Product = observer(() => {
  const { idProd } = useParams(); 
  const { product, isLoading } = singleProduct;

  useEffect(() => {
    singleProduct.getAllProduct(idProd);
  }, [idProd]);
 console.log(product)
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
            (product.map((product) => (
            <div key={product.id} >
                <h2 className={cardProd.title}>{product.title}</h2>
                <div className={cardProd.wrapper}>
                    <img src={`http://localhost:3333/${product.image}`} alt={product.id} className={cardProd.image}/>
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
                        
                        <button className={cardProd.btn}>To cart</button>
                        <div className={cardProd.line}></div>
                        <p className={cardProd.description}>{product.description}</p>
                    </div>
                    
                </div>               
            </div>   
            )))     
      )}
      <Footer/>
    </div>
  );
});


export default Product;


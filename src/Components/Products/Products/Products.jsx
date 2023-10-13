
import prod from './products.module.css'; 
import allProducts from '../../../store/allProducts'; 
import { observer } from 'mobx-react-lite'; 
import { useEffect } from 'react'; 
import { Link } from 'react-router-dom'; 
import sortingStore from '../../../store/sorting/sortingStore';
import SortContiner from '../../sorting/SortContiner';
import Footer from '../../footer/Footer';

const Products = observer(() => {
  
  const { products, isLoading, getAllProducts } = allProducts;
  const {sortedProducts} = sortingStore;
 
  
  useEffect(() => {
    getAllProducts();    
  }, [getAllProducts]); 

  useEffect(() => {   
    sortingStore.setProducts(products);
    console.log(sortedProducts)     
  }, []); 
  
 console.log(products)
 console.log(sortedProducts)
  return (
    <div>
      <div >
        {<SortContiner/>}
      </div>
      <div className={prod.wrapper}>
        {isLoading ? (<p>Loading...</p>) : 
        ((sortedProducts.length > 0 ? sortedProducts : products).map((product) => (
            <div key={product.id} className={prod.card}>
              <img src={`http://localhost:3333/${product.image}`} alt={product.id} className={prod.image} />
           
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
      <Footer/>
    </div>
  );
});

export default Products; 

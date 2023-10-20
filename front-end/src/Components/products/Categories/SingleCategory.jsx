
import React, {useEffect} from 'react'
import productsStore from '../../../store/productsStore';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import prod from '../Products/products.module.css'
import { Link } from 'react-router-dom';
import sort from '../../sorting/sorting.module.css'
import SortingPrice from '../../sorting/SortingPrice';
import DiscountSorting from '../../sorting/DiscountSorting';
import DropdownSorting from '../../sorting/DropdownSorting';
import cartStore from '../../../store/cartStore/cartStore';



const SingleCategory = observer(() => {
  const {id} = useParams();
  const {singleCategory, isLoading,allCategories} = productsStore;

  const handleAddToCart = (product) => {
    cartStore.addItem(product);
  }

  useEffect(() => {
    productsStore.getSingleCategory(id);
  }, [id]);

  useEffect(() => {
    productsStore.getAllCategories()
  }, [])

  const findCategories = allCategories.filter(category => (category.id) == id);
  
  return (
    <div>
        {findCategories[0] ? (
          <h1 className={prod.h1}> <span className={prod.span}>Category </span> {findCategories[0].title}</h1>
        ) : (
          isLoading && <p>Loading...</p>
        )}
      <div className={sort.wrapper}>
        {<SortingPrice/>}
        {<DiscountSorting/>}
        {<DropdownSorting/>}
      </div>
      <div className={prod.wrapper}>
        {isLoading ? (<p>Loading...</p>) : 
        (singleCategory.map((product) => (
          
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
    </div>
  );
      
     
})

export default SingleCategory;
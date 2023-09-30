
import prod from './products.module.css'; 
import allProducts from '../../../store/allProducts'; 
import { observer } from 'mobx-react-lite'; 
import { useEffect } from 'react'; 
import { Link } from 'react-router-dom'; 
import SortingPrice from '../../sorting/SortingPrice';
import DiscountSorting from '../../sorting/DiscountSorting';
import DropdownSorting from '../../sorting/DropdownSorting';
import sort from '../../sorting/sorting.module.css'
import sortingStore from '../../../store/sortingStore';

const Products = observer(() => {
  
  const { products, isLoading, getAllProducts } = allProducts;
 
  
  useEffect(() => {
    sortingStore.setProducts(products);
    getAllProducts();
  }, []); 

  return (
    <div>
      <div className={sort.wrapper}>
        {<SortingPrice/>}
        {<DiscountSorting/>}
        {<DropdownSorting/>}
      </div>
      <div className={prod.wrapper}>
        {isLoading ? (<p>Loading...</p>) : 
        (products.map((product) => (
            <div key={product.id} className={prod.card}>
              <img src={`http://localhost:3333/${product.image}`} alt={product.id} className={prod.image} />
           
              <div className={prod.price}>
                {product.discont_price ? (
                  <>
                    <p className={prod.price}>{product.discont_price} $</p> 
                    <p className={prod.noPrice}>{product.price} $</p>
                    <p className={prod.discount}>{((product.price-product.discont_price)*100/product.price).toFixed(0)} %</p>
                  </>
                ) : <p>{product.price} $</p>}
              </div>

              <Link to={`/products/${product.id}`} className={prod.title}>
                {product.title}
              </Link>
            
              
            </div>
          ))
        )}
      </div>
    </div>
  );
});

export default Products; 

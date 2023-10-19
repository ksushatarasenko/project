
import React, {useEffect} from 'react'
import singleCategory from '../../../store/singleCategories';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import prod from '../Products/products.module.css'
import { Link } from 'react-router-dom';
// import sortingStore from '../../../store/sortingStore';
import sort from '../../sorting/sorting.module.css'
import SortingPrice from '../../sorting/SortingPrice';
import DiscountSorting from '../../sorting/DiscountSorting';
import DropdownSorting from '../../sorting/DropdownSorting';
import Footer from '../../footer/Footer'

const SingleCategory = observer(() => {
  const {id} = useParams();
  const {category, isLoading} = singleCategory;

  useEffect(() => {
    singleCategory.getSingleCategory(id);
  }, [id]);

console.log(id)

  return (
    <div>
      <div className={sort.wrapper}>
        {<SortingPrice/>}
        {<DiscountSorting/>}
        {<DropdownSorting/>}
      </div>
      <div className={prod.wrapper}>
        {isLoading ? (<p>Loading...</p>) : 
        (category.map((product) => (
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
      
     
})

export default SingleCategory;
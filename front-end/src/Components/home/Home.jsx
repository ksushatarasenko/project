import Sale from '../sale/Sale'
import Discount from '../discount/Discount'
import { Link} from 'react-router-dom'
import Promotion from '../promotion/Promotion'
import Categories from '../products/Categories/Categories'
import home from './home.module.css'


const Home = () => {
  
  return (
    <div>
      
      <Sale/> 
        <div className={home.categoriesWrapper}>
          <div className={home.titleWrapper}>
            <h1 className={home.title}>Catalog</h1>
              <button className={home.btn}>
                  <Link to='/categories/all'>All catalog</Link>
              </button>
           </div>            
        </div>  
      <Categories limit={4} />   
      <Discount/>
      <h2 className={home.h2}>Sale</h2>
      <Promotion limit={4}/>
      
    </div>
  )
}

export default Home
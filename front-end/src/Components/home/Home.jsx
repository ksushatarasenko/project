import Footer from '../footer/Footer'
import Sale from '../sale/Sale'
import Discount from '../discount/Discount'
import { Link} from 'react-router-dom'
import Promotion from '../promotion/Promotion'
import Categories from '../products/Categories/Categories'
import home from './home.module.css'
import Header from '../header/Header'
// import FourProducts from '../Products/Products/FourProducts'


const Home = () => {
  
  return (
    <div>
      {/* <Header/> */}
      <Sale/> 
      <div className={home.categoriesWrapper}>
        <div className={home.titleWrapper}>
          <h1 className={home.title}>Catalog</h1>
            <button className={home.btn}>
                <Link to='/categories/all'>All catalog</Link>
            </button>
        </div>
        <Categories limit={4}  />
      </div>
      <Discount/>
      <Promotion limit={4}/>
      <Footer/>
    </div>
  )
}

export default Home
import Footer from '../footer/Footer'
import Sale from '../Sale/Sale'
import Discount from '../discount/Discount'
import FourCategiries from '../Products/Categories/FourCategiries'
import PromotionHome from '../Promotion/PromotionHome'

const Home = () => {

  return (
    <div>
      <Sale/> 
      <FourCategiries/>
      <Discount/>
      <PromotionHome/>
      <Footer/>
    </div>
  )
}

export default Home
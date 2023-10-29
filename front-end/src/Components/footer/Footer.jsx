
import footer from'./footer.module.css'
import Map from './Map/Map'
import { Link } from 'react-router-dom'
import instagram from '../image/instagram.png'
import whatsapp from '../image/watsapp.png'

function Footer() {
  return (
    <div className={footer.wrapper}>
      <div className={footer.container}>
        <div className={footer.contact}>
          <h2 className={footer.h2}>Contact</h2>
          <h1 className={footer.h1}>+4 999 999 99 99</h1>
          <div className={footer.socMedia}>
            <div className={footer.icon}>
              <Link to={'https://www.instagram.com/'} target='_blanket'>
                  <img src={instagram} 
                       alt="instagram" 
                       />Instagram
              </Link> 
            </div>
            <div className={footer.icon}>
              <Link to={'https://www.whatsapp.com/'}target='_blanket'>
                <img 
                  src={whatsapp} 
                  alt="logo" 
                  />WhatsApp
              </Link> 
            </div>
          </div>
          
        </div>
        <div className={footer.adres}>
          <h2 className={footer.h2}>Address</h2>
          <div className={footer.text}>
            <div className={footer.adress}>
                <h3  >
                  <Link to={'https://tel-ran.de/'} target='_blanket'>Linkstraße 2, 8 OG, 10785,
                  </Link> </h3>
                <h3  >
                  <Link to={'https://tel-ran.de/'} target='_blanket'>Berlin, Deutschland
                  </Link></h3>
            </div>
            
          </div>
          <div className={footer.text}>
            <p className={footer.p}>Working Hours:</p>
            <h4 className={footer.h4}>24 hours a day</h4>
          </div>
        </div>
        
      </div>
      <div >
        <Map/>
      </div>
      
    </div>
  )
}

export default Footer